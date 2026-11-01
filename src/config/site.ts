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
  url: "https://genesis.studio",
  email: "hello@genesis.studio",
  /** E.164 number. `tel:` links render only once this is set. */
  phone: null as string | null,
  phoneDisplay: "+30 69X XXX XXXX",
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
  },
} as const;

export const phoneHref = site.phone ? `tel:${site.phone}` : null;
