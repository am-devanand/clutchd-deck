import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import { s8 } from "../../../content/screens";

interface Card {
  k: string;
  v: string;
  u: string;
  f: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.download" });
  return pageMeta({
    locale,
    path: "/download",
    meta: { title: t("title"), description: t("description") },
  });
}

// /download mirrors the ResQNow Emergency rhythm — urgent CTA band on top,
// channel cards below — filled with our s8 copy ONLY. No contact form is
// added: the urgent/call/SMS channels below are the contact block.
// TODO(swap): pwaHref points at the Tailscale Funnel URL until clutchd.com
// is live; the APK card stays non-linking until a public APK URL exists;
// callHref (tel:911) is a stand-in — no real dispatch line published yet.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s8" });
  const cards = t.raw("cards") as Card[];
  const steps = t.raw("steps") as string[];
  const includes = t.raw("includes") as string[];

  return (
    <div className="w-full bg-paper">
      {/* Urgent CTA band (Emergency header rhythm — beacon, never red) */}
      <section aria-label="Urgent assistance" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-md px-4">
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lg">
            <div className="bg-beacon p-6 text-white">
              <h1 className="mb-2 text-2xl font-bold">{t("urgent")}</h1>
              <p className="text-white/90">{t("dispatch")}</p>
            </div>
            <div className="space-y-6 p-6">
              <div className="rounded-lg border border-line p-4">
                <h2 className="mb-3 flex items-center gap-2 font-semibold text-ink">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-beacon/10 text-xs font-black text-beacon" aria-hidden="true">
                    ◎
                  </span>
                  {t("call")}
                </h2>
                {/* TODO(swap): stand-in dispatch line, no real number published yet */}
                <a
                  href={s8.callHref}
                  className="u-btn-grad block rounded-2xl px-8 py-4 text-center text-lg font-black text-white"
                >
                  {t("call")}
                </a>
                <p className="mt-2 text-center text-xs text-muted">
                  {t("standby")} · {t("station")}
                </p>
              </div>
              <div className="flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-line" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">
                  {t("or")}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <a
                href={s8.smsHref}
                className="block rounded-2xl border-2 border-beacon/30 bg-white/80 px-8 py-4 text-center text-lg font-bold text-beacon transition-all hover:border-beacon hover:bg-beacon hover:text-white"
              >
                {t("sms")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Install channels (PWA link + APK-disabled, store badges non-linking) */}
      <section aria-label="Install channels" className="rn-section bg-paper">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
          <p className="rn-eyebrow mb-8">
            <span>{t("badge")}</span>
          </p>
          <h2 className="mb-6 text-balance text-5xl font-black leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {t("headlineA")}
            <br />
            {t("headlineB")} <span className="text-beacon">{t("headlineC")}</span>
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted">{t("sub")}</p>
          <div className="flex flex-col items-center gap-6">
            {/* TODO(swap): swap pwaHref to clutchd.com when live */}
            <a
              href={s8.pwaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="u-btn-grad group relative overflow-hidden rounded-full px-12 py-4 text-base font-black text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative flex items-center gap-3">
                {t("cta")}
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* TODO(swap): link the PWA card once published; href kept at pwaHref */}
              <a
                href={s8.pwaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rn-card group flex min-h-[44px] items-center gap-3 px-5 py-3 text-ink"
              >
                <span className="text-xl font-black text-beacon" aria-hidden="true">
                  ▦
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-[0.55rem] font-bold uppercase leading-none tracking-wider text-muted">
                    {t("pwaTop")}
                  </span>
                  <span className="text-sm font-bold leading-tight">{t("pwaLabel")}</span>
                </span>
              </a>
              {/* APK stays non-linking with SOON chip until a public APK URL exists */}
              <button
                type="button"
                aria-label={t("apkAria")}
                disabled
                className="flex cursor-not-allowed items-center gap-3 rounded-xl border border-line bg-white/50 px-5 py-3 text-muted backdrop-blur"
              >
                <span className="text-xl font-black" aria-hidden="true">
                  ▣
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-[0.55rem] font-bold uppercase leading-none tracking-wider">
                    {t("apkTop")}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-bold leading-tight">
                    {t("apkLabel")}
                    <span className="rounded-full bg-beacon/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-beacon">
                      {t("apkSoon")}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Network cards (telemetry rhythm) */}
      <section aria-label="Network" className="rn-section bg-paper">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {cards.map((c) => (
            <div key={c.k} className="rn-card flex flex-col items-start p-8">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-beacon">
                {c.k}
              </span>
              <span className="block text-4xl font-black tabular-nums text-ink">
                {c.v}
                {c.u ? <span className="ml-1 text-sm font-bold text-muted">{c.u}</span> : null}
              </span>
              <span className="mt-2 block text-xs font-medium text-muted">{c.f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Setup guide (steps + requirements + includes) */}
      <section aria-label="Setup guide" className="rn-section bg-paper">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 md:grid-cols-2">
          <div className="rn-card p-8">
            <h2 className="mb-6 text-2xl font-black tracking-tight text-ink">{t("stepsTitle")}</h2>
            <ol className="space-y-5">
              {steps.map((step, i) => (
                <li key={step.slice(0, 24)} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-beacon text-sm font-black text-white">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-8">
            <div className="rn-card p-8">
              <h2 className="mb-3 text-2xl font-black tracking-tight text-ink">{t("reqTitle")}</h2>
              <p className="text-sm font-medium leading-relaxed text-muted">{t("reqBody")}</p>
            </div>
            <div className="rn-card p-8">
              <h2 className="mb-4 text-2xl font-black tracking-tight text-ink">
                {t("includesTitle")}
              </h2>
              <ul className="space-y-3">
                {includes.map((line) => (
                  <li key={line.slice(0, 24)} className="flex items-start gap-3 text-sm font-bold text-ink">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-beacon" aria-hidden="true" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-12 max-w-5xl px-6 text-center font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
          {t("end")} · {t("endNum")} · {t("terminal")}
        </p>
      </section>
    </div>
  );
}
