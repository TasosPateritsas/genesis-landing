import { LegalPage } from "@/components/LegalPage";
import { PageShell } from "@/components/PageShell";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata() {
  return legalMetadata("en", "privacy");
}

export default function Page() {
  return (
    <PageShell locale="en">
      <LegalPage kind="privacy" />
    </PageShell>
  );
}
