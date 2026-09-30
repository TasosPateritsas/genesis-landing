import type { Locale } from "@/data/content";
import { localizePath } from "@/lib/routes";

/** Contact page in the current language, with the message or booking tab active. */
export function contactHref(locale: Locale, tab: "message" | "booking" = "message") {
  const hash = tab === "booking" ? "#booking" : "";
  return `${localizePath("/contact", locale)}${hash}`;
}
