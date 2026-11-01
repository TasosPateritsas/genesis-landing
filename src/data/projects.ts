import type { Locale } from "@/data/content";
import type { Project } from "@/data/projectModel";
import { baumann } from "@/data/projects/baumann";
import { chalkino } from "@/data/projects/chalkino";
import { horizon } from "@/data/projects/horizon";
import { pantazelos } from "@/data/projects/pantazelos";
import { salty } from "@/data/projects/salty";
import { techne } from "@/data/projects/techne";
import { vasileiadis } from "@/data/projects/vasileiadis";

export type { Feature, GalleryShot, MockReview, Project, ScoreSet } from "@/data/projectModel";

export const projects: Project[] = [
  salty,
  baumann,
  techne,
  chalkino,
  pantazelos,
  horizon,
  vasileiadis,
];

export function projectLabel(project: Project, locale: Locale) {
  return project.meta.category[locale];
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectNeighbors(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export const selectedProjects = projects.slice(0, 3);
