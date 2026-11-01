"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projectModel";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReducedMotion } from "@/lib/reveal";

export function CaseShowcase({ project }: { project: Project }) {
  const { locale } = useLocale();
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const laptop = laptopRef.current;
    const phone = phoneRef.current;
    if (!stage || !laptop || !phone) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    let frame = 0;
    let running = true;
    let scrollP = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const applyPad = () => {
      if (!tablet.matches || reduced) {
        stage.style.paddingTop = tablet.matches ? "" : "64px";
        return;
      }
      const angle = desktop.matches ? 5 : 3;
      const height = laptop.getBoundingClientRect().height;
      const offset = height * Math.sin((angle * Math.PI) / 180);
      const gap = desktop.matches ? 96 : 64;
      stage.style.paddingTop = `${Math.max(0, gap - offset)}px`;
    };

    const paint = () => {
      if (!running) return;
      const flat = reduced || !tablet.matches;
      if (flat) {
        laptop.style.transform = reduced && tablet.matches ? "rotateX(5deg)" : "none";
        phone.style.transform = reduced && tablet.matches ? "rotateX(5deg)" : "none";
        phone.style.opacity = "1";
        return;
      }

      const rect = stage.getBoundingClientRect();
      const raw = Math.min(1, Math.max(0, 1 - rect.top / (window.innerHeight * 0.85)));
      const eased = 1 - (1 - raw) ** 3;
      scrollP += (eased - scrollP) * 0.12;
      const pointer = fine.matches && desktop.matches;
      px += ((pointer ? tx : 0) - px) * 0.08;
      py += ((pointer ? ty : 0) - py) * 0.08;
      const tiltX = pointer ? px : 0;
      const tiltY = pointer ? py : 0;
      const strength = desktop.matches ? 1 : 0.6;
      const restX = (5 + (1 - scrollP) * 18) * strength;
      const lift = (1 - scrollP) * strength;
      laptop.style.transform = `rotateX(${restX - tiltY * 2.5}deg) rotateY(${tiltX * 4}deg) translateY(${lift * 60}px)`;
      phone.style.transform = `translate(${-tiltX * 8}px, ${lift * 140 - tiltY * 6}px) rotateX(${restX - tiltY * 3}deg) rotateY(${tiltX * 6}deg)`;
      phone.style.opacity = String(Math.min(1, 0.2 + scrollP * 1.2));
    };

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      if (rect.width === 0) return;
      tx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      ty = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    const start = () => {
      if (frame) return;
      const loop = () => {
        paint();
        if (running) frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
      frame = 0;
    };
    applyPad();
    const watcher = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          running = true;
          start();
        } else {
          stop();
        }
      },
      { rootMargin: "100% 0px" },
    );
    watcher.observe(stage);
    const onResize = () => applyPad();
    window.addEventListener("resize", onResize);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      stop();
      watcher.disconnect();
      window.removeEventListener("resize", onResize);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, [reduced]);

  return (
    <section className="case-showcase" aria-label={project.title[locale]}>
      <div className="wrap-hero">
        <div className="case-stage" ref={stageRef}>
          <div className="case-laptop" ref={laptopRef}>
            <div className="case-laptop-bar">
              <span className="case-laptop-domain">{project.domain}</span>
            </div>
            <div className="case-laptop-screen">
              <Image
                src={project.showcase.desktop[locale]}
                alt={project.showcase.altDesktop[locale]}
                fill
                sizes="(max-width: 1024px) 90vw, 950px"
              />
            </div>
          </div>
          <div className="case-phone" ref={phoneRef}>
            <div className="case-phone-screen">
              <Image
                src={project.showcase.mobile[locale]}
                alt={project.showcase.altMobile[locale]}
                fill
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
