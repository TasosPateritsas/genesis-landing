import { PageShell } from "@/components/PageShell";
import { ServicesPage } from "@/components/ServicesPage";
import { servicesMetadata } from "@/lib/seo";

export function generateMetadata() {
  return servicesMetadata("el");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <ServicesPage />
    </PageShell>
  );
}
