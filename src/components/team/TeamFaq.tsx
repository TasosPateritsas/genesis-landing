"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { emailHref } from "@/config/site";
import type { Locale } from "@/data/content";
import { teamFaqCopy, teamFaqs, type TeamFaqLink } from "@/data/teamFaq";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";
import { localizePath } from "@/lib/routes";

/** null for the email phrase until a real address is configured; it then stays plain text. */
function linkHref(link: TeamFaqLink, locale: Locale) {
  if (link.href === "mailto") return emailHref;
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
    const href = linkHref(link, locale);
    nodes.push(
      href ? (
        <Link key={`${phrase}-${index}`} href={href} className="team-faq-inline">
          {phrase}
        </Link>
      ) : (
        phrase
      ),
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
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={revealed ? "team-faq is-revealed" : "team-faq"} aria-labelledby="team-faq-heading">
      <div className="wrap-content">
        <div className="team-faq-layout">
          <div className="team-faq-intro">
            <p className="team-eyebrow gx-up">{teamFaqCopy.kicker[locale]}</p>
            <h2 id="team-faq-heading" className="team-h2 team-faq-title gx-up" style={stagger(1)}>
              {teamFaqCopy.heading[locale]}
            </h2>
            <p className="team-faq-subtext gx-up" style={stagger(2)}>
              {teamFaqCopy.subtext[locale]}
            </p>
            <Link href={localizePath("/contact", locale)} className="team-faq-ask gx-up" style={stagger(3)}>
              {teamFaqCopy.ask[locale]} →
            </Link>
          </div>
          <div className="team-faq-list">
            {teamFaqs.map((item, index) => {
              const panelId = `${baseId}-faq-${index}`;
              const isOpen = open === index;
              return (
                <div key={item.question.en} className="team-faq-item gx-up" style={stagger(index + 4)}>
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
