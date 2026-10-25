"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectHero, ProjectShowcase } from "@/components/work/ProjectHero";
import { ProjectNext } from "@/components/work/ProjectNext";
import { ProjectScreens } from "@/components/work/ProjectScreens";
import { ProjectStory } from "@/components/work/ProjectStory";
import { WorkClosingCta } from "@/components/work/WorkClosingCta";
import { getProject } from "@/data/projects";

export function ProjectPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) return null;

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />
        <ProjectShowcase project={project} />
        <ProjectStory project={project} />
        <ProjectScreens project={project} />
        <ProjectNext project={project} />
        <WorkClosingCta />
      </main>
      <Footer />
    </>
  );
}
