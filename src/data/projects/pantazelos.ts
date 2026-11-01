import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "pantazelos";

export const pantazelos: Project = {
  slug: "pantazelos",
  name: "Pantazelos Real Estate",
  title: same("Pantazelos Real Estate"),
  description: text(
    "Site for a real-estate agency in Skroponeria, covering buying and selling with engineering and legal support.",
    "Site για μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
  ),
  stage: "#1E3440",
  domain: "pantazelosrealestate.gr",
  liveUrl: same("https://www.pantazelosrealestate.gr"),
  intro: text(
    "A site for the real-estate office in Skroponeria, covering buying and selling with engineering and legal support.",
    "Site για το μεσιτικό γραφείο στα Σκροπονέρια, για αγορά και πώληση ακινήτων με υποστήριξη από μηχανικούς και νομικούς.",
  ),
  meta: {
    client: text("Pantazelos Real Estate, Skroponeria", "Pantazelos Real Estate, Σκροπονέρια"),
    whatWeDid: delivered,
    category: text("Website · Real estate", "Website · Ακίνητα"),
    year: "2026",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg", "el-home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
    altDesktop: text(
      "Pantazelos Real Estate homepage on desktop",
      "Αρχική της Pantazelos Real Estate σε desktop",
    ),
    altMobile: text(
      "Pantazelos Real Estate homepage on mobile",
      "Αρχική της Pantazelos Real Estate σε κινητό",
    ),
  },
  project: {
    title: text(
      "Buying and selling, with the paperwork handled.",
      "Αγορά και πώληση, με τη γραφειοκρατία τακτοποιημένη.",
    ),
    subtitle: text(
      "A real-estate office in Skroponeria, with the specialists beside it.",
      "Μεσιτικό γραφείο στα Σκροπονέρια, με τους ειδικούς δίπλα του.",
    ),
    brief: text(
      "Pantazelos Real Estate works from Skroponeria. They needed a site for buying and selling, and a clear way to reach the office and its engineering and legal support.",
      "Η Pantazelos Real Estate έχει έδρα τα Σκροπονέρια. Χρειαζόταν ένα site για αγορά και πώληση, και έναν σαφή τρόπο να φτάνει κάποιος στο γραφείο και στην υποστήριξη από μηχανικούς και νομικούς.",
    ),
    features: [
      feature(
        "building",
        text("Buy and sell", "Αγορά και πώληση"),
        text(
          "Two clear paths, buying or selling, each with what the office takes care of.",
          "Δύο ξεκάθαρες διαδρομές, αγορά ή πώληση, η καθεμία με όσα αναλαμβάνει το γραφείο.",
        ),
      ),
      feature(
        "layout",
        text("Services page", "Σελίδα υπηρεσιών"),
        text(
          "Purchase, sale, valuation, technical inspection, legal support and notarial coverage, explained.",
          "Αγορά, πώληση, εκτίμηση, τεχνικός έλεγχος, νομική υποστήριξη και συμβολαιογραφική κάλυψη, εξηγημένα.",
        ),
      ),
      feature(
        "grid",
        text("Portfolio", "Portfolio"),
        text(
          "Recent sales filtered by type and year, each with its location.",
          "Πρόσφατες πωλήσεις με φίλτρα ανά τύπο και έτος, η καθεμία με την τοποθεσία της.",
        ),
      ),
      feature(
        "document",
        text("List your property", "Ανάθεση ακινήτου"),
        text(
          "A form for owners: property type, area, size and desired price.",
          "Φόρμα για ιδιοκτήτες: τύπος ακινήτου, περιοχή, εμβαδόν και επιθυμητή τιμή.",
        ),
      ),
      feature(
        "globe",
        text("Partners", "Συνεργάτες"),
        text(
          "Engineers, legal advisors and notaries for every step of the transaction.",
          "Μηχανικοί, νομικοί σύμβουλοι και συμβολαιογράφοι για κάθε βήμα της αγοραπωλησίας.",
        ),
      ),
      feature(
        "envelope",
        text("Contact form", "Φόρμα επικοινωνίας"),
        text(
          "Buy or sell enquiries, with the office hours and a map.",
          "Ερωτήματα για αγορά ή πώληση, με το ωράριο του γραφείου και χάρτη.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-buy-sell.jpg", "el-gallery-buy-sell.jpg"),
      text("Buy and sell", "Αγορά και πώληση"),
      text(
        "Two paths, each with what the office handles — inspection, legal support, valuation and promotion.",
        "Δύο διαδρομές, η καθεμία με όσα αναλαμβάνει το γραφείο — τεχνικός έλεγχος, νομική υποστήριξη, εκτίμηση και προώθηση.",
      ),
      text(
        "Pantazelos Real Estate — buying and selling paths",
        "Pantazelos Real Estate — διαδρομές αγοράς και πώλησης",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-portfolio.jpg", "el-gallery-portfolio.jpg"),
        text("Portfolio", "Portfolio"),
        text(
          "Recent sales, filtered by type and year.",
          "Πρόσφατες πωλήσεις, με φίλτρα ανά τύπο και έτος.",
        ),
        text(
          "Pantazelos Real Estate — portfolio of recent sales",
          "Pantazelos Real Estate — portfolio πρόσφατων πωλήσεων",
        ),
      ),
      shot(
        file(folder, "gallery-list-property.jpg", "el-gallery-list-property.jpg"),
        text("List your property", "Ανάθεση ακινήτου"),
        text(
          "Owners send their property details for a free valuation.",
          "Οι ιδιοκτήτες στέλνουν τα στοιχεία του ακινήτου τους για δωρεάν εκτίμηση.",
        ),
        text(
          "Pantazelos Real Estate — list your property form",
          "Pantazelos Real Estate — φόρμα ανάθεσης ακινήτου",
        ),
      ),
      shot(
        file(folder, "gallery-partners.jpg", "el-gallery-partners.jpg"),
        text("Partners", "Συνεργάτες"),
        text(
          "Engineers, legal advisors and notaries — the right person at each step.",
          "Μηχανικοί, νομικοί σύμβουλοι και συμβολαιογράφοι — ο σωστός άνθρωπος σε κάθε βήμα.",
        ),
        text("Pantazelos Real Estate — partners", "Pantazelos Real Estate — συνεργάτες"),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
        file(folder, "mobile-portfolio.jpg", "el-mobile-portfolio.jpg"),
        file(folder, "mobile-contact.jpg", "el-mobile-contact.jpg"),
      ],
      alts: [
        text("Pantazelos Real Estate homepage on mobile", "Αρχική της Pantazelos Real Estate σε κινητό"),
        text("Pantazelos Real Estate portfolio on a phone", "Το portfolio της Pantazelos Real Estate στο κινητό"),
        text(
          "Pantazelos Real Estate contact form on a phone",
          "Η φόρμα επικοινωνίας της Pantazelos Real Estate στο κινητό",
        ),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to the portfolio and the contact form, designed for the phone.",
        "Από την αρχική ως το portfolio και τη φόρμα επικοινωνίας, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 99, lcp: 0.9, seo: 100, accessibility: 94 },
    mobile: { performance: 93, lcp: 2.3, seo: 100, accessibility: 90 },
  },
  review: {
    kind: "mock",
    role: text("Owner, Pantazelos Real Estate", "Ιδιοκτήτης, Pantazelos Real Estate"),
    name: "[Mock]",
    quote: same(
      "[Mock] The client's own Google review appears here, word for word — for example how buyers and sellers now find the office and its partners.",
    ),
  },
};
