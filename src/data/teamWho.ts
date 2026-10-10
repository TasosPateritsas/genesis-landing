import type { Locale } from "@/data/content";

export const teamWhoCopy = {
  titleLead: {
    en: "Same team since our ",
    el: "Η ίδια ομάδα από τα ",
  },
  titleAccent: {
    en: "student days.",
    el: "φοιτητικά μας χρόνια.",
  },
  subtext: {
    en: "We met as Electrical & Computer Engineering students at the Technical University of Crete.",
    el: "Γνωριστήκαμε ως φοιτητές Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών στο Πολυτεχνείο Κρήτης.",
  },
  onProject: {
    en: "On a project",
    el: "Σε ένα project",
  },
  ask: {
    en: "Ask me about:",
    el: "Ρωτήστε με για:",
  },
} as const satisfies Record<string, Record<Locale, string>>;
