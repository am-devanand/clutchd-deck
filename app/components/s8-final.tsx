"use client";

import { s8 } from "../../content/screens";

export default function S8() {
  return (
    <section
      aria-label="Screen 8 of 8: final call to action"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-32 text-slate-900 md:px-12 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(26,92,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1A5CFF]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col">
        <div className="mx-auto flex w-full flex-col items-center py-16 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1A5CFF]/20 bg-[#1A5CFF]/5 px-4 py-1.5 shadow-sm">
            <span className="pulse h-2 w-2 rounded-full bg-[#1A5CFF] shadow-[0_0_8px_rgba(26,92,255,0.6)]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A5CFF]">
              {s8.badge}
            </span>
          </div>
          
          <h2
            id="screen-heading-8"
            tabIndex={-1}
            className="deck-headline mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl text-balance"
          >
            {s8.headlineA}{" "}
            <br className="hidden md:block" />
            {s8.headlineB}{" "}
            <span className="text-[#1A5CFF]">
              {s8.headlineC}
            </span>
          </h2>
          
          <p className="mb-12 max-w-2xl text-xl leading-relaxed text-slate-500 text-balance">
            {s8.sub}
          </p>
          
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-primary)] px-12 py-5 text-xl font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_-15px_rgba(26,92,255,0.7)] active:scale-95 shadow-[var(--shadow-elegant)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>{s8.cta}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <svg className="h-7 w-7 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-1.04 1.71-.92 2.74 1 .08 2.02-.46 2.63-1.21Z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-[0.65rem] font-bold uppercase leading-none tracking-wider text-slate-500">
                    Download on the
                  </span>
                  <span className="text-base font-bold leading-tight tracking-tight">App Store</span>
                </span>
              </button>
              
              <button
                type="button"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-slate-900 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[var(--shadow-card-hover)]"
              >
                <svg className="h-6 w-6 fill-current transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.39-.374-.61-.92-.61-1.558V3.372c0-.638.22-1.184.609-1.558zm11.242 11.244L4.773 23.136c.264.084.55.097.838.016.355-.098 7.37-4.225 10.375-5.946l-1.135-4.148zm0-2.116l1.135-4.148L5.611.848C5.323.767 5.037.78 4.773.864l10.078 10.078zm1.057 1.058l3.167 1.815c1.03.59 1.03 1.559 0 2.15l-3.167 1.815-1.164-2.89 1.164-2.89z" />
                </svg>
                <span className="flex flex-col text-left">
                  <span className="text-[0.65rem] font-bold uppercase leading-none tracking-wider text-slate-500">
                    Get it on
                  </span>
                  <span className="text-base font-bold leading-tight tracking-tight">Google Play</span>
                </span>
              </button>
            </div>
          </div>

          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 text-left sm:grid-cols-3">
            {s8.cards.map((c) => (
              <div
                key={c.k}
                className="glass-card flex flex-col justify-between p-6 transition-transform hover:-translate-y-1 hover:border-[#1A5CFF]/30"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A5CFF] mb-2">
                  {c.k}
                </span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {c.v}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {c.u}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-500">
                  {c.f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
