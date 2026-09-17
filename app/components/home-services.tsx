import { getTranslations } from "next-intl/server";

interface Pillar {
  t: string;
  body: string;
}

interface Commitment {
  code: string;
  t: string;
  body: string;
}

interface Mini {
  k: string;
  v: string;
  s: string;
}

interface ServiceCard {
  code: string;
  title: string;
  body: string;
}

// Homepage services — mirrors the ResQNow Services bento grid with the s2
// catalog (3 pillars + 5 commitments = 8 cards). Display only, no booking.
export default async function HomeServices({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "screens.s2" });
  const pillars = t.raw("pillars") as Pillar[];
  const commitments = t.raw("commitments") as Commitment[];
  const minis = t.raw("minis") as Mini[];

  const cards: ServiceCard[] = [
    ...pillars.map((p, i) => ({
      code: minis[i]?.v ?? `0${i + 1}`,
      title: p.t,
      body: p.body,
    })),
    ...commitments.map((c) => ({ code: c.code, title: c.t, body: c.body })),
  ];

  return (
    <section
      id="services"
      aria-label="Services"
      className="rn-section bg-gradient-to-b from-paper to-slate-50"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="mb-16 mt-8 text-left">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-beacon/20 bg-beacon/10 px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-beacon" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-widest text-beacon">
                  {t("eyebrow")}
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight text-ink md:text-5xl">
                {t("headlineA")} <span className="text-beacon">{t("headlineBrand")}</span>
              </h2>
              <p className="text-lg font-medium text-muted md:text-xl">{t("sub")}</p>
            </div>
            <a
              href={`/${locale}/how-it-works`}
              className="group hidden items-center rounded-2xl border border-line bg-white px-6 py-4 font-bold text-ink shadow-sm transition-colors hover:bg-slate-50 md:inline-flex"
            >
              {t("ctaSecondary")}
              <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rn-card group relative isolate overflow-hidden p-8"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-beacon opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10"
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col text-left">
                <div className="mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem] bg-beacon/10 px-2 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <span className="font-data text-[10px] font-bold leading-tight text-beacon">
                    {card.code}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-beacon">
                  {card.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-muted">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Early-access band (solid beacon, s2 CTA copy) */}
        <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl bg-beacon p-8 text-center text-white shadow-2xl">
          <div
            className="absolute inset-0 opacity-10"
            aria-hidden="true"
          >
            <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-white blur-xl" />
            <div className="absolute bottom-4 right-4 h-16 w-16 rounded-full bg-white blur-xl" />
          </div>
          <div className="relative z-10">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              {t("livePill")}
            </p>
            <h3 className="mb-2 text-2xl font-black">{t("ctaPrimary")}</h3>
            <p className="mb-6 text-lg text-white/90">{t("sub")}</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`/${locale}/download`}
                className="rounded-2xl bg-white px-8 py-3 font-bold text-beacon shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                {t("ctaPrimary")}
              </a>
              <a
                href={`/${locale}/how-it-works`}
                className="rounded-2xl border border-white/40 px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                {t("ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
