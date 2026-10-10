import { PageShell } from "@/components/PageShell";
import { TeamPage } from "@/components/TeamPage";
import { teamMetadata } from "@/lib/seo";

export function generateMetadata() {
  return teamMetadata("el");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <TeamPage />
    </PageShell>
  );
}
