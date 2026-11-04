import type { Locale } from "@/data/content";

export type TeamMemberId = "despoina" | "pantelis" | "anastasis";

/** People data shared by the homepage cards and the team page. */
export type TeamMember = {
  id: TeamMemberId;
  name: string;
  shortName: Record<Locale, string>;
  initials: string;
  /** Shown on profile cards (English in both languages today). */
  role: string;
  /** Localized job title for Person JSON-LD. */
  jobTitle: Record<Locale, string>;
  discipline: Record<Locale, string>;
  bio: Record<Locale, string>;
  education: Record<Locale, string>;
  onProject: Record<Locale, readonly [string, string]>;
  askAbout: Record<Locale, string>;
  chips: Record<Locale, readonly string[]>;
  github: string;
  linkedin: string;
  /** Round avatar fallback, used until photo is set. */
  avatarBg: string;
  /** Filled in after the photoshoot. null keeps the initials placeholder. */
  photo: string | null;
  /** Casual hover photo. null means the profile has no hover swap. */
  photoCasual: string | null;
};

export const teamMembers: readonly TeamMember[] = [
  {
    id: "despoina",
    name: "Despoina Ntolka",
    shortName: { en: "Despoina", el: "Δέσποινα" },
    initials: "DN",
    role: "Product design & delivery",
    jobTitle: {
      en: "Product design & delivery",
      el: "Σχεδιασμός προϊόντος & παράδοση",
    },
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Turns your idea into a clear plan and a design you can click through. Keeps the project on track and keeps you in the loop.",
      el: "Μετατρέπει την ιδέα σας σε σαφές πλάνο και σε design που μπορείτε να δοκιμάσετε. Κρατά το project στο χρονοδιάγραμμα και σας ενημερώνει σε κάθε βήμα.",
    },
    education: {
      en: "Electrical & Computer Engineer, TUC",
      el: "Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών, Πολυτεχνείο Κρήτης",
    },
    onProject: {
      en: [
        "Scopes the project and writes the proposal",
        "Reviews and refines the UI of every release",
      ],
      el: ["Ορίζει το scope και γράφει την προσφορά", "Ελέγχει και βελτιώνει το UI σε κάθε release"],
    },
    askAbout: {
      en: "UX, product scoping, turning a vague idea into a plan",
      el: "UX, scoping προϊόντος, πώς μια θολή ιδέα γίνεται πλάνο",
    },
    chips: {
      en: ["Product strategy", "UI/UX design", "Prototyping", "Project delivery"],
      el: ["Στρατηγική προϊόντος", "UI/UX design", "Prototyping", "Παράδοση project"],
    },
    github: "https://github.com/dntolka",
    linkedin: "https://www.linkedin.com/in/ntolka",
    avatarBg: "#EEF5F2",
    photo: null,
    photoCasual: null,
  },
  {
    id: "pantelis",
    name: "Pantelis Karamailis",
    shortName: { en: "Pantelis", el: "Παντελής" },
    initials: "PK",
    role: "Development",
    jobTitle: {
      en: "Development",
      el: "Ανάπτυξη",
    },
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Turns designs into clean, fast, working code. Obsessed with performance — if it's slow, he'll fix it before you notice.",
      el: "Μετατρέπει τα σχέδια σε καθαρό, γρήγορο κώδικα που δουλεύει. Έχει εμμονή με την απόδοση: αν κάτι αργεί, θα το διορθώσει πριν το καταλάβετε.",
    },
    education: {
      en: "Electrical & Computer Engineer, TUC",
      el: "Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών, Πολυτεχνείο Κρήτης",
    },
    onProject: {
      en: ["Builds the front end and the back end", "Writes code that is yours, in your repo"],
      el: ["Χτίζει το front end και το back end", "Γράφει κώδικα που ανήκει σε εσάς, στο δικό σας repo"],
    },
    askAbout: {
      en: "Next.js, performance, why your site is slow",
      el: "Next.js, απόδοση, γιατί αργεί το site σας",
    },
    chips: {
      en: ["Frontend", "Backend & APIs", "Performance", "AI integrations"],
      el: ["Frontend", "Backend & APIs", "Απόδοση", "AI integrations"],
    },
    github: "https://github.com/pkaramailis",
    linkedin: "https://www.linkedin.com/in/panteliskaramailis",
    avatarBg: "#DDEDE6",
    photo: null,
    photoCasual: null,
  },
  {
    id: "anastasis",
    name: "Anastasis Pateritsas",
    shortName: { en: "Anastasis", el: "Αναστάσης" },
    initials: "AP",
    role: "DevOps & deployment",
    jobTitle: {
      en: "DevOps & deployment",
      el: "DevOps & deploy",
    },
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Takes the code live and keeps it there, so launch day is a non-event.",
      el: "Βγάζει τον κώδικα live και τον κρατάει εκεί, ώστε η μέρα του launch να κυλάει χωρίς άγχος.",
    },
    education: {
      en: "Electrical & Computer Engineer, TUC",
      el: "Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών, Πολυτεχνείο Κρήτης",
    },
    onProject: {
      en: ["Sets up hosting, domains and CI/CD", "Monitors the site after launch"],
      el: ["Στήνει hosting, domains και CI/CD", "Παρακολουθεί το site μετά το launch"],
    },
    askAbout: {
      en: "Deployments, hosting, keeping a site up",
      el: "Deployments, hosting, πώς ένα site μένει πάντα online",
    },
    chips: {
      en: ["Cloud & hosting", "Automated deploys", "Monitoring", "Security"],
      el: ["Cloud & hosting", "Αυτόματα deploys", "Monitoring", "Ασφάλεια"],
    },
    github: "https://github.com/TasosPateritsas",
    linkedin: "https://www.linkedin.com/in/anastassis-pateritsas",
    avatarBg: "#CBE3D8",
    photo: null,
    photoCasual: null,
  },
];

export function socialLabel(name: string, network: "GitHub" | "LinkedIn", locale: Locale) {
  return locale === "el" ? `${name} στο ${network}` : `${name} on ${network}`;
}
