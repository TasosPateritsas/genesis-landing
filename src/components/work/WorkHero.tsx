"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay } from "@/lib/reveal";
import { absoluteUrl, localizePath } from "@/lib/routes";

export function WorkHero() {
  const { locale, t } = useLocale();
  const page = t.workPage;
  const lines = page.titleLines;
  const home = { name: site.name, href: localizePath("/", locale) };
  const current = { name: page.breadcrumb, href: localizePath("/work", locale) };
  const crumbs = [home, current];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };

  return (
    <section className="work-hero work-page-hero" data-cursor="dark" aria-labelledby="work-hero-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="work-hero-grid" aria-hidden />
      <div className="wrap-hero">
        <nav aria-label="Breadcrumb" className="work-crumb gx-load">
          <Link href={home.href}>{home.name}</Link>
          <span aria-hidden>›</span>
          <span aria-current="page">{current.name}</span>
        </nav>
        <h1 id="work-hero-heading" className="work-page-title" aria-label={page.title}>
          {lines.map((line, index) => (
            <span
              key={line}
              className="gx-mask-line"
              style={{ "--line": index } as CSSProperties}
              aria-hidden
            >
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className="work-page-intro gx-load" style={revealDelay(0.25)}>
          {page.subtitle}
        </p>
      </div>
    </section>
  );
}
