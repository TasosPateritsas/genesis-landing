/** Public site origin. Set NEXT_PUBLIC_SITE_URL in production; this default is the only hard-coded origin. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://genesis.studio").replace(/\/$/, "");

export function isProductionIndexable() {
  return process.env.VERCEL_ENV === "production";
}
