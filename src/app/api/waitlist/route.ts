import { NextResponse } from "next/server";
import { addWaitlistEntry, type WaitlistLocale, type WaitlistRole, type WaitlistSource } from "@/lib/waitlistStore";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "local";
}

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  let body: {
    email?: string;
    role?: WaitlistRole;
    locale?: WaitlistLocale;
    source?: WaitlistSource;
    consent_text?: string;
    consent_page?: string;
    company_website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot — pretend success
  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (limited(clientIp(request))) {
    return NextResponse.json({ ok: false, error: "rate_limit" }, { status: 429 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }

  const role = body.role === "couple" || body.role === "venue" || body.role === "pro" ? body.role : null;
  const locale = body.locale === "el" ? "el" : "en";
  const source = body.source === "weddingflow" ? "weddingflow" : "home";
  const consent_text =
    typeof body.consent_text === "string" && body.consent_text.trim()
      ? body.consent_text.trim()
      : locale === "el"
        ? "Θα χρησιμοποιήσουμε το email σας μόνο για να σας ενημερώσουμε για το launch."
        : "We'll only use your email to tell you about the launch.";
  const consent_page =
    typeof body.consent_page === "string" && body.consent_page.trim()
      ? body.consent_page.trim()
      : locale === "el"
        ? "/el/privacy"
        : "/privacy";

  const result = addWaitlistEntry({
    email,
    role,
    locale,
    source,
    consent_text,
    consent_page,
  });

  // No confirmation email — local mock store only (no mailer / DB in repo).
  return NextResponse.json({ ok: true, created: result.created });
}
