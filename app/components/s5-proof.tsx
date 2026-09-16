"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { s5 } from "../../content/screens";

// 2026-09-16: renders old-site PROOF content — illustrative network stats +
// three verbatim testimonials (docs/REFERENCE-old-site.md). The former
// auto-incrementing "telemetry pool" counter was removed: a ticking supply
// number would misrepresent the network. Count renders static.
export default function S5() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      aria-label="Impact"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white px-6 md:px-12 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-50/80 blur-[120px]" />
      </div>

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-200 bg-amber-50 px-4 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">{s5.badge}</span>
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
            {s5.giant.split(" ")[0]}{" "}
            <span className="bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
              {s5.giant.split(" ")[1]}
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
          {s5.proof}
        </motion.p>

        {/* Early network pill (static) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-5 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-medium text-slate-500">{s5.poolLabel}</span>
          <span className="font-mono text-base font-black text-slate-900">{s5.poolStart}</span>
          <span className="text-xs font-medium text-slate-500">{s5.poolSuffix}</span>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div className="z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        {s5.stats.map((st, i) => (
          <motion.div
            key={st.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
          >
            <div className="relative z-10">
              <div className="mb-3 flex items-baseline gap-1.5">
                <span className="text-4xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{st.v}</span>
                <span className="text-xl font-bold text-blue-600">{st.u}</span>
              </div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">{st.label}</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: st.bar }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials — imported verbatim from old-site PROOF */}
      <div className="z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {s5.testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <blockquote className="mb-5 text-sm leading-relaxed text-slate-700">
              <span aria-hidden="true" className="mr-1 text-lg font-black text-blue-600">&ldquo;</span>
              {t.quote}
            </blockquote>
            <figcaption className="border-t border-slate-200 pt-4">
              <span className="block text-sm font-bold text-slate-900">{t.name}</span>
              <span className="block text-xs text-slate-500">{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Screen-reader note: {!isInView && "stats illustrative"} */}
      <span className="sr-only">Figures on this screen are illustrative launch figures pending real network data.</span>
    </section>
  );
}
