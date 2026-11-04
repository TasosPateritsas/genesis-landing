import { ogContentType, ogSize, siteOgImage } from "@/lib/ogCard";

export const alt = "Genesis — Τρεις μηχανικοί. Ένα agency.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return siteOgImage("Τρεις μηχανικοί. Ένα agency.", "Μιλάτε με αυτούς που χτίζουν.");
}
