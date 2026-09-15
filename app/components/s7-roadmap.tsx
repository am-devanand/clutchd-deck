"use client";

import { s7 } from "../../content/screens";

export default function S7() {
  return (
    <section
      aria-label="Screen 7 of 8: roadmap"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-32 text-slate-900 md:px-12 lg:px-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col">
        <div className="mb-16 flex max-w-3xl flex-col mx-auto text-center items-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1A5CFF]">
            {s7.eyebrow}
          </p>
          <h2
            id="screen-heading-7"
            tabIndex={-1}
            className="deck-headline text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance"
          >
            {s7.headline}
          </h2>
        </div>

        <div className="flex w-full flex-col gap-6">
          {s7.rows.map((r) => (
            <div
              key={r.phase}
              className="glass-card group relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[#1A5CFF]/30"
            >
              <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
                <div className="flex flex-col md:col-span-3">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#1A5CFF] mb-1">
                    {r.idx}
                  </span>
                  <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {r.phase}
                  </span>
                </div>
                
                <div className="flex flex-col justify-center md:col-span-6">
                  <p className="text-lg font-medium text-slate-700">{r.body}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    {r.sub}
                  </p>
                </div>
                
                <div className="flex items-center md:col-span-3 md:justify-end">
                  {r.pillActive ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[var(--shadow-elegant)]">
                      <span className="pulse h-1.5 w-1.5 rounded-full bg-white" />
                      {r.pill}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      {r.pill}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
