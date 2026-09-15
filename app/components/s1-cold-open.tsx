"use client";

import { s1 } from "../../content/screens";

export default function S1() {
  return (
    <section
      aria-label="Screen 1 of 8: cold open"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-24 text-slate-900 md:px-12 lg:px-16 items-center text-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(26,92,255,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl pt-10">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1A5CFF]/20 bg-[#1A5CFF]/5 px-4 py-1.5 text-sm font-medium text-[#1A5CFF] shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1A5CFF] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1A5CFF]" />
          </span>
          {s1.eyebrow}
        </div>
        
        <h1
          id="screen-heading-1"
          tabIndex={-1}
          className="deck-headline text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl text-balance"
        >
          {s1.headline[0]}{" "}
          <span className="text-[#1A5CFF]">{s1.headline[1]}</span>{" "}
          <br className="hidden sm:block" />
          {s1.headline[2]} {s1.headline[3]}
        </h1>
        
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl text-balance">
          {s1.sub}
        </p>
        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#how-it-works"
            className="flex items-center justify-center gap-3 rounded-full bg-[image:var(--gradient-primary)] px-8 py-4 font-bold tracking-wide text-white shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(26,92,255,0.6)] active:scale-95"
          >
            <span>Explore Platform</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
          <div className="glass-card flex flex-col items-center justify-center gap-2 p-6 transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {s1.tierLabel}
            </span>
            <span className="text-3xl font-extrabold text-slate-900">
              {s1.tierValue}
            </span>
          </div>
          <div className="glass-card flex flex-col items-center justify-center gap-2 p-6 transition-transform hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
            <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {s1.satLabel}
            </span>
            <span className="flex items-center gap-2 text-3xl font-extrabold text-[#1A5CFF]">
              <span className="h-3 w-3 rounded-full bg-[#1A5CFF] shadow-[0_0_12px_rgba(26,92,255,0.6)]" />
              {s1.satValue}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
