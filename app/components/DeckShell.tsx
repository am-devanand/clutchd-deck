"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import S1 from "./s1-cold-open";
import S2 from "./s2-reveal";
import S3 from "./s3-steps";
import S4 from "./s4-roles";
import S5 from "./s5-proof";
import S6 from "./s6-guide";
import S7 from "./s7-roadmap";
import S8 from "./s8-final";

const SLIDES = [
  { id: "hero",       label: "Home",        Component: S1 },
  { id: "features",   label: "Features",    Component: S2 },
  { id: "how-it-works", label: "How it Works", Component: S3 },
  { id: "roles",      label: "For You",     Component: S4 },
  { id: "impact",     label: "Impact",      Component: S5 },
  { id: "showcase",   label: "App",         Component: S6 },
  { id: "roadmap",    label: "Roadmap",     Component: S7 },
  { id: "cta",        label: "Get the App", Component: S8 },
];

export default function DeckShell() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [animating, setAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current || index < 0 || index >= SLIDES.length) return;
      setDirection(index > current ? "down" : "up");
      setAnimating(true);
      setCurrent(index);
      // Update URL hash silently
      window.history.replaceState(null, "", `#${SLIDES[index].id}`);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating, current]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown") next();
      if (e.key === "ArrowUp"   || e.key === "ArrowLeft"  || e.key === "PageUp")   prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Scroll wheel navigation (debounced)
  useEffect(() => {
    let lastWheel = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel < 800) return;
      lastWheel = now;
      if (e.deltaY > 0) next();
      else prev();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  // Touch / swipe navigation
  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      const dx = touchStartX.current! - e.changedTouches[0].clientX;
      if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 50) {
        if (dy > 0) next();
        else prev();
      }
      touchStartY.current = null;
      touchStartX.current = null;
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [next, prev]);

  // Sync to hash on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const idx = SLIDES.findIndex((s) => s.id === hash);
    if (idx > 0) setCurrent(idx);
  }, []);

  const { Component } = SLIDES[current];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden bg-white text-slate-900 font-sans">
      {/* ── Navbar ── */}
      <header className="relative z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shrink-0">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:px-10 lg:px-14">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/stitch/navbar-logo.png"
              alt="ClutchD – Mechanic & Automobile App"
              width={200}
              height={64}
              priority
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex font-medium text-slate-600 text-sm">
            {SLIDES.slice(0, 7).map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                className={`transition-colors hover:text-[#1A5CFF] ${current === i ? "text-[#1A5CFF] font-semibold" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => goTo(7)}
              className="rounded-full bg-[#1A5CFF] px-5 py-2 text-sm font-bold tracking-wide text-white shadow-lg transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            >
              Get the App
            </button>
            <button
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
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

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur px-4 py-3 flex flex-col gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { goTo(i); setMenuOpen(false); }}
                className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${current === i ? "bg-blue-50 text-[#1A5CFF]" : "text-slate-600 hover:bg-slate-50"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Slide viewport ── */}
      <main className="relative flex-1 overflow-hidden">
        <div
          key={current}
          className={`absolute inset-0 overflow-hidden ${
            animating
              ? direction === "down"
                ? "animate-slide-in-from-bottom"
                : "animate-slide-in-from-top"
              : ""
          }`}
        >
          <Component />
        </div>
      </main>

      {/* ── Dot indicators (right side) ── */}
      <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.label}`}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-6 hidden whitespace-nowrap rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                current === i
                  ? "h-4 w-4 bg-[#1A5CFF] shadow-[0_0_8px_rgba(26,92,255,0.6)]"
                  : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-md backdrop-blur transition-all hover:border-[#1A5CFF] hover:text-[#1A5CFF] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-xs font-semibold text-slate-400 tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-md backdrop-blur transition-all hover:border-[#1A5CFF] hover:text-[#1A5CFF] disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
