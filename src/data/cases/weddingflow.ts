import { asset, feature, L } from "@/data/caseHelpers";
import type {
  Project,
  Slide,
  WeddingflowCarouselStep,
  WeddingflowSide,
  WeddingflowTag,
} from "@/data/projectTypes";

const root = "/projects/weddingflow";
const enPath = (file: string) => `${root}/en/${file}`;
const elPath = (file: string) => `${root}/el/${file}`;
const img = (file: string) => asset(enPath(file), elPath(file));

function slide(
  file: string,
  title: [string, string],
  text: [string, string],
  alt: [string, string],
): Slide {
  return {
    image: img(file),
    title: L(title[0], title[1]),
    text: L(text[0], text[1]),
    alt: L(alt[0], alt[1]),
  };
}

function step(
  file: string,
  label: [string, string],
  caption: [string, string],
  alt: [string, string],
): WeddingflowCarouselStep {
  return {
    image: img(file),
    label: L(label[0], label[1]),
    caption: L(caption[0], caption[1]),
    alt: L(alt[0], alt[1]),
  };
}

function tags(items: Array<[WeddingflowTag["icon"], string, string]>): WeddingflowTag[] {
  return items.map(([icon, en, el]) => ({ icon, label: L(en, el) }));
}

const coupleSteps: WeddingflowCarouselStep[] = [
  step(
    "couple-onboarding-1.jpg",
    ["Names", "Ονόματα"],
    [
      "Names first — from then on, everything speaks to the couple by name.",
      "Πρώτα τα ονόματα — από εκεί και πέρα όλα μιλούν στο ζευγάρι με το όνομά του.",
    ],
    ["Weddingflow couple onboarding, names", "Weddingflow onboarding ζευγαριού, ονόματα"],
  ),
  step(
    "couple-onboarding-2.jpg",
    ["Wedding date", "Ημερομηνία γάμου"],
    [
      "The date — or skip it if it isn't set yet.",
      "Η ημερομηνία — ή παράλειψη, αν δεν έχει οριστεί ακόμα.",
    ],
    ["Weddingflow couple onboarding, wedding date", "Weddingflow onboarding ζευγαριού, ημερομηνία"],
  ),
  step(
    "couple-onboarding-3.jpg",
    ["Location", "Τοποθεσία"],
    [
      "Where: anywhere in Greece, with suggestions as they type.",
      "Πού: οποιοδήποτε μέρος στην Ελλάδα, με προτάσεις καθώς πληκτρολογούν.",
    ],
    ["Weddingflow couple onboarding, location", "Weddingflow onboarding ζευγαριού, τοποθεσία"],
  ),
  step(
    "couple-onboarding-4.jpg",
    ["Guests, budget & style", "Καλεσμένοι, budget & στυλ"],
    [
      "Guests, budget and style — the details that shape every search.",
      "Καλεσμένοι, budget και στυλ — οι λεπτομέρειες που διαμορφώνουν κάθε αναζήτηση.",
    ],
    ["Weddingflow couple onboarding, guests and budget", "Weddingflow onboarding ζευγαριού, καλεσμένοι"],
  ),
];

const venueSteps: WeddingflowCarouselStep[] = [
  step(
    "venue-onboarding-1.jpg",
    ["Venue type", "Τύπος χώρου"],
    [
      "Eight kinds of venue — from estates to seaside villas.",
      "Οκτώ είδη χώρων — από κτήματα ως παραθαλάσσιες βίλες.",
    ],
    ["Weddingflow venue onboarding, type", "Weddingflow onboarding χώρου, τύπος"],
  ),
  step(
    "venue-onboarding-2.jpg",
    ["Name, story & map", "Όνομα, ιστορία & χάρτης"],
    [
      "Name, style and the story couples will read — pinned on the map.",
      "Όνομα, στυλ και η ιστορία που θα διαβάσουν τα ζευγάρια — καρφιτσωμένη στον χάρτη.",
    ],
    ["Weddingflow venue onboarding, name and map", "Weddingflow onboarding χώρου, όνομα και χάρτης"],
  ),
  step(
    "venue-onboarding-3.jpg",
    ["Capacity", "Χωρητικότητα"],
    [
      "Indoor, outdoor or both, each with its own guest range.",
      "Εσωτερικός, εξωτερικός ή και τα δύο, ο καθένας με το δικό του εύρος καλεσμένων.",
    ],
    ["Weddingflow venue onboarding, capacity", "Weddingflow onboarding χώρου, χωρητικότητα"],
  ),
  step(
    "venue-onboarding-4.jpg",
    ["Amenities", "Παροχές"],
    [
      "Everything the venue offers, included and extra.",
      "Ό,τι προσφέρει ο χώρος, βασικά και έξτρα.",
    ],
    ["Weddingflow venue onboarding, amenities", "Weddingflow onboarding χώρου, παροχές"],
  ),
  step(
    "venue-onboarding-5.jpg",
    ["Pricing & deposit", "Τιμές & προκαταβολή"],
    [
      "A price from, the deposit, and what is included or extra.",
      "Τιμή από, η προκαταβολή, και τι περιλαμβάνεται ή χρεώνεται έξτρα.",
    ],
    ["Weddingflow venue onboarding, pricing", "Weddingflow onboarding χώρου, τιμές"],
  ),
  step(
    "venue-onboarding-6.jpg",
    ["Portfolio", "Πορτφόλιο"],
    [
      "Cover and a gallery of at least three photos, plus video.",
      "Cover και gallery με τουλάχιστον τρεις φωτογραφίες, μαζί με video.",
    ],
    ["Weddingflow venue onboarding, portfolio", "Weddingflow onboarding χώρου, πορτφόλιο"],
  ),
  step(
    "venue-onboarding-7.jpg",
    ["Contact", "Επικοινωνία"],
    [
      "Email, mobile and social — how couples reach the venue.",
      "Email, κινητό και social — πώς φτάνουν τα ζευγάρια στον χώρο.",
    ],
    ["Weddingflow venue onboarding, contact", "Weddingflow onboarding χώρου, επικοινωνία"],
  ),
];

const proSteps: WeddingflowCarouselStep[] = [
  step(
    "pro-onboarding-1.jpg",
    ["Category", "Κατηγορία"],
    [
      "One main category, each with its own card and photo.",
      "Μία κύρια κατηγορία, η καθεμία με τη δική της κάρτα και φωτογραφία.",
    ],
    ["Weddingflow pro onboarding, category", "Weddingflow onboarding επαγγελματία, κατηγορία"],
  ),
  step(
    "pro-onboarding-2.jpg",
    ["Name & story", "Όνομα & ιστορία"],
    [
      "Business name, areas, services and a short story — with a profile photo.",
      "Όνομα επιχείρησης, περιοχές, υπηρεσίες και μια σύντομη ιστορία — με φωτογραφία προφίλ.",
    ],
    ["Weddingflow pro onboarding, name and story", "Weddingflow onboarding επαγγελματία, όνομα"],
  ),
  step(
    "pro-onboarding-3.jpg",
    ["Amenities", "Παροχές"],
    [
      "Every service and extra, grouped by service — photo, video and more.",
      "Κάθε υπηρεσία και έξτρα, ομαδοποιημένα ανά υπηρεσία — φωτογραφία, βίντεο και άλλα.",
    ],
    ["Weddingflow pro onboarding, amenities", "Weddingflow onboarding επαγγελματία, παροχές"],
  ),
  step(
    "pro-onboarding-4.jpg",
    ["Pricing & deposit", "Τιμές & προκαταβολή"],
    [
      "A price from, the deposit, and what is included or extra — per service.",
      "Τιμή από, η προκαταβολή, και τι περιλαμβάνεται ή χρεώνεται έξτρα — ανά υπηρεσία.",
    ],
    ["Weddingflow pro onboarding, pricing", "Weddingflow onboarding επαγγελματία, τιμές"],
  ),
  step(
    "pro-onboarding-5.jpg",
    ["Portfolio", "Πορτφόλιο"],
    [
      "Cover, a gallery per service and video links.",
      "Cover, gallery ανά υπηρεσία και τα links των video.",
    ],
    ["Weddingflow pro onboarding, portfolio", "Weddingflow onboarding επαγγελματία, πορτφόλιο"],
  ),
  step(
    "pro-onboarding-6.jpg",
    ["Contact", "Επικοινωνία"],
    [
      "Email, mobile and social — how couples reach the pro.",
      "Email, κινητό και social — πώς φτάνουν τα ζευγάρια στον επαγγελματία.",
    ],
    ["Weddingflow pro onboarding, contact", "Weddingflow onboarding επαγγελματία, επικοινωνία"],
  ),
];

const sides: WeddingflowSide[] = [
  {
    id: "couples",
    pill: L("Couples", "Ζευγάρια"),
    heading: L("From \"yes\" to the seating plan.", "Από το «ναι» ως το πλάνο τραπεζιών."),
    lead: L(
      "Four questions and they're in. From there, one dashboard carries the whole wedding — every request, every reply, every guest, every table.",
      "Τέσσερις ερωτήσεις και είναι μέσα. Από εκεί, ένα dashboard κουβαλά όλο τον γάμο — κάθε αίτημα, κάθε απάντηση, κάθε καλεσμένο, κάθε τραπέζι.",
    ),
    onboardingLabel: L("Onboarding · 4 steps", "Onboarding · 4 βήματα"),
    steps: coupleSteps,
    dashboardLabel: L("Dashboard · 8 sections", "Dashboard · 8 ενότητες"),
    dashboard: {
      image: img("couple-overview.jpg"),
      alt: L("Weddingflow couple dashboard", "Dashboard ζευγαριού στο Weddingflow"),
      title: L("Dashboard.", "Dashboard."),
      text: L(
        "A countdown to the day, the next appointment and every request at a glance.",
        "Αντίστροφη μέτρηση ως τη μέρα, το επόμενο ραντεβού και κάθε αίτημα με μια ματιά.",
      ),
    },
    tags: tags([
      ["overview", "Overview", "Επισκόπηση"],
      ["requests", "Requests", "Αιτήματα"],
      ["messages", "Messages", "Μηνύματα"],
      ["calendar", "Calendar", "Ημερολόγιο"],
      ["saved", "Saved", "Αποθηκευμένα"],
      ["guests", "Guest list", "Λίστα καλεσμένων"],
      ["seating", "Seating plan", "Πλάνο τραπεζιών"],
      ["reviews", "Reviews", "Αξιολογήσεις"],
    ]),
  },
  {
    id: "venues",
    flipped: true,
    pill: L("Venues", "Χώροι"),
    heading: L("From listing to bookings.", "Από την καταχώριση στις κρατήσεις."),
    lead: L(
      "Seven steps turn a venue into a listing couples can actually compare — capacity, prices, dates. Requests land in one inbox; bookings land on the calendar.",
      "Επτά βήματα κάνουν έναν χώρο καταχώριση που τα ζευγάρια μπορούν πραγματικά να συγκρίνουν — χωρητικότητα, τιμές, ημερομηνίες. Τα αιτήματα έρχονται σε ένα inbox· οι κρατήσεις μπαίνουν στο ημερολόγιο.",
    ),
    onboardingLabel: L("Onboarding · 7 steps", "Onboarding · 7 βήματα"),
    steps: venueSteps,
    dashboardLabel: L("Dashboard · 7 sections", "Dashboard · 7 ενότητες"),
    dashboard: {
      image: img("venue-overview.jpg"),
      alt: L("Weddingflow venue dashboard", "Dashboard χώρου στο Weddingflow"),
      title: L("Dashboard.", "Dashboard."),
      text: L(
        "Pending requests, the next booking and unread messages — the venue's day at a glance.",
        "Εκκρεμή αιτήματα, η επόμενη κράτηση και τα αδιάβαστα μηνύματα — η μέρα του χώρου με μια ματιά.",
      ),
    },
    tags: tags([
      ["overview", "Overview", "Επισκόπηση"],
      ["requests", "Requests", "Αιτήματα"],
      ["calendar", "Calendar", "Ημερολόγιο"],
      ["messages", "Messages", "Μηνύματα"],
      ["halls", "Halls & tables", "Αίθουσες & τραπέζια"],
      ["profile", "Profile", "Προφίλ"],
      ["reviews", "Reviews", "Αξιολογήσεις"],
    ]),
  },
  {
    id: "pros",
    pill: L("Wedding pros", "Επαγγελματίες γάμου"),
    heading: L("Every craft, in one place.", "Όλες οι ειδικότητες, σε ένα μέρος."),
    lead: L(
      "From photographers to dance lessons — nineteen categories, each with its own services, extras and pricing, so couples compare like with like.",
      "Από φωτογράφους ως μαθήματα χορού — δεκαεννέα κατηγορίες, η καθεμία με τις δικές της υπηρεσίες, έξτρα και τιμές, ώστε τα ζευγάρια να συγκρίνουν ίδια με ίδια.",
    ),
    onboardingLabel: L("Onboarding", "Onboarding"),
    steps: proSteps,
    dashboardLabel: L("Dashboard · 6 sections", "Dashboard · 6 ενότητες"),
    dashboard: {
      image: img("pro-overview.jpg"),
      alt: L("Weddingflow pro dashboard", "Dashboard επαγγελματία στο Weddingflow"),
      title: L("Dashboard.", "Dashboard."),
      text: L(
        "Pending requests, the next appointment and unread messages — the studio's day at a glance.",
        "Εκκρεμή αιτήματα, το επόμενο ραντεβού και τα αδιάβαστα μηνύματα — η μέρα του studio με μια ματιά.",
      ),
    },
    tags: tags([
      ["overview", "Overview", "Επισκόπηση"],
      ["requests", "Requests", "Αιτήματα"],
      ["calendar", "Calendar", "Ημερολόγιο"],
      ["messages", "Messages", "Μηνύματα"],
      ["profile", "Profile", "Προφίλ"],
      ["reviews", "Reviews", "Αξιολογήσεις"],
    ]),
  },
];

const visitorSteps: WeddingflowCarouselStep[] = [
  step(
    "visit-home.jpg",
    ["Homepage", "Αρχική"],
    [
      "Venues and every category of pros, one search away.",
      "Χώροι και κάθε κατηγορία επαγγελματιών, μία αναζήτηση μακριά.",
    ],
    ["Weddingflow homepage", "Αρχική του Weddingflow"],
  ),
  step(
    "visit-venue-search.jpg",
    ["Venue search", "Αναζήτηση χώρων"],
    [
      "Filters for region, type, style, date, guests and budget.",
      "Φίλτρα για περιοχή, τύπο, στυλ, ημερομηνία, καλεσμένους και budget.",
    ],
    ["Weddingflow venue search", "Αναζήτηση χώρων στο Weddingflow"],
  ),
  step(
    "visit-venue-page.jpg",
    ["Venue page", "Σελίδα χώρου"],
    [
      "Gallery and video, capacity, amenities, seasonal prices and the deposit — on one page.",
      "Gallery και video, χωρητικότητα, παροχές, εποχικές τιμές και η προκαταβολή — σε μία σελίδα.",
    ],
    ["Weddingflow venue page", "Σελίδα χώρου στο Weddingflow"],
  ),
  step(
    "visit-pros-category.jpg",
    ["Pros by category", "Επαγγελματίες ανά κατηγορία"],
    [
      "Every craft in its own place, from photography to dance lessons.",
      "Κάθε ειδικότητα στη θέση της, από τη φωτογραφία ως τα μαθήματα χορού.",
    ],
    ["Weddingflow professionals by category", "Επαγγελματίες ανά κατηγορία στο Weddingflow"],
  ),
  step(
    "visit-pro-page.jpg",
    ["Pro page", "Σελίδα επαγγελματία"],
    [
      "Services, extras and a price from — before anyone has to ask.",
      "Υπηρεσίες, έξτρα και τιμή από — πριν χρειαστεί να ρωτήσει κανείς.",
    ],
    ["Weddingflow professional page", "Σελίδα επαγγελματία στο Weddingflow"],
  ),
];

export const weddingflow: Project = {
  slug: "weddingflow",
  kind: "upcoming",
  name: L("Weddingflow", "Weddingflow"),
  type: L("Marketplace", "Marketplace"),
  industry: L("Weddings", "Γάμοι"),
  description: L(
    "A three-sided wedding marketplace — from the first venue search to the seating plan.",
    "Ένα marketplace γάμου τριών πλευρών — από την πρώτη αναζήτηση χώρου ως το πλάνο τραπεζιών.",
  ),
  stage: "#0B3B30",
  domain: "weddingflow",
  desktopImage: enPath("home-desktop.jpg"),
  mobileImage: enPath("home-mobile.jpg"),
  image: img("home-desktop.jpg"),
  showcase: {
    desktop: img("home-desktop.jpg"),
    mobile: img("home-mobile.jpg"),
    desktopAlt: L("Weddingflow homepage on desktop", "Αρχική του Weddingflow σε desktop"),
    mobileAlt: L("Weddingflow homepage on mobile", "Αρχική του Weddingflow σε κινητό"),
  },
  intro: L(
    "A three-sided wedding marketplace — designed and built in-house, from the first venue search to the seating plan.",
    "Ένα marketplace γάμου τριών πλευρών — σχεδιασμένο και χτισμένο από εμάς, από την πρώτη αναζήτηση χώρου ως το πλάνο τραπεζιών.",
  ),
  meta: {
    title: L("Weddingflow: Wedding Marketplace | Genesis", "Weddingflow: marketplace γάμου | Genesis"),
    description: L(
      "A three-sided wedding marketplace for couples, venues and wedding pros — designed and built in-house, launching in June 2027.",
      "Ένα marketplace γάμου τριών πλευρών για ζευγάρια, χώρους και επαγγελματίες — σχεδιασμένο και χτισμένο από εμάς, με κυκλοφορία τον Ιούνιο 2027.",
    ),
    share: L("Wedding marketplace", "Marketplace γάμου"),
  },
  client: L("Weddingflow · a Genesis product", "Weddingflow · προϊόν της Genesis"),
  services: L("Strategy · Design · Development", "Στρατηγική · Σχεδιασμός · Ανάπτυξη"),
  year: "2026",
  storyTitle: L("Your wedding, from one place.", "Ο γάμος σας, από ένα σημείο."),
  storySubtitle: L(
    "Venues, wedding pros and planning tools — for couples and for the people who make the day.",
    "Χώροι, επαγγελματίες γάμου και εργαλεία οργάνωσης — για τα ζευγάρια και για όσους κάνουν τη μέρα πραγματικότητα.",
  ),
  brief: L(
    "Planning a wedding today means dozens of sites and endless messages.",
    "Σήμερα, ένας γάμος οργανώνεται σε δεκάδες sites και ατελείωτα μηνύματα.",
  ),
  built: [
    feature(
      "search",
      ["Venue search", "Αναζήτηση χώρων"],
      [
        "Venues across Greece, filtered by region, type, style, guests and budget.",
        "Χώροι σε όλη την Ελλάδα, με φίλτρα για περιοχή, τύπο, στυλ, καλεσμένους και προϋπολογισμό.",
      ],
    ),
  ],
  weddingflow: {
    productBadge: L("A GENESIS PRODUCT", "ΕΝΑ ΠΡΟΪΟΝ ΤΗΣ GENESIS"),
    countdownLabel: L("Launching June 2027", "Κυκλοφορεί τον Ιούνιο 2027"),
    countdownUnits: [
      L("Days", "Μέρες"),
      L("Hours", "Ώρες"),
      L("Mins", "Λεπτά"),
      L("Secs", "Δευτ."),
    ],
    notifyLink: L("Get notified at launch", "Ενημερώστε με στο launch"),
    launchAt: "2027-06-01T10:00:00+03:00",
    stats: [
      { value: 3, label: L("user types", "τύποι χρηστών") },
      { value: 3, label: L("dashboards", "dashboards") },
      { value: 19, label: L("pro categories", "κατηγορίες επαγγελματιών") },
      { value: 50, label: L("screens", "οθόνες") },
      { value: 3, label: L("engineers", "μηχανικοί") },
    ],
    problem: {
      eyebrow: L("The problem", "Το πρόβλημα"),
      title: L(
        "Planning a wedding today means dozens of sites and endless messages.",
        "Σήμερα, ένας γάμος οργανώνεται σε δεκάδες sites και ατελείωτα μηνύματα.",
      ),
      cards: [L("Couples today", "Ζευγάρια σήμερα"), L("Venues & pros today", "Χώροι & επαγγελματίες σήμερα")],
      cardBodies: [
        L(
          "They search across websites, Instagram and WhatsApp, ask for prices by email and wait for replies that are slow to come.",
          "Ψάχνουν σε sites, Instagram και WhatsApp, ζητούν τιμές με email και περιμένουν απαντήσεις που αργούν να έρθουν.",
        ),
        L(
          "They answer the same questions again and again, with requests and dates scattered across inboxes.",
          "Απαντούν ξανά και ξανά στις ίδιες ερωτήσεις, με αιτήματα και ημερομηνίες σκόρπια σε inboxes.",
        ),
      ],
      solutionLabel: L("Our solution", "Η λύση μας"),
      solution: L(
        "One platform for both sides — real availability, real prices, real booking.",
        "Μία πλατφόρμα και για τις δύο πλευρές — πραγματική διαθεσιμότητα, πραγματικές τιμές, πραγματική κράτηση.",
      ),
    },
    flow: {
      eyebrow: L("How it connects", "Πώς συνδέονται"),
      title: L("From the first search to the last table.", "Από την πρώτη αναζήτηση ως το τελευταίο τραπέζι."),
      lead: L(
        "One request travels through every side of the platform — nobody leaves it to send an email.",
        "Ένα αίτημα περνά από κάθε πλευρά της πλατφόρμας — κανείς δεν χρειάζεται να βγει από αυτήν για να στείλει email.",
      ),
      steps: [
        {
          title: L("Find", "Αναζήτηση"),
          who: L("Couple", "Ζευγάρι"),
          text: L(
            "Venues and pros with filters, saved favourites and comparison.",
            "Χώροι και επαγγελματίες με φίλτρα, αποθήκευση στα αγαπημένα και σύγκριση.",
          ),
        },
        {
          title: L("Ask", "Αίτημα"),
          who: L("Couple", "Ζευγάρι"),
          text: L(
            "A request with the date, the guest count and a short note.",
            "Αίτημα με την ημερομηνία, τους καλεσμένους και ένα σύντομο σημείωμα.",
          ),
        },
        {
          title: L("Talk", "Συζήτηση"),
          who: L("Both", "Και οι δύο"),
          text: L(
            "Both sides talk in Messages and agree on the details.",
            "Οι δύο πλευρές συζητούν στα Μηνύματα και συμφωνούν στις λεπτομέρειες.",
          ),
        },
        {
          title: L("Book", "Κράτηση"),
          who: L("Both", "Και οι δύο"),
          text: L(
            "The venue or pro accepts; the deposit locks the date.",
            "Ο χώρος ή ο επαγγελματίας αποδέχεται· η προκαταβολή κλειδώνει την ημερομηνία.",
          ),
        },
        {
          title: L("Plan", "Οργάνωση"),
          who: L("Couple · Venue", "Ζευγάρι · Χώρος"),
          text: L(
            "Guests are seated on the venue's own tables.",
            "Οι καλεσμένοι μπαίνουν στα τραπέζια του ίδιου του χώρου.",
          ),
        },
      ],
      pair: [
        slide(
          "connect-messages.jpg",
          ["3 · The pro answers in Messages", "3 · Ο επαγγελματίας απαντά στα Μηνύματα"],
          [
            "One conversation per couple, with the wedding date always in view.",
            "Μία συζήτηση ανά ζευγάρι, με την ημερομηνία του γάμου πάντα μπροστά.",
          ],
          ["Weddingflow Messages", "Μηνύματα στο Weddingflow"],
        ),
        slide(
          "connect-request.jpg",
          ["4 · The couple sees every answer", "4 · Το ζευγάρι βλέπει κάθε απάντηση"],
          [
            "Each request with its status, and the deposit once accepted.",
            "Κάθε αίτημα με την κατάστασή του και την προκαταβολή, μόλις γίνει αποδοχή.",
          ],
          ["Weddingflow couple requests", "Αιτήματα ζευγαριού στο Weddingflow"],
        ),
      ],
    },
    sides: {
      eyebrow: L("Three sides, one platform", "Τρεις πλευρές, μία πλατφόρμα"),
      title: L("Three sides, one platform.", "Τρεις πλευρές, μία πλατφόρμα."),
      lead: L(
        "Couples, venues and wedding professionals sign up the same way. Each then gets an onboarding and a dashboard built for what they do — on one shared design system.",
        "Ζευγάρια, χώροι και επαγγελματίες γάμου εγγράφονται με τον ίδιο τρόπο. Ο καθένας περνά μετά από onboarding και dashboard φτιαγμένα για ό,τι κάνει — πάνω σε ένα κοινό design system.",
      ),
      items: sides,
    },
    visitors: {
      eyebrow: L("For every visitor", "Για κάθε επισκέπτη"),
      title: L(
        "Real availability, real prices — before anyone signs up.",
        "Πραγματική διαθεσιμότητα, πραγματικές τιμές — πριν από την εγγραφή.",
      ),
      lead: L(
        "Every venue and professional can be searched, compared and saved without an account.",
        "Κάθε χώρος και επαγγελματίας μπορεί να αναζητηθεί, να συγκριθεί και να αποθηκευτεί χωρίς λογαριασμό.",
      ),
      listLabel: L("A visitor's path", "Η διαδρομή ενός επισκέπτη"),
      steps: visitorSteps,
      phones: [img("home-mobile.jpg"), img("mobile-venue.jpg"), img("mobile-vendors.jpg")],
      phoneAlts: [
        L("Weddingflow homepage on a phone", "Αρχική του Weddingflow σε κινητό"),
        L("Weddingflow venue on a phone", "Χώρος του Weddingflow σε κινητό"),
        L("Weddingflow professionals on a phone", "Επαγγελματίες του Weddingflow σε κινητό"),
      ],
      phonesTitle: L("Mobile", "Κινητό"),
      phonesText: L(
        "From the homepage to a venue or a category of pros — the request button always in reach.",
        "Από την αρχική σε έναν χώρο ή σε μια κατηγορία επαγγελματιών — με το κουμπί αιτήματος πάντα κοντά.",
      ),
    },
    howWeWork: {
      eyebrow: L("Behind the build", "Πίσω από την κατασκευή"),
      title: L("How we work.", "Πώς δουλεύουμε."),
      items: [
        {
          title: L("Planned before it's built", "Σχέδιο πριν από τον κώδικα"),
          text: L(
            "A product spec and user stories, split into releases — you always know what's next.",
            "Product spec και user stories, χωρισμένα σε releases — ξέρετε πάντα τι έρχεται μετά.",
          ),
        },
        {
          title: L("You see it before we build it", "Το βλέπετε πριν το χτίσουμε"),
          text: L(
            "Every screen is an interactive mockup you try and approve first.",
            "Κάθε οθόνη είναι interactive mockup που δοκιμάζετε και εγκρίνετε πρώτα.",
          ),
        },
        {
          title: L("Checked on every change", "Έλεγχος σε κάθε αλλαγή"),
          text: L(
            "Automated checks run before every release: accessibility, colour contrast, translations, layout and who can see which data.",
            "Αυτόματοι έλεγχοι τρέχουν πριν από κάθε release: προσβασιμότητα, αντίθεση χρωμάτων, μεταφράσεις, layout και ποιος βλέπει ποια δεδομένα.",
          ),
        },
        {
          title: L("Built on a modern stack", "Σύγχρονο stack"),
          tags: ["React", "TypeScript", "Tailwind", "Supabase (PostgreSQL)"],
        },
      ],
    },
    next: {
      eyebrow: L("What's next", "Τι ακολουθεί"),
      title: L("One release at a time.", "Μία έκδοση τη φορά."),
      cards: [
        {
          tag: L("Ready", "Έτοιμο"),
          tone: "ready",
          title: L("Venues, couples and dashboards", "Χώροι, ζευγάρια και dashboards"),
          text: L(
            "Sign-up and roles, couple and venue onboarding, venue search and pages, requests, guest list — and all three dashboards.",
            "Εγγραφή και ρόλοι, onboarding ζευγαριού και χώρου, αναζήτηση και σελίδες χώρων, αιτήματα, λίστα καλεσμένων — και τα τρία dashboards.",
          ),
        },
        {
          tag: L("In progress", "Σε εξέλιξη"),
          tone: "progress",
          title: L("Wedding pros and seating", "Επαγγελματίες και πλάνο τραπεζιών"),
          text: L(
            "Onboarding for every category, pro pages, pricing and reviews — and seating on the venue's real hall.",
            "Onboarding για κάθε κατηγορία, σελίδες επαγγελματιών, τιμές και αξιολογήσεις — και πλάνο τραπεζιών πάνω στην πραγματική αίθουσα του χώρου.",
          ),
        },
        {
          tag: L("Next", "Επόμενο"),
          tone: "next",
          title: L("Payments and planning", "Πληρωμές και οργάνωση"),
          text: L(
            "Online deposits, email notifications and a task list with a timeline.",
            "Online προκαταβολές, ειδοποιήσεις με email και λίστα εργασιών με χρονοδιάγραμμα.",
          ),
        },
      ],
    },
    waitlist: {
      eyebrow: L("Waitlist", "Λίστα αναμονής"),
      title: L("Be the first to know when it launches.", "Μάθετε πρώτοι πότε κυκλοφορεί."),
      text: L(
        "Couple, venue or wedding pro — leave your email and we'll let you know as soon as Weddingflow opens.",
        "Ζευγάρι, χώρος ή επαγγελματίας — αφήστε το email σας και θα σας ενημερώσουμε μόλις ανοίξει το Weddingflow.",
      ),
    },
    cta: {
      title: L(
        "Building a marketplace or a booking platform?",
        "Χτίζετε marketplace ή πλατφόρμα κρατήσεων;",
      ),
      text: L(
        "We've already solved the hard parts — roles, requests, availability, bookings. Tell us what you want to build; we reply within one business day.",
        "Τα δύσκολα τα έχουμε ήδη λύσει — ρόλους, αιτήματα, διαθεσιμότητα, κρατήσεις. Πείτε μας τι θέλετε να φτιάξετε· απαντάμε μέσα σε μία εργάσιμη.",
      ),
      button: L("Let's talk →", "Ας μιλήσουμε →"),
    },
  },
};
