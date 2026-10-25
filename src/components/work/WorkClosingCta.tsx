"use client";

import Link from "next/link";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";

export function WorkClosingCta() {
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
