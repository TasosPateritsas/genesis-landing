import { delivered, feature, file, same, shot, text, type Project } from "@/data/projectModel";

const folder = "salty-boat-trips";
const home = file(folder, "home-desktop-en.jpg");
const phone = file(folder, "home-mobile-en.jpg");

export const salty: Project = {
  slug: "salty-boat-trips",
  name: "Salty Boat Trips",
  title: same("Salty Boat Trips"),
  description: text(
    "Premium charter site for private RIB trips, day cruises and transfers in Mykonos, with fleet pages and enquiry-led booking.",
    "Premium site για ιδιωτικές εκδρομές με RIB, day cruises και transfers στη Μύκονο, με σελίδες στόλου και booking μέσω αιτήματος.",
  ),
  stage: "#23413D",
  domain: "saltyboattrips.com",
  liveUrl: same("https://saltyboattrips.com"),
  intro: text(
    "A premium charter site for private RIB trips, day cruises and boat transfers in Mykonos — built to turn browsing into booking requests.",
    "Premium site για ιδιωτικές εκδρομές με RIB, ημερήσιες κρουαζιέρες και θαλάσσιες μεταφορές στη Μύκονο — φτιαγμένο για να μετατρέπει την περιήγηση σε αιτήματα κράτησης.",
  ),
  meta: {
    client: text("Salty Boat Trips, Mykonos", "Salty Boat Trips, Μύκονος"),
    whatWeDid: delivered,
    category: text("Booking site · Tourism", "Booking site · Τουρισμός"),
    year: "2025",
  },
  showcase: {
    desktop: home,
    mobile: phone,
    altDesktop: text(
      "Salty Boat Trips homepage on desktop",
      "Αρχική της Salty Boat Trips σε desktop",
    ),
    altMobile: text("Salty Boat Trips homepage on mobile", "Αρχική της Salty Boat Trips σε κινητό"),
  },
  project: {
    title: text("From first look to booking.", "Από την πρώτη ματιά στην κράτηση."),
    subtitle: text(
      "A premium charter site for Mykonos, built around enquiries.",
      "Premium site για τη Μύκονο, χτισμένο γύρω από τα αιτήματα κράτησης.",
    ),
    brief: text(
      "Salty Boat Trips runs private RIB trips, day cruises and boat transfers in Mykonos. They needed a premium charter site that presents the fleet and routes at their best — and turns that interest into booking enquiries, by form or straight on WhatsApp.",
      "Η Salty Boat Trips οργανώνει ιδιωτικές εκδρομές με RIB, ημερήσιες κρουαζιέρες και θαλάσσιες μεταφορές στη Μύκονο. Χρειαζόταν ένα premium site που παρουσιάζει τα σκάφη και τις διαδρομές στα καλύτερά τους — και μετατρέπει το ενδιαφέρον σε αιτήματα κράτησης, μέσω φόρμας ή απευθείας στο WhatsApp.",
    ),
    features: [
      feature(
        "sailboat",
        text("Day cruise pages", "Σελίδες ημερήσιων κρουαζιέρων"),
        text(
          "Eight routes from Mykonos, from Delos and Rhenia to Paros, Milos and Santorini.",
          "Οκτώ διαδρομές από τη Μύκονο, από τη Δήλο και τη Ρήνεια ως την Πάρο, τη Μήλο και τη Σαντορίνη.",
        ),
      ),
      feature(
        "route",
        text("Boat transfers", "Θαλάσσιες μεταφορές"),
        text(
          "Transfers around Mykonos, or to another island.",
          "Μεταφορές γύρω από τη Μύκονο ή προς άλλο νησί.",
        ),
      ),
      feature(
        "map",
        text("Route maps", "Χάρτες διαδρομών"),
        text(
          "Every route on an interactive map, with the stops numbered.",
          "Κάθε διαδρομή σε διαδραστικό χάρτη, με αριθμημένες στάσεις.",
        ),
      ),
      feature(
        "message",
        text("Enquiry flow", "Ροή αιτήματος"),
        text(
          "Pick a service and send a request, or jump straight to WhatsApp.",
          "Επιλέγετε υπηρεσία και στέλνετε αίτημα, ή πάτε απευθείας στο WhatsApp.",
        ),
      ),
      feature(
        "search",
        text("FAQ", "Συχνές ερωτήσεις"),
        text(
          "Answers to the questions guests ask before booking a private boat trip.",
          "Απαντήσεις σε όσα ρωτούν οι επισκέπτες πριν κλείσουν ιδιωτική εκδρομή.",
        ),
      ),
      feature(
        "spark",
        text("On board events", "Εκδηλώσεις εν πλω"),
        text(
          "Yoga on the waves and private occasions, each with its own page.",
          "Yoga στα κύματα και ιδιωτικές περιστάσεις, καθεμία με δική της σελίδα.",
        ),
      ),
    ],
  },
  gallery: {
    wide: shot(
      file(folder, "gallery-route-page.jpg"),
      text("Route pages", "Σελίδες διαδρομών"),
      text(
        "Every trip has its own page: the route on a map, the stops, and a two-step booking form next to it.",
        "Κάθε εκδρομή έχει δική της σελίδα: η διαδρομή στον χάρτη, οι στάσεις και δίπλα μια φόρμα κράτησης δύο βημάτων.",
      ),
      text(
        "Salty Boat Trips — Delos–Rhenia route page with map and booking form",
        "Salty Boat Trips — σελίδα διαδρομής Δήλος–Ρήνεια με χάρτη και φόρμα κράτησης",
      ),
    ),
    row: [
      shot(
        file(folder, "gallery-day-trips.jpg"),
        text("Day trips", "Ημερήσιες εκδρομές"),
        text(
          "Eight routes from Mykonos, filtered by half or full day.",
          "Οκτώ διαδρομές από τη Μύκονο, με φίλτρο μισής ή ολόκληρης ημέρας.",
        ),
        text("Salty Boat Trips — day trips overview", "Salty Boat Trips — επισκόπηση ημερήσιων εκδρομών"),
      ),
      shot(
        file(folder, "gallery-transfers.jpg"),
        text("Transfers", "Μεταφορές"),
        text(
          "Pick-up and drop-off on a live map, then date and time.",
          "Παραλαβή και προορισμός σε ζωντανό χάρτη, μετά ημερομηνία και ώρα.",
        ),
        text(
          "Salty Boat Trips — boat transfer booking with map",
          "Salty Boat Trips — κράτηση θαλάσσιας μεταφοράς με χάρτη",
        ),
      ),
      shot(
        file(folder, "gallery-on-board-events.jpg"),
        text("On board events", "Εκδηλώσεις εν πλω"),
        text(
          "Yoga on the waves and private occasions, each with its own enquiry.",
          "Yoga στα κύματα και ιδιωτικές περιστάσεις, καθεμία με δικό της αίτημα.",
        ),
        text("Salty Boat Trips — on board events page", "Salty Boat Trips — σελίδα εκδηλώσεων εν πλω"),
      ),
    ],
    mobile: {
      images: [
        file(folder, "mobile-home.jpg"),
        file(folder, "mobile-route.jpg"),
        file(folder, "mobile-booking.jpg"),
      ],
      alts: [
        text("Salty Boat Trips mobile homepage", "Αρχική της Salty Boat Trips στο κινητό"),
        text("Salty Boat Trips mobile route page", "Σελίδα διαδρομής της Salty Boat Trips στο κινητό"),
        text("Salty Boat Trips mobile booking form", "Φόρμα κράτησης της Salty Boat Trips στο κινητό"),
      ],
      title: text("Mobile", "Κινητό"),
      text: text(
        "From the homepage to the booking form, built for the phone first.",
        "Από την αρχική ως τη φόρμα κράτησης, σχεδιασμένο πρώτα για το κινητό.",
      ),
    },
  },
  results: {
    desktop: { performance: 100, lcp: 0.3, seo: 100, accessibility: 96 },
    mobile: { performance: 99, lcp: 0.9, seo: 100, accessibility: 96 },
  },
  review: {
    kind: "mock",
    role: text("Founder, Salty Boat Trips", "Ιδρυτής, Salty Boat Trips"),
    name: "[Mock] Thodoris P.",
    quote: same("[Mock] The client's own Google review appears here, word for word."),
  },
};
