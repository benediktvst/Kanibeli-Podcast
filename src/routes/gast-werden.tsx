import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/gast-werden")({
  head: () => ({
    meta: [
      { title: "Gast werden — Kanibeli Podcast" },
      {
        name: "description",
        content:
          "Du lebst anders und hast eine Geschichte? Bewirb dich als Gast im Kanibeli Podcast — neugierig, respektvoll, auf Augenhöhe.",
      },
      { property: "og:title", content: "Gast werden — Kanibeli" },
      { property: "og:description", content: "Bewirb dich als Gast im Kanibeli Podcast." },
      { property: "og:url", content: "/gast-werden" },
    ],
    links: [{ rel: "canonical", href: "/gast-werden" }],
  }),
  component: GuestPage,
});

function GuestPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="eyebrow mb-8">Gast werden</div>
            <h1 className="text-5xl md:text-7xl">
              Erzähl mir
              <br />
              deine Geschichte.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Wenn du anders lebst als die meisten — und glaubst, dass deine Erfahrung andere
              berühren kann — würde ich gerne mit dir sprechen.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="border-l-2 border-[oklch(0.48_0.10_45)] pl-6">
              <div className="eyebrow mb-4">Wichtig zu wissen</div>
              <ul className="space-y-3 text-sm text-foreground/80">
                {[
                  "Du musst nicht „bekannt“ sein.",
                  "Es gibt kein vorgeschriebenes Thema.",
                  "Du bekommst die Folge vor Veröffentlichung zu hören.",
                ].map((l) => (
                  <li key={l} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.48_0.10_45)]" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Wen ich suche</div>
          </div>
          <div className="md:col-span-8 grid gap-8 md:grid-cols-2">
            {[
              ["Ungewöhnliche Berufe", "Vom Glockengießer bis zur Storm-Chaserin."],
              ["Außergewöhnliche Hobbys", "Leidenschaften, für die man Jahre opfert."],
              ["Alternative Wohnformen", "Tiny House, Hausboot, Gemeinschaft, Wohnwagen."],
              ["Besondere Lebensentscheidungen", "Karrierewechsel, Aussteigen, Wiedereinstieg."],
              ["Eigene Weltanschauungen", "Sofern offen, reflektiert und nicht missionarisch."],
              ["Besondere Projekte", "Forschung, Kunst, Aktivismus, lebenslange Vorhaben."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-border pt-6">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">So läuft es ab</div>
          </div>
          <div className="md:col-span-8">
            <ol className="space-y-8">
              {[
                ["Bewerbung", "Du schreibst mir kurz, wer du bist und worum es geht."],
                ["Vorgespräch", "Wir telefonieren 10 bis 20 Minuten — unverbindlich, einfach kennenlernen."],
                ["Aufnahme", "60 – 90 Minuten Gespräch, vor Ort direkt beim Gast oder in einer naheliegenden Location."],
                ["Veröffentlichung", "Mittwochs erscheint deine Folge auf allen Plattformen."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6">
                  <div className="font-mono text-sm text-[oklch(0.48_0.10_45)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="bewerbung">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Bewerbung</div>
            <h2 className="mt-4 text-3xl md:text-4xl">Schreib mir.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Drei, vier Sätze reichen. Was dich besonders macht, finden wir gemeinsam heraus.
            </p>
          </div>

          <div className="md:col-span-8">
            {sent ? (
              <div className="border border-border bg-secondary/50 p-12 text-center">
                <Check className="mx-auto h-8 w-8 text-[oklch(0.48_0.10_45)]" />
                <h3 className="mt-4 text-2xl">Danke für deine Nachricht.</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ich melde mich innerhalb einer Woche zurück.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-6"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="E-Mail" name="email" type="email" required />
                </div>
                <Field label="Wer bist du?" name="who" required placeholder="Beruf, Ort, ein Satz über dich" />
                <Field
                  label="Worüber sollen wir sprechen?"
                  name="topic"
                  required
                  as="textarea"
                  placeholder="Welche Geschichte trägst du mit dir? Was macht dein Leben anders?"
                />
                <Field label="Links (optional)" name="links" placeholder="Website, Instagram, Artikel …" />

                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 accent-[oklch(0.48_0.10_45)]" />
                  <span>
                    Ich habe die <a href="/datenschutz" className="underline">Datenschutzerklärung</a> gelesen
                    und stimme der Verarbeitung meiner Angaben zu.
                  </span>
                </label>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                  >
                    Bewerbung absenden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "textarea";
}) {
  const common =
    "w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-0";
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}{required && " *"}</span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={5} className={common} />
      ) : (
        <input type={type} name={name} required={required} placeholder={placeholder} className={common} />
      )}
    </label>
  );
}
