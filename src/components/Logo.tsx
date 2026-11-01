export function Logo({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  const initial = tone === "inverse" ? "text-white" : "text-accent";
  const word = tone === "inverse" ? "text-white" : "text-ink";
  const dot = tone === "inverse" ? "text-g-mint" : "text-accent";

  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-[-0.03em] ${className}`}
      aria-label="Genesis"
    >
      <span className={initial}>G</span>
      <span className={word}>enesis</span>
      <span className={dot}>.</span>
    </span>
  );
}
