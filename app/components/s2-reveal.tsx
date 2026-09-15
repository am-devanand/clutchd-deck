"use client";

import Image from "next/image";
import { s2 } from "../../content/screens";

export default function S2() {
  return (
    <section
      aria-label="Screen 2 of 8: the reveal"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-24 text-slate-900 md:px-12 lg:px-16"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1A5CFF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center gap-6 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1.5 shadow-sm border border-emerald-100">
              <span className="pulse h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                {s2.livePill}
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A5CFF] mb-3">
              {s2.eyebrow}
            </p>
            <h2
              id="screen-heading-2"
              tabIndex={-1}
              className="deck-headline text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance"
            >
              {s2.headlineA}{" "}
              <span className="text-[#1A5CFF]">
                {s2.headlineBrand}
              </span>{" "}
              {s2.headlineB}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-500 text-balance">
            {s2.sub}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#how-it-works"
              className="group flex items-center gap-3 rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)] px-8 py-4 font-bold tracking-wide text-white transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(26,92,255,0.6)] hover:-translate-y-1 active:scale-[0.98]"
            >
              <span>{s2.ctaPrimary}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5"><path d="m9 18 6-6-6-6" /></svg>
            </a>
            <a
              href="#impact"
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-bold tracking-wide text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <span>{s2.ctaSecondary}</span>
            </a>
          </div>
          <div className="grid max-w-xl grid-cols-3 gap-4 pt-8">
            {s2.minis.map((m) => (
              <div
                key={m.k}
                className="glass-card flex flex-col justify-between gap-1 p-4 transition-transform hover:-translate-y-1"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A5CFF]">
                  {m.k}
                </span>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 lg:text-3xl">
                  {m.v}
                </div>
                <span className="text-xs text-slate-500 font-medium">{m.s}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center py-2 sm:flex lg:col-span-5">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[80px] pointer-events-none" />
          <div className="relative flex w-[280px] flex-col overflow-hidden rounded-[44px] border-[6px] border-white bg-white p-2 shadow-2xl ring-1 ring-slate-100">
            <div className="relative w-full h-[580px] overflow-hidden rounded-[32px] bg-slate-50">
              <Image
                src={s2.image.src}
                alt={s2.image.alt}
                width={s2.image.width}
                height={s2.image.height}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
