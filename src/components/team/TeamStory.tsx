"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import type { Locale } from "@/data/content";
import { storyCommand, storyCommits, storyTitle } from "@/data/teamPage";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReveal } from "@/lib/reveal";
import { localizePath } from "@/lib/routes";
import { SideTitle } from "@/components/team/SideTitle";

const EASE = "cubic-bezier(.33,1,.68,1)";
const DESKTOP_X = [260, 480, 700, 920] as const;
const MOBILE_Y = [78, 230, 382, 520] as const;

function CommitCopy({
  commit,
  locale,
}: {
  commit: (typeof storyCommits)[number];
  locale: Locale;
}) {
  const href = "href" in commit ? localizePath(commit.href, locale) : undefined;
  return (
    <div className="team-story-meta">
      <p className="team-story-year">{commit.year}</p>
      <p className="team-story-type">{commit.type}</p>
      <p className="team-story-message">{href ? <Link href={href}>{commit.message}</Link> : commit.message}</p>
    </div>
  );
}

function DesktopGraph({ locale }: { locale: Locale }) {
  return (
    <svg className="team-story-desktop" viewBox="0 0 1120 320" role="img" aria-label="Genesis timeline">
      <text className="team-story-branch is-despoina" x="20" y="32">
        despoina
      </text>
      <text className="team-story-branch is-pantelis" x="20" y="102">
        pantelis
      </text>
      <text className="team-story-branch is-anastasis" x="20" y="198">
        anastasis
      </text>
      <text className="team-story-branch is-main" x="700" y="96" textAnchor="middle">
        main
      </text>
      <path className="is-despoina" data-draw="branch" d="M20 40 H150 C210 40 210 110 260 110" />
      <path className="is-pantelis" data-draw="branch" d="M20 110 H260" />
      <path className="is-anastasis" data-draw="branch" d="M20 180 H150 C210 180 210 110 260 110" />
      <path className="is-main" data-draw="main" d="M260 110 H700" />
      <path className="is-future" data-draw="future" d="M700 110 H1080" />
      {storyCommits.map((commit, index) => {
        const x = DESKTOP_X[index] ?? 0;
        const future = index === storyCommits.length - 1;
        return (
          <g key={commit.year} data-commit="">
            <circle
              cx={x}
              cy="110"
              r="8"
              fill="#1d1f21"
              stroke={future ? "#9FE3CF" : "#e6e6e6"}
              strokeWidth="2.5"
              strokeDasharray={future ? "3 3" : undefined}
            />
            <foreignObject x={x + 16} y="124" width="180" height="160">
              <CommitCopy commit={commit} locale={locale} />
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

function MobileGraph({ locale }: { locale: Locale }) {
  return (
    <svg className="team-story-mobile" viewBox="0 0 400 640" role="img" aria-label="Genesis timeline">
      <text className="team-story-branch is-despoina" x="18" y="20">
        despoina
      </text>
      <text className="team-story-branch is-pantelis" x="18" y="70">
        pantelis
      </text>
      <text className="team-story-branch is-anastasis" x="18" y="148">
        anastasis
      </text>
      <path className="is-despoina" data-draw="branch" d="M18 28 H48 C66 28 66 78 78 78" />
      <path className="is-pantelis" data-draw="branch" d="M18 78 H78" />
      <path className="is-anastasis" data-draw="branch" d="M18 128 H48 C66 128 66 78 78 78" />
      <path className="is-main" data-draw="main" d="M78 78 V382" />
      <path className="is-future" data-draw="future" d="M78 382 V520" />
      {storyCommits.map((commit, index) => {
        const y = MOBILE_Y[index] ?? 0;
        const future = index === storyCommits.length - 1;
        return (
          <g key={commit.year} data-commit="">
            <circle
              cx="78"
              cy={y}
              r="8"
              fill="#1d1f21"
              stroke={future ? "#9FE3CF" : "#e6e6e6"}
              strokeWidth="2.5"
              strokeDasharray={future ? "3 3" : undefined}
            />
            <foreignObject x="108" y={y - 20} width="280" height="120">
              <CommitCopy commit={commit} locale={locale} />
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

function visibleGraph(root: HTMLElement) {
  return [...root.querySelectorAll<SVGSVGElement>("svg")].find((svg) => svg.getClientRects().length > 0) ?? null;
}

function hideGraph(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGGeometryElement>("[data-draw='branch'], [data-draw='main']").forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
    path.style.opacity = "0";
  });
  svg.querySelectorAll<SVGGeometryElement>("[data-draw='future']").forEach((path) => {
    path.style.opacity = "0";
  });
  svg.querySelectorAll<SVGTextElement>(".team-story-branch").forEach((node) => {
    node.style.opacity = "0";
  });
  svg.querySelectorAll<SVGGElement>("[data-commit]").forEach((node) => {
    node.style.opacity = "0";
    node.style.translate = "0 12px";
  });
}

function clearGraph(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGElement>("[data-draw], .team-story-branch, [data-commit]").forEach((node) => {
    node.style.transition = "";
    node.style.opacity = "";
    node.style.strokeDasharray = "";
    node.style.strokeDashoffset = "";
    node.style.translate = "";
  });
}

function playGraph(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGGeometryElement>("[data-draw='branch']").forEach((path) => {
    path.style.transition = `stroke-dashoffset 1.1s ${EASE}, opacity 0.4s ${EASE}`;
    path.style.opacity = "1";
    path.style.strokeDashoffset = "0";
  });
  svg.querySelectorAll<SVGTextElement>(".team-story-branch").forEach((node) => {
    node.style.transition = `opacity 0.45s ${EASE}`;
    node.style.opacity = "1";
  });
  [...svg.querySelectorAll<SVGGeometryElement>("[data-draw='main'], [data-draw='future']")].forEach((path, index) => {
    const delay = 1.1 + index * 0.7;
    path.style.transition = `stroke-dashoffset 0.7s ${EASE} ${delay}s, opacity 0.4s ${EASE} ${delay}s`;
    path.style.opacity = "1";
    if (path.dataset.draw === "main") path.style.strokeDashoffset = "0";
  });
  svg.querySelectorAll<SVGGElement>("[data-commit]").forEach((node, index) => {
    const delay = 0.35 * (index + 1);
    node.style.transition = `opacity 0.45s ${EASE} ${delay}s, translate 0.45s ${EASE} ${delay}s`;
    node.style.opacity = "1";
    node.style.translate = "0 0";
  });
}

export function TeamStory() {
  const { locale } = useLocale();
  const [pairRef, revealed] = useReveal<HTMLDivElement>();
  const terminalRef = useRef<HTMLDivElement>(null);
  const dollarRef = useRef<HTMLSpanElement>(null);
  const restRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const terminal = terminalRef.current;
    const dollar = dollarRef.current;
    const rest = restRef.current;
    if (!terminal || !dollar || !rest) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timers: number[] = [];
    const svg = visibleGraph(terminal);
    if (svg) hideGraph(svg);
    dollar.textContent = "";
    rest.textContent = "";

    const write = (value: string) => {
      const hasDollar = value.startsWith("$");
      dollar.textContent = hasDollar ? "$" : "";
      rest.textContent = hasDollar ? value.slice(1) : value;
    };

    const typeFrom = (index: number) => {
      if (cancelled) return;
      const next = index + 1;
      write(storyCommand.slice(0, next));
      if (next < storyCommand.length) {
        timers.push(window.setTimeout(() => typeFrom(next), 40 + Math.random() * 30));
        return;
      }
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          const current = visibleGraph(terminal);
          if (!current) return;
          hideGraph(current);
          window.requestAnimationFrame(() => {
            if (!cancelled) playGraph(current);
          });
        }, 350),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (cancelled || !entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timers.push(window.setTimeout(() => typeFrom(0), 400));
      },
      { threshold: 0.45 },
    );
    observer.observe(terminal);

    return () => {
      cancelled = true;
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      dollar.textContent = "$";
      rest.textContent = storyCommand.slice(1);
      if (svg) clearGraph(svg);
    };
  }, []);

  return (
    <section className="team-story team-section" aria-labelledby="team-story-heading">
      <div className="wrap-content">
        <div ref={pairRef} className={revealed ? "team-pair is-revealed" : "team-pair"}>
          <SideTitle id="team-story-heading" title={storyTitle} className="gx-up" />
          <div ref={terminalRef} className="team-terminal">
            <div className="team-terminal-bar">
              <p className="team-terminal-title">team@genesis: ~/genesis</p>
              <div className="team-terminal-controls" aria-hidden>
                <span />
                <span />
                <span className="is-close" />
              </div>
            </div>
            <div className="team-terminal-body">
              <p className="sr-only">{storyCommand}</p>
              <p className="team-story-command" aria-hidden>
                <span ref={dollarRef} className="team-story-dollar">
                  $
                </span>
                <span ref={restRef}>{storyCommand.slice(1)}</span>
                <span className="team-story-caret" />
              </p>
              <DesktopGraph locale={locale} />
              <MobileGraph locale={locale} />
            </div>
            <ol className="sr-only">
              {storyCommits.map((commit) => {
                const href = "href" in commit ? localizePath(commit.href, locale) : undefined;
                return (
                  <li key={commit.year}>
                    {commit.year} {commit.type}: {href ? <Link href={href}>{commit.message}</Link> : commit.message}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
