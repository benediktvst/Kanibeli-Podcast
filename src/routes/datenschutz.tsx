import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Kanibeli Podcast" },
      { name: "description", content: "Datenschutzerklärung des Kanibeli Podcasts." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section>
      <div className="container-x max-w-3xl py-24 md:py-32">
        <div className="eyebrow mb-8">Datenschutz</div>
        <h1 className="text-4xl md:text-5xl">Datenschutzerklärung</h1>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-foreground/90">
          <div>
            <h2 className="text-xl">1. Verantwortlicher</h2>
            <p className="mt-2 text-muted-foreground">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist der im Impressum
              genannte Anbieter.
            </p>
          </div>

          <div>
            <h2 className="text-xl">2. Erhebung allgemeiner Informationen</h2>
            <p className="mt-2 text-muted-foreground">
              Beim Aufrufen unserer Website werden durch den auf deinem Endgerät verwendeten
              Browser automatisch Informationen an den Server übermittelt (z. B. IP-Adresse,
              Browser-Typ, Zeitpunkt des Zugriffs).
            </p>
          </div>

          <div>
            <h2 className="text-xl">3. Kontakt- und Bewerbungsformular</h2>
            <p className="mt-2 text-muted-foreground">
              Wenn du uns über das Formular kontaktierst, werden deine Angaben zur Bearbeitung der
              Anfrage und für mögliche Anschlussfragen gespeichert. Diese Daten werden nicht ohne
              deine Einwilligung weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-xl">4. Deine Rechte</h2>
            <p className="mt-2 text-muted-foreground">
              Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung sowie auf Datenübertragbarkeit. Wende dich dazu an die im Impressum
              genannte Kontaktadresse.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Diese Datenschutzerklärung ist eine Vorlage. Bitte vor Veröffentlichung rechtlich
            prüfen lassen.
          </p>
        </div>
      </div>
    </section>
  );
}
