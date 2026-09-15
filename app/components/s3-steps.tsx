"use client";

import { s3 } from "../../content/screens";

export default function S3() {
  return (
    <section
      aria-label="Screen 3 of 8: how it works"
      className="relative flex flex-col w-full max-w-7xl mx-auto px-6 py-32 text-slate-900 md:px-12 lg:px-16"
    >
      <div className="z-10 mx-auto w-full max-w-7xl flex-1">
        <div className="mb-16 flex max-w-4xl flex-col text-center mx-auto items-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A5CFF] mb-4">
            How it works
          </p>
          <h2
            id="screen-heading-3"
            tabIndex={-1}
            className="deck-headline text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance"
          >
            {s3.headline[0]} {s3.headline[1]}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 text-balance">
            {s3.sub}
          </p>
        </div>

        <div className="relative w-full mt-10">
          <div className="absolute left-0 right-0 top-[28px] z-0 hidden h-1 bg-slate-100 rounded-full md:block">
            <div
              className="h-full rounded-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]"
              style={{ width: s3.routeWidth }}
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {s3.steps.map((st) =>
              st.active ? (
                <div key={st.n} className="relative flex flex-col md:-top-4 transition-transform hover:-translate-y-2">
                  <div className="mb-6 flex justify-center md:justify-start items-center">
                    <div className="flex h-14 w-14 items-center justify-center bg-[image:var(--gradient-primary)] text-lg font-bold text-white shadow-[0_10px_25px_-5px_rgba(26,92,255,0.5)] ring-[8px] ring-white rounded-full">
                      {st.n}
                    </div>
                  </div>
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 text-slate-900 shadow-[var(--shadow-card-hover)] ring-1 ring-slate-100 min-h-[220px]">
                    <div className="absolute left-0 right-0 top-0 h-1.5 bg-[image:var(--gradient-primary)]" />
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold tracking-tight">
                          {st.title}
                        </span>
                        <span aria-hidden="true" className="text-2xl text-[#1A5CFF]">
                          {st.icon}
                        </span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-600">
                        {st.body}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={st.n} className="group flex flex-col transition-all duration-300 md:-top-4">
                  <div className="mb-6 flex justify-center md:justify-start items-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="flex h-14 w-14 items-center justify-center bg-slate-50 text-lg font-bold text-slate-400 shadow-sm ring-[8px] ring-white border border-slate-200 rounded-full group-hover:border-[#1A5CFF]/30 group-hover:text-[#1A5CFF] group-hover:bg-blue-50">
                      {st.n}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 min-h-[220px] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xl font-bold tracking-tight text-slate-800">
                          {st.title}
                        </span>
                        <span aria-hidden="true" className="text-2xl text-slate-300 group-hover:text-slate-400">
                          {st.icon}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {st.body}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
