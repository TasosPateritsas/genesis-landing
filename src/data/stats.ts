import type { Locale } from "@/data/content";

export type Localized = Record<Locale, string>;

export type StatSlide = {
  value: number;
  suffix: string;
  title: Localized;
  description: Localized;
};

export const statSlides: StatSlide[] = [
  {
    value: 5,
    suffix: "+",
    title: {
      en: "Years of combined experience",
      el: "Χρόνια συνολικής εμπειρίας",
    },
    description: {
      en: "The team's experience, brought to every project.",
      el: "Η εμπειρία της ομάδας μας, σε κάθε project.",
    },
  },
  {
    value: 25,
    suffix: "+",
    title: {
      en: "Projects delivered",
      el: "Ολοκληρωμένα projects",
    },
    description: {
      en: "Websites, apps and eshops we've built and shipped.",
      el: "Websites, εφαρμογές και eshops που έχουμε φτιάξει και παραδώσει.",
    },
  },
  {
    value: 100,
    suffix: "%",
    title: {
      en: "Projects delivered on time",
      el: "Projects στην ώρα τους",
    },
    description: {
      en: "Delivered on the schedule we agreed on.",
      el: "Παραδόσεις σύμφωνα με το χρονοδιάγραμμα που συμφωνήσαμε.",
    },
  },
];

export const statPhotos = {
  left: {
    src: "/contact/stats-portrait.png",
    width: 900,
    height: 1200,
    alt: {
      en: "Placeholder portrait of the Genesis team",
      el: "Προσωρινό πορτρέτο της ομάδας Genesis",
    },
  },
  right: {
    src: "/contact/stats-workspace.png",
    width: 1200,
    height: 900,
    alt: {
      en: "Placeholder photo of the Genesis team at work",
      el: "Προσωρινή φωτογραφία της ομάδας Genesis στη δουλειά",
    },
  },
} as const;
