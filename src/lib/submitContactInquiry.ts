export type ContactInquiry = {
  firstName: string;
  lastName: string;
  email: string;
  category: string;
  otherNeed?: string;
  description: string;
};

const MOCK_DELAY_MS = 900;

/**
 * Isolated stand-in for the future contact API.
 * Replace this function with a real request when a backend exists.
 * An email of fail@genesis.studio rejects, so the error state can be checked.
 */
export async function submitContactInquiry(inquiry: ContactInquiry): Promise<void> {
  await new Promise((resolve) => {
    window.setTimeout(resolve, MOCK_DELAY_MS);
  });

  if (inquiry.email.trim().toLowerCase() === "fail@genesis.studio") {
    throw new Error("Mock contact submit failed");
  }
}
