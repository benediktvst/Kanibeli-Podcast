import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Mic, Quote } from "lucide-react";
import heroImg from "@/assets/hero-microphone.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanibeli Podcast — Außergewöhnliche Menschen. Ehrliche Geschichten." },
      {
        name: "description",
        content:
          "Der Kanibeli Podcast: Gespräche mit Menschen, die ihren eigenen Weg gehen. Brandneu — die ersten Folgen erscheinen bald.",
      },
      { property: "og:title", content: "Kanibeli Podcast" },
      {
        property: "og:description",
        content:
          "Gespräche mit Menschen, die ihren eigenen Weg gehen. Neugierig, respektvoll, ohne Bewertung.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-x grid items-center gap-16 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <div className="eyebrow mb-8">Brandneuer Podcast · Coming soon</div>
            <h1 className="text-5xl leading-[1.02] md:text-7xl lg:text-8xl">
              Außergewöhnliche
              <br />
              Menschen.
              <br />
              <span className="italic text-[oklch(0.48_0.10_45)]">Ehrliche</span> Geschichten.
            </h1>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Kanibeli ist ein neuer Interview-Podcast über Menschen, die anders leben als die
              meisten — und über das, was wir von ihnen lernen können. Die ersten Folgen
              erscheinen bald.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/gast-werden"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
              >
                <Mic className="h-4 w-4" />
                Gast werden
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/ueber" className="link-underline text-sm text-foreground">
                Mehr erfahren →
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
              <img
                src={heroImg}
                alt="Mikrofon im Studio"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Mic,
                title: "Neugierig",
                text:
                  "Ich stelle die Fragen, die mich wirklich interessieren — und höre zu, statt zu unterbrechen.",
              },
              {
                icon: Quote,
                title: "Respektvoll",
                text:
                  "Kein Urteil, keine Schublade. Jede Geschichte bekommt den Raum, den sie verdient.",
              },
              {
                icon: Headphones,
                title: "Ehrlich",
                text:
                  "Keine glattgezogenen Interviews. Auch Widersprüche, Zweifel und Brüche dürfen bleiben.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t border-border pt-8">
                <v.icon className="h-5 w-5 text-[oklch(0.48_0.10_45)]" />
                <h3 className="mt-6 text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="border-b border-border">
        <div className="container-x py-20">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="eyebrow">Höre auf deiner Plattform</div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-display text-2xl text-muted-foreground md:text-3xl">
              <span className="opacity-40">Spotify</span>
              <span className="text-border">·</span>
              <span className="opacity-40">Apple Podcasts</span>
              <span className="text-border">·</span>
              <span className="opacity-40">YouTube</span>
              <span className="text-border">·</span>
              <span className="opacity-40">RSS</span>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Die Podcast-Plattformen werden mit Erscheinen der ersten Folge verknüpft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
