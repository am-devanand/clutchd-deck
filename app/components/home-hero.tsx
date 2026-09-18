import { getTranslations } from "next-intl/server";
import HomePhone from "./home-phone";

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
// with ClutchD s1 copy and beacon-blue tokens. The phone is a live, animated
// ClutchD app demo (home-phone.tsx): SOS → accepted → en route → arriving,
// grounded in docs/CLUTCHD-FACTS.md. Photo-free: no images, no canvas.
export default async function HomeHero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "screens.s1" });
  const headline = t.raw("headline") as string[];
  const stats = t.raw("stats") as S1Stat[];
  const cardRows = t.raw("cardRows") as S1CardRow[];
  const phone = t.raw("phone") as React.ComponentProps<typeof HomePhone>["phone"];
  const liveStat = stats[1];

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
          <div className="min-w-0 space-y-10 pt-10 text-center lg:col-span-6 lg:pt-0 lg:text-left">
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
              <h1 className="text-balance text-5xl font-black leading-[1] tracking-tighter text-ink drop-shadow-sm lg:text-6xl xl:text-7xl">
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
            <div className="flex min-w-0 flex-col flex-wrap justify-center gap-5 sm:flex-row lg:justify-start">
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

          {/* Right: radar + dispatch widget + animated phone (live lifecycle
              demo, stage-synced) — all movement lives in the client component
              so the floating card and the phone move together */}
          <div className="relative isolate mt-16 flex min-w-0 justify-center px-4 sm:px-0 lg:col-span-6 lg:mt-0 lg:justify-end">
            <HomePhone
              phone={phone}
              cardLabel={t("cardLabel")}
              sys={t("sys")}
              locating={cardRows[0].label}
              locatingValue={cardRows[0].value}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
