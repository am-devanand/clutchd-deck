import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";

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

interface AppImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Per-locale metadata + hreflang alternates (P4).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.features" });
  return pageMeta({
    locale,
    path: "/features",
    meta: { title: t("title"), description: t("description") },
  });
}

// /features mirrors the ResQNow ServicesPage rhythm — centered enterprise
// hero, mini-stat strip, anchor filter bar, service-card grid, CTA band —
// filled with our s2 catalog (pillars + commitments + minis). Display only.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s2" });
  const pillars = t.raw("pillars") as Pillar[];
  const commitments = t.raw("commitments") as Commitment[];
  const minis = t.raw("minis") as Mini[];
  const appImage = t.raw("image") as AppImage;

  return (
    <div className="w-full bg-paper">
      {/* Hero — centered pill, ink H1, sub (ServicesPage hero rhythm) */}
      <section
        aria-label="Features hero"
        className="relative overflow-hidden border-b border-line pb-20 pt-16 lg:pb-24 lg:pt-24"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-beacon/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-slate-200/70 blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-ink shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t("livePill")}
          </div>
          <h1 className="mb-8 text-balance text-5xl font-black leading-[1.05] tracking-tight text-ink lg:text-7xl">
            {t("headlineA")} <span className="text-beacon">{t("headlineBrand")}</span>
            {t("headlineB") ? ` ${t("headlineB")}` : ""}
          </h1>
          <p className="max-w-3xl text-lg font-medium leading-relaxed text-muted lg:text-2xl">
            {t("sub")}
          </p>
          {/* Mini-stat strip (s2 minis) */}
          <div className="rn-stat-row mt-10 max-w-2xl flex-wrap justify-center gap-y-4 border-t border-line pt-4 lg:justify-start">
            {minis.map((m) => (
              <div key={m.k} className="flex flex-col gap-0.5 px-5 first:pl-0">
                <span className="text-lg font-black tabular-nums text-ink">{m.v}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                  {m.k} · {m.s}
                </span>
              </div>
            ))}
          </div>
          </div>
          {/* Hero visual: the real app interface photo (s2 image) */}
          <figure className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[2.5rem] border border-line bg-white p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
              <Image
                src={appImage.src}
                alt={appImage.alt}
                width={appImage.width}
                height={appImage.height}
                className="h-auto w-full rounded-[2rem]"
              />
            </div>
            <figcaption className="mx-auto mt-4 max-w-[280px] text-center text-xs font-medium leading-relaxed text-muted">
              {appImage.alt}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Anchor filter bar (CategoryFilters rhythm — jump links, no fake state) */}
      <div className="mx-auto mt-12 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-fit rounded-3xl border border-line bg-white/70 p-4 shadow-sm backdrop-blur-2xl lg:p-6">
          <nav aria-label="Feature sections" className="flex flex-wrap justify-center gap-2">
            <a
              href="#pillars"
              className="rounded-full bg-beacon px-5 py-2 text-sm font-bold text-white shadow-md shadow-blue-200 transition-all hover:bg-[#1B237E]"
            >
              {t("pillarsTitle")}
            </a>
            <a
              href="#commitments"
              className="rounded-full border border-line bg-white/70 px-5 py-2 text-sm font-bold text-muted shadow-sm backdrop-blur transition-all hover:border-beacon hover:text-ink"
            >
              {t("commitmentsTitle")}
            </a>
          </nav>
        </div>
      </div>

      {/* Pillars grid (service-card rhythm: code badge, title, body, hover lift) */}
      <section id="pillars" aria-label="Pillars" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">
            {t("pillarsTitle")}
          </p>
          <p className="mb-10 max-w-2xl text-lg font-medium text-muted">{t("pillarsSub")}</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <article
                key={p.t}
                className="rn-card group relative flex h-full flex-col overflow-hidden p-8"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-beacon/10 px-2 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <span className="font-data text-[10px] font-bold leading-tight text-beacon">
                      {minis[i]?.v ?? `0${i + 1}`}
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-beacon">
                    {p.t}
                  </h3>
                  <p className="mb-8 flex-grow font-medium leading-relaxed text-muted">{p.body}</p>
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-beacon opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <span>{minis[i]?.s ?? ""}</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments grid (same card rhythm, TRUST framing) */}
      <section id="commitments" aria-label="Commitments" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">
            {t("commitmentsTitle")}
          </p>
          <p className="mb-10 max-w-2xl text-lg font-medium text-muted">{t("commitmentsSub")}</p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((c) => (
              <article
                key={c.code}
                className="rn-card group relative flex h-full flex-col overflow-hidden p-8"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-beacon/10 px-2 shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <span className="font-mono text-[10px] font-bold leading-tight text-beacon">
                      {c.code}
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-black tracking-tight text-ink transition-colors duration-300 group-hover:text-beacon">
                    {c.t}
                  </h3>
                  <p className="flex-grow font-medium leading-relaxed text-muted">{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (solid beacon, s2 CTA copy) */}
      <section aria-label="Get started" className="rn-section bg-paper">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl bg-beacon p-8 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-white blur-xl" />
            <div className="absolute bottom-4 right-4 h-16 w-16 rounded-full bg-white blur-xl" />
          </div>
          <div className="relative z-10">
            <h2 className="mb-2 text-2xl font-black">{t("ctaPrimary")}</h2>
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
      </section>
    </div>
  );
}
