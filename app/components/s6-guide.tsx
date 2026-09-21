"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function S6() {
  // P3 i18n: copy from messages/<locale>/screens.json (EN source: screens.ts).
  const t = useTranslations("screens.s6");
  const headline = t.raw("headline") as string[];
  const phones = t.raw("phones") as { code: string; meta: string; title: string; body: string; img: { src: string; alt: string; width: number; height: number } }[];
  const metrics = t.raw("metrics") as { k: string; v: string; s: string }[];
  const installSteps = t.raw("installSteps") as string[];
  return (
    <section
      aria-label="App Showcase"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-paper"
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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("eyebrow")}</p>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-balance text-ink md:text-5xl lg:text-6xl">
          {headline[0]}{" "}
          <span className="text-beacon">
            {headline[1]}
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
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
            <div className="absolute -bottom-4 h-16 w-40 rounded-full bg-[#232DA1]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Phone shell */}
            <div className="rn-card relative w-[200px] overflow-hidden p-1.5 transition-all duration-500 group-hover:-translate-y-3 sm:w-[240px]" style={{ borderRadius: "36px" }}>
              <div className="relative w-full overflow-hidden rounded-[28px] bg-slate-50">
                <Image
                  src={phone.img.src}
                  alt={phone.img.alt}
                  width={phone.img.width}
                  height={phone.img.height}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-beacon">{phone.meta}</span>
              <span className="block text-sm font-bold text-ink transition-colors group-hover:text-beacon">{phone.title}</span>
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
        className="rn-stat-row u-glass z-10 mt-8 w-full max-w-4xl flex-wrap justify-center gap-y-4 rounded-2xl px-6 py-5"
      >
        {metrics.map((m) => (
          <div key={m.k} className="flex flex-col items-center gap-1 px-6 text-center">
            <span className="font-mono text-sm font-black tabular-nums text-beacon">{m.v}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted">{m.s}</span>
          </div>
        ))}
      </motion.div>

      {/* Closer: install steps */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className="z-10 mx-auto mt-8 w-full max-w-lg px-6 text-center"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("closerTitle")}</p>
        <p className="mb-4 text-sm leading-relaxed text-muted">{t("closerBody")}</p>
        <ol className="flex flex-col gap-2 text-left">
          {installSteps.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span className="font-mono text-xs font-black text-beacon">{String(i + 1).padStart(2, "0")}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
