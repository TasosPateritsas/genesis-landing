import type { Metadata } from "next";
import { headers } from "next/headers";
import { NotFoundPage } from "@/components/NotFoundPage";
import { PageShell } from "@/components/PageShell";
import type { Locale } from "@/data/content";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const locale: Locale = headerStore.get("x-locale") === "el" ? "el" : "en";
  return {
    title: {
      absolute: locale === "el" ? "Η σελίδα δεν βρέθηκε | Genesis" : "Page not found | Genesis",
    },
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const headerStore = await headers();
  const locale: Locale = headerStore.get("x-locale") === "el" ? "el" : "en";

  return (
    <PageShell locale={locale}>
      <NotFoundPage locale={locale} />
    </PageShell>
  );
}
