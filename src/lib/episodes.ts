export type Episode = {
  number: number;
  slug: string;
  title: string;
  guest: string;
  guestRole: string;
  excerpt: string;
  date: string; // ISO
  duration: string;
};

export const episodes: Episode[] = [
  {
    number: 1,
    slug: "coming-soon-1",
    title: "Coming Soon",
    guest: "Demnächst verfügbar",
    guestRole: "Erste Folge in Planung",
    excerpt:
      "Die erste Episode des Kanibeli Podcasts ist in Vorbereitung. Bald hier: ein ehrliches Gespräch mit einem Menschen, der seinen eigenen Weg geht.",
    date: "2026-07-01",
    duration: "—",
  },
  {
    number: 2,
    slug: "coming-soon-2",
    title: "Coming Soon",
    guest: "Demnächst verfügbar",
    guestRole: "Zweite Folge in Planung",
    excerpt:
      "Eine weitere außergewöhnliche Geschichte wartet darauf, erzählt zu werden. Neue Folgen erscheinen alle zwei Wochen.",
    date: "2026-07-15",
    duration: "—",
  },
  {
    number: 3,
    slug: "coming-soon-3",
    title: "Coming Soon",
    guest: "Demnächst verfügbar",
    guestRole: "Dritte Folge in Planung",
    excerpt:
      "Noch in Arbeit: Ein Gespräch über ein Leben, das anders aussieht als das der meisten — und genau deshalb hörenswert ist.",
    date: "2026-07-29",
    duration: "—",
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
