import { mkdirSync, readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";

export type WaitlistRole = "couple" | "venue" | "pro" | null;
export type WaitlistSource = "home" | "weddingflow";
export type WaitlistLocale = "en" | "el";

export type WaitlistEntry = {
  email: string;
  role: WaitlistRole;
  locale: WaitlistLocale;
  source: WaitlistSource;
  created_at: string;
  consent_text: string;
  consent_page: string;
};

const STORE_PATH = join(process.cwd(), ".data", "waitlist.json");

function readAll(): WaitlistEntry[] {
  try {
    if (!existsSync(STORE_PATH)) return [];
    const raw = readFileSync(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as WaitlistEntry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeAll(entries: WaitlistEntry[]) {
  mkdirSync(dirname(STORE_PATH), { recursive: true });
  writeFileSync(STORE_PATH, JSON.stringify(entries, null, 2), "utf8");
}

export function addWaitlistEntry(
  entry: Omit<WaitlistEntry, "created_at">,
): { ok: true; created: boolean } {
  const email = entry.email.trim().toLowerCase();
  const all = readAll();
  if (all.some((row) => row.email === email)) {
    return { ok: true, created: false };
  }
  all.push({ ...entry, email, created_at: new Date().toISOString() });
  writeAll(all);
  return { ok: true, created: true };
}
