"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { statPhotos, statSlides } from "@/data/stats";
import { useLocale } from "@/i18n/LocaleProvider";

const AUTO_MS = 4000;
const EXIT_MS = 300;
const COUNT_MS = 1200;

function easeOut(progress: number) {
  return 1 - (1 - progress) ** 3;
}

type SliderApi = {
  goTo: (next: number) => void;
  pause: () => void;
  resume: () => void;
};

export function ContactStats() {
  const { locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [displayed, setDisplayed] = useState(0);
  const [reduced, setReduced] = useState(false);
  const api = useRef<SliderApi>({
    goTo: () => {},
    pause: () => {},
    resume: () => {},
  });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const indexRef = { current: 0 };
    const reducedRef = { current: false };
    const inViewRef = { current: false };
    const pausedRef = { current: false };
    const remainingRef = { current: AUTO_MS };
    const dueRef = { current: 0 };
    let timer: number | null = null;
    let exitTimer: number | null = null;
    let countFrame: number | null = null;

    function clearTimer() {
      if (timer != null) {
        window.clearTimeout(timer);
        timer = null;
      }
    }

    function cancelCount() {
      if (countFrame != null) {
        window.cancelAnimationFrame(countFrame);
        countFrame = null;
      }
    }

    function showFinal(value: number) {
      cancelCount();
      setDisplayed(value);
    }

    function startCount(value: number) {
      cancelCount();
      if (reducedRef.current) {
        setDisplayed(value);
        return;
      }
      const started = performance.now();
      setDisplayed(0);
      const step = (now: number) => {
        const progress = Math.min(1, (now - started) / COUNT_MS);
        setDisplayed(Math.round(easeOut(progress) * value));
        if (progress < 1) countFrame = window.requestAnimationFrame(step);
        else countFrame = null;
      };
      countFrame = window.requestAnimationFrame(step);
    }

    function schedule(ms: number) {
      clearTimer();
      remainingRef.current = ms;
      if (reducedRef.current || !inViewRef.current || pausedRef.current) return;
      dueRef.current = performance.now() + ms;
      timer = window.setTimeout(() => {
        goTo((indexRef.current + 1) % statSlides.length, true);
      }, ms);
    }

    function goTo(next: number, restart: boolean) {
      if (next === indexRef.current) {
        if (restart) schedule(AUTO_MS);
        return;
      }
      if (exitTimer != null) {
        window.clearTimeout(exitTimer);
        exitTimer = null;
      }
      cancelCount();

      const apply = () => {
        indexRef.current = next;
        setIndex(next);
        if (reducedRef.current) {
          setPhase("idle");
          showFinal(statSlides[next].value);
        } else {
          setPhase("enter");
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => setPhase("idle"));
          });
          startCount(statSlides[next].value);
        }
      };

      if (reducedRef.current) {
        apply();
      } else {
        setPhase("exit");
        exitTimer = window.setTimeout(() => {
          exitTimer = null;
          apply();
        }, EXIT_MS);
      }

      if (restart) schedule(AUTO_MS);
    }

    function pause() {
      if (pausedRef.current) return;
      pausedRef.current = true;
      if (timer != null) {
        remainingRef.current = Math.max(0, dueRef.current - performance.now());
        clearTimer();
      }
    }

    function resume() {
      if (!pausedRef.current) return;
      pausedRef.current = false;
      if (!reducedRef.current && inViewRef.current) schedule(remainingRef.current || AUTO_MS);
    }

    api.current = { goTo: (next) => goTo(next, true), pause, resume };

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      reducedRef.current = motion.matches;
      setReduced(motion.matches);
      if (!motion.matches) return;
      clearTimer();
      if (exitTimer != null) {
        window.clearTimeout(exitTimer);
        exitTimer = null;
      }
      setPhase("idle");
      showFinal(statSlides[indexRef.current].value);
    };
    syncMotion();
    motion.addEventListener("change", syncMotion);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || inViewRef.current) return;
        inViewRef.current = true;
        setInView(true);
        if (reducedRef.current) {
          showFinal(statSlides[indexRef.current].value);
          return;
        }
        startCount(statSlides[indexRef.current].value);
        schedule(AUTO_MS);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", syncMotion);
      clearTimer();
      cancelCount();
      if (exitTimer != null) window.clearTimeout(exitTimer);
      api.current = { goTo: () => {}, pause: () => {}, resume: () => {} };
    };
  }, []);

  const slide = statSlides[index];

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="contact-stats container-narrow py-16 md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,0.9fr)] md:gap-16">
          <div className={`stats-photo ${inView ? "is-visible" : ""}`}>
            <div className="relative aspect-[5/8] overflow-hidden rounded-[4px]">
              <Image
                src={statPhotos.left.src}
                alt={statPhotos.left.alt[locale]}
                fill
                sizes="(min-width: 768px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="stat-card"
            onMouseEnter={() => api.current.pause()}
            onMouseLeave={() => api.current.resume()}
            onFocusCapture={() => api.current.pause()}
            onBlurCapture={(event) => {
              const next = event.relatedTarget;
              if (!(next instanceof Node) || !event.currentTarget.contains(next)) {
                api.current.resume();
              }
            }}
          >
            <div className="stat-slide" data-phase={reduced ? "idle" : phase}>
              <p className="text-white">
                <span className="text-[72px] font-light leading-none tracking-[-0.03em] md:text-[96px]">
                  {displayed}
                  <sup className="ml-1 align-super text-[0.4em] font-medium leading-none">{slide.suffix}</sup>
                </span>
              </p>
              <p className="mt-4 text-[18px] font-medium leading-snug text-white">{slide.title[locale]}</p>
              <p className="mx-auto mt-2 max-w-[260px] text-[14px] leading-relaxed text-white/75">
                {slide.description[locale]}
              </p>
            </div>

            <div className="stat-dots">
              <div className="stat-dots-track" role="group" aria-label="Slides">
                <span
                  className="stat-dot-ring"
                  style={{ transform: `translateX(${index * 30}px)` }}
                  aria-hidden
                />
                {statSlides.map((item, dotIndex) => {
                  const active = dotIndex === index;
                  return (
                    <button
                      key={`${item.value}${item.suffix}`}
                      type="button"
                      className="stat-dot-button"
                      aria-label={`Slide ${dotIndex + 1}`}
                      aria-current={active ? "true" : undefined}
                      onClick={() => api.current.goTo(dotIndex)}
                    >
                      <span className={`stat-dot ${active ? "is-active" : ""}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`stats-photo stats-photo-delay md:mt-[70px] ${inView ? "is-visible" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Image
                src={statPhotos.right.src}
                alt={statPhotos.right.alt[locale]}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
