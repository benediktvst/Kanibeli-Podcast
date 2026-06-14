import { createFileRoute } from "@tanstack/react-router";

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
            Weil die spannendsten Antworten selten in der Mitte liegen.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Entstehung</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Kanibeli ist aus einer einfachen Beobachtung entstanden: Die Menschen, die mich im
              Leben am meisten beeindruckt haben, waren selten die mit dem geraden Lebenslauf.
              Sondern die mit den Brüchen, den ungewöhnlichen Entscheidungen, den eigensinnigen
              Wegen.
            </p>
            <p>
              Lange habe ich diese Gespräche privat geführt. Irgendwann wurde klar: Diese
              Geschichten gehören gehört. Nicht als Sensation, nicht als Ratgeber — sondern als
              ehrliche Begegnung zwischen zwei Menschen, der eine fragt, der andere erzählt.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary/40">
        <div className="container-x grid gap-16 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Mission</div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl leading-snug md:text-4xl">
              Geschichten von Menschen erzählen, die ihren eigenen Weg gehen — und dadurch zeigen,
              wie vielfältig ein gelungenes Leben aussehen kann.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x py-24">
          <div className="eyebrow mb-12">Werte</div>
          <div className="grid gap-px bg-border md:grid-cols-2">
            {[
              {
                t: "Neugier vor Meinung",
                d: "Ich gehe in jedes Gespräch mit echten Fragen — nicht mit Thesen, die ich bestätigen will.",
              },
              {
                t: "Respekt vor Reichweite",
                d: "Eine gute Geschichte braucht keinen reißerischen Titel. Die Menschen, mit denen ich spreche, sind keine Klickware.",
              },
              {
                t: "Stille zulassen",
                d: "Manche Antworten brauchen Zeit. Ich schneide keine Pausen weg, in denen jemand wirklich nachdenkt.",
              },
              {
                t: "Keine Agenda",
                d: "Kanibeli ist nicht politisch, nicht esoterisch, nicht belehrend. Es geht um den Menschen, nicht um eine Botschaft.",
              },
            ].map((v) => (
              <div key={v.t} className="bg-background p-8 md:p-12">
                <h3 className="text-2xl">{v.t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
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
              Jede Folge ist ein Gespräch von 45 bis 90 Minuten mit einem Menschen, dessen Weg sich
              vom gewohnten unterscheidet. Keine Werbespots in der Mitte. Keine inszenierten
              Konflikte. Kein Bewerten.
            </p>
            <p>
              Stattdessen: ehrliche Fragen, ungeschnittene Antworten und die Bereitschaft, auch dort
              hinzuhören, wo es unbequem wird. Neue Folgen erscheinen alle zwei Wochen, mittwochs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
