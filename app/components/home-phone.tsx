"use client";

import { useEffect, useState } from "react";

interface Stage {
  label: string;
  sub: string;
  eta: string;
  pos: number;
}

interface S1Phone {
  city: string;
  sosTitle: string;
  sosAction: string;
  enRoute: string;
  enRouteSub: string;
  quickParts: string;
  quickPartsSub: string;
  quickHistory: string;
  quickHistorySub: string;
  tabs: string[];
  stages: Stage[];
  mechName: string;
  mechMeta: string;
}

// Hero phone: plays the app's real dispatch lifecycle (searching → accepted →
// en_route → in_progress, docs/CLUTCHD-FACTS.md) as a looping live demo.
// The mechanic persona is illustrative UI chrome (same class as s1 flavor
// text) — not a product claim. Respects prefers-reduced-motion: shows the
// final stage statically, no interval, no motion.
const STAGE_MS = 2800;

export default function HomePhone({
  phone,
  cardLabel,
  sys,
  locating,
  locatingValue,
}: {
  phone: S1Phone;
  cardLabel: string;
  sys: string;
  locating: string;
  locatingValue: string;
}) {
  const stages = phone.stages;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setStage(stages.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, STAGE_MS);
    return () => window.clearInterval(id);
  }, [stages.length]);

  const current = stages[stage] ?? stages[0];
  const searching = stage === 0;
  const arrived = stage === stages.length - 1;

  return (
    <div className="relative isolate flex w-full justify-center px-4 sm:px-0">
      {/* Radar rings (ambient) */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30"
        aria-hidden="true"
      >
        <div className="absolute h-[300px] w-[300px] rounded-full border border-beacon/20 motion-safe:animate-ping sm:h-[500px] sm:w-[500px]" />
        <div className="absolute h-[200px] w-[200px] rounded-full border border-beacon/30 motion-safe:animate-pulse sm:h-[350px] sm:w-[350px]" />
        <div className="absolute h-[100px] w-[100px] rounded-full border border-beacon/40 sm:h-[200px] sm:w-[200px]" />
      </div>

      {/* Floating dispatch widget — synced to the lifecycle stage */}
      <div className="absolute -left-4 top-12 z-30 hidden rounded-2xl border border-line/60 bg-white/95 p-4 shadow-[0_20px_40px_-5px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 sm:-left-12 sm:top-24 sm:block">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-beacon/10 ring-2 ring-beacon/20">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-60 motion-safe:animate-ping" />
              <span
                className={`relative inline-flex h-3 w-3 rounded-full ${
                  arrived ? "bg-emerald-500" : "bg-beacon"
                }`}
              />
            </span>
            <div
              className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white ${
                arrived ? "bg-beacon" : "animate-pulse bg-emerald-500"
              }`
              }
              aria-hidden="true"
            />
          </div>
          <div className="pr-2">
            <p className="mb-0.5 text-[10px] font-black uppercase tracking-widest text-beacon">
              {cardLabel}
            </p>
            <p key={current.label} className="u-pop text-sm font-bold text-ink">
              {searching ? locating : current.label}
            </p>
            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-muted">
              {searching ? locatingValue : current.eta} · {sys}
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-[340px] overflow-hidden rounded-[2.5rem] border border-line bg-white shadow-[0_25px_70px_-15px_rgba(0,0,0,0.18)]">
      {/* status bar */}
      <div className="flex items-center justify-between border-b border-line bg-paper px-6 pb-3 pt-5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
          {phone.city}
        </span>
        <span className="flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="ml-1 h-2 w-4 rounded-[2px] border border-muted/50" />
        </span>
      </div>

      <div className="space-y-3.5 p-5">
        {/* SOS card — the app's primary action */}
        <div className="relative overflow-hidden rounded-2xl bg-beacon p-5 text-center text-white shadow-lg shadow-blue-500/25">
          <div
            className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-8 -left-4 h-20 w-20 rounded-full bg-white/10 blur-lg"
            aria-hidden="true"
          />
          <p className="relative z-10 text-sm font-bold">{phone.sosTitle}</p>
          <div className="relative z-10 mt-3 flex items-center justify-center gap-3 rounded-2xl bg-white/15 py-3 ring-1 ring-white/30 backdrop-blur-sm">
            <span className="relative flex h-4 w-4" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] font-black text-beacon">
                SOS
              </span>
            </span>
            <span className="text-base font-black tracking-wide">
              {phone.sosAction}
            </span>
          </div>
        </div>

        {/* Live dispatch card — stage-driven lifecycle demo */}
        <div
          className="rounded-2xl border border-line bg-white p-4 shadow-sm"
          aria-live="polite"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-beacon opacity-60 motion-safe:animate-ping" />
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    arrived ? "bg-emerald-500" : "bg-beacon"
                  }`}
                />
              </span>
              {/* key= remounts on stage change → u-pop entrance */}
              <p key={current.label} className="u-pop text-sm font-black text-ink">
                {current.label}
              </p>
            </div>
            <span
              key={current.eta}
              className={`u-pop rounded-full px-2 py-0.5 font-mono text-[10px] font-bold text-white ${
                arrived ? "bg-emerald-500" : "bg-beacon"
              }`}
            >
              {current.eta}
            </span>
          </div>
          <p key={current.sub} className="u-pop mt-1 text-xs font-medium text-muted">
            {current.sub}
          </p>

          {/* route strip: you → mechanic (marker slides with the stage) */}
          <div className="relative my-3 h-9" aria-hidden="true">
            <div className="absolute left-1 right-1 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-line" />
            <div
              className="absolute left-1 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-beacon transition-all duration-1000 ease-out"
              style={{ width: `calc(${current.pos}% - 6px)` }}
            />
            {/* you */}
            <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-beacon bg-white" />
            {/* mechanic marker: radar while searching, avatar once accepted */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
              style={{ left: `${current.pos}%` }}
            >
              {searching ? (
                <span className="relative flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-beacon/40 motion-safe:animate-ping" />
                  <span className="relative inline-flex h-4 w-4 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-beacon/60" />
                  </span>
                </span>
              ) : (
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-black text-white shadow-md shadow-blue-500/30 ring-2 ring-white ${
                    arrived ? "bg-emerald-500" : "bg-beacon"
                  }`}
                >
                  {arrived ? "✓" : phone.mechName.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* mechanic identity row (appears once accepted) */}
          {searching ? (
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-beacon/70 [animation-delay:0ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-beacon/70 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-beacon/70 [animation-delay:300ms]" />
              </span>
              <p className="text-[11px] font-semibold text-muted">{phone.enRouteSub}</p>
            </div>
          ) : (
            <div className="u-pop flex items-center gap-2.5 rounded-xl border border-line bg-slate-50 px-3 py-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-beacon text-xs font-black text-white">
                {phone.mechName.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-ink">{phone.mechName}</p>
                <p className="truncate text-[10px] font-medium text-muted">
                  {phone.mechMeta}
                </p>
              </div>
              <span className="shrink-0 text-[11px] font-bold text-amber-400" aria-hidden="true">
                ★
              </span>
            </div>
          )}
        </div>

        {/* Quick actions: marketplace + history (grounded features) */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-sm transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-beacon/10">
              <span className="text-sm font-black text-beacon" aria-hidden="true">
                ◈
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">{phone.quickParts}</p>
              <p className="truncate text-[11px] font-medium text-muted">
                {phone.quickPartsSub}
              </p>
            </div>
            <span className="shrink-0 text-muted" aria-hidden="true">
              ›
            </span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-sm transition-colors">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-beacon/10">
              <span className="text-sm font-black text-beacon" aria-hidden="true">
                ≡
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-ink">
                {phone.quickHistory}
              </p>
              <p className="truncate text-[11px] font-medium text-muted">
                {phone.quickHistorySub}
              </p>
            </div>
            <span className="shrink-0 text-muted" aria-hidden="true">
              ›
            </span>
          </div>
        </div>
      </div>

      {/* app tab bar */}
      <div className="flex items-center justify-around border-t border-line bg-white px-3 pb-4 pt-2.5">
        {phone.tabs.map((tab, i) => (
          <div
            key={tab}
            className={`flex flex-col items-center gap-0.5 ${
              i === 0 ? "text-beacon" : "text-muted"
            }`}
          >
            <span className="text-sm leading-none" aria-hidden="true">
              {["⌂", "◈", "≡", "◎"][i] ?? "○"}
            </span>
            <span className="text-[9px] font-bold">{tab}</span>
            <span
              className={`h-0.5 w-4 rounded-full ${i === 0 ? "bg-beacon" : "bg-transparent"}`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
