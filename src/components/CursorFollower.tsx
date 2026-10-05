"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR = "a, button, [role='button'], select, label";
const FIELD_SELECTOR = "input, textarea, [contenteditable]:not([contenteditable='false'])";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const fineQuery = window.matchMedia("(pointer: fine)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let running = false;
    let inside = false;
    let pointerX = 0;
    let pointerY = 0;
    let currentX = 0;
    let currentY = 0;

    const tick = () => {
      frame = window.requestAnimationFrame(tick);
      if (!inside) return;
      const lerp = reduceQuery.matches ? 1 : dot.dataset.hover === "true" ? 0.3 : 0.12;
      currentX += (pointerX - currentX) * lerp;
      currentY += (pointerY - currentY) * lerp;
      dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    };

    const stop = () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const start = () => {
      if (running || !fineQuery.matches) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const hide = () => {
      inside = false;
      dot.dataset.hidden = "true";
    };

    const onMove = (event: PointerEvent) => {
      if (!fineQuery.matches) return;
      const entered = !inside;
      inside = true;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (entered) {
        currentX = pointerX;
        currentY = pointerY;
      }

      const target = document.elementFromPoint(event.clientX, event.clientY);
      const overField = Boolean(target?.closest(FIELD_SELECTOR));
      dot.dataset.hidden = overField ? "true" : "false";
      dot.dataset.hover = !overField && Boolean(target?.closest(HOVER_SELECTOR)) ? "true" : "false";
      dot.dataset.dark = target?.closest("[data-cursor]")?.getAttribute("data-cursor") === "dark" ? "true" : "false";
      start();
    };

    const onFineChange = () => {
      if (fineQuery.matches) return;
      stop();
      hide();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    fineQuery.addEventListener("change", onFineChange);

    return () => {
      stop();
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", hide);
      fineQuery.removeEventListener("change", onFineChange);
    };
  }, []);

  return <div ref={dotRef} className="cursor-follower" data-hidden="true" aria-hidden="true" />;
}
