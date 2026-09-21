import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import S3 from "../../components/s3-steps";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.howItWorks" });
  return pageMeta({
    locale,
    path: "/how-it-works",
    meta: { title: t("title"), description: t("description") },
  });
}

// /how-it-works mirrors the ResQNow HowItWorks section rhythm — left-aligned
// header block, numbered step flow, explainer panels, FAQ CTA — with our s3
// lifecycle copy. S3 itself is untouched (no logic change).
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "screens.s3" });
  const headline = t.raw("headline") as string[];
  const stepTargets = t.raw("stepTargets") as string[];

  return (
    <div className="w-full bg-paper">
      {/* Section header (HowItWorks header rhythm: eyebrow, ink H1, lede) */}
      <section aria-label="How it works header" className="rn-section bg-paper pb-0">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-4 max-w-2xl text-center md:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-beacon/20 bg-beacon/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-beacon">
              <span className="h-2 w-2 rounded-full bg-beacon" aria-hidden="true" />
              {t("eyebrow")}
            </p>
            <h1 className="mb-4 text-balance text-4xl font-black leading-[1.02] tracking-tight text-ink md:text-6xl">
              {headline[0]} <span className="text-beacon">{headline[1]}</span>
            </h1>
            <p className="text-lg font-medium text-muted md:text-xl">{t("sub")}</p>
            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
              {t("seq")} · {t("coords")}
            </p>
          </div>
        </div>
      </section>

      {/* Numbered flow (S3 — logic untouched) */}
      <S3 />

      {/* Explainer panels (plain words / design targets / cancellation) */}
      <section aria-label="Details" className="rn-section bg-paper">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-8">
          <div className="rn-card p-6 sm:p-8">
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">
              {t("eyebrow")}
            </p>
            <h2 className="mb-3 text-2xl font-black tracking-tight text-ink">
              {t("plainTitle")}
            </h2>
            <p className="text-sm font-medium leading-relaxed text-muted">{t("plainBody")}</p>
          </div>
          <div className="rn-card p-6 sm:p-8">
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">
              {t("activeTag")}
            </p>
            <h2 className="mb-3 text-2xl font-black tracking-tight text-ink">
              {t("targetsTitle")}
            </h2>
            <p className="mb-4 text-sm font-medium leading-relaxed text-muted">
              {t("targetsNote")}
            </p>
            <ul className="space-y-2">
              {stepTargets.map((line) => (
                <li key={line.slice(0, 24)} className="flex items-start gap-2 text-xs font-medium leading-relaxed text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-beacon" aria-hidden="true" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rn-card p-6 sm:p-8">
            <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">
              {t("vector")}
            </p>
            <h2 className="mb-3 text-2xl font-black tracking-tight text-ink">
              {t("cancelTitle")}
            </h2>
            <p className="mb-6 text-sm font-medium leading-relaxed text-muted">{t("cancelBody")}</p>
            <a
              href={`/${locale}/faq`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-beacon/30 px-6 py-3 text-sm font-bold text-beacon transition-all hover:border-beacon hover:bg-beacon hover:text-white"
            >
              {t("faqCta")}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
