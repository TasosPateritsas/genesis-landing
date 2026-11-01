import { asset, delivered, feature, L, phone, review, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/horizon-realty";
const file = (name: string) => `${root}/${name}`;

/** horizonrealty.gr is Greek only, so the Greek page reuses the English captures. */
export const horizon: Project = {
  slug: "horizon-realty",
  kind: "live",
  name: L("Horizon Realty", "Horizon Realty"),
  type: L("Booking site", "Booking site"),
  industry: L("Hospitality", "Φιλοξενία"),
  description: L(
    "Boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
    "Boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
  ),
  stage: "#F2E6DE",
  domain: "horizonrealty.gr",
  liveUrl: L("https://www.horizonrealty.gr", "https://www.horizonrealty.gr"),
  desktopImage: file("home-desktop.jpg"),
  mobileImage: file("home-mobile.jpg"),
  image: asset(file("home-desktop.jpg")),
  showcase: {
    desktop: asset(file("home-desktop.jpg")),
    mobile: asset(file("home-mobile.jpg")),
    desktopAlt: L("Horizon Realty homepage on desktop", "Αρχική της Horizon Realty σε desktop"),
    mobileAlt: L("Horizon Realty homepage on mobile", "Αρχική της Horizon Realty σε κινητό"),
  },
  intro: L(
    "A booking site for boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
    "Booking site για boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
  ),
  client: L("Horizon Realty, Chalkida", "Horizon Realty, Χαλκίδα"),
  services: delivered,
  year: "2026",
  storyTitle: L(
    "A stay you book with the host.",
    "Μια διαμονή που την κλείνετε απευθείας με τον οικοδεσπότη.",
  ),
  storySubtitle: L(
    "Boutique rooms in Chalkida, booked without the platforms.",
    "Boutique διαμονές στη Χαλκίδα, με κράτηση χωρίς πλατφόρμες.",
  ),
  brief: L(
    "Horizon Realty runs boutique short-term stays in Chalkida. They needed a site where guests book direct, and owners can see how a property is looked after.",
    "Η Horizon Realty έχει boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα. Χρειαζόταν ένα site όπου οι επισκέπτες κλείνουν απευθείας και οι ιδιοκτήτες βλέπουν πώς φροντίζεται ένα ακίνητο.",
  ),
  built: [
    feature("grid", ["The stays", "Καταλύματα"], ["Filters for sea view, family, centre, old town and long stays, sorted by price, rating or guests.", "Φίλτρα για θέα στη θάλασσα, οικογένειες, κέντρο, παλιά πόλη και μακρά διαμονή, με ταξινόμηση ανά τιμή, βαθμολογία ή άτομα."]),
    feature("building", ["Property pages", "Σελίδες καταλυμάτων"], ["Rooms, amenities, what is nearby, and house rules with check-in and check-out times.", "Δωμάτια, παροχές, τι υπάρχει γύρω και κανόνες, με ώρες check-in και check-out."]),
    feature("calendar", ["Availability calendar", "Ημερολόγιο διαθεσιμότητας"], ["The price of every night, with check-in, check-out and number of guests.", "Η τιμή κάθε βραδιάς, με check-in, check-out και αριθμό ατόμων."]),
    feature("mail", ["Direct booking", "Απευθείας κράτηση"], ["Requests go straight to WhatsApp, up to 10% below the platforms, with no service fees.", "Τα αιτήματα πάνε κατευθείαν στο WhatsApp, έως 10% φθηνότερα από τις πλατφόρμες, χωρίς service fees."]),
    feature("document", ["For owners", "Για ιδιοκτήτες"], ["How it works in three steps, two management packages side by side, and a free valuation.", "Πώς λειτουργεί σε τρία βήματα, δύο πακέτα διαχείρισης δίπλα-δίπλα και δωρεάν εκτίμηση."]),
    feature("globe", ["Contact and FAQ", "Επικοινωνία και FAQ"], ["A form by topic — booking, partnership or long stay — and answers for guests and owners.", "Φόρμα ανά θέμα — κράτηση, συνεργασία ή μακρά διαμονή — και απαντήσεις για επισκέπτες και ιδιοκτήτες."]),
  ],
  gallery: {
    wide: shot(file("gallery-calendar.jpg"), ["Availability calendar", "Ημερολόγιο διαθεσιμότητας"], ["Nightly prices on every date, with the booking panel beside them.", "Οι τιμές κάθε βραδιάς σε κάθε ημερομηνία, με τη φόρμα κράτησης δίπλα."], ["Horizon Realty — availability calendar with nightly prices", "Horizon Realty — ημερολόγιο διαθεσιμότητας με τιμές ανά βραδιά"]),
    row: [
      shot(file("gallery-stays.jpg"), ["The stays", "Καταλύματα"], ["Filters by collection, search and sorting by price.", "Φίλτρα ανά συλλογή, αναζήτηση και ταξινόμηση ανά τιμή."], ["Horizon Realty — stays with filters", "Horizon Realty — καταλύματα με φίλτρα"]),
      shot(file("gallery-owners.jpg"), ["For owners", "Για ιδιοκτήτες"], ["Two management packages, with what each one covers.", "Δύο πακέτα διαχείρισης, με όσα καλύπτει το καθένα."], ["Horizon Realty — owner management packages", "Horizon Realty — πακέτα διαχείρισης για ιδιοκτήτες"]),
      shot(file("gallery-contact.jpg"), ["Contact", "Επικοινωνία"], ["One form for bookings, partnerships and long stays — or WhatsApp.", "Μία φόρμα για κρατήσεις, συνεργασίες και μακρές διαμονές — ή WhatsApp."], ["Horizon Realty — contact form", "Horizon Realty — φόρμα επικοινωνίας"]),
    ],
    mobile: {
      images: [phone(file("home-mobile.jpg")), phone(file("mobile-stays.jpg")), phone(file("mobile-calendar.jpg"))],
      alts: [
        L("Horizon Realty homepage on mobile", "Αρχική της Horizon Realty σε κινητό"),
        L("Horizon Realty stays on mobile", "Τα καταλύματα της Horizon Realty στο κινητό"),
        L("Horizon Realty availability calendar on mobile", "Το ημερολόγιο διαθεσιμότητας της Horizon Realty στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L("From the homepage to the stays and the calendar, designed for the phone.", "Από την αρχική ως τα καταλύματα και το ημερολόγιο, σχεδιασμένο για το κινητό."),
    },
  },
  results: { desktop: scores(97, 1.2, 100, 89), mobile: scores(76, 5.7, 100, 89) },
  review: review(
    ["Owner, Horizon Realty", "Ιδιοκτήτης, Horizon Realty"],
    "[Mock] Horizon Realty",
    "[Mock] The client's own Google review appears here, word for word — for example how guests now book their stay direct.",
  ),
};
