import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container-x flex flex-1 flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow mb-6">404</div>
        <h1 className="text-5xl md:text-7xl">Diese Seite existiert nicht.</h1>
        <p className="mt-6 max-w-md text-muted-foreground">
          Die Seite wurde verschoben, umbenannt oder hat es nie gegeben. Zurück zum Anfang?
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-widest text-background"
        >
          Zur Startseite
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">Etwas ist schiefgelaufen</div>
        <h1 className="text-3xl">Diese Seite konnte nicht geladen werden.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-foreground px-5 py-2 text-xs font-medium uppercase tracking-widest text-background"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="rounded-full border border-border px-5 py-2 text-xs font-medium uppercase tracking-widest"
          >
            Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kanibeli Podcast — Außergewöhnliche Menschen. Ehrliche Geschichten." },
      {
        name: "description",
        content:
          "Interview-Podcast über Menschen mit außergewöhnlichen Lebenswegen — neugierig, respektvoll, ohne Bewertung.",
      },
      { name: "author", content: "Kanibeli Podcast" },
      { property: "og:site_name", content: "Kanibeli Podcast" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
