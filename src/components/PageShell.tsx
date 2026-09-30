import type { ReactNode } from "react";
import { BackToTop } from "@/components/BackToTop";
import type { Locale } from "@/data/content";
import { LocaleProvider } from "@/i18n/LocaleProvider";

export function PageShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LocaleProvider locale={locale}>
      {children}
      <BackToTop />
    </LocaleProvider>
  );
}
