import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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

export default function ClassicHome() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <SplashScreen />
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors">
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
          <nav className="hidden items-center gap-8 md:flex font-medium text-slate-600">
            <a href="#features" className="hover:text-[#1A5CFF] transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-[#1A5CFF] transition-colors">How it Works</a>
            <a href="#impact" className="hover:text-[#1A5CFF] transition-colors">Impact</a>
            <a href="#roadmap" className="hover:text-[#1A5CFF] transition-colors">Roadmap</a>
          </nav>
          <div className="flex items-center">
            <button className="rounded-full bg-[image:var(--gradient-primary)] px-6 py-2.5 font-bold tracking-wide text-white shadow-[var(--shadow-elegant)] transition-all hover:opacity-90 hover:scale-105 active:scale-95">
              Get the App
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="flex flex-col">
        <div id="hero">
          <S1 />
        </div>
        <div id="features" className="border-t border-slate-100 bg-slate-50/50">
          <S2 />
        </div>
        <div id="how-it-works" className="border-t border-slate-100">
          <S3 />
        </div>
        <div id="roles" className="border-t border-slate-100 bg-slate-50/50">
          <S4 />
        </div>
        <div id="impact" className="border-t border-slate-100">
          <S5 />
        </div>
        <div id="showcase" className="border-t border-slate-100 bg-slate-50/50">
          <S6 />
        </div>
        <div id="roadmap" className="border-t border-slate-100">
          <S7 />
        </div>
        <div id="cta" className="border-t border-slate-100 bg-slate-50/50">
          <S8 />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-white px-6 py-12 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Logo className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <p className="max-w-xs text-sm text-slate-500">
              24/7 Roadside Assistance and Rapid Dispatch Platform.
            </p>
          </div>
          <div className="flex gap-12 font-medium text-slate-600">
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-[#1A5CFF]">Services</a>
              <a href="#" className="hover:text-[#1A5CFF]">About Us</a>
              <a href="#" className="hover:text-[#1A5CFF]">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:text-[#1A5CFF]">Privacy Policy</a>
              <a href="#" className="hover:text-[#1A5CFF]">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-100 pt-8 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} ClutchD. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
