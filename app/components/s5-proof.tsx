"use client";

import { useEffect, useState } from "react";
import { s5 } from "../../content/screens";

export default function S5() {
  const [count, setCount] = useState(s5.poolStart);
  useEffect(() => {
    const id = setInterval(() => {
      if (Math.random() > 0.4) {
        setCount((c) => c + Math.floor(Math.random() * 3) + 1);
      }
    }, 3400);
    return () => clearInterval(id);
  }, []);
  return (
    <section
      aria-label="Screen 5 of 8: proof"
      className="relative flex flex-col justify-center w-full max-w-7xl mx-auto px-6 py-32 md:px-12 lg:px-16 min-h-[80vh]"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(26,92,255,0.08),transparent_60%)] pointer-events-none" />
      
      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-2 text-center py-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1A5CFF]/20 bg-[#1A5CFF]/5 px-4 py-1.5 shadow-sm">
          <span aria-hidden="true" className="text-sm text-[#1A5CFF]">⚡</span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#1A5CFF]">
            {s5.badge}
          </span>
        </div>
        <h2
          id="screen-heading-5"
          tabIndex={-1}
          className="deck-headline font-extrabold uppercase leading-none tracking-tighter text-slate-900 text-[100px] sm:text-[140px] lg:text-[180px]"
        >
          {s5.giant.split(" ")[0]} <span className="text-[#1A5CFF]">{s5.giant.split(" ")[1]}</span>
        </h2>
        <p className="mt-8 max-w-2xl text-balance text-lg font-medium leading-relaxed text-slate-600">
          {s5.proof}
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 rounded-full bg-slate-50 px-6 py-3 border border-slate-100 shadow-sm">
          <span className="text-sm font-medium text-slate-500">{s5.poolLabel}</span>
          <span id="incident-counter" className="text-lg font-extrabold tracking-wider text-[#1A5CFF]">
            {count.toLocaleString("en-US")}
          </span>
          <span className="text-sm font-medium text-slate-500">{s5.poolSuffix}</span>
        </div>
      </div>

      <div className="z-10 mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        {s5.stats.map((st) => (
          <div
            key={st.label}
            className="glass-card flex flex-col p-8 transition-transform hover:-translate-y-1 hover:border-[#1A5CFF]/30"
          >
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                {st.v}
                <span className="ml-1 text-2xl font-bold text-[#1A5CFF]">
                  {st.u}
                </span>
              </span>
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {st.label}
            </p>
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]" style={{ width: st.bar }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
