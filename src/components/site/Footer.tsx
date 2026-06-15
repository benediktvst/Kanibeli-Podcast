import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl tracking-tight">Kanibeli Podcast</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Ein Interview-Podcast für echte Geschichten von Menschen, die ihren eigenen Weg
            gehen. Mit Neugier, Respekt und ohne Bewertung.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/ueber" className="link-underline">Über den Podcast</Link></li>
            <li><Link to="/episoden" className="link-underline">Episoden</Link></li>
            <li><Link to="/gast-werden" className="link-underline">Gast werden</Link></li>
            <li><Link to="/kontakt" className="link-underline">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Rechtliches</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/impressum" className="link-underline">Impressum</Link></li>
            <li><Link to="/datenschutz" className="link-underline">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Kanibeli Podcast. Alle Rechte vorbehalten.</div>
          <div>Hergestellt mit Neugier in Deutschland.</div>
        </div>
      </div>
    </footer>
  );
}
