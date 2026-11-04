"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import { site } from "@/config/site";
import { teamHeroCopy } from "@/data/teamPage";
import { teamMembers } from "@/data/team";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay } from "@/lib/reveal";
import { absoluteUrl, localizePath, SITE_URL } from "@/lib/routes";

export function TeamHero() {
  const { locale, t } = useLocale();
  const lines = teamHeroCopy.titleLines[locale];
  const home = { name: site.name, href: localizePath("/", locale) };
  const current = { name: t.nav.team, href: localizePath("/team", locale) };
  const crumbs = [home, current];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: absoluteUrl(crumb.href),
        })),
      },
      ...teamMembers.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.jobTitle[locale],
        worksFor: { "@id": `${SITE_URL}/#org` },
        sameAs: [member.github, member.linkedin],
        ...(member.photo ? { image: absoluteUrl(member.photo) } : {}),
      })),
    ],
  };

  return (
    <section className="team-hero" aria-labelledby="team-hero-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap-hero">
        <div className="team-hero-grid">
          <nav aria-label="Breadcrumb" className="team-hero-crumb gx-load">
            <Link href={home.href}>{home.name}</Link>
            <span aria-hidden>›</span>
            <span aria-current="page">{current.name}</span>
          </nav>
          <h1 id="team-hero-heading" className="team-hero-title" aria-label={lines.join(" ")}>
            {lines.map((line, index) => (
              <span key={line} className="gx-mask-line" style={{ "--line": index } as CSSProperties} aria-hidden>
                <span className={index === lines.length - 1 ? "is-accent" : undefined}>{line}</span>
              </span>
            ))}
          </h1>
          <p className="team-hero-intro gx-load" style={revealDelay(0.25)}>
            {teamHeroCopy.intro[locale]}
          </p>
          <div className="team-hero-media gx-load" style={revealDelay(0.35)}>
            <div className="team-hero-shot">
              {site.images.teamGroup ? (
                <Image
                  src={site.images.teamGroup}
                  alt={t.teamPage.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1300px) 540px, (min-width: 1024px) 460px, 100vw"
                  className="object-cover"
                />
              ) : (
                <span className="team-photo-label">{t.team.photoSoon}</span>
              )}
            </div>
            <p className="team-hero-caption">
              <span className="team-hero-names">
                {teamMembers.map((member, index) => (
                  <Fragment key={member.id}>
                    {index > 0 ? <span className="team-hero-dot" aria-hidden /> : null}
                    <span>{member.shortName[locale]}</span>
                  </Fragment>
                ))}
              </span>
              <span className="team-hero-place">{teamHeroCopy.location[locale]}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
