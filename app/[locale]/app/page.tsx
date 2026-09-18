import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import Image from "next/image";

interface Phone {
  code: string;
  meta: string;
  title: string;
  body: string;
  img: { src: string; alt: string; width: number; height: number };
}

interface Metric {
  k: string;
  v: string;
  s: string;
}

// P4: /app had no per-page metadata before.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.app" });
  return pageMeta({
    locale,
    path: "/app",
    meta: { title: t("title"), description: t("description") },
  });
}

// /app mirrors the ResQNow Marketplace rhythm — hero band with badges,
// guide strip, store/phone card grid — filled with our s6 guide/install
// copy. No prices, no fake stock: cards show the six app screens only.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s6" });
  const headline = t.raw("headline") as string[];
  const phones = t.raw("phones") as Phone[];
  const metrics = t.raw("metrics") as Metric[];
  const installSteps = t.raw("installSteps") as string[];

  return (
    <div className="w-full bg-paper">
      {/* Hero band (marketplace-hero rhythm — soft brand mist, local texture only) */}
      <section
        aria-label="App hero"
        className="relative overflow-hidden bg-[#EAF1FE] py-20 text-ink"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(26,92,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,92,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute right-[-10%] top-[-30%] h-[400px] w-[400px] rounded-full bg-beacon/10 blur-[100px]" />
        <div className="relative z-10 mx-auto px-6 text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-ink">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t("live")} · {t("frame")}
          </p>
          <h1 className="mx-auto mb-6 max-w-3xl text-balance text-4xl font-bold text-ink md:text-6xl">
            {headline[0]} {headline[1]}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted">{t("sub")}</p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {metrics.map((m) => (
              <span
                key={m.k}
                className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm font-bold text-ink backdrop-blur"
              >
                {m.v} · {m.k}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Guide strip (filter-toolbar rhythm — install steps, no fake search) */}
      <section aria-label="Install guide" className="border-b border-line bg-white/50 py-8 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-beacon">
            {t("eyebrow")}
          </p>
          <ol className="flex flex-wrap gap-3">
            {installSteps.map((step, i) => (
              <li
                key={step.slice(0, 24)}
                className="flex max-w-xs items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-left shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-beacon text-xs font-black text-white">
                  {i + 1}
                </span>
                <span className="text-xs font-medium leading-snug text-muted">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Screen grid (product-card rhythm: image, badge, title, body) */}
      <section aria-label="App screens" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center md:text-left">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">
              {t("sysref")}
            </p>
            <h2 className="text-balance text-3xl font-black tracking-tight text-ink md:text-5xl">
              {t("closerTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-muted md:mx-0">
              {t("closerBody")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {phones.map((p) => (
              <article
                key={p.code}
                className="rn-card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden border-b border-line bg-slate-100">
                  <Image
                    src={p.img.src}
                    alt={p.img.alt}
                    width={p.img.width}
                    height={p.img.height}
                    className="h-auto w-full"
                  />
                  <div className="absolute right-2 top-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-beacon shadow-sm backdrop-blur">
                      {p.meta}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">
                    {p.code}
                  </p>
                  <h3 className="mb-2 text-xl font-black tracking-tight text-ink transition-colors group-hover:text-beacon">
                    {p.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-muted">{p.body}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Closer CTA */}
          <div className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-3xl bg-beacon p-8 text-center text-white shadow-2xl">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-white blur-xl" />
              <div className="absolute bottom-4 right-4 h-16 w-16 rounded-full bg-white blur-xl" />
            </div>
            <div className="relative z-10">
              <h2 className="mb-2 text-2xl font-black">{t("closerTitle")}</h2>
              <p className="mb-6 text-lg text-white/90">
                {t("proceed")} · {t("proceedSub")}
              </p>
              <a
                href={`/${locale}/download`}
                className="inline-block rounded-2xl bg-white px-8 py-3 font-bold text-beacon shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                {t("proceed")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
