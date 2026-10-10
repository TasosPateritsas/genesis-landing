import type { Locale } from "@/data/content";

export const teamCtaCopy = {
  heading: {
    en: "Want to meet us first?",
    el: "Θέλετε να μας γνωρίσετε πρώτα;",
  },
  subtext: {
    en: "Book a short call with the three of us. No sales pitch, just your idea and our questions.",
    el: "Κλείστε μια σύντομη κλήση με τους τρεις μας. Χωρίς πωλησιακή παρουσίαση, μόνο η ιδέα σας και οι δικές μας ερωτήσεις.",
  },
  button: {
    en: "Book a call with the team",
    el: "Κλείστε κλήση με την ομάδα",
  },
} as const satisfies Record<string, Record<Locale, string>>;
