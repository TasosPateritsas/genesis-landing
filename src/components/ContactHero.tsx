"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay } from "@/lib/reveal";
import { absoluteUrl, localizePath } from "@/lib/routes";

export function ContactHero() {
  const { locale, t } = useLocale();
  const hero = t.contactPage.hero;
  const home = { name: site.name, href: localizePath("/", locale) };
  const current = { name: t.nav.contact, href: localizePath("/contact", locale) };
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
    <section className="contact-hero" data-cursor="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap-hero">
        <nav aria-label="Breadcrumb" className="contact-breadcrumb gx-load">
          <Link href={home.href}>{home.name}</Link>
          <span className="contact-breadcrumb-sep" aria-hidden>
            ›
          </span>
          <span aria-current="page">{current.name}</span>
        </nav>
        <div className="contact-hero-grid">
          <h1 className="contact-hero-title" aria-label={hero.titleLines.join(" ")}>
            {hero.titleLines.map((line, index) => (
              <span key={line} className="gx-mask-line" style={{ "--line": index } as CSSProperties} aria-hidden>
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="contact-hero-intro gx-load" style={revealDelay(0.25)}>
            {hero.intro}
          </p>
        </div>
      </div>
    </section>
  );
}
