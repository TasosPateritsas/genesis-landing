import type { Locale } from "@/data/content";
import { projectLabel, projects, type Project } from "@/data/projects";

export type WorkCard = {
  slug: string;
  title: Record<Locale, string>;
  meta: Record<Locale, string>;
  description: Record<Locale, string>;
  image: Record<Locale, string>;
  imageAlt: Record<Locale, string>;
};

function liveCard(project: Project): WorkCard {
  return {
    slug: project.slug,
    title: project.name,
    meta: { en: projectLabel(project, "en"), el: projectLabel(project, "el") },
    description: project.description,
    image: project.image,
    imageAlt: {
      en: `${project.name.en} homepage`,
      el: `Αρχική σελίδα, ${project.name.el}`,
    },
  };
}

export function liveCards(): WorkCard[] {
  return projects.filter((project) => project.kind === "live").map(liveCard);
}

export const upcomingCards: readonly WorkCard[] = [
  {
    slug: "weddingflow",
    title: { en: "Weddingflow", el: "Weddingflow" },
    meta: { en: "Marketplace · Weddings", el: "Marketplace · Γάμοι" },
    description: {
      en: "A three-sided wedding marketplace — from the first venue search to the seating plan.",
      el: "Ένα marketplace γάμου τριών πλευρών — από την πρώτη αναζήτηση χώρου ως το πλάνο τραπεζιών.",
    },
    image: {
      en: "/projects/weddingflow-table.jpg",
      el: "/projects/weddingflow-table.jpg",
    },
    imageAlt: {
      en: "Weddingflow — wedding table under olive trees",
      el: "Weddingflow — γαμήλιο τραπέζι κάτω από ελιές",
    },
  },
];
