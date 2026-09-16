"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { s1 } from "../../content/screens";

const ThreeHero = dynamic(() => import("./ThreeHero"), { ssr: false });

export default function S1() {
  return (
    <section
      aria-label="Hero"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white"
      style={{ minHeight: "calc(100vh - 65px)" }}
    >
      {/* Subtle blue radial glow top-right */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/4 rounded-full bg-indigo-50/80 blur-[100px]" />
      {/* Light dot-grid pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#1e40af" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center gap-16 px-6 md:px-12 lg:flex-row lg:px-16">
        {/* Left: Text */}
        <div className="flex flex-1 flex-col items-start">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
              {s1.eyebrow}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.04] tracking-tight text-slate-900 lg:text-7xl"
          >
            {s1.headline[0]}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {s1.headline[1]}
            </span>
            <br />
            {s1.headline[2]}{" "}
            <span className="text-slate-500">{s1.headline[3]}</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-slate-500"
          >
            {s1.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group relative overflow-hidden rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-blue-300 active:scale-95">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Explore Platform
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
              Emergency SOS
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 flex flex-wrap gap-10 border-t border-slate-100 pt-8"
          >
            {[
              { v: "3 min",  l: "Avg Dispatch" },
              { v: "24/7",   l: "Active Network" },
              { v: "98.4%",  l: "Resolution Rate" },
              { v: "1,400+", l: "Active Units" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col gap-0.5">
                <span className="text-2xl font-black text-slate-900">{s.v}</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Dispatch card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, type: "spring", bounce: 0.3 }}
          className="relative hidden w-full max-w-[360px] flex-col lg:flex"
        >
          {/* Card glow */}
          <div className="absolute -inset-6 rounded-3xl bg-blue-100/40 blur-2xl" />

          {/* Main card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)]">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Live Dispatch</span>
              </div>
              <span className="rounded-full bg-slate-50 px-2.5 py-1 font-mono text-[9px] text-slate-400">SYS_ONLINE</span>
            </div>

            {/* Map */}
            <div className="relative mb-5 overflow-hidden rounded-xl border border-slate-100 bg-blue-50/50" style={{ height: 150 }}>
              <svg className="absolute inset-0 h-full w-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>
              {/* Central ping */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute h-24 w-24 animate-ping rounded-full bg-blue-400/15 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                <div className="absolute h-12 w-12 animate-ping rounded-full bg-blue-400/25 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 [animation-delay:0.3s]" />
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-200">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
              </div>
              {/* Mechanic */}
              <div className="absolute top-[28%] left-[28%]">
                <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.7)]" />
                <div className="mt-1 rounded-md bg-white/90 px-1.5 py-0.5 shadow-sm border border-slate-100">
                  <span className="font-mono text-[8px] font-bold text-amber-600">ETA 11m</span>
                </div>
              </div>
            </div>

            {/* Progress rows */}
            <div className="space-y-3.5">
              {[
                { label: "Locating Mechanic", value: "99.4%", pct: "99%", color: "bg-blue-500" },
                { label: "Network Coverage",  value: "100%",  pct: "100%", color: "bg-emerald-500" },
                { label: "Dispatch Speed",    value: "3 min", pct: "82%",  color: "bg-indigo-500" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-36 text-xs text-slate-500">{item.label}</span>
                  <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: item.pct }} />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-slate-700 w-10 text-right">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Footer row */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-mono text-[9px] text-slate-400">{s1.coords}</span>
              <span className="rounded-full bg-blue-50 border border-blue-100 px-2 py-0.5 font-mono text-[9px] text-blue-600">#884-CQ</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
