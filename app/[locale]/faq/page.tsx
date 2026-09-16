import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import FaqAccordion from "../../components/FaqAccordion";

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

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <div className="flex w-full justify-center bg-white px-6 pb-20 pt-14 md:px-12">
      <div className="w-full max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
          {t("eyebrow")}
        </p>
        <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          {t.rich("title", {
            gradient: (chunks) => (
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {chunks}
              </span>
            ),
          })}
        </h1>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
          {t("lede")}
        </p>

        <FaqAccordion items={items} />
      </div>
    </div>
  );
}
