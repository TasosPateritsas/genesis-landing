"use client";

import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/WaitlistForm";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

export function Upcoming() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="upcoming"
      className={`home-upcoming${revealed ? " is-revealed" : ""}`}
      aria-labelledby="upcoming-heading"
    >
      <div className="home-upcoming-photo gx-up">
        <Image
          src="/projects/weddingflow-table.jpg"
          alt={t.upcoming.photoAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="home-upcoming-copy gx-up" style={stagger(1)}>
        <div className="home-upcoming-inner">
          <p className="home-section-eyebrow home-upcoming-eyebrow">
            <span className="home-upcoming-dot" aria-hidden />
            {t.upcoming.eyebrow}
          </p>
          <h2 id="upcoming-heading" className="home-upcoming-title">
            {t.upcoming.title}
          </h2>
          <span className="home-upcoming-bar" aria-hidden />
          <p className="home-upcoming-text">{t.upcoming.text}</p>
          <div className="home-upcoming-tags">
            {t.upcoming.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="home-upcoming-row">
            <p className="home-upcoming-launch">
              <span className="home-upcoming-launch-dot" aria-hidden />
              {t.upcoming.launch} <strong>{t.upcoming.soon}</strong>
            </p>
            <Link href={hrefFor("/work/weddingflow")} className="see-all-services home-upcoming-view">
              <span className="see-all-services-text">{t.upcoming.viewProject}</span>
              <span className="see-all-services-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
          <div className="home-upcoming-waitlist">
            <WaitlistForm source="home" />
          </div>
        </div>
      </div>
    </section>
  );
}
