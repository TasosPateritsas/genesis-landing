import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "techne";

export const techne: Project = {
  slug: "techne",
  name: "Techne.",
  title: same("Techne."),
  description: text(
    "Bilingual site for an Athens design & build firm, with services, project portfolio and upcoming developments.",
    "Δίγλωσσο site για γραφείο design & build στην Αθήνα, με υπηρεσίες, portfolio έργων και upcoming developments.",
  ),
  stage: "#3A0D0D",
  domain: "technebuild.com",
  liveUrl: same("https://technebuild.com"),
  intro: text(
    "A bilingual site for an Athens design and build studio, presenting services, built work and developments still to come.",
    "Δίγλωσσο site για ένα γραφείο μελέτης και κατασκευής στην Αθήνα, με τις υπηρεσίες του, τα έργα του και όσα έρχονται.",
  ),
  meta: {
    client: text("Techne., Athens", "Techne., Αθήνα"),
    whatWeDid: delivered,
    category: text("Website · Architecture", "Website · Αρχιτεκτονική"),
    year: "2026",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg", "el-home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
    altDesktop: text("Techne. homepage on desktop", "Αρχική της Techne. σε desktop"),
    altMobile: text("Techne. homepage on mobile", "Αρχική της Techne. σε κινητό"),
  },
  project: {
    title: text("A studio, presented in full.", "Ένα γραφείο, παρουσιασμένο πλήρως."),
    subtitle: text(
      "Services, built work and upcoming developments for an Athens studio.",
      "Υπηρεσίες, ολοκληρωμένα έργα και όσα έρχονται, για ένα γραφείο στην Αθήνα.",
    ),
    brief: text(
      "Techne. is an Athens design and build firm. They needed a bilingual site that explains the services, shows the project portfolio and points to developments still ahead.",
      "Η Techne. είναι γραφείο μελέτης και κατασκευής στην Αθήνα. Χρειαζόταν ένα δίγλωσσο site που εξηγεί τις υπηρεσίες, παρουσιάζει τα έργα της και δείχνει όσα έρχονται.",
    ),
    features: [
      feature(
        "layout",
        text("Four service pages", "Τέσσερις σελίδες υπηρεσιών"),
        text(
          "Permits and design, engineering, project management and construction, and property development — each with its own page.",
          "Άδειες και μελέτη, τεχνικές υπηρεσίες, διαχείριση έργου και κατασκευή, και ανάπτυξη ακινήτων — καθεμία με δική της σελίδα.",
        ),
      ),
      feature(
        "grid",
        text("Project portfolio", "Portfolio έργων"),
        text(
          "Indicative projects, filtered by category — from architectural design and permits to interior design and renovations.",
          "Ενδεικτικά έργα με φίλτρα ανά κατηγορία — από αρχιτεκτονική μελέτη και άδειες ως εσωτερικό σχεδιασμό και ανακαινίσεις.",
        ),
      ),
      feature(
        "document",
        text("Project pages", "Σελίδες έργων"),
        text(
          "Every project with its location, budget, size and status, and a photo gallery.",
          "Κάθε έργο με τοποθεσία, προϋπολογισμό, εμβαδόν και κατάσταση, και φωτογραφίες.",
        ),
      ),
      feature(
        "building",
        text("Upcoming developments", "Επόμενα έργα"),
        text(
          "A homepage slider of the developments still ahead, from Holargos to Kythira.",
          "Slider στην αρχική με τα έργα που έρχονται, από τον Χολαργό ως τα Κύθηρα.",
        ),
      ),
      feature(
        "envelope",
        text("Contact form", "Φόρμα επικοινωνίας"),
        text(
          "Visitors pick the service they need and send their project details.",
          "Ο επισκέπτης διαλέγει την υπηρεσία που χρειάζεται και στέλνει τα στοιχεία του έργου του.",
        ),
      ),
      feature(
        "globe",
        text("Two languages", "Δύο γλώσσες"),
        text(
          "The full site in English and Greek.",
          "Όλο το site στα αγγλικά και στα ελληνικά.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-portfolio.jpg", "el-gallery-portfolio.jpg"),
      text("Project portfolio", "Portfolio έργων"),
      text(
        "Indicative projects, filtered by category — each card with its location, size and type of work.",
        "Ενδεικτικά έργα με φίλτρα ανά κατηγορία — κάθε κάρτα με τοποθεσία, εμβαδόν και είδος εργασιών.",
      ),
      text(
        "Techne. — project portfolio with category filters",
        "Techne. — portfolio έργων με φίλτρα κατηγοριών",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-service.jpg", "el-gallery-service.jpg"),
        text("Services", "Υπηρεσίες"),
        text(
          "Each service explained: why it is needed, how it works and when it applies.",
          "Κάθε υπηρεσία εξηγημένη: γιατί χρειάζεται, πώς γίνεται και πότε ισχύει.",
        ),
        text(
          "Techne. — permits, design and concept service page",
          "Techne. — σελίδα υπηρεσίας Άδειες, μελέτη και σχεδιασμός",
        ),
      ),
      shot(
        file(folder, "gallery-project.jpg", "el-gallery-project.jpg"),
        text("Project pages", "Σελίδες έργων"),
        text(
          "Location, budget, size and status, then the photos of the finished work.",
          "Τοποθεσία, προϋπολογισμός, εμβαδόν και κατάσταση, και μετά οι φωτογραφίες του έργου.",
        ),
        text(
          "Techne. — Kallithea apartment project page",
          "Techne. — σελίδα έργου διαμέρισμα στην Καλλιθέα",
        ),
      ),
      shot(
        file(folder, "gallery-developments.jpg", "el-gallery-developments.jpg"),
        text("Upcoming developments", "Επόμενα έργα"),
        text(
          "New builds and villas still ahead, from Holargos to Kythira.",
          "Νέες κατασκευές και βίλες που έρχονται, από τον Χολαργό ως τα Κύθηρα.",
        ),
        text(
          "Techne. — upcoming developments slider",
          "Techne. — slider με τα επόμενα έργα",
        ),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
        file(folder, "mobile-portfolio.jpg", "el-mobile-portfolio.jpg"),
        file(folder, "mobile-project.jpg", "el-mobile-project.jpg"),
      ],
      alts: [
        text("Techne. homepage on mobile", "Αρχική της Techne. σε κινητό"),
        text("Techne. project portfolio on a phone", "Portfolio έργων της Techne. στο κινητό"),
        text("Techne. project page on a phone", "Σελίδα έργου της Techne. στο κινητό"),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to every project, designed for the phone.",
        "Από την αρχική ως κάθε έργο, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 90, lcp: 1.5, seo: 92, accessibility: 88 },
    mobile: { performance: 64, lcp: 6.5, seo: 92, accessibility: 87 },
  },
  review: {
    kind: "mock",
    role: text("Founder, Techne.", "Ιδρυτής, Techne."),
    name: "[Mock]",
    quote: same(
      "[Mock] The client's own Google review appears here, word for word — for example how the new site presents the studio's services and built work.",
    ),
  },
};
