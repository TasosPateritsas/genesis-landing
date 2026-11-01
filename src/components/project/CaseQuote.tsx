"use client";

import { CaseDivider, caseRevealMargin } from "@/components/project/CaseDivider";
import { caseCopy } from "@/data/projectCopy";
import type { Project } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay, useReveal } from "@/lib/reveal";

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden>
      <path fill="#4285F4" d="M17.6 9.2c0-.6-.1-1.2-.2-1.8H9v3.4h4.8a4.1 4.1 0 0 1-1.8 2.7v2.2h2.9c1.7-1.6 2.7-3.9 2.7-6.5z" />
      <path fill="#34A853" d="M9 18c2.4 0 4.5-.8 6-2.2l-2.9-2.2c-.8.6-1.9.9-3.1.9-2.4 0-4.4-1.6-5.1-3.8H.9v2.3A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.9 10.7A5.4 5.4 0 0 1 3.6 9c0-.6.1-1.2.3-1.7V5H.9A9 9 0 0 0 0 9c0 1.4.3 2.8.9 4l3-2.3z" />
      <path fill="#EA4335" d="M9 3.6c1.3 0 2.5.5 3.4 1.3L15 2.3A9 9 0 0 0 .9 5l3 2.3C4.6 5.2 6.6 3.6 9 3.6z" />
    </svg>
  );
}

export function CaseQuote({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = caseCopy(locale);
  const review = project.review;
  const [ref, on] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  if (!review) return null;
  const initial = review.name.replace("[Mock]", "").trim().charAt(0);

  return (
    <section ref={ref} className="case-quote-wrap">
      <CaseDivider label={copy.testimonial} />
      <article className={on ? "case-quote gx-up is-revealed" : "case-quote gx-up"} style={revealDelay(0.15)}>
        <ul className="case-stars" aria-label="5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <li key={index}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
                <path
                  fill="currentColor"
                  d="M8 1.2l1.7 3.9 4.3.4-3.2 2.9.9 4.2L8 10.6 4.3 12.6l.9-4.2L2 5.5l4.3-.4L8 1.2z"
                />
              </svg>
            </li>
          ))}
        </ul>
        <blockquote>
          <span aria-hidden>“</span>
          {review.text}
          <span aria-hidden>”</span>
        </blockquote>
        <div className="case-quote-line" />
        <div className="case-quote-foot">
          <div className="case-quote-person">
            <span className="case-avatar" aria-hidden>
              {initial}
            </span>
            <p>
              <strong>{review.name}</strong>
              <span>{review.role[locale]}</span>
            </p>
          </div>
          <p className="case-google">
            <GoogleMark />
            <span>{copy.reviewOn}</span>
            <b>· {review.date}</b>
          </p>
        </div>
      </article>
    </section>
  );
}
