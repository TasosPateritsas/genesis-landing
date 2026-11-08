"use client";

import Image from "next/image";
import Link from "next/link";
import { caseCopy } from "@/data/projectCopy";
import { projectNeighbors, type Project } from "@/data/projects";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";
import { caseRevealMargin } from "@/components/project/CaseDivider";

function NavCard({
  project,
  direction,
  single,
}: {
  project: Project;
  direction: "prev" | "next";
  single?: boolean;
}) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const copy = caseCopy(locale);
  const label = direction === "next" ? copy.next : copy.previous;
  return (
    <Link
      href={hrefFor(`/work/${project.slug}`)}
      className={`case-nav-card is-${direction}${single ? " is-single" : ""}`}
    >
      <div className="case-nav-media">
        <Image
          src={project.image[locale]}
          alt={locale === "el" ? `Αρχική της ${project.name.el}` : `${project.name.en} homepage`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
      <div className="case-nav-copy">
        <p className="case-nav-label">
          {direction === "prev" ? <span className="case-nav-arrow">←</span> : null}
          {label}
          {direction === "next" ? <span className="case-nav-arrow">→</span> : null}
        </p>
        <h3>{project.name[locale]}</h3>
      </div>
    </Link>
  );
}

export function CaseNav({ project }: { project: Project }) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const { prev, next } = projectNeighbors(project);
  const [ref, on] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  if (!prev && !next) return null;
  const single = Boolean(prev) !== Boolean(next);
  const only = next ?? prev;
  if (!only) return null;

  return (
    <section ref={ref} className={on ? "case-nav is-revealed" : "case-nav"}>
      <div className={single ? "case-l2" : "case-l1"}>
        <div className="case-projects-row gx-up">
          {project.kind === "live" ? <p>{locale === "el" ? "ΠΕΡΙΣΣΟΤΕΡΑ ΕΡΓΑ" : "MORE PROJECTS"}</p> : null}
          <Link href={hrefFor("/work")}>
            {locale === "el" ? "Όλα τα έργα" : "All projects"}<span aria-hidden>→</span>
          </Link>
        </div>
        {single ? (
          <div className="gx-up">
            <NavCard project={only} direction={next ? "next" : "prev"} single />
          </div>
        ) : (
          <div className="case-nav-grid is-pair">
            {prev ? (
              <div className="gx-up">
                <NavCard project={prev} direction="prev" />
              </div>
            ) : null}
            {next ? (
              <div className="gx-up" style={stagger(1)}>
                <NavCard project={next} direction="next" />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}

export function CaseAllProjects() {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  return (
    <div className="case-projects-end">
      <Link href={hrefFor("/work")}>
        {locale === "el" ? "Όλα τα έργα" : "All projects"}<span aria-hidden>→</span>
      </Link>
    </div>
  );
}

export function CaseClosing({ lead = false }: { lead?: boolean }) {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [ref, on] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  return (
    <section
      ref={ref}
      className={`${on ? "case-close is-revealed" : "case-close"}${lead ? " is-lead" : ""}`}
      aria-labelledby="case-close-title"
    >
      <div className="wrap-hero">
        <h2 id="case-close-title" className="gx-up">
          {t.workPage.ctaTitle}
        </h2>
        <p className="gx-up" style={stagger(1)}>
          {t.workPage.ctaBody}
        </p>
        <div className="gx-up" style={stagger(2)}>
          <Link href={hrefFor("/contact")} className="case-btn">
            {t.nav.cta}
            <span className="case-btn-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
