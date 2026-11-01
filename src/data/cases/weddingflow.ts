import { asset, feature, L } from "@/data/caseHelpers";
import type { Project, Slide, WeddingflowPane } from "@/data/projectTypes";

const root = "/projects/weddingflow";
const en = (file: string) => `${root}/${file}`;
const el = (file: string) => `${root}/el-${file}`;

function slide(file: string, title: [string, string], text: [string, string], alt: [string, string]): Slide {
  return {
    image: asset(en(file), el(file)),
    title: L(title[0], title[1]),
    text: L(text[0], text[1]),
    alt: L(alt[0], alt[1]),
  };
}

const coupleSlides: Slide[] = [
  slide("couple-onboarding-1.jpg", ["Onboarding · step 1 of 4", "Onboarding · βήμα 1 από 4"], ["Names first — everything after that speaks to the couple by name.", "Πρώτα τα ονόματα — από εκεί και πέρα όλα απευθύνονται στο ζευγάρι με το όνομά του."], ["Weddingflow couple onboarding, names", "Weddingflow onboarding ζευγαριού, ονόματα"]),
  slide("couple-onboarding-3.jpg", ["Onboarding · step 3 of 4", "Onboarding · βήμα 3 από 4"], ["Where: any place in Greece, with suggestions as they type.", "Πού: οπουδήποτε στην Ελλάδα, με προτάσεις καθώς πληκτρολογούν."], ["Weddingflow couple onboarding, location", "Weddingflow onboarding ζευγαριού, τοποθεσία"]),
  slide("couple-onboarding-4.jpg", ["Onboarding · step 4 of 4", "Onboarding · βήμα 4 από 4"], ["Guests, budget and style — the details that shape every search.", "Καλεσμένοι, προϋπολογισμός και στυλ — όσα διαμορφώνουν κάθε αναζήτηση."], ["Weddingflow couple onboarding, guests and budget", "Weddingflow onboarding ζευγαριού, καλεσμένοι και προϋπολογισμός"]),
  slide("couple-overview.jpg", ["Overview", "Επισκόπηση"], ["A countdown to the day, the next appointment and every request at a glance.", "Αντίστροφη μέτρηση ως τη μέρα, το επόμενο ραντεβού και κάθε αίτημα με μια ματιά."], ["Weddingflow couple overview", "Επισκόπηση ζευγαριού στο Weddingflow"]),
  slide("couple-requests.jpg", ["Requests", "Αιτήματα"], ["When the venue accepts, the agreed price and the deposit appear — with a timer.", "Όταν ο χώρος αποδεχτεί, εμφανίζονται η συμφωνημένη τιμή και η προκαταβολή — με χρονόμετρο."], ["Weddingflow couple requests", "Αιτήματα ζευγαριού στο Weddingflow"]),
  slide("couple-guests.jpg", ["Guests", "Καλεσμένοι"], ["Groups, children and menus, counted as the list grows.", "Ομάδες, παιδιά και μενού, μετρημένα καθώς μεγαλώνει η λίστα."], ["Weddingflow guest list", "Λίστα καλεσμένων στο Weddingflow"]),
  slide("couple-seating.jpg", ["Seating plan", "Πλάνο θέσεων"], ["Everyone seated on the tables — automatically, or one by one.", "Όλοι στα τραπέζια — αυτόματα ή έναν-έναν."], ["Weddingflow seating plan", "Πλάνο θέσεων στο Weddingflow"]),
];

const venueSlides: Slide[] = [
  slide("venue.jpg", ["The venue page", "Η σελίδα του χώρου"], ["What couples see: gallery and video, capacity, the price from — and a request button.", "Τι βλέπουν τα ζευγάρια: gallery και βίντεο, χωρητικότητα, την τιμή «από» — και κουμπί αιτήματος."], ["Weddingflow venue page", "Σελίδα χώρου στο Weddingflow"]),
  slide("venue-pricing.jpg", ["Prices and deposit", "Τιμές και προκαταβολή"], ["Regular and high season, extras per amenity and the deposit, set once in the profile.", "Κανονική και υψηλή σεζόν, extras ανά παροχή και η προκαταβολή, ορισμένα μία φορά στο προφίλ."], ["Weddingflow venue prices", "Τιμές χώρου στο Weddingflow"]),
  slide("venue-requests.jpg", ["Requests", "Αιτήματα"], ["Every request with date, guests, budget and a note — Interested or Decline.", "Κάθε αίτημα με ημερομηνία, καλεσμένους, προϋπολογισμό και σημείωμα — «Ενδιαφέρομαι» ή «Απόρριψη»."], ["Weddingflow venue requests", "Αιτήματα χώρου στο Weddingflow"]),
  slide("venue-hall.jpg", ["Rooms and tables", "Αίθουσες και τραπέζια"], ["The venue draws its room once — tables, dance floor, stage, bar. Couples seat their guests on it.", "Ο χώρος σχεδιάζει την αίθουσά του μία φορά — τραπέζια, πίστα, σκηνή, μπαρ. Τα ζευγάρια βάζουν εκεί τους καλεσμένους τους."], ["Weddingflow venue hall", "Αίθουσα χώρου στο Weddingflow"]),
];

const proSlides: Slide[] = [
  slide("pro-overview.jpg", ["Overview", "Επισκόπηση"], ["Pending requests, the next appointment and unread messages, the moment they log in.", "Εκκρεμή αιτήματα, το επόμενο ραντεβού και τα αδιάβαστα μηνύματα, μόλις συνδεθούν."], ["Weddingflow professional overview", "Επισκόπηση επαγγελματία στο Weddingflow"]),
  slide("pro-requests.jpg", ["Requests", "Αιτήματα"], ["Couples ask with their date and budget; one tap to show interest.", "Τα ζευγάρια ζητούν με την ημερομηνία και τον προϋπολογισμό τους· ένα πάτημα για ενδιαφέρον."], ["Weddingflow professional requests", "Αιτήματα επαγγελματία στο Weddingflow"]),
  slide("pro-messages.jpg", ["Messages", "Μηνύματα"], ["One conversation per couple, with their wedding date always in view.", "Μία συζήτηση ανά ζευγάρι, με την ημερομηνία του γάμου τους πάντα μπροστά."], ["Weddingflow professional messages", "Μηνύματα επαγγελματία στο Weddingflow"]),
  slide("pro-pricing.jpg", ["Pricing", "Τιμολόγηση"], ["A price from, the deposit, and what is included or extra — per service.", "Τιμή «από», η προκαταβολή και τι περιλαμβάνεται ή χρεώνεται έξτρα — ανά υπηρεσία."], ["Weddingflow professional pricing", "Τιμολόγηση επαγγελματία στο Weddingflow"]),
];

function chips(enList: string, elList: string) {
  const enItems = enList.split(" · ");
  const elItems = elList.split(" · ");
  return enItems.map((item, index) => L(item, elItems[index] ?? item));
}

const panes: WeddingflowPane[] = [
  {
    tab: L("Couples", "Ζευγάρια"),
    heading: L("Plan it, then book it", "Οργανώστε, μετά κλείστε"),
    sentence: L(
      "Four short questions, then a dashboard that follows the wedding from the first request to the seating plan.",
      "Τέσσερις σύντομες ερωτήσεις και μετά ένα dashboard που ακολουθεί τον γάμο από το πρώτο αίτημα ως το πλάνο θέσεων.",
    ),
    steps: chips(
      "Names · Wedding date · Location · Guests, budget and style",
      "Ονόματα · Ημερομηνία γάμου · Τοποθεσία · Καλεσμένοι, προϋπολογισμός και στυλ",
    ),
    chips: chips(
      "Overview · Requests · Messages · Calendar · Saved · Guests · Seating plan · Reviews",
      "Επισκόπηση · Αιτήματα · Μηνύματα · Ημερολόγιο · Αγαπημένα · Καλεσμένοι · Πλάνο θέσεων · Αξιολογήσεις",
    ),
    slides: coupleSlides,
  },
  {
    tab: L("Venues", "Χώροι"),
    heading: L("List the venue, fill the calendar", "Καταχωρίστε τον χώρο, γεμίστε το ημερολόγιο"),
    sentence: L(
      "Seven steps turn a venue into a listing couples can compare — and a dashboard to answer them.",
      "Επτά βήματα κάνουν έναν χώρο καταχώριση που τα ζευγάρια μπορούν να συγκρίνουν — και ένα dashboard για να τους απαντάτε.",
    ),
    steps: chips(
      "Venue type · Name, story and map · Capacity · Amenities · Pricing and deposit · Portfolio · Contact",
      "Τύπος χώρου · Όνομα, ιστορία και χάρτης · Χωρητικότητα · Παροχές · Τιμές και προκαταβολή · Portfolio · Επικοινωνία",
    ),
    chips: chips(
      "Overview · Requests · Calendar · Messages · Rooms and tables · Profile · Reviews",
      "Επισκόπηση · Αιτήματα · Ημερολόγιο · Μηνύματα · Αίθουσες και τραπέζια · Προφίλ · Αξιολογήσεις",
    ),
    slides: venueSlides,
  },
  {
    tab: L("Wedding pros", "Επαγγελματίες γάμου"),
    heading: L("One profile per craft", "Ένα προφίλ για κάθε ειδικότητα"),
    sentence: L(
      "Twelve categories, each with its own services and extras — so couples compare like with like.",
      "Δώδεκα κατηγορίες, η καθεμία με τις δικές της υπηρεσίες και extras — για να συγκρίνουν τα ζευγάρια όμοια με όμοια.",
    ),
    steps: chips(
      "Category · Name, areas and services · Services and extras · Pricing and deposit · Portfolio and video · Contact",
      "Κατηγορία · Όνομα, περιοχές και υπηρεσίες · Υπηρεσίες και extras · Τιμές και προκαταβολή · Portfolio και βίντεο · Επικοινωνία",
    ),
    chips: chips(
      "Overview · Requests · Calendar · Messages · Profile · Reviews",
      "Επισκόπηση · Αιτήματα · Ημερολόγιο · Μηνύματα · Προφίλ · Αξιολογήσεις",
    ),
    slides: proSlides,
  },
];

export const weddingflow: Project = {
  slug: "weddingflow",
  kind: "upcoming",
  name: L("Weddingflow", "Weddingflow"),
  type: L("Web app", "Web app"),
  industry: L("Weddings", "Γάμοι"),
  description: L(
    "The first Greek platform that brings wedding venues, professionals and planning tools together — for engaged couples and wedding pros.",
    "Η πρώτη ελληνική πλατφόρμα που συγκεντρώνει χώρους γάμου, επαγγελματίες και εργαλεία σχεδιασμού — για ζευγάρια και επαγγελματίες του γάμου.",
  ),
  stage: "#0B3B30",
  domain: "weddingflow",
  desktopImage: en("home-desktop.jpg"),
  mobileImage: en("home-mobile.jpg"),
  image: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
  showcase: {
    desktop: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
    mobile: asset(en("home-mobile.jpg"), el("home-mobile.jpg")),
    desktopAlt: L("Weddingflow homepage on desktop", "Αρχική του Weddingflow σε desktop"),
    mobileAlt: L("Weddingflow homepage on mobile", "Αρχική του Weddingflow σε κινητό"),
  },
  intro: L(
    "Our own platform that brings wedding venues, professionals and planning tools together — for engaged couples and the people who make the day.",
    "Η δική μας πλατφόρμα που φέρνει μαζί χώρους δεξιώσεων, επαγγελματίες γάμου και εργαλεία οργάνωσης — για τα ζευγάρια και για όσους κάνουν τη μέρα πραγματικότητα.",
  ),
  client: L("Weddingflow · our product", "Weddingflow · δικό μας προϊόν"),
  services: L("Product design · Development", "Σχεδιασμός προϊόντος · Ανάπτυξη"),
  year: "2026",
  storyTitle: L("Your wedding, from one place.", "Ο γάμος σας, από ένα σημείο."),
  storySubtitle: L(
    "Venues, wedding pros and planning tools — for couples and for the people who make the day.",
    "Χώροι, επαγγελματίες γάμου και εργαλεία οργάνωσης — για τα ζευγάρια και για όσους κάνουν τη μέρα πραγματικότητα.",
  ),
  brief: L(
    "Couples plan a wedding across dozens of sites, Instagram and WhatsApp, ask for prices by email and keep it all in spreadsheets. Venues and professionals answer the same questions again and again, with no single place for requests and dates. Weddingflow puts both sides on one platform: real availability, real prices, real booking.",
    "Τα ζευγάρια οργανώνουν τον γάμο τους μέσα από δεκάδες sites, το Instagram και το WhatsApp, ζητούν τιμές με email και τα κρατούν όλα σε υπολογιστικά φύλλα. Οι χώροι και οι επαγγελματίες απαντούν ξανά και ξανά στις ίδιες ερωτήσεις, χωρίς ένα σημείο για αιτήματα και ημερομηνίες. Το Weddingflow φέρνει και τις δύο πλευρές σε μία πλατφόρμα: πραγματική διαθεσιμότητα, πραγματικές τιμές, πραγματική κράτηση.",
  ),
  built: [
    feature("search", ["Venue search", "Αναζήτηση χώρων"], ["Venues across Greece, filtered by region, type, style, guests and budget.", "Χώροι σε όλη την Ελλάδα, με φίλτρα για περιοχή, τύπο, στυλ, καλεσμένους και προϋπολογισμό."]),
    feature("building", ["Venue pages", "Σελίδες χώρων"], ["Gallery and video, capacity, amenities, seasonal prices and the deposit — on one page.", "Gallery και βίντεο, χωρητικότητα, παροχές, τιμές ανά σεζόν και η προκαταβολή — σε μία σελίδα."]),
    feature("grid", ["Wedding pros", "Επαγγελματίες γάμου"], ["Twelve categories, from photography to dance lessons, each with its own services and pricing.", "Δώδεκα κατηγορίες, από τη φωτογραφία ως τα μαθήματα χορού, η καθεμία με τις δικές της υπηρεσίες και τιμές."]),
    feature("mail", ["Requests and booking", "Αιτήματα και κράτηση"], ["The couple asks, the venue or wedding pro accepts, and the deposit locks the date.", "Το ζευγάρι ζητά, ο χώρος ή ο επαγγελματίας αποδέχεται και η προκαταβολή κλειδώνει την ημερομηνία."]),
    feature("calendar", ["Three dashboards", "Τρία dashboards"], ["Couple, venue and professional — each with requests, calendar and messages.", "Ζευγάρι, χώρος και επαγγελματίας — ο καθένας με αιτήματα, ημερολόγιο και μηνύματα."]),
    feature("document", ["Planning tools", "Εργαλεία οργάνωσης"], ["For couples: a guest list with groups and menus, a seating plan on the venue’s tables — and a planning checklist on the way.", "Για τα ζευγάρια: λίστα καλεσμένων με ομάδες και μενού, πλάνο θέσεων στα τραπέζια του χώρου — και σύντομα λίστα εργασιών για την οργάνωση."]),
  ],
  weddingflow: {
    sides: {
      title: L("Each side gets its own way in.", "Κάθε πλευρά έχει τη δική της διαδρομή."),
      lead: L(
        "Couples, venues and wedding professionals sign up the same way, then follow an onboarding and a dashboard built for what they do.",
        "Ζευγάρια, χώροι και επαγγελματίες γάμου εγγράφονται με τον ίδιο τρόπο και μετά περνούν από onboarding και dashboard φτιαγμένα για ό,τι κάνουν.",
      ),
      stepsLabel: L("Onboarding", "Onboarding"),
      dashboardLabel: L("Their dashboard", "Το dashboard τους"),
      panes,
    },
    flow: {
      title: L("From the first search to the last table.", "Από την πρώτη αναζήτηση ως το τελευταίο τραπέζι."),
      lead: L(
        "One request moves through every side of the platform — nobody leaves it to send an email.",
        "Ένα αίτημα περνά από κάθε πλευρά της πλατφόρμας — κανείς δεν χρειάζεται να βγει από αυτήν για να στείλει email.",
      ),
      steps: [
        { title: L("Find", "Αναζήτηση"), who: L("Couple", "Ζευγάρι"), text: L("Search venues and pros with filters, save favourites and compare.", "Χώροι και επαγγελματίες με φίλτρα, αποθήκευση στα αγαπημένα και σύγκριση.") },
        { title: L("Ask", "Αίτημα"), who: L("Couple", "Ζευγάρι"), text: L("Send a request with the date, the guests and a short note.", "Αίτημα με την ημερομηνία, τους καλεσμένους και ένα σύντομο σημείωμα.") },
        { title: L("Talk", "Συζήτηση"), who: L("Venue · Pro", "Χώρος · Επαγγελματίας"), text: L("Show interest, answer in Messages, agree on the details.", "Ενδιαφέρον, απάντηση στα Μηνύματα, συμφωνία στις λεπτομέρειες.") },
        { title: L("Book", "Κράτηση"), who: L("Both", "Και οι δύο"), text: L("The venue or pro accepts; the deposit locks the date.", "Ο χώρος ή ο επαγγελματίας αποδέχεται· η προκαταβολή κλειδώνει την ημερομηνία.") },
        { title: L("Plan", "Οργάνωση"), who: L("Couple · Venue", "Ζευγάρι · Χώρος"), text: L("Guests are seated on the venue’s own tables.", "Οι καλεσμένοι μπαίνουν στα τραπέζια του ίδιου του χώρου.") },
      ],
      pair: [
        slide("pro-messages.jpg", ["The pro answers in Messages", "Ο επαγγελματίας απαντά στα Μηνύματα"], ["One conversation per couple, with the wedding date always in view.", "Μία συζήτηση ανά ζευγάρι, με την ημερομηνία του γάμου πάντα μπροστά."], ["Weddingflow pro messages", "Μηνύματα επαγγελματία στο Weddingflow"]),
        slide("couple-requests.jpg", ["The couple sees every answer", "Το ζευγάρι βλέπει κάθε απάντηση"], ["Each request with its status — and the deposit, once the venue or pro accepts.", "Κάθε αίτημα με την κατάστασή του — και την προκαταβολή, μόλις ο χώρος ή ο επαγγελματίας αποδεχτεί."], ["Weddingflow couple requests", "Αιτήματα ζευγαριού στο Weddingflow"]),
      ],
    },
    visitors: {
      title: L("Real availability, real prices.", "Πραγματική διαθεσιμότητα, πραγματικές τιμές."),
      lead: L(
        "Before anyone signs up, every venue and professional can be searched, compared and saved.",
        "Πριν εγγραφεί κανείς, κάθε χώρος και επαγγελματίας μπορεί να αναζητηθεί, να συγκριθεί και να αποθηκευτεί.",
      ),
      slides: [
        slide("venues.jpg", ["Venue search", "Αναζήτηση χώρων"], ["42 venues in the demo, filtered by rating, region, type, style, date, guests and budget.", "42 χώροι στο demo, με φίλτρα για βαθμολογία, περιοχή, τύπο, στυλ, ημερομηνία, καλεσμένους και προϋπολογισμό."], ["Weddingflow venue search", "Αναζήτηση χώρων στο Weddingflow"]),
        slide("venue.jpg", ["Venue page", "Σελίδα χώρου"], ["Gallery with video, the price from and tags for style and type.", "Gallery με βίντεο, η τιμή «από» και ετικέτες για στυλ και τύπο."], ["Weddingflow venue page", "Σελίδα χώρου στο Weddingflow"]),
        slide("venue-pricing.jpg", ["Amenities and pricing", "Παροχές και τιμές"], ["What is included, what costs extra, the high season and the deposit.", "Τι περιλαμβάνεται, τι χρεώνεται έξτρα, η υψηλή σεζόν και η προκαταβολή."], ["Weddingflow amenities and pricing", "Παροχές και τιμές στο Weddingflow"]),
      ],
      phones: [asset(en("home-mobile.jpg"), el("home-mobile.jpg")), asset(en("mobile-venue.jpg"), el("mobile-venue.jpg")), asset(en("mobile-vendors.jpg"), el("mobile-vendors.jpg"))],
      phoneAlts: [
        L("Weddingflow homepage on a phone", "Αρχική του Weddingflow σε κινητό"),
        L("Weddingflow venue on a phone", "Χώρος του Weddingflow σε κινητό"),
        L("Weddingflow professionals on a phone", "Επαγγελματίες του Weddingflow σε κινητό"),
      ],
      captionTitle: L("Mobile", "Κινητό"),
      captionText: L(
        "From the homepage to a venue and a category of professionals, with the request button always in reach.",
        "Από την αρχική σε έναν χώρο και σε μια κατηγορία επαγγελματιών, με το κουμπί αιτήματος πάντα κοντά.",
      ),
    },
    next: {
      title: L("One release at a time.", "Μία έκδοση τη φορά."),
      cards: [
        { tag: L("Ready", "Έτοιμο"), tone: "ready", title: L("Venues and Couples", "Χώροι και Ζευγάρια"), text: L("Sign-up and roles, every onboarding, venue search and pages, requests, deposits, guests and seating.", "Εγγραφή και ρόλοι, όλα τα onboarding, αναζήτηση και σελίδες χώρων, αιτήματα, προκαταβολές, καλεσμένοι και πλάνο θέσεων.") },
        { tag: L("In progress", "Σε εξέλιξη"), tone: "progress", title: L("Wedding Pros and Dashboards", "Επαγγελματίες και Dashboards"), text: L("Professional pages and request forms, reviews, and the last details of all three dashboards.", "Σελίδες επαγγελματιών και φόρμες αιτημάτων, αξιολογήσεις και οι τελευταίες λεπτομέρειες στα τρία dashboards.") },
        { tag: L("Next", "Επόμενο"), tone: "next", title: L("Payments and Planning", "Πληρωμές και Οργάνωση"), text: L("Online deposits, email notifications and a planning checklist with a timeline.", "Online προκαταβολές, ειδοποιήσεις με email και λίστα εργασιών με χρονοδιάγραμμα.") },
      ],
    },
  },
};
