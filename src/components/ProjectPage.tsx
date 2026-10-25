"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectHero, ProjectShowcase } from "@/components/work/ProjectHero";
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
      </main>
      <Footer />
    </>
  );
}
