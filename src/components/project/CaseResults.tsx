"use client";

import { useEffect, useState } from "react";
import { caseCopy } from "@/data/projectCopy";
import type { Project } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { metricDescription, resultsArePublishable, type ResultMetric, type ScoreSet } from "@/lib/pageSpeed";
import { stagger, useReducedMotion, useReveal } from "@/lib/reveal";
import { caseRevealMargin } from "@/components/project/CaseDivider";

const METRICS: ResultMetric[] = ["performance", "lcp", "seo", "accessibility"];

function formatValue(metric: ResultMetric, value: number) {
  if (metric === "lcp") return value.toFixed(1);
  return String(Math.round(value));
}

function CountUp({
  value,
  metric,
  playKey,
  delay,
  active,
}: {
  value: number;
  metric: ResultMetric;
  playKey: string;
  delay: number;
  active: boolean;
}) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    if (!active || reduced) return;
    const duration = 1600;
    const startAt = performance.now() + delay * 1000;
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - startAt;
      const progress = Math.min(1, Math.max(0, elapsed / duration));
      const eased = 1 - (1 - progress) ** 4;
      setShown(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const timeout = window.setTimeout(() => setShown(value), (delay + 1.6) * 1000 + 40);
    const onHide = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(frame);
        setShown(value);
      }
    };
    document.addEventListener("visibilitychange", onHide);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      document.removeEventListener("visibilitychange", onHide);
    };
  }, [active, delay, metric, playKey, reduced, value]);

  const visible = reduced || !active ? value : (shown ?? 0);
  return (
    <>
      <span aria-hidden>{formatValue(metric, visible)}</span>
      <span className="sr-only">{formatValue(metric, value)}</span>
    </>
  );
}

export function CaseResults({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = caseCopy(locale);
  const results = project.results;
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");
  const [ref, on] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  if (!results || !resultsArePublishable(results.desktop, results.mobile)) return null;
  const scores: ScoreSet = results[mode];

  const labelFor = (metric: ResultMetric) => {
    if (metric === "performance") {
      return mode === "desktop" ? copy.performanceDesktop : copy.performanceMobile;
    }
    if (metric === "lcp") return copy.pageLoad;
    if (metric === "seo") return copy.seo;
    return copy.accessibility;
  };

  return (
    <section ref={ref} className={on ? "case-results is-revealed" : "case-results"} data-cursor="dark">
      <div className="case-l2">
        <p className="case-eyebrow gx-up">{copy.resultsEyebrow}</p>
        <h2 className="case-h2 gx-up" style={stagger(1)}>
          {copy.resultsTitle}
        </h2>
        <div className="case-toggle gx-up" style={stagger(2)} role="group" aria-label={copy.resultsEyebrow}>
          {(["desktop", "mobile"] as const).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={mode === key}
              onClick={() => setMode(key)}
            >
              {key === "desktop" ? copy.desktop : copy.mobile}
            </button>
          ))}
        </div>
        <div className="case-scores">
          {METRICS.map((metric, index) => {
            const value = metric === "lcp" ? scores.lcp : scores[metric];
            return (
              <article key={metric} className="case-score gx-up" style={stagger(index)}>
                <p className="case-score-value">
                  <CountUp
                    key={`${mode}-${metric}`}
                    value={value}
                    metric={metric}
                    playKey={`${mode}-${on}`}
                    delay={index * 0.1}
                    active={on}
                  />
                  <span className="case-score-unit" aria-hidden>
                    {metric === "lcp" ? "s" : "/100"}
                  </span>
                  <span className="sr-only">{metric === "lcp" ? " seconds" : " out of 100"}</span>
                </p>
                <h3>{labelFor(metric)}</h3>
                <p>{metricDescription(metric, value, locale)}</p>
              </article>
            );
          })}
        </div>
        <p className="case-source">{copy.measured}</p>
      </div>
    </section>
  );
}
