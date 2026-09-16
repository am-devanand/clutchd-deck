"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/features",     label: "Features" },
  { href: "/how-it-works", label: "How it Works" },
  { href: "/for-you",      label: "For You" },
  { href: "/impact",       label: "Impact" },
  { href: "/app",          label: "App" },
  { href: "/roadmap",      label: "Roadmap" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 md:px-10 lg:px-14">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/stitch/navbar-logo.png"
            alt="ClutchD"
            width={180}
            height={56}
            priority
            className="h-11 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-blue-700 active:scale-95 sm:block"
          >
            Get the App
          </Link>
          <button
            className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100 transition-colors"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                pathname === href
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-bold text-white"
          >
            Get the App
          </Link>
        </div>
      )}
    </header>
  );
}
