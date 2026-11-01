import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "dr-baumann";

export const baumann: Project = {
  slug: "dr-baumann",
  name: "Dr. Baumann Hellas",
  title: same("Dr. Baumann Hellas"),
  description: text(
    "Skincare eshop with filtered collections and card, PayPal and Viva payments.",
    "Eshop περιποίησης δέρματος με φίλτρα συλλογών και πληρωμές με κάρτα, PayPal και Viva.",
  ),
  stage: "#EAE3D8",
  domain: "dr-baumann.gr",
  liveUrl: same("https://dr-baumann.gr"),
  intro: text(
    "The Greek eshop for Dr. Baumann bionomic skincare — five product lines, shopping by skin need, and checkout by card, PayPal or bank transfer.",
    "Το ελληνικό eshop για τα βιονομικά καλλυντικά Dr. Baumann — πέντε σειρές προϊόντων, αγορά ανά ανάγκη της επιδερμίδας και πληρωμή με κάρτα, PayPal ή τραπεζική κατάθεση.",
  ),
  meta: {
    client: same("Dr. Baumann Hellas"),
    whatWeDid: delivered,
    category: text("Eshop · Skincare", "Eshop · Περιποίηση δέρματος"),
    year: "2026",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg"),
    altDesktop: text(
      "Dr. Baumann Hellas homepage on desktop",
      "Αρχική της Dr. Baumann Hellas σε desktop",
    ),
    altMobile: text("Dr. Baumann Hellas homepage on mobile", "Αρχική της Dr. Baumann Hellas σε κινητό"),
  },
  project: {
    title: text("Skincare science, made shoppable.", "Η επιστήμη του δέρματος, σε ένα eshop."),
    subtitle: text(
      "An eshop that helps every customer find the right product for their skin.",
      "Ένα eshop που βοηθά κάθε πελάτη να βρει το σωστό προϊόν για την επιδερμίδα του.",
    ),
    brief: text(
      "Dr. Baumann Hellas sells Dr. Baumann bionomic skincare in Greece. They needed an eshop that explains the science behind the products and helps customers find the right one for their skin — across five product lines and dozens of products.",
      "Η Dr. Baumann Hellas φέρνει στην Ελλάδα τα βιονομικά καλλυντικά Dr. Baumann. Χρειαζόταν ένα eshop που εξηγεί την επιστήμη πίσω από τα προϊόντα και βοηθά τον πελάτη να βρει το κατάλληλο για την επιδερμίδα του — σε πέντε σειρές και δεκάδες προϊόντα.",
    ),
    features: [
      feature(
        "filter",
        text("Shop by skin need", "Αγορά ανά ανάγκη επιδερμίδας"),
        text(
          "A menu by skin type, care area and special needs — like care after 50 and for oncology patients.",
          "Μενού ανά τύπο επιδερμίδας, περιοχή φροντίδας και ειδικές ανάγκες — όπως φροντίδα μετά τα 50 και για ογκολογικούς ασθενείς.",
        ),
      ),
      feature(
        "layout",
        text("Five product lines", "Πέντε σειρές προϊόντων"),
        text(
          "A page for each line: Dr. Baumann, SkinIdent, BeauCaire, bionomeSPA and MakeUP.",
          "Σελίδα για κάθε σειρά: Dr. Baumann, SkinIdent, BeauCaire, bionomeSPA και MakeUP.",
        ),
      ),
      feature(
        "grid",
        text("Filters and sorting", "Φίλτρα και ταξινόμηση"),
        text(
          "Filter every line by need and product type, with a product count next to each option.",
          "Φίλτρα σε κάθε σειρά ανά ανάγκη και τύπο προϊόντος, με το πλήθος προϊόντων δίπλα σε κάθε επιλογή.",
        ),
      ),
      feature(
        "card",
        text("Payments", "Πληρωμές"),
        text(
          "Card through Viva Wallet, PayPal, or bank transfer.",
          "Κάρτα μέσω Viva Wallet, PayPal ή τραπεζική κατάθεση.",
        ),
      ),
      feature(
        "document",
        text("Product pages", "Σελίδες προϊόντων"),
        text(
          "Full details for every product: what it does, which skin it is for and how to use it.",
          "Όλα τα στοιχεία κάθε προϊόντος: τι κάνει, για ποια επιδερμίδα είναι και πώς χρησιμοποιείται.",
        ),
      ),
      feature(
        "search",
        text("Built for search", "Έτοιμο για τις μηχανές αναζήτησης"),
        text(
          "Product, breadcrumb and organisation structured data for search results.",
          "Δομημένα δεδομένα προϊόντος, breadcrumb και επιχείρησης για τα αποτελέσματα αναζήτησης.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-collection.jpg"),
      text("Collection pages", "Σελίδες συλλογών"),
      text(
        "Every line filtered by need and product type, with a product count next to each option.",
        "Κάθε σειρά με φίλτρα ανά ανάγκη και τύπο προϊόντος, και το πλήθος προϊόντων δίπλα σε κάθε επιλογή.",
      ),
      text(
        "Dr. Baumann Hellas — SkinIdent collection with filters and sorting",
        "Dr. Baumann Hellas — συλλογή SkinIdent με φίλτρα και ταξινόμηση",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-line.jpg"),
        text("Product lines", "Σειρές προϊόντων"),
        text(
          "Each of the five lines opens with its own hero and description.",
          "Κάθε μία από τις πέντε σειρές ανοίγει με δικό της hero και περιγραφή.",
        ),
        text(
          "Dr. Baumann Hellas — SkinIdent product line page",
          "Dr. Baumann Hellas — σελίδα της σειράς SkinIdent",
        ),
      ),
      shot(
        file(folder, "gallery-product.jpg"),
        text("Product pages", "Σελίδες προϊόντων"),
        text(
          "What it does, which skin it is for and how to use it — then straight to the basket.",
          "Τι κάνει, για ποια επιδερμίδα είναι και πώς χρησιμοποιείται — και μετά κατευθείαν στο καλάθι.",
        ),
        text("Dr. Baumann Hellas — product page", "Dr. Baumann Hellas — σελίδα προϊόντος"),
      ),
      shot(
        file(folder, "gallery-oncology.jpg"),
        text("Oncology care", "Ογκολογική φροντίδα"),
        text(
          "A dedicated collection with a downloadable medical suitability statement.",
          "Ξεχωριστή συλλογή με βεβαίωση ιατρικής καταλληλότητας για λήψη.",
        ),
        text(
          "Dr. Baumann Hellas — oncology care collection",
          "Dr. Baumann Hellas — συλλογή ογκολογικής φροντίδας",
        ),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg"),
        file(folder, "mobile-collection.jpg"),
        file(folder, "mobile-product.jpg"),
      ],
      alts: [
        text("Dr. Baumann Hellas homepage on mobile", "Αρχική της Dr. Baumann Hellas σε κινητό"),
        text("Dr. Baumann Hellas mobile collection page", "Σελίδα συλλογής της Dr. Baumann Hellas στο κινητό"),
        text("Dr. Baumann Hellas mobile product page", "Σελίδα προϊόντος της Dr. Baumann Hellas στο κινητό"),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to the product, with the basket button always in reach.",
        "Από την αρχική ως το προϊόν, με το κουμπί του καλαθιού πάντα κοντά.",
      ),
    },
  },
  results: {
    desktop: { performance: 100, lcp: 0.6, seo: 100, accessibility: 100 },
    mobile: { performance: 96, lcp: 2.8, seo: 100, accessibility: 100 },
  },
  review: {
    kind: "mock",
    role: text("Owner, Dr. Baumann Hellas", "Ιδιοκτήτης, Dr. Baumann Hellas"),
    name: "[Mock]",
    quote: same(
      "[Mock] The client's own Google review appears here, word for word — for example how the new eshop changed the way customers find the right products for their skin.",
    ),
  },
};
