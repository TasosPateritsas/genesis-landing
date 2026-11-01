"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";

function rise(delay: string): CSSProperties {
  return { "--hero-delay": delay } as CSSProperties;
}

export function Hero() {
  const { locale, t } = useLocale();

  return (
    <section id="top" className="home-hero" aria-labelledby="hero-heading">
      <div className="hero-mint" aria-hidden />
      <div className="wrap-hero home-hero-inner">
        <p className="home-eyebrow hero-rise" style={rise("0s")}>
          {site.name.toUpperCase()} · {t.hero.place}
        </p>
        <h1 id="hero-heading" className="home-hero-title hero-rise" style={rise("0.12s")}>
          <span className="home-hero-line">{t.hero.line1}</span>
          <span className="home-hero-line is-accent">{t.hero.line2}</span>
        </h1>
        <div className="home-hero-bottom hero-rise" style={rise("0.24s")}>
          <p className="home-hero-lead">{t.hero.subtext}</p>
          <div className="home-hero-actions">
            <Link href={contactHref(locale, "message")} className="btn-primary home-hero-primary group">
              {t.hero.primaryCta}
              <span className="cta-arrow" aria-hidden>
                →
              </span>
            </Link>
            <a href="#work" className="home-hero-secondary">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
