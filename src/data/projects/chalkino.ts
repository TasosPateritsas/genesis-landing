import { delivered, feature, file, shot, text, type Project } from "@/data/projectModel";

const folder = "chalkino-katsaroli";

export const chalkino: Project = {
  slug: "chalkino-katsaroli",
  name: "Χάλκινο Κατσαρόλι",
  title: text("Chalkino Katsaroli", "Χάλκινο Κατσαρόλι"),
  description: text(
    "Daily menus for two kitchens in Chalkida and Artaki, mobile-first and built for local search.",
    "Καθημερινό μενού για δύο μαγειρεία σε Χαλκίδα και Αρτάκη, mobile-first και φτιαγμένο για τοπική αναζήτηση.",
  ),
  stage: "#2B1C14",
  domain: "chalkino-katsaroli.gr",
  liveUrl: text("https://www.chalkino-katsaroli.gr", "https://www.chalkino-katsaroli.gr/el"),
  intro: text(
    "A mobile-first site for two home-cooking kitchens in Chalkida and Artaki, built around the daily menu and local search.",
    "Mobile-first site για δύο μαγειρεία σπιτικού φαγητού, σε Χαλκίδα και Αρτάκη, χτισμένο γύρω από το μενού ημέρας και την τοπική αναζήτηση.",
  ),
  meta: {
    client: text("Chalkino Katsaroli, Chalkida", "Χάλκινο Κατσαρόλι, Χαλκίδα"),
    whatWeDid: delivered,
    category: text("Website · Restaurant", "Website · Εστίαση"),
    year: "2025",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg", "el-home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
    altDesktop: text(
      "Chalkino Katsaroli homepage on desktop",
      "Αρχική του Χάλκινου Κατσαρολιού σε desktop",
    ),
    altMobile: text(
      "Chalkino Katsaroli homepage on mobile",
      "Αρχική του Χάλκινου Κατσαρολιού σε κινητό",
    ),
  },
  project: {
    title: text("Today's menu, easy to find.", "Το μενού της ημέρας, με μια ματιά."),
    subtitle: text(
      "Two kitchens, one mobile-first site for local search.",
      "Δύο μαγειρεία, ένα mobile-first site για την τοπική αναζήτηση.",
    ),
    brief: text(
      "Chalkino Katsaroli serves daily home cooking from two kitchens, in Chalkida and Artaki. They needed a mobile-first site that publishes the menu and shows up in local search.",
      "Το Χάλκινο Κατσαρόλι μαγειρεύει καθημερινά σπιτικό φαγητό σε δύο μαγειρεία, στη Χαλκίδα και στην Αρτάκη. Χρειαζόταν ένα mobile-first site που δημοσιεύει το μενού και εμφανίζεται στην τοπική αναζήτηση.",
    ),
    features: [
      feature(
        "document",
        text("Daily menu", "Μενού ημέρας"),
        text(
          "The day's dishes under today's date, by category, with prices and allergens.",
          "Τα πιάτα της ημέρας με τη σημερινή ημερομηνία, ανά κατηγορία, με τιμές και αλλεργιογόνα.",
        ),
      ),
      feature(
        "building",
        text("Two kitchens", "Δύο μαγειρεία"),
        text(
          "A separate menu and phone line for Chalkida and Artaki.",
          "Ξεχωριστό μενού και τηλέφωνο για Χαλκίδα και Αρτάκη.",
        ),
      ),
      feature(
        "envelope",
        text("Job applications", "Αιτήσεις εργασίας"),
        text(
          "A Join our team form — position, experience and availability.",
          "Φόρμα «Έλα στην ομάδα μας» — θέση, προϋπηρεσία και διαθεσιμότητα.",
        ),
      ),
      feature(
        "layout",
        text("Blog", "Blog"),
        text(
          "Articles on Greek home cooking and its traditions.",
          "Άρθρα για την ελληνική σπιτική κουζίνα και τις παραδόσεις της.",
        ),
      ),
      feature(
        "grid",
        text("Questions", "Συχνές ερωτήσεις"),
        text(
          "Answers on the menu, ingredients, online orders and catering.",
          "Απαντήσεις για το μενού, τα υλικά, τις online παραγγελίες και το catering.",
        ),
      ),
      feature(
        "globe",
        text("Two languages", "Δύο γλώσσες"),
        text("The full site in Greek and English.", "Όλο το site στα ελληνικά και στα αγγλικά."),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-menu.jpg", "el-gallery-menu.jpg"),
      text("Daily menu", "Μενού ημέρας"),
      text(
        "Today's date, the store's phone and every dish by category, with its price.",
        "Η σημερινή ημερομηνία, το τηλέφωνο του καταστήματος και κάθε πιάτο ανά κατηγορία, με την τιμή του.",
      ),
      text("Chalkino Katsaroli — Chalkida daily menu", "Χάλκινο Κατσαρόλι — μενού ημέρας Χαλκίδας"),
    ),
    row: [
      shot(
        file(folder, "gallery-artaki.jpg", "el-gallery-artaki.jpg"),
        text("Artaki menu", "Μενού Αρτάκης"),
        text(
          "The second kitchen, with its own menu and phone.",
          "Το δεύτερο μαγειρείο, με το δικό του μενού και τηλέφωνο.",
        ),
        text("Chalkino Katsaroli — Artaki daily menu", "Χάλκινο Κατσαρόλι — μενού ημέρας Αρτάκης"),
      ),
      shot(
        file(folder, "gallery-join.jpg", "el-gallery-join.jpg"),
        text("Join our team", "Έλα στην ομάδα μας"),
        text(
          "Applicants pick a position and send their details.",
          "Ο υποψήφιος διαλέγει θέση και στέλνει τα στοιχεία του.",
        ),
        text(
          "Chalkino Katsaroli — Join our team form",
          "Χάλκινο Κατσαρόλι — φόρμα «Έλα στην ομάδα μας»",
        ),
      ),
      shot(
        file(folder, "gallery-blog.jpg", "el-gallery-blog.jpg"),
        text("Blog", "Blog"),
        text(
          "Stories on Greek cooking, from Lent to the family table.",
          "Ιστορίες για την ελληνική κουζίνα, από τη Σαρακοστή ως το οικογενειακό τραπέζι.",
        ),
        text("Chalkino Katsaroli — blog", "Χάλκινο Κατσαρόλι — blog"),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg", "el-home-mobile.jpg"),
        file(folder, "mobile-menu.jpg", "el-mobile-menu.jpg"),
        file(folder, "mobile-join.jpg", "el-mobile-join.jpg"),
      ],
      alts: [
        text("Chalkino Katsaroli homepage on mobile", "Αρχική του Χάλκινου Κατσαρολιού σε κινητό"),
        text("Chalkino Katsaroli daily menu on a phone", "Μενού ημέρας του Χάλκινου Κατσαρολιού στο κινητό"),
        text("Chalkino Katsaroli job form on a phone", "Φόρμα εργασίας του Χάλκινου Κατσαρολιού στο κινητό"),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to the menu and the job form, designed for the phone.",
        "Από την αρχική ως το μενού και τη φόρμα, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 98, lcp: 0.7, seo: 92, accessibility: 92 },
    mobile: { performance: 86, lcp: 3.2, seo: 92, accessibility: 88 },
  },
  review: {
    kind: "mock",
    role: text("Owner, Chalkino Katsaroli", "Ιδιοκτήτης, Χάλκινο Κατσαρόλι"),
    name: "[Mock]",
    quote: text(
      "[Mock] The client's own Google review appears here, word for word — for example how customers now check the daily menu before they call.",
      "[Mock] The client's own Google review appears here, word for word — for example how customers now check the daily menu before they call.",
    ),
  },
};
