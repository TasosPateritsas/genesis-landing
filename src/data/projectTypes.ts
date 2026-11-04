import type { Locale } from "@/data/content";
import type { ScoreSet } from "@/lib/pageSpeed";

export type LocalizedText = Record<Locale, string>;

export type Shot = {
  image: LocalizedText;
  alt: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
};

export type Feature = {
  icon: string;
  title: LocalizedText;
  text: LocalizedText;
};

export type ProjectReview = {
  role: LocalizedText;
  name: string;
  text: string;
  date: string;
};

export type ProjectKind = "live" | "upcoming";

export type Project = {
  slug: string;
  kind: ProjectKind;
  name: LocalizedText;
  type: LocalizedText;
  industry: LocalizedText;
  description: LocalizedText;
  stage: string;
  domain: string;
  liveUrl?: LocalizedText;
  desktopImage: string;
  mobileImage: string;
  image: LocalizedText;
  showcase: {
    desktop: LocalizedText;
    mobile: LocalizedText;
    desktopAlt: LocalizedText;
    mobileAlt: LocalizedText;
  };
  intro: LocalizedText;
  /** Document title, share line and description. */
  meta?: {
    title: LocalizedText;
    description?: LocalizedText;
    share: LocalizedText;
  };
  client: LocalizedText;
  services: LocalizedText;
  year: string;
  titleLines?: { en: string[]; el: string[] };
  storyTitle: LocalizedText;
  storySubtitle: LocalizedText;
  brief: LocalizedText;
  built: Feature[];
  gallery?: {
    wide: Shot;
    row: [Shot, Shot, Shot];
    mobile: {
      images: [LocalizedText, LocalizedText, LocalizedText];
      alts: [LocalizedText, LocalizedText, LocalizedText];
      title: LocalizedText;
      text: LocalizedText;
    };
  };
  results?: { desktop: ScoreSet; mobile: ScoreSet };
  review?: ProjectReview;
  /** Upcoming Weddingflow page blocks (package 9). */
  weddingflow?: WeddingflowContent;
};

export interface Slide {
  image: LocalizedText;
  alt: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
}

export type WeddingflowTagIcon =
  | "overview"
  | "requests"
  | "messages"
  | "calendar"
  | "saved"
  | "guests"
  | "seating"
  | "reviews"
  | "halls"
  | "profile";

export interface WeddingflowStat {
  value: number;
  label: LocalizedText;
}

export interface WeddingflowCarouselStep {
  label: LocalizedText;
  caption: LocalizedText;
  image: LocalizedText;
  alt: LocalizedText;
}

export interface WeddingflowTag {
  icon: WeddingflowTagIcon;
  label: LocalizedText;
}

export interface WeddingflowSide {
  id: "couples" | "venues" | "pros";
  pill: LocalizedText;
  heading: LocalizedText;
  lead: LocalizedText;
  onboardingLabel: LocalizedText;
  steps: WeddingflowCarouselStep[];
  dashboardLabel: LocalizedText;
  dashboard: {
    image: LocalizedText;
    alt: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
  };
  tags: WeddingflowTag[];
  /** Venues row flips media/text columns. */
  flipped?: boolean;
}

export interface WeddingflowContent {
  productBadge: LocalizedText;
  countdownLabel: LocalizedText;
  countdownUnits: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  notifyLink: LocalizedText;
  /** ISO launch instant — Europe/Athens (+03:00). */
  launchAt: string;
  stats: WeddingflowStat[];
  problem: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    cards: [LocalizedText, LocalizedText];
    cardBodies: [LocalizedText, LocalizedText];
    solutionLabel: LocalizedText;
    solution: LocalizedText;
  };
  flow: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    steps: Array<{ title: LocalizedText; who: LocalizedText; text: LocalizedText }>;
    pair: [Slide, Slide];
  };
  sides: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    items: WeddingflowSide[];
  };
  visitors: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    listLabel: LocalizedText;
    steps: WeddingflowCarouselStep[];
    phones: [LocalizedText, LocalizedText, LocalizedText];
    phoneAlts: [LocalizedText, LocalizedText, LocalizedText];
    phonesTitle: LocalizedText;
    phonesText: LocalizedText;
  };
  howWeWork: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    items: Array<{ title: LocalizedText; text?: LocalizedText; tags?: string[] }>;
  };
  next: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    cards: Array<{
      tag: LocalizedText;
      tone: "ready" | "progress" | "next";
      title: LocalizedText;
      text: LocalizedText;
    }>;
  };
  waitlist: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
  };
  cta: {
    title: LocalizedText;
    text: LocalizedText;
    button: LocalizedText;
  };
}
