import { asset, delivered, feature, L, phone, review, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/techne";
const el = (file: string) => `${root}/el-${file}`;
const en = (file: string) => `${root}/${file}`;

export const techne: Project = {
  slug: "techne",
  kind: "live",
  name: L("Techne.", "Techne."),
  metaTitle: L(
    "Techne: Architecture Studio Website, Athens",
    "Techne: site αρχιτεκτονικού γραφείου, Αθήνα",
  ),
  type: L("Website", "Website"),
  industry: L("Architecture", "Αρχιτεκτονική"),
  description: L(
    "Bilingual site for an Athens design & build firm, with services, project portfolio and upcoming developments.",
    "Δίγλωσσο site για γραφείο design & build στην Αθήνα, με υπηρεσίες, portfolio έργων και upcoming developments.",
  ),
  stage: "#3A0D0D",
  domain: "technebuild.com",
  liveUrl: L("https://technebuild.com", "https://technebuild.com"),
  desktopImage: en("home-desktop.jpg"),
  mobileImage: en("home-mobile.jpg"),
  image: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
  showcase: {
    desktop: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
    mobile: asset(en("home-mobile.jpg"), el("home-mobile.jpg")),
    desktopAlt: L("Techne. homepage on desktop", "Αρχική της Techne. σε desktop"),
    mobileAlt: L("Techne. homepage on mobile", "Αρχική της Techne. σε κινητό"),
  },
  intro: L(
    "A bilingual site for an Athens design and build studio, presenting services, built work and developments still to come.",
    "Δίγλωσσο site για ένα γραφείο μελέτης και κατασκευής στην Αθήνα, με τις υπηρεσίες του, τα έργα του και όσα έρχονται.",
  ),
  client: L("Techne., Athens", "Techne., Αθήνα"),
  services: delivered,
  year: "2026",
  storyTitle: L("A studio, presented in full.", "Ένα γραφείο, παρουσιασμένο πλήρως."),
  storySubtitle: L(
    "Services, built work and upcoming developments for an Athens studio.",
    "Υπηρεσίες, ολοκληρωμένα έργα και όσα έρχονται, για ένα γραφείο στην Αθήνα.",
  ),
  brief: L(
    "Techne. is an Athens design and build firm. They needed a bilingual site that explains the services, shows the project portfolio and points to developments still ahead.",
    "Η Techne. είναι γραφείο μελέτης και κατασκευής στην Αθήνα. Χρειαζόταν ένα δίγλωσσο site που εξηγεί τις υπηρεσίες, παρουσιάζει τα έργα της και δείχνει όσα έρχονται.",
  ),
  built: [
    feature("grid", ["Four service pages", "Τέσσερις σελίδες υπηρεσιών"], ["Permits and design, engineering, project management and construction, and property development — each with its own page.", "Άδειες και μελέτη, τεχνικές υπηρεσίες, διαχείριση έργου και κατασκευή, και ανάπτυξη ακινήτων — καθεμία με δική της σελίδα."]),
    feature("grid", ["Project portfolio", "Portfolio έργων"], ["Indicative projects, filtered by category — from architectural design and permits to interior design and renovations.", "Ενδεικτικά έργα με φίλτρα ανά κατηγορία — από αρχιτεκτονική μελέτη και άδειες ως εσωτερικό σχεδιασμό και ανακαινίσεις."]),
    feature("document", ["Project pages", "Σελίδες έργων"], ["Every project with its location, budget, size and status, and a photo gallery.", "Κάθε έργο με τοποθεσία, προϋπολογισμό, εμβαδόν και κατάσταση, και φωτογραφίες."]),
    feature("building", ["Upcoming developments", "Επόμενα έργα"], ["A homepage slider of the developments still ahead, from Holargos to Kythira.", "Slider στην αρχική με τα έργα που έρχονται, από τον Χολαργό ως τα Κύθηρα."]),
    feature("mail", ["Contact form", "Φόρμα επικοινωνίας"], ["Visitors pick the service they need and send their project details.", "Ο επισκέπτης διαλέγει την υπηρεσία που χρειάζεται και στέλνει τα στοιχεία του έργου του."]),
    feature("globe", ["Two languages", "Δύο γλώσσες"], ["The full site in English and Greek.", "Όλο το site στα αγγλικά και στα ελληνικά."]),
  ],
  gallery: {
    wide: shot(en("gallery-portfolio.jpg"), ["Project portfolio", "Portfolio έργων"], ["Indicative projects, filtered by category — each card with its location, size and type of work.", "Ενδεικτικά έργα με φίλτρα ανά κατηγορία — κάθε κάρτα με τοποθεσία, εμβαδόν και είδος εργασιών."], ["Techne. — project portfolio with category filters", "Techne. — portfolio έργων με φίλτρα κατηγοριών"], el("gallery-portfolio.jpg")),
    row: [
      shot(en("gallery-service.jpg"), ["Services", "Υπηρεσίες"], ["Each service explained: why it is needed, how it works and when it applies.", "Κάθε υπηρεσία εξηγημένη: γιατί χρειάζεται, πώς γίνεται και πότε ισχύει."], ["Techne. — permits, design and concept service page", "Techne. — σελίδα υπηρεσίας Άδειες, μελέτη και σχεδιασμός"], el("gallery-service.jpg")),
      shot(en("gallery-project.jpg"), ["Project pages", "Σελίδες έργων"], ["Location, budget, size and status, then the photos of the finished work.", "Τοποθεσία, προϋπολογισμός, εμβαδόν και κατάσταση, και μετά οι φωτογραφίες του έργου."], ["Techne. — Kallithea apartment project page", "Techne. — σελίδα έργου διαμέρισμα στην Καλλιθέα"], el("gallery-project.jpg")),
      shot(en("gallery-developments.jpg"), ["Upcoming developments", "Επόμενα έργα"], ["New builds and villas still ahead, from Holargos to Kythira.", "Νέες κατασκευές και βίλες που έρχονται, από τον Χολαργό ως τα Κύθηρα."], ["Techne. — upcoming developments slider", "Techne. — slider με τα επόμενα έργα"], el("gallery-developments.jpg")),
    ],
    mobile: {
      images: [phone(en("home-mobile.jpg"), el("home-mobile.jpg")), phone(en("mobile-portfolio.jpg"), el("mobile-portfolio.jpg")), phone(en("mobile-project.jpg"), el("mobile-project.jpg"))],
      alts: [
        L("Techne. homepage on mobile", "Αρχική της Techne. σε κινητό"),
        L("Techne. project portfolio on mobile", "Portfolio έργων της Techne. στο κινητό"),
        L("Techne. project page on mobile", "Σελίδα έργου της Techne. στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L("From the homepage to every project, designed for the phone.", "Από την αρχική ως κάθε έργο, σχεδιασμένο για το κινητό."),
    },
  },
  results: { desktop: scores(90, 1.5, 92, 88), mobile: scores(64, 6.5, 92, 87) },
  review: review(
    ["Founder, Techne.", "Ιδρυτής, Techne."],
    "[Mock] Techne.",
    "[Mock] The client's own Google review appears here, word for word — for example how the new site presents the studio's services and built work.",
  ),
};
