"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type TransitionEvent } from "react";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { fill } from "@/lib/fill";
import { revealDelay, useReducedMotion, useReveal } from "@/lib/reveal";

const AUTO_MS = 5000;
const EXIT_MS = 300;
const COUNT_MS = 1600;
const COUNT_START_MS = 300;

const slides = site.stats.filter((stat) => stat.id !== "engineers");
const [leftPhoto, rightPhoto] = site.images.contactBand;

function easeOutQuart(progress: number) {
  return 1 - (1 - progress) ** 4;
}

export function ContactStats() {
  const { t } = useLocale();
  const copy = t.contactPage.band;
  const [bandRef, bandRevealed] = useReveal<HTMLDivElement>(0.2);
  const reduced = useReducedMotion();
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [stopped, setStopped] = useState(false);
  const exitTimer = useRef<number | null>(null);
  const slide = slides[index];

  const goTo = useCallback(
    (next: number) => {
      if (next === index) return;
      if (exitTimer.current != null) window.clearTimeout(exitTimer.current);
      if (reduced) {
        setIndex(next);
        return;
      }
      setPhase("exit");
      exitTimer.current = window.setTimeout(() => {
        exitTimer.current = null;
        setCount(0);
        setIndex(next);
        setPhase("enter");
        window.requestAnimationFrame(() => window.requestAnimationFrame(() => setPhase("idle")));
      }, EXIT_MS);
    },
    [index, reduced],
  );

  useEffect(() => {
    if (!started || reduced) return;
    const target = slides[index].value;
    const begin = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const progress = Math.min(1, (now - begin) / COUNT_MS);
      setCount(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) frame = window.requestAnimationFrame(step);
    };
    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [started, index, reduced]);

  useEffect(() => {
    if (!started || hovered || stopped || reduced) return;
    const timer = window.setTimeout(() => goTo((index + 1) % slides.length), AUTO_MS);
    return () => window.clearTimeout(timer);
  }, [started, hovered, stopped, reduced, index, goTo]);

  useEffect(
    () => () => {
      if (exitTimer.current != null) window.clearTimeout(exitTimer.current);
    },
    [],
  );

  function onCardShown(event: TransitionEvent<HTMLDivElement>) {
    if (started || event.target !== event.currentTarget || event.propertyName !== "opacity") return;
    window.setTimeout(() => setStarted(true), COUNT_START_MS);
  }

  return (
    <section className="contact-band" aria-label={copy.slidesLabel}>
      <div ref={bandRef} className={`band-grid${bandRevealed ? " is-revealed" : ""}`}>
        <div className="band-photo is-left gx-up">
          <Image src={leftPhoto} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" />
        </div>

        <div className="band-card-cell gx-up" style={revealDelay(0.3, 0.18)} onTransitionEnd={onCardShown}>
          <div
            className="stat-card"
            data-cursor="dark"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="stat-slide" data-phase={phase}>
              <p className="stat-value">
                {reduced ? slide.value : count}
                <sup>{slide.suffix}</sup>
              </p>
              <p className="stat-label">{t.stats[slide.id].label}</p>
              <p className="stat-note">{t.stats[slide.id].note}</p>
            </div>

            <div className="stat-dots">
              <div className="stat-dots-track">
                <span className="stat-dot-ring" style={{ transform: `translateX(${index * 30}px)` }} aria-hidden />
                {slides.map((item, dotIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    className="stat-dot-button"
                    aria-label={fill(copy.slideLabel, { index: dotIndex + 1 })}
                    aria-current={dotIndex === index ? "true" : undefined}
                    onClick={() => {
                      setStopped(true);
                      goTo(dotIndex);
                    }}
                  >
                    <span className={`stat-dot${dotIndex === index ? " is-active" : ""}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="band-photo is-right gx-up" style={revealDelay(0.6, 0.36)}>
          <Image src={rightPhoto} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
        </div>
      </div>
    </section>
  );
}
