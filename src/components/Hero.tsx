"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 md:pt-[4.25rem]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-mint absolute inset-0" aria-hidden />

      <div className="section-pad container-narrow relative flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-16 pt-16 md:min-h-[calc(100svh-4.25rem)] md:pb-24 md:pt-20">
        <div className="max-w-3xl animate-hero-copy">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted md:text-sm">
            {t.hero.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 text-[clamp(2.1rem,5.2vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-ink"
          >
            {t.hero.headline}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {t.hero.subtext}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong bg-bg-elevated/70 px-6 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
