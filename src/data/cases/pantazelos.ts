import { asset, delivered, feature, L, mockReview, phone, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/pantazelos";
const el = (file: string) => `${root}/el-${file}`;
const en = (file: string) => `${root}/${file}`;

export const pantazelos: Project = {
  slug: "pantazelos",
  kind: "live",
  name: L("Pantazelos Real Estate", "Pantazelos Real Estate"),
  type: L("Website", "Website"),
  industry: L("Real estate", "Ακίνητα"),
  description: L(
    "Site for a real-estate agency in Skroponeria, covering buying and selling with engineering and legal support.",
    "Site για μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
  ),
  stage: "#1E3440",
  domain: "pantazelosrealestate.gr",
  liveUrl: L("https://www.pantazelosrealestate.gr", "https://www.pantazelosrealestate.gr"),
  desktopImage: en("home-desktop.jpg"),
  mobileImage: en("home-mobile.jpg"),
  image: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
  showcase: {
    desktop: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
    mobile: asset(en("home-mobile.jpg"), el("home-mobile.jpg")),
    desktopAlt: L("Pantazelos Real Estate homepage on desktop", "Αρχική της Pantazelos Real Estate σε desktop"),
    mobileAlt: L("Pantazelos Real Estate homepage on mobile", "Αρχική της Pantazelos Real Estate σε κινητό"),
  },
  intro: L(
    "A site for the real-estate office in Skroponeria, covering buying and selling with engineering and legal support.",
    "Site για το μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
  ),
  client: L("Pantazelos Real Estate, Skroponeria", "Pantazelos Real Estate, Σκροπονέρια"),
  services: delivered,
  year: "2026",
  meta: {
    title: L(
      "Pantazelos Real Estate: Website, Skroponeria | Genesis",
      "Pantazelos Real Estate: μεσιτικό site, Σκροπονέρια | Genesis",
    ),
    share: L("Website, Skroponeria", "μεσιτικό site, Σκροπονέρια"),
  },
  storyTitle: L(
    "Buying and selling, with the paperwork handled.",
    "Αγορά και πώληση, με τη γραφειοκρατία τακτοποιημένη.",
  ),
  storySubtitle: L(
    "A real-estate office in Skroponeria, with the specialists beside it.",
    "Μεσιτικό γραφείο στα Σκροπονέρια, με τους ειδικούς δίπλα του.",
  ),
  brief: L(
    "Pantazelos Real Estate works from Skroponeria. They needed a site for buying and selling, and a clear way to reach the office and its engineering and legal support.",
    "Η Pantazelos Real Estate έχει έδρα τα Σκροπονέρια. Χρειαζόταν ένα site για αγορά και πώληση, και έναν σαφή τρόπο να φτάνει κάποιος στο γραφείο και στην υποστήριξη από μηχανικούς και νομικούς.",
  ),
  built: [
    feature("building", ["Buy and sell", "Αγορά και πώληση"], ["Two clear paths, buying or selling, each with what the office takes care of.", "Δύο ξεκάθαρες διαδρομές, αγορά ή πώληση, η καθεμία με όσα αναλαμβάνει το γραφείο."]),
    feature("grid", ["Services page", "Σελίδα υπηρεσιών"], ["Purchase, sale, valuation, technical inspection, legal support and notarial coverage, explained.", "Αγορά, πώληση, εκτίμηση, τεχνικός έλεγχος, νομική υποστήριξη και συμβολαιογραφική κάλυψη, εξηγημένα."]),
    feature("grid", ["Portfolio", "Portfolio"], ["Recent sales filtered by type and year, each with its location.", "Πρόσφατες πωλήσεις με φίλτρα ανά τύπο και έτος, η καθεμία με την τοποθεσία της."]),
    feature("document", ["List your property", "Ανάθεση ακινήτου"], ["A form for owners: property type, area, size and desired price.", "Φόρμα για ιδιοκτήτες: τύπος ακινήτου, περιοχή, εμβαδόν και επιθυμητή τιμή."]),
    feature("globe", ["Partners", "Συνεργάτες"], ["Engineers, legal advisors and notaries for every step of the transaction.", "Μηχανικοί, νομικοί σύμβουλοι και συμβολαιογράφοι για κάθε βήμα της αγοραπωλησίας."]),
    feature("mail", ["Contact form", "Φόρμα επικοινωνίας"], ["Buy or sell enquiries, with the office hours and a map.", "Ερωτήματα για αγορά ή πώληση, με το ωράριο του γραφείου και χάρτη."]),
  ],
  gallery: {
    wide: shot(en("gallery-portfolio.jpg"), ["Portfolio", "Portfolio"], ["Recent sales, filtered by type and year.", "Πρόσφατες πωλήσεις, με φίλτρα ανά τύπο και έτος."], ["Pantazelos Real Estate — recent sales portfolio", "Pantazelos Real Estate — portfolio πρόσφατων πωλήσεων"], el("gallery-portfolio.jpg")),
    row: [
      shot(en("gallery-buy-sell.jpg"), ["Buy and sell", "Αγορά και πώληση"], ["Two paths, each with what the office handles — inspection, legal support, valuation and promotion.", "Δύο διαδρομές, η καθεμία με όσα αναλαμβάνει το γραφείο — τεχνικός έλεγχος, νομική υποστήριξη, εκτίμηση και προώθηση."], ["Pantazelos Real Estate — buying and selling paths", "Pantazelos Real Estate — διαδρομές αγοράς και πώλησης"], el("gallery-buy-sell.jpg")),
      shot(en("gallery-list-property.jpg"), ["List your property", "Ανάθεση ακινήτου"], ["Owners send their property details for a free valuation.", "Οι ιδιοκτήτες στέλνουν τα στοιχεία του ακινήτου τους για δωρεάν εκτίμηση."], ["Pantazelos Real Estate — list your property form", "Pantazelos Real Estate — φόρμα ανάθεσης ακινήτου"], el("gallery-list-property.jpg")),
      shot(en("gallery-partners.jpg"), ["Partners", "Συνεργάτες"], ["Engineers, legal advisors and notaries — the right person at each step.", "Μηχανικοί, νομικοί σύμβουλοι και συμβολαιογράφοι — ο σωστός άνθρωπος σε κάθε βήμα."], ["Pantazelos Real Estate — partners", "Pantazelos Real Estate — συνεργάτες"], el("gallery-partners.jpg")),
    ],
    mobile: {
      images: [phone(en("home-mobile.jpg"), el("home-mobile.jpg")), phone(en("mobile-portfolio.jpg"), el("mobile-portfolio.jpg")), phone(en("mobile-contact.jpg"), el("mobile-contact.jpg"))],
      alts: [
        L("Pantazelos Real Estate homepage on mobile", "Αρχική της Pantazelos Real Estate σε κινητό"),
        L("Pantazelos Real Estate portfolio on mobile", "Το portfolio της Pantazelos Real Estate στο κινητό"),
        L("Pantazelos Real Estate contact form on mobile", "Η φόρμα επικοινωνίας της Pantazelos Real Estate στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L("From the homepage to the portfolio and the contact form, designed for the phone.", "Από την αρχική ως το portfolio και τη φόρμα επικοινωνίας, σχεδιασμένο για το κινητό."),
    },
  },
  results: { desktop: scores(99, 0.9, 100, 94), mobile: scores(93, 2.3, 100, 90) },
  review: mockReview(
    ["Owner, Pantazelos Real Estate", "Ιδιοκτήτης, Pantazelos Real Estate"],
    "[Mock] Pantazelos Real Estate",
    "[Mock] The client's own Google review appears here, word for word — for example how buyers and sellers now find the office and its partners.",
  ),
};
