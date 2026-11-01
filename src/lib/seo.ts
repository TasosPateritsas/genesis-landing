import type { Metadata } from "next";
import { headers } from "next/headers";
import { site } from "@/config/site";
import { dictionaries, type Locale } from "@/data/content";
import type { Project } from "@/data/projects";
import { localizePath, type PublicPath } from "@/lib/routes";

const HOME = {
  en: {
    title: "Genesis — Websites, Apps & AI Agents | Software Agency in Athens",
    description:
      "Three engineers in Athens building websites, eshops, apps, AI agents and AI workflows — and running the tech behind them as your in-house team.",
  },
  el: {
    title: "Genesis — Websites, Εφαρμογές & AI Agents | Agency Λογισμικού στην Αθήνα",
    description:
      "Τρεις μηχανικοί στην Αθήνα φτιάχνουμε websites, eshops, εφαρμογές, AI agents και AI workflows — και τρέχουμε την τεχνολογία τους σαν δική σας in-house ομάδα.",
  },
} as const;

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
  ogTitle,
  imageAlt,
}: {
  locale: Locale;
  path: PublicPath;
  title: string;
  description: string;
  ogTitle?: string;
  imageAlt?: string;
}): Promise<Metadata> {
  const preview = await isPreviewHost();
  const canonical = localizePath(path, locale);
  const socialTitle = ogTitle ?? title;

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
      title: socialTitle,
      description,
      images: [
        {
          url: "/og.svg",
          width: 1200,
          height: 630,
          alt: imageAlt ?? "Genesis — Athens tech studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.svg"],
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
    imageAlt: page.imageAlt,
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
    title: `${project.name} - Genesis`,
    description: project.intro[locale],
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
