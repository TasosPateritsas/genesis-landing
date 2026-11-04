import type { Metadata } from "next";
import { NotFoundPage } from "@/components/NotFoundPage";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: { absolute: "Η σελίδα δεν βρέθηκε | Genesis" },
  robots: { index: false, follow: false },
};

export default function ElNotFound() {
  return (
    <PageShell locale="el">
      <NotFoundPage locale="el" />
    </PageShell>
  );
}
