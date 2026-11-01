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
  /** Upcoming projects render these blocks instead of the live gallery. */
  sections?: "weddingflow";
};
