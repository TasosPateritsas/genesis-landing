import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { launchWarnings } from "./src/config/env";

const nextConfig: NextConfig = {
  images: {
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default function config(phase: string): NextConfig {
  if (phase === PHASE_PRODUCTION_BUILD) {
    const warnings = launchWarnings();
    if (warnings.length > 0) {
      console.warn(`\n⚠ Not ready for launch:\n${warnings.map((line) => `  - ${line}`).join("\n")}\n`);
    }
  }
  return nextConfig;
}
