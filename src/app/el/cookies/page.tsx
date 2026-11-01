import { LegalPage } from "@/components/LegalPage";
import { PageShell } from "@/components/PageShell";
import { legalMetadata } from "@/lib/seo";

export function generateMetadata() {
  return legalMetadata("el", "cookies");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <LegalPage kind="cookies" />
    </PageShell>
  );
}
