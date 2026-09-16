"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { s8 } from "../../content/screens";

export default function S8() {
  // P3 i18n: s8 static import kept for hrefs (pwaHref); all rendered copy via
  // messages/<locale>/screens.json.
  const t = useTranslations("screens.s8");
  const cards = t.raw("cards") as { k: string; v: string; u: string; f: string }[];
  return (
    <section
      aria-label="Get the App"
      className="u-hero-grad relative flex h-full w-full items-center justify-center overflow-hidden px-6 text-white md:px-12 lg:px-16"
    >
      {/* Violet + cyan blooms */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-violet-500/25 blur-[110px]" />

      {/* Grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)] animate-pulse" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">{t("badge")}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {t("headlineA")}
          <br />
          {t("headlineB")}{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-sky-300 bg-clip-text text-transparent drop-shadow-sm">
            {t("headlineC")}
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-indigo-100/80"
        >
          {t("sub")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href={s8.pwaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="u-btn-grad group relative overflow-hidden rounded-full px-12 py-4 text-base font-black tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-3">
              {t("cta")}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>

          {/* APK / PWA channels — no store listings yet (docs/CLUTCHD-FACTS.md) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={s8.pwaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="u-glass-dark group flex items-center gap-3 rounded-xl px-5 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span className="text-cyan-200 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 15.75h6m-6 3h3" />
                </svg>
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[0.55rem] font-bold uppercase leading-none tracking-wider text-slate-500">{t("pwaTop")}</span>
                <span className="text-sm font-bold leading-tight">{t("pwaLabel")}</span>
              </span>
            </a>
            <button
              type="button"
              aria-label={t("apkAria")}
              className="group flex cursor-not-allowed items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/40 backdrop-blur"
            >
              <span className="transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </span>
              <span className="flex flex-col text-left">
                <span className="text-[0.55rem] font-bold uppercase leading-none tracking-wider">{t("apkTop")}</span>
                <span className="flex items-center gap-2 text-sm font-bold leading-tight">
                  {t("apkLabel")}
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wider">{t("apkSoon")}</span>
                </span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Bottom stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="u-glass-dark group rounded-2xl p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-widest text-cyan-200/70 transition-colors group-hover:text-cyan-200">{c.k}</span>
              <div className="mb-1.5 flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-white">{c.v}</span>
                <span className="text-xs font-bold text-indigo-200/70">{c.u}</span>
              </div>
              <span className="block text-[11px] text-indigo-100/70">{c.f}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Station ID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-10 font-mono text-[10px] tracking-widest text-indigo-200/50"
        >
          {t("station")} · {t("end")} {t("endNum")}
        </motion.div>
      </div>
    </section>
  );
}
