import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import S2 from "../../components/s2-reveal";

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

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col items-center justify-center w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
      <S2 />
    </div>
  );
}
