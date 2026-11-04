/** Stub — waitlist UI (package 9.4) is filled in separately. */
export function WaitlistForm({ source }: { source: "home" | "weddingflow" }) {
  return (
    <div
      id="waitlist-form"
      className="wf-waitlist-form-stub"
      data-source={source}
      aria-label={source === "home" ? "Waitlist form" : "Weddingflow waitlist form"}
    />
  );
}
