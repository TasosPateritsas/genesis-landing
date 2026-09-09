export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-tight ${className}`}
      aria-label="Genesis"
    >
      <span className="text-accent">G</span>
      <span className="text-ink">enesis</span>
      <span className="text-accent">.</span>
    </span>
  );
}
