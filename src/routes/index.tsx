import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Headphones, Mic, Quote } from "lucide-react";
import heroImg from "@/assets/hero-microphone.jpg";
import { episodes, formatDate } from "@/lib/episodes";

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
  const latest = episodes.slice(0, 3);

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
                src={benePhoto.url}
                alt="Benedikt — Moderator des Kanibeli Podcasts"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-background">
                <div className="eyebrow mb-1 text-background/80">Hinter dem Mikrofon</div>
                <div className="font-display text-xl leading-tight">Benedikt</div>
                <div className="mt-1 text-xs text-background/70">
                  Moderator · Neugieriger Zuhörer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-border">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-4">
            <div className="eyebrow">Worum es geht</div>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl leading-snug md:text-3xl">
              Wir leben in einer Zeit, in der die meisten denselben Weg gehen. Schule, Studium, Job,
              Familie, Rente. Aber es gibt Menschen, die anders entscheiden. Die ungewöhnliche
              Berufe wählen, alternative Wohnformen leben oder Projekte verfolgen, die niemand
              versteht.
            </p>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              Im Kanibeli Podcast frage ich diese Menschen, warum sie so leben, wie sie leben. Wie
              sie diesen Weg gegangen sind. Welche Erfahrungen sie gemacht haben. Und was wir
              anderen daraus lernen können. Ohne Bewertung. Ohne Sensation. Mit echter Neugier.
            </p>
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

      {/* LATEST EPISODES */}
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="flex items-end justify-between gap-8">
            <div>
              <div className="eyebrow mb-4">Bald verfügbar</div>
              <h2 className="text-4xl md:text-5xl">Erste Episoden</h2>
            </div>
            <Link to="/episoden" className="link-underline hidden text-sm md:inline">
              Alle Episoden →
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
            {latest.map((ep) => (
              <article key={ep.slug} className="group bg-background p-8 transition-colors hover:bg-secondary/50">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">№ {String(ep.number).padStart(2, "0")}</span>
                  <span>{ep.duration}</span>
                </div>
                <h3 className="mt-6 text-2xl leading-tight">{ep.title}</h3>
                <div className="mt-3 text-sm text-[oklch(0.48_0.10_45)]">
                  {ep.guest}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ep.excerpt}</p>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">{formatDate(ep.date)}</span>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                    Demnächst
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link to="/episoden" className="link-underline text-sm">Alle Episoden →</Link>
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

      {/* CTA */}
      <section>
        <div className="container-x grid gap-12 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="eyebrow mb-4">Selbst Gast werden</div>
            <h2 className="text-4xl md:text-5xl">
              Lebst du anders — und hast eine Geschichte zu erzählen?
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Ich suche fortlaufend Menschen mit ungewöhnlichen Berufen, alternativen Lebensformen,
              besonderen Projekten oder einer Geschichte, die andere inspirieren kann. Schreib mir.
            </p>
            <div className="mt-8">
              <Link
                to="/gast-werden"
                className="inline-flex items-center gap-3 rounded-full border border-foreground px-6 py-3.5 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-foreground hover:text-background"
              >
                Bewerbung schreiben
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
