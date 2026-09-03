export const site = {
  name: "Genesis",
  tagline: "Athens tech studio",
  email: "hello@genesis.studio",
  location: "Athens, Greece",
  url: "https://genesis.studio",
};

export const services = [
  {
    title: "Product / Web Apps",
    description: "Design to launch, built fast.",
    detail:
      "From first wireframe to production deploy — MVPs and full products that ship on a startup timeline.",
    icon: "app" as const,
  },
  {
    title: "Websites",
    description: "Fast, clean, built to convert.",
    detail:
      "Marketing sites and brand surfaces that load quickly, read clearly, and turn visitors into leads.",
    icon: "web" as const,
  },
  {
    title: "Eshops",
    description: "Ready to sell from day one.",
    detail:
      "Storefronts with checkout, inventory, and SEO baked in — so you can take orders without a tech team.",
    icon: "shop" as const,
  },
];

export const projects = [
  {
    slug: "fintra",
    title: "Fintra",
    category: "Expense Tracking App",
    summary:
      "A local startup needed a mobile-first expense tracker MVP to pitch to investors within 6 weeks. We designed and built a full React Native app with real-time sync, delivered on time and used to close their seed round.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    href: "#",
    accent: "#0B5C4D",
  },
  {
    slug: "levante-goods",
    title: "Levante Goods",
    category: "Eshop",
    summary:
      "A small artisan brand needed an online store to replace manual Instagram sales. We built a fast, SEO-optimized eshop with custom checkout, cutting order processing time by half.",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    href: "#",
    accent: "#1A4A5C",
  },
  {
    slug: "orbit",
    title: "Orbit",
    category: "Internal Tools Dashboard",
    summary:
      "A growing agency needed a custom admin dashboard to replace spreadsheets for tracking clients and invoices. We delivered a lightweight internal tool in 3 weeks, now used daily by their whole team.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    href: "#",
    accent: "#244038",
  },
];

export const team = [
  {
    name: "Despoina Ntolka",
    role: "Electrical Engineer",
    bio: "Turns ideas into working systems, one clean commit at a time. Believes good code should read like a good sentence.",
    initials: "DN",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Pantelis Karamailis",
    role: "Electrical Engineer",
    bio: "Obsessed with performance and pixel-perfect detail. If it's slow, he'll fix it before you notice.",
    initials: "PK",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Anastasis Pateritsas",
    role: "Electrical Engineer",
    bio: "The problem-solver of the team — give him a messy spec and he'll come back with a plan. Coffee-fueled, deadline-proof.",
    initials: "AP",
    github: "https://github.com/TasosPateritsas",
    linkedin: "https://linkedin.com/",
  },
];
