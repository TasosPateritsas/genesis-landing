import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/routes";
import { isProductionIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionIndexable()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
