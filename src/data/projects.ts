import type { Locale } from "@/data/content";
import { salty } from "@/data/cases/salty";
import type { Project } from "@/data/projectTypes";

export type { Project, LocalizedText } from "@/data/projectTypes";

export const projects: Project[] = [salty];

export function projectLabel(project: Project, locale: Locale) {
  return `${project.type[locale]} · ${project.industry[locale]}`;
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectNeighbors(project: Project) {
  const list = projects.filter((item) => item.kind === project.kind);
  const index = list.findIndex((item) => item.slug === project.slug);
  const prev = index > 0 ? list[index - 1] : undefined;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : undefined;
  if (project.kind === "upcoming") {
    if (next) return { prev: undefined, next };
    return { prev, next: undefined };
  }
  return { prev, next };
}

export const selectedProjects = projects.filter((project) => project.kind === "live").slice(0, 3);
