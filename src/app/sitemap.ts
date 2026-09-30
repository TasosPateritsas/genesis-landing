import type { MetadataRoute } from "next";
import { absoluteUrl, localizePath, publicRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: absoluteUrl(localizePath(route.path, "en")),
    lastModified,
    alternates: {
      languages: {
        en: absoluteUrl(localizePath(route.path, "en")),
        el: absoluteUrl(localizePath(route.path, "el")),
      },
    },
  }));
}
