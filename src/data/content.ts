import type { StatId } from "@/config/site";

export type Locale = "en" | "el";

export type Dictionary = {
  nav: {
    home: string;
    services: string;
    work: string;
    team: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    skip: string;
  };
  hero: {
    eyebrow: string;
    place: string;
    line1: string;
    line2: string;
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
  upcoming: {
    eyebrow: string;
    title: string;
    text: string;
    tags: string[];
    launch: string;
    soon: string;
    notify: string;
    photoAlt: string;
  };
  team: {
    label: string;
    heading: string;
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
    metaTitle: string;
    metaDescription: string;
    hero: {
      /** One entry per line-mask line; the h1 reads them joined with spaces. */
      titleLines: string[];
      intro: string;
    };
    ways: {
      eyebrow: string;
      heading: string;
      message: { title: string; body: string };
      /** `{minutes}` is filled from `site.booking.durationMin`. */
      booking: { title: string; body: string; link: string };
      email: { title: string; body: string };
      phone: { title: string; body: string };
    };
    form: {
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
      errors: {
        firstName: string;
        lastName: string;
        emailRequired: string;
        emailInvalid: string;
        category: string;
        other: string;
        description: string;
      };
    };
    howWeWork: {
      title: string;
      steps: Array<{ title: string; body: string }>;
    };
    band: {
      slidesLabel: string;
      /** `{index}` is the 1-based slide number. */
      slideLabel: string;
    };
  };
  stats: Record<StatId, { label: string; note: string }>;
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
    companyTitle: string;
    servicesTitle: string;
    contactTitle: string;
    services: Array<{ href: string; label: string }>;
    rights: string;
    privacy: string;
    cookies: string;
  };
  legal: {
    updated: string;
    privacy: { title: string; description: string; sections: Array<{ heading: string; body: string }> };
    cookies: { title: string; description: string; sections: Array<{ heading: string; body: string }> };
  };
  workPage: {
    breadcrumb: string;
    title: string;
    titleLines: [string, string];
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    viewProject: string;
    liveDivider: string;
    upcomingDivider: string;
    comingSoon: string;
    pagesLabel: string;
    previousPage: string;
    nextPage: string;
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
    allWork: string;
    nextProject: string;
  };
  servicesPage: {
    titleLines: Array<Array<{ text: string; accent?: true }>>;
    subtitle: string;
    metaTitle: string;
    metaDescription: string;
    divider: string;
    includedLabel: string;
    cta: string;
    proof: string;
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
      proof?: true;
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
      home: "Home",
      services: "Services",
      work: "Work",
      team: "Team",
      contact: "Contact",
      cta: "Let's talk",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "GENESIS · ATHENS, GR",
      place: "ATHENS, GR",
      line1: "Three engineers. One agency.",
      line2: "You talk to the builders.",
      subtext:
        "We build your product from start to finish — websites, eshops, apps, AI agents and AI workflows — and run the technology behind it, as your own in-house team would.",
      primaryCta: "Let's talk",
      secondaryCta: "See our work",
    },
    services: {
      label: "Services",
      heading: "What we offer",
      intro:
        "Everything your product needs, under one roof. Start with one service, add more as you grow.",
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
        "Websites, eshops and booking platforms we designed, built and launched — live today, for real clients.",
      more: "Just a glimpse of what we've built.",
      seeAll: "Explore all projects",
    },
    upcoming: {
      eyebrow: "Upcoming projects",
      title: "Weddingflow",
      text: "The first Greek platform that brings wedding venues, professionals and planning tools together — for engaged couples and wedding pros.",
      tags: ["Venues", "Wedding professionals", "Planning tools"],
      launch: "Launch:",
      soon: "soon.",
      notify: "Get notified at launch",
      photoAlt: "Weddingflow — wedding table under olive trees",
    },
    team: {
      label: "The team",
      heading: "Meet the builders.",
      intro: "Small enough to move fast, experienced enough to own the full stack — from brief to launch.",
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
      metaTitle: "Contact: Quotes & Booking",
      metaDescription:
        "Send us a message or book an intro call with Genesis. App development, AI agents, automations and websites for startups. Based in Athens, working worldwide.",
      hero: {
        titleLines: ["Let's build something", "great, together!"],
        intro:
          "Fill out the form and tell us your idea, whatever it is. We reply within one business day, once we've properly looked into it.",
      },
      ways: {
        eyebrow: "Get in touch",
        heading: "Four ways to reach us.",
        message: {
          title: "Send a message",
          body: "Tell us what you want to build. We reply within one business day.",
        },
        booking: {
          title: "Book a call",
          body: "Pick a {minutes}-minute slot that suits you.",
          link: "Open the calendar",
        },
        email: { title: "Email us", body: "For briefs, questions or a quick hello." },
        phone: { title: "Call us", body: "Mon–Fri, 10:00–18:00 (Athens)." },
      },
      form: {
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
        errors: {
          firstName: "Enter your first name.",
          lastName: "Enter your last name.",
          emailRequired: "Enter your email.",
          emailInvalid: "Enter a valid email address.",
          category: "Select a category.",
          other: "Tell us what else you need.",
          description: "Enter a description.",
        },
      },
      howWeWork: {
        title: "How we work",
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
      band: {
        slidesLabel: "Facts about Genesis",
        slideLabel: "Show fact {index}",
      },
    },
    stats: {
      engineers: { label: "Senior engineers", note: "" },
      projects: {
        label: "Projects delivered",
        note: "Websites, apps and eshops we've built and shipped.",
      },
      years: { label: "Years experience", note: "The team's experience, brought to every project." },
      inHouse: { label: "In-house team", note: "No outsourcing — the three of us build everything." },
    },
    reviews: {
      kicker: "Reviews",
      heading: "What our clients say",
      reviewsOnGoogle: "{count} reviews on Google",
      cardSource: "Review on Google",
      ctaPrompt: "Worked with us?",
      cta: "Leave us a review",
      seeAll: "See all reviews on Google ↗",
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
      metaTitle: "Team: Software Engineers in Athens",
      metaDescription:
        "Meet Despoina, Pantelis and Anastasis, the engineers behind Genesis, a software development agency in Athens. Design, code and launch, with no outsourcing.",
      ogTitle: "Team: Software Engineers in Athens",
      imageAlt: "The Genesis team: Despoina, Pantelis and Anastasis",
    },
    footer: {
      tagline: "Websites, apps and AI — designed, built and run by three engineers.",
      location: "Athens, Greece",
      companyTitle: "Company",
      servicesTitle: "Services",
      contactTitle: "Get in touch",
      services: [
        { href: "/services#app-development", label: "App development" },
        { href: "/services#ai-agents", label: "AI agents" },
        { href: "/services#ai-workflows", label: "AI workflows" },
        { href: "/services#websites-eshops", label: "Websites & eshops" },
      ],
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    legal: {
      updated: "Working draft. The final text will be confirmed before launch.",
      privacy: {
        title: "Privacy Policy",
        description:
          "How Genesis handles the name and email you send through the contact form, and the rights you have over that data.",
        sections: [
          {
            heading: "Who is responsible",
            body: "{name} is operated by Despoina Ntolka, Pantelis Karamailis and Anastasis Pateritsas, working as freelancers in Athens, Greece. For anything about your data, write to {email}.",
          },
          {
            heading: "What we collect",
            body: "When you write to us through the contact form, we collect your name, your email address, the category you choose and the message you send.",
          },
          {
            heading: "Why we collect it",
            body: "We use that information only to reply to your enquiry and, if you ask us to, to prepare a proposal. We do not sell it and we do not use it for advertising.",
          },
          {
            heading: "How long we keep it",
            body: "We keep enquiry messages for as long as we need them to answer you and to keep a record of the work we discussed. You can ask us to delete them.",
          },
          {
            heading: "Your rights",
            body: "You can ask to access, correct or delete your data, or to limit how we use it. Write to {email}. You can also lodge a complaint with the Hellenic Data Protection Authority.",
          },
        ],
      },
      cookies: {
        title: "Cookie Policy",
        description: "Which cookies Genesis uses today, and why.",
        sections: [
          {
            heading: "What we use today",
            body: "This site sets only the cookies that are strictly necessary to show you the pages and to remember a choice the site itself needs in order to work.",
          },
          {
            heading: "What we do not use",
            body: "We do not use analytics cookies, advertising cookies or embedded third-party players. If we add any of those later, this page will say so before they are switched on.",
          },
          {
            heading: "Your browser",
            body: "You can block or delete cookies in your browser. Strictly necessary cookies are required for the site to load correctly.",
          },
        ],
      },
    },
    workPage: {
      breadcrumb: "Work",
      title: "Websites, eshops and booking sites — live and working.",
      titleLines: ["Websites, eshops and booking", "sites — live and working."],
      subtitle: "Real businesses that run on what we built — every site here is live and in use.",
      metaTitle: "Work: Websites, Eshops & Booking",
      metaDescription:
        "Real businesses that run on what we built — every site here is live and in use.",
      viewProject: "View project",
      liveDivider: "Live projects",
      upcomingDivider: "Upcoming",
      comingSoon: "Coming soon",
      pagesLabel: "Project pages",
      previousPage: "Previous page",
      nextPage: "Next page",
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
      allWork: "All work",
      nextProject: "Next project",
    },
    servicesPage: {
      titleLines: [
        [{ text: "Everything your product needs" }],
        [{ text: "to launch " }, { text: "and grow.", accent: true }],
      ],
      subtitle:
        "App development, AI agents, workflow automation, and websites & eshops — all under one roof.",
      metaTitle: "Services: Apps, AI Agents & Websites",
      metaDescription:
        "Custom app development, AI agents, AI workflow automation, websites and eshops for startups and small businesses. Based in Athens, working worldwide.",
      divider: "Services",
      includedLabel: "What's included",
      cta: "Book a discovery call",
      proof: "See related work",
      closingHeading: "Not sure what you need?",
      closingSubtext:
        "A free 30-minute call scopes the right starting point — and every project gets a written proposal with scope, timeline and cost before any work starts.",
      closingCta: "Let's talk",
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
          proof: true,
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
      home: "Αρχική",
      services: "Υπηρεσίες",
      work: "Έργα",
      team: "Ομάδα",
      contact: "Επικοινωνία",
      cta: "Ας μιλήσουμε",
      openMenu: "Άνοιγμα μενού",
      closeMenu: "Κλείσιμο μενού",
      skip: "Μετάβαση στο περιεχόμενο",
    },
    hero: {
      eyebrow: "GENESIS · ΑΘΗΝΑ, GR",
      place: "ΑΘΗΝΑ",
      line1: "Τρεις μηχανικοί. Ένα agency.",
      line2: "Μιλάτε με αυτούς που χτίζουν.",
      subtext:
        "Φτιάχνουμε το προϊόν σας από την αρχή ως το τέλος — websites, eshops, εφαρμογές, AI agents και AI workflows — και αναλαμβάνουμε όλο το τεχνικό κομμάτι, όπως θα έκανε η δική σας in-house ομάδα.",
      primaryCta: "Ας μιλήσουμε",
      secondaryCta: "Δείτε τη δουλειά μας",
    },
    services: {
      label: "Υπηρεσίες",
      heading: "Τι προσφέρουμε",
      intro:
        "Όλα όσα χρειάζεται το προϊόν σας, κάτω από μία στέγη. Ξεκινήστε με μία υπηρεσία και προσθέστε κι άλλες καθώς μεγαλώνετε.",
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
      heading: "Έργα που ήδη δουλεύουν για τους πελάτες μας.",
      intro:
        "Websites, eshops και πλατφόρμες κρατήσεων που σχεδιάσαμε, φτιάξαμε και βγάλαμε live — σε λειτουργία σήμερα, για πραγματικούς πελάτες.",
      more: "Μια μικρή γεύση από τη δουλειά μας.",
      seeAll: "Δείτε όλα τα έργα",
    },
    upcoming: {
      eyebrow: "Επερχόμενα έργα",
      title: "Weddingflow",
      text: "Η πρώτη ελληνική πλατφόρμα που συγκεντρώνει χώρους γάμου, επαγγελματίες και εργαλεία σχεδιασμού — για ζευγάρια και επαγγελματίες του γάμου.",
      tags: ["Χώροι", "Επαγγελματίες γάμου", "Εργαλεία σχεδιασμού"],
      launch: "Launch:",
      soon: "σύντομα.",
      notify: "Ενημερώστε με στο launch",
      photoAlt: "Weddingflow — τραπέζι γάμου κάτω από ελιές",
    },
    team: {
      label: "Η ομάδα",
      heading: "Γνωρίστε αυτούς που χτίζουν.",
      intro:
        "Μικρή ομάδα για να κινούμαστε γρήγορα, με την εμπειρία να αναλάβουμε όλο το έργο — από την ιδέα ως το launch.",
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
      metaTitle: "Επικοινωνία: προσφορά ή ραντεβού",
      metaDescription:
        "Στείλτε μας μήνυμα ή κλείστε ραντεβού γνωριμίας με τη Genesis. Ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί και websites για startups. Έδρα στην Αθήνα, δουλεύουμε παντού.",
      hero: {
        titleLines: ["Ας φτιάξουμε κάτι", "σπουδαίο μαζί!"],
        intro:
          "Συμπληρώστε τη φόρμα και πείτε μας την ιδέα σας, όποια κι αν είναι. Απαντάμε μέσα σε μία εργάσιμη μέρα, αφού τη δούμε προσεκτικά.",
      },
      ways: {
        eyebrow: "Επικοινωνία",
        heading: "Τέσσερις τρόποι να μας βρείτε.",
        message: {
          title: "Στείλτε μήνυμα",
          body: "Πείτε μας τι θέλετε να φτιάξετε. Απαντάμε μέσα σε μία εργάσιμη μέρα.",
        },
        booking: {
          title: "Κλείστε μια κλήση",
          body: "Διαλέξτε ένα {minutes}λεπτο που σας βολεύει.",
          link: "Ανοίξτε το ημερολόγιο",
        },
        email: { title: "Στείλτε email", body: "Για brief, ερωτήσεις ή ένα γρήγορο γεια." },
        phone: { title: "Καλέστε μας", body: "Δευ–Παρ, 10:00–18:00" },
      },
      form: {
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
        submit: "Στείλτε το μήνυμα",
        sending: "Αποστολή...",
        successTitle: "Ευχαριστούμε!",
        successBody:
          "Λάβαμε το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας εντός μίας εργάσιμης ημέρας.",
        sendAnother: "Στείλτε άλλο μήνυμα",
        error: "Κάτι πήγε στραβά. Δοκιμάστε ξανά.",
        errors: {
          firstName: "Συμπληρώστε το όνομά σας.",
          lastName: "Συμπληρώστε το επώνυμό σας.",
          emailRequired: "Συμπληρώστε το email σας.",
          emailInvalid: "Συμπληρώστε ένα έγκυρο email.",
          category: "Επιλέξτε κατηγορία.",
          other: "Πείτε μας τι άλλο χρειάζεστε.",
          description: "Συμπληρώστε την περιγραφή.",
        },
      },
      howWeWork: {
        title: "Πώς δουλεύουμε",
        steps: [
          {
            title: "Επικοινωνείτε",
            body: "Μέσω φόρμας, email, τηλεφώνου ή κλείνοντας ραντεβού.",
          },
          {
            title: "Συζητάμε τις ανάγκες σας",
            body: "Μαθαίνουμε τι χρειάζεστε και κάνουμε τις σωστές ερωτήσεις.",
          },
          {
            title: "Παίρνετε γραπτή πρόταση",
            body: "Αντικείμενο, χρονοδιάγραμμα και κόστος.",
          },
          {
            title: "Ξεκινάμε",
            body: "Με τακτικές ενημερώσεις σε κάθε βήμα, μέχρι την παράδοση.",
          },
        ],
      },
      band: {
        slidesLabel: "Στοιχεία για τη Genesis",
        slideLabel: "Δείτε το στοιχείο {index}",
      },
    },
    stats: {
      engineers: { label: "Senior μηχανικοί", note: "" },
      projects: {
        label: "Έργα που παραδώσαμε",
        note: "Websites, εφαρμογές και eshops που έχουμε φτιάξει και παραδώσει.",
      },
      years: { label: "Χρόνια εμπειρίας", note: "Η εμπειρία της ομάδας μας, σε κάθε project." },
      inHouse: { label: "In-house ομάδα", note: "Χωρίς outsourcing — όλα τα φτιάχνουμε οι τρεις μας." },
    },
    reviews: {
      kicker: "Κριτικές",
      heading: "Τι λένε οι πελάτες μας",
      reviewsOnGoogle: "{count} κριτικές στο Google",
      cardSource: "Κριτική στο Google",
      ctaPrompt: "Συνεργαστήκαμε;",
      cta: "Αφήστε μας μια κριτική",
      seeAll: "Δείτε όλες τις κριτικές στο Google ↗",
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
        "Τρεις μηχανικοί, χωρίς account managers, χωρίς outsourcing. Οι άνθρωποι που γνωρίζετε στην αρχική συνάντηση είναι αυτοί που χτίζουν το προϊόν σας.",
      people: "Δέσποινα, Παντελής & Αναστάσης · Αθήνα",
      metaTitle: "Η ομάδα: μηχανικοί λογισμικού στην Αθήνα",
      metaDescription:
        "Γνωρίστε τη Δέσποινα, τον Παντελή και τον Αναστάση, τους μηχανικούς της Genesis, agency λογισμικού στην Αθήνα. Design, κώδικας και launch, χωρίς outsourcing.",
      ogTitle: "Η ομάδα: μηχανικοί λογισμικού στην Αθήνα",
      imageAlt: "Η ομάδα της Genesis: Δέσποινα, Παντελής και Αναστάσης",
    },
    footer: {
      tagline:
        "Websites, εφαρμογές και AI — σχεδιασμένα, χτισμένα και υποστηριζόμενα από τρεις μηχανικούς.",
      location: "Αθήνα, Ελλάδα",
      companyTitle: "Εταιρεία",
      servicesTitle: "Υπηρεσίες",
      contactTitle: "Επικοινωνία",
      services: [
        { href: "/services#app-development", label: "Ανάπτυξη εφαρμογών" },
        { href: "/services#ai-agents", label: "AI agents" },
        { href: "/services#ai-workflows", label: "AI workflows" },
        { href: "/services#websites-eshops", label: "Websites & eshops" },
      ],
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      privacy: "Πολιτική απορρήτου",
      cookies: "Πολιτική cookies",
    },
    legal: {
      updated: "Πρόχειρο κείμενο. Το τελικό κείμενο θα επιβεβαιωθεί πριν από τη δημοσίευση.",
      privacy: {
        title: "Πολιτική απορρήτου",
        description:
          "Πώς η Genesis χειρίζεται το όνομα και το email που στέλνετε μέσω της φόρμας επικοινωνίας, και ποια δικαιώματα έχετε πάνω σε αυτά τα δεδομένα.",
        sections: [
          {
            heading: "Ποιοι είναι υπεύθυνοι",
            body: "Η {name} λειτουργεί από τη Δέσποινα Ντόλκα, τον Παντελή Καραμαΐλη και τον Αναστάση Πατερίτσα, ελεύθερους επαγγελματίες με έδρα την Αθήνα. Για οτιδήποτε αφορά τα δεδομένα σας, γράψτε στο {email}.",
          },
          {
            heading: "Τι συλλέγουμε",
            body: "Όταν μας γράφετε μέσω της φόρμας επικοινωνίας, συλλέγουμε το όνομά σας, τη διεύθυνση email, την κατηγορία που επιλέγετε και το μήνυμα που στέλνετε.",
          },
          {
            heading: "Γιατί τα συλλέγουμε",
            body: "Χρησιμοποιούμε αυτά τα στοιχεία μόνο για να απαντήσουμε στο αίτημά σας και, αν μας το ζητήσετε, για να ετοιμάσουμε μια πρόταση. Δεν τα πουλάμε και δεν τα χρησιμοποιούμε για διαφήμιση.",
          },
          {
            heading: "Για πόσο τα κρατάμε",
            body: "Κρατάμε τα μηνύματα για όσο χρειάζεται ώστε να σας απαντήσουμε και να έχουμε αρχείο της συζήτησης. Μπορείτε να μας ζητήσετε να τα διαγράψουμε.",
          },
          {
            heading: "Τα δικαιώματά σας",
            body: "Μπορείτε να ζητήσετε πρόσβαση, διόρθωση ή διαγραφή των δεδομένων σας, ή περιορισμό της χρήσης τους. Γράψτε στο {email}. Μπορείτε επίσης να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα.",
          },
        ],
      },
      cookies: {
        title: "Πολιτική cookies",
        description: "Ποια cookies χρησιμοποιεί σήμερα η Genesis και γιατί.",
        sections: [
          {
            heading: "Τι χρησιμοποιούμε σήμερα",
            body: "Αυτός ο ιστότοπος θέτει μόνο τα cookies που είναι απολύτως απαραίτητα για να εμφανίζονται οι σελίδες και για να θυμάται μια επιλογή που χρειάζεται ο ίδιος για να λειτουργεί.",
          },
          {
            heading: "Τι δεν χρησιμοποιούμε",
            body: "Δεν χρησιμοποιούμε cookies ανάλυσης, διαφημιστικά cookies ή ενσωματωμένους players τρίτων. Αν προσθέσουμε κάτι από αυτά αργότερα, η σελίδα αυτή θα το αναφέρει πριν ενεργοποιηθούν.",
          },
          {
            heading: "Το πρόγραμμα περιήγησής σας",
            body: "Μπορείτε να αποκλείσετε ή να διαγράψετε τα cookies από το πρόγραμμα περιήγησής σας. Τα απολύτως απαραίτητα cookies χρειάζονται για να φορτώνει σωστά ο ιστότοπος.",
          },
        ],
      },
    },
    workPage: {
      breadcrumb: "Έργα",
      title: "Websites, eshops και booking sites — live και σε λειτουργία.",
      titleLines: ["Websites, eshops και booking", "sites — live και σε λειτουργία."],
      subtitle: "Sites που φτιάξαμε για πραγματικές επιχειρήσεις — όλα είναι live και σε χρήση σήμερα.",
      metaTitle: "Έργα: websites, eshops & booking",
      metaDescription:
        "Sites που φτιάξαμε για πραγματικές επιχειρήσεις — όλα είναι live και σε χρήση σήμερα.",
      viewProject: "Δείτε το έργο",
      liveDivider: "Έργα σε λειτουργία",
      upcomingDivider: "Επερχόμενα έργα",
      comingSoon: "Σύντομα",
      pagesLabel: "Σελίδες έργων",
      previousPage: "Προηγούμενη σελίδα",
      nextPage: "Επόμενη σελίδα",
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
      allWork: "Όλα τα έργα",
      nextProject: "Επόμενο έργο",
    },
    servicesPage: {
      titleLines: [
        [{ text: "Το προϊόν σας, από την ιδέα" }],
        [{ text: "στην πραγματικότητα.", accent: true }],
      ],
      subtitle:
        "Ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί, και websites & eshops — όλα σε ένα μέρος.",
      metaTitle: "Υπηρεσίες: εφαρμογές, AI agents & websites",
      metaDescription:
        "Custom ανάπτυξη εφαρμογών, AI agents, αυτοματισμοί, websites και eshops για startups και μικρές επιχειρήσεις. Έδρα στην Αθήνα, δουλεύουμε παντού.",
      divider: "Υπηρεσίες",
      includedLabel: "Τι περιλαμβάνει",
      cta: "Κλείστε μια συνάντηση γνωριμίας",
      proof: "Δείτε σχετικά έργα",
      closingHeading: "Δεν ξέρετε τι χρειάζεστε;",
      closingSubtext:
        "Μια δωρεάν 30λεπτη συζήτηση ορίζει το σωστό σημείο εκκίνησης — και κάθε project παίρνει γραπτή προσφορά με scope, χρονοδιάγραμμα και κόστος πριν ξεκινήσει οποιαδήποτε δουλειά.",
      closingCta: "Ας μιλήσουμε",
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
          proof: true,
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
