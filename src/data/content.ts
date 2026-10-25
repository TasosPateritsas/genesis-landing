export const site = {
  name: "Genesis",
  email: "hello@genesis.studio",
  phone: "+306999999999",
  phoneHref: "tel:+306999999999",
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
    seeAll: string;
    items: Array<{
      title: string;
      description: string;
      icon: "app" | "agents" | "workflows" | "shop";
    }>;
  };
  work: {
    label: string;
    heading: string;
    intro: string;
    more: string;
    seeAll: string;
  };
  team: {
    label: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    meet: string;
    photoSoon: string;
  };
  teamPage: {
    breadcrumb: string;
    titleLead: string;
    titleAccent: string;
    subtext: string;
    people: string;
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    imageAlt: string;
  };
  contact: {
    label: string;
    heading: string;
    intro: string;
    introDetail: string;
    cta: string;
    directLabel: string;
  };
  contactPage: {
    breadcrumb: string;
    heading: string;
    metaTitle: string;
    metaDescription: string;
    subtext: string;
    preferEmail: string;
    preferPhone: string;
    phoneDisplay: string;
    tabMessage: string;
    tabBooking: string;
    firstName: string;
    lastName: string;
    email: string;
    category: string;
    categoryPlaceholder: string;
    categories: Array<{ value: string; label: string }>;
    otherLabel: string;
    description: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    error: string;
    bookingTitle: string;
    bookingNote: string;
    errors: {
      firstName: string;
      lastName: string;
      emailRequired: string;
      emailInvalid: string;
      category: string;
      other: string;
      description: string;
    };
    howWeWork: {
      eyebrow: string;
      steps: Array<{ title: string; body: string }>;
    };
  };
  reviews: {
    kicker: string;
    heading: string;
    reviewsOnGoogle: string;
    cardSource: string;
    ctaPrompt: string;
    cta: string;
    seeAll: string;
    pagesLabel: string;
    pageLabel: string;
    previous: string;
    next: string;
    rated: string;
  };
  backToTop: string;
  footer: {
    tagline: string;
    location: string;
    services: string;
    work: string;
    team: string;
    contact: string;
  };
  workPage: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    viewProject: string;
    comingTitle: string;
    comingBody: string;
    comingLabel: string;
    comingImageAlt: string;
    comingSteps: Array<{ label: string; state: "done" | "current" | "next" }>;
    ctaTitle: string;
    ctaBody: string;
    visitLive: string;
    metaClient: string;
    metaDid: string;
    metaStack: string;
    metaYear: string;
    briefHeading: string;
    builtHeading: string;
    insideHeading: string;
  };
  servicesPage: {
    breadcrumb: string;
    heading: string;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    includedLabel: string;
    cta: string;
    closingHeading: string;
    closingSubtext: string;
    closingCta: string;
    chips: Array<{
      href: string;
      label: string;
    }>;
    blocks: Array<{
      id: string;
      icon: "smartphone" | "bot" | "workflow" | "shopping-bag";
      kicker: string;
      heading: string;
      body: string;
      included: string[];
      steps: Array<{ title: string; detail: string }>;
    }>;
  };
};

const serviceChipHrefs = {
  app: "#app-development",
  agents: "#ai-agents",
  workflows: "#ai-workflows",
  shop: "#websites-eshops",
} as const;

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      team: "Team",
      contact: "Contact",
      cta: "Let's talk!",
    },
    hero: {
      eyebrow: "GENESIS · ATHENS, GR",
      headline: "We build your product, start to finish.",
      subtext:
        "A software development agency in Athens, building websites, apps, and eshops for startups and small businesses — no technical team required.",
      primaryCta: "Let's talk!",
      secondaryCta: "See our work",
    },
    services: {
      label: "Services",
      heading: "What we offer",
      intro:
        "We design, build, and deliver complete digital products — so you never need an in-house technical team.",
      seeAll: "See all services",
      items: [
        {
          title: "App Development",
          description:
            "Custom product development, from the first wireframe to production deploy.",
          icon: "app",
        },
        {
          title: "AI Agents",
          description:
            "Custom agents that handle repetitive tasks and connect to the tools you already use.",
          icon: "agents",
        },
        {
          title: "AI Workflows",
          description: "Automation and AI integration into your everyday processes.",
          icon: "workflows",
        },
        {
          title: "Websites & Eshops",
          description: "Marketing sites and online stores with SEO built in, ready to sell.",
          icon: "shop",
        },
      ],
    },
    work: {
      label: "Selected work",
      heading: "Live sites for real businesses.",
      intro:
        "Eshops, booking sites and local businesses we designed, built and launched — from Marousi to Mykonos.",
      more: "More websites, eshops and booking sites in our portfolio.",
      seeAll: "See all work →",
    },
    team: {
      label: "The team",
      headingLead: "Three engineers. One agency.",
      headingAccent: "You talk to the builders.",
      intro:
        "A software development agency in Athens — small enough to move fast, experienced enough to own the full stack from brief to launch.",
      meet: "Meet the team",
      photoSoon: "PHOTO SOON",
    },
    contact: {
      label: "Contact",
      heading: "Tell us what you want to build.",
      intro: "Whatever your project needs!",
      introDetail: "We reply within one business day and walk you through the next steps.",
      cta: "Fill out the form",
      directLabel: "Prefer to reach us directly by email or phone?",
    },
    contactPage: {
      breadcrumb: "Genesis › Contact",
      heading: "Let's build something great, together!",
      metaTitle: "Contact, Quotes & Booking - Genesis",
      metaDescription:
        "Send us a message or book an intro call with Genesis. App development, AI agents, automations and websites for startups. Based in Athens, working worldwide.",
      subtext:
        "Fill out the form and tell us your idea, whatever it is. We reply within one business day, once we've properly looked into it.",
      preferEmail: "Prefer email?",
      preferPhone: "Prefer a call?",
      phoneDisplay: "+30 69 99999999",
      tabMessage: "Send a message",
      tabBooking: "Book a call",
      firstName: "First name *",
      lastName: "Last name *",
      email: "Email *",
      category: "Category *",
      categoryPlaceholder: "Select a category",
      categories: [
        { value: "app", label: "App Development" },
        { value: "agents", label: "AI Agents" },
        { value: "workflows", label: "AI Workflows" },
        { value: "shop", label: "Websites & Eshops" },
        { value: "other", label: "Other" },
      ],
      otherLabel: "What else do you need? *",
      description: "Description *",
      submit: "Send us your message",
      sending: "Sending...",
      successTitle: "Thank you!",
      successBody:
        "We've received your message. We'll get back to you within one business day.",
      sendAnother: "Send another message",
      error: "Something went wrong. Please try again.",
      bookingTitle: "This is where the booking widget goes",
      bookingNote:
        "Integration with a scheduling tool (e.g. Calendly or Cal.com) — to be finalized during development.",
      errors: {
        firstName: "Enter your first name.",
        lastName: "Enter your last name.",
        emailRequired: "Enter your email.",
        emailInvalid: "Enter a valid email address.",
        category: "Select a category.",
        other: "Tell us what else you need.",
        description: "Enter a description.",
      },
      howWeWork: {
        eyebrow: "How we work",
        steps: [
          {
            title: "You reach out",
            body: "Through the form, by email, by phone or by booking a meeting.",
          },
          {
            title: "We discuss your needs",
            body: "We learn what you need and ask the right questions.",
          },
          {
            title: "You get a written proposal",
            body: "Scope, timeline and cost.",
          },
          {
            title: "We get started",
            body: "With regular updates at every step, through to delivery.",
          },
        ],
      },
    },
    reviews: {
      kicker: "Reviews",
      heading: "What our clients say",
      reviewsOnGoogle: "{count} reviews on Google",
      cardSource: "Review on Google",
      ctaPrompt: "Worked with us?",
      cta: "Leave us a review",
      seeAll: "See all reviews on Google →",
      pagesLabel: "Reviews pages",
      pageLabel: "Page {page}",
      previous: "Previous",
      next: "Next",
      rated: "Rated {rating} out of 5",
    },
    backToTop: "Back to top",
    teamPage: {
      breadcrumb: "Genesis › Team",
      titleLead: "The people behind ",
      titleAccent: "the code.",
      subtext:
        "Three engineers, no account managers, no outsourcing. The people you meet on the first call are the people who build your product.",
      people: "Despoina, Pantelis & Anastasis · Athens",
      metaTitle: "Meet the Team: Software Engineers in Athens - Genesis",
      metaDescription:
        "Meet Despoina, Pantelis and Anastasis, the engineers behind Genesis, a software development agency in Athens. Design, code and launch, with no outsourcing.",
      ogTitle: "Meet the Team - Genesis",
      imageAlt: "The Genesis team: Despoina, Pantelis and Anastasis",
    },
    footer: {
      tagline: "Athens tech studio",
      location: "Athens, Greece",
      services: "Services",
      work: "Work",
      team: "Team",
      contact: "Contact",
    },
    workPage: {
      breadcrumb: "Work",
      title: "Websites, eshops and booking sites — live and working.",
      subtitle: "Real businesses that run on what we built — every site here is live and in use.",
      metaTitle: "Websites, eshops and booking sites - Genesis",
      metaDescription:
        "Real businesses that run on what we built — every site here is live and in use.",
      viewProject: "View project",
      comingTitle: "Coming soon.",
      comingBody:
        " — a planning and discovery platform for engaged couples and wedding professionals.",
      comingLabel: "Web app · Weddings",
      comingImageAlt: "Weddingflow homepage preview",
      comingSteps: [
        { label: "Design", state: "done" },
        { label: "Build", state: "current" },
        { label: "Launch", state: "next" },
      ],
      ctaTitle: "Have a project in mind?",
      ctaBody: "Tell us what you want to build — we reply within one business day.",
      visitLive: "Visit live site",
      metaClient: "Client",
      metaDid: "What we did",
      metaStack: "Built with",
      metaYear: "Year",
      briefHeading: "The brief",
      builtHeading: "What we built",
      insideHeading: "Inside the site",
    },
    servicesPage: {
      breadcrumb: "Genesis › Services",
      heading: "Everything your product needs to launch and grow.",
      subtitle:
        "App development, AI agents, workflow automation, and websites & eshops — all under one roof.",
      metaTitle: "App Development, AI Agents & Workflows, Websites - Genesis",
      metaDescription:
        "Custom app development, AI agents, AI workflow automation, websites and eshops for startups and small businesses. Based in Athens, working worldwide.",
      includedLabel: "What's included",
      cta: "Book a discovery call",
      closingHeading: "Not sure what you need?",
      closingSubtext: "A free 30-minute call scopes the right starting point.",
      closingCta: "Let's talk!",
      blocks: [
        {
          id: "app-development",
          icon: "smartphone",
          kicker: "App development",
          heading: "Custom products, ready to succeed.",
          body: "Product development, from the first wireframe to production deploy — websites, mobile apps, and internal tools built around how your business actually works.",
          included: [
            "Discovery and technical scoping",
            "UI/UX design and prototyping",
            "Development (web, mobile, or both)",
            "QA testing and production deployment",
            "Optional ongoing maintenance and feature support",
          ],
          steps: [
            { title: "Discover", detail: "Scope + requirements" },
            { title: "Build", detail: "Design + development" },
            { title: "Launch", detail: "Deploy + support" },
          ],
        },
        {
          id: "ai-agents",
          icon: "bot",
          kicker: "AI agents",
          heading: "Custom agents, ready to work for you.",
          body: "Custom agents that handle repetitive tasks and connect to the tools you already use — support triage, lead qualification, internal ops.",
          included: [
            "Workflow audit and use-case scoping",
            "Custom agent build, integrated with your CRM/tools",
            "Testing and staged rollout",
            "Optional yearly plan for monitoring and updates",
          ],
          steps: [
            { title: "Discover", detail: "Audit + roadmap" },
            { title: "Build", detail: "Design + integrate" },
            { title: "Launch", detail: "Roll out + support" },
          ],
        },
        {
          id: "ai-workflows",
          icon: "workflow",
          kicker: "AI workflows",
          heading: "Custom workflows, ready to save you hours.",
          body: "Automation and AI integration into your everyday processes — so your team spends less time on manual work and more time on what matters.",
          included: [
            "Process audit and automation opportunity mapping",
            "Custom workflow design and AI integration",
            "Integration with your existing tools (CRM, email, spreadsheets, etc.)",
            "Testing and staged rollout",
            "Optional yearly plan for monitoring and updates",
          ],
          steps: [
            { title: "Discover", detail: "Audit + opportunities" },
            { title: "Build", detail: "Design + integrate" },
            { title: "Launch", detail: "Roll out + support" },
          ],
        },
        {
          id: "websites-eshops",
          icon: "shopping-bag",
          kicker: "Websites & eshops",
          heading: "Custom sites and stores, ready to sell.",
          body: "Marketing sites and online stores, built fast, with SEO wired in from day one — so you're ready to launch and start selling immediately.",
          included: [
            "Discovery and content/structure planning",
            "Custom design and development (no templates)",
            "Eshop setup — checkout, inventory, product pages (if applicable)",
            "Technical SEO and page speed optimization",
            "QA testing and launch",
            "Optional ongoing maintenance and content updates",
          ],
          steps: [
            { title: "Discover", detail: "Scope + content" },
            { title: "Build", detail: "Design + development" },
            { title: "Launch", detail: "SEO + deploy" },
          ],
        },
      ],
      chips: [
        { href: serviceChipHrefs.app, label: "App development" },
        { href: serviceChipHrefs.agents, label: "AI agents" },
        { href: serviceChipHrefs.workflows, label: "AI workflows" },
        { href: serviceChipHrefs.shop, label: "Websites & eshops" },
      ],
    },
  },
  el: {
    nav: {
      services: "Υπηρεσίες",
      work: "Έργα",
      team: "Ομάδα",
      contact: "Επικοινωνία",
      cta: "Ας μιλήσουμε!",
    },
    hero: {
      eyebrow: "GENESIS · ΑΘΗΝΑ, GR",
      headline: "Φτιάχνουμε το προϊόν σας, από την αρχή ως το τέλος.",
      subtext:
        "Agency ανάπτυξης λογισμικού στην Αθήνα — σχεδιάζουμε websites, εφαρμογές και eshops για startups και μικρές επιχειρήσεις, χωρίς να χρειάζεστε τεχνική ομάδα.",
      primaryCta: "Ας μιλήσουμε!",
      secondaryCta: "Δείτε τη δουλειά μας",
    },
    services: {
      label: "Υπηρεσίες",
      heading: "Τι προσφέρουμε",
      intro:
        "Σχεδιάζουμε, χτίζουμε και παραδίδουμε ολοκληρωμένα digital προϊόντα — χωρίς να χρειάζεστε τεχνική ομάδα.",
      seeAll: "Δείτε όλες τις υπηρεσίες",
      items: [
        {
          title: "Ανάπτυξη Εφαρμογών",
          description:
            "Ανάπτυξη προϊόντος από το πρώτο wireframe έως το production deploy.",
          icon: "app",
        },
        {
          title: "AI Agents",
          description:
            "Agents που αναλαμβάνουν επαναλαμβανόμενες εργασίες και συνδέονται με τα εργαλεία που ήδη χρησιμοποιείτε.",
          icon: "agents",
        },
        {
          title: "AI Workflows",
          description: "Αυτοματισμοί και ενσωμάτωση AI στις καθημερινές σας διαδικασίες.",
          icon: "workflows",
        },
        {
          title: "Websites & Eshops",
          description:
            "Ιστοσελίδες και eshops με SEO από την πρώτη μέρα, έτοιμα να πουλήσουν.",
          icon: "shop",
        },
      ],
    },
    work: {
      label: "Επιλεγμένα έργα",
      heading: "Ζωντανά sites για πραγματικές επιχειρήσεις.",
      intro:
        "Eshops, booking sites και τοπικές επιχειρήσεις που σχεδιάσαμε, φτιάξαμε και βγάλαμε live — από το Μαρούσι ως τη Μύκονο.",
      more: "Περισσότερα websites, eshops και booking sites στο portfolio μας.",
      seeAll: "Δείτε όλα τα έργα →",
    },
    team: {
      label: "Η ομάδα",
      headingLead: "Τρεις μηχανικοί. Ένα agency.",
      headingAccent: "Μιλάτε απευθείας με αυτούς που χτίζουν.",
      intro:
        "Agency ανάπτυξης λογισμικού στην Αθήνα, αρκετά μικρό για να κινείται γρήγορα και αρκετά έμπειρο για να αναλαμβάνει όλο το stack, από το brief μέχρι το launch.",
      meet: "Γνωρίστε την ομάδα",
      photoSoon: "ΦΩΤΟΓΡΑΦΙΑ ΣΥΝΤΟΜΑ",
    },
    contact: {
      label: "Επικοινωνία",
      heading: "Πείτε μας τι θέλετε να φτιάξετε.",
      intro: "Ό,τι κι αν χρειάζεστε για το project σας!",
      introDetail: "Απαντάμε εντός μίας εργάσιμης ημέρας και σας λέμε τα επόμενα βήματα.",
      cta: "Συμπληρώστε τη φόρμα",
      directLabel: "Προτιμάτε κατευθείαν email ή κινητό;",
    },
    contactPage: {
      breadcrumb: "Genesis › Επικοινωνία",
      heading: "Ας φτιάξουμε κάτι σπουδαίο μαζί!",
      metaTitle: "Επικοινωνία, Προσφορά & Ραντεβού - Genesis",
      metaDescription:
        "Στείλτε μας μήνυμα ή κλείστε ραντεβού γνωριμίας με τη Genesis. Ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί και websites για startups. Έδρα στην Αθήνα, δουλεύουμε παντού.",
      subtext:
        "Συμπληρώστε τη φόρμα και γράψτε μας την ιδέα σας, ό,τι κι αν χρειάζεστε. Απαντάμε εντός μίας εργάσιμης ημέρας, αφού δούμε διεξοδικά το θέμα σας.",
      preferEmail: "Προτιμάτε email;",
      preferPhone: "Προτιμάτε τηλέφωνο;",
      phoneDisplay: "+30 69 99999999",
      tabMessage: "Στείλτε μήνυμα",
      tabBooking: "Κλείστε ραντεβού",
      firstName: "Όνομα *",
      lastName: "Επώνυμο *",
      email: "Email *",
      category: "Κατηγορία *",
      categoryPlaceholder: "Επιλέξτε κατηγορία",
      categories: [
        { value: "app", label: "Ανάπτυξη Εφαρμογών" },
        { value: "agents", label: "AI Agents" },
        { value: "workflows", label: "AI Workflows" },
        { value: "shop", label: "Websites & Eshops" },
        { value: "other", label: "Άλλο" },
      ],
      otherLabel: "Τι άλλο χρειάζεστε; *",
      description: "Περιγραφή *",
      submit: "Στείλτε μας μήνυμα",
      sending: "Αποστολή...",
      successTitle: "Ευχαριστούμε!",
      successBody:
        "Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας εντός μίας εργάσιμης ημέρας.",
      sendAnother: "Στείλτε άλλο μήνυμα",
      error: "Κάτι πήγε στραβά. Δοκιμάστε ξανά.",
      bookingTitle: "Εδώ μπαίνει το booking widget",
      bookingNote:
        "Ενσωμάτωση με εργαλείο κράτησης ραντεβού (π.χ. Calendly ή Cal.com) — θα οριστικοποιηθεί στο development.",
      errors: {
        firstName: "Συμπληρώστε το όνομά σας.",
        lastName: "Συμπληρώστε το επώνυμό σας.",
        emailRequired: "Συμπληρώστε το email σας.",
        emailInvalid: "Συμπληρώστε ένα έγκυρο email.",
        category: "Επιλέξτε κατηγορία.",
        other: "Πείτε μας τι άλλο χρειάζεστε.",
        description: "Συμπληρώστε την περιγραφή.",
      },
      howWeWork: {
        eyebrow: "Πώς δουλεύουμε",
        steps: [
          {
            title: "Επικοινωνείτε μαζί μας",
            body: "Με τη φόρμα, με email, τηλεφωνικά ή κλείνοντας ραντεβού.",
          },
          {
            title: "Συζητάμε τις ανάγκες σας",
            body: "Μαθαίνουμε τι χρειάζεστε και κάνουμε τις σωστές ερωτήσεις.",
          },
          {
            title: "Λαμβάνετε γραπτή προσφορά",
            body: "Με scope, χρονοδιάγραμμα και κόστος.",
          },
          {
            title: "Ξεκινάμε",
            body: "Με σταθερή ενημέρωση σε κάθε βήμα, μέχρι την παράδοση.",
          },
        ],
      },
    },
    reviews: {
      kicker: "Κριτικές",
      heading: "Τι λένε οι πελάτες μας",
      reviewsOnGoogle: "{count} κριτικές στο Google",
      cardSource: "Κριτική στο Google",
      ctaPrompt: "Έχουμε συνεργαστεί;",
      cta: "Αφήστε μας μια κριτική",
      seeAll: "Δείτε όλες τις κριτικές στο Google →",
      pagesLabel: "Σελίδες κριτικών",
      pageLabel: "Σελίδα {page}",
      previous: "Προηγούμενη",
      next: "Επόμενη",
      rated: "Βαθμολογία {rating} από 5",
    },
    backToTop: "Επιστροφή στην κορυφή",
    teamPage: {
      breadcrumb: "Genesis › Ομάδα",
      titleLead: "Οι άνθρωποι πίσω από ",
      titleAccent: "τον κώδικα.",
      subtext:
        "Τρεις μηχανικοί, χωρίς account managers, χωρίς outsourcing. Οι άνθρωποι που γνωρίζετε στην πρώτη κλήση είναι αυτοί που χτίζουν το προϊόν σας.",
      people: "Δέσποινα, Παντελής & Αναστάσης · Αθήνα",
      metaTitle: "Η Ομάδα: Μηχανικοί Λογισμικού στην Αθήνα - Genesis",
      metaDescription:
        "Γνωρίστε τη Δέσποινα, τον Παντελή και τον Αναστάση, τους μηχανικούς της Genesis, agency λογισμικού στην Αθήνα. Design, κώδικας και launch, χωρίς outsourcing.",
      ogTitle: "Η Ομάδα - Genesis",
      imageAlt: "Η ομάδα της Genesis: Δέσποινα, Παντελής και Αναστάσης",
    },
    footer: {
      tagline: "Athens tech studio",
      location: "Αθήνα, Ελλάδα",
      services: "Υπηρεσίες",
      work: "Έργα",
      team: "Ομάδα",
      contact: "Επικοινωνία",
    },
    workPage: {
      breadcrumb: "Έργα",
      title: "Websites, eshops και booking sites — live και σε λειτουργία.",
      subtitle:
        "Πραγματικές επιχειρήσεις που δουλεύουν με ό,τι φτιάξαμε — κάθε site εδώ είναι live και σε χρήση.",
      metaTitle: "Websites, eshops και booking sites - Genesis",
      metaDescription:
        "Πραγματικές επιχειρήσεις που δουλεύουν με ό,τι φτιάξαμε — κάθε site εδώ είναι live και σε χρήση.",
      viewProject: "Δείτε το έργο",
      comingTitle: "Έρχεται σύντομα.",
      comingBody:
        " — μια πλατφόρμα οργάνωσης και αναζήτησης για ζευγάρια που παντρεύονται και επαγγελματίες του γάμου.",
      comingLabel: "Web app · Γάμοι",
      comingImageAlt: "Προεπισκόπηση της αρχικής του Weddingflow",
      comingSteps: [
        { label: "Σχεδιασμός", state: "done" },
        { label: "Ανάπτυξη", state: "current" },
        { label: "Launch", state: "next" },
      ],
      ctaTitle: "Έχετε κάποιο project στο μυαλό σας;",
      ctaBody: "Πείτε μας τι θέλετε να φτιάξουμε — απαντάμε μέσα σε μία εργάσιμη.",
      visitLive: "Δείτε το live site",
      metaClient: "Πελάτης",
      metaDid: "Τι κάναμε",
      metaStack: "Τεχνολογία",
      metaYear: "Χρονιά",
      briefHeading: "Το ζητούμενο",
      builtHeading: "Τι φτιάξαμε",
      insideHeading: "Μέσα στο site",
    },
    servicesPage: {
      breadcrumb: "Genesis › Υπηρεσίες",
      heading: "Το προϊόν σας, από την ιδέα στην πραγματικότητα.",
      subtitle:
        "Ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί, και websites & eshops — όλα σε ένα μέρος.",
      metaTitle: "Εφαρμογές, AI Agents & Workflows, Websites - Genesis",
      metaDescription:
        "Custom ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί, websites και eshops για startups και μικρές επιχειρήσεις. Έδρα στην Αθήνα, δουλεύουμε παντού.",
      includedLabel: "Τι περιλαμβάνει",
      cta: "Κλείστε μια συνάντηση γνωριμίας",
      closingHeading: "Δεν ξέρετε τι χρειάζεστε;",
      closingSubtext: "Μια δωρεάν συνάντηση 30 λεπτών ορίζει το σωστό ξεκίνημα.",
      closingCta: "Ας μιλήσουμε!",
      blocks: [
        {
          id: "app-development",
          icon: "smartphone",
          kicker: "Ανάπτυξη εφαρμογών",
          heading: "Custom προϊόντα, έτοιμα να πετύχουν.",
          body: "Ανάπτυξη προϊόντος, από το πρώτο wireframe έως το production deploy — websites, mobile apps και εσωτερικά εργαλεία, φτιαγμένα γύρω από το πώς δουλεύει πραγματικά η επιχείρησή σας.",
          included: [
            "Ανάλυση απαιτήσεων και τεχνικός σχεδιασμός",
            "UI/UX design και prototyping",
            "Ανάπτυξη (web, mobile, ή και τα δύο)",
            "Έλεγχος ποιότητας (QA) και production deployment",
            "Προαιρετική συνεχής συντήρηση και υποστήριξη νέων features",
          ],
          steps: [
            { title: "Ανάλυση", detail: "Scope + απαιτήσεις" },
            { title: "Ανάπτυξη", detail: "Design + development" },
            { title: "Παράδοση", detail: "Deploy + υποστήριξη" },
          ],
        },
        {
          id: "ai-agents",
          icon: "bot",
          kicker: "AI Agents",
          heading: "Custom agents, έτοιμοι να δουλέψουν για σας.",
          body: "Custom agents που αναλαμβάνουν επαναλαμβανόμενες εργασίες και συνδέονται με τα εργαλεία που ήδη χρησιμοποιείτε — support, lead qualification, εσωτερικές διαδικασίες.",
          included: [
            "Ανάλυση διαδικασιών και ορισμός use-case",
            "Custom ανάπτυξη agent, ενσωματωμένο στο CRM/εργαλεία σας",
            "Δοκιμές και σταδιακή εφαρμογή",
            "Προαιρετικό ετήσιο πακέτο για monitoring και ενημερώσεις",
          ],
          steps: [
            { title: "Ανάλυση", detail: "Audit + roadmap" },
            { title: "Ανάπτυξη", detail: "Σχεδιασμός + ενσωμάτωση" },
            { title: "Παράδοση", detail: "Εφαρμογή + υποστήριξη" },
          ],
        },
        {
          id: "ai-workflows",
          icon: "workflow",
          kicker: "AI Workflows",
          heading: "Custom αυτοματισμοί, έτοιμοι να σας γλιτώσουν ώρες.",
          body: "Αυτοματισμοί και ενσωμάτωση AI στις καθημερινές σας διαδικασίες — ώστε η ομάδα σας να ξοδεύει λιγότερο χρόνο σε χειροκίνητες εργασίες και περισσότερο σε αυτό που μετράει.",
          included: [
            "Ανάλυση διαδικασιών και εντοπισμός ευκαιριών αυτοματοποίησης",
            "Custom σχεδιασμός workflow και ενσωμάτωση AI",
            "Ενσωμάτωση με τα εργαλεία που ήδη χρησιμοποιείτε (CRM, email, spreadsheets κλπ)",
            "Δοκιμές και σταδιακή εφαρμογή",
            "Προαιρετικό ετήσιο πακέτο για monitoring και ενημερώσεις",
          ],
          steps: [
            { title: "Ανάλυση", detail: "Audit + ευκαιρίες" },
            { title: "Ανάπτυξη", detail: "Σχεδιασμός + ενσωμάτωση" },
            { title: "Παράδοση", detail: "Εφαρμογή + υποστήριξη" },
          ],
        },
        {
          id: "websites-eshops",
          icon: "shopping-bag",
          kicker: "Websites & Eshops",
          heading: "Custom ιστοσελίδες και eshops, έτοιμα να πουλήσουν.",
          body: "Ιστοσελίδες και online καταστήματα, γρήγορα, με SEO ενσωματωμένο από την πρώτη μέρα — έτοιμα να βγουν live και να αρχίσουν να πουλάνε αμέσως.",
          included: [
            "Ανάλυση απαιτήσεων και σχεδιασμός περιεχομένου",
            "Custom design και ανάπτυξη (όχι templates)",
            "Στήσιμο eshop — checkout, inventory, σελίδες προϊόντων (όπου χρειάζεται)",
            "Τεχνικό SEO και βελτιστοποίηση ταχύτητας",
            "Έλεγχος ποιότητας (QA) και launch",
            "Προαιρετική συνεχής συντήρηση και ενημέρωση περιεχομένου",
          ],
          steps: [
            { title: "Ανάλυση", detail: "Scope + περιεχόμενο" },
            { title: "Ανάπτυξη", detail: "Design + development" },
            { title: "Παράδοση", detail: "SEO + deploy" },
          ],
        },
      ],
      chips: [
        { href: serviceChipHrefs.app, label: "Ανάπτυξη Εφαρμογών" },
        { href: serviceChipHrefs.agents, label: "AI Agents" },
        { href: serviceChipHrefs.workflows, label: "AI Workflows" },
        { href: serviceChipHrefs.shop, label: "Websites & Eshops" },
      ],
    },
  },
};
