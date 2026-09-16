import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import LegalPage from "../../components/LegalPage";

// P0: legal content from messages/[locale]/legal.json (English seed verbatim
// from the old site — docs/REFERENCE-old-site.md). P3: Tamil legal live.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.terms" });
  return pageMeta({
    locale,
    path: "/terms",
    meta: { title: t("title"), description: t("description") },
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal.terms" });
  const tc = await getTranslations({ locale, namespace: "legal" });

  const sections = t.raw("sections") as { h: string; body: string[] }[];

  return (
    <LegalPage
      title={t("title")}
      updated={t("updated")}
      updatedLabel={tc("updatedLabel")}
      intro={t("intro")}
      backLink={tc("backLink")}
      copyright={tc("copyright")}
      sections={sections}
    />
  );
}
