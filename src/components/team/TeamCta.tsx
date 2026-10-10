"use client";

import Link from "next/link";
import { teamCtaCopy } from "@/data/teamCta";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";

export function TeamCta() {
  const { locale } = useLocale();

  return (
    <section className="team-cta" aria-labelledby="team-cta-heading">
      <div className="section-pad container-narrow team-cta-inner">
        <div>
          <h2 id="team-cta-heading">{teamCtaCopy.heading[locale]}</h2>
          <p>{teamCtaCopy.subtext[locale]}</p>
        </div>
        <Link href={contactHref(locale, "booking")} className="btn-primary team-cta-button">
          {teamCtaCopy.button[locale]}
        </Link>
      </div>
    </section>
  );
}
