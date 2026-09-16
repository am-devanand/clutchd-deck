"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { s5 } from "../../content/screens";

export default function S5() {
  const [count, setCount] = useState(s5.poolStart);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 3400);
    return () => clearInterval(id);
  }, [isInView]);

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
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2"
        >
          <span className="animate-pulse text-sm">⚡</span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{s5.badge}</span>
        </motion.div>

        {/* Giant number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="relative"
        >
          <h2 className="font-black uppercase leading-none tracking-tighter text-slate-900 text-[100px] sm:text-[140px] lg:text-[180px]">
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
          className="mt-8 max-w-xl text-base leading-relaxed text-slate-600"
        >
          {s5.proof}
        </motion.p>

        {/* Live counter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
          <span className="text-xs font-medium text-slate-500">{s5.poolLabel}</span>
          <span className="font-mono text-base font-black text-slate-900">{count.toLocaleString("en-US")}</span>
          <span className="text-xs font-medium text-slate-500">{s5.poolSuffix}</span>
        </motion.div>
      </div>

      {/* Stat cards */}
      <div className="z-10 mt-14 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
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
    </section>
  );
}
