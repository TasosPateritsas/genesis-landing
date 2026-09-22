import type { Metadata } from "next";
import { ServicesPage } from "@/components/ServicesPage";
import { dictionaries } from "@/data/content";

const page = dictionaries.en.servicesPage;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "/services",
  },
  twitter: {
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function Page() {
  return <ServicesPage />;
}
