import type { Locale } from "@/data/content";
import type { TeamMemberId } from "@/data/team";
import { site } from "@/config/site";

type Copy = Record<Locale, string>;

export type SideTitle = {
  lines: Record<Locale, readonly string[]>;
  accentFrom: number;
};

export type TeamProfileCopy = {
  id: TeamMemberId;
  name: Copy;
  quote: Copy;
  bullets: Record<Locale, readonly string[]>;
  tags: readonly string[];
  degrees: Record<Locale, readonly string[]>;
};

export const teamHeroCopy = {
  titleLines: {
    en: ["The people behind", "the code."],
    el: ["Οι άνθρωποι πίσω από", "τον κώδικα."],
  },
  intro: {
    en: "Three engineers, no account managers, no outsourcing. The people you meet on the first call are the people who build your product.",
    el: "Τρεις μηχανικοί, χωρίς account managers, χωρίς outsourcing. Οι άνθρωποι που γνωρίζετε στην αρχική συνάντηση είναι αυτοί που χτίζουν το προϊόν σας.",
  },
  location: {
    en: "Athens, Greece",
    el: "Αθήνα",
  },
} as const satisfies {
  titleLines: Record<Locale, readonly string[]>;
  intro: Copy;
  location: Copy;
};

export const teamIntroCopy = {
  divider: { en: "The team", el: "Η ομάδα" },
  titleLead: { en: "Same team since our ", el: "Η ίδια ομάδα από " },
  titleAccent: { en: "student days.", el: "τα φοιτητικά μας χρόνια." },
  subtext: {
    en: "We met as Electrical & Computer Engineering students at the Technical University of Crete.",
    el: "Γνωριστήκαμε ως φοιτητές Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών στο Πολυτεχνείο Κρήτης.",
  },
  onProject: { en: "On a project", el: "Σε ένα project" },
  experience: {
    en: { strong: "6+ years", rest: "experience" },
    el: { strong: "6+ χρόνια", rest: "εμπειρίας" },
  },
} as const;

const meng = {
  en: "MEng Electrical & Computer Engineering, TUC",
  el: "Δίπλωμα Ηλεκτρολόγου Μηχανικού & Μηχανικού Υπολογιστών, Πολυτεχνείο Κρήτης",
} as const;

export const teamProfiles: readonly TeamProfileCopy[] = [
  {
    id: "despoina",
    name: { en: "Despoina Ntolka", el: "Δέσποινα Ντόλκα" },
    quote: {
      en: "I make sure we build what you actually need, before a single line of code.",
      el: "«Φροντίζω να χτίσουμε αυτό που πραγματικά χρειάζεστε, πριν γραφτεί ούτε μία γραμμή κώδικα.»",
    },
    bullets: {
      en: [
        "Runs the first call and writes the proposal",
        "Designs the screens you click through before we build",
        "Reviews the UI of every release",
      ],
      el: [
        "Κάνει την αρχική συνάντηση και γράφει την πρόταση",
        "Σχεδιάζει τις οθόνες που δοκιμάζετε πριν ξεκινήσουμε την ανάπτυξη",
        "Ελέγχει το UI σε κάθε έκδοση",
      ],
    },
    tags: ["Product strategy", "UI/UX design", "Prototyping", "Project delivery"],
    degrees: {
      en: [meng.en, "MSc Data Science & Machine Learning, NTUA"],
      el: [meng.el, "MSc Επιστήμη Δεδομένων & Μηχανική Μάθηση, ΕΜΠ"],
    },
  },
  {
    id: "pantelis",
    name: { en: "Pantelis Karamailis", el: "Παντελής Καραμαϊλής" },
    quote: {
      en: "If it's slow, I'll fix it before you notice.",
      el: "«Αν είναι αργό, θα το φτιάξω πριν το καταλάβετε.»",
    },
    bullets: {
      en: [
        "Builds the front end and the back end",
        "Connects AI where it saves you time",
        "Writes code that is yours, in your repo",
      ],
      el: [
        "Χτίζει το front end και το back end",
        "Συνδέει AI εκεί που σας γλιτώνει χρόνο",
        "Γράφει κώδικα που είναι δικός σας, στο δικό σας repo",
      ],
    },
    tags: ["Frontend", "Backend & APIs", "Performance", "AI integrations"],
    degrees: { en: [meng.en], el: [meng.el] },
  },
  {
    id: "anastasis",
    name: { en: "Anastasis Pateritsas", el: "Αναστάσης Πατερίτσας" },
    quote: {
      en: "Launch day should be boring. That's my job.",
      el: "«Η μέρα του launch πρέπει να είναι βαρετή. Αυτή είναι η δουλειά μου.»",
    },
    bullets: {
      en: [
        "Sets up hosting, domains and CI/CD",
        "Watches the site after launch",
        "Keeps backups and security up to date",
      ],
      el: [
        "Στήνει hosting, domains και CI/CD",
        "Παρακολουθεί το site μετά το launch",
        "Κρατά backups και ασφάλεια πάντα ενημερωμένα",
      ],
    },
    tags: ["Cloud & hosting", "Automated deploys", "Monitoring", "Security"],
    degrees: { en: [meng.en], el: [meng.el] },
  },
];

export const teamVideoCopy = {
  badge: { en: "Video · 3 min", el: "Βίντεο · 3 λεπτά" },
  line1: {
    en: "Three engineers. Four questions.",
    el: "Τρεις μηχανικοί. Τέσσερις ερωτήσεις.",
  },
  line2: {
    en: "Meet us before you meet us.",
    el: "Γνωρίστε μας πριν μας γνωρίσετε.",
  },
  play: { en: "Play the video", el: "Αναπαραγωγή του βίντεο" },
  placeholder: { en: "Video soon", el: "Βίντεο σύντομα" },
} as const;

export type TeamVideoSource = { src: string; media?: string };

export function teamVideoSources(): readonly TeamVideoSource[] {
  const { src1080, src720 } = site.video;
  if (src1080 && src720) {
    return [
      { src: src1080, media: "(min-width: 1024px)" },
      { src: src720 },
    ];
  }
  const only = src1080 || src720;
  return only ? [{ src: only }] : [];
}

export function formatChapterTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}

export const storyCommand = "$ git log --graph --oneline";

export const storyTitle: SideTitle = {
  lines: {
    en: ["Three", "branches,", "one", "main."],
    el: ["Τρία", "branches,", "ένα", "main."],
  },
  accentFrom: 2,
};

export const storyCommits = [
  { year: "2018", type: "merge", message: "three ECE students meet at TUC, Chania" },
  { year: "2022", type: "feat", message: "first projects together" },
  { year: "2026", type: "init", message: "Genesis launches in Athens" },
  { year: "next", type: "feat", message: "your project →", href: "/contact" },
] as const;

export const promisesTitle: SideTitle = {
  lines: {
    en: ["Four", "promises", "we keep."],
    el: ["Τέσσερις", "εγγυήσεις", "που", "τηρούμε."],
  },
  accentFrom: 2,
};

export const teamPromises = [
  {
    title: { en: "Written proposal first", el: "Πρώτα γραπτή προσφορά" },
    text: {
      en: "Scope, timeline and cost on paper before any work starts.",
      el: "Scope, χρονοδιάγραμμα και κόστος γραπτώς, πριν ξεκινήσει οποιαδήποτε δουλειά.",
    },
  },
  {
    title: { en: "No outsourcing", el: "Χωρίς outsourcing" },
    text: {
      en: "The three of us do the work. Nobody you haven't met touches your project.",
      el: "Τη δουλειά την κάνουμε εμείς οι τρεις. Κανείς που δεν έχετε γνωρίσει δεν αγγίζει το project σας.",
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
    title: { en: "One point of contact", el: "Ένα σημείο επικοινωνίας" },
    text: {
      en: "You always know who to message, and you get an answer within one business day.",
      el: "Ξέρετε πάντα σε ποιον να γράψετε και παίρνετε απάντηση εντός μίας εργάσιμης ημέρας.",
    },
  },
] as const satisfies readonly { title: Copy; text: Copy }[];

export const teamCtaCopy = {
  heading: { en: "Want to meet us first?", el: "Θέλετε να μας γνωρίσετε πρώτα;" },
  text: {
    en: "Book a short call with the three of us. No sales pitch, just your idea and our questions.",
    el: "Μια σύντομη συζήτηση με εμάς τους τρεις, χωρίς καμία δέσμευση. Μόνο η ιδέα σας και οι ερωτήσεις μας.",
  },
  button: { en: "Book a call with the team", el: "Κλείστε ραντεβού με την ομάδα" },
} as const satisfies Record<string, Copy>;
