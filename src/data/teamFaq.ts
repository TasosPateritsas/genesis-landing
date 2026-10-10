import type { Locale } from "@/data/content";

export type TeamFaqLink = {
  phrase: Record<Locale, string>;
  href: "/contact" | "mailto";
};

export type TeamFaqItem = {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
  links?: readonly TeamFaqLink[];
};

export const teamFaqCopy = {
  kicker: {
    en: "FAQs",
    el: "Συχνές ερωτήσεις",
  },
  heading: {
    en: "Questions about working with us",
    el: "Ερωτήσεις για τη συνεργασία μαζί μας",
  },
  subtext: {
    en: "Can't find your answer here? Ask us directly. We reply within one business day.",
    el: "Δεν βρίσκετε την απάντηση που ψάχνετε; Ρωτήστε μας απευθείας. Απαντάμε εντός μίας εργάσιμης ημέρας.",
  },
  ask: {
    en: "Ask us a question",
    el: "Κάντε μας μια ερώτηση",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export const teamFaqs: readonly TeamFaqItem[] = [
  {
    question: {
      en: "Who will work on my project?",
      el: "Ποιος θα δουλέψει στο project μου;",
    },
    answer: {
      en: "The three of us, on every project: Despoina on planning and design, Pantelis on the code, Anastasis on hosting and launch.",
      el: "Και οι τρεις μας, σε κάθε project: η Δέσποινα στον σχεδιασμό και το design, ο Παντελής στον κώδικα, ο Αναστάσης στο hosting και το launch.",
    },
  },
  {
    question: {
      en: "Do you outsource any of the work?",
      el: "Δίνετε κομμάτι της δουλειάς σε τρίτους;",
    },
    answer: {
      en: "No. Everything is built by the team on this page. Nobody you haven't met touches your project.",
      el: "Όχι. Όλα τα φτιάχνει η ομάδα αυτής της σελίδας. Κανείς που δεν έχετε γνωρίσει δεν αγγίζει το project σας.",
    },
  },
  {
    question: {
      en: "How do we get in touch?",
      el: "Πώς επικοινωνούμε μαζί σας;",
    },
    answer: {
      en: "Send us a message through the contact form or by email, and we set up a 30-minute call. If you are in Athens, we can also meet in person.",
      el: "Στείλτε μας μήνυμα μέσω της φόρμας επικοινωνίας ή με email και κανονίζουμε μια κλήση 30 λεπτών. Αν είστε στην Αθήνα, μπορούμε να συναντηθούμε και από κοντά.",
    },
    links: [
      { phrase: { en: "contact form", el: "φόρμας επικοινωνίας" }, href: "/contact" },
      { phrase: { en: "email", el: "email" }, href: "mailto" },
    ],
  },
  {
    question: {
      en: "How do you price a project?",
      el: "Πώς κοστολογείτε ένα project;",
    },
    answer: {
      en: "Every project is priced on what you actually need. After a free 30-minute call, we send a written proposal with scope, timeline and cost, and nothing starts before you approve it. We stay in touch the whole way, so nothing changes without you knowing.",
      el: "Κάθε project κοστολογείται με βάση αυτό που πραγματικά χρειάζεστε. Μετά από μια δωρεάν κλήση 30 λεπτών σας στέλνουμε γραπτή προσφορά με scope, χρονοδιάγραμμα και κόστος, και τίποτα δεν ξεκινά πριν την εγκρίνετε. Είμαστε σε επικοινωνία σε όλη τη διάρκεια, ώστε τίποτα να μην αλλάζει χωρίς να το γνωρίζετε.",
    },
  },
  {
    question: {
      en: "Who do I talk to during the project?",
      el: "Με ποιον μιλάω κατά τη διάρκεια του project;",
    },
    answer: {
      en: "The first call is with all three of us. After that, you mostly talk with Despoina about the design and progress, and Pantelis and Anastasis often join in too. You always get an answer within one business day.",
      el: "Η πρώτη κλήση γίνεται και με τους τρεις μας. Στη συνέχεια μιλάτε κυρίως με τη Δέσποινα για το design και την πρόοδο, ενώ συχνά συμμετέχουν και ο Παντελής και ο Αναστάσης. Παίρνετε πάντα απάντηση εντός μίας εργάσιμης ημέρας.",
    },
  },
  {
    question: {
      en: "Which languages do you work in?",
      el: "Σε ποιες γλώσσες δουλεύετε;",
    },
    answer: {
      en: "Greek and English, in writing and on calls.",
      el: "Ελληνικά και αγγλικά, γραπτώς και σε κλήσεις.",
    },
  },
  {
    question: {
      en: "Who owns the code and the design?",
      el: "Σε ποιον ανήκουν ο κώδικας και το design;",
    },
    answer: {
      en: "You do, from the first commit. You can have access to the code whenever you want, and if you prefer, we keep looking after it for you.",
      el: "Σε εσάς, από το πρώτο commit. Έχετε πρόσβαση στον κώδικα όποτε θέλετε και, αν προτιμάτε, συνεχίζουμε να τον φροντίζουμε εμείς.",
    },
  },
  {
    question: {
      en: "What happens after launch?",
      el: "Τι γίνεται μετά το launch;",
    },
    answer: {
      en: "We monitor the site after it goes live and make sure everything runs smoothly.",
      el: "Παρακολουθούμε το site αφού βγει live και φροντίζουμε να λειτουργούν όλα σωστά.",
    },
  },
  {
    question: {
      en: "Do you offer maintenance?",
      el: "Προσφέρετε maintenance;",
    },
    answer: {
      en: "Yes, as an optional yearly plan. We keep the site updated and monitored, by the same team that built it.",
      el: "Ναι, ως προαιρετικό ετήσιο πακέτο. Κρατάμε το site ενημερωμένο και υπό παρακολούθηση, με την ίδια ομάδα που το έφτιαξε.",
    },
  },
];
