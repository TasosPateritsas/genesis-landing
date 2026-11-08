"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, Landmark, User, X } from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";
import { CaseAllProjects } from "@/components/project/CaseNav";
import { caseRevealMargin } from "@/components/project/CaseDivider";
import { StepCarousel } from "@/components/project/weddingflow/StepCarousel";
import { TagIcon } from "@/components/project/weddingflow/TagIcon";
import type { Project, WeddingflowSide } from "@/data/projectTypes";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReducedMotion, useReveal } from "@/lib/reveal";

const SIDE_ICONS = {
  couples: Heart,
  venues: Landmark,
  pros: User,
} as const;

function easeOut(progress: number) {
  return 1 - (1 - progress) ** 3;
}

function StatItem({
  value,
  label,
  active,
  delayMs,
}: {
  value: number;
  label: string;
  active: boolean;
  delayMs: number;
}) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (reduced || !active) return;
    let frame = 0;
    const timer = window.setTimeout(() => {
      const begin = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - begin) / 1400);
        setShown(Math.round(easeOut(progress) * value));
        if (progress < 1) frame = window.requestAnimationFrame(step);
      };
      frame = window.requestAnimationFrame(step);
    }, delayMs);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, [active, delayMs, reduced, value]);

  return (
    <div className="wf-stat" aria-label={`${value} ${label}`}>
      <p className="wf-stat-value" aria-hidden>
        {reduced ? value : shown}
      </p>
      <p className="wf-stat-label" aria-hidden>
        {label}
      </p>
    </div>
  );
}

function SideBlock({ side, first }: { side: WeddingflowSide; first?: boolean }) {
  const { locale } = useLocale();
  const Icon = SIDE_ICONS[side.id];
  const flipped = Boolean(side.flipped);

  return (
    <div className={`wf-side${first ? " is-first" : ""}${flipped ? " is-flipped" : ""}`}>
      <div className="wf-side-marker">
        <span className="wf-side-pill">
          <span className="wf-side-pill-icon">
            <Icon size={14} strokeWidth={2} aria-hidden />
          </span>
          {side.pill[locale]}
        </span>
      </div>

      <div className="wf-side-onboard">
        <StepCarousel
          steps={side.steps}
          listLabel={side.onboardingLabel[locale]}
          flipped={flipped}
          beforeList={
            <>
              <h3 className="wf-side-h3">{side.heading[locale]}</h3>
              <p className="wf-side-lead">{side.lead[locale]}</p>
            </>
          }
        />
      </div>

      <div className="wf-side-dash">
        <figure className="wf-side-m2">
          <div className="wf-shot">
            <Image
              src={side.dashboard.image[locale]}
              alt={side.dashboard.alt[locale]}
              fill
              sizes="(min-width: 1024px) 640px, 100vw"
            />
          </div>
          <figcaption className="wf-carousel-caption">
            <b>{side.dashboard.title[locale]}</b> {side.dashboard.text[locale]}
          </figcaption>
        </figure>
        <div className="wf-side-t2">
          <p className="wf-carousel-kicker">{side.dashboardLabel[locale]}</p>
          <ul className="wf-tags">
            {side.tags.map((tag) => (
              <li key={tag.label.en}>
                <TagIcon name={tag.icon} />
                <span>{tag.label[locale]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function WeddingflowSections({ project }: { project: Project }) {
  const content = project.weddingflow;
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const [statsRef, statsOn] = useReveal<HTMLElement>(0.2, caseRevealMargin);
  const [problemRef, problemOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [flowRef, flowOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [sidesRef, sidesOn] = useReveal<HTMLElement>(0.12, caseRevealMargin);
  const [visitRef, visitOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [workRef, workOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [nextRef, nextOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [waitRef, waitOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  const [ctaRef, ctaOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);

  if (!content) return null;

  return (
    <>
      <section
        ref={statsRef}
        className={`wf-stats${statsOn ? " is-revealed" : ""}`}
        aria-label={locale === "el" ? "Στοιχεία Weddingflow" : "Weddingflow facts"}
      >
        <div className="case-l2 wf-stats-inner">
          {content.stats.map((stat, index) => (
            <StatItem
              key={stat.label.en}
              value={stat.value}
              label={stat.label[locale]}
              active={statsOn}
              delayMs={index * 80}
            />
          ))}
        </div>
      </section>

      <section ref={problemRef} className={`wf-section wf-problem${problemOn ? " is-revealed" : ""}`}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up wf-center">{content.problem.eyebrow[locale]}</p>
          <h2 className="wf-problem-title gx-up" style={stagger(1)}>
            {content.problem.title[locale]}
          </h2>
          <div className="wf-problem-cards gx-up" style={stagger(2)}>
            {content.problem.cards.map((label, index) => (
              <article key={label.en} className="wf-problem-card">
                <span className="wf-problem-x" aria-hidden>
                  <X size={14} strokeWidth={2.25} />
                </span>
                <p className="wf-problem-card-label">{label[locale]}</p>
                <p className="wf-problem-card-body">{content.problem.cardBodies[index][locale]}</p>
              </article>
            ))}
          </div>
          <div className="wf-problem-connector gx-up" style={stagger(3)} aria-hidden>
            <span className="wf-problem-line" />
            <span className="wf-problem-down">↓</span>
            <span className="wf-problem-line" />
          </div>
          <div className="wf-solution gx-up" style={stagger(4)}>
            <span className="wf-solution-check" aria-hidden>
              ✓
            </span>
            <p className="wf-solution-label">{content.problem.solutionLabel[locale]}</p>
            <p className="wf-solution-text">{content.problem.solution[locale]}</p>
          </div>
        </div>
      </section>

      <section ref={flowRef} className={`wf-section wf-flow${flowOn ? " is-revealed" : ""}`}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{content.flow.eyebrow[locale]}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>
            {content.flow.title[locale]}
          </h2>
          <p className="case-lead gx-up" style={stagger(2)}>
            {content.flow.lead[locale]}
          </p>
          <ol className="case-flow">
            {content.flow.steps.map((step, index) => (
              <li key={step.title.en} className="case-flow-step gx-up" style={stagger(index)}>
                <span className="case-flow-num">{index + 1}</span>
                <h3>{step.title[locale]}</h3>
                <p className="case-who wf-who">{step.who[locale]}</p>
                <p>{step.text[locale]}</p>
              </li>
            ))}
          </ol>
          <div className="case-pair">
            {content.flow.pair.map((item) => (
              <figure key={item.image.en} className="gx-up">
                <div className="case-shot-frame wf-shot-static">
                  <Image src={item.image[locale]} alt={item.alt[locale]} fill sizes="(min-width: 1024px) 540px, 100vw" />
                </div>
                <h3>{item.title[locale]}</h3>
                <p>{item.text[locale]}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section ref={sidesRef} className={`wf-section wf-sides${sidesOn ? " is-revealed" : ""}`}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{content.sides.eyebrow[locale]}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>
            {content.sides.title[locale]}
          </h2>
          <p className="case-lead gx-up" style={stagger(2)}>
            {content.sides.lead[locale]}
          </p>
          {content.sides.items.map((side, index) => (
            <SideBlock key={side.id} side={side} first={index === 0} />
          ))}
        </div>
      </section>

      <section ref={visitRef} className={`wf-section wf-visitors${visitOn ? " is-revealed" : ""}`}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{content.visitors.eyebrow[locale]}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>
            {content.visitors.title[locale]}
          </h2>
          <p className="case-lead gx-up" style={stagger(2)}>
            {content.visitors.lead[locale]}
          </p>
          <div className="wf-visit-row gx-up" style={stagger(3)}>
            <StepCarousel steps={content.visitors.steps} listLabel={content.visitors.listLabel[locale]} />
          </div>
          <figure className="wf-phones gx-up" style={stagger(4)}>
            <div className="case-phones">
              {content.visitors.phones.map((image, index) => (
                <div key={image.en} className="case-device">
                  <div className="case-device-screen">
                    <Image
                      src={image[locale]}
                      alt={content.visitors.phoneAlts[index][locale]}
                      fill
                      sizes="240px"
                    />
                  </div>
                </div>
              ))}
            </div>
            <figcaption className="wf-phones-caption">
              <h3>{content.visitors.phonesTitle[locale]}</h3>
              <p>{content.visitors.phonesText[locale]}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        ref={workRef}
        className={`wf-work${workOn ? " is-revealed" : ""}`}
        data-cursor="dark"
      >
        <div className="case-l2">
          <p className="wf-work-eyebrow gx-up">{content.howWeWork.eyebrow[locale]}</p>
          <h2 className="wf-work-title gx-up" style={stagger(1)}>
            {content.howWeWork.title[locale]}
          </h2>
          <div className="wf-work-grid">
            {content.howWeWork.items.map((item, index) => (
              <article key={item.title.en} className="wf-work-item gx-up" style={stagger(index)}>
                <h3>{item.title[locale]}</h3>
                {item.text ? <p>{item.text[locale]}</p> : null}
                {item.tags ? (
                  <ul className="wf-stack-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={nextRef} className={`wf-section wf-next${nextOn ? " is-revealed" : ""}`}>
        <div className="case-l2">
          <p className="case-eyebrow gx-up">{content.next.eyebrow[locale]}</p>
          <h2 className="case-h2 gx-up" style={stagger(1)}>
            {content.next.title[locale]}
          </h2>
          <div className="wf-timeline gx-up" style={stagger(2)}>
            <div className="wf-timeline-track" aria-hidden>
              {content.next.cards.map((card) => (
                <span key={card.title.en} className={`wf-timeline-dot is-${card.tone}`} />
              ))}
            </div>
            <div className="wf-timeline-cards">
              {content.next.cards.map((card) => (
                <article key={card.title.en} className={`wf-release is-${card.tone}`}>
                  <p className={`wf-release-tag is-${card.tone}`}>{card.tag[locale]}</p>
                  <h3>{card.title[locale]}</h3>
                  <p>{card.text[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        ref={waitRef}
        className={`wf-section wf-waitlist${waitOn ? " is-revealed" : ""}`}
      >
        <div className="case-l2 wf-waitlist-grid">
          <div>
            <p className="case-eyebrow gx-up">{content.waitlist.eyebrow[locale]}</p>
            <h2 className="case-h2 gx-up" style={stagger(1)}>
              {content.waitlist.title[locale]}
            </h2>
            <p className="case-lead gx-up" style={stagger(2)}>
              {content.waitlist.text[locale]}
            </p>
          </div>
          <div className="wf-waitlist-card gx-up" style={stagger(3)}>
            <WaitlistForm source="weddingflow" />
          </div>
        </div>
      </section>

      <CaseAllProjects />

      <section ref={ctaRef} className={`wf-section wf-cta${ctaOn ? " is-revealed" : ""}`}>
        <div className="wrap-hero">
          <h2 className="gx-up">{content.cta.title[locale]}</h2>
          <p className="gx-up" style={stagger(1)}>
            {content.cta.text[locale]}
          </p>
          <div className="gx-up" style={stagger(2)}>
            <Link href={hrefFor("/contact")} className="case-btn">
              {content.cta.button[locale]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
