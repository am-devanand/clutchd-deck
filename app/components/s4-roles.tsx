"use client";

import { useState } from "react";
import Image from "next/image";
import { s4 } from "../../content/screens";

export default function S4() {
  const [role, setRole] = useState("Car owners");
  const pods = s4.podsByRole[role] ?? [];
  return (
    <section
      aria-label="Screen 4 of 8: features"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-32 text-slate-900 md:px-12 lg:px-16"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1A5CFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A5CFF]">
              Tailored Experience
            </p>
            <h2
              id="screen-heading-4"
              tabIndex={-1}
              className="deck-headline text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance"
            >
              {s4.headline[0]} {s4.headline[1]}
            </h2>
          </div>
          <div
            role="tablist"
            aria-label="Roles"
            className="no-scrollbar flex items-center gap-6 overflow-x-auto border-b border-slate-200 pb-1"
          >
            {s4.roles.map((r) => {
              const active = r === role;
              return (
                <button
                  key={r}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`group relative whitespace-nowrap pb-3 text-left transition-colors ${
                    active ? "" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`text-lg transition-colors ${
                      active
                        ? "font-bold text-slate-900 group-hover:text-[#1A5CFF]"
                        : "font-semibold text-slate-500"
                    }`}
                  >
                    {r}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] w-full rounded-t-lg bg-[#1A5CFF] ${
                      active ? "" : "hidden"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-2">
            {pods.map((p) => (
              <div
                key={p.code}
                className="glass-card group flex flex-col gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[#1A5CFF]/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-[#1A5CFF] group-hover:bg-[#1A5CFF] group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden justify-center py-2 sm:flex lg:col-span-5">
          <div className="relative aspect-[9/19.5] w-full max-w-[320px] overflow-hidden rounded-[48px] border-[8px] border-white bg-slate-50 p-2 shadow-2xl ring-1 ring-slate-200">
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-slate-100">
              <Image
                src={s4.image.src}
                alt={s4.image.alt}
                width={s4.image.width}
                height={s4.image.height}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
