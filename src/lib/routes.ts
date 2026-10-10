import type { Locale } from "@/data/content";

export const SITE_URL = "https://genesis.studio";

/** Add a page here and the sitemap picks up both language versions. */
export const publicRoutes = [
  { path: "/" },
  { path: "/services" },
  { path: "/team" },
  { path: "/contact" },
] as const;

export type PublicPath = (typeof publicRoutes)[number]["path"];

export function stripLocalePrefix(pathname: string) {
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (normalized === "/el") return "/";
  if (normalized.startsWith("/el/")) return normalized.slice(3) || "/";
  return normalized || "/";
}

export function localizePath(href: string, locale: Locale) {
  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const [pathname = "/", query] = withoutHash.split("?");
  const bare = stripLocalePrefix(pathname.startsWith("/") ? pathname : `/${pathname}`);
  const localized = locale === "el" ? (bare === "/" ? "/el" : `/el${bare}`) : bare;
  return `${localized}${query ? `?${query}` : ""}${hash}`;
}

export function absoluteUrl(path: string) {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path}`;
}
