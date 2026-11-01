"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

export function Upcoming() {
  const { t } = useLocale();
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
          <p className="home-upcoming-launch">
            {t.upcoming.launch} <span>{t.upcoming.soon}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
