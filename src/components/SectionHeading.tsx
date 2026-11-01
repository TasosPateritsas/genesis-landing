export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="home-section-head">
      <div className="home-section-copy">
        <p className="home-section-eyebrow">{eyebrow}</p>
        <h2 id={id} className="home-section-title">
          {title}
        </h2>
      </div>
      {intro ? <p className="home-section-intro">{intro}</p> : null}
    </div>
  );
}
