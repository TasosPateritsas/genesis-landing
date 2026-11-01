import { asset, delivered, feature, L, phone, review, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/dr-baumann";

export const baumann: Project = {
  slug: "dr-baumann",
  kind: "live",
  name: L("Dr. Baumann Hellas", "Dr. Baumann Hellas"),
  type: L("Eshop", "Eshop"),
  industry: L("Skincare", "Περιποίηση δέρματος"),
  description: L(
    "Skincare eshop with filtered collections and card, PayPal and Viva payments.",
    "Eshop περιποίησης δέρματος με φίλτρα συλλογών και πληρωμές με κάρτα, PayPal και Viva.",
  ),
  stage: "#EAE3D8",
  domain: "dr-baumann.gr",
  liveUrl: L("https://dr-baumann.gr", "https://dr-baumann.gr"),
  desktopImage: `${root}/home-desktop.jpg`,
  mobileImage: `${root}/home-mobile.jpg`,
  image: asset(`${root}/home-desktop.jpg`),
  showcase: {
    desktop: asset(`${root}/home-desktop.jpg`),
    mobile: asset(`${root}/home-mobile.jpg`),
    desktopAlt: L("Dr. Baumann Hellas homepage on desktop", "Αρχική της Dr. Baumann Hellas σε desktop"),
    mobileAlt: L("Dr. Baumann Hellas homepage on mobile", "Αρχική της Dr. Baumann Hellas σε κινητό"),
  },
  intro: L(
    "The Greek eshop for Dr. Baumann bionomic skincare — five product lines, shopping by skin need, and checkout by card, PayPal or bank transfer.",
    "Το ελληνικό eshop για τα βιονομικά καλλυντικά Dr. Baumann — πέντε σειρές προϊόντων, αγορά ανά ανάγκη της επιδερμίδας και πληρωμή με κάρτα, PayPal ή τραπεζική κατάθεση.",
  ),
  client: L("Dr. Baumann Hellas", "Dr. Baumann Hellas"),
  services: delivered,
  year: "2026",
  storyTitle: L("Skincare science, made shoppable.", "Η επιστήμη του δέρματος, σε ένα eshop."),
  storySubtitle: L(
    "An eshop that helps every customer find the right product for their skin.",
    "Ένα eshop που βοηθά κάθε πελάτη να βρει το σωστό προϊόν για την επιδερμίδα του.",
  ),
  brief: L(
    "Dr. Baumann Hellas sells Dr. Baumann bionomic skincare in Greece. They needed an eshop that explains the science behind the products and helps customers find the right one for their skin — across five product lines and dozens of products.",
    "Η Dr. Baumann Hellas φέρνει στην Ελλάδα τα βιονομικά καλλυντικά Dr. Baumann. Χρειαζόταν ένα eshop που εξηγεί την επιστήμη πίσω από τα προϊόντα και βοηθά τον πελάτη να βρει το κατάλληλο για την επιδερμίδα του — σε πέντε σειρές και δεκάδες προϊόντα.",
  ),
  built: [
    feature("search", ["Shop by skin need", "Αγορά ανά ανάγκη επιδερμίδας"], ["A menu by skin type, care area and special needs — like care after 50 and for oncology patients.", "Μενού ανά τύπο επιδερμίδας, περιοχή φροντίδας και ειδικές ανάγκες — όπως φροντίδα μετά τα 50 και για ογκολογικούς ασθενείς."]),
    feature("grid", ["Five product lines", "Πέντε σειρές προϊόντων"], ["A page for each line: Dr. Baumann, SkinIdent, BeauCaire, bionomeSPA and MakeUP.", "Σελίδα για κάθε σειρά: Dr. Baumann, SkinIdent, BeauCaire, bionomeSPA και MakeUP."]),
    feature("filter", ["Filters and sorting", "Φίλτρα και ταξινόμηση"], ["Filter every line by need and product type, with a product count next to each option.", "Φίλτρα σε κάθε σειρά ανά ανάγκη και τύπο προϊόντος, με το πλήθος προϊόντων δίπλα σε κάθε επιλογή."]),
    feature("card", ["Payments", "Πληρωμές"], ["Card through Viva Wallet, PayPal, or bank transfer.", "Κάρτα μέσω Viva Wallet, PayPal ή τραπεζική κατάθεση."]),
    feature("document", ["Product pages", "Σελίδες προϊόντων"], ["Full details for every product: what it does, which skin it is for and how to use it.", "Όλα τα στοιχεία κάθε προϊόντος: τι κάνει, για ποια επιδερμίδα είναι και πώς χρησιμοποιείται."]),
    feature("globe", ["Built for search", "Έτοιμο για τις μηχανές αναζήτησης"], ["Product, breadcrumb and organisation structured data for search results.", "Δομημένα δεδομένα προϊόντος, breadcrumb και επιχείρησης για τα αποτελέσματα αναζήτησης."]),
  ],
  gallery: {
    wide: shot(`${root}/gallery-collection.jpg`, ["Collection pages", "Σελίδες συλλογών"], ["Every line filtered by need and product type, with a product count next to each option.", "Κάθε σειρά με φίλτρα ανά ανάγκη και τύπο προϊόντος, και το πλήθος προϊόντων δίπλα σε κάθε επιλογή."], ["Dr. Baumann Hellas — SkinIdent collection with filters and sorting", "Dr. Baumann Hellas — συλλογή SkinIdent με φίλτρα και ταξινόμηση"]),
    row: [
      shot(`${root}/gallery-line.jpg`, ["Product lines", "Σειρές προϊόντων"], ["Each of the five lines opens with its own hero and description.", "Κάθε μία από τις πέντε σειρές ανοίγει με δικό της hero και περιγραφή."], ["Dr. Baumann Hellas — SkinIdent product line page", "Dr. Baumann Hellas — σελίδα της σειράς SkinIdent"]),
      shot(`${root}/gallery-product.jpg`, ["Product pages", "Σελίδες προϊόντων"], ["What it does, which skin it is for and how to use it — then straight to the basket.", "Τι κάνει, για ποια επιδερμίδα είναι και πώς χρησιμοποιείται — και μετά κατευθείαν στο καλάθι."], ["Dr. Baumann Hellas — product page", "Dr. Baumann Hellas — σελίδα προϊόντος"]),
      shot(`${root}/gallery-oncology.jpg`, ["Oncology care", "Ογκολογική φροντίδα"], ["A dedicated collection with a downloadable medical suitability statement.", "Ξεχωριστή συλλογή με βεβαίωση ιατρικής καταλληλότητας για λήψη."], ["Dr. Baumann Hellas — oncology care collection", "Dr. Baumann Hellas — συλλογή ογκολογικής φροντίδας"]),
    ],
    mobile: {
      images: [phone(`${root}/home-mobile.jpg`), phone(`${root}/mobile-collection.jpg`), phone(`${root}/mobile-product.jpg`)],
      alts: [
        L("Dr. Baumann Hellas mobile homepage", "Αρχική της Dr. Baumann Hellas στο κινητό"),
        L("Dr. Baumann Hellas mobile collection page", "Σελίδα συλλογής της Dr. Baumann Hellas στο κινητό"),
        L("Dr. Baumann Hellas mobile product page", "Σελίδα προϊόντος της Dr. Baumann Hellas στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L("From the homepage to the product, with the basket button always in reach.", "Από την αρχική ως το προϊόν, με το κουμπί του καλαθιού πάντα κοντά."),
    },
  },
  results: { desktop: scores(100, 0.6, 100, 100), mobile: scores(96, 2.8, 100, 100) },
  review: review(
    ["Owner, Dr. Baumann Hellas", "Ιδιοκτήτης, Dr. Baumann Hellas"],
    "[Mock] Dr. Baumann Hellas",
    "[Mock] The client's own Google review appears here, word for word — for example how the new eshop changed the way customers find the right products for their skin.",
  ),
};
