import type { Locale } from "@/data/content";

export type TeamMemberId = "despoina" | "pantelis" | "anastasis";

/** People data shared by the homepage cards and the team page. */
export type TeamMember = {
  id: TeamMemberId;
  name: string;
  initials: string;
  /** English in both languages. */
  role: string;
  discipline: Record<Locale, string>;
  bio: Record<Locale, string>;
  chips: Record<Locale, readonly string[]>;
  github: string;
  linkedin: string;
  /** Round avatar fallback, used until photo is set. */
  avatarBg: string;
  /** Filled in after the photoshoot. null keeps the initials placeholder. */
  photo: string | null;
};

export const teamMembers: readonly TeamMember[] = [
  {
    id: "despoina",
    name: "Despoina Ntolka",
    initials: "DN",
    role: "Product design & delivery",
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Turns your idea into a clear plan and a design you can click through. Keeps the project on track and keeps you in the loop.",
      el: "Μετατρέπει την ιδέα σας σε σαφές πλάνο και σε design που μπορείτε να δοκιμάσετε. Κρατά το project στο χρονοδιάγραμμα και σας ενημερώνει σε κάθε βήμα.",
    },
    chips: {
      en: ["UI/UX", "Project management", "Client communication", "Prototyping"],
      el: ["UI/UX", "Διαχείριση project", "Επικοινωνία με τον πελάτη", "Prototyping"],
    },
    github: "https://github.com/dntolka",
    linkedin: "https://www.linkedin.com/in/ntolka",
    avatarBg: "#EEF5F2",
    photo: null,
  },
  {
    id: "pantelis",
    name: "Pantelis Karamailis",
    initials: "PK",
    role: "Development",
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Turns designs into clean, fast, working code. Obsessed with performance — if it's slow, he'll fix it before you notice.",
      el: "Μετατρέπει τα σχέδια σε καθαρό, γρήγορο κώδικα που δουλεύει. Έχει εμμονή με την απόδοση: αν κάτι αργεί, θα το διορθώσει πριν το καταλάβετε.",
    },
    chips: {
      en: ["Next.js", "React", "TypeScript", "Node.js"],
      el: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    github: "https://github.com/pkaramailis",
    linkedin: "https://www.linkedin.com/in/panteliskaramailis",
    avatarBg: "#DDEDE6",
    photo: null,
  },
  {
    id: "anastasis",
    name: "Anastasis Pateritsas",
    initials: "AP",
    role: "DevOps & deployment",
    discipline: {
      en: "Electrical engineer",
      el: "Ηλεκτρολόγος μηχανικός",
    },
    bio: {
      en: "Takes the code live and keeps it there, so launch day is a non-event.",
      el: "Βγάζει τον κώδικα live και τον κρατάει εκεί, ώστε η μέρα του launch να κυλάει χωρίς άγχος.",
    },
    chips: {
      en: ["Vercel", "CI/CD", "Docker", "Monitoring"],
      el: ["Vercel", "CI/CD", "Docker", "Monitoring"],
    },
    github: "https://github.com/TasosPateritsas",
    linkedin: "https://www.linkedin.com/in/anastassis-pateritsas",
    avatarBg: "#CBE3D8",
    photo: null,
  },
];

export function socialLabel(name: string, network: "GitHub" | "LinkedIn", locale: Locale) {
  return locale === "el" ? `${name} στο ${network}` : `${name} on ${network}`;
}
