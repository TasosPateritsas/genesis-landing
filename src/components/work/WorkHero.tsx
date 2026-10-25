"use client";

import Link from "next/link";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";

export function WorkHero({
  current,
}: {
  current?: string;
}) {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const page = t.workPage;

  return (
    <div className="work-hero" data-cursor="dark">
      <div className="work-hero-grid" aria-hidden />
      <div className="section-pad container-narrow relative pb-16 pt-[calc(4rem+40px)] md:pb-24 md:pt-[calc(4.25rem+40px)]">
        <p className="text-xs font-medium text-[#7FCDB2]">
          <Link href={hrefFor("/")} className="hover:text-white">
            Genesis
          </Link>
          <span aria-hidden> › </span>
          {current ? (
            <>
              <Link href={hrefFor("/work")} className="hover:text-white">
                {page.breadcrumb}
              </Link>
              <span aria-hidden> › </span>
              <span>{current}</span>
            </>
          ) : (
            <span>{page.breadcrumb}</span>
          )}
        </p>
        <h1 className="mt-6 max-w-[760px] text-[clamp(34px,4.4vw,52px)] font-semibold leading-[1.12] tracking-[-0.03em] text-white">
          {page.title}
        </h1>
        <p className="mt-4 max-w-[620px] text-lg leading-relaxed text-white/80">{page.subtitle}</p>
      </div>
    </div>
  );
}
