import type { Locale } from "@/data/content";
import type { MetricId } from "@/data/projectModel";

export type ScoreTab = "desktop" | "mobile";

type Chrome = {
  visit: string;
  client: string;
  did: string;
  category: string;
  year: string;
  project: string;
  brief: string;
  built: string;
  inside: string;
  results: string;
  resultsTitle: string;
  desktop: string;
  mobile: string;
  performance: Record<ScoreTab, string>;
  lcp: string;
  seo: string;
  accessibility: string;
  source: string;
  testimonial: string;
  reviewOnGoogle: string;
  rated: string;
  previous: string;
  next: string;
};

const chrome: Record<Locale, Chrome> = {
  en: {
    visit: "Visit live site",
    client: "Client",
    did: "What we did",
    category: "Category",
    year: "Year",
    project: "The project",
    brief: "The brief",
    built: "What we built",
    inside: "Inside the site",
    results: "Results",
    resultsTitle: "Built for every device.",
    desktop: "Desktop",
    mobile: "Mobile",
    performance: { desktop: "Desktop performance", mobile: "Mobile performance" },
    lcp: "Page load",
    seo: "SEO",
    accessibility: "Accessibility",
    source: "Measured with Google PageSpeed Insights.",
    testimonial: "Client testimonial",
    reviewOnGoogle: "Review on Google",
    rated: "Rated 5 out of 5",
    previous: "Previous project",
    next: "Next project",
  },
  el: {
    visit: "Δείτε το site",
    client: "Πελάτης",
    did: "Τι κάναμε",
    category: "Κατηγορία",
    year: "Έτος",
    project: "Το έργο",
    brief: "Το brief",
    built: "Τι φτιάξαμε",
    inside: "Μέσα στο site",
    results: "Αποτελέσματα",
    resultsTitle: "Φτιαγμένο για κάθε συσκευή.",
    desktop: "Desktop",
    mobile: "Mobile",
    performance: { desktop: "Απόδοση στο desktop", mobile: "Απόδοση στο κινητό" },
    lcp: "Φόρτωση σελίδας",
    seo: "SEO",
    accessibility: "Προσβασιμότητα",
    source: "Μετρήθηκε με το Google PageSpeed Insights.",
    testimonial: "Μαρτυρία πελάτη",
    reviewOnGoogle: "Κριτική στο Google",
    rated: "Βαθμολογία 5 στα 5",
    previous: "Προηγούμενο έργο",
    next: "Επόμενο έργο",
  },
};

export function projectChrome(locale: Locale) {
  return chrome[locale];
}

export function metricLabel(locale: Locale, metric: MetricId, tab: ScoreTab) {
  const copy = chrome[locale];
  if (metric === "performance") return copy.performance[tab];
  if (metric === "lcp") return copy.lcp;
  if (metric === "seo") return copy.seo;
  return copy.accessibility;
}

export function metricUnit(metric: MetricId) {
  return metric === "lcp" ? "s" : "/100";
}
