"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// 3D dispatch-core hero (three.js / R3F). Client-only (SSR skips WebGL),
// lazy-loaded so the bundle never blocks first paint, and hidden when the
// user prefers reduced motion (ambient animation would violate it).
const ThreeHero = dynamic(() => import("./ThreeHero"), {
  ssr: false,
  loading: () => null,
});

// UI REDESIGN 2026-09-16: full gradient wall (u-hero-grad), white display
// type with cyan gradient highlight, u-glass-dark dispatch card. Copy still
// comes from messages/<locale>/screens.json (EN source: content/screens.ts).
export default function S1() {
  const t = useTranslations("screens.s1");
  const headline = t.raw("headline") as string[];
  const stats = t.raw("stats") as { v: string; l: string }[];
  const cardRows = t.raw("cardRows") as { label: string; value: string; pct: string }[];

  // Ambient 3D respects prefers-reduced-motion.
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="u-hero-grad relative flex h-full w-full items-center justify-center overflow-hidden text-white"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      {/* Violet bloom top-left + cyan wash bottom-right (inside u-hero-grad) */}
      <div className="pointer-events-none absolute left-0 top-0 h-[560px] w-[560px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-violet-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] translate-x-1/4 translate-y-1/4 rounded-full bg-cyan-400/20 blur-[120px]" />
      {/* 3D dispatch core (above glows, behind content) */}
      {!reducedMotion && <ThreeHero />}
      {/* Light dot-grid texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-16 px-6 md:px-12 lg:flex-row lg:px-16">
        {/* Left: Text */}
        <div className="flex flex-1 flex-col items-start">
          {/* Eyebrow chip */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-100">
              {t("eyebrow")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.04] tracking-tight text-white lg:text-7xl"
          >
            {headline[0]}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent">
              {headline[1]}
            </span>
            <br />
            {headline[2]}{" "}
            <span className="text-indigo-200/70">{headline[3]}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-indigo-100/80"
          >
            {t("sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="u-btn-grad group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                {t("ctaPrimary")}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </button>
            <button className="u-btn-ghost-dark rounded-full px-8 py-3.5 text-sm font-bold text-white">
              {t("ctaSecondary")}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8"
          >
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col gap-0.5">
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-2xl font-black text-transparent">{s.v}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-indigo-200/60">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Dispatch card — dark glass */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: "spring", bounce: 0.3 }}
          className="relative hidden w-full max-w-[360px] flex-col lg:flex"
        >
          {/* Card glow */}
          <div className="absolute -inset-6 rounded-3xl bg-cyan-400/15 blur-2xl" />

          {/* Main card */}
          <div className="u-glass-dark relative overflow-hidden rounded-2xl p-6">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-100/70">{t("cardLabel")}</span>
              </div>
              <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[9px] text-cyan-200">SYS_ONLINE</span>
            </div>

            {/* Map */}
            <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10 bg-white/5" style={{ height: 150 }}>
              <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#67e8f9" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Central ping */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-cyan-400/20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                <div className="absolute h-12 w-12 animate-ping rounded-full bg-cyan-400/30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 [animation-delay:0.3s]" />
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              {/* Mechanic */}
              <div className="absolute top-[28%] left-[28%]">
                <div className="h-3 w-3 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
                <div className="mt-1 rounded-md border border-white/15 bg-slate-900/80 px-1.5 py-0.5 backdrop-blur">
                  <span className="font-mono text-[8px] font-bold text-amber-300">ETA 11m</span>
                </div>
              </div>
            </div>

            {/* Progress rows */}
            <div className="space-y-3.5">
              {cardRows.map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-36 text-xs text-indigo-100/70">{item.label}</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${["bg-gradient-to-r from-indigo-400 to-cyan-400", "bg-emerald-400", "bg-violet-400"][i % 3]}`} style={{ width: item.pct }} />
                  </div>
                  <span className="w-10 text-right font-mono text-[10px] font-bold text-cyan-200">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-mono text-[9px] text-indigo-200/50">{t("coords")}</span>
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2 py-0.5 font-mono text-[9px] text-cyan-200">#884-CQ</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
