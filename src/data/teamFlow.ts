import type { Locale } from "@/data/content";
import type { TeamMemberId } from "@/data/team";

export type ProjectStep = {
  number: string;
  memberIds: readonly TeamMemberId[];
  title: Record<Locale, string>;
  /** Null uses the member's short name from the shared team config. */
  name: Record<Locale, string> | null;
  text: Record<Locale, string>;
};

export const projectFlowCopy = {
  kicker: {
    en: "How a project moves",
    el: "Πώς κινείται ένα project",
  },
  heading: {
    en: "One project, three pairs of hands.",
    el: "Ένα project, τρία ζευγάρια χέρια.",
  },
  subtext: {
    en: "No hand-offs to people you've never met. This is who touches your project, and when.",
    el: "Κανείς άγνωστος στη μέση. Αυτοί είναι όσοι δουλεύουν στο project σας, και πότε.",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export const projectSteps: readonly ProjectStep[] = [
  {
    number: "01",
    memberIds: ["despoina"],
    title: { en: "Scope & design", el: "Σχεδιασμός" },
    name: null,
    text: {
      en: "Turns your idea into a written plan, then designs and prototypes it before any code is written.",
      el: "Μετατρέπει την ιδέα σας σε γραπτό πλάνο και τη σχεδιάζει πριν γραφτεί κώδικας.",
    },
  },
  {
    number: "02",
    memberIds: ["pantelis"],
    title: { en: "Build", el: "Ανάπτυξη" },
    name: null,
    text: {
      en: "Builds the product in clean, fast code that you own from day one.",
      el: "Χτίζει το προϊόν σε καθαρό, γρήγορο κώδικα που ανήκει σε εσάς από την πρώτη μέρα.",
    },
  },
  {
    number: "03",
    memberIds: ["anastasis"],
    title: { en: "Ship", el: "Παράδοση" },
    name: null,
    text: {
      en: "Sets up hosting and deployments and takes it live, safely.",
      el: "Στήνει hosting και deployments και το βγάζει live με ασφάλεια.",
    },
  },
  {
    number: "04",
    memberIds: ["despoina", "pantelis", "anastasis"],
    title: { en: "Review & iterate", el: "Έλεγχος & βελτιώσεις" },
    name: { en: "All three", el: "Και οι τρεις" },
    text: {
      en: "We review it together and fix what needs fixing, each on our part: design, code or hosting.",
      el: "Το ελέγχουμε μαζί και διορθώνουμε ό,τι χρειάζεται, ο καθένας στο κομμάτι του: design, κώδικα ή hosting.",
    },
  },
];
