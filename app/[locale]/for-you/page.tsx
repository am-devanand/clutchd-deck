import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";

interface Pod {
  code: string;
  title: string;
  body: string;
}

interface Trust {
  t: string;
  body: string;
}

interface Metric {
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.forYou" });
  return pageMeta({
    locale,
    path: "/for-you",
    meta: { title: t("title"), description: t("description") },
  });
}

// /for-you mirrors the WhyResQNow rhythm — mission hero with dispatch
// visual, problem/solution block, operations layer, audience grid,
// capability strip, final CTA — filled with our s4 roles/pods/closers plus
// s1 pain/trust and s2/s8 support copy. Display only, no booking.
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t4 = await getTranslations({ locale, namespace: "screens.s4" });
  const t1 = await getTranslations({ locale, namespace: "screens.s1" });
  const t2 = await getTranslations({ locale, namespace: "screens.s2" });
  const t3 = await getTranslations({ locale, namespace: "screens.s3" });
  const t6 = await getTranslations({ locale, namespace: "screens.s6" });
  const headline = t4.raw("headline") as string[];
  const roles = t4.raw("roles") as string[];
  const roleLabels = t4.raw("roleLabels") as Record<string, string>;
  const podsByRole = t4.raw("podsByRole") as Record<string, Pod[]>;
  const closers = t4.raw("closers") as Record<string, string>;
  const pain = t1.raw("headline") as string[];
  const trust = t1.raw("trust") as Trust[];
  const pillars = t2.raw("pillars") as { t: string; body: string }[];
  const commitments = t2.raw("commitments") as { code: string; t: string; body: string }[];
  const includes = (await getTranslations({ locale, namespace: "screens.s8" })).raw(
    "includes"
  ) as string[];
  const metrics = t6.raw("metrics") as Metric[];
  const requestImage = t4.raw("image") as AppImage;

  return (
    <div className="w-full bg-paper">
      {/* Hero — mission pill, ink H1, CTA row, dispatch visual */}
      <section
        aria-label="For you hero"
        className="relative overflow-hidden border-b border-line pb-24 pt-16 lg:pt-24"
      >
        <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-beacon/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-slate-200/70 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-12 px-6 lg:px-8">
          <div className="col-span-12 lg:col-span-7">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-beacon" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                {t4("realtime")}
              </span>
            </div>
            <h1 className="mb-8 text-balance text-5xl font-black leading-[1.02] tracking-tighter text-ink lg:text-7xl">
              {headline[0]} <span className="text-beacon">{headline[1]}</span>
              <br />
              {headline[2]}
            </h1>
            <p className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-muted lg:text-2xl">
              {t2("sub")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`/${locale}/download`}
                className="u-btn-grad group rounded-2xl px-8 py-4 text-center text-lg font-black text-white"
              >
                <span className="inline-flex items-center gap-3">
                  {t2("ctaPrimary")}
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
              <a
                href={`/${locale}/features`}
                className="rounded-2xl border-2 border-beacon/30 bg-white/80 px-8 py-4 text-center text-lg font-bold text-beacon shadow-sm backdrop-blur-md transition-all hover:border-beacon hover:bg-beacon hover:text-white"
              >
                {t2("ctaSecondary")}
              </a>
            </div>
          </div>

          {/* Dispatch visual — real service-request screenshot, LIVE badge */}
          <div className="col-span-12 lg:col-span-5">
            <figure className="relative mx-auto w-full max-w-[300px]">
              <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/90 p-2 shadow-xl backdrop-blur-2xl">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-line">
                  <Image
                    src={requestImage.src}
                    alt={requestImage.alt}
                    width={requestImage.width}
                    height={requestImage.height}
                    className="h-auto w-full"
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-3 py-1 text-[10px] font-bold text-emerald-600 shadow-sm backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                    {t4("realtime")}
                  </div>
                </div>
                <div className="flex items-end justify-between px-4 pb-3 pt-4">
                  <div>
                    <p className="mb-1 text-sm font-bold text-ink">{t4("specB")}</p>
                    <p className="font-mono text-[11px] font-bold uppercase text-muted">
                      {t4("coords")}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] font-bold text-beacon">{t4("specA")}</p>
                </div>
              </div>
              <figcaption className="mx-auto mt-4 max-w-[280px] text-center text-xs font-medium leading-relaxed text-muted">
                {requestImage.alt}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Problem → answer (split header + 3 trust cards) */}
      <section aria-label="The problem" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-12 gap-12 lg:gap-20">
            <div className="col-span-12 lg:col-span-5">
              <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-beacon">
                <span className="h-px w-8 bg-beacon" aria-hidden="true" />
                {t1("hazards")}
              </p>
              <h2 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-ink lg:text-5xl">
                {pain[0]} {pain[1]} <span className="text-muted">{pain[2]} {pain[3]}</span>
              </h2>
            </div>
            <div className="col-span-12 flex flex-col justify-end lg:col-span-7">
              <p className="text-xl font-medium leading-relaxed text-muted lg:text-2xl">
                {t1("promise")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {trust.map((item) => (
              <article key={item.t} className="rn-card group p-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-slate-50 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-beacon/30 group-hover:bg-beacon/10">
                  <span
                    className="text-2xl font-black text-muted transition-colors duration-300 group-hover:text-beacon"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-ink transition-colors group-hover:text-beacon">
                  {item.t}
                </h3>
                <p className="font-medium leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Operations layer (2-col: telemetry card + SOS copy + checklist) */}
      <section
        aria-label="Operations"
        className="rn-section border-y border-line bg-slate-50"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-16 px-6 lg:gap-24 lg:px-8">
          <div className="order-2 col-span-12 lg:order-1 lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-10 shadow-xl lg:p-12">
              <div className="pointer-events-none absolute right-[-30%] top-[-30%] h-[300px] w-[300px] rounded-full bg-beacon/10 blur-[80px]" />
              <div className="relative z-10 flex flex-col gap-10">
                {metrics.slice(0, 3).map((m) => (
                  <div key={m.k} className="group flex items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-beacon/10 transition-transform duration-300 group-hover:scale-110">
                      <span className="text-lg font-black text-beacon" aria-hidden="true">
                        ◈
                      </span>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-ink">{m.v}</h3>
                      <p className="font-medium text-muted">
                        {m.k} · {m.s}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 col-span-12 lg:order-2 lg:col-span-6">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {t3("eyebrow")}
            </p>
            <h2 className="mb-8 text-balance text-4xl font-black leading-[1.05] tracking-tight text-ink lg:text-5xl">
              {t1("sosTitle")}
            </h2>
            <p className="mb-10 text-xl font-medium leading-relaxed text-muted">
              {t1("sosBody")}
            </p>
            <ul className="space-y-5">
              {includes.map((line) => (
                <li key={line} className="flex items-center gap-4 text-lg font-bold text-ink">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-beacon" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Audience grid (s4 roles/pods/closers, partner-card rhythm) */}
      <section aria-label="Who it is for" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-beacon">
              {t4("eyebrow")}
            </p>
            <h2 className="mb-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-ink lg:text-5xl">
              {t4("closerTitle")}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {roles.map((role) => {
              const pods = podsByRole[role] ?? [];
              return (
                <article
                  key={role}
                  className="rn-card group relative flex h-full flex-col overflow-hidden p-8"
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-slate-50 text-xl font-black text-muted shadow-sm transition-all duration-500 group-hover:bg-beacon group-hover:text-white">
                      {(roleLabels[role] ?? role).charAt(0)}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-ink">{roleLabels[role] ?? role}</h3>
                    <p className="mb-6 flex-grow text-sm font-medium leading-relaxed text-muted">
                      {closers[role] ?? ""}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-6">
                      {pods.map((pod) => (
                        <span
                          key={pod.title}
                          className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-muted transition-all duration-300 group-hover:bg-beacon group-hover:text-white"
                        >
                          {pod.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability strip (service-name grid rhythm, s2 titles only) */}
      <section aria-label="Capabilities" className="rn-section bg-paper">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-beacon">
              {t2("pillarsTitle")}
            </p>
            <h2 className="text-balance text-4xl font-black tracking-tight text-ink lg:text-6xl">
              {t2("headlineA")} <span className="text-beacon">{t2("headlineBrand")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-4">
            {[...pillars.map((p) => p.t), ...commitments.map((c) => c.t)].slice(0, 8).map((name) => (
              <div
                key={name}
                className="group flex cursor-default flex-col items-center justify-center bg-slate-50 p-10 text-center transition-colors hover:bg-white"
              >
                <span className="text-xl font-bold text-muted transition-all group-hover:scale-105 group-hover:text-ink">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section aria-label="Final call" className="rn-section bg-paper">
        <div className="relative mx-auto max-w-4xl overflow-hidden px-6 text-center lg:px-8">
          <div className="pointer-events-none absolute bottom-[-400px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-beacon/10 blur-[100px]" />
          <div className="relative z-10">
            <h2 className="mb-8 text-balance text-5xl font-black leading-[1.02] tracking-tight text-ink lg:text-7xl">
              {t4("closerTitle")}
              <br />
              <span className="text-beacon">{t2("ctaPrimary")}</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-muted lg:text-2xl">
              {t2("sub")}
            </p>
            <a
              href={`/${locale}/download`}
              className="u-btn-grad inline-block rounded-full px-12 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {t2("ctaPrimary")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
