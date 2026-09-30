import { ContactPage } from "@/components/ContactPage";
import { PageShell } from "@/components/PageShell";
import { contactMetadata } from "@/lib/seo";

export function generateMetadata() {
  return contactMetadata("el");
}

export default function Page() {
  return (
    <PageShell locale="el">
      <ContactPage />
    </PageShell>
  );
}
