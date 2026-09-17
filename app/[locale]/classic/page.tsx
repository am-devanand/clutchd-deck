import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { pageMeta } from "../../../i18n/seo";
import S1 from "../../components/s1-cold-open";
import S2 from "../../components/s2-reveal";
import S3 from "../../components/s3-steps";
import S4 from "../../components/s4-roles";
import S5 from "../../components/s5-proof";
import S6 from "../../components/s6-guide";
import S7 from "../../components/s7-roadmap";
import S8 from "../../components/s8-final";
import SplashScreen from "../../components/splash-screen";
import Logo from "../../components/logo";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.classic" });
  return pageMeta({
    locale,
    path: "/classic",
    meta: { title: t("title"), description: t("description") },
  });
}

export default async function ClassicHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Copy-i18n fix: header/footer copy comes from common.classic so /ta
  // renders Tamil here instead of hardcoded English. No visual change.
  const t = await getTranslations({ locale, namespace: "common.classic" });
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <SplashScreen />
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/90 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
          <div className="flex items-center">
            <Image
              src="/stitch/navbar-logo.png"
              alt="ClutchD – Mechanic & Automobile App"
              width={220}
              height={72}
              priority
              className="h-14 w-auto object-contain"
            />
          </div>
          <nav className="hidden items-center gap-8 md:flex font-medium text-muted">
            <a href="#features" className="hover:text-beacon transition-colors">{t("navFeatures")}</a>
            <a href="#how-it-works" className="hover:text-beacon transition-colors">{t("navHow")}</a>
            <a href="#impact" className="hover:text-beacon transition-colors">{t("navImpact")}</a>
            <a href="#roadmap" className="hover:text-beacon transition-colors">{t("navRoadmap")}</a>
          </nav>
          <div className="flex items-center">
            <button className="rounded-full bg-[#1A5CFF] px-6 py-2.5 font-bold tracking-wide text-white shadow-[var(--shadow-elegant)] transition-all hover:bg-[#0044FF] hover:scale-105 active:scale-95">
              {t("cta")}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex flex-col">
        <div id="hero">
          <S1 />
        </div>
        <div id="features" className="rn-section border-t border-line">
          <S2 />
        </div>
        <div id="how-it-works" className="rn-section border-t border-line">
          <S3 />
        </div>
        <div id="roles" className="rn-section border-t border-line">
          <S4 />
        </div>
        <div id="impact" className="rn-section border-t border-line">
          <S5 />
        </div>
        <div id="showcase" className="rn-section border-t border-line">
          <S6 />
        </div>
        <div id="roadmap" className="rn-section border-t border-line">
          <S7 />
        </div>
        <div id="cta" className="rn-section border-t border-line">
          <S8 />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-line bg-[#F8FAFC] px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Logo className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <p className="max-w-xs text-sm text-muted">
              {t("tagline")}
            </p>
          </div>
          <div className="flex gap-12 font-medium text-muted">
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-beacon">{t("colServices")}</a>
              <a href="#" className="hover:text-beacon">{t("colAbout")}</a>
              <a href="#" className="hover:text-beacon">{t("colContact")}</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-beacon">{t("colPrivacy")}</a>
              <a href="#" className="hover:text-beacon">{t("colTerms")}</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-line pt-8 text-sm text-muted">
          &copy; {new Date().getFullYear()} {t("rights")}
        </div>
      </footer>
    </div>
  );
}
