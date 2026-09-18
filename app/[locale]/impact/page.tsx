import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import HomeReviews from "../../components/home-reviews";

interface Stat {
  v: string;
  u: string;
  label: string;
  bar: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.impact" });
  return pageMeta({
    locale,
    path: "/impact",
    meta: { title: t("title"), description: t("description") },
  });
}

// /impact mirrors the ResQNow About rhythm — corporate hero, method card,
// scope/proof pillars, telemetry stats, voices — filled with our s5 proof
// copy. Illustrative labels are kept verbatim; no measured claims.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s5" });
  const stats = t.raw("stats") as Stat[];
  const methodBody = t.raw("methodBody") as string[];

  return (
    <div className="w-full bg-paper">
      {/* Hero — centered pill, giant metric, proof sub (About hero rhythm) */}
      <section
        aria-label="Impact hero"
        className="relative overflow-hidden border-b border-line pb-24 pt-16 lg:pb-28 lg:pt-24"
      >
        {/* Soft gradient wash: white → cool blue → warm beige + one glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffffff 0%, #eef3ff 48%, #fbf6ec 100%)",
          }}
        />
        <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-[800px] w-[800px] rounded-full bg-beacon/10 blur-[100px]" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-line bg-white/80 px-5 py-2.5 text-xs font-black uppercase tracking-[0.25em] text-ink shadow-sm backdrop-blur-xl">
            <span className="h-4 w-4 font-black text-beacon" aria-hidden="true">
              ◎
            </span>
            {t("metric")}
          </div>
          <h1 className="mb-8 text-balance text-5xl font-black leading-[1.02] tracking-tight text-ink lg:text-8xl">
            {t("giant")}
            <br />
            <span className="text-amber">{t("badge")}</span>
          </h1>
          <p className="max-w-4xl text-xl font-medium leading-relaxed text-muted lg:text-2xl">
            {t("proof")}
          </p>
          <p className="mt-6 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            {t("poolLabel")} {t.raw("poolStart") as number} {t("poolSuffix")}
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        {/* Method card (certification-card rhythm: badge, title, body) */}
        <div className="group relative mb-24 flex flex-col items-center gap-10 overflow-hidden rounded-[3rem] border border-line bg-white/60 p-10 shadow-sm backdrop-blur-3xl lg:flex-row lg:gap-16 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-beacon/[0.03] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          <div className="relative z-10 flex h-40 w-40 shrink-0 items-center justify-center rounded-3xl border border-line bg-white p-6 shadow-sm transition-transform duration-700 group-hover:scale-105 lg:h-48 lg:w-48">
            <span className="font-mono text-2xl font-black text-beacon" aria-hidden="true">
              {t("rail")}
            </span>
          </div>
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-emerald-600">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("active")}
            </p>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-ink lg:text-5xl">
              {t("methodTitle")}
            </h2>
            {methodBody.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mb-4 text-xl font-medium leading-relaxed text-muted last:mb-0"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Scope / proof pillars (mission-light + vision-dark rhythm) */}
        <div className="mb-24 grid gap-10 lg:grid-cols-2">
          <div className="group relative h-full overflow-hidden rounded-[3rem] border border-line bg-white/80 p-12 shadow-sm backdrop-blur-xl transition-all duration-700 hover:bg-white lg:p-16">
            <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[400px] w-[400px] rounded-full bg-beacon/10 blur-[80px] transition-colors duration-700 group-hover:bg-beacon/20" />
            <div className="relative z-10">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-beacon text-4xl font-black text-white shadow-lg shadow-blue-500/30 transition-transform duration-500 group-hover:scale-110">
                ◎
              </div>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-ink">
                {t("scopeTitle")}
              </h2>
              <p className="text-xl font-medium leading-relaxed text-muted">{t("scopeBody")}</p>
            </div>
          </div>
          <div className="group relative h-full overflow-hidden rounded-[3rem] border border-ink bg-ink p-12 shadow-xl lg:p-16">
            <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[400px] w-[400px] rounded-full bg-beacon/30 blur-[80px] transition-colors duration-700 group-hover:bg-beacon/40" />
            <div className="relative z-10 text-white">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-ink shadow-lg transition-transform duration-500 group-hover:scale-110">
                <span className="text-3xl font-black text-beacon" aria-hidden="true">
                  ◈
                </span>
              </div>
              <p className="mb-4 text-6xl font-black tracking-tighter">{t("giant")}</p>
              <h2 className="mb-6 text-4xl font-black tracking-tight">{t("homeTitle")}</h2>
              <p className="text-xl font-medium leading-relaxed text-white/70">{t("proof")}</p>
            </div>
          </div>
        </div>

        {/* Telemetry stats (illustrative labels kept verbatim) */}
        <div className="mb-24">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h2 className="mb-3 text-4xl font-black tracking-tight text-ink">{t("metric")}</h2>
              <p className="text-lg font-medium text-muted">{t("srNote")}</p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-600">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("active")}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rn-card group relative flex h-full flex-col items-start overflow-hidden p-10"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-slate-50 shadow-sm transition-colors duration-500 group-hover:bg-beacon group-hover:text-white">
                  <span
                    className="text-xl font-black text-ink transition-colors duration-500 group-hover:text-white"
                    aria-hidden="true"
                  >
                    ◈
                  </span>
                </div>
                <p className="mb-3 text-5xl font-black tracking-tighter text-ink">
                  {s.v}
                  <span className="text-2xl text-muted">{s.u}</span>
                </p>
                <p className="mb-6 text-sm font-bold uppercase tracking-wider text-muted">
                  {s.label}
                </p>
                <div
                  className="h-1.5 w-full overflow-hidden rounded-full bg-line"
                  role="img"
                  aria-label={`${s.label}: ${s.bar}`}
                >
                  <div className="h-full rounded-full bg-beacon/60" style={{ width: s.bar }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Voices (s5 testimonials carousel, ResQNow-carded) */}
        <HomeReviews />
      </div>
    </div>
  );
}
