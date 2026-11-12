/**
 * Site URL and contact email come only from env vars, so no domain is hardcoded anywhere.
 * NEXT_PUBLIC_* values are inlined at build time: change them in Vercel, then redeploy.
 * Keep this file free of "@/" imports: next.config.ts imports it for the launch check.
 */

const LOCAL_URL = "http://localhost:3000";

/** Shown, not linked, wherever the email appears until NEXT_PUBLIC_CONTACT_EMAIL is set. */
export const EMAIL_PLACEHOLDER = "hello@[domain]";

/** Accepts only a bare origin: https, no path, query or trailing slash. */
export function parseSiteUrl(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.origin === value ? value : null;
  } catch {
    return null;
  }
}

export function parseEmail(value: string | undefined): string | null {
  const email = value?.trim();
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

/** The real public domain. Only this makes the site indexable. */
export const CONFIGURED_SITE_URL = parseSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

/** Vercel exposes these to Next.js builds; a preview deployment gets its own URL. */
function vercelUrl(): string | null {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  const host =
    vercelEnv === "production"
      ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      : vercelEnv === "preview"
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : undefined;
  return host ? `https://${host}` : null;
}

/** Origin used for canonical URLs, the sitemap, Open Graph and JSON-LD. */
export const SITE_URL = CONFIGURED_SITE_URL ?? vercelUrl() ?? LOCAL_URL;

export const CONTACT_EMAIL = parseEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL);

/** What still has to be set before launch. Production builds print these as warnings. */
export function launchWarnings(): string[] {
  const warnings: string[] = [];
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!CONFIGURED_SITE_URL) {
    warnings.push(
      rawUrl
        ? `NEXT_PUBLIC_SITE_URL "${rawUrl}" is ignored: use a bare https origin, no path or trailing slash.`
        : "NEXT_PUBLIC_SITE_URL is not set.",
      `The site is noindex and canonical URLs use ${SITE_URL}.`,
    );
  }
  if (!CONTACT_EMAIL) {
    const rawEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    warnings.push(
      rawEmail
        ? `NEXT_PUBLIC_CONTACT_EMAIL "${rawEmail}" is not a valid address; the site shows ${EMAIL_PLACEHOLDER}.`
        : `NEXT_PUBLIC_CONTACT_EMAIL is not set; the site shows ${EMAIL_PLACEHOLDER}.`,
    );
  }
  return warnings;
}
