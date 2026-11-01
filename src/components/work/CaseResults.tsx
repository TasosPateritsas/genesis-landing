"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/data/content";
import { formatMetric, metricDescription, metricOrder } from "@/data/metricCopy";
import type { MetricId, Project, ScoreSet } from "@/data/projectModel";
import { metricLabel, metricUnit, projectChrome, type ScoreTab } from "@/data/projectChrome";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReducedMotion, useReveal } from "@/lib/reveal";

function Count({
  metric,
  value,
  animate,
  delay,
}: {
  metric: MetricId;
  value: number;
  animate: boolean;
  delay: number;
}) {
  const reduced = useReducedMotion();
  const [animated, setAnimated] = useState<number | null>(null);
  const shown = !animate || reduced || animated === null ? value : animated;

  useEffect(() => {
    if (!animate || reduced) return;

    let frame = 0;
    let start = 0;
    const duration = 1600;
    const wait = window.setTimeout(() => {
      setAnimated(0);
      const tick = (now: number) => {
        if (!start) start = now;
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - progress) ** 4;
        setAnimated(value * eased);
        if (progress < 1) frame = requestAnimationFrame(tick);
        else setAnimated(value);
      };
      frame = requestAnimationFrame(tick);
    }, delay);
    const finish = window.setTimeout(() => setAnimated(value), delay + duration + 40);
    const onHide = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(frame);
        setAnimated(value);
      }
    };
    document.addEventListener("visibilitychange", onHide);
    return () => {
      window.clearTimeout(wait);
      window.clearTimeout(finish);
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, [animate, delay, reduced, value]);

  return (
    <>
      <span className="case-score-value" aria-hidden>
        {formatMetric(metric, shown)}
      </span>
      <span className="sr-only">{formatMetric(metric, value)}</span>
    </>
  );
}

function Counters({
  scores,
  locale,
  tab,
  animate,
}: {
  scores: ScoreSet;
  locale: Locale;
  tab: ScoreTab;
  animate: boolean;
}) {
  return (
    <ul className="case-scores">
      {metricOrder.map((metric, index) => (
        <li key={metric} className="case-score gx-up" style={stagger(index)}>
          <p className="case-score-number">
            <Count metric={metric} value={scores[metric]} animate={animate} delay={index * 100} />
            <span className="case-score-unit">{metricUnit(metric)}</span>
          </p>
          <p className="case-score-label">{metricLabel(locale, metric, tab)}</p>
          <p className="case-score-text">{metricDescription(metric, scores[metric], locale)}</p>
        </li>
      ))}
    </ul>
  );
}

export function CaseResults({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = projectChrome(locale);
  const [tab, setTab] = useState<ScoreTab>("desktop");
  const [ref, on] = useReveal<HTMLElement>(0.15, "0px 0px -8% 0px");
  const scores = project.results[tab];

  return (
    <section
      ref={ref}
      className={on ? "case-results is-revealed" : "case-results"}
      data-cursor="dark"
    >
      <div className="case-measure">
        <p className="case-eyebrow is-mint gx-up">{copy.results}</p>
        <h2 className="case-h2 is-light gx-up" style={stagger(1)}>
          {copy.resultsTitle}
        </h2>
        <div className="case-toggle gx-up" style={stagger(2)} role="group" aria-label={copy.results}>
          {(["desktop", "mobile"] as const).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={tab === item}
              onClick={() => setTab(item)}
            >
              {copy[item]}
            </button>
          ))}
        </div>
        <Counters key={tab} scores={scores} locale={locale} tab={tab} animate={on} />
        <p className="case-source">{copy.source}</p>
      </div>
    </section>
  );
}
