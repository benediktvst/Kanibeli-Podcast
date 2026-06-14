import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { episodes, formatDate } from "@/lib/episodes";

export const Route = createFileRoute("/episoden")({
  head: () => ({
    meta: [
      { title: "Alle Episoden — Kanibeli Podcast" },
      {
        name: "description",
        content:
          "Alle Folgen des Kanibeli Podcasts: Interviews mit Menschen, die anders leben. Die ersten Episoden erscheinen bald.",
      },
      { property: "og:title", content: "Alle Episoden — Kanibeli" },
      { property: "og:description", content: "Alle Folgen des Kanibeli Podcasts auf einen Blick. Bald verfügbar." },
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
            Bald verfügbar.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Der Kanibeli Podcast ist brandneu. Die ersten Gespräche mit außergewöhnlichen Menschen
            erscheinen in Kürze. Trag dich ein, um informiert zu werden.
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
                      {ep.guestRole}
                    </div>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {ep.excerpt}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:text-right">
                    <div className="flex items-center justify-end gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {ep.duration}
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
                        Demnächst
                      </span>
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
