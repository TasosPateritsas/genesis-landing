"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";

const RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const SHOW_AFTER_PX = 90;

export function BackToTop() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      frame.current = null;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const next = scrollable > 0 ? Math.min(1, Math.max(0, scrolled / scrollable)) : 0;
      setProgress(next);
      setVisible(scrolled > SHOW_AFTER_PX);
    };

    const onScroll = () => {
      if (frame.current != null) return;
      frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current != null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const offset = CIRCUMFERENCE * (1 - progress);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      aria-label={t.backToTop}
      onClick={scrollToTop}
    >
      <svg className="back-to-top-ring" viewBox="0 0 44 44" aria-hidden>
        <circle className="back-to-top-track" cx="22" cy="22" r={RADIUS} />
        <circle
          className="back-to-top-progress"
          cx="22"
          cy="22"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <ArrowUp className="back-to-top-icon" strokeWidth={1.5} aria-hidden />
    </button>
  );
}
