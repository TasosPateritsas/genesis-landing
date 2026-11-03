import { ogAlt, ogContentType, ogSize, renderOgImage } from "@/lib/ogCard";

export const alt = ogAlt("en");
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage("en");
}
