import { createFileRoute } from "@tanstack/react-router";
import { Play, Share2 } from "lucide-react";
import { episodes, formatDate } from "@/lib/episodes";

export const Route = createFileRoute("/episoden")({
  head: () => ({
    meta: [
      { title: "Alle Episoden — Kanibeli Podcast" },
      {
        name: "description",
        content:
          "Alle Folgen des Kanibeli Podcasts: Interviews mit Menschen, die anders leben — vom Imker bis zur Höhlenforscherin.",
      },
      { property: "og:title", content: "Alle Episoden — Kanibeli" },
      { property: "og:description", content: "Alle Folgen des Kanibeli Podcasts auf einen Blick." },
      { property: "og:url", content: "/episoden" },
    ],
    links: [{ rel: "canonical", href: "/episoden" }],
  }),
  component: EpisodesPage,
});

function EpisodesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="eyebrow mb-8">Episoden</div>
          <h1 className="max-w-4xl text-5xl md:text-7xl">
            {episodes.length} Gespräche.
            <br />
            {episodes.length} Lebenswege.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Jede Folge ein Mensch, ein Mikrofon und die Frage: Warum lebst du, wie du lebst?
          </p>
        </div>
      </section>

      <section>
        <div className="container-x py-16">
          <ul className="divide-y divide-border">
            {episodes.map((ep) => (
              <li key={ep.slug} className="group py-10 md:py-12">
                <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-2">
                    <div className="font-mono text-sm text-muted-foreground">
                      № {String(ep.number).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{formatDate(ep.date)}</div>
                  </div>

                  <div className="md:col-span-7">
                    <h2 className="text-3xl leading-tight transition-colors group-hover:text-[oklch(0.48_0.10_45)] md:text-4xl">
                      {ep.title}
                    </h2>
                    <div className="mt-3 text-sm text-[oklch(0.48_0.10_45)]">
                      mit {ep.guest} · {ep.guestRole}
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {ep.excerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:text-right">
                    <div className="text-xs text-muted-foreground">{ep.duration}</div>
                    <div className="mt-6 flex items-center gap-3 md:justify-end">
                      <button
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-background transition-opacity hover:opacity-90"
                        aria-label={`Episode ${ep.number} abspielen`}
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        Hören
                      </button>
                      <button
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
                        aria-label="Teilen"
                      >
                        <Share2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
