"use client";

import Image from "next/image";
import { useState } from "react";
import { CaseSlider } from "@/components/project/CaseSlider";
import type { Project } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";
import { caseRevealMargin } from "@/components/project/CaseDivider";

export function WeddingflowSections({ project }: { project: Project }) {
  const content = project.weddingflow;
  const { locale } = useLocale();
  const [pane, setPane] = useState(0);
  const [sidesRef, sidesOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [flowRef, flowOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [visitRef, visitOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [nextRef, nextOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  if (!content) return null;
  const active = content.sides.panes[pane];

  return (
    <>
      <section ref={sidesRef} className={sidesOn ? "case-own is-mint is-revealed" : "case-own is-mint"}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{locale === "el" ? "Τρεις πλευρές, μια πλατφόρμα" : "Three sides, one platform"}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>{content.sides.title[locale]}</h2>
          <p className="case-lead gx-up" style={stagger(2)}>{content.sides.lead[locale]}</p>
          <div className="case-tabs" role="tablist">
            {content.sides.panes.map((item, index) => (
              <button
                key={item.tab.en}
                type="button"
                role="tab"
                aria-selected={pane === index}
                onClick={() => setPane(index)}
              >
                {item.tab[locale]}
              </button>
            ))}
          </div>
          <div className="case-pane">
            <div>
              <h3>{active.heading[locale]}</h3>
              <p className="case-lead">{active.sentence[locale]}</p>
              <p className="case-kicker">{content.sides.stepsLabel[locale]}</p>
              <ol className="case-steps">
                {active.steps.map((step) => (
                  <li key={step.en}>{step[locale]}</li>
                ))}
              </ol>
              <p className="case-kicker">{content.sides.dashboardLabel[locale]}</p>
              <ul className="case-chips">
                {active.chips.map((chip) => (
                  <li key={chip.en}>{chip[locale]}</li>
                ))}
              </ul>
            </div>
            <CaseSlider slides={active.slides} label={active.tab[locale]} />
          </div>
        </div>
      </section>

      <section ref={flowRef} className={flowOn ? "case-own is-white is-tight is-revealed" : "case-own is-white is-tight"}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{locale === "el" ? "Πώς συνδέονται" : "How it connects"}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>{content.flow.title[locale]}</h2>
          <p className="case-lead gx-up" style={stagger(2)}>{content.flow.lead[locale]}</p>
          <ol className="case-flow">
            {content.flow.steps.map((step, index) => (
              <li key={step.title.en} className="case-flow-step gx-up" style={stagger(index)}>
                <span className="case-flow-num">{index + 1}</span>
                <h3>{step.title[locale]}</h3>
                <p className="case-who">{step.who[locale]}</p>
                <p>{step.text[locale]}</p>
              </li>
            ))}
          </ol>
          <div className="case-pair">
            {content.flow.pair.map((item) => (
              <figure key={item.image.en}>
                <div className="case-shot-frame">
                  <Image src={item.image[locale]} alt={item.alt[locale]} fill sizes="(min-width: 1024px) 540px, 100vw" />
                </div>
                <h3>{item.title[locale]}</h3>
                <p>{item.text[locale]}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section ref={visitRef} className={visitOn ? "case-own is-mint is-revealed" : "case-own is-mint"}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{locale === "el" ? "Για κάθε επισκέπτη" : "For every visitor"}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>{content.visitors.title[locale]}</h2>
          <p className="case-lead gx-up" style={stagger(2)}>{content.visitors.lead[locale]}</p>
          <div className="case-visit-slider">
            <CaseSlider slides={content.visitors.slides} label={content.visitors.title[locale]} />
          </div>
          <figure className="case-band">
            <div className="case-phones">
              {content.visitors.phones.map((image, index) => (
                <div key={image.en} className="case-device">
                  <div className="case-device-screen">
                    <Image src={image[locale]} alt={content.visitors.phoneAlts[index][locale]} fill sizes="240px" />
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="case-phone-caption">
              <h3>{content.visitors.captionTitle[locale]}</h3>
              <p>{content.visitors.captionText[locale]}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section ref={nextRef} className={nextOn ? "case-own is-white is-tight is-revealed" : "case-own is-white is-tight"}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{locale === "el" ? "Τι ακολουθεί" : "What’s next"}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>{content.next.title[locale]}</h2>
          <div className="case-releases">
            {content.next.cards.map((card) => (
              <article key={card.title.en} className="case-release">
                <p className={`case-release-tag is-${card.tone}`}>{card.tag[locale]}</p>
                <h3>{card.title[locale]}</h3>
                <p>{card.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
