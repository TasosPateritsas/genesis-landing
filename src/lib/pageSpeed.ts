import type { Locale } from "@/data/content";

export type ScoreSet = {
  performance: number;
  lcp: number;
  seo: number;
  accessibility: number;
};

export type ResultMetric = "performance" | "lcp" | "seo" | "accessibility";

/** Hide Results when SEO or accessibility is below 80 on either device. */
export function resultsArePublishable(desktop: ScoreSet, mobile: ScoreSet) {
  return [desktop, mobile].every((set) => set.seo >= 80 && set.accessibility >= 80);
}

export function metricDescription(metric: ResultMetric, value: number, locale: Locale) {
  if (metric === "performance") return performanceCopy(value, locale);
  if (metric === "lcp") return lcpCopy(value, locale);
  if (metric === "seo") return seoCopy(value, locale);
  return accessibilityCopy(value, locale);
}

function performanceCopy(score: number, locale: Locale) {
  if (score >= 90) {
    return locale === "el"
      ? "Στην κορυφαία κατηγορία απόδοσης της Google (90+)."
      : "In Google's top performance range (90+).";
  }
  if (score >= 80) {
    return locale === "el"
      ? "Υψηλή βαθμολογία απόδοσης Google PageSpeed."
      : "Strong Google PageSpeed performance score.";
  }
  return locale === "el"
    ? "Βαθμολογία απόδοσης Google PageSpeed."
    : "Google PageSpeed performance score.";
}

function lcpCopy(seconds: number, locale: Locale) {
  if (seconds <= 1) {
    return locale === "el"
      ? "Το κύριο περιεχόμενο εμφανίζεται σε λιγότερο από ένα δευτερόλεπτο."
      : "The main content appears in under a second.";
  }
  if (seconds <= 2.5) {
    return locale === "el"
      ? "Μέσα στο «καλό» όριο φόρτωσης της Google (κάτω από 2,5 s)."
      : "Within Google's “good” loading range (under 2.5 s).";
  }
  return locale === "el"
    ? "Largest Contentful Paint — πόσο γρήγορα εμφανίζεται το κύριο περιεχόμενο."
    : "Largest Contentful Paint — how fast the main content appears.";
}

function seoCopy(score: number, locale: Locale) {
  if (score >= 100) {
    return locale === "el"
      ? "Περνά κάθε τεχνικό έλεγχο SEO."
      : "Every technical SEO check passes.";
  }
  if (score >= 90) {
    return locale === "el"
      ? "Περνά σχεδόν κάθε τεχνικό έλεγχο SEO."
      : "Passes almost every technical SEO check.";
  }
  return locale === "el"
    ? "Ισχυρό τεχνικό SEO, ελεγμένο με το Google PageSpeed."
    : "Strong technical SEO, checked with Google PageSpeed.";
}

function accessibilityCopy(score: number, locale: Locale) {
  if (score >= 100) {
    return locale === "el"
      ? "Περνά κάθε έλεγχο προσβασιμότητας."
      : "Every accessibility check passes.";
  }
  if (score >= 90) {
    return locale === "el"
      ? "Ευανάγνωστο, εύκολο στην πλοήγηση και χρήσιμο για όλους."
      : "Readable, navigable and usable for everyone.";
  }
  return locale === "el"
    ? "Ευανάγνωστο και εύκολο στην πλοήγηση, ελεγμένο με το Google PageSpeed."
    : "Readable and easy to navigate, checked with Google PageSpeed.";
}
