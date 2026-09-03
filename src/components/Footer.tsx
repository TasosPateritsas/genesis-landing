import { site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="section-pad container-narrow flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold tracking-tight text-ink">
            Genesis
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {site.tagline} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-5 text-sm font-medium text-ink-muted" aria-label="Footer">
          <a href="#services" className="hover:text-ink">
            What we build
          </a>
          <a href="#work" className="hover:text-ink">
            Work
          </a>
          <a href="#team" className="hover:text-ink">
            Team
          </a>
          <a href="#contact" className="hover:text-ink">
            Contact
          </a>
        </nav>

        <p className="text-sm text-ink-muted">© {year} Genesis</p>
      </div>
    </footer>
  );
}
