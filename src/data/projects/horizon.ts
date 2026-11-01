import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "horizon-realty";

export const horizon: Project = {
  slug: "horizon-realty",
  name: "Horizon Realty",
  title: same("Horizon Realty"),
  description: text(
    "Boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
    "Boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
  ),
  stage: "#F2E6DE",
  domain: "horizonrealty.gr",
  liveUrl: same("https://www.horizonrealty.gr"),
  intro: text(
    "A booking site for boutique short-term stays in Chalkida, with direct booking that skips the platforms.",
    "Booking site για boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα, με απευθείας κράτηση χωρίς πλατφόρμες.",
  ),
  meta: {
    client: text("Horizon Realty, Chalkida", "Horizon Realty, Χαλκίδα"),
    whatWeDid: delivered,
    category: text("Booking site · Hospitality", "Booking site · Φιλοξενία"),
    year: "2026",
  },
  showcase: {
    desktop: file(folder, "home-desktop.jpg"),
    mobile: file(folder, "home-mobile.jpg"),
    altDesktop: text("Horizon Realty homepage on desktop", "Αρχική της Horizon Realty σε desktop"),
    altMobile: text("Horizon Realty homepage on mobile", "Αρχική της Horizon Realty σε κινητό"),
  },
  project: {
    title: text(
      "A stay you book with the host.",
      "Μια διαμονή που την κλείνετε απευθείας με τον οικοδεσπότη.",
    ),
    subtitle: text(
      "Boutique rooms in Chalkida, booked without the platforms.",
      "Boutique διαμονές στη Χαλκίδα, με κράτηση χωρίς πλατφόρμες.",
    ),
    brief: text(
      "Horizon Realty runs boutique short-term stays in Chalkida. They needed a site where guests book direct, and owners can see how a property is looked after.",
      "Η Horizon Realty έχει boutique βραχυχρόνιες μισθώσεις στη Χαλκίδα. Χρειαζόταν ένα site όπου οι επισκέπτες κλείνουν απευθείας και οι ιδιοκτήτες βλέπουν πώς φροντίζεται ένα ακίνητο.",
    ),
    features: [
      feature(
        "grid",
        text("The stays", "Καταλύματα"),
        text(
          "Filters for sea view, family, centre, old town and long stays, sorted by price, rating or guests.",
          "Φίλτρα για θέα στη θάλασσα, οικογένειες, κέντρο, παλιά πόλη και μακρά διαμονή, με ταξινόμηση ανά τιμή, βαθμολογία ή άτομα.",
        ),
      ),
      feature(
        "building",
        text("Property pages", "Σελίδες καταλυμάτων"),
        text(
          "Rooms, amenities, what is nearby, and house rules with check-in and check-out times.",
          "Δωμάτια, παροχές, τι υπάρχει γύρω και κανόνες, με ώρες check-in και check-out.",
        ),
      ),
      feature(
        "layout",
        text("Availability calendar", "Ημερολόγιο διαθεσιμότητας"),
        text(
          "The price of every night, with check-in, check-out and number of guests.",
          "Η τιμή κάθε βραδιάς, με check-in, check-out και αριθμό ατόμων.",
        ),
      ),
      feature(
        "envelope",
        text("Direct booking", "Απευθείας κράτηση"),
        text(
          "Requests go straight to WhatsApp, up to 10% below the platforms, with no service fees.",
          "Τα αιτήματα πάνε κατευθείαν στο WhatsApp, έως 10% φθηνότερα από τις πλατφόρμες, χωρίς service fees.",
        ),
      ),
      feature(
        "document",
        text("For owners", "Για ιδιοκτήτες"),
        text(
          "How it works in three steps, two management packages side by side, and a free valuation.",
          "Πώς λειτουργεί σε τρία βήματα, δύο πακέτα διαχείρισης δίπλα-δίπλα και δωρεάν εκτίμηση.",
        ),
      ),
      feature(
        "globe",
        text("Contact and FAQ", "Επικοινωνία και FAQ"),
        text(
          "A form by topic — booking, partnership or long stay — and answers for guests and owners.",
          "Φόρμα ανά θέμα — κράτηση, συνεργασία ή μακρά διαμονή — και απαντήσεις για επισκέπτες και ιδιοκτήτες.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-calendar.jpg"),
      text("Availability calendar", "Ημερολόγιο διαθεσιμότητας"),
      text(
        "Nightly prices on every date, with the booking panel beside them.",
        "Οι τιμές κάθε βραδιάς σε κάθε ημερομηνία, με τη φόρμα κράτησης δίπλα.",
      ),
      text(
        "Horizon Realty — availability calendar with nightly prices",
        "Horizon Realty — ημερολόγιο διαθεσιμότητας με τιμές ανά βραδιά",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-stays.jpg"),
        text("The stays", "Καταλύματα"),
        text(
          "Filters by collection, search and sorting by price.",
          "Φίλτρα ανά συλλογή, αναζήτηση και ταξινόμηση ανά τιμή.",
        ),
        text("Horizon Realty — stays with filters", "Horizon Realty — καταλύματα με φίλτρα"),
      ),
      shot(
        file(folder, "gallery-owners.jpg"),
        text("For owners", "Για ιδιοκτήτες"),
        text(
          "Two management packages, with what each one covers.",
          "Δύο πακέτα διαχείρισης, με όσα καλύπτει το καθένα.",
        ),
        text(
          "Horizon Realty — management packages for owners",
          "Horizon Realty — πακέτα διαχείρισης για ιδιοκτήτες",
        ),
      ),
      shot(
        file(folder, "gallery-contact.jpg"),
        text("Contact", "Επικοινωνία"),
        text(
          "One form for bookings, partnerships and long stays — or WhatsApp.",
          "Μία φόρμα για κρατήσεις, συνεργασίες και μακρές διαμονές — ή WhatsApp.",
        ),
        text("Horizon Realty — contact form", "Horizon Realty — φόρμα επικοινωνίας"),
      ),
    ],
    mobile: {
      images: [
        file(folder, "home-mobile.jpg"),
        file(folder, "mobile-stays.jpg"),
        file(folder, "mobile-calendar.jpg"),
      ],
      alts: [
        text("Horizon Realty homepage on mobile", "Αρχική της Horizon Realty σε κινητό"),
        text("Horizon Realty stays on a phone", "Τα καταλύματα της Horizon Realty στο κινητό"),
        text(
          "Horizon Realty availability calendar on a phone",
          "Το ημερολόγιο διαθεσιμότητας της Horizon Realty στο κινητό",
        ),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to the stays and the calendar, designed for the phone.",
        "Από την αρχική ως τα καταλύματα και το ημερολόγιο, σχεδιασμένο για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 97, lcp: 1.2, seo: 100, accessibility: 89 },
    mobile: { performance: 76, lcp: 5.7, seo: 100, accessibility: 89 },
  },
  review: {
    kind: "mock",
    role: text("Owner, Horizon Realty", "Ιδιοκτήτης, Horizon Realty"),
    name: "[Mock]",
    quote: same(
      "[Mock] The client's own Google review appears here, word for word — for example how guests now book their stay direct.",
    ),
  },
};
