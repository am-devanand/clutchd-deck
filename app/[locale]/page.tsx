import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../i18n/seo";
import SplashScreen from "../components/splash-screen";
import HomeHero from "../components/home-hero";
import HomeServices from "../components/home-services";
import HomeVehicles from "../components/home-vehicles";
import HomeSteps from "../components/home-steps";
import HomeReviews from "../components/home-reviews";

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
      <main className="flex w-full flex-col bg-paper">
        <HomeHero locale={locale} />
        <HomeServices locale={locale} />
        <HomeVehicles locale={locale} />
        <HomeSteps locale={locale} />
        <HomeReviews />
      </main>
    </>
  );
}
