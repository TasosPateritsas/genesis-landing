import type { Metadata } from "next";
import { CONFIGURED_SITE_URL } from "@/config/env";
import { site } from "@/config/site";
import { dictionaries, type Locale } from "@/data/content";
import type { Project } from "@/data/projects";
import { localizePath, type PublicPath } from "@/lib/routes";

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

/** Indexable only on Vercel production with the real domain set, never on the vercel.app fallback. */
export function isProductionIndexable() {
  return process.env.VERCEL_ENV === "production" && CONFIGURED_SITE_URL !== null;
}

function titled(title: string): Metadata["title"] {
  if (title.startsWith("Genesis —") || title.endsWith(" | Genesis")) return { absolute: title };
  if (title.endsWith(" - Genesis")) return title.slice(0, -" - Genesis".length);
  return title;
}

export async function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogTitle,
}: {
  locale: Locale;
  path: PublicPath;
  title: string;
  description: string;
  ogTitle?: string;
}): Promise<Metadata> {
  const indexable = isProductionIndexable();
  const canonical = localizePath(path, locale);
  const socialTitle = ogTitle ?? title;

  return {
    title: titled(title),
    description,
    robots: indexable
      ? { index: true, follow: true }
      : { index: false, follow: false },
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
  return buildPageMetadata({ locale, path: "/", ...HOME[locale] });
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
    ogTitle: page.ogTitle,
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
  const meta = project.meta;
  return buildPageMetadata({
    locale,
    path: `/work/${project.slug}` as PublicPath,
    title: meta?.title[locale] ?? `${project.name[locale]} - Genesis`,
    description: meta?.description?.[locale] ?? project.intro[locale],
  });
}

export function legalMetadata(locale: Locale, kind: "privacy" | "cookies") {
  const page = dictionaries[locale].legal[kind];
  return buildPageMetadata({
    locale,
    path: kind === "privacy" ? "/privacy" : "/cookies",
    title: `${page.title} - ${site.name}`,
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
