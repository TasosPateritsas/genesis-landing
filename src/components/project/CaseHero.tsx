"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { caseCopy } from "@/data/projectCopy";
import type { Project } from "@/data/projectTypes";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { revealDelay } from "@/lib/reveal";
import { absoluteUrl, localizePath } from "@/lib/routes";

export function CaseHero({ project }: { project: Project }) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const copy = caseCopy(locale);
  const name = project.name[locale];
  const lines = project.titleLines?.[locale] ?? [name];
  const home = { name: site.name, href: localizePath("/", locale) };
  const work = { name: locale === "el" ? "Έργα" : "Work", href: localizePath("/work", locale) };
  const crumbs = [home, work, { name, href: localizePath(`/work/${project.slug}`, locale) }];
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
    [copy.metaClient, project.client[locale]],
    [copy.metaDid, project.services[locale]],
    [copy.metaCategory, `${project.type[locale]} · ${project.industry[locale]}`],
    [copy.metaYear, project.year],
  ];

  return (
    <header className="case-hero" data-cursor="dark">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="work-hero-grid" aria-hidden />
      <div className="wrap-hero" style={{ position: "relative" }}>
        <nav aria-label="Breadcrumb" className="work-crumb case-in">
          <Link href={hrefFor("/")}>{site.name}</Link>
          <span aria-hidden> › </span>
          <Link href={hrefFor("/work")}>{work.name}</Link>
          <span aria-hidden> › </span>
          <span aria-current="page">{name}</span>
        </nav>
        <div className="case-hero-row">
          <div>
            <h1 className="case-title" aria-label={name}>
              {lines.map((line, index) => (
                <span key={line} className="gx-mask-line" style={{ "--line": index } as CSSProperties} aria-hidden>
                  <span>{line}</span>
                </span>
              ))}
            </h1>
            <p className="case-intro case-in" style={revealDelay(0.25)}>
              {project.intro[locale]}
            </p>
          </div>
          {project.liveUrl ? (
            <a
              className="case-live case-in"
              style={revealDelay(0.35)}
              href={project.liveUrl[locale]}
              target="_blank"
              rel="noopener"
            >
              {copy.visitLive}
              <svg className="case-live-arrow" width="14" height="14" viewBox="0 0 14 14" aria-hidden>
                <path d="M3 11L11 3M5 3h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
          ) : (
            <p className="case-soon case-in" style={revealDelay(0.35)}>
              <span className="case-soon-dot" aria-hidden />
              {copy.comingSoon}
            </p>
          )}
        </div>
        <div className="case-rule" />
        <dl className="case-meta">
          {meta.map(([label, value], index) => (
            <div key={label} className="case-in" style={revealDelay(0.55 + index * 0.1)}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
