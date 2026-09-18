"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// Homepage testimonials — mirrors the ResQNow Testimonials carousel with the
// s5 voices beside a CSS metric visual. Photo-free: no screenshots, no
// canvas. Illustrative labels kept; reviewer tiles use initials, never
// photos.
export default function HomeReviews() {
  const t = useTranslations("screens.s5");
  const testimonials = t.raw("testimonials") as Testimonial[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [testimonials.length, index]);

  const review = testimonials[index] ?? testimonials[0];

  return (
    <section id="reviews" aria-label="Reviews" className="rn-section w-full bg-paper">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5">
            <span className="text-sm leading-none text-amber-400" aria-hidden="true">
              ★
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
              {t("reviewsBadge")}
            </span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-ink md:text-4xl">
            {t("homeTitle")}
          </h2>
          <p className="mt-3 text-sm font-medium text-muted md:text-base">
            {t("proof")}
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
        <figure className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-line bg-white p-8 text-center shadow-md">
          <div
            className="pointer-events-none absolute right-[-20%] top-[-20%] h-48 w-48 rounded-full bg-beacon/10 blur-[60px]"
            aria-hidden="true"
          />
          <div className="relative">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-beacon text-2xl font-black text-white shadow-lg shadow-blue-500/30">
              <span aria-hidden="true">◎</span>
            </div>
            <p className="text-5xl font-black tracking-tighter text-ink">{t("giant")}</p>
            <p className="mx-auto mt-3 max-w-[26ch] text-sm font-medium leading-relaxed text-muted">
              {t("proof")}
            </p>
            <p className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-bold text-emerald-600">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("active")}
            </p>
          </div>
        </figure>

        <div>
        <div className="mx-auto max-w-xl">
          <div
            key={review.name}
            className="rounded-2xl border border-line bg-white p-5 shadow-md transition-all duration-500 ease-in-out md:p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beacon text-base font-black text-white shadow-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-ink">{review.name}</h3>
                    <span className="rounded-full bg-beacon/10 px-2 py-0.5 text-xs font-bold text-beacon">
                      ✓ Verified
                    </span>
                  </div>
                  <p className="text-xs text-muted">{review.role}</p>
                </div>
              </div>
              <span className="shrink-0 text-2xl leading-none text-line" aria-hidden="true">
                &ldquo;
              </span>
            </div>

            <div className="mb-3 flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <span key={starIndex} className="text-base leading-none text-amber-400" aria-hidden="true">
                  ★
                </span>
              ))}
            </div>

            <p className="text-sm leading-7 text-muted">{review.quote}</p>
            <span className="sr-only">{t("srNote")}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {testimonials.map((item, dotIndex) => {
            const isActive = dotIndex === index;
            return (
              <button
                key={item.name}
                type="button"
                aria-label={`Show review ${dotIndex + 1}`}
                onClick={() => {
                  setIndex(dotIndex);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                  isActive ? "w-8 bg-beacon" : "w-2.5 bg-line hover:bg-muted"
                }`}
              />
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-muted lg:mx-0 lg:text-left">
          {t("scopeBody")}
        </p>
        </div>
        </div>
      </div>
    </section>
  );
}
