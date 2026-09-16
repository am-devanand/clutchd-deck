"use client";

import { motion } from "framer-motion";
import { s8 } from "../../content/screens";

export default function S8() {
  return (
    <section
      aria-label="Get the App"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white px-6 md:px-12 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-blue-100/50 blur-[120px]" />
      
      {/* Grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
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
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)] animate-pulse" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">{s8.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-5xl font-black leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
        >
          {s8.headlineA}
          <br />
          {s8.headlineB}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
            {s8.headlineC}
          </span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-slate-600"
        >
          {s8.sub}
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
            href="#"
            className="group relative overflow-hidden rounded-full bg-blue-600 px-12 py-4 text-base font-black tracking-wide text-white shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-3">
              {s8.cta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>

          {/* Store buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              {
                icon: <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-1.04 1.71-.92 2.74 1 .08 2.02-.46 2.63-1.21Z" /></svg>,
                top: "Download on the", bottom: "App Store",
              },
              {
                icon: <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24"><path d="M3.609 1.814L13.793 12 3.61 22.186c-.39-.374-.61-.92-.61-1.558V3.372c0-.638.22-1.184.609-1.558zm11.242 11.244L4.773 23.136c.264.084.55.097.838.016.355-.098 7.37-4.225 10.375-5.946l-1.135-4.148zm0-2.116l1.135-4.148L5.611.848C5.323.767 5.037.78 4.773.864l10.078 10.078zm1.057 1.058l3.167 1.815c1.03.59 1.03 1.559 0 2.15l-3.167 1.815-1.164-2.89 1.164-2.89z" /></svg>,
                top: "Get it on", bottom: "Google Play",
              },
            ].map((btn) => (
              <button
                key={btn.bottom}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition-all hover:border-blue-300 hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-slate-600 group-hover:text-blue-600 transition-colors">{btn.icon}</span>
                <span className="flex flex-col text-left">
                  <span className="text-[0.55rem] font-bold uppercase leading-none tracking-wider text-slate-500">{btn.top}</span>
                  <span className="text-sm font-bold leading-tight">{btn.bottom}</span>
                </span>
              </button>
            ))}
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
          {s8.cards.map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-blue-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="mb-2 block text-[9px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors">{c.k}</span>
              <div className="flex items-baseline gap-1.5 mb-1.5">
                <span className="text-2xl font-black text-slate-900">{c.v}</span>
                <span className="text-xs font-bold text-slate-500">{c.u}</span>
              </div>
              <span className="block text-[11px] text-slate-500">{c.f}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Station ID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-10 font-mono text-[10px] text-slate-400 tracking-widest"
        >
          {s8.station} · {s8.end} {s8.endNum}
        </motion.div>
      </div>
    </section>
  );
}
