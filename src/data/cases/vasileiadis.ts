import { asset, delivered, feature, L, mockReview, phone, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/vasileiadis";
const el = (file: string) => `${root}/el-${file}`;
const en = (file: string) => `${root}/${file}`;

export const vasileiadis: Project = {
  slug: "vasileiadis",
  kind: "live",
  name: L("Vasileiadis Drain Cleaning", "Αποφράξεις Βασιλειάδης"),
  type: L("Website", "Website"),
  industry: L("Local services", "Τοπικές υπηρεσίες"),
  description: L(
    "24/7 drain-clearing service across Attica, built for a fast phone call and local search.",
    "Αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο για γρήγορο τηλέφωνο και τοπική αναζήτηση.",
  ),
  stage: "#0F2A3D",
  domain: "apofraxeisvasileiadis.gr",
  liveUrl: L("https://www.apofraxeisvasileiadis.gr", "https://www.apofraxeisvasileiadis.gr"),
  desktopImage: en("home-desktop.jpg"),
  mobileImage: en("home-mobile.jpg"),
  image: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
  showcase: {
    desktop: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
    mobile: asset(en("home-mobile.jpg"), el("home-mobile.jpg")),
    desktopAlt: L("Vasileiadis Drain Cleaning homepage on desktop", "Αρχική των Αποφράξεων Βασιλειάδη σε desktop"),
    mobileAlt: L("Vasileiadis Drain Cleaning homepage on mobile", "Αρχική των Αποφράξεων Βασιλειάδη σε κινητό"),
  },
  intro: L(
    "A site for a 24/7 drain-clearing service across Attica, built so a visitor can call straight away.",
    "Site για αποφράξεις 24/7 σε όλη την Αττική, φτιαγμένο ώστε ο επισκέπτης να καλεί αμέσως.",
  ),
  meta: {
    title: L(
      "Vasileiadis Drain Cleaning: 24/7 Website, Attica | Genesis",
      "Αποφράξεις Βασιλειάδης: site 24/7, Αττική | Genesis",
    ),
    description: L(
      "A 24/7 drain-clearing site for all of Attica, in Greek, English and Russian, with the right phone number for the time of day on every page.",
      "Site για αποφράξεις 24/7 σε όλη την Αττική, σε ελληνικά, αγγλικά και ρωσικά, με το σωστό τηλέφωνο ανάλογα με την ώρα σε κάθε σελίδα.",
    ),
    share: L("24/7 website, Attica", "site 24/7, Αττική"),
  },
  client: L("Vasileiadis Drain Cleaning, Attica", "Αποφράξεις Βασιλειάδης, Αττική"),
  services: delivered,
  year: "2025",
  storyTitle: L("A phone call, any hour.", "Ένα τηλέφωνο, οποιαδήποτε ώρα."),
  storySubtitle: L(
    "Drain clearing across Attica, built around the call.",
    "Αποφράξεις σε όλη την Αττική, χτισμένες γύρω από το τηλέφωνο.",
  ),
  brief: L(
    "Vasileiadis Drain Cleaning covers Attica day and night. They needed a site that makes the right phone number obvious and shows up when someone nearby searches.",
    "Οι Αποφράξεις Βασιλειάδης καλύπτουν την Αττική μέρα και νύχτα. Χρειάζονταν ένα site που κάνει το σωστό τηλέφωνο προφανές και εμφανίζεται όταν κάποιος κοντά ψάχνει.",
  ),
  built: [
    feature("document", ["Day and night numbers", "Τηλέφωνα ημέρας και νύχτας"], ["The right number for the time of day is suggested — day, night or landline — with a call button on every page.", "Προτείνεται το σωστό τηλέφωνο για την ώρα — ημέρας, νύχτας ή σταθερό — με κουμπί κλήσης σε κάθε σελίδα."]),
    feature("grid", ["Service pages", "Σελίδες υπηρεσιών"], ["Eight services, each with its own page: what is handled and how the job is done, in three steps.", "Οκτώ υπηρεσίες, η καθεμία με δική της σελίδα: τι αναλαμβάνουν και πώς γίνεται η δουλειά, σε τρία βήματα."]),
    feature("grid", ["Equipment", "Μηχανήματα"], ["High-pressure machines, inspection cameras, pumps and tanker trucks, explained.", "Μηχανήματα υψηλής πίεσης, κάμερες επιθεώρησης, αντλίες και βυτιοφόρα, εξηγημένα."]),
    feature("building", ["All of Attica", "Όλη η Αττική"], ["24/7 coverage across Attica, with bases in Kallithea and Chalandri and a link to Google Maps.", "Κάλυψη 24/7 σε όλη την Αττική, με βάσεις σε Καλλιθέα και Χαλάνδρι και σύνδεσμο στο Google Maps."]),
    feature("mail", ["Message form", "Φόρμα μηνύματος"], ["Name, phone, email and a short note, if a call is not the first step.", "Όνομα, τηλέφωνο, email και σύντομο μήνυμα, αν η κλήση δεν είναι το πρώτο βήμα."]),
    feature("globe", ["Three languages", "Τρεις γλώσσες"], ["The full site in Greek, English and Russian.", "Όλο το site στα ελληνικά, στα αγγλικά και στα ρωσικά."]),
  ],
  gallery: {
    wide: shot(en("gallery-services.jpg"), ["Services", "Υπηρεσίες"], ["Eight services, each with a photo and a one-line summary.", "Οκτώ υπηρεσίες, η καθεμία με φωτογραφία και μια σύντομη περιγραφή."], ["Vasileiadis Drain Cleaning — services", "Αποφράξεις Βασιλειάδης — οι υπηρεσίες"], el("gallery-services.jpg")),
    row: [
      shot(en("gallery-contact.jpg"), ["Contact", "Επικοινωνία"], ["Day, night and landline numbers, with the one to call right now highlighted, beside the message form.", "Τηλέφωνα ημέρας, νύχτας και σταθερό, με τονισμένο αυτό που καλείτε τώρα, δίπλα στη φόρμα μηνύματος."], ["Vasileiadis Drain Cleaning — phone numbers and contact form", "Αποφράξεις Βασιλειάδης — τηλέφωνα και φόρμα επικοινωνίας"], el("gallery-contact.jpg")),
      shot(en("gallery-septic.jpg"), ["Septic tank emptying", "Εκκενώσεις βόθρων"], ["What is handled, how it works and a call button, on one page.", "Τι αναλαμβάνουν, πώς λειτουργεί και κουμπί κλήσης, σε μία σελίδα."], ["Vasileiadis Drain Cleaning — septic tank emptying page", "Αποφράξεις Βασιλειάδης — σελίδα εκκένωσης βόθρων"], el("gallery-septic.jpg")),
      shot(en("gallery-equipment.jpg"), ["Equipment", "Μηχανήματα"], ["The machines behind every job, from high-pressure units to inspection cameras.", "Τα μηχανήματα πίσω από κάθε δουλειά, από μονάδες υψηλής πίεσης ως κάμερες επιθεώρησης."], ["Vasileiadis Drain Cleaning — equipment", "Αποφράξεις Βασιλειάδης — μηχανήματα"], el("gallery-equipment.jpg")),
    ],
    mobile: {
      images: [phone(en("home-mobile.jpg"), el("home-mobile.jpg")), phone(en("mobile-service.jpg"), el("mobile-service.jpg")), phone(en("mobile-contact.jpg"), el("mobile-contact.jpg"))],
      alts: [
        L("Vasileiadis Drain Cleaning homepage on mobile", "Αρχική των Αποφράξεων Βασιλειάδη σε κινητό"),
        L("Vasileiadis Drain Cleaning septic tank page on mobile", "Η σελίδα εκκένωσης βόθρων στο κινητό"),
        L("Vasileiadis Drain Cleaning phone numbers on mobile", "Τα τηλέφωνα επικοινωνίας στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L(
        "From the homepage to a service page and the numbers to call, designed for the phone.",
        "Από την αρχική ως μια σελίδα υπηρεσίας και τα τηλέφωνα για κλήση, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: { desktop: scores(97, 1.3, 100, 94), mobile: scores(95, 2.9, 100, 87) },
  review: mockReview(
    ["Owner, Vasileiadis Drain Cleaning", "Ιδιοκτήτης, Αποφράξεις Βασιλειάδης"],
    "[Mock] Vasileiadis Drain Cleaning",
    "[Mock] The client's own Google review appears here, word for word — for example how customers now find the right number at any hour.",
  ),
};
