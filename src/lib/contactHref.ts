import type { Locale } from "@/data/content";
import { localizePath } from "@/lib/routes";

/** `"booking"` adds `#booking`, which opens the Calendly popup on arrival. */
export function contactHref(locale: Locale, intent: "message" | "booking" = "message") {
  const hash = intent === "booking" ? "#booking" : "";
  return `${localizePath("/contact", locale)}${hash}`;
}
