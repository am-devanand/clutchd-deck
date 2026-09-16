"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { s2 } from "../../content/screens";

export default function S2() {
  return (
    <section
      aria-label="Features"
      className="relative flex h-full w-full items-center overflow-hidden bg-slate-50"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-50/80 blur-[100px]" />

      <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:px-16">
        
        {/* Left content */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{s2.livePill}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{s2.eyebrow}</p>
            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 lg:text-6xl">
              {s2.headlineA}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {s2.headlineBrand}
              </span>{" "}
              {s2.headlineB}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-base leading-relaxed text-slate-600"
          >
            {s2.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group relative overflow-hidden rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:scale-105 hover:shadow-blue-300">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                {s2.ctaPrimary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm">
              {s2.ctaSecondary}
            </button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            {s2.minis.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-blue-600 transition-colors">{m.k}</span>
                <span className="block text-xl font-black text-slate-900">{m.v}</span>
                <span className="block text-[11px] text-slate-500 mt-0.5">{m.s}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Glow behind phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[300px] rounded-full bg-blue-100 blur-[80px]" />
          </div>
          <div className="group relative w-[260px] overflow-hidden rounded-[44px] border border-slate-100 bg-white p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] bg-slate-50">
              <Image
                src={s2.image.src}
                alt={s2.image.alt}
                width={s2.image.width}
                height={s2.image.height}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
