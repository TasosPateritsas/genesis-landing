export function Logo({
  className = "",
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  const accent = tone === "inverse" ? "text-white" : "text-accent";
  const word = tone === "inverse" ? "text-white" : "text-ink";

  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-tight ${className}`}
      aria-label="Genesis"
    >
      <span className={accent}>G</span>
      <span className={word}>enesis</span>
      <span className={accent}>.</span>
    </span>
  );
}
