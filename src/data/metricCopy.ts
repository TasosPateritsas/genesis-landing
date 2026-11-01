import type { Locale } from "@/data/content";
import type { MetricId, ScoreSet } from "@/data/projectModel";

const performance = {
  en: {
    top: "In Google's top performance range (90+).",
    strong: "Strong Google PageSpeed performance score.",
    score: "Google PageSpeed performance score.",
  },
  el: {
    top: "Στην κορυφαία κατηγορία απόδοσης της Google (90+).",
    strong: "Υψηλή βαθμολογία απόδοσης Google PageSpeed.",
    score: "Βαθμολογία απόδοσης Google PageSpeed.",
  },
} as const;

const lcp = {
  en: {
    instant: "The main content appears in under a second.",
    good: "Within Google's “good” loading range (under 2.5 s).",
    slow: "Largest Contentful Paint — how fast the main content appears.",
  },
  el: {
    instant: "Το κύριο περιεχόμενο εμφανίζεται σε λιγότερο από ένα δευτερόλεπτο.",
    good: "Μέσα στο «καλό» όριο φόρτωσης της Google (κάτω από 2,5 s).",
    slow: "Largest Contentful Paint — πόσο γρήγορα εμφανίζεται το κύριο περιεχόμενο.",
  },
} as const;

const seo = {
  en: {
    all: "Every technical SEO check passes.",
    almost: "Passes almost every technical SEO check.",
    strong: "Strong technical SEO, checked with Google PageSpeed.",
  },
  el: {
    all: "Περνά κάθε τεχνικό έλεγχο SEO.",
    almost: "Περνά σχεδόν κάθε τεχνικό έλεγχο SEO.",
    strong: "Ισχυρό τεχνικό SEO, ελεγμένο με το Google PageSpeed.",
  },
} as const;

const accessibility = {
  en: {
    all: "Every accessibility check passes.",
    high: "Readable, navigable and usable for everyone.",
    strong: "Readable and easy to navigate, checked with Google PageSpeed.",
  },
  el: {
    all: "Περνά κάθε έλεγχο προσβασιμότητας.",
    high: "Ευανάγνωστο, εύκολο στην πλοήγηση και χρήσιμο για όλους.",
    strong: "Ευανάγνωστο και εύκολο στην πλοήγηση, ελεγμένο με το Google PageSpeed.",
  },
} as const;

export function metricDescription(metric: MetricId, value: number, locale: Locale) {
  if (metric === "performance") {
    if (value >= 90) return performance[locale].top;
    if (value >= 80) return performance[locale].strong;
    return performance[locale].score;
  }
  if (metric === "lcp") {
    if (value <= 1) return lcp[locale].instant;
    if (value <= 2.5) return lcp[locale].good;
    return lcp[locale].slow;
  }
  if (metric === "seo") {
    if (value >= 100) return seo[locale].all;
    if (value >= 90) return seo[locale].almost;
    return seo[locale].strong;
  }
  if (value >= 100) return accessibility[locale].all;
  if (value >= 90) return accessibility[locale].high;
  return accessibility[locale].strong;
}

export function resultsVisible(desktop: ScoreSet, mobile: ScoreSet) {
  return [desktop, mobile].every((set) => set.seo >= 80 && set.accessibility >= 80);
}

export function formatMetric(metric: MetricId, value: number) {
  if (metric === "lcp") return (Math.round(value * 10) / 10).toFixed(1);
  return String(Math.round(value));
}

export const metricOrder = ["performance", "lcp", "seo", "accessibility"] as const;
