import { createFileRoute } from "@tanstack/react-router";
import benePhoto from "@/assets/bene.jpg.asset.json";

export const Route = createFileRoute("/ueber")({
  head: () => ({
    meta: [
      { title: "Über den Podcast — Kanibeli" },
      {
        name: "description",
        content:
          "Die Geschichte, Mission und Werte hinter dem Kanibeli Podcast. Warum es ihn gibt und was Hörer erwarten können.",
      },
      { property: "og:title", content: "Über den Kanibeli Podcast" },
      { property: "og:description", content: "Geschichte, Mission und Werte hinter Kanibeli." },
      { property: "og:url", content: "/ueber" },
    ],
    links: [{ rel: "canonical", href: "/ueber" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-x py-24 md:py-32">
          <div className="eyebrow mb-8">Über den Podcast</div>
          <h1 className="max-w-4xl text-5xl md:text-7xl">
            Weil die spannendsten <span className="text-[oklch(0.48_0.10_45)]">Geschichten</span> meist Abseits des Durchschnitts zu finden sind.
          </h1>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Mission</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Seit mehr als 20 Jahren begleitet mich eine große Frage: Was ist eigentlich der Sinn des Lebens? Und spezieller: Was ist mein Sinn? Was möchte ich auf dieser Erde erreicht haben, wenn ich irgendwann zurückblicke?
            </p>
            <p>
              Ich habe viel gelesen, viel ausprobiert und mich intensiv damit beschäftigt, wie man leben kann. Welche Berufe es gibt, welche verrückten Hobbys Menschen pflegen, wie unterschiedlich man wohnen, sich kleiden, reisen oder seine Zeit verbringen kann.
            </p>
            <p>
              Und doch fällt mir immer wieder auf: Die allermeisten Menschen leben nach einem sehr ähnlichen Drehbuch. Schule, Studium, Partner finden, heiraten, Haus kaufen, Kinder bekommen, jahrzehntelang beim selben Arbeitgeber bleiben, Jahresurlaub auf Mallorca oder an der Ostsee und dann in Rente gehen. Das ist ein absolut legitimer und für viele auch erfüllender Weg.
            </p>
            <p>
              Aber es gibt eben auch ganz andere Wege. Und genau die interessieren mich brennend.
            </p>
            <p>
              Wie leben Menschen, die aus diesem klassischen Raster ausbrechen? Welche außergewöhnlichen Berufe, Projekte oder Lebensmodelle gibt es? Welche ungewöhnlichen Hobbys werden mit großer Leidenschaft betrieben? Warum haben sich diese Menschen für genau diesen Weg entschieden? Was sind die großen Vorteile – und wo liegen die echten Nachteile und Herausforderungen?
            </p>
            <p>
              Statt nur darüber zu lesen oder mich das einsam zu fragen, wollte ich die Menschen hinter diesen anderen Leben einfach kennenlernen und mit ihnen reden.
            </p>
            <p>
              Doch ich möchte nicht egoistisch sein und die inspirierende Geschichten alleine hören – ich möchte diese Geschichten mit jedem teilen der sie hören möchte. Da draußen gibt es sicher viele, die sich ähnliche Fragen stellen und sich für außergewöhnliche Lebensentwürfe, verrückte Leidenschaften und alternative Wege interessieren.
            </p>
            <p>
              Deshalb ist dieser Podcast entstanden: Als Plattform für echte Gespräche, ehrliche Einblicke und Inspiration. Nicht als Anleitung, wie man leben „soll“, sondern als Sammlung von Möglichkeiten, wie man leben kann.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid gap-12 py-24 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-sm bg-secondary md:mx-0">
              <img
                src={benePhoto.url}
                alt="Benedikt — Moderator des Kanibeli Podcasts"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-background">
                <div className="eyebrow mb-0.5 text-background/80">Hinter dem Mikrofon</div>
                <div className="font-display text-lg leading-tight">Benedikt</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <div className="eyebrow mb-4">Hinter dem Mikrofon</div>
            <p className="text-lg leading-relaxed text-foreground/90">
              Mein erster Name ist Benedikt und dann folgen sieben weitere Namen. Ich habe zwei Studiengänge erfolgreich abgeschlossen und auch noch eine Ausbildung. Ich ziehe gerne um und reise noch lieber durch die Welt. Ich habe einen ganzen Schwung Ängste und noch viel mehr Fragen. Ich will einen positiven Einfluss auf das Leben anderer Menschen haben und hoffe, dies ein wenig mit diesem Podcast zu tun.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Was du erwarten kannst</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Jede Folge ist ein Gespräch von ca. 30 bis 90 Minuten mit einem Menschen, dessen Weg sich
              vom gewohnten unterscheidet. Keine Werbespots in der Mitte. Keine inszenierten
              Konflikte. Kein Bewerten.
            </p>
            <p>
              Stattdessen: ehrliche Fragen, ungeschnittene Antworten und die Bereitschaft, auch dort
              hinzuhören, wo es unbequem wird. Neue Folgen erscheinen ca. alle zwei Wochen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
