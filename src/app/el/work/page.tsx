import { PageShell } from "@/components/PageShell";
import { WorkPage } from "@/components/WorkPage";
import { workMetadata } from "@/lib/seo";

export function generateMetadata() {
  return workMetadata("el");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <WorkPage />
    </PageShell>
  );
}
