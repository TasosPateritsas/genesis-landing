import type { Metadata } from "next";
import { headers } from "next/headers";
import { dictionaries, site, type Locale } from "@/data/content";
import { localizePath } from "@/lib/routes";

const HOME_EN = {
  title: "Genesis — We build your product, start to finish",
  description:
    "A software development agency in Athens, building websites, apps, and eshops for startups and small businesses — no technical team required.",
};

export async function isPreviewHost() {
  const headerStore = await headers();
  const raw = headerStore.get("x-forwarded-host") ?? headerStore.get("host") ?? "";
  const host = raw.split(",")[0]?.trim().split(":")[0] ?? "";
  return host.endsWith(".vercel.app");
}

export async function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: "/" | "/services" | "/team" | "/contact";
  title: string;
  description: string;
}): Promise<Metadata> {
  const preview = await isPreviewHost();
  const canonical = localizePath(path, locale);

  return {
    title,
    description,
    robots: preview
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: {
      canonical,
      languages: {
        en: localizePath(path, "en"),
        el: localizePath(path, "el"),
        "x-default": localizePath(path, "en"),
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "el" ? "el_GR" : "en_US",
      alternateLocale: locale === "el" ? ["en_US"] : ["el_GR"],
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: "Genesis — Athens tech studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.svg"],
    },
  };
}

export function homeMetadata(locale: Locale) {
  if (locale === "en") {
    return buildPageMetadata({ locale, path: "/", ...HOME_EN });
  }

  const hero = dictionaries.el.hero;
  return buildPageMetadata({
    locale,
    path: "/",
    title: `Genesis — ${hero.headline.replace(/\.$/, "")}`,
    description: hero.subtext,
  });
}

export function servicesMetadata(locale: Locale) {
  const page = dictionaries[locale].servicesPage;
  return buildPageMetadata({
    locale,
    path: "/services",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export function teamMetadata(locale: Locale) {
  const page = dictionaries[locale].teamPage;
  return buildPageMetadata({
    locale,
    path: "/team",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export function contactMetadata(locale: Locale) {
  const page = dictionaries[locale].contactPage;
  return buildPageMetadata({
    locale,
    path: "/contact",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}
