import { asset, delivered, feature, L, phone, review, scores, shot } from "@/data/caseHelpers";
import type { Project } from "@/data/projectTypes";

const root = "/projects/salty-boat-trips";

export const salty: Project = {
  slug: "salty-boat-trips",
  kind: "live",
  name: L("Salty Boat Trips", "Salty Boat Trips"),
  type: L("Booking site", "Booking site"),
  industry: L("Tourism", "Τουρισμός"),
  description: L(
    "Premium charter site for private RIB trips, day cruises and transfers in Mykonos, with fleet pages and enquiry-led booking.",
    "Premium site για ιδιωτικές εκδρομές με RIB, day cruises και transfers στη Μύκονο, με σελίδες στόλου και booking μέσω αιτήματος.",
  ),
  stage: "#23413D",
  domain: "saltyboattrips.com",
  liveUrl: L("https://saltyboattrips.com", "https://saltyboattrips.com"),
  desktopImage: `${root}/home-desktop-en.jpg`,
  mobileImage: `${root}/home-mobile-en.jpg`,
  image: asset(`${root}/home-desktop-en.jpg`),
  showcase: {
    desktop: asset(`${root}/home-desktop-en.jpg`),
    mobile: asset(`${root}/home-mobile-en.jpg`),
    desktopAlt: L("Salty Boat Trips homepage on desktop", "Αρχική της Salty Boat Trips σε desktop"),
    mobileAlt: L("Salty Boat Trips homepage on mobile", "Αρχική της Salty Boat Trips σε κινητό"),
  },
  intro: L(
    "A premium charter site for private RIB trips, day cruises and boat transfers in Mykonos — built to turn browsing into booking requests.",
    "Premium site για ιδιωτικές εκδρομές με RIB, ημερήσιες κρουαζιέρες και θαλάσσιες μεταφορές στη Μύκονο — φτιαγμένο για να μετατρέπει την περιήγηση σε αιτήματα κράτησης.",
  ),
  meta: {
    title: L(
      "Salty Boat Trips: Boat Tour Booking Site, Mykonos | Genesis",
      "Salty Boat Trips: site κρατήσεων εκδρομών, Μύκονος | Genesis",
    ),
    description: L(
      "A premium charter site for private RIB trips, day cruises and boat transfers in Mykonos — built to turn browsing into booking requests.",
      "Premium site για ιδιωτικές εκδρομές με RIB, κρουαζιέρες και θαλάσσιες μεταφορές στη Μύκονο, φτιαγμένο για να φέρνει αιτήματα κράτησης.",
    ),
    share: L("Boat tour booking site, Mykonos", "site κρατήσεων εκδρομών, Μύκονος"),
  },
  client: L("Salty Boat Trips, Mykonos", "Salty Boat Trips, Μύκονος"),
  services: delivered,
  year: "2025",
  storyTitle: L("From first look to booking.", "Από την πρώτη ματιά στην κράτηση."),
  storySubtitle: L(
    "A premium charter site for Mykonos, built around enquiries.",
    "Premium site για τη Μύκονο, χτισμένο γύρω από τα αιτήματα κράτησης.",
  ),
  brief: L(
    "Salty Boat Trips runs private RIB trips, day cruises and boat transfers in Mykonos. They needed a premium charter site that presents the fleet and routes at their best — and turns that interest into booking enquiries, by form or straight on WhatsApp.",
    "Η Salty Boat Trips οργανώνει ιδιωτικές εκδρομές με RIB, ημερήσιες κρουαζιέρες και θαλάσσιες μεταφορές στη Μύκονο. Χρειαζόταν ένα premium site που παρουσιάζει τα σκάφη και τις διαδρομές στα καλύτερά τους — και μετατρέπει το ενδιαφέρον σε αιτήματα κράτησης, μέσω φόρμας ή απευθείας στο WhatsApp.",
  ),
  built: [
    feature("ship", ["Day cruise pages", "Σελίδες ημερήσιων κρουαζιέρων"], ["Eight routes from Mykonos, from Delos and Rhenia to Paros, Milos and Santorini.", "Οκτώ διαδρομές από τη Μύκονο, από τη Δήλο και τη Ρήνεια ως την Πάρο, τη Μήλο και τη Σαντορίνη."]),
    feature("route", ["Boat transfers", "Θαλάσσιες μεταφορές"], ["Transfers around Mykonos, or to another island.", "Μεταφορές γύρω από τη Μύκονο ή προς άλλο νησί."]),
    feature("map", ["Route maps", "Χάρτες διαδρομών"], ["Every route on an interactive map, with the stops numbered.", "Κάθε διαδρομή σε διαδραστικό χάρτη, με αριθμημένες στάσεις."]),
    feature("message", ["Enquiry flow", "Ροή αιτήματος"], ["Pick a service and send a request, or jump straight to WhatsApp.", "Επιλέγετε υπηρεσία και στέλνετε αίτημα, ή πάτε απευθείας στο WhatsApp."]),
    feature("search", ["FAQ", "Συχνές ερωτήσεις"], ["Answers to the questions guests ask before booking a private boat trip.", "Απαντήσεις σε όσα ρωτούν οι επισκέπτες πριν κλείσουν ιδιωτική εκδρομή."]),
    feature("calendar", ["On board events", "Εκδηλώσεις εν πλω"], ["Yoga on the waves and private occasions, each with its own page.", "Yoga στα κύματα και ιδιωτικές περιστάσεις, καθεμία με δική της σελίδα."]),
  ],
  gallery: {
    wide: shot(
      `${root}/gallery-route-page.jpg`,
      ["Route pages", "Σελίδες διαδρομών"],
      ["Every trip has its own page: the route on a map, the stops, and a two-step booking form next to it.", "Κάθε εκδρομή έχει δική της σελίδα: η διαδρομή στον χάρτη, οι στάσεις και δίπλα μια φόρμα κράτησης δύο βημάτων."],
      ["Salty Boat Trips — Delos–Rhenia route page with map and booking form", "Salty Boat Trips — σελίδα διαδρομής Δήλος–Ρήνεια με χάρτη και φόρμα κράτησης"],
    ),
    row: [
      shot(`${root}/gallery-day-trips.jpg`, ["Day trips", "Ημερήσιες εκδρομές"], ["Eight routes from Mykonos, filtered by half or full day.", "Οκτώ διαδρομές από τη Μύκονο, με φίλτρο μισής ή ολόκληρης ημέρας."], ["Salty Boat Trips — day trips overview", "Salty Boat Trips — επισκόπηση ημερήσιων εκδρομών"]),
      shot(`${root}/gallery-transfers.jpg`, ["Transfers", "Μεταφορές"], ["Pick-up and drop-off on a live map, then date and time.", "Παραλαβή και προορισμός σε ζωντανό χάρτη, μετά ημερομηνία και ώρα."], ["Salty Boat Trips — boat transfer booking with map", "Salty Boat Trips — κράτηση θαλάσσιας μεταφοράς με χάρτη"]),
      shot(`${root}/gallery-on-board-events.jpg`, ["On board events", "Εκδηλώσεις εν πλω"], ["Yoga on the waves and private occasions, each with its own enquiry.", "Yoga στα κύματα και ιδιωτικές περιστάσεις, καθεμία με δικό της αίτημα."], ["Salty Boat Trips — on board events page", "Salty Boat Trips — σελίδα εκδηλώσεων εν πλω"]),
    ],
    mobile: {
      images: [phone(`${root}/mobile-home.jpg`), phone(`${root}/mobile-route.jpg`), phone(`${root}/mobile-booking.jpg`)],
      alts: [
        L("Salty Boat Trips mobile homepage", "Αρχική της Salty Boat Trips στο κινητό"),
        L("Salty Boat Trips mobile route page", "Σελίδα διαδρομής της Salty Boat Trips στο κινητό"),
        L("Salty Boat Trips mobile booking form", "Φόρμα κράτησης της Salty Boat Trips στο κινητό"),
      ],
      title: L("Mobile", "Κινητό"),
      text: L(
        "From the homepage to the booking form, built for the phone first.",
        "Από την αρχική ως τη φόρμα κράτησης, σχεδιασμένο πρώτα για το κινητό.",
      ),
    },
  },
  results: {
    desktop: scores(100, 0.3, 100, 96),
    mobile: scores(99, 0.9, 100, 96),
  },
  review: review(
    ["Founder, Salty Boat Trips", "Ιδρυτής, Salty Boat Trips"],
    "[Mock] Thodoris P.",
    "[Mock] The client's own Google review appears here, word for word — for example how guests now request a private boat trip from the site.",
  ),
};
