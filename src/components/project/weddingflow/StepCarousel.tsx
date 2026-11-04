"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import type { WeddingflowCarouselStep } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReducedMotion } from "@/lib/reveal";

const INTERVAL_MS = 3600;
const FADE_MS = 450;

export function StepCarousel({
  steps,
  listLabel,
  beforeList,
  flipped = false,
}: {
  steps: WeddingflowCarouselStep[];
  listLabel: string;
  /** Optional title/lead above the step list (Three sides). */
  beforeList?: ReactNode;
  /** Venues: text column left, image right. */
  flipped?: boolean;
}) {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    if (reduced || paused || steps.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % steps.length);
      setProgressKey((key) => key + 1);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduced, steps.length]);

  const select = (next: number) => {
    setIndex(next);
    setProgressKey((key) => key + 1);
  };

  const active = steps[index] ?? steps[0];
  if (!active) return null;

  return (
    <div
      className={`wf-carousel${flipped ? " is-flipped" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wf-carousel-media">
        <div className="wf-carousel-frame">
          {steps.map((item, stepIndex) => (
            <div
              key={item.image.en}
              className={`wf-carousel-slide${stepIndex === index ? " is-active" : ""}`}
              style={{ transitionDuration: `${FADE_MS}ms` }}
            >
              <Image
                src={item.image[locale]}
                alt={item.alt[locale]}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
              />
            </div>
          ))}
        </div>
        <p className="wf-carousel-caption">
          <b>
            {index + 1} · {active.label[locale]}.
          </b>{" "}
          {active.caption[locale]}
        </p>
      </div>
      <div className="wf-carousel-copy">
        {beforeList}
        <p className="wf-carousel-kicker">{listLabel}</p>
        <ol className="wf-carousel-steps">
          {steps.map((item, stepIndex) => {
            const selected = stepIndex === index;
            return (
              <li key={item.label.en}>
                <button
                  type="button"
                  className={`wf-carousel-step${selected ? " is-active" : ""}`}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => select(stepIndex)}
                  onMouseEnter={() => select(stepIndex)}
                >
                  <span className="wf-carousel-num" aria-hidden>
                    {stepIndex + 1}
                  </span>
                  <span className="wf-carousel-step-text">
                    {item.label[locale]}
                    {selected && !reduced ? (
                      <span key={progressKey} className="wf-carousel-progress" aria-hidden />
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
