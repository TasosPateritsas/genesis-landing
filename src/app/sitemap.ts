import type { MetadataRoute } from "next";
import type { Locale } from "@/data/content";
import { absoluteUrl, localizePath, publicRoutes } from "@/lib/routes";

const locales: Locale[] = ["en", "el"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(localizePath(route.path, locale)),
      lastModified,
      alternates: {
        languages: {
          en: absoluteUrl(localizePath(route.path, "en")),
          el: absoluteUrl(localizePath(route.path, "el")),
        },
      },
    })),
  );
}
