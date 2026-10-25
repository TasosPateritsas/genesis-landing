import { PageShell } from "@/components/PageShell";
import { WorkPage } from "@/components/WorkPage";
import { workMetadata } from "@/lib/seo";

export function generateMetadata() {
  return workMetadata("en");
}

export default function Page() {
  return (
    <PageShell locale="en">
      <WorkPage />
    </PageShell>
  );
}
