import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "vasileiadis";

export const vasileiadis: Project = {
  slug: "vasileiadis",
  name: "Αποφράξεις Βασιλειάδης",
  title: text("Vasileiadis Drain Cleaning", "Αποφράξεις Βασιλειάδης"),
  description: text(
    "24/7 drain-clearing service across Attica, built for a fast phone call and local search.",
    "Αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο για γρήγορο τηλέφωνο και τοπική αναζήτηση.",
  ),
  stage: "#0F2A3D",
  domain: "apofraxeisvasileiadis.gr",
  liveUrl: same("https://www.apofraxeisvasileiadis.gr"),
  intro: text(
    "A site for a 24/7 drain-clearing service across Attica, built so a visitor can call straight away.",
    "Site για αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο ώστε ο επισκέπτης να καλεί αμέσως.",
  ),
  meta: {
    client: text("Vasileiadis Drain Cleaning, Attica", "Αποφράξεις Βασιλειάδης, Αττική"),
    whatWeDid: delivered,
    category: text("Website · Local services", "Website · Τοπικές υπηρεσίες"),
    year: "2025",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg", "el-home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
    altDesktop: text(
      "Vasileiadis Drain Cleaning homepage on desktop",
      "Αρχική των Αποφράξεων Βασιλειάδη σε desktop",
    ),
    altMobile: text(
      "Vasileiadis Drain Cleaning homepage on mobile",
      "Αρχική των Αποφράξεων Βασιλειάδη σε κινητό",
    ),
  },
  project: {
    title: text("A phone call, any hour.", "Ένα τηλέφωνο, οποιαδήποτε ώρα."),
    subtitle: text(
      "Drain clearing across Attica, built around the call.",
      "Αποφράξεις σε όλη την Αττική, χτισμένες γύρω από το τηλέφωνο.",
    ),
    brief: text(
      "Vasileiadis Drain Cleaning covers Attica day and night. They needed a site that makes the right phone number obvious and shows up when someone nearby searches.",
      "Οι Αποφράξεις Βασιλειάδης καλύπτουν την Αττική μέρα και νύχτα. Χρειάζονταν ένα site που κάνει το σωστό τηλέφωνο προφανές και εμφανίζεται όταν κάποιος κοντά ψάχνει.",
    ),
    features: [
      feature(
        "document",
        text("Day and night numbers", "Τηλέφωνα ημέρας και νύχτας"),
        text(
          "The right number for the time of day is suggested — day, night or landline — with a call button on every page.",
          "Προτείνεται το σωστό τηλέφωνο για την ώρα — ημέρας, νύχτας ή σταθερό — με κουμπί κλήσης σε κάθε σελίδα.",
        ),
      ),
      feature(
        "layout",
        text("Service pages", "Σελίδες υπηρεσιών"),
        text(
          "Eight services, each with its own page: what is handled and how the job is done, in three steps.",
          "Οκτώ υπηρεσίες, η καθεμία με δική της σελίδα: τι αναλαμβάνουν και πώς γίνεται η δουλειά, σε τρία βήματα.",
        ),
      ),
      feature(
        "grid",
        text("Equipment", "Μηχανήματα"),
        text(
          "High-pressure machines, inspection cameras, pumps and tanker trucks, explained.",
          "Μηχανήματα υψηλής πίεσης, κάμερες επιθεώρησης, αντλίες και βυτιοφόρα, εξηγημένα.",
        ),
      ),
      feature(
        "building",
        text("All of Attica", "Όλη η Αττική"),
        text(
          "24/7 coverage across Attica, with bases in Kallithea and Chalandri and a link to Google Maps.",
          "Κάλυψη 24/7 σε όλη την Αττική, με βάσεις σε Καλλιθέα και Χαλάνδρι και σύνδεσμο στο Google Maps.",
        ),
      ),
      feature(
        "envelope",
        text("Message form", "Φόρμα μηνύματος"),
        text(
          "Name, phone, email and a short note, if a call is not the first step.",
          "Όνομα, τηλέφωνο, email και σύντομο μήνυμα, αν η κλήση δεν είναι το πρώτο βήμα.",
        ),
      ),
      feature(
        "globe",
        text("Three languages", "Τρεις γλώσσες"),
        text(
          "The full site in Greek, English and Russian.",
          "Όλο το site στα ελληνικά, στα αγγλικά και στα ρωσικά.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-contact.jpg", "el-gallery-contact.jpg"),
      text("Contact", "Επικοινωνία"),
      text(
        "Day, night and landline numbers, with the one to call right now highlighted, beside the message form.",
        "Τηλέφωνα ημέρας, νύχτας και σταθερό, με τονισμένο αυτό που καλείτε τώρα, δίπλα στη φόρμα μηνύματος.",
      ),
      text(
        "Vasileiadis Drain Cleaning — phone numbers and message form",
        "Αποφράξεις Βασιλειάδης — τηλέφωνα και φόρμα επικοινωνίας",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-services.jpg", "el-gallery-services.jpg"),
        text("Services", "Υπηρεσίες"),
        text(
          "Eight services, each with a photo and a one-line summary.",
          "Οκτώ υπηρεσίες, η καθεμία με φωτογραφία και μια σύντομη περιγραφή.",
        ),
        text("Vasileiadis Drain Cleaning — services", "Αποφράξεις Βασιλειάδης — οι υπηρεσίες"),
      ),
      shot(
        file(folder, "gallery-septic.jpg", "el-gallery-septic.jpg"),
        text("Septic tank emptying", "Εκκενώσεις βόθρων"),
        text(
          "What is handled, how it works and a call button, on one page.",
          "Τι αναλαμβάνουν, πώς λειτουργεί και κουμπί κλήσης, σε μία σελίδα.",
        ),
        text(
          "Vasileiadis Drain Cleaning — septic tank emptying page",
          "Αποφράξεις Βασιλειάδης — σελίδα εκκένωσης βόθρων",
        ),
      ),
      shot(
        file(folder, "gallery-equipment.jpg", "el-gallery-equipment.jpg"),
        text("Equipment", "Μηχανήματα"),
        text(
          "The machines behind every job, from high-pressure units to inspection cameras.",
          "Τα μηχανήματα πίσω από κάθε δουλειά, από μονάδες υψηλής πίεσης ως κάμερες επιθεώρησης.",
        ),
        text("Vasileiadis Drain Cleaning — equipment", "Αποφράξεις Βασιλειάδης — μηχανήματα"),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
        file(folder, "mobile-service.jpg", "el-mobile-service.jpg"),
        file(folder, "mobile-contact.jpg", "el-mobile-contact.jpg"),
      ],
      alts: [
        text(
          "Vasileiadis Drain Cleaning homepage on mobile",
          "Αρχική των Αποφράξεων Βασιλειάδη σε κινητό",
        ),
        text(
          "Vasileiadis Drain Cleaning septic tank page on a phone",
          "Η σελίδα εκκένωσης βόθρων στο κινητό",
        ),
        text(
          "Vasileiadis Drain Cleaning contact numbers on a phone",
          "Τα τηλέφωνα επικοινωνίας στο κινητό",
        ),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to a service page and the numbers to call, designed for the phone.",
        "Από την αρχική ως μια σελίδα υπηρεσίας και τα τηλέφωνα για κλήση, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 97, lcp: 1.3, seo: 100, accessibility: 94 },
    mobile: { performance: 95, lcp: 2.9, seo: 100, accessibility: 87 },
  },
  review: {
    kind: "mock",
    role: text("Owner, Vasileiadis Drain Cleaning", "Ιδιοκτήτης, Αποφράξεις Βασιλειάδης"),
    name: "[Mock]",
    quote: same(
      "[Mock] The client's own Google review appears here, word for word — for example how customers now find the right number at any hour.",
    ),
  },
};
