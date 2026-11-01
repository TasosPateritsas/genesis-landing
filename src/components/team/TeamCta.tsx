"use client";

import Link from "next/link";
import { teamCtaCopy } from "@/data/teamPage";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";
import { stagger, useReveal } from "@/lib/reveal";

export function TeamCta() {
  const { locale } = useLocale();
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={revealed ? "team-cta is-revealed" : "team-cta"} aria-labelledby="team-cta-heading">
      <div className="wrap-content">
        <h2 id="team-cta-heading" className="team-h2 gx-up">
          {teamCtaCopy.heading[locale]}
        </h2>
        <p className="team-cta-text gx-up" style={stagger(1)}>
          {teamCtaCopy.text[locale]}
        </p>
        <Link href={contactHref(locale, "booking")} className="team-cta-button gx-up" style={stagger(2)}>
          {teamCtaCopy.button[locale]}
          <span className="team-cta-arrow" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
