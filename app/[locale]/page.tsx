import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../i18n/seo";
import S1 from "../components/s1-cold-open";
import SplashScreen from "../components/splash-screen";

// P4: home metadata — previously only layout defaults applied here.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.site" });
  return pageMeta({
    locale,
    path: "",
    meta: { title: t("title"), description: t("description") },
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SplashScreen />
      <div className="w-full bg-white" style={{ minHeight: "calc(100vh - 65px)" }}>
        <S1 />
      </div>
    </>
  );
}
