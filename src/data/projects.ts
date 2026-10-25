import type { Locale } from "@/data/content";

export type LocalizedText = Record<Locale, string>;

export type ProjectScreen = {
  image: string;
  alt: LocalizedText;
  caption: LocalizedText;
  url?: string;
  wide?: boolean;
  phone?: boolean;
};

export type BuiltItem = {
  icon: string;
  title: LocalizedText;
  text: LocalizedText;
};

export type Project = {
  slug: string;
  name: string;
  type: LocalizedText;
  industry: LocalizedText;
  description: LocalizedText;
  stage: string;
  domain: string;
  liveUrl: string;
  desktopImage: string;
  mobileImage: string;
  intro: LocalizedText;
  client: string;
  services: LocalizedText;
  stack: string;
  year: string;
  storyTitle: LocalizedText;
  storySubtitle: LocalizedText;
  brief: LocalizedText;
  built: BuiltItem[];
  screens?: ProjectScreen[];
};

const delivered = {
  en: "Design · Development · Launch",
  el: "Σχεδιασμός · Ανάπτυξη · Launch",
};

export const projects: Project[] = [
  {
    slug: "salty-boat-trips",
    name: "Salty Boat Trips",
    type: { en: "Booking site", el: "Booking site" },
    industry: { en: "Tourism", el: "Τουρισμός" },
    description: {
      en: "Premium charter site for private RIB trips, day cruises and transfers in Mykonos, with fleet pages and enquiry-led booking.",
      el: "Premium site για ιδιωτικές εκδρομές με RIB, day cruises και transfers στη Μύκονο, με σελίδες στόλου και booking μέσω αιτήματος.",
    },
    stage: "#23413D",
    domain: "saltyboattrips.com",
    liveUrl: "https://www.saltyboattrips.com/",
    desktopImage: "/projects/salty-boat-trips-desktop.jpg",
    mobileImage: "/projects/salty-boat-trips-mobile.jpg",
    intro: {
      en: "A premium charter site for private RIB trips, day cruises and boat transfers in Mykonos — built to turn browsing into booking requests.",
      el: "Premium site για ιδιωτικές εκδρομές με RIB, day cruises και boat transfers στη Μύκονο — φτιαγμένο ώστε η περιήγηση να γίνεται αίτημα κράτησης.",
    },
    client: "Salty Boat Trips, Mykonos",
    services: delivered,
    stack: "Next.js",
    year: "2025",
    storyTitle: {
      en: "From first look to booking.",
      el: "Από την πρώτη ματιά στην κράτηση.",
    },
    storySubtitle: {
      en: "A premium charter site for Mykonos, built around enquiries.",
      el: "Premium charter site για τη Μύκονο, χτισμένο γύρω από τα αιτήματα κράτησης.",
    },
    brief: {
      en: "Salty Boat Trips runs private RIB trips, day cruises and boat transfers in Mykonos. They needed a premium charter site that presents the fleet and routes at their best — and turns that interest into booking enquiries, by form or straight on WhatsApp.",
      el: "Η Salty Boat Trips κάνει ιδιωτικές εκδρομές με RIB, day cruises και boat transfers στη Μύκονο. Χρειαζόταν ένα premium charter site που να δείχνει τον στόλο και τις διαδρομές στα καλύτερά τους — και να μετατρέπει το ενδιαφέρον σε αιτήματα κράτησης, μέσω φόρμας ή κατευθείαν στο WhatsApp.",
    },
    built: [
      {
        icon: "sailboat",
        title: { en: "Day cruise pages", el: "Σελίδες day cruise" },
        text: {
          en: "Eight routes from Mykonos, from Delos and Rhenia to Paros, Milos and Santorini.",
          el: "Οκτώ διαδρομές από τη Μύκονο, από Δήλο και Ρήνεια μέχρι Πάρο, Μήλο και Σαντορίνη.",
        },
      },
      {
        icon: "route",
        title: { en: "Boat transfers", el: "Boat transfers" },
        text: {
          en: "Transfers around Mykonos, or to another island.",
          el: "Transfers γύρω από τη Μύκονο ή προς άλλο νησί.",
        },
      },
      {
        icon: "layout-grid",
        title: { en: "Fleet pages", el: "Σελίδες στόλου" },
        text: {
          en: "A page for every boat, with guests, engines and length at a glance.",
          el: "Σελίδα για κάθε σκάφος, με επιβάτες, μηχανές και μήκος με μια ματιά.",
        },
      },
      {
        icon: "message-circle",
        title: { en: "Enquiry flow", el: "Αίτημα κράτησης" },
        text: {
          en: "Pick a service and send a request, or jump straight to WhatsApp.",
          el: "Διαλέγετε υπηρεσία και στέλνετε αίτημα ή πάτε κατευθείαν στο WhatsApp.",
        },
      },
      {
        icon: "search",
        title: { en: "FAQ", el: "FAQ" },
        text: {
          en: "Answers to the questions guests ask before booking a private boat trip.",
          el: "Απαντήσεις στις ερωτήσεις που κάνουν οι επισκέπτες πριν κλείσουν ιδιωτική εκδρομή.",
        },
      },
      {
        icon: "star",
        title: { en: "Guest reviews", el: "Κριτικές επισκεπτών" },
        text: {
          en: "Real reviews from past guests, right on the homepage.",
          el: "Πραγματικές κριτικές από επισκέπτες, κατευθείαν στην αρχική.",
        },
      },
    ],
    screens: [
      {
        image: "/projects/salty-boat-trips/screen-1.jpg",
        url: "saltyboattrips.com/fleet",
        wide: true,
        alt: {
          en: "Salty Boat Trips fleet page hero",
          el: "Hero της σελίδας στόλου της Salty Boat Trips",
        },
        caption: {
          en: "Fleet page — full-bleed hero.",
          el: "Σελίδα στόλου — hero σε όλο το πλάτος.",
        },
      },
      {
        image: "/projects/salty-boat-trips/screen-2.jpg",
        alt: {
          en: "Fleet cards with guests, year, engines and length",
          el: "Κάρτες στόλου με επιβάτες, χρονιά, μηχανές και μήκος",
        },
        caption: {
          en: "Every boat with guests, year, engines and length.",
          el: "Κάθε σκάφος με επιβάτες, χρονιά, μηχανές και μήκος.",
        },
      },
      {
        image: "/projects/salty-boat-trips/screen-3.jpg",
        alt: {
          en: "Day trips carousel on the Salty Boat Trips homepage",
          el: "Carousel με day trips στην αρχική της Salty Boat Trips",
        },
        caption: {
          en: "Day trips carousel and transfer destinations.",
          el: "Carousel με day trips και προορισμοί για transfers.",
        },
      },
      {
        image: "/projects/salty-boat-trips/screen-4.jpg",
        alt: {
          en: "Enquiry form to choose a service or message on WhatsApp",
          el: "Φόρμα αιτήματος για επιλογή υπηρεσίας ή μήνυμα στο WhatsApp",
        },
        caption: {
          en: "Enquiry: choose a service, or message on WhatsApp.",
          el: "Αίτημα: διαλέγετε υπηρεσία ή στέλνετε μήνυμα στο WhatsApp.",
        },
      },
      {
        image: "/projects/salty-boat-trips/screen-5.jpg",
        phone: true,
        alt: {
          en: "Salty Boat Trips homepage on a phone",
          el: "Η αρχική της Salty Boat Trips σε κινητό",
        },
        caption: {
          en: "Designed mobile-first, down to the enquiry form.",
          el: "Σχεδιασμένο mobile-first, μέχρι και τη φόρμα αιτήματος.",
        },
      },
    ],
  },
  {
    slug: "dr-baumann",
    name: "Dr. Baumann Hellas",
    type: { en: "Eshop", el: "Eshop" },
    industry: { en: "Skincare", el: "Περιποίηση δέρματος" },
    description: {
      en: "Bilingual skincare store with filtered collections and card, PayPal and Viva payments.",
      el: "Δίγλωσσο eshop περιποίησης δέρματος με φίλτρα συλλογών και πληρωμές με κάρτα, PayPal και Viva.",
    },
    stage: "#EAE3D8",
    domain: "dr-baumann.gr",
    liveUrl: "https://dr-baumann.gr/",
    desktopImage: "/projects/dr-baumann-desktop.jpg",
    mobileImage: "/projects/dr-baumann-mobile.jpg",
    intro: {
      en: "Bilingual skincare store with filtered collections and card, PayPal and Viva payments.",
      el: "Δίγλωσσο eshop περιποίησης δέρματος με φίλτρα συλλογών και πληρωμές με κάρτα, PayPal και Viva.",
    },
    client: "Dr. Baumann Hellas",
    services: delivered,
    stack: "—",
    year: "—",
    storyTitle: {
      en: "A store for the science of skin.",
      el: "Ένα κατάστημα για την επιστήμη της επιδερμίδας.",
    },
    storySubtitle: {
      en: "Product lines, filters and checkout in one bilingual eshop.",
      el: "Σειρές, φίλτρα και checkout σε ένα δίγλωσσο eshop.",
    },
    brief: {
      en: "Dr. Baumann Hellas needed a bilingual store for its skincare lines, with a way to browse by collection and pay by card, PayPal or Viva.",
      el: "Η Dr. Baumann Hellas χρειαζόταν ένα δίγλωσσο κατάστημα για τις σειρές περιποίησης, με περιήγηση ανά συλλογή και πληρωμή με κάρτα, PayPal ή Viva.",
    },
    built: [
      {
        icon: "layout-grid",
        title: { en: "Collections", el: "Συλλογές" },
        text: {
          en: "Each product line has its own collection page.",
          el: "Κάθε σειρά έχει τη δική της σελίδα συλλογής.",
        },
      },
      {
        icon: "credit-card",
        title: { en: "Payments", el: "Πληρωμές" },
        text: {
          en: "Card, PayPal and Viva at checkout.",
          el: "Κάρτα, PayPal και Viva στο checkout.",
        },
      },
    ],
  },
  {
    slug: "techne",
    name: "Techne.",
    type: { en: "Website", el: "Website" },
    industry: { en: "Architecture", el: "Αρχιτεκτονική" },
    description: {
      en: "Bilingual site for an Athens design & build firm, with services, project portfolio and upcoming developments.",
      el: "Δίγλωσσο site για γραφείο design & build στην Αθήνα, με υπηρεσίες, portfolio έργων και upcoming developments.",
    },
    stage: "#3A0D0D",
    domain: "technebuild.com",
    liveUrl: "https://technebuild.com/",
    desktopImage: "/projects/techne-desktop.jpg",
    mobileImage: "/projects/techne-mobile.jpg",
    intro: {
      en: "A bilingual site for an Athens design and build studio, presenting services, built work and developments still to come.",
      el: "Δίγλωσσο site για γραφείο design & build στην Αθήνα, με τις υπηρεσίες, τα έργα και τις αναπτύξεις που έρχονται.",
    },
    client: "Techne., Athens",
    services: delivered,
    stack: "WordPress",
    year: "2025",
    storyTitle: {
      en: "A studio, presented in full.",
      el: "Ένα γραφείο, παρουσιασμένο ολόκληρο.",
    },
    storySubtitle: {
      en: "Services, built work and upcoming developments for an Athens studio.",
      el: "Υπηρεσίες, έργα και upcoming developments για ένα γραφείο στην Αθήνα.",
    },
    brief: {
      en: "Techne. is an Athens design and build firm. They needed a bilingual site that explains the services, shows the project portfolio and points to developments still ahead.",
      el: "Η Techne. είναι γραφείο design & build στην Αθήνα. Χρειαζόταν ένα δίγλωσσο site που εξηγεί τις υπηρεσίες, δείχνει το portfolio και τις αναπτύξεις που έρχονται.",
    },
    built: [
      {
        icon: "building-2",
        title: { en: "Services", el: "Υπηρεσίες" },
        text: {
          en: "Design, permits, engineering, construction and property development.",
          el: "Σχεδιασμός, άδειες, μηχανικοί, κατασκευή και ανάπτυξη ακινήτων.",
        },
      },
      {
        icon: "layout-grid",
        title: { en: "Project portfolio", el: "Portfolio έργων" },
        text: {
          en: "Indicative projects, in English and Greek.",
          el: "Ενδεικτικά έργα, στα αγγλικά και στα ελληνικά.",
        },
      },
      {
        icon: "map-pin",
        title: { en: "Athens studio", el: "Γραφείο στην Αθήνα" },
        text: {
          en: "Contact and studio details for Riga Feraiou.",
          el: "Στοιχεία επικοινωνίας για το γραφείο στη Ρήγα Φεραίου.",
        },
      },
      {
        icon: "languages",
        title: { en: "Two languages", el: "Δύο γλώσσες" },
        text: {
          en: "The same site in English and Greek.",
          el: "Το ίδιο site στα αγγλικά και στα ελληνικά.",
        },
      },
    ],
  },
  {
    slug: "chalkino-katsaroli",
    name: "Χάλκινο Κατσαρόλι",
    type: { en: "Website", el: "Website" },
    industry: { en: "Restaurant", el: "Εστίαση" },
    description: {
      en: "Daily menus for two kitchens in Chalkida and Artaki, mobile-first and built for local search.",
      el: "Καθημερινό μενού για δύο μαγειρεία σε Χαλκίδα και Αρτάκη, mobile-first και φτιαγμένο για τοπική αναζήτηση.",
    },
    stage: "#2B1C14",
    domain: "chalkino-katsaroli.gr",
    liveUrl: "https://www.chalkino-katsaroli.gr/",
    desktopImage: "/projects/chalkino-katsaroli-desktop.jpg",
    mobileImage: "/projects/chalkino-katsaroli-mobile.jpg",
    intro: {
      en: "A mobile-first site for two home-cooking kitchens in Chalkida and Artaki, built around the daily menu and local search.",
      el: "Mobile-first site για δύο μαγειρεία σε Χαλκίδα και Αρτάκη, χτισμένο γύρω από το καθημερινό μενού και την τοπική αναζήτηση.",
    },
    client: "Χάλκινο Κατσαρόλι, Chalkida",
    services: delivered,
    stack: "Next.js",
    year: "2026",
    storyTitle: {
      en: "Today's menu, easy to find.",
      el: "Το σημερινό μενού, εύκολο να βρεθεί.",
    },
    storySubtitle: {
      en: "Two kitchens, one mobile-first site for local search.",
      el: "Δύο μαγειρεία, ένα mobile-first site για τοπική αναζήτηση.",
    },
    brief: {
      en: "Χάλκινο Κατσαρόλι serves daily home cooking from two kitchens, in Chalkida and Artaki. They needed a mobile-first site that publishes the menu and shows up in local search.",
      el: "Το Χάλκινο Κατσαρόλι σερβίρει καθημερινό σπιτικό φαγητό από δύο μαγειρεία, σε Χαλκίδα και Αρτάκη. Χρειαζόταν ένα mobile-first site που ανεβάζει το μενού και εμφανίζεται στην τοπική αναζήτηση.",
    },
    built: [
      {
        icon: "utensils",
        title: { en: "Daily menu", el: "Καθημερινό μενού" },
        text: {
          en: "The day's dishes, written for a phone.",
          el: "Τα πιάτα της ημέρας, γραμμένα για το κινητό.",
        },
      },
      {
        icon: "map-pin",
        title: { en: "Two kitchens", el: "Δύο μαγειρεία" },
        text: {
          en: "Chalkida and Artaki, on the same site.",
          el: "Χαλκίδα και Αρτάκη, στο ίδιο site.",
        },
      },
      {
        icon: "search",
        title: { en: "Local search", el: "Τοπική αναζήτηση" },
        text: {
          en: "Pages titled and described for searches in Chalkida.",
          el: "Σελίδες με τίτλο και περιγραφή για αναζητήσεις στη Χαλκίδα.",
        },
      },
      {
        icon: "message-circle",
        title: { en: "Questions", el: "Ερωτήσεις" },
        text: {
          en: "Answers on the menu, ingredients and orders.",
          el: "Απαντήσεις για το μενού, τα υλικά και τις παραγγελίες.",
        },
      },
    ],
  },
  {
    slug: "pantazelos",
    name: "Pantazelos Real Estate",
    type: { en: "Website", el: "Website" },
    industry: { en: "Real estate", el: "Ακίνητα" },
    description: {
      en: "Site for a real-estate agency in Skroponeria, covering buying and selling with engineering and legal support.",
      el: "Site για μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
    },
    stage: "#1E3440",
    domain: "pantazelosrealestate.gr",
    liveUrl: "https://www.pantazelosrealestate.gr/",
    desktopImage: "/projects/pantazelos-desktop.jpg",
    mobileImage: "/projects/pantazelos-mobile.jpg",
    intro: {
      en: "A site for the real-estate office in Skroponeria, covering buying and selling with engineering and legal support.",
      el: "Site για το μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
    },
    client: "Pantazelos Real Estate, Skroponeria",
    services: delivered,
    stack: "HTML",
    year: "2026",
    storyTitle: {
      en: "Buying and selling, with the paperwork handled.",
      el: "Αγορά και πώληση, με τη γραφειοκρατία τακτοποιημένη.",
    },
    storySubtitle: {
      en: "A real-estate office in Skroponeria, with the specialists beside it.",
      el: "Μεσιτικό γραφείο στα Σκροπονέρια, με τους ειδικούς δίπλα του.",
    },
    brief: {
      en: "Pantazelos Real Estate works from Skroponeria. They needed a site for buying and selling, and a clear way to reach the office and its engineering and legal support.",
      el: "Η Pantazelos Real Estate έχει έδρα τα Σκροπονέρια. Χρειαζόταν ένα site για αγορά και πώληση, και έναν σαφή τρόπο να φτάνει κάποιος στο γραφείο και στην υποστήριξη από μηχανικούς και νομικούς.",
    },
    built: [
      {
        icon: "home",
        title: { en: "Buy and sell", el: "Αγορά και πώληση" },
        text: {
          en: "Separate paths for buying a property and listing one.",
          el: "Ξεχωριστές διαδρομές για αγορά και για ανάθεση ακινήτου.",
        },
      },
      {
        icon: "landmark",
        title: { en: "Specialists", el: "Ειδικοί" },
        text: {
          en: "Engineering and legal support, named on the site.",
          el: "Υποστήριξη από μηχανικούς και νομικούς, γραμμένη στο site.",
        },
      },
      {
        icon: "message-circle",
        title: { en: "Enquiry form", el: "Φόρμα επικοινωνίας" },
        text: {
          en: "Name, phone and whether the message is about buying or selling.",
          el: "Όνομα, τηλέφωνο και αν το μήνυμα αφορά αγορά ή πώληση.",
        },
      },
      {
        icon: "map-pin",
        title: { en: "Skroponeria", el: "Σκροπονέρια" },
        text: {
          en: "Address, hours and a map for the office.",
          el: "Διεύθυνση, ωράριο και χάρτης για το γραφείο.",
        },
      },
    ],
  },
  {
    slug: "horizon-realty",
    name: "Horizon Realty",
    type: { en: "Booking site", el: "Booking site" },
    industry: { en: "Hospitality", el: "Φιλοξενία" },
    description: {
      en: "Boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
      el: "Boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
    },
    stage: "#F2E6DE",
    domain: "horizonrealty.gr",
    liveUrl: "https://www.horizonrealty.gr/",
    desktopImage: "/projects/horizon-realty-desktop.jpg",
    mobileImage: "/projects/horizon-realty-mobile.jpg",
    intro: {
      en: "A booking site for boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
      el: "Booking site για boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
    },
    client: "Horizon Realty, Chalkida",
    services: delivered,
    stack: "HTML",
    year: "2026",
    storyTitle: {
      en: "A stay you book with the host.",
      el: "Μια διαμονή που κλείνεται με τον host.",
    },
    storySubtitle: {
      en: "Boutique rooms in Chalkida, booked without the platforms.",
      el: "Boutique διαμονές στη Χαλκίδα, με κράτηση χωρίς πλατφόρμες.",
    },
    brief: {
      en: "Horizon Realty runs boutique short-term stays in Chalkida. They needed a site where guests book direct, and owners can see how a property is looked after.",
      el: "Η Horizon Realty έχει boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα. Χρειαζόταν ένα site όπου οι επισκέπτες κλείνουν απευθείας και οι ιδιοκτήτες βλέπουν πώς φροντίζεται ένα ακίνητο.",
    },
    built: [
      {
        icon: "calendar",
        title: { en: "Direct booking", el: "Απευθείας κράτηση" },
        text: {
          en: "A path to the stay that skips the booking platforms.",
          el: "Διαδρομή προς τη διαμονή χωρίς τις πλατφόρμες κράτησης.",
        },
      },
      {
        icon: "layout-grid",
        title: { en: "The stays", el: "Τα καταλύματα" },
        text: {
          en: "Properties grouped by the water, the centre and the old town.",
          el: "Καταλύματα ανά παραλία, κέντρο και παλιά πόλη.",
        },
      },
      {
        icon: "message-circle",
        title: { en: "WhatsApp", el: "WhatsApp" },
        text: {
          en: "A direct line to the host from the page.",
          el: "Απευθείας γραμμή με τον host από τη σελίδα.",
        },
      },
      {
        icon: "home",
        title: { en: "For owners", el: "Για ιδιοκτήτες" },
        text: {
          en: "A page for owners who want the property managed.",
          el: "Σελίδα για ιδιοκτήτες που θέλουν διαχείριση του ακινήτου.",
        },
      },
    ],
  },
  {
    slug: "vasileiadis",
    name: "Αποφράξεις Βασιλειάδης",
    type: { en: "Website", el: "Website" },
    industry: { en: "Local services", el: "Τοπικές υπηρεσίες" },
    description: {
      en: "24/7 drain-clearing service across Attica, built for a fast phone call and local search.",
      el: "Αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο για γρήγορο τηλέφωνο και τοπική αναζήτηση.",
    },
    stage: "#0F2A3D",
    domain: "apofraxeisvasileiadis.gr",
    liveUrl: "https://www.apofraxeisvasileiadis.gr/",
    desktopImage: "/projects/vasileiadis-desktop.jpg",
    mobileImage: "/projects/vasileiadis-mobile.jpg",
    intro: {
      en: "A site for a 24/7 drain-clearing service across Attica, built so a visitor can call straight away.",
      el: "Site για αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο ώστε ο επισκέπτης να καλεί αμέσως.",
    },
    client: "Αποφράξεις Βασιλειάδης, Attica",
    services: delivered,
    stack: "React",
    year: "2026",
    storyTitle: {
      en: "A phone call, any hour.",
      el: "Ένα τηλέφωνο, οποιαδήποτε ώρα.",
    },
    storySubtitle: {
      en: "Drain clearing across Attica, built around the call.",
      el: "Αποφράξεις σε όλη την Αττική, χτισμένες γύρω από το τηλέφωνο.",
    },
    brief: {
      en: "Αποφράξεις Βασιλειάδης covers Attica day and night. They needed a site that makes the right phone number obvious and shows up when someone nearby searches.",
      el: "Οι Αποφράξεις Βασιλειάδης καλύπτουν την Αττική μέρα και νύχτα. Χρειαζόταν ένα site που κάνει το σωστό τηλέφωνο προφανές και εμφανίζεται όταν κάποιος κοντά ψάχνει.",
    },
    built: [
      {
        icon: "phone",
        title: { en: "Day and night numbers", el: "Τηλέφωνα ημέρας και νύχτας" },
        text: {
          en: "A daytime line, a night line and the landline, on the page.",
          el: "Γραμμή ημέρας, γραμμή νύχτας και σταθερό, στη σελίδα.",
        },
      },
      {
        icon: "map-pin",
        title: { en: "Attica", el: "Αττική" },
        text: {
          en: "Coverage across Attica, with bases in Kallithea and Chalandri.",
          el: "Κάλυψη σε όλη την Αττική, με βάσεις σε Καλλιθέα και Χαλάνδρι.",
        },
      },
      {
        icon: "wrench",
        title: { en: "The service", el: "Η υπηρεσία" },
        text: {
          en: "Drain clearing and maintenance, described for a fast visit.",
          el: "Αποφράξεις και συντήρηση, γραμμένες για γρήγορη επίσκεψη.",
        },
      },
      {
        icon: "message-circle",
        title: { en: "Message form", el: "Φόρμα μηνύματος" },
        text: {
          en: "Name, phone and a short note, if a call is not the first step.",
          el: "Όνομα, τηλέφωνο και σύντομο μήνυμα, αν η κλήση δεν είναι το πρώτο βήμα.",
        },
      },
    ],
  },
];

export function projectLabel(project: Project, locale: Locale) {
  return `${project.type[locale]} · ${project.industry[locale]}`;
}

function fallbackScreens(project: Project): ProjectScreen[] {
  return [
    {
      image: project.desktopImage,
      url: project.domain,
      wide: true,
      alt: {
        en: `${project.name} homepage`,
        el: `Αρχική του ${project.name}`,
      },
      caption: {
        en: "The homepage, as it ships.",
        el: "Η αρχική, όπως είναι live.",
      },
    },
    {
      image: project.mobileImage,
      phone: true,
      alt: {
        en: `${project.name} on a phone`,
        el: `Το ${project.name} σε κινητό`,
      },
      caption: {
        en: "The same site on a phone.",
        el: "Το ίδιο site σε κινητό.",
      },
    },
  ];
}

for (const project of projects) {
  if (!project.screens) project.screens = fallbackScreens(project);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const selectedProjects = projects.slice(0, 3);
