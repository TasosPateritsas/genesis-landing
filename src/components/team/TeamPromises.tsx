"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import { teamPromises, teamPromisesCopy } from "@/data/teamPromises";
import { useLocale } from "@/i18n/LocaleProvider";

export function TeamPromises() {
  const { locale } = useLocale();
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const row = rowRef.current;
    if (!row || reduce) return;

    const items = [...row.querySelectorAll<HTMLElement>(".team-promise")];
    items.forEach((item) => item.classList.add("is-pending"));

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        items.forEach((item) => {
          item.classList.remove("is-pending");
          item.classList.add("is-shown");
        });
        observer.disconnect();
      },
      { threshold: 0.3 },
    );
    observer.observe(row);

    return () => {
      observer.disconnect();
      items.forEach((item) => item.classList.remove("is-pending", "is-shown"));
    };
  }, []);

  return (
    <section className="team-promises" data-cursor="dark" aria-labelledby="team-promises-heading">
      <div className="section-pad container-narrow">
        <p className="service-kicker team-promises-kicker">{teamPromisesCopy.kicker[locale]}</p>
        <h2 id="team-promises-heading" className="team-promises-title">
          {teamPromisesCopy.heading[locale]}
        </h2>
        <div ref={rowRef} className="team-promises-grid">
          {teamPromises.map((item, index) => (
            <article
              key={item.title.en}
              className="team-promise"
              style={{ "--promise-delay": `${index * 250}ms` } as CSSProperties}
            >
              <p className="team-promise-number">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="team-promise-title">{item.title[locale]}</h3>
              <p className="team-promise-text">{item.text[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
