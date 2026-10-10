import { PageShell } from "@/components/PageShell";
import { TeamPage } from "@/components/TeamPage";
import { teamMetadata } from "@/lib/seo";

export function generateMetadata() {
  return teamMetadata("en");
}

export default function Page() {
  return (
    <PageShell locale="en">
      <TeamPage />
    </PageShell>
  );
}
