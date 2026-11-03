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
      <div className="hero-mint bg-hero-mint" aria-hidden />
      <div className="wrap-hero home-hero-inner">
        <p className="home-eyebrow hero-rise" style={rise("0.1s")}>
          {site.name.toUpperCase()} · {t.hero.place}
        </p>
        <h1 id="hero-heading" className="home-hero-title">
          <span className="gx-mask-line home-hero-line" style={{ "--line": 0 } as CSSProperties}>
            <span>{t.hero.line1}</span>
          </span>
          <span className="gx-mask-line home-hero-line is-accent" style={{ "--line": 1 } as CSSProperties}>
            <span>{t.hero.line2}</span>
          </span>
        </h1>
        <div className="home-hero-bottom hero-rise" style={rise("0.3s")}>
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
