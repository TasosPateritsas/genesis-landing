"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Hero } from "@/components/Hero";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReducedMotion } from "@/lib/reveal";

const slides = [
  "/home-opening/01-team-laptop.jpg",
  "/home-opening/02-salty-tragonisi.jpg",
  "/home-opening/03-developers-screens.jpg",
  "/home-opening/04-weddingflow-table.jpg",
  "/home-opening/05-whiteboard.jpg",
  "/home-opening/06-salty-paros.jpg",
];

export function HomeOpening() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const { locale } = useLocale();

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        setProgress(Math.max(0, Math.min(1, -rect.top / travel / 0.85)));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduced]);

  const paused = progress > 0.55;
  const heroVisible = progress >= 0.25;
  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);

  if (reduced) return <Hero />;

  const heroOpacity = Math.max(0, Math.min(1, (progress - 0.15) / 0.45));
  return (
    <section
      ref={sectionRef}
      className="home-opening"
      data-paused={paused}
      style={{ "--cover-progress": progress } as CSSProperties}
    >
      <div className="home-opening-stage">
        <div className="home-opening-band" aria-hidden />
        <div
          className={`home-opening-hero${heroVisible ? " is-visible" : ""}`}
          style={{ opacity: heroOpacity }}
          aria-hidden={!heroVisible}
          inert={!heroVisible}
        >
          <Hero />
        </div>
        <div className="home-opening-image" aria-hidden>
          {slides.map((src, index) => (
            <div
              key={src}
              className={`home-opening-slide${index === active ? " is-active" : ""}`}
              style={{ backgroundImage: `linear-gradient(180deg, rgba(247,250,248,.92), transparent 190px), url("${src}")` }}
            />
          ))}
        </div>
        <div className="home-opening-copy">
          <p className="home-opening-eyebrow">{locale === "el" ? "Καλώς ήρθατε στη Genesis" : "Welcome to Genesis"}</p>
          <h1 aria-hidden={heroVisible}>{locale === "el" ? <>Από την ιδέα ως το launch. <strong>Μία ομάδα.</strong></> : <>From idea to launch. <strong>One team.</strong></>}</h1>
          <div className="home-opening-row">
            <p>{locale === "el" ? "Websites, εφαρμογές και AI — σχεδιασμένα, χτισμένα και live κάτω από την ίδια στέγη." : "Websites, apps and AI — designed, built and launched under one roof."}</p>
            <a href="#home-opening-end">{locale === "el" ? "Γνωρίστε μας" : "Scroll to meet us"}<span aria-hidden>↓</span></a>
          </div>
        </div>
      </div>
      <span id="home-opening-end" className="home-opening-end" aria-hidden />
    </section>
  );
}
