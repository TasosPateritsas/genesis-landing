"use client";

import { useEffect } from "react";

type LocaleDocumentMetaProps = {
  title: string;
  description: string;
};

export function LocaleDocumentMeta({ title, description }: LocaleDocumentMetaProps) {
  useEffect(() => {
    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);
  }, [title, description]);

  return null;
}
