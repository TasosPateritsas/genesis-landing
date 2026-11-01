"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const positions = new Map<string, number>();

function historyKey() {
  const state = history.state as { key?: string } | null;
  return state?.key ?? "root";
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: Math.max(0, top), behavior: "auto" });
}

export function ScrollReset() {
  const pathname = usePathname();
  const fromPop = useRef(false);
  const skipFirst = useRef(true);

  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";

    const save = () => positions.set(historyKey(), window.scrollY);
    const onPop = () => {
      fromPop.current = true;
    };

    save();
    window.addEventListener("scroll", save, { passive: true });
    window.addEventListener("popstate", onPop);
    return () => {
      history.scrollRestoration = previous;
      window.removeEventListener("scroll", save);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }

    if (fromPop.current) {
      fromPop.current = false;
      if (window.location.hash) {
        scrollToHash();
        return;
      }
      const y = positions.get(historyKey()) ?? 0;
      window.scrollTo(0, y);
      const frame = window.requestAnimationFrame(() => window.scrollTo(0, y));
      return () => window.cancelAnimationFrame(frame);
    }

    if (window.location.hash) {
      scrollToHash();
      return;
    }

    window.scrollTo(0, 0);
    const started = performance.now();
    let userMoved = false;
    let frame = 0;
    const stopPin = () => {
      userMoved = true;
    };
    const pin = (now: number) => {
      if (userMoved || now - started > 1200) return;
      if (window.scrollY !== 0) window.scrollTo(0, 0);
      frame = window.requestAnimationFrame(pin);
    };
    window.addEventListener("wheel", stopPin, { passive: true });
    window.addEventListener("touchmove", stopPin, { passive: true });
    frame = window.requestAnimationFrame(pin);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("wheel", stopPin);
      window.removeEventListener("touchmove", stopPin);
    };
  }, [pathname]);

  return null;
}
