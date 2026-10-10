"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { site, type Locale } from "@/data/content";
import { teamFaqCopy, teamFaqs, type TeamFaqLink } from "@/data/teamFaq";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePath } from "@/lib/routes";

function linkHref(link: TeamFaqLink, locale: Locale) {
  if (link.href === "mailto") return `mailto:${site.email}`;
  return localizePath(link.href, locale);
}

function AnswerText({
  text,
  links,
  locale,
}: {
  text: string;
  links?: readonly TeamFaqLink[];
  locale: Locale;
}) {
  if (!links?.length) return text;

  const nodes: ReactNode[] = [];
  let rest = text;
  links.forEach((link, index) => {
    const phrase = link.phrase[locale];
    const at = rest.indexOf(phrase);
    if (at === -1) return;
    if (at > 0) nodes.push(rest.slice(0, at));
    nodes.push(
      <Link key={`${phrase}-${index}`} href={linkHref(link, locale)} className="team-faq-inline">
        {phrase}
      </Link>,
    );
    rest = rest.slice(at + phrase.length);
  });
  if (rest) nodes.push(rest);
  return nodes;
}

export function TeamFaq() {
  const { locale } = useLocale();
  const baseId = useId();
  const [open, setOpen] = useState(0);

  return (
    <section className="team-faq" aria-labelledby="team-faq-heading">
      <div className="section-pad container-narrow">
        <div className="team-faq-layout">
          <div className="team-faq-intro">
            <p className="service-kicker is-literal">{teamFaqCopy.kicker[locale]}</p>
            <h2 id="team-faq-heading" className="team-faq-title">
              {teamFaqCopy.heading[locale]}
            </h2>
            <p className="team-faq-subtext">{teamFaqCopy.subtext[locale]}</p>
            <Link href={localizePath("/contact", locale)} className="team-faq-ask">
              {teamFaqCopy.ask[locale]} →
            </Link>
          </div>

          <div className="team-faq-list">
            {teamFaqs.map((item, index) => {
              const panelId = `${baseId}-faq-${index}`;
              const isOpen = open === index;
              return (
                <div key={item.question.en} className="team-faq-item">
                  <button
                    type="button"
                    className="team-faq-question"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(index)}
                  >
                    <span>{item.question[locale]}</span>
                    <span className={isOpen ? "team-faq-icon is-open" : "team-faq-icon"} aria-hidden>
                      +
                    </span>
                  </button>
                  <div id={panelId} className={isOpen ? "team-faq-panel is-open" : "team-faq-panel"}>
                    <div className="team-faq-panel-inner">
                      <p className="team-faq-answer">
                        <AnswerText text={item.answer[locale]} links={item.links} locale={locale} />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
