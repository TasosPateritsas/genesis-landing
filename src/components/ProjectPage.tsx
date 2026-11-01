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
import { getProject } from "@/data/projects";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;
  const live = project.kind === "live";

  return (
    <div className="case-page">
      <Header variant="dark" />
      <main>
        <CaseHero project={project} />
        <CaseShowcase project={project} />
        <CaseStory project={project} />
        {live ? <CaseGallery project={project} /> : null}
        {live ? <CaseResults project={project} /> : null}
        {live ? <CaseQuote project={project} /> : null}
        <CaseNav project={project} />
        <CaseClosing />
      </main>
      <Footer variant="dark" />
    </div>
  );
}
