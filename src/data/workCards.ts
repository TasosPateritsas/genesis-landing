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
  const title = project.listingTitle ?? { en: project.name, el: project.name };
  return {
    slug: project.slug,
    title,
    meta: { en: projectLabel(project, "en"), el: projectLabel(project, "el") },
    description: project.description,
    image: project.image,
    imageAlt: {
      en: `${title.en} homepage`,
      el: `Αρχική σελίδα, ${title.el}`,
    },
  };
}

export function liveCards(): WorkCard[] {
  return projects.map(liveCard);
}

export const upcomingCards: readonly WorkCard[] = [
  {
    slug: "weddingflow",
    title: { en: "Weddingflow", el: "Weddingflow" },
    meta: { en: "Web app · Weddings", el: "Web app · Γάμοι" },
    description: {
      en: "The first Greek platform that brings wedding venues, professionals and planning tools together — for engaged couples and wedding pros.",
      el: "Η πρώτη ελληνική πλατφόρμα που συγκεντρώνει χώρους γάμου, επαγγελματίες και εργαλεία σχεδιασμού — για ζευγάρια και επαγγελματίες του γάμου.",
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
