import { ogAlt, ogContentType, ogSize, renderOgImage } from "@/lib/ogCard";

export const alt = ogAlt("el");
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return renderOgImage("el");
}
