import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";

interface Row {
  phase: string;
  idx: string;
  body: string;
  sub: string;
  pill: string;
  pillActive: boolean;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.roadmap" });
  return pageMeta({
    locale,
    path: "/roadmap",
    meta: { title: t("title"), description: t("description") },
  });
}

// /roadmap mirrors the ResQNow CitiesPage rhythm — launch-city hero with map
// visual, phase rows, expansion teaser — filled with our s7 copy. No dates
// are promised anywhere; each phase opens when the pilot proves it.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s7" });
  const headline = t.raw("headline") as string[];
  const rows = t.raw("rows") as Row[];
  const details = t.raw("details") as string[];

  return (
    <div className="w-full bg-paper">
      {/* Hero — launch-city copy + pilot-grid visual (CitiesPage hero rhythm) */}
      <section
        aria-label="Roadmap hero"
        className="relative overflow-hidden pb-24 pt-16 lg:pt-24"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-beacon/10 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-beacon/20 bg-beacon/10 px-4 py-2">
              <span className="text-sm font-black text-beacon" aria-hidden="true">
                ◎
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-beacon">
                {t("phase")}
              </span>
            </div>
            <h1 className="mb-8 text-balance text-5xl font-black leading-[1.02] tracking-tight text-ink lg:text-7xl">
              {headline[0]}
              <br />
              <span className="text-beacon">{headline[1]}</span>
            </h1>
            <p className="mb-8 text-xl font-medium leading-relaxed text-muted lg:text-2xl">
              {t("expansionBody")}
            </p>
            <div className="flex items-center gap-4 font-bold text-muted">
              <span className="relative flex h-5 w-5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-40 motion-safe:animate-ping" />
                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-beacon text-[9px] text-white">
                  ♥
                </span>
              </span>
              <span>
                {t("pilotLabel")} {t("pilotValue")}
              </span>
            </div>
          </div>

          {/* Pilot-grid visual — static coverage card, local only */}
          <div className="relative flex w-full items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-line bg-white/90 p-8 shadow-xl backdrop-blur-2xl">
              <div
                className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-line"
                aria-hidden="true"
              />
              <div className="relative mb-6 h-[240px] overflow-hidden rounded-xl border border-line bg-white/50">
                <svg
                  className="absolute inset-0 h-full w-full opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="roadmap-grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="#1A5CFF"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#roadmap-grid)" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-beacon/20 motion-safe:animate-ping" />
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-beacon font-black text-white shadow-lg shadow-blue-500/30">
                    ◎
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 rounded-lg border border-beacon/20 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur">
                  <span className="font-mono text-[10px] font-bold text-beacon">
                    {t("pilotValue")}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[10px] text-muted">{t("coord")}</span>
                <span className="rounded-full border border-beacon/25 bg-beacon/10 px-2 py-0.5 font-mono text-[9px] font-bold text-beacon">
                  {t("engine")}
                </span>
              </div>
              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                {t("spec")} · {t("page")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase rows (launch-city + expansion rhythm, no dates) */}
      <section aria-label="Phases" className="rn-section bg-paper">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">
            {t("eyebrow")}
          </p>
          {rows.map((row) => (
            <article
              key={row.phase}
              className="rn-card group relative overflow-hidden p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                <div className="flex shrink-0 items-baseline gap-2">
                  <span className="text-3xl font-black tracking-tight text-ink transition-colors group-hover:text-beacon">
                    {row.phase}
                  </span>
                  <span className="font-mono text-sm font-bold text-muted">{row.idx}</span>
                </div>
                <div className="flex-1">
                  <p className="mb-2 text-lg font-medium leading-relaxed text-ink">{row.body}</p>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                    {row.sub}
                  </p>
                </div>
                <span
                  className={`inline-flex w-fit shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider ${
                    row.pillActive
                      ? "bg-beacon text-white shadow-md shadow-blue-200"
                      : "border border-line bg-slate-50 text-muted"
                  }`}
                >
                  {row.pillActive ? (
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                  ) : null}
                  {row.pill}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Expansion teaser (CitiesPage expansion-card rhythm) */}
      <section aria-label="Expansion" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto flex max-w-5xl flex-col items-center overflow-hidden rounded-[3rem] border border-line bg-white p-12 text-center shadow-sm lg:p-20">
            <div
              className="absolute inset-x-0 top-0 h-px bg-beacon/50"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute bottom-[-160px] left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-beacon/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-beacon/20 bg-beacon/10 shadow-sm">
                <span className="text-3xl font-black text-beacon" aria-hidden="true">
                  ◎
                </span>
              </div>
              <h2 className="mb-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-ink lg:text-6xl">
                {t("expansionTitle")}
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-muted">
                {t("expansionBody")}
              </p>
              <ul className="mx-auto mb-10 flex max-w-3xl flex-col gap-4 text-left">
                {details.map((d) => (
                  <li key={d.slice(0, 24)} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-muted">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-beacon" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mb-8 max-w-2xl border-t border-line pt-8 text-base font-bold text-ink">
                {t("honesty")}
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-beacon px-6 py-3 text-sm font-bold text-white shadow-lg">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                {t("pilotLabel")} {t("pilotValue")}
              </div>
              <p className="mt-6 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
                {t("velocity")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
