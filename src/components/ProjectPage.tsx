"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CaseClosing, CaseNav } from "@/components/project/CaseNav";
import { CaseGallery } from "@/components/project/CaseGallery";
import { CaseHero } from "@/components/project/CaseHero";
import { CaseQuote } from "@/components/project/CaseQuote";
import { CaseResults } from "@/components/project/CaseResults";
import { CaseShowcase } from "@/components/project/CaseShowcase";
import { CaseStory } from "@/components/project/CaseStory";
import { WeddingflowSections } from "@/components/project/WeddingflowSections";
import { getProject, projectNeighbors } from "@/data/projects";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;
  const live = project.kind === "live";
  const neighbors = projectNeighbors(project);
  const hasNav = Boolean(neighbors.prev || neighbors.next);

  return (
    <div className="case-page">
      <Header variant="dark" />
      <main>
        <CaseHero project={project} />
        <CaseShowcase project={project} />
        <CaseStory project={project} />
        {live ? <CaseGallery project={project} /> : null}
        {project.weddingflow ? <WeddingflowSections project={project} /> : null}
        {live ? <CaseResults project={project} /> : null}
        {live ? <CaseQuote project={project} /> : null}
        <CaseNav project={project} />
        <CaseClosing lead={!hasNav} />
      </main>
      <Footer variant="dark" />
    </div>
  );
}
