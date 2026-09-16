"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// 2026-09-16: renders old-site PROOF content — illustrative network stats +
// three verbatim testimonials (docs/REFERENCE-old-site.md). The former
// auto-incrementing "telemetry pool" counter was removed: a ticking supply
// number would misrepresent the network. Count renders static.
export default function S5() {
  const t = useTranslations("screens.s5");
  const stats = t.raw("stats") as { v: string; u: string; label: string; bar: string }[];
  const testimonials = t.raw("testimonials") as { quote: string; name: string; role: string }[];
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      aria-label="Impact"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white px-6 md:px-12 lg:px-16"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-200/70 bg-amber-50/80 px-4 py-2 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{t("badge")}</span>
        </motion.div>

        {/* Giant number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="relative"
        >
          <h2 className="font-black uppercase leading-none tracking-tighter text-slate-900 text-[90px] sm:text-[130px] lg:text-[160px]">
            {t("giant").split(" ")[0]}{" "}
            <span className="u-grad-text drop-shadow-sm">
              {t("giant").split(" ")[1]}
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-600"
        >
          {t("proof")}
        </motion.p>

        {/* Early network pill (static) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="u-glass mt-5 flex items-center gap-3 rounded-full px-6 py-3"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-medium text-slate-500">{t("poolLabel")}</span>
          {/* raw(): poolStart is a number — t() would throw on non-strings */}
          <span className="font-mono text-base font-black text-slate-900">{t.raw("poolStart")}</span>
          <span className="text-xs font-medium text-slate-500">{t("poolSuffix")}</span>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div className="z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((st, i) => (
          <motion.div
            key={st.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="group u-glass u-lift relative overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-lg"
          >
            <div className="relative z-10">
              <div className="mb-3 flex items-baseline gap-1.5">
                <span className="u-grad-text text-4xl font-black">{st.v}</span>
                <span className="u-grad-text text-xl font-bold">{st.u}</span>
              </div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">{st.label}</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: st.bar }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials — imported verbatim from old-site PROOF */}
      <div className="z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="u-glass u-lift flex flex-col justify-between rounded-2xl p-6 text-left transition-shadow hover:shadow-lg"
          >
            <blockquote className="mb-5 text-sm leading-relaxed text-slate-700">
              <span aria-hidden="true" className="u-grad-text mr-1 text-lg font-black">&ldquo;</span>
              {t.quote}
            </blockquote>
            <figcaption className="border-t border-slate-100 pt-4">
              <span className="block text-sm font-bold text-slate-900">{t.name}</span>
              <span className="block text-xs text-slate-500">{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Screen-reader note: {!isInView && "stats illustrative"} */}
      <span className="sr-only">{t("srNote")}</span>
    </section>
  );
}
