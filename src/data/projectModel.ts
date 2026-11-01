import type { Locale } from "@/data/content";

export type LocalizedText = Record<Locale, string>;

export type FeatureIcon =
  | "sailboat"
  | "route"
  | "map"
  | "message"
  | "search"
  | "spark"
  | "layout"
  | "grid"
  | "document"
  | "building"
  | "envelope"
  | "globe"
  | "filter"
  | "card";

export type Feature = {
  icon: FeatureIcon;
  title: LocalizedText;
  text: LocalizedText;
};

export type Six<T> = [T, T, T, T, T, T];
export type Three<T> = [T, T, T];

export type GalleryShot = {
  image: LocalizedText;
  alt: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
};

export type ScoreSet = {
  performance: number;
  lcp: number;
  seo: number;
  accessibility: number;
};

export type MetricId = "performance" | "lcp" | "seo" | "accessibility";

export type MockReview = {
  kind: "mock";
  role: LocalizedText;
  name: string;
  quote: LocalizedText;
};

export type Project = {
  slug: string;
  name: string;
  title: LocalizedText;
  description: LocalizedText;
  stage: string;
  domain: string;
  liveUrl: LocalizedText;
  intro: LocalizedText;
  meta: {
    client: LocalizedText;
    whatWeDid: LocalizedText;
    category: LocalizedText;
    year: string;
  };
  showcase: {
    desktop: LocalizedText;
    mobile: LocalizedText;
    altDesktop: LocalizedText;
    altMobile: LocalizedText;
  };
  project: {
    title: LocalizedText;
    subtitle: LocalizedText;
    brief: LocalizedText;
    features: Six<Feature>;
  };
  gallery: {
    wide: GalleryShot;
    row: Three<GalleryShot>;
    mobile: {
      images: Three<LocalizedText>;
      alts: Three<LocalizedText>;
      title: LocalizedText;
      text: LocalizedText;
    };
  };
  results: {
    desktop: ScoreSet;
    mobile: ScoreSet;
  };
  review?: MockReview;
};

export const delivered: LocalizedText = {
  en: "Design · Development · Launch",
  el: "Σχεδιασμός · Ανάπτυξη · Launch",
};

export function text(en: string, el: string): LocalizedText {
  return { en, el };
}

export function same(value: string): LocalizedText {
  return { en: value, el: value };
}

export function file(folder: string, name: string, elName = name): LocalizedText {
  return {
    en: `/projects/${folder}/${name}`,
    el: `/projects/${folder}/${elName}`,
  };
}

export function feature(icon: FeatureIcon, title: LocalizedText, body: LocalizedText): Feature {
  return { icon, title, text: body };
}

export function shot(
  image: LocalizedText,
  title: LocalizedText,
  body: LocalizedText,
  alt: LocalizedText,
): GalleryShot {
  return { image, alt, title, text: body };
}
