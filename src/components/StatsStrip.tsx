"use client";

import { useEffect, useState } from "react";
import { site, type Stat } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReducedMotion, useReveal } from "@/lib/reveal";

const COUNT_MS = 1600;

function easeOutQuart(progress: number) {
  return 1 - (1 - progress) ** 4;
}

function StatCell({ stat, active, delayMs }: { stat: Stat; active: boolean; delayMs: number }) {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const label = t.stats[stat.id].label;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (!active) return;
    let frame = 0;
    const timer = window.setTimeout(() => {
      const begin = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - begin) / COUNT_MS);
        setValue(Math.round(easeOutQuart(progress) * stat.value));
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, [active, delayMs, reduced, stat.value]);

  const shown = reduced ? stat.value : value;

  return (
    <div
      className="home-stat gx-up"
      style={stagger(site.stats.indexOf(stat))}
      aria-label={`${stat.value}${stat.suffix} ${label}`}
    >
      <p className="home-stat-value">
        <span className="home-sr">
          {stat.value}
          {stat.suffix} {label}
        </span>
        <span aria-hidden>{shown}</span>
        {stat.suffix ? (
          <span className="home-stat-suffix" aria-hidden>
            {stat.suffix}
          </span>
        ) : null}
      </p>
      <p className="home-stat-label">{label}</p>
    </div>
  );
}

export function StatsStrip() {
  const { locale } = useLocale();
  const [ref, revealed] = useReveal<HTMLElement>(0.2);
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className={`home-stats${revealed ? " is-revealed" : ""}`}
      aria-label={locale === "el" ? "Στοιχεία για το studio" : "Studio facts"}
    >
      <div className="home-stats-grid" aria-hidden />
      <div className="wrap-hero home-stats-inner">
        {site.stats.map((stat, index) => (
          <StatCell key={stat.id} stat={stat} active={revealed} delayMs={reduced ? 0 : index * 120} />
        ))}
      </div>
    </section>
  );
}
