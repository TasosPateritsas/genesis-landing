import type { Metadata } from "next";
import { site } from "@/config/site";
import { dictionaries, type Locale } from "@/data/content";
import type { Project } from "@/data/projects";
import { localizePath, type PublicPath } from "@/lib/routes";
import { isProductionIndexable } from "@/lib/siteUrl";

const HOME = {
  en: {
    title: "Genesis — Software Agency in Athens | Websites, Apps & AI",
    description:
      "Three engineers in Athens building websites, eshops, apps, AI agents and AI workflows — and running the tech behind them as your in-house team.",
  },
  el: {
    title: "Genesis — Κατασκευή ιστοσελίδων, εφαρμογών & AI | Αθήνα",
    description:
      "Κατασκευή ιστοσελίδων, eshop, εφαρμογών και AI agents στην Αθήνα. Τρεις μηχανικοί που χτίζουν και υποστηρίζουν το προϊόν σας σαν in-house ομάδα.",
  },
} as const;

export function indexingRobots(): Metadata["robots"] {
  return isProductionIndexable()
    ? { index: true, follow: true }
    : { index: false, follow: false };
}

/** `title` is the page name. The root template appends " | Genesis", except for absolute homepage titles. */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  absolute = false,
}: {
  locale: Locale;
  path: PublicPath;
  title: string;
  description: string;
  absolute?: boolean;
}): Metadata {
  const canonical = localizePath(path, locale);
  const socialTitle = absolute ? title : `${title} | Genesis`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    robots: indexingRobots(),
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
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export function homeMetadata(locale: Locale) {
  return buildPageMetadata({ locale, path: "/", ...HOME[locale], absolute: true });
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

export function workMetadata(locale: Locale) {
  const page = dictionaries[locale].workPage;
  return buildPageMetadata({
    locale,
    path: "/work",
    title: page.metaTitle,
    description: page.metaDescription,
  });
}

export function projectMetadata(locale: Locale, project: Project) {
  return buildPageMetadata({
    locale,
    path: `/work/${project.slug}` as PublicPath,
    title: project.metaTitle[locale],
    description: project.metaDescription?.[locale] ?? project.intro[locale],
  });
}

export function legalMetadata(locale: Locale, kind: "privacy" | "cookies") {
  const page = dictionaries[locale].legal[kind];
  return buildPageMetadata({
    locale,
    path: kind === "privacy" ? "/privacy" : "/cookies",
    title: page.title,
    description: page.description,
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
