import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, Youtube, Check } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Kanibeli Podcast" },
      {
        name: "description",
        content:
          "Schreib uns: Feedback, Episodenvorschläge, Kooperationen oder einfach eine Nachricht zum Kanibeli Podcast.",
      },
      { property: "og:title", content: "Kontakt — Kanibeli" },
      { property: "og:description", content: "Kontaktmöglichkeiten zum Kanibeli Podcast." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="eyebrow mb-8">Kontakt</div>
          <h1 className="max-w-4xl text-5xl md:text-7xl">Schreib mir.</h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Feedback, Themenvorschläge, Kooperationen oder einfach eine Nachricht — ich freue mich.
          </p>
        </div>
      </section>

      <section>
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4 space-y-10">
            <div>
              <div className="eyebrow mb-4">Direkt</div>
              <a
                href="mailto:podcast@kanibeli.de"
                className="link-underline inline-flex items-center gap-3 font-display text-2xl"
              >
                <Mail className="h-5 w-5" />
                podcast@kanibeli.de
              </a>
            </div>

            <div>
              <div className="eyebrow mb-4">Social</div>
              <div className="flex flex-col gap-3 text-base">
                <a href="#" className="link-underline inline-flex items-center gap-3">
                  <Instagram className="h-4 w-4" /> @kanibeli.podcast
                </a>
                <a href="#" className="link-underline inline-flex items-center gap-3">
                  <Youtube className="h-4 w-4" /> Kanibeli Podcast
                </a>
              </div>
            </div>

            <div>
              <div className="eyebrow mb-4">Newsletter</div>
              <p className="mb-4 text-sm text-muted-foreground">
                Einmal im Monat: eine neue Folge, ein Gedanke, ein Hinweis. Kein Spam.
              </p>
              <form
                className="flex border-b border-border"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="deine@email.de"
                  className="flex-1 bg-transparent py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none"
                />
                <button className="text-xs font-medium uppercase tracking-widest text-[oklch(0.48_0.10_45)]">
                  Abonnieren →
                </button>
              </form>
            </div>
          </div>

          <div className="md:col-span-8">
            {sent ? (
              <div className="border border-border bg-secondary/50 p-12 text-center">
                <Check className="mx-auto h-8 w-8 text-[oklch(0.48_0.10_45)]" />
                <h3 className="mt-4 text-2xl">Nachricht erhalten.</h3>
                <p className="mt-2 text-sm text-muted-foreground">Danke. Ich melde mich bald zurück.</p>
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
                <Field label="Betreff" name="subject" required />
                <Field label="Nachricht" name="message" required as="textarea" />

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
                    className="inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-background"
                  >
                    Nachricht senden
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
  as,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "textarea";
}) {
  const common =
    "w-full border-0 border-b border-border bg-transparent py-3 text-base focus:border-foreground focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}{required && " *"}</span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={6} className={common} />
      ) : (
        <input type={type} name={name} required={required} className={common} />
      )}
    </label>
  );
}
