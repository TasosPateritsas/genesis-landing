"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Slide } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReducedMotion } from "@/lib/reveal";

export function CaseSlider({
  slides,
  label,
}: {
  slides: Slide[];
  label: string;
}) {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const visibleRef = useRef(true);
  const pauseUntil = useRef(0);
  const count = slides.length;
  const previousLabel = locale === "el" ? "Προηγούμενη" : "Previous";
  const nextLabel = locale === "el" ? "Επόμενη" : "Next";

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || count < 2) return;
    const timer = window.setInterval(() => {
      if (hoverRef.current || !visibleRef.current) return;
      if (document.hidden) return;
      if (Date.now() < pauseUntil.current) return;
      setIndex((current) => (current + 1) % count);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [count, reduced]);

  const go = (direction: -1 | 1) => {
    pauseUntil.current = Date.now() + 8000;
    setIndex((current) => (current + direction + count) % count);
  };
  const slide = slides[index];

  return (
    <div
      ref={rootRef}
      className="case-slider"
      aria-roledescription={label}
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}
    >
      <div className="case-slider-frame">
        <div
          className="case-slider-track"
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${(index * 100) / count}%)`,
          }}
        >
          {slides.map((item) => (
            <div key={item.image.en} className="case-slide" style={{ width: `${100 / count}%` }}>
              <Image
                src={item.image[locale]}
                alt={item.alt[locale]}
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="case-slider-tools">
        <div className="case-slider-caption">
          <h3>{slide.title[locale]}</h3>
          <p>{slide.text[locale]}</p>
        </div>
        <div className="case-slider-nav">
          <button type="button" aria-label={previousLabel} onClick={() => go(-1)}>
            ←
          </button>
          <span>
            {index + 1} / {count}
          </span>
          <button type="button" aria-label={nextLabel} onClick={() => go(1)}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}
