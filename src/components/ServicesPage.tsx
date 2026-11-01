"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceDetail } from "@/components/ServiceDetail";
import { site } from "@/config/site";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";
import { revealDelay, stagger, useReveal } from "@/lib/reveal";
import { absoluteUrl, localizePath } from "@/lib/routes";

function headingLabel(lines: Array<Array<{ text: string }>>) {
  return lines.map((line) => line.map((run) => run.text).join("")).join(" ");
}

export function ServicesPage() {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();
  const page = t.servicesPage;
  const [dividerRef, dividerOn] = useReveal<HTMLDivElement>();
  const [closingRef, closingOn] = useReveal<HTMLElement>();
  const home = { name: site.name, href: localizePath("/", locale) };
  const current = { name: t.nav.services, href: localizePath("/services", locale) };
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
    <>
      <Header />
      <main id="main" className="services-page">
        <section className="services-hero" aria-labelledby="services-hero-heading">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <div className="services-hero-wrap">
            <nav aria-label="Breadcrumb" className="services-breadcrumb gx-load">
              <Link href={home.href}>{home.name}</Link>
              <span aria-hidden>›</span>
              <span aria-current="page">{current.name}</span>
            </nav>
            <h1 id="services-hero-heading" className="services-hero-title" aria-label={headingLabel(page.titleLines)}>
              {page.titleLines.map((line, index) => (
                <span
                  key={line.map((run) => run.text).join("")}
                  className="gx-mask-line"
                  style={{ "--line": index } as CSSProperties}
                  aria-hidden
                >
                  <span>
                    {line.map((run) =>
                      run.accent ? (
                        <span key={run.text} className="is-accent">
                          {run.text}
                        </span>
                      ) : (
                        run.text
                      ),
                    )}
                  </span>
                </span>
              ))}
            </h1>
            <p className="services-hero-intro gx-load" style={revealDelay(0.25)}>
              {page.subtitle}
            </p>
            <nav aria-label={t.nav.services} className="services-chips gx-load" style={revealDelay(0.35)}>
              {page.chips.map((chip) => (
                <a key={chip.href} href={chip.href} className="service-chip">
                  {chip.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div ref={dividerRef} className={dividerOn ? "services-divider is-revealed" : "services-divider"}>
          <span className="services-divider-line is-left" aria-hidden />
          <p className="services-divider-label">{page.divider}</p>
          <span className="services-divider-line is-right" aria-hidden />
        </div>

        <div className="services-blocks wrap-content">
          {page.blocks.map((block, index) => (
            <ServiceDetail
              key={block.id}
              block={block}
              includedLabel={page.includedLabel}
              cta={page.cta}
              proofLabel={page.proof}
              proofHref={hrefFor("/work")}
              fromRight={index % 2 === 1}
            />
          ))}
        </div>

        <section
          ref={closingRef}
          className={closingOn ? "services-closing is-revealed" : "services-closing"}
          aria-labelledby="services-closing-heading"
        >
          <div className="wrap-content">
            <h2 id="services-closing-heading" className="services-closing-title gx-up">
              {page.closingHeading}
            </h2>
            <p className="services-closing-text gx-up" style={stagger(1)}>
              {page.closingSubtext}
            </p>
            <Link href={contactHref(locale, "message")} className="services-primary gx-up" style={stagger(2)}>
              {page.closingCta}
              <span className="services-primary-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer variant="mint" />
    </>
  );
}
