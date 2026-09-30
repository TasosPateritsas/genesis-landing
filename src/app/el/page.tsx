import { HomePage } from "@/components/HomePage";
import { PageShell } from "@/components/PageShell";
import { homeMetadata } from "@/lib/seo";

export function generateMetadata() {
  return homeMetadata("el");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <HomePage />
    </PageShell>
  );
}
