import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import FaqAccordion from "../../components/FaqAccordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  t: string;
  items: number[];
}

// P0: FAQ content now comes from messages/[locale]/faq.json (English seed
// extracted from the old site — docs/REFERENCE-old-site.md). Tamil arrives P2.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.faq" });
  return pageMeta({
    locale,
    path: "/faq",
    meta: { title: t("title"), description: t("description") },
  });
}

// /faq keeps the ResQNow-carded FaqAccordion and adds category grouping
// derived ONLY from the existing catalog items (index-based, so EN+TA stay
// in sync). No new questions.
export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  const items = t.raw("items") as FaqItem[];
  const categories = t.raw("categories") as FaqCategory[];

  return (
    <div className="rn-section flex w-full justify-center bg-paper px-6 md:px-12">
      <div className="w-full max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-beacon">
          {t("eyebrow")}
        </p>
        <h1 className="mb-3 text-4xl font-black leading-[1.05] tracking-tight text-balance text-ink md:text-5xl">
          {t.rich("title", {
            gradient: (chunks) => (
              <span className="text-beacon">
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-muted">
          {t("lede")}
        </p>

        <div className="flex flex-col gap-6 sm:gap-10">
          {categories.map((cat, ci) => {
            const grouped = cat.items
              .filter((idx) => idx >= 0 && idx < items.length)
              .map((idx) => items[idx]);
            if (grouped.length === 0) return null;
            return (
              <section key={cat.t} aria-label={cat.t}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-beacon/10 font-mono text-[11px] font-black text-beacon"
                    aria-hidden="true"
                  >
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-black tracking-tight text-ink">{cat.t}</h2>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <FaqAccordion items={grouped} />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
