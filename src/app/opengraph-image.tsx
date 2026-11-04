import { ogContentType, ogSize, siteOgImage } from "@/lib/ogCard";

export const alt = "Genesis — Three engineers. One agency.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return siteOgImage("Three engineers. One agency.", "You talk to the builders.");
}
