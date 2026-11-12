export type ContactInquiry = {
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  otherNeed?: string;
  description: string;
  company_website?: string;
  startedAt?: number;
};

/** Posts to the contact route. */
export async function submitContactInquiry(inquiry: ContactInquiry): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(inquiry),
  });

  if (!response.ok) throw new Error("Contact submit failed");
}
