import { CONTACT_EMAIL, EMAIL_PLACEHOLDER, SITE_URL } from "./env";

export { SITE_URL };

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
  /** From NEXT_PUBLIC_CONTACT_EMAIL. Until it is set, emailDisplay shows a placeholder with no link. */
  email: CONTACT_EMAIL,
  emailDisplay: CONTACT_EMAIL ?? EMAIL_PLACEHOLDER,
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
    durationMin: 30,
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
    // TODO: replace with real team video before launch
    src1080: "/video/team-placeholder.mp4",
    src720: "",
    poster: "/video/team-placeholder-poster.jpg",
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

export const emailHref = CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : null;

export const phoneHref = `tel:${(site.phone ?? site.phoneDisplay).replace(/\s+/g, "")}`;
