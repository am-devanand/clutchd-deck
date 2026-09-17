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

// UI 2026-09-16: beige hero wall, ink display type with blue highlight,
// beige-glass dispatch card. Copy still
// comes from messages/<locale>/screens.json (EN source: content/screens.ts).
export default function S1() {
  const t = useTranslations("screens.s1");
  const headline = t.raw("headline") as string[];
  const stats = t.raw("stats") as { v: string; l: string }[];
  const cardRows = t.raw("cardRows") as { label: string; value: string; pct: string }[];
  const trust = t.raw("trust") as { t: string; body: string }[];

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
      className="u-hero-grad relative flex h-full w-full items-center justify-center overflow-hidden text-ink"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      {/* Soft amber blooms on the beige wall */}
      <div className="pointer-events-none absolute left-0 top-0 h-[560px] w-[560px] -translate-x-1/4 -translate-y-1/4 rounded-full bg-slate-200/70 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] translate-x-1/4 translate-y-1/4 rounded-full bg-[#1A5CFF]/10 blur-[120px]" />
      {/* 3D dispatch core (above glows, behind content) */}
      {!reducedMotion && <ThreeHero />}
      {/* Light dot-grid texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#0f172a" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-16 px-6 md:px-12 lg:flex-row lg:px-16">
        {/* Left: Text */}
        <div className="flex flex-1 flex-col items-start">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rn-eyebrow mb-7"
          >
            <span>{t("eyebrow")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.0] tracking-tight text-balance text-ink lg:text-7xl"
          >
            {headline[0]}{" "}
            <span className="text-beacon">
              {headline[1]}
            </span>
            <br />
            {headline[2]}{" "}
            <span>{headline[3]}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-muted"
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
            <button className="rounded-full border border-beacon bg-white/70 px-8 py-3.5 text-sm font-bold text-beacon backdrop-blur transition-all hover:bg-beacon hover:text-white">
              {t("ctaSecondary")}
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="rn-stat-row mt-14 flex-wrap gap-y-6 border-t border-line pt-8"
          >
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col gap-0.5 px-8 first:pl-0 last:pr-0">
                <span className="text-2xl font-black tabular-nums text-ink">{s.v}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">{s.l}</span>
              </div>
            ))}
          </motion.div>
          {/* Informational copy: promise lede, trust row, SOS explainer */}
          <div className="mt-8 max-w-lg">
            <p className="text-base leading-relaxed text-muted">{t("promise")}</p>
          </div>
          <div className="mt-8 max-w-lg">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("trustTitle")}</p>
            <div className="flex flex-col gap-4">
              {trust.map((item) => (
                <div key={item.t}>
                  <p className="text-sm font-bold text-ink">{item.t}</p>
                  <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 max-w-lg">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("sosTitle")}</p>
            <p className="text-sm leading-relaxed text-muted">{t("sosBody")}</p>
          </div>
        </div>

        {/* Right: Dispatch card — dark glass */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: "spring", bounce: 0.3 }}
          className="relative hidden w-full max-w-[360px] flex-col lg:flex"
        >
          {/* Card glow */}
          <div className="absolute -inset-6 rounded-3xl bg-[#1A5CFF]/10 blur-2xl" />

          {/* Main card — phone mockup */}
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white/90 p-5 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.22)] backdrop-blur-xl">
            {/* Phone notch */}
            <div aria-hidden="true" className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-line" />
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted">{t("cardLabel")}</span>
              </div>
              <span className="rounded-full bg-[#1A5CFF]/10 px-2.5 py-1 font-mono text-[9px] text-[#1A5CFF]">SYS_ONLINE</span>
            </div>

            {/* Map */}
            <div className="relative mb-5 overflow-hidden rounded-xl border border-line bg-white/50" style={{ height: 170 }}>
              <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A5CFF" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Central ping */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-[#1A5CFF]/20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                <div className="absolute h-12 w-12 animate-ping rounded-full bg-[#1A5CFF]/30 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 [animation-delay:0.3s]" />
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#1A5CFF] shadow-lg shadow-blue-500/30">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              {/* Mechanic */}
              <div className="absolute top-[28%] left-[28%]">
                <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <div className="mt-1 rounded-md border border-[#1A5CFF]/20 bg-[#1A5CFF] px-1.5 py-0.5 backdrop-blur">
                  <span className="font-mono text-[9px] font-bold text-white">ETA 11m</span>
                </div>
              </div>
            </div>

            {/* Progress rows — bottom sheet */}
            <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
              <div className="space-y-3.5">
                {cardRows.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-36 text-xs text-muted">{item.label}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                      <div className={`h-full rounded-full ${["bg-beacon", "bg-emerald-500", "bg-beacon"][i % 3]}`} style={{ width: item.pct }} />
                    </div>
                    <span className="w-10 text-right font-mono text-[10px] font-bold text-beacon">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <span className="font-mono text-[9px] text-muted">{t("coords")}</span>
                <span className="rounded-full border border-[#1A5CFF]/25 bg-[#1A5CFF]/10 px-2 py-0.5 font-mono text-[9px] text-[#1A5CFF]">#884-CQ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
