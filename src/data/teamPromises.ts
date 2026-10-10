import type { Locale } from "@/data/content";

export const teamPromisesCopy = {
  kicker: {
    en: "How we work",
    el: "Πώς δουλεύουμε",
  },
  heading: {
    en: "Four promises we keep.",
    el: "Τέσσερις δεσμεύσεις που τηρούμε.",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export const teamPromises: readonly {
  title: Record<Locale, string>;
  text: Record<Locale, string>;
}[] = [
  {
    title: { en: "One point of contact", el: "Ένα σημείο επικοινωνίας" },
    text: {
      en: "You always know who to message, and you get an answer within one business day.",
      el: "Ξέρετε πάντα σε ποιον να γράψετε και παίρνετε απάντηση εντός μίας εργάσιμης ημέρας.",
    },
  },
  {
    title: { en: "Written proposal first", el: "Πρώτα γραπτή προσφορά" },
    text: {
      en: "Scope, timeline and cost on paper before any work starts.",
      el: "Scope, χρονοδιάγραμμα και κόστος γραπτώς, πριν ξεκινήσει οποιαδήποτε δουλειά.",
    },
  },
  {
    title: { en: "Your code, your repo", el: "Ο κώδικας είναι δικός σας" },
    text: {
      en: "Everything we build is yours, from the first commit.",
      el: "Ό,τι φτιάχνουμε ανήκει σε εσάς, από το πρώτο commit.",
    },
  },
  {
    title: { en: "No outsourcing", el: "Χωρίς outsourcing" },
    text: {
      en: "The three of us do the work. Nobody you haven't met touches your project.",
      el: "Τη δουλειά την κάνουμε εμείς οι τρεις. Κανείς που δεν έχετε γνωρίσει δεν αγγίζει το project σας.",
    },
  },
];
