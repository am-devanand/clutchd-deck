"use client";

import Image from "next/image";
import { s6 } from "../../content/screens";

export default function S6() {
  return (
    <section
      aria-label="Screen 6 of 8: guide gallery"
      className="relative flex flex-col w-full max-w-7xl mx-auto py-32 text-slate-900"
    >
      <div className="z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16 text-center max-w-4xl mx-auto">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A5CFF] mb-4">
          Experience
        </p>
        <h2
          id="screen-heading-6"
          tabIndex={-1}
          className="deck-headline text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl text-balance"
        >
          {s6.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 text-balance mx-auto">
          Built with an emphasis on speed and clarity, the ClutchD app gets you back on the road safely.
        </p>
      </div>

      <div
        className="no-scrollbar flex w-full snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 pt-16 md:px-12 lg:px-16 lg:gap-12"
      >
        <div className="w-[10vw] shrink-0 sm:w-[20vw] lg:w-[25vw]" aria-hidden="true" />
        {s6.phones.map((img, i) => (
          <div
            key={i}
            className="group relative flex shrink-0 snap-center flex-col items-center gap-6"
          >
            <div className="relative aspect-[9/19.5] w-[260px] overflow-hidden rounded-[44px] border-[6px] border-white bg-slate-50 p-1.5 shadow-[var(--shadow-card)] ring-1 ring-slate-100 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[var(--shadow-card-hover)] sm:w-[300px]">
              <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white">
                <Image
                  src={img.img.src}
                  alt={img.img.alt}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="flex max-w-[260px] flex-col items-center text-center transition-opacity duration-300">
              <span className="mb-1 text-xs font-bold uppercase tracking-wider text-[#1A5CFF]">
                {img.meta}
              </span>
              <span className="text-base font-semibold text-slate-900">
                {img.title}
              </span>
            </div>
          </div>
        ))}
        <div className="w-[10vw] shrink-0 sm:w-[20vw] lg:w-[25vw]" aria-hidden="true" />
      </div>
    </section>
  );
}
