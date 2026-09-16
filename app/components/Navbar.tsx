"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "../../i18n/routing";

// UI REDESIGN 2026-09-16: glass sticky bar — translucent, blur-backed,
// gradient active pill, gradient CTA. Locale logic unchanged (P4 fix:
// every href carries its locale segment).
const NAV_LINKS = [
  { path: "/features",    key: "features" },
  { path: "/how-it-works", key: "howItWorks" },
  { path: "/for-you",      key: "forYou" },
  { path: "/impact",       key: "impact" },
  { path: "/app",          key: "app" },
  { path: "/roadmap",      key: "roadmap" },
  { path: "/faq",          key: "faq" },
] as const;

function localeHref(locale: string, path: string) {
  return `/${locale}${path === "/" ? "" : path}`;
}

function stripLocale(pathname: string, locale: string) {
  const prefix = `/${locale}`;
  return pathname.startsWith(prefix)
    ? pathname.slice(prefix.length) || "/"
    : pathname;
}

export default function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const tNav = useTranslations("common.nav");
  const [menuOpen, setMenuOpen] = useState(false);
  const current = stripLocale(pathname, locale);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4 pt-3 md:px-8">
        {/* Floating glass bar */}
        <div className="flex items-center justify-between rounded-2xl border border-white/50 bg-white/70 px-4 py-2.5 shadow-[0_8px_32px_-16px_rgba(30,41,99,0.25)] backdrop-blur-xl md:px-5">
          {/* Logo */}
          <Link href={localeHref(locale, "/")} className="flex shrink-0 items-center">
            <Image
              src="/stitch/navbar-logo.png"
              alt="ClutchD"
              width={180}
              height={56}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map(({ path, key }) => {
              const active = current === path;
              return (
                <Link
                  key={key}
                  href={localeHref(locale, path)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-200"
                      : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                  }`}
                >
                  {tNav(key)}
                </Link>
              );
            })}
          </nav>

          {/* Language toggle + CTA + Hamburger */}
          <div className="flex items-center gap-2.5">
            <div
              className="hidden items-center rounded-full border border-slate-200/80 bg-white/80 p-0.5 text-xs font-bold backdrop-blur sm:flex"
              role="group"
              aria-label="Language"
            >
              {routing.locales.map((loc) => (
                <Link
                  key={loc}
                  href={localeHref(loc, current)}
                  className={`rounded-full px-3 py-1.5 transition-all ${
                    loc === locale
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-current={loc === locale ? "true" : undefined}
                >
                  {loc === "ta" ? "தமிழ்" : "EN"}
                </Link>
              ))}
            </div>
            <Link
              href={localeHref(locale, "/download")}
              className="u-btn-grad hidden rounded-full px-5 py-2.5 text-sm font-bold text-white sm:block"
            >
              {tNav("download")}
            </Link>
            <button
              className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-white hover:shadow-sm lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — same glass language */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl px-4 md:px-8 lg:hidden">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/50 bg-white/90 px-4 py-4 shadow-xl backdrop-blur-xl">
            {NAV_LINKS.map(({ path, key }) => (
              <Link
                key={key}
                href={localeHref(locale, path)}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  current === path
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tNav(key)}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {routing.locales.map((loc) => (
                <Link
                  key={loc}
                  href={localeHref(loc, current)}
                  onClick={() => setMenuOpen(false)}
                  className={`flex-1 rounded-xl border px-4 py-2.5 text-center text-sm font-bold transition-colors ${
                    loc === locale
                      ? "border-transparent bg-gradient-to-r from-indigo-600 to-cyan-500 text-white"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {loc === "ta" ? "தமிழ்" : "English"}
                </Link>
              ))}
            </div>
            <Link
              href={localeHref(locale, "/download")}
              onClick={() => setMenuOpen(false)}
              className="u-btn-grad mt-2 rounded-full px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              {tNav("download")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
