import type { ScoreSet } from "@/lib/pageSpeed";
import type { Feature, LocalizedText, ProjectReview, Shot } from "@/data/projectTypes";

export const L = (en: string, el: string): LocalizedText => ({ en, el });
export const asset = (en: string, el = en) => L(en, el);

export const feature = (icon: string, title: [string, string], text: [string, string]): Feature => ({
  icon,
  title: L(title[0], title[1]),
  text: L(text[0], text[1]),
});

export const shot = (
  en: string,
  title: [string, string],
  text: [string, string],
  alt: [string, string],
  el = en,
): Shot => ({
  image: asset(en, el),
  title: L(title[0], title[1]),
  text: L(text[0], text[1]),
  alt: L(alt[0], alt[1]),
});

export const phone = (en: string, el = en) => asset(en, el);

export const review = (role: [string, string], name: string, text: string): ProjectReview => ({
  role: L(role[0], role[1]),
  name,
  text,
  date: "30 Oct 2026",
});

export const scores = (
  performance: number,
  lcp: number,
  seo: number,
  accessibility: number,
): ScoreSet => ({ performance, lcp, seo, accessibility });

export const delivered = L("Design · Development · Launch", "Σχεδιασμός · Ανάπτυξη · Launch");
