import type { Metadata } from "next";
import { ContactPage } from "@/components/ContactPage";
import { dictionaries } from "@/data/content";

const page = dictionaries.en.contactPage;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: "/contact",
  },
  twitter: {
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function Page() {
  return <ContactPage />;
}
