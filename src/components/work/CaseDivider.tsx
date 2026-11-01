export function CaseDivider({ label }: { label: string }) {
  return (
    <div className="case-divider">
      <span className="case-divider-line is-left" aria-hidden />
      <p className="case-divider-label">{label}</p>
      <span className="case-divider-line is-right" aria-hidden />
    </div>
  );
}
