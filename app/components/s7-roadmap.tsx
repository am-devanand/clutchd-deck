"use client";

import { motion } from "framer-motion";
import { s7 } from "../../content/screens";

const PHASE_STYLES = [
  { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500", border: "border-emerald-100", hover: "hover:border-emerald-300" },
  { badge: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-600", border: "border-blue-100", hover: "hover:border-blue-300" },
  { badge: "bg-slate-50 text-slate-600 border-slate-200", dot: "bg-slate-400", border: "border-slate-200", hover: "hover:border-slate-300" },
];

export default function S7() {
  return (
    <section
      aria-label="Roadmap"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white px-6 md:px-12 lg:px-16"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] translate-x-1/2 rounded-full bg-blue-50/80 blur-[100px]" />

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{s7.eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Where We&apos;re{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Headed.
            </span>
          </h2>
        </motion.div>

        {/* Timeline rows */}
        <div className="flex flex-col gap-5">
          {s7.rows.map((r, i) => {
            const style = PHASE_STYLES[i] ?? PHASE_STYLES[2];
            return (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`group relative overflow-hidden rounded-2xl border ${style.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${style.hover}`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${style.dot} rounded-l-2xl`} />

                <div className="grid grid-cols-1 items-center gap-6 pl-4 md:grid-cols-12">
                  {/* Phase label */}
                  <div className="md:col-span-2">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{r.idx}</span>
                    <span className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">{r.phase}</span>
                  </div>

                  {/* Body */}
                  <div className="md:col-span-7">
                    <p className="text-sm font-semibold leading-relaxed text-slate-700">{r.body}</p>
                    <p className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-500">{r.sub}</p>
                  </div>

                  {/* Pill */}
                  <div className="md:col-span-3 md:flex md:justify-end">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${style.badge}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${r.pillActive ? "animate-pulse" : ""}`} />
                      {r.pill}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-8 border-t border-slate-100 pt-8"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="font-mono text-xs text-emerald-600">Dispatch Engine Ready</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-slate-500">Pilot Grid:</span>
            <span className="font-mono text-xs font-bold text-slate-900">Coimbatore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
