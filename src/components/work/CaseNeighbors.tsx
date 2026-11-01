"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projectModel";
import { projectChrome } from "@/data/projectChrome";
import { projectNeighbors } from "@/data/projects";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

function Neighbor({
  project,
  direction,
  solo,
  delay,
}: {
  project: Project;
  direction: "previous" | "next";
  solo: boolean;
  delay: number;
}) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const copy = projectChrome(locale);
  const label = direction === "previous" ? copy.previous : copy.next;

  return (
    <Link
      href={hrefFor(`/work/${project.slug}`)}
      className={`case-neighbor gx-up is-${direction}${solo ? " is-solo" : ""}`}
      style={stagger(delay)}
    >
      <span className="case-neighbor-copy">
        <span className="case-neighbor-label">
          {direction === "previous" ? <span className="case-neighbor-arrow" aria-hidden>←</span> : null}
          {label}
          {direction === "next" ? <span className="case-neighbor-arrow" aria-hidden>→</span> : null}
        </span>
        <span className="case-neighbor-title">{project.title[locale]}</span>
      </span>
      <span className="case-neighbor-media">
        <Image
          src={project.showcase.desktop[locale]}
          alt={project.showcase.altDesktop[locale]}
          fill
          sizes={solo ? "560px" : "420px"}
        />
      </span>
    </Link>
  );
}

export function CaseNeighbors({ project }: { project: Project }) {
  const { previous, next } = projectNeighbors(project.slug);
  const [ref, on] = useReveal<HTMLElement>(0.15, "0px 0px -8% 0px");
  const solo = Boolean(previous) !== Boolean(next);
  if (!previous && !next) return null;

  return (
    <section ref={ref} className={on ? "case-neighbors is-revealed" : "case-neighbors"}>
      <div className={`case-measure${solo ? "" : " case-neighbor-grid"}`}>
        {previous ? <Neighbor project={previous} direction="previous" solo={solo} delay={0} /> : null}
        {next ? <Neighbor project={next} direction="next" solo={solo} delay={previous ? 1 : 0} /> : null}
      </div>
    </section>
  );
}
