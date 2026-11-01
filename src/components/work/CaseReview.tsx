"use client";

import type { Project } from "@/data/projectModel";
import { projectChrome } from "@/data/projectChrome";
import { CaseDivider } from "@/components/work/CaseDivider";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay, useReveal } from "@/lib/reveal";

function initial(name: string) {
  const cleaned = name.replace(/^\[Mock\]\s*/, "");
  return Array.from(cleaned)[0]?.toUpperCase() ?? "M";
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z" />
      <path fill="#FBBC05" d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.3 0 10.1 0 12s.5 3.7 1.4 5.5l4-3.1z" />
      <path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z" />
    </svg>
  );
}

export function CaseReview({ project }: { project: Project }) {
  const review = project.review;
  const { locale } = useLocale();
  const copy = projectChrome(locale);
  const [ref, on] = useReveal<HTMLElement>(0.15, "0px 0px -8% 0px");
  if (!review) return null;
  const quote = review.quote[locale];
  const wrapped = locale === "el" ? `«${quote}»` : `“${quote}”`;

  return (
    <section ref={ref} className={on ? "case-review is-revealed" : "case-review"}>
      <CaseDivider label={copy.testimonial} />
      <article className="case-review-card gx-up" style={revealDelay(0.15)}>
        <p className="case-stars" aria-label={copy.rated}>
          {Array.from({ length: 5 }, (_, index) => (
            <svg key={index} width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path
                fill="#0F6E56"
                d="M8 1.2l1.7 3.9 4.3.4-3.2 2.9.9 4.2L8 10.4 4.3 12.6l.9-4.2L2 5.5l4.3-.4L8 1.2z"
              />
            </svg>
          ))}
        </p>
        <blockquote>{wrapped}</blockquote>
        <div className="case-review-foot">
          <div className="case-review-person">
            <span className="case-review-avatar" aria-hidden>
              {initial(review.name)}
            </span>
            <span>
              <span className="case-review-name">{review.name}</span>
              <span className="case-review-role">{review.role[locale]}</span>
            </span>
          </div>
          <p className="case-review-source">
            <GoogleMark />
            <span>{copy.reviewOnGoogle}</span>
          </p>
        </div>
      </article>
    </section>
  );
}
