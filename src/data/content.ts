export const site = {
  name: "Genesis",
  email: "hello@genesis.studio",
  url: "https://genesis.studio",
};

export type Locale = "en" | "el";

export type Dictionary = {
  nav: {
    services: string;
    work: string;
    team: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    primaryCta: string;
    secondaryCta: string;
  };
  services: {
    label: string;
    heading: string;
    intro: string;
    items: Array<{
      title: string;
      description: string;
      detail: string;
      icon: "app" | "web" | "shop";
    }>;
  };
  work: {
    label: string;
    heading: string;
    intro: string;
    viewProject: string;
    techLabel: string;
    projects: Array<{
      slug: string;
      title: string;
      category: string;
      summary: string;
      tech: string[];
      href: string;
      accent: string;
    }>;
  };
  team: {
    label: string;
    heading: string;
    intro: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      initials: string;
      github: string;
      linkedin: string;
    }>;
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    emailLabel: string;
    basedInLabel: string;
    location: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sent: string;
    preferEmail: string;
    mailSubject: string;
  };
  footer: {
    tagline: string;
    location: string;
    services: string;
    work: string;
    team: string;
    contact: string;
  };
};

const projectsShared = {
  fintra: {
    slug: "fintra",
    title: "Fintra",
    tech: ["React Native", "Node.js", "PostgreSQL"] as string[],
    href: "#",
    accent: "#0B5C4D",
  },
  levante: {
    slug: "levante-goods",
    title: "Levante Goods",
    tech: ["Next.js", "Stripe", "Sanity CMS"] as string[],
    href: "#",
    accent: "#1A4A5C",
  },
  orbit: {
    slug: "orbit",
    title: "Orbit",
    tech: ["Next.js", "TypeScript", "Supabase"] as string[],
    href: "#",
    accent: "#244038",
  },
};

const teamShared = {
  despoina: {
    name: "Despoina Ntolka",
    initials: "DN",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  pantelis: {
    name: "Pantelis Karamailis",
    initials: "PK",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  anastasis: {
    name: "Anastasis Pateritsas",
    initials: "AP",
    github: "https://github.com/TasosPateritsas",
    linkedin: "https://linkedin.com/",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      team: "Team",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      eyebrow: "GENESIS · ATHENS, GR",
      headline: "We build your product, start to finish.",
      subtext:
        "A software development agency in Athens, building websites, apps, and eshops for startups and small businesses — no technical team required.",
      primaryCta: "Let's talk",
      secondaryCta: "See our work",
    },
    services: {
      label: "What we build",
      heading: "Full development, end to end.",
      intro:
        "Bring the idea. We design, build, and ship a complete digital product — so you never need an in-house technical team to get to market.",
      items: [
        {
          title: "Product / Web Apps",
          description: "Design to launch, built fast.",
          detail:
            "From first wireframe to production deploy — MVPs and full products that ship on a startup timeline.",
          icon: "app",
        },
        {
          title: "Websites",
          description: "Fast, clean, built to convert.",
          detail:
            "Marketing sites and brand surfaces that load quickly, read clearly, and turn visitors into leads.",
          icon: "web",
        },
        {
          title: "Eshops",
          description: "Ready to sell from day one.",
          detail:
            "Storefronts with checkout, inventory, and SEO baked in — so you can take orders without a tech team.",
          icon: "shop",
        },
      ],
    },
    work: {
      label: "Selected work",
      heading: "Products we've shipped for startups and small teams.",
      intro:
        "Real briefs, tight timelines, working software. Each project below shows the problem we walked into and the result we left behind.",
      viewProject: "View project",
      techLabel: "Technologies used",
      projects: [
        {
          ...projectsShared.fintra,
          category: "Expense Tracking App",
          summary:
            "A local startup needed a mobile-first expense tracker MVP to pitch to investors within 6 weeks. We designed and built a full React Native app with real-time sync, delivered on time and used to close their seed round.",
        },
        {
          ...projectsShared.levante,
          category: "Eshop",
          summary:
            "A small artisan brand needed an online store to replace manual Instagram sales. We built a fast, SEO-optimized eshop with custom checkout, cutting order processing time by half.",
        },
        {
          ...projectsShared.orbit,
          category: "Internal Tools Dashboard",
          summary:
            "A growing agency needed a custom admin dashboard to replace spreadsheets for tracking clients and invoices. We delivered a lightweight internal tool in 3 weeks, now used daily by their whole team.",
        },
      ],
    },
    team: {
      label: "The team",
      heading: "Three engineers. One studio. You talk to the builders.",
      intro:
        "We're a newly founded team in Athens — small enough to move fast, senior enough to own the full stack from brief to launch.",
      members: [
        {
          ...teamShared.despoina,
          role: "Electrical Engineer",
          bio: "Turns ideas into working systems, one clean commit at a time. Believes good code should read like a good sentence.",
        },
        {
          ...teamShared.pantelis,
          role: "Electrical Engineer",
          bio: "Obsessed with performance and pixel-perfect detail. If it's slow, he'll fix it before you notice.",
        },
        {
          ...teamShared.anastasis,
          role: "Electrical Engineer",
          bio: "The problem-solver of the team — give him a messy spec and he'll come back with a plan. Coffee-fueled, deadline-proof.",
        },
      ],
    },
    contact: {
      label: "Contact",
      heading: "Tell us what you want to build.",
      intro:
        "Share a short brief — idea stage is fine. We usually reply within one business day with next steps and a realistic timeline.",
      emailLabel: "Email",
      basedInLabel: "Based in",
      location: "Athens, Greece",
      nameLabel: "Name",
      namePlaceholder: "Alex Morgan",
      emailFieldLabel: "Email",
      emailPlaceholder: "alex@startup.com",
      messageLabel: "Message",
      messagePlaceholder: "What are you building, and when do you need it live?",
      submit: "Send message",
      sent: "Opening your email client — if nothing appears, write us at",
      preferEmail: "Prefer email? Reach us directly at",
      mailSubject: "Project inquiry from",
    },
    footer: {
      tagline: "Athens tech studio",
      location: "Athens, Greece",
      services: "Services",
      work: "Work",
      team: "Team",
      contact: "Contact",
    },
  },
  el: {
    nav: {
      services: "Υπηρεσίες",
      work: "Έργα",
      team: "Ομάδα",
      contact: "Επικοινωνία",
      cta: "Ας μιλήσουμε",
    },
    hero: {
      eyebrow: "GENESIS · ΑΘΗΝΑ, GR",
      headline: "Φτιάχνουμε το προϊόν σου, από την αρχή ως το τέλος.",
      subtext:
        "Agency ανάπτυξης λογισμικού στην Αθήνα — σχεδιάζουμε websites, εφαρμογές και eshops για startups και μικρές επιχειρήσεις, χωρίς να χρειάζεσαι τεχνική ομάδα.",
      primaryCta: "Ας μιλήσουμε",
      secondaryCta: "Δες τη δουλειά μας",
    },
    services: {
      label: "Τι φτιάχνουμε",
      heading: "Πλήρης ανάπτυξη, από την αρχή μέχρι το τέλος.",
      intro:
        "Εσύ φέρνεις την ιδέα. Εμείς σχεδιάζουμε, υλοποιούμε και παραδίδουμε ένα ολοκληρωμένο ψηφιακό προϊόν — χωρίς να χρειάζεσαι εσωτερική τεχνική ομάδα.",
      items: [
        {
          title: "Product / Web Apps",
          description: "Από το design μέχρι το launch, γρήγορα.",
          detail:
            "Από το πρώτο wireframe μέχρι το production deploy — MVPs και ολοκληρωμένα προϊόντα με ρυθμούς startup.",
          icon: "app",
        },
        {
          title: "Websites",
          description: "Γρήγορα, καθαρά, φτιαγμένα για conversion.",
          detail:
            "Marketing sites και brand surfaces που φορτώνουν γρήγορα, διαβάζονται καθαρά και μετατρέπουν επισκέπτες σε leads.",
          icon: "web",
        },
        {
          title: "Eshops",
          description: "Έτοιμα να πουλήσουν από την πρώτη μέρα.",
          detail:
            "Καταστήματα με checkout, inventory και SEO από την αρχή — ώστε να δέχεσαι παραγγελίες χωρίς τεχνική ομάδα.",
          icon: "shop",
        },
      ],
    },
    work: {
      label: "Επιλεγμένα έργα",
      heading: "Προϊόντα που παραδώσαμε σε startups και μικρές ομάδες.",
      intro:
        "Πραγματικά briefs, στενά timelines, λειτουργικό λογισμικό. Κάθε έργο δείχνει το πρόβλημα που βρήκαμε και το αποτέλεσμα που αφήσαμε.",
      viewProject: "Δες το έργο",
      techLabel: "Τεχνολογίες",
      projects: [
        {
          ...projectsShared.fintra,
          category: "Εφαρμογή εξόδων",
          summary:
            "Μια τοπική startup χρειαζόταν mobile-first expense tracker MVP για να παρουσιάσει σε επενδυτές μέσα σε 6 εβδομάδες. Σχεδιάσαμε και φτιάξαμε πλήρη React Native εφαρμογή με real-time sync, παραδόθηκε στην ώρα της και χρησιμοποιήθηκε για το seed round τους.",
        },
        {
          ...projectsShared.levante,
          category: "Eshop",
          summary:
            "Μια μικρή artisan μάρκα χρειαζόταν online κατάστημα για να αντικαταστήσει χειροκίνητες πωλήσεις στο Instagram. Φτιάξαμε γρήγορο, SEO-optimized eshop με custom checkout, μειώνοντας στο μισό τον χρόνο επεξεργασίας παραγγελιών.",
        },
        {
          ...projectsShared.orbit,
          category: "Internal Tools Dashboard",
          summary:
            "Ένα αναπτυσσόμενο agency χρειαζόταν custom admin dashboard για να αντικαταστήσει spreadsheets σε clients και invoices. Παραδώσαμε ελαφρύ εσωτερικό εργαλείο σε 3 εβδομάδες, που πλέον χρησιμοποιεί καθημερινά όλη η ομάδα.",
        },
      ],
    },
    team: {
      label: "Η ομάδα",
      heading: "Τρεις μηχανικοί. Ένα studio. Μιλάς απευθείας με αυτούς που χτίζουν.",
      intro:
        "Είμαστε μια νέα ομάδα στην Αθήνα — αρκετά μικρή για να κινείται γρήγορα, αρκετά έμπειρη για να αναλάβει το πλήρες stack από το brief μέχρι το launch.",
      members: [
        {
          ...teamShared.despoina,
          role: "Ηλεκτρολόγος Μηχανικός",
          bio: "Μετατρέπει ιδέες σε λειτουργικά συστήματα, ένα καθαρό commit τη φορά. Πιστεύει ότι ο καλός κώδικας πρέπει να διαβάζεται σαν καλή πρόταση.",
        },
        {
          ...teamShared.pantelis,
          role: "Ηλεκτρολόγος Μηχανικός",
          bio: "Εμμονή με την απόδοση και την pixel-perfect λεπτομέρεια. Αν είναι αργό, θα το διορθώσει πριν το προσέξεις.",
        },
        {
          ...teamShared.anastasis,
          role: "Ηλεκτρολόγος Μηχανικός",
          bio: "Ο problem-solver της ομάδας — δώσ’ του ένα μπερδεμένο spec και θα γυρίσει με πλάνο. Καφές και deadlines.",
        },
      ],
    },
    contact: {
      label: "Επικοινωνία",
      heading: "Πες μας τι θέλεις να φτιάξεις.",
      intro:
        "Στείλε ένα σύντομο brief — ακόμα και σε στάδιο ιδέας. Συνήθως απαντάμε μέσα σε μία εργάσιμη μέρα με επόμενα βήματα και ρεαλιστικό timeline.",
      emailLabel: "Email",
      basedInLabel: "Βασισμένοι στην",
      location: "Αθήνα, Ελλάδα",
      nameLabel: "Όνομα",
      namePlaceholder: "Αλέξης Μόργκαν",
      emailFieldLabel: "Email",
      emailPlaceholder: "alex@startup.com",
      messageLabel: "Μήνυμα",
      messagePlaceholder: "Τι χτίζεις και πότε πρέπει να είναι live;",
      submit: "Αποστολή",
      sent: "Ανοίγει το email client σου — αν δεν εμφανιστεί τίποτα, γράψε μας στο",
      preferEmail: "Προτιμάς email; Επικοινώνησε απευθείας στο",
      mailSubject: "Ερώτηση έργου από",
    },
    footer: {
      tagline: "Athens tech studio",
      location: "Αθήνα, Ελλάδα",
      services: "Υπηρεσίες",
      work: "Έργα",
      team: "Ομάδα",
      contact: "Επικοινωνία",
    },
  },
};
