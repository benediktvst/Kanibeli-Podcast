import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Kanibeli Podcast" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung des Kanibeli Podcasts." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section>
      <div className="container-x max-w-3xl py-24 md:py-32">
        <div className="eyebrow mb-8">Impressum</div>
        <h1 className="text-4xl md:text-5xl">Angaben gemäß § 5 TMG</h1>

        <div className="prose mt-12 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl">Anbieter</h2>
            <p className="mt-2 text-muted-foreground">
              [Name des Betreibers]<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl">Kontakt</h2>
            <p className="mt-2 text-muted-foreground">
              E-Mail: hallo@kanibeli-podcast.de<br />
              Telefon: [optional]
            </p>
          </div>

          <div>
            <h2 className="text-xl">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p className="mt-2 text-muted-foreground">[Name], [Adresse]</p>
          </div>

          <div>
            <h2 className="text-xl">Haftungsausschluss</h2>
            <p className="mt-2 text-muted-foreground">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
              übernommen werden.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Bitte ersetze die Platzhalter durch deine vollständigen Kontaktdaten, bevor die Seite
            veröffentlicht wird.
          </p>
        </div>
      </div>
    </section>
  );
}
