"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function S6() {
  // P3 i18n: copy from messages/<locale>/screens.json (EN source: screens.ts).
  const t = useTranslations("screens.s6");
  const headline = t.raw("headline") as string[];
  const phones = t.raw("phones") as { code: string; meta: string; title: string; body: string; img: { src: string; alt: string } }[];
  const metrics = t.raw("metrics") as { k: string; v: string; s: string }[];
  return (
    <section
      aria-label="App Showcase"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="z-10 px-6 pb-10 text-center md:px-12 lg:px-16"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] u-grad-text">{t("eyebrow")}</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          {headline[0]}{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            {headline[1]}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-slate-600">
          {t("sub")}
        </p>
      </motion.div>

      {/* Phone gallery */}
      <div className="no-scrollbar z-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:px-16 lg:gap-10">
        <div className="w-[5vw] shrink-0 lg:w-[15vw]" />
        {phones.map((phone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative flex shrink-0 snap-center flex-col items-center gap-5"
          >
            {/* Glow beneath phone */}
            <div className="absolute -bottom-4 h-16 w-40 rounded-full bg-indigo-300/70 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Phone shell */}
            <div className="relative aspect-[9/19.5] w-[200px] overflow-hidden rounded-[36px] u-glass p-1.5 ring-1 ring-white/60 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_-15px_rgba(79,70,229,0.3)] sm:w-[240px]">
              <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-slate-50">
                <Image
                  src={phone.img.src}
                  alt={phone.img.alt}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="text-center">
              <span className="u-grad-text mb-1 block text-[10px] font-bold uppercase tracking-widest">{phone.meta}</span>
              <span className="block text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{phone.title}</span>
            </div>
          </motion.div>
        ))}
        <div className="w-[5vw] shrink-0 lg:w-[15vw]" />
      </div>

      {/* Bottom metrics strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="u-glass z-10 mt-8 flex w-full max-w-4xl flex-wrap items-center justify-center gap-6 rounded-2xl px-6 py-5"
      >
        {metrics.map((m) => (
          <div key={m.k} className="flex flex-col items-center gap-1 text-center">
            <span className="u-grad-text font-mono text-sm font-black">{m.v}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{m.s}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
