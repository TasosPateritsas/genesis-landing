import type { MetadataRoute } from "next";
import type { Locale } from "@/data/content";
import { absoluteUrl, localizePath, publicRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const locales: Locale[] = ["en", "el"];

  return publicRoutes.flatMap((route) => {
    const languages = {
      en: absoluteUrl(localizePath(route.path, "en")),
      el: absoluteUrl(localizePath(route.path, "el")),
    };

    return locales.map((locale) => ({
      url: absoluteUrl(localizePath(route.path, locale)),
      lastModified,
      alternates: { languages },
    }));
  });
}
