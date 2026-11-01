"use client";

import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReveal } from "@/lib/reveal";

export function ContactHowWeWork() {
  const { t } = useLocale();
  const how = t.contactPage.howWeWork;
  const [titleRef, titleRevealed] = useReveal<HTMLHeadingElement>();
  const [rowRef, rowRevealed] = useReveal<HTMLOListElement>(0.3);
  const background = { "--how-bg": `url("${site.images.howWeWorkBg}")` } as CSSProperties;

  return (
    <section className="contact-how" style={background} data-cursor="dark" aria-labelledby="how-heading">
      <div className="wrap-content">
        <h2
          ref={titleRef}
          id="how-heading"
          className={`how-title gx-up${titleRevealed ? " is-revealed" : ""}`}
        >
          {how.title}
        </h2>
        <ol ref={rowRef} className={`how-steps${rowRevealed ? " is-revealed" : ""}`}>
          {how.steps.map((step, index) => (
            <li key={step.title} className="how-step" style={{ "--step": index } as CSSProperties}>
              <span className="how-square" aria-hidden>
                {index + 1}
              </span>
              {index < how.steps.length - 1 ? <span className="how-seg" aria-hidden /> : null}
              <div className="how-copy">
                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
