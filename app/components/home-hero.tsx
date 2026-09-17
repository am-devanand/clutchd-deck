import { getTranslations } from "next-intl/server";

interface S1Stat {
  v: string;
  l: string;
}

interface S1CardRow {
  label: string;
  value: string;
  pct: string;
}

// Homepage hero — mirrors the ResQNow Hero composition (trust pill → ink H1
// → sub → CTA row → proof row → radar + dispatch widget + CSS phone mockup)
// with ClutchD s1 copy and beacon-blue tokens. Photo-free: the phone is a
// styled CSS shell with text rows; no images, no canvas.
export default async function HomeHero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "screens.s1" });
  const headline = t.raw("headline") as string[];
  const stats = t.raw("stats") as S1Stat[];
  const cardRows = t.raw("cardRows") as S1CardRow[];
  const liveStat = stats[1];
  const barTones = ["bg-beacon", "bg-emerald-500", "bg-beacon"];

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden border-b border-line bg-paper pb-24 pt-16"
    >
      {/* Soft glows (beacon, never red) + dot texture */}
      <div className="pointer-events-none absolute right-[10%] top-0 h-[600px] w-[600px] rounded-full bg-beacon/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-slate-200/70 blur-[100px]" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="home-hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#0f172a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#home-hero-dots)" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy + CTAs */}
          <div className="space-y-10 pt-10 text-center lg:col-span-6 lg:pt-0 lg:text-left">
            {/* Trust badge: emerald live dot + s1 live-network line */}
            <div className="mx-auto inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur-md transition-transform hover:scale-105 lg:mx-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-muted">
                {liveStat.v} {liveStat.l}
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-balance text-5xl font-black leading-[1] tracking-tighter text-ink drop-shadow-sm lg:text-[5rem]">
                {headline[0]} <br className="hidden lg:block" />
                <span className="text-beacon">{headline[1]}</span>
                <br />
                {headline[2]} {headline[3]}
              </h1>
              <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-muted lg:mx-0 lg:text-xl">
                {t("sub")}
              </p>
            </div>

            {/* CTA row: primary solid-blue → download, secondary outline → services */}
            <div className="flex flex-col justify-center gap-5 sm:flex-row lg:justify-start">
              <a
                href={`/${locale}/download`}
                className="u-btn-grad group relative overflow-hidden rounded-[1.25rem] px-10 py-4 text-center text-lg font-black text-white"
              >
                <span
                  className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/20 to-transparent mix-blend-overlay"
                  aria-hidden="true"
                />
                <span className="relative z-10 inline-flex items-center gap-3">
                  <span
                    className="relative flex h-2.5 w-2.5"
                    aria-hidden="true"
                  >
                    <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  {t("ctaSecondary")}
                </span>
              </a>
              <a
                href="#services"
                className="group rounded-[1.25rem] border-2 border-beacon/30 bg-white/80 px-10 py-4 text-center text-lg font-bold text-beacon shadow-sm backdrop-blur-md transition-all hover:border-beacon hover:bg-beacon hover:text-white hover:shadow-md"
              >
                <span className="inline-flex items-center gap-3">
                  {t("ctaPrimary")}
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </span>
              </a>
            </div>

            {/* Social-proof mini row with dividers (s1 stats) */}
            <div className="rn-stat-row mx-auto max-w-md flex-wrap justify-center gap-y-4 border-t border-line pt-4 lg:mx-0 lg:justify-start">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="flex flex-col gap-0.5 px-5 first:pl-0 last:pr-0"
                >
                  <span className="text-lg font-black tabular-nums text-ink">
                    {s.v}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: radar + dispatch widget + CSS phone mockup */}
          <div className="relative isolate mt-16 flex justify-center px-4 sm:px-0 lg:col-span-6 lg:mt-0 lg:justify-end">
            {/* Radar rings */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
              aria-hidden="true"
            >
              <div className="absolute h-[300px] w-[300px] rounded-full border border-beacon/20 motion-safe:animate-ping sm:h-[500px] sm:w-[500px]" />
              <div className="absolute h-[200px] w-[200px] rounded-full border border-beacon/30 motion-safe:animate-pulse sm:h-[350px] sm:w-[350px]" />
              <div className="absolute h-[100px] w-[100px] rounded-full border border-beacon/40 sm:h-[200px] sm:w-[200px]" />
            </div>

            {/* Floating dispatch widget (s1 cardRows, blue ping) */}
            <div className="absolute -left-4 top-12 z-30 hidden rounded-2xl border border-line/60 bg-white/95 p-4 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-transform hover:-translate-y-1 sm:-left-12 sm:top-24 sm:block">
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-beacon/10 ring-2 ring-beacon/20">
                  <span className="relative flex h-3 w-3" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-beacon" />
                  </span>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-white bg-emerald-500" />
                </div>
                <div className="pr-2">
                  <p className="mb-0.5 text-[10px] font-black uppercase tracking-widest text-beacon">
                    {t("cardLabel")}
                  </p>
                  <p className="text-sm font-bold text-ink">{cardRows[0].label}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-muted">
                    {cardRows[0].value} · {t("sys")}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone mockup: CSS dispatch card shell with text rows */}
            <div className="relative z-20 w-full max-w-md overflow-hidden rounded-[2.5rem] border border-line bg-white/90 p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-2xl sm:p-10">
              <div
                className="mx-auto mb-6 h-1.5 w-16 rounded-full bg-line"
                aria-hidden="true"
              />
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-ink">
                    {t("cardLabel")}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-muted">{t("coords")}</p>
                </div>
                <div className="rounded-2xl bg-beacon/10 p-3">
                  <span className="relative flex h-6 w-6" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-50 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-beacon text-[10px] font-black text-white">
                      ◎
                    </span>
                  </span>
                </div>
              </div>

              {/* Map abstraction with blue ping */}
              <div className="relative mb-5 h-[170px] overflow-hidden rounded-xl border border-line bg-white/50">
                <svg
                  className="absolute inset-0 h-full w-full opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="home-map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A5CFF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#home-map-grid)" />
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-beacon/20 motion-safe:animate-ping" />
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-beacon shadow-lg shadow-blue-500/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" aria-hidden="true">
                      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                </div>
                <div className="absolute left-[28%] top-[28%]">
                  <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                  <div className="mt-1 rounded-md border border-beacon/20 bg-beacon px-1.5 py-0.5">
                    <span className="font-mono text-[9px] font-bold text-white">
                      {cardRows[2].value}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress rows */}
              <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
                <div className="space-y-3.5">
                  {cardRows.map((row, i) => (
                    <div key={row.label} className="flex items-center gap-3">
                      <span className="w-36 text-xs text-muted">{row.label}</span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                        <div
                          className={`h-full rounded-full ${barTones[i % barTones.length]}`}
                          style={{ width: row.pct }}
                        />
                      </div>
                      <span className="w-10 text-right font-mono text-[10px] font-bold text-beacon">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="font-mono text-[9px] text-muted">{t("coords")}</span>
                  <span className="rounded-full border border-beacon/25 bg-beacon/10 px-2 py-0.5 font-mono text-[9px] text-beacon">
                    {t("packet")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
