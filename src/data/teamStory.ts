import type { Locale } from "@/data/content";

export const storyCommand = "$ git log --graph --oneline";

export const teamStoryCopy = {
  titleLead: {
    en: "Three branches, ",
    el: "Τρία branches, ",
  },
  titleAccent: {
    en: "one main.",
    el: "ένα main.",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type StoryCommit = {
  year: string;
  type: string;
  text: Record<Locale, string>;
  href?: "/contact";
};

export const storyCommits: readonly StoryCommit[] = [
  {
    year: "2018",
    type: "merge",
    text: {
      en: "three ECE students meet at TUC, Chania",
      el: "τρεις φοιτητές ΗΜΜΥ γνωρίζονται στο Πολυτεχνείο Κρήτης, Χανιά",
    },
  },
  {
    year: "2022",
    type: "feat",
    text: {
      en: "first projects together",
      el: "τα πρώτα μας projects μαζί",
    },
  },
  {
    year: "2026",
    type: "init",
    text: {
      en: "Genesis launches in Athens",
      el: "η Genesis ξεκινά στην Αθήνα",
    },
  },
  {
    year: "next",
    type: "feat",
    text: {
      en: "your project →",
      el: "το project σας →",
    },
    href: "/contact",
  },
];
