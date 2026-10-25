import type { Locale } from "@/data/content";

export type LocalizedText = Record<Locale, string>;

export type Project = {
  slug: string;
  name: string;
  type: LocalizedText;
  industry: LocalizedText;
  description: LocalizedText;
  stage: string;
  domain: string;
  liveUrl: string;
  desktopImage: string;
  mobileImage: string;
};

export const projects: Project[] = [
  {
    slug: "salty-boat-trips",
    name: "Salty Boat Trips",
    type: { en: "Booking site", el: "Booking site" },
    industry: { en: "Tourism", el: "Τουρισμός" },
    description: {
      en: "Premium charter site for private RIB trips, day cruises and transfers in Mykonos, with fleet pages and enquiry-led booking.",
      el: "Premium site για ιδιωτικές εκδρομές με RIB, day cruises και transfers στη Μύκονο, με σελίδες στόλου και booking μέσω αιτήματος.",
    },
    stage: "#23413D",
    domain: "saltyboattrips.com",
    liveUrl: "https://www.saltyboattrips.com/",
    desktopImage: "/projects/salty-boat-trips-desktop.jpg",
    mobileImage: "/projects/salty-boat-trips-mobile.jpg",
  },
  {
    slug: "dr-baumann",
    name: "Dr. Baumann Hellas",
    type: { en: "Eshop", el: "Eshop" },
    industry: { en: "Skincare", el: "Περιποίηση δέρματος" },
    description: {
      en: "Bilingual skincare store with filtered collections and card, PayPal and Viva payments.",
      el: "Δίγλωσσο eshop περιποίησης δέρματος με φίλτρα συλλογών και πληρωμές με κάρτα, PayPal και Viva.",
    },
    stage: "#EAE3D8",
    domain: "dr-baumann.gr",
    liveUrl: "https://dr-baumann.gr/",
    desktopImage: "/projects/dr-baumann-desktop.jpg",
    mobileImage: "/projects/dr-baumann-mobile.jpg",
  },
  {
    slug: "techne",
    name: "Techne.",
    type: { en: "Website", el: "Website" },
    industry: { en: "Architecture", el: "Αρχιτεκτονική" },
    description: {
      en: "Bilingual site for an Athens design & build firm, with services, project portfolio and upcoming developments.",
      el: "Δίγλωσσο site για γραφείο design & build στην Αθήνα, με υπηρεσίες, portfolio έργων και upcoming developments.",
    },
    stage: "#3A0D0D",
    domain: "technebuild.com",
    liveUrl: "https://technebuild.com/",
    desktopImage: "/projects/techne-desktop.jpg",
    mobileImage: "/projects/techne-mobile.jpg",
  },
];

export function projectLabel(project: Project, locale: Locale) {
  return `${project.type[locale]} · ${project.industry[locale]}`;
}

export const selectedProjects = projects.slice(0, 3);
