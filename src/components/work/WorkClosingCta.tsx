"use client";

import Link from "next/link";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

function WorkClosingPlain() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();

  return (
    <section className="contact-teaser" aria-labelledby="work-cta-heading">
      <div className="section-pad container-narrow py-16 text-center md:py-[104px]">
        <h2
          id="work-cta-heading"
          className="text-[clamp(28px,3.4vw,42px)] font-bold tracking-[-0.02em] text-[#15201C]"
        >
          {t.workPage.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-lg leading-relaxed text-[#5A675F]">
          {t.workPage.ctaBody}
        </p>
        <Link
          href={hrefFor("/contact")}
          className="btn-primary mt-7 inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-semibold"
        >
          {t.nav.cta}
        </Link>
      </div>
    </section>
  );
}

function WorkClosingDark() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [ref, on] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={on ? "work-closing is-revealed" : "work-closing"}
      data-cursor="dark"
      aria-labelledby="work-cta-heading"
    >
      <div className="wrap-hero">
        <h2 id="work-cta-heading" className="work-closing-title gx-up">
          {t.workPage.ctaTitle}
        </h2>
        <p className="work-closing-text gx-up" style={stagger(1)}>
          {t.workPage.ctaBody}
        </p>
        <Link href={hrefFor("/contact")} className="work-closing-cta gx-up" style={stagger(2)}>
          {t.nav.cta}
          <span className="work-closing-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

function WorkClosingLight() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [ref, on] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={on ? "case-closing is-revealed" : "case-closing"}
      aria-labelledby="case-closing-heading"
    >
      <div className="wrap-hero">
        <h2 id="case-closing-heading" className="case-closing-title gx-up">
          {t.workPage.ctaTitle}
        </h2>
        <p className="case-closing-text gx-up" style={stagger(1)}>
          {t.workPage.ctaBody}
        </p>
        <Link href={hrefFor("/contact")} className="case-closing-cta gx-up" style={stagger(2)}>
          {t.nav.cta}
          <span className="case-closing-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}

export function WorkClosingCta({ tone = "plain" }: { tone?: "plain" | "dark" | "light" }) {
  if (tone === "dark") return <WorkClosingDark />;
  if (tone === "light") return <WorkClosingLight />;
  return <WorkClosingPlain />;
}
