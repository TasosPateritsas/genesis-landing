"use client";

import { useEffect, useState } from "react";
import { promisesTitle, teamPromises } from "@/data/teamPage";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay, useReducedMotion, useReveal } from "@/lib/reveal";
import { SideTitle } from "@/components/team/SideTitle";

function PromiseCheck({ ticked }: { ticked: boolean }) {
  return (
    <span className={ticked ? "team-check is-ticked" : "team-check"} aria-hidden>
      <svg viewBox="0 0 20 20" width="20" height="20">
        <path d="M4.5 10.4 L8.2 14.1 L15.6 6.2" />
      </svg>
    </span>
  );
}

export function TeamPromises() {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const [ref, revealed] = useReveal<HTMLDivElement>();
  const [ticked, setTicked] = useState(0);

  useEffect(() => {
    if (!revealed || reduced) return;
    const timers = teamPromises.map((_, index) =>
      window.setTimeout(() => {
        setTicked((count) => Math.max(count, index + 1));
      }, 500 + index * 180),
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [revealed, reduced]);

  return (
    <section className="team-promises team-section" data-cursor="dark" aria-labelledby="team-promises-heading">
      <div className="wrap-content">
        <div ref={ref} className={revealed ? "team-pair is-revealed" : "team-pair"}>
          <SideTitle id="team-promises-heading" title={promisesTitle} className="gx-up" />
          <div className="team-promise-grid">
            {teamPromises.map((item, index) => {
              const checked = reduced || ticked > index;
              return (
                <article key={item.title.en} className="team-promise gx-up" style={revealDelay(0.1 + index * 0.1, Math.min(0.1 + index * 0.06, 0.3))}>
                  <div className="team-promise-body">
                    <PromiseCheck ticked={checked} />
                    <div>
                      <h3 className="team-promise-title">{item.title[locale]}</h3>
                      <p className="team-promise-text">{item.text[locale]}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
