"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { storyCommand, storyCommits, teamStoryCopy, type StoryCommit } from "@/data/teamStory";
import type { Locale } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePath } from "@/lib/routes";

const DESKTOP_X = [260, 480, 700, 920] as const;
const MOBILE_Y = [78, 230, 382, 520] as const;

function CommitMeta({
  commit,
  locale,
  href,
}: {
  commit: StoryCommit;
  locale: Locale;
  href?: string;
}) {
  const message = commit.text[locale];
  return (
    <div className="team-story-meta">
      <p className="team-story-year">{commit.year}</p>
      <p className="team-story-type">{commit.type}</p>
      <p className={`team-story-message${commit.href ? " is-link" : ""}`}>
        {href ? <Link href={href}>{message}</Link> : message}
      </p>
    </div>
  );
}

function DesktopGraph({ locale }: { locale: Locale }) {
  return (
    <svg
      className="team-story-desktop"
      data-axis="x"
      data-origin="260"
      data-span="440"
      viewBox="0 0 1000 300"
      width="100%"
      role="img"
      aria-label="Genesis timeline"
    >
      <text x="20" y="32" className="team-story-branch" fill="#0F6E56">
        despoina
      </text>
      <text x="20" y="102" className="team-story-branch" fill="#1E8A6C">
        pantelis
      </text>
      <text x="20" y="198" className="team-story-branch" fill="#6B8A7E">
        anastasis
      </text>
      <text x="700" y="96" textAnchor="middle" className="team-story-branch" fill="#14181A">
        main
      </text>
      <path data-draw="branch" d="M20 40 H150 C210 40 210 110 260 110" stroke="#0F6E56" />
      <path data-draw="branch" d="M20 110 H260" stroke="#34D399" />
      <path data-draw="branch" d="M20 180 H150 C210 180 210 110 260 110" stroke="#9CC7B7" />
      <path data-draw="main" d="M260 110 H700" stroke="#14181A" />
      <path data-draw="future" d="M700 110 H960" stroke="#14181A" strokeDasharray="2 8" />
      {storyCommits.map((commit, index) => {
        const x = DESKTOP_X[index];
        const future = index === storyCommits.length - 1;
        const href = commit.href ? localizePath(commit.href, locale) : undefined;
        return (
          <g key={commit.year}>
            <g data-commit={future ? "future" : "solid"} data-pos={x} className="team-story-commit">
              <circle
                cx={x}
                cy="110"
                r="10"
                fill={future ? "none" : "#ffffff"}
                stroke="#0F6E56"
                strokeWidth="3"
                strokeDasharray={future ? "2 3" : undefined}
              />
              {future ? null : <circle cx={x} cy="110" r="4" fill="#0F6E56" />}
            </g>
            <foreignObject x={x - 78} y="128" width="156" height="96" data-meta={future ? "future" : "solid"}>
              <CommitMeta commit={commit} locale={locale} href={href} />
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

function MobileGraph({ locale }: { locale: Locale }) {
  return (
    <svg
      className="team-story-mobile"
      data-axis="y"
      data-origin="78"
      data-span="304"
      viewBox="0 0 400 620"
      width="100%"
      role="img"
      aria-label="Genesis timeline"
    >
      <text x="18" y="20" className="team-story-branch" fill="#0F6E56">
        despoina
      </text>
      <text x="18" y="70" className="team-story-branch" fill="#1E8A6C">
        pantelis
      </text>
      <text x="18" y="148" className="team-story-branch" fill="#6B8A7E">
        anastasis
      </text>
      <text x="96" y="70" className="team-story-branch" fill="#14181A">
        main
      </text>
      <path data-draw="branch" d="M18 28 H48 C66 28 66 78 78 78" stroke="#0F6E56" />
      <path data-draw="branch" d="M18 78 H78" stroke="#34D399" />
      <path data-draw="branch" d="M18 128 H48 C66 128 66 78 78 78" stroke="#9CC7B7" />
      <path data-draw="main" d="M78 78 V382" stroke="#14181A" />
      <path data-draw="future" d="M78 382 V520" stroke="#14181A" strokeDasharray="2 8" />
      {storyCommits.map((commit, index) => {
        const y = MOBILE_Y[index];
        const future = index === storyCommits.length - 1;
        const href = commit.href ? localizePath(commit.href, locale) : undefined;
        return (
          <g key={commit.year}>
            <g data-commit={future ? "future" : "solid"} data-pos={y} className="team-story-commit">
              <circle
                cx="78"
                cy={y}
                r="10"
                fill={future ? "none" : "#ffffff"}
                stroke="#0F6E56"
                strokeWidth="3"
                strokeDasharray={future ? "2 3" : undefined}
              />
              {future ? null : <circle cx="78" cy={y} r="4" fill="#0F6E56" />}
            </g>
            <foreignObject x="108" y={y - 28} width="270" height="72" data-meta={future ? "future" : "solid"}>
              <CommitMeta commit={commit} locale={locale} href={href} />
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}

function visibleGraph(root: HTMLElement | null) {
  if (!root) return null;
  const graphs = [...root.querySelectorAll("svg")];
  return graphs.find((svg) => svg.getClientRects().length > 0) ?? null;
}

function prepareGraph(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGPathElement>("[data-draw='branch'], [data-draw='main']").forEach((path) => {
    const length = path.getTotalLength();
    if (!length) return;
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;
  });
  svg.querySelectorAll<SVGPathElement>("[data-draw='future']").forEach((path) => {
    path.style.opacity = "0";
  });
  svg.querySelectorAll<SVGGElement>("[data-commit]").forEach((node) => {
    node.style.opacity = "0";
    node.style.transform = "scale(0.6)";
  });
  svg.querySelectorAll<SVGForeignObjectElement>("[data-meta]").forEach((node) => {
    node.style.opacity = "0";
  });
}

function playGraph(svg: SVGSVGElement) {
  const origin = Number(svg.dataset.origin);
  const span = Number(svg.dataset.span);
  svg.querySelectorAll<SVGPathElement>("[data-draw='branch']").forEach((path, index) => {
    path.style.transition = `stroke-dashoffset 0.6s ease ${index * 0.08}s`;
    path.style.strokeDashoffset = "0";
  });
  svg.querySelectorAll<SVGPathElement>("[data-draw='main']").forEach((path) => {
    path.style.transition = "stroke-dashoffset 0.8s linear 0.6s";
    path.style.strokeDashoffset = "0";
  });
  svg.querySelectorAll<SVGPathElement>("[data-draw='future']").forEach((path) => {
    path.style.transition = "opacity 0.4s ease 1.4s";
    path.style.opacity = "0.6";
  });
  svg.querySelectorAll<SVGGElement>("[data-commit]").forEach((node) => {
    const pos = Number(node.dataset.pos);
    const delay = node.dataset.commit === "future" ? 1.5 : 0.6 + 0.8 * ((pos - origin) / span);
    node.style.transition = `opacity 0.3s ease ${delay}s, transform 0.3s ease ${delay}s`;
    node.style.opacity = "1";
    node.style.transform = "scale(1)";
  });
  svg.querySelectorAll<SVGForeignObjectElement>("[data-meta]").forEach((node) => {
    const commit = node.closest("g")?.querySelector<SVGGElement>("[data-commit]");
    const pos = Number(commit?.dataset.pos);
    const delay =
      node.dataset.meta === "future" ? 1.6 : 0.6 + 0.8 * ((pos - origin) / span) + 0.1;
    node.style.transition = `opacity 0.3s ease ${delay}s`;
    node.style.opacity = "1";
  });
}

export function TeamStory() {
  const { locale } = useLocale();
  const cardRef = useRef<HTMLDivElement>(null);
  const dollarRef = useRef<HTMLSpanElement>(null);
  const restRef = useRef<HTMLSpanElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = cardRef.current;
    const dollar = dollarRef.current;
    const rest = restRef.current;
    const graph = graphRef.current;
    if (!card || !dollar || !rest || !graph) return;

    let cancelled = false;
    let frame = 0;
    const timers: number[] = [];
    dollar.textContent = "";
    rest.textContent = "";
    graph.classList.add("is-hidden");

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
        timers.push(window.setTimeout(() => typeFrom(next), 25 + Math.random() * 25));
        return;
      }
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          const svg = visibleGraph(card);
          if (svg) prepareGraph(svg);
          graph.classList.remove("is-hidden");
          if (!svg) return;
          frame = window.requestAnimationFrame(() => {
            if (!cancelled) playGraph(svg);
          });
        }, 150),
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (cancelled || !entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timers.push(window.setTimeout(() => typeFrom(0), 200));
      },
      { threshold: 0.3 },
    );
    observer.observe(card);

    return () => {
      cancelled = true;
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
      if (frame) window.cancelAnimationFrame(frame);
      dollar.textContent = "$";
      rest.textContent = storyCommand.slice(1);
      graph.classList.remove("is-hidden");
    };
  }, []);

  return (
    <section className="team-story" aria-labelledby="team-story-heading">
      <div className="section-pad container-narrow">
        <div ref={cardRef} className="team-story-card">
          <h2 id="team-story-heading" className="team-story-title">
            {teamStoryCopy.titleLead[locale]}
            <span>{teamStoryCopy.titleAccent[locale]}</span>
          </h2>
          <p className="sr-only">{storyCommand}</p>
          <p className="team-story-command" aria-hidden="true">
            <span ref={dollarRef} className="team-story-dollar">
              $
            </span>
            <span ref={restRef}>{storyCommand.slice(1)}</span>
            <span className="team-story-caret" />
          </p>
          <div ref={graphRef} className="team-story-graph">
            <DesktopGraph locale={locale} />
            <MobileGraph locale={locale} />
          </div>
          <ol className="sr-only">
            {storyCommits.map((commit) => {
              const href = commit.href ? localizePath(commit.href, locale) : undefined;
              return (
                <li key={commit.year}>
                  {commit.year} {commit.type}:{" "}
                  {href ? <Link href={href}>{commit.text[locale]}</Link> : commit.text[locale]}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
