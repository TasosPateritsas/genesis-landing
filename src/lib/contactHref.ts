import type { Locale } from "@/data/content";

/** Contact page URL that keeps the current language via the ?lang= parameter. */
export function contactHref(locale: Locale, tab: "message" | "booking" = "message") {
  const hash = tab === "booking" ? "#booking" : "";
  return `/contact?lang=${locale}${hash}`;
}
