"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaseGallery } from "@/components/work/CaseGallery";
import { CaseHero } from "@/components/work/CaseHero";
import { CaseNeighbors } from "@/components/work/CaseNeighbors";
import { CaseResults } from "@/components/work/CaseResults";
import { CaseReview } from "@/components/work/CaseReview";
import { CaseShowcase } from "@/components/work/CaseShowcase";
import { CaseStudy } from "@/components/work/CaseStudy";
import { WorkClosingCta } from "@/components/work/WorkClosingCta";
import { resultsVisible } from "@/data/metricCopy";
import { getProject } from "@/data/projects";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;
  const showResults = resultsVisible(project.results.desktop, project.results.mobile);

  return (
    <>
      <Header variant="dark" />
      <main className="case-page">
        <CaseHero project={project} />
        <CaseShowcase project={project} />
        <CaseStudy project={project} />
        <CaseGallery project={project} />
        {showResults ? <CaseResults project={project} /> : null}
        <CaseReview project={project} />
        <CaseNeighbors project={project} />
        <WorkClosingCta tone="light" />
      </main>
      <Footer variant="dark" />
    </>
  );
}
