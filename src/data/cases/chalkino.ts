import { asset, delivered, feature, L, phone, review, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/chalkino-katsaroli";
const el = (file: string) => `${root}/el-${file}`;
const en = (file: string) => `${root}/${file}`;

export const chalkino: Project = {
  slug: "chalkino-katsaroli",
  kind: "live",
  name: L("Chalkino Katsaroli", "Χάλκινο Κατσαρόλι"),
  type: L("Website", "Website"),
  industry: L("Restaurant", "Εστίαση"),
  description: L(
    "Daily menus for two kitchens in Chalkida and Artaki, mobile-first and built for local search.",
    "Καθημερινό μενού για δύο μαγειρεία σε Χαλκίδα και Αρτάκη, mobile-first και φτιαγμένο για τοπική αναζήτηση.",
  ),
  stage: "#2B1C14",
  domain: "chalkino-katsaroli.gr",
  liveUrl: L("https://www.chalkino-katsaroli.gr", "https://www.chalkino-katsaroli.gr/el"),
  desktopImage: en("home-desktop.jpg"),
  mobileImage: en("home-mobile.jpg"),
  image: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
  showcase: {
    desktop: asset(en("home-desktop.jpg"), el("home-desktop.jpg")),
    mobile: asset(en("home-mobile.jpg"), el("home-mobile.jpg")),
    desktopAlt: L("Chalkino Katsaroli homepage on desktop", "Αρχική του Χάλκινου Κατσαρολιού σε desktop"),
    mobileAlt: L("Chalkino Katsaroli homepage on mobile", "Αρχική του Χάλκινου Κατσαρολιού σε κινητό"),
  },
  intro: L(
    "A mobile-first site for two home-cooking kitchens in Chalkida and Artaki, built around the daily menu and local search.",
    "Mobile-first site για δύο μαγειρεία σπιτικού φαγητού, σε Χαλκίδα και Αρτάκη, χτισμένο γύρω από το μενού ημέρας και την τοπική αναζήτηση.",
  ),
  client: L("Chalkino Katsaroli, Chalkida", "Χάλκινο Κατσαρόλι, Χαλκίδα"),
  services: delivered,
  year: "2025",
  meta: {
    title: L(
      "Chalkino Katsaroli: Home-Cooking Kitchen, Chalkida | Genesis",
      "Χάλκινο Κατσαρόλι: site μαγειρείου, Χαλκίδα | Genesis",
    ),
    share: L("Home-cooking kitchen, Chalkida", "site μαγειρείου, Χαλκίδα"),
  },
  storyTitle: L("Today's menu, easy to find.", "Το μενού της ημέρας, με μια ματιά."),
  storySubtitle: L(
    "Two kitchens, one mobile-first site for local search.",
    "Δύο μαγειρεία, ένα mobile-first site για την τοπική αναζήτηση.",
  ),
  brief: L(
    "Chalkino Katsaroli serves daily home cooking from two kitchens, in Chalkida and Artaki. They needed a mobile-first site that publishes the menu and shows up in local search.",
    "Το Χάλκινο Κατσαρόλι μαγειρεύει καθημερινά σπιτικό φαγητό σε δύο μαγειρεία, στη Χαλκίδα και στην Αρτάκη. Χρειαζόταν ένα mobile-first site που δημοσιεύει το μενού και εμφανίζεται στην τοπική αναζήτηση.",
  ),
  built: [
    feature("document", ["Daily menu", "Μενού ημέρας"], ["The day's dishes under today's date, by category, with prices and allergens.", "Τα πιάτα της ημέρας με τη σημερινή ημερομηνία, ανά κατηγορία, με τιμές και αλλεργιογόνα."]),
    feature("building", ["Two kitchens", "Δύο μαγειρεία"], ["A separate menu and phone line for Chalkida and Artaki.", "Ξεχωριστό μενού και τηλέφωνο για Χαλκίδα και Αρτάκη."]),
    feature("mail", ["Job applications", "Αιτήσεις εργασίας"], ["A Join our team form — position, experience and availability.", "Φόρμα «Έλα στην ομάδα μας» — θέση, προϋπηρεσία και διαθεσιμότητα."]),
    feature("grid", ["Blog", "Blog"], ["Articles on Greek home cooking and its traditions.", "Άρθρα για την ελληνική σπιτική κουζίνα και τις παραδόσεις της."]),
    feature("search", ["Questions", "Συχνές ερωτήσεις"], ["Answers on the menu, ingredients, online orders and catering.", "Απαντήσεις για το μενού, τα υλικά, τις online παραγγελίες και το catering."]),
    feature("globe", ["Two languages", "Δύο γλώσσες"], ["The full site in Greek and English.", "Όλο το site στα ελληνικά και στα αγγλικά."]),
  ],
  gallery: {
    wide: shot(en("gallery-menu.jpg"), ["Daily menu", "Μενού ημέρας"], ["Today's date, the store's phone and every dish by category, with its price.", "Η σημερινή ημερομηνία, το τηλέφωνο του καταστήματος και κάθε πιάτο ανά κατηγορία, με την τιμή του."], ["Chalkino Katsaroli — Chalkida daily menu", "Χάλκινο Κατσαρόλι — μενού ημέρας Χαλκίδας"], el("gallery-menu.jpg")),
    row: [
      shot(en("gallery-artaki.jpg"), ["Artaki menu", "Μενού Αρτάκης"], ["The second kitchen, with its own menu and phone.", "Το δεύτερο μαγειρείο, με το δικό του μενού και τηλέφωνο."], ["Chalkino Katsaroli — Artaki daily menu", "Χάλκινο Κατσαρόλι — μενού ημέρας Αρτάκης"], el("gallery-artaki.jpg")),
      shot(en("gallery-join.jpg"), ["Join our team", "Έλα στην ομάδα μας"], ["Applicants pick a position and send their details.", "Ο υποψήφιος διαλέγει θέση και στέλνει τα στοιχεία του."], ["Chalkino Katsaroli — Join our team form", "Χάλκινο Κατσαρόλι — φόρμα «Έλα στην ομάδα μας»"], el("gallery-join.jpg")),
      shot(en("gallery-blog.jpg"), ["Blog", "Blog"], ["Stories on Greek cooking, from Lent to the family table.", "Ιστορίες για την ελληνική κουζίνα, από τη Σαρακοστή ως το οικογενειακό τραπέζι."], ["Chalkino Katsaroli — blog", "Χάλκινο Κατσαρόλι — blog"], el("gallery-blog.jpg")),
    ],
    mobile: {
      images: [phone(en("home-mobile.jpg"), el("home-mobile.jpg")), phone(en("mobile-menu.jpg"), el("mobile-menu.jpg")), phone(en("mobile-join.jpg"), el("mobile-join.jpg"))],
      alts: [
        L("Chalkino Katsaroli homepage on mobile", "Αρχική του Χάλκινου Κατσαρολιού σε κινητό"),
        L("Chalkino Katsaroli daily menu on mobile", "Μενού ημέρας του Χάλκινου Κατσαρολιού στο κινητό"),
        L("Chalkino Katsaroli job form on mobile", "Φόρμα εργασίας του Χάλκινου Κατσαρολιού στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L("From the homepage to the menu and the job form, designed for the phone.", "Από την αρχική ως το μενού και τη φόρμα, σχεδιασμένο για το κινητό."),
    },
  },
  results: { desktop: scores(98, 0.7, 92, 92), mobile: scores(86, 3.2, 92, 88) },
  review: review(
    ["Owner, Chalkino Katsaroli", "Ιδιοκτήτης, Χάλκινο Κατσαρόλι"],
    "[Mock] Chalkino Katsaroli",
    "[Mock] The client's own Google review appears here, word for word — for example how customers now check the daily menu before they call.",
  ),
};
