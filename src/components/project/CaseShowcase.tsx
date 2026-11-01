"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";

export function CaseShowcase({ project }: { project: Project }) {
  const { locale } = useLocale();
  const stageRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const laptop = laptopRef.current;
    const phone = phoneRef.current;
    const section = sectionRef.current;
    if (!stage || !laptop || !phone || !section) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const tablet = window.matchMedia("(min-width: 640px)");
    let smooth = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;

    const layout = () => {
      const flat = reduce.matches || !tablet.matches;
      section.classList.toggle("is-flat", flat || !desktop.matches);
      if (!tablet.matches) {
        section.style.paddingTop = "64px";
        return;
      }
      if (reduce.matches) {
        section.style.paddingTop = desktop.matches ? "96px" : "64px";
        return;
      }
      const angle = desktop.matches ? 5 : 3;
      const offset = laptop.offsetHeight * Math.sin((angle * Math.PI) / 180);
      const gap = desktop.matches ? 96 : 64;
      section.style.paddingTop = `${Math.max(0, gap - offset)}px`;
    };

    const paint = () => {
      const flat = !tablet.matches;
      const strength = desktop.matches ? 1 : 0.6;
      const point = desktop.matches && fine.matches && !reduce.matches;
      if (reduce.matches) {
        const tilt = flat ? "none" : "rotateX(5deg)";
        laptop.style.transform = tilt;
        phone.style.transform = tilt;
        phone.style.opacity = "1";
        return;
      }
      if (flat) {
        laptop.style.transform = "none";
        phone.style.transform = "none";
        phone.style.opacity = "1";
        return;
      }
      const lift = 1 - smooth;
      const laptopX = 5 * strength + lift * 18 * strength - (point ? ty * 2.5 : 0);
      const laptopY = point ? tx * 4 : 0;
      laptop.style.transform = `rotateX(${laptopX}deg) rotateY(${laptopY}deg) translateY(${lift * 60 * strength}px)`;
      const phoneX = 5 * strength + lift * 18 * strength - (point ? ty * 3 : 0);
      const phoneY = point ? tx * 6 : 0;
      const shiftX = point ? -tx * 8 : 0;
      const shiftY = lift * 140 * strength - (point ? ty * 6 : 0);
      phone.style.transform = `rotateX(${phoneX}deg) rotateY(${phoneY}deg) translate(${shiftX}px, ${shiftY}px)`;
      phone.style.opacity = String(Math.min(1, 0.2 + smooth * 1.2));
    };

    const tick = () => {
      const rect = stage.getBoundingClientRect();
      const raw = (window.innerHeight - rect.top) / (window.innerHeight * 0.85);
      const eased = 1 - (1 - Math.min(1, Math.max(0, raw))) ** 3;
      smooth += (eased - smooth) * 0.12;
      tx += (px - tx) * 0.08;
      ty += (py - ty) * 0.08;
      paint();
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };
    const onLeave = () => {
      px = 0;
      py = 0;
    };

    layout();
    paint();
    if (!reduce.matches && tablet.matches) frame = requestAnimationFrame(tick);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", layout);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", layout);
    };
  }, [locale, project.slug]);

  const desktop = project.showcase.desktop[locale];
  const mobile = project.showcase.mobile[locale];

  return (
    <section ref={sectionRef} className="case-showcase" aria-label={project.name[locale]}>
      <div className="wrap-hero">
        <div ref={stageRef} className="case-stage">
          <div ref={laptopRef} className="case-laptop">
            <div className="case-laptop-frame">
              <div className="case-laptop-bar">{project.domain}</div>
              <div className="case-laptop-shot">
                <Image
                  src={desktop}
                  alt={project.showcase.desktopAlt[locale]}
                  fill
                  sizes="(max-width: 1024px) 90vw, 950px"
                />
              </div>
            </div>
          </div>
          <div ref={phoneRef} className="case-phone">
            <div className="case-device" style={{ width: "100%" }}>
              <div className="case-device-screen">
                <Image
                  src={mobile}
                  alt={project.showcase.mobileAlt[locale]}
                  fill
                  sizes="240px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
