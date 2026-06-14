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
    number: 12,
    slug: "leben-auf-dem-segelboot",
    title: "Ein Leben auf dem Segelboot",
    guest: "Marlene Voss",
    guestRole: "Weltumseglerin",
    excerpt:
      "Marlene hat ihre Wohnung gekündigt, ihren Job aufgegeben und lebt seit sieben Jahren auf zwölf Quadratmetern. Ein Gespräch über Weite, Sturm und das, was wirklich zählt.",
    date: "2026-06-10",
    duration: "1 Std 12 Min",
  },
  {
    number: 11,
    slug: "der-letzte-uhrmacher",
    title: "Der letzte Uhrmacher seiner Stadt",
    guest: "Henning Brandt",
    guestRole: "Uhrmachermeister",
    excerpt:
      "Henning repariert seit 41 Jahren mechanische Uhren – in einer Werkstatt, die aussieht wie 1962. Über Geduld, Handwerk und die Würde der langsamen Dinge.",
    date: "2026-05-27",
    duration: "58 Min",
  },
  {
    number: 10,
    slug: "ich-spreche-mit-baeumen",
    title: "Ich spreche mit Bäumen",
    guest: "Dr. Esra Yildiz",
    guestRole: "Waldökologin",
    excerpt:
      "Esra forscht an der Kommunikation von Bäumen – und hat ihr Verhältnis zu Natur grundlegend verändert. Was Wissenschaft mit Demut zu tun hat.",
    date: "2026-05-13",
    duration: "1 Std 04 Min",
  },
  {
    number: 9,
    slug: "vom-banker-zum-imker",
    title: "Vom Investmentbanker zum Imker",
    guest: "Julian Krause",
    guestRole: "Imker",
    excerpt:
      "Julian verdiente in London sechsstellig. Heute lebt er in einem 600-Seelen-Dorf und verkauft Honig auf dem Wochenmarkt. Eine ehrliche Bilanz.",
    date: "2026-04-29",
    duration: "1 Std 21 Min",
  },
  {
    number: 8,
    slug: "ein-jahr-ohne-geld",
    title: "Ein Jahr ohne Geld",
    guest: "Nora Behrend",
    guestRole: "Autorin",
    excerpt:
      "Nora hat 365 Tage ohne einen einzigen Euro gelebt – nicht aus Not, sondern als Experiment. Was sie über Würde, Gemeinschaft und sich selbst gelernt hat.",
    date: "2026-04-15",
    duration: "1 Std 09 Min",
  },
  {
    number: 7,
    slug: "die-hoehlenforscherin",
    title: "Die Höhlenforscherin",
    guest: "Anke Reuter",
    guestRole: "Speläologin",
    excerpt:
      "Anke verbringt Wochen in völliger Dunkelheit, hunderte Meter unter der Erde. Über Angst, Stille und das Gefühl, am Anfang der Welt zu stehen.",
    date: "2026-04-01",
    duration: "52 Min",
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
