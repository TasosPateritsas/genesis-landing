import { SITE_URL } from "@/lib/siteUrl";

export type StatId = "engineers" | "projects" | "years" | "inHouse";

export type Stat = {
  id: StatId;
  value: number;
  suffix: "" | "+" | "%";
};

const stats: readonly Stat[] = [
  { id: "engineers", value: 3, suffix: "" },
  { id: "projects", value: 20, suffix: "+" },
  { id: "years", value: 6, suffix: "+" },
  { id: "inHouse", value: 100, suffix: "%" },
];

export const site = {
  name: "Genesis",
  url: SITE_URL,
  email: "hello@genesis.studio",
  /** E.164 number. Falls back to the placeholder display until this is set. */
  phone: null as string | null,
  phoneDisplay: "+30 69X XXX XXXX",
  founders: ["Despoina Ntolka", "Pantelis Karamailis", "Anastasis Pateritsas"] as const,
  location: { en: "Athens, Greece", el: "Αθήνα, Ελλάδα" },
  colors: {
    dark: "#0B3B30",
    brand: "#0F6E56",
    mint: "#9FE3CF",
    light: "#F7FAF8",
  },
  stats,
  booking: {
    provider: "calendly",
    calendlyUrl: "https://calendly.com/TODO/intro-call",
    durationMin: 20,
  },
  google: {
    profileUrl: "https://www.google.com/maps/search/?api=1&query=Genesis%20Athens",
    reviewUrl: "https://www.google.com/maps/search/?api=1&query=Genesis%20Athens",
  },
  images: {
    howWeWorkBg: "/contact/how-we-work.jpg",
    contactBand: ["/contact/stats-portrait.png", "/contact/stats-workspace.png"],
    teamGroup: "",
  },
  video: {
    src1080: "",
    src720: "",
    poster: "",
    captions: { en: "", el: "" },
    chapters: [
      { seconds: 0, label: { en: "Who are we?", el: "Ποιοι είμαστε;" } },
      { seconds: 45, label: { en: "Why did we start Genesis?", el: "Γιατί ξεκινήσαμε τη Genesis;" } },
      {
        seconds: 90,
        label: { en: "What is it like to work with us?", el: "Πώς είναι να δουλεύει κανείς μαζί μας;" },
      },
      {
        seconds: 135,
        label: { en: "What kind of projects do we love?", el: "Τι projects αγαπάμε;" },
      },
    ],
  },
} as const;

export const phoneHref = `tel:${(site.phone ?? site.phoneDisplay).replace(/\s+/g, "")}`;
