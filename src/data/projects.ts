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
  {
    slug: "chalkino-katsaroli",
    name: "Χάλκινο Κατσαρόλι",
    type: { en: "Website", el: "Website" },
    industry: { en: "Restaurant", el: "Εστίαση" },
    description: {
      en: "Daily menus for two kitchens in Chalkida and Artaki, mobile-first and built for local search.",
      el: "Καθημερινό μενού για δύο μαγειρεία σε Χαλκίδα και Αρτάκη, mobile-first και φτιαγμένο για τοπική αναζήτηση.",
    },
    stage: "#2B1C14",
    domain: "chalkino-katsaroli.gr",
    liveUrl: "https://www.chalkino-katsaroli.gr/",
    desktopImage: "/projects/chalkino-katsaroli-desktop.jpg",
    mobileImage: "/projects/chalkino-katsaroli-mobile.jpg",
  },
  {
    slug: "pantazelos",
    name: "Pantazelos Real Estate",
    type: { en: "Website", el: "Website" },
    industry: { en: "Real estate", el: "Ακίνητα" },
    description: {
      en: "Site for a real-estate agency in Skroponeria, covering buying and selling with engineering and legal support.",
      el: "Site για μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
    },
    stage: "#1E3440",
    domain: "pantazelosrealestate.gr",
    liveUrl: "https://www.pantazelosrealestate.gr/",
    desktopImage: "/projects/pantazelos-desktop.jpg",
    mobileImage: "/projects/pantazelos-mobile.jpg",
  },
  {
    slug: "horizon-realty",
    name: "Horizon Realty",
    type: { en: "Booking site", el: "Booking site" },
    industry: { en: "Hospitality", el: "Φιλοξενία" },
    description: {
      en: "Boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
      el: "Boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
    },
    stage: "#F2E6DE",
    domain: "horizonrealty.gr",
    liveUrl: "https://www.horizonrealty.gr/",
    desktopImage: "/projects/horizon-realty-desktop.jpg",
    mobileImage: "/projects/horizon-realty-mobile.jpg",
  },
  {
    slug: "vasileiadis",
    name: "Αποφράξεις Βασιλειάδης",
    type: { en: "Website", el: "Website" },
    industry: { en: "Local services", el: "Τοπικές υπηρεσίες" },
    description: {
      en: "24/7 drain-clearing service across Attica, built for a fast phone call and local search.",
      el: "Αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο για γρήγορο τηλέφωνο και τοπική αναζήτηση.",
    },
    stage: "#0F2A3D",
    domain: "apofraxeisvasileiadis.gr",
    liveUrl: "https://www.apofraxeisvasileiadis.gr/",
    desktopImage: "/projects/vasileiadis-desktop.jpg",
    mobileImage: "/projects/vasileiadis-mobile.jpg",
  },
];

export function projectLabel(project: Project, locale: Locale) {
  return `${project.type[locale]} · ${project.industry[locale]}`;
}

export const selectedProjects = projects.slice(0, 3);
