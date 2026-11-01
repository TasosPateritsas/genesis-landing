"use client";

import Link from "next/link";
import { site } from "@/config/site";
import type { Project } from "@/data/projectModel";
import { projectChrome } from "@/data/projectChrome";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay } from "@/lib/reveal";
import { absoluteUrl, localizePath } from "@/lib/routes";

export function CaseHero({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = projectChrome(locale);
  const title = project.title[locale];
  const home = { name: site.name, href: localizePath("/", locale) };
  const work = { name: locale === "el" ? "Έργα" : "Work", href: localizePath("/work", locale) };
  const current = {
    name: title,
    href: localizePath(`/work/${project.slug}`, locale),
  };
  const crumbs = [home, work, current];
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
  const meta = [
    [copy.client, project.meta.client[locale]],
    [copy.did, project.meta.whatWeDid[locale]],
    [copy.category, project.meta.category[locale]],
    [copy.year, project.meta.year],
  ];

  return (
    <section className="work-hero case-hero" data-cursor="dark" aria-labelledby="case-hero-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="work-hero-grid" aria-hidden />
      <div className="wrap-hero case-hero-inner">
        <nav aria-label={locale === "el" ? "Διαδρομή" : "Breadcrumb"} className="work-crumb gx-load">
          <Link href={home.href}>{home.name}</Link>
          <span aria-hidden>›</span>
          <Link href={work.href}>{work.name}</Link>
          <span aria-hidden>›</span>
          <span aria-current="page">{title}</span>
        </nav>
        <div className="case-hero-row">
          <div className="case-hero-copy">
            <h1 id="case-hero-heading" className="case-hero-title">
              <span className="gx-mask-line">
                <span>{title}</span>
              </span>
            </h1>
            <p className="case-hero-intro gx-load" style={revealDelay(0.25)}>
              {project.intro[locale]}
            </p>
          </div>
          <a
            className="case-live gx-load"
            style={revealDelay(0.35)}
            href={project.liveUrl[locale]}
            target="_blank"
            rel="noopener"
          >
            {copy.visit}
            <svg className="case-live-arrow" width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M3 11L11 3M11 3H5.5M11 3V8.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <dl className="case-meta">
          {meta.map(([label, value], index) => (
            <div key={label} className="case-meta-item gx-load" style={revealDelay(0.55 + index * 0.1)}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
