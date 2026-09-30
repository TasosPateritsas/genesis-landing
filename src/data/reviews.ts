export const GOOGLE_REVIEW_URL = "";
export const GOOGLE_PROFILE_URL = "";

/** Flip to false before launch to publish the real Google reviews only. */
export const USE_MOCK_REVIEWS = true;

export type Review = {
  name: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
};

const REAL_AVERAGE_RATING = 0;
const REAL_TOTAL_REVIEWS = 0;
const realReviews: Review[] = [];

const MOCK_AVERAGE_RATING = 4.9;
const MOCK_TOTAL_REVIEWS = 7;
const mockReviews: Review[] = [
  {
    name: "[Mock] Elena Papadopoulou",
    date: "18 Sep 2026",
    rating: 5,
    text: "Genesis took our rough brief and turned it into a working product without us having to hire a technical team. The weekly check-ins were clear, the scope never drifted, and the site launched on the day we agreed. We have already sent them the next feature.",
  },
  {
    name: "[Mock] Νίκος Αλεξίου",
    date: "2 Aug 2026",
    rating: 5,
    text: "Συνεργαστήκαμε για το eshop μας και η διαφορά ήταν άμεση. Μας εξήγησαν κάθε βήμα στα ελληνικά, χωρίς περιττή ορολογία, και το checkout δούλεψε σωστά από την πρώτη μέρα. Απαντούσαν πάντα μέσα στην εργάσιμη ημέρα που είχαν υποσχεθεί.",
  },
  {
    name: "[Mock] Maria Georgiou",
    date: "14 Jun 2026",
    rating: 5,
    text: "We needed an internal dashboard to replace a pile of spreadsheets. The team scoped it in one call, built only what we actually use, and trained us before handoff. Six weeks later the whole office still opens it every morning.",
  },
  {
    name: "[Mock] James Carter",
    date: "3 Mar 2026",
    rating: 4,
    text: "Strong design and a calm process. A couple of integration details took an extra week, but they told us early and adjusted the plan instead of disappearing. I would book them again for the next release.",
  },
  {
    name: "[Mock] Σοφία Δημητρίου",
    date: "19 Nov 2025",
    rating: 5,
    text: "Θέλαμε μια ιστοσελίδα που να εξηγεί την υπηρεσία μας χωρίς να μοιάζει με πρότυπο. Η Genesis έγραψε τη δομή μαζί μας, πρόσεξε το SEO και παρέδωσε κάτι που μπορούμε να ενημερώνουμε μόνοι μας. Οι πελάτες μάς βρίσκουν πλέον από την αναζήτηση.",
  },
  {
    name: "[Mock] Olivia Bennett",
    date: "7 Jul 2025",
    rating: 4,
    text: "They built our first mobile app for a fixed budget and a fixed date. The result is fast and simple, which is exactly what our customers needed. I would have liked one more round of polish on the empty states, but the launch itself was smooth.",
  },
  {
    name: "[Mock] Κώστας Νικολάου",
    date: "22 Jan 2025",
    rating: 5,
    text: "Μας έφτιαξαν έναν αυτοματισμό που συνδέει τις φόρμες του site με το CRM. Σταματήσαμε να αντιγράφουμε στοιχεία στο χέρι και η ομάδα βλέπει κάθε νέο αίτημα την ίδια μέρα. Σοβαροί, συγκεκριμένοι και εύκολοι στη συνεργασία.",
  },
];

export const AVERAGE_RATING = USE_MOCK_REVIEWS ? MOCK_AVERAGE_RATING : REAL_AVERAGE_RATING;
export const TOTAL_REVIEWS = USE_MOCK_REVIEWS ? MOCK_TOTAL_REVIEWS : REAL_TOTAL_REVIEWS;
export const reviews: Review[] = USE_MOCK_REVIEWS ? mockReviews : realReviews;
