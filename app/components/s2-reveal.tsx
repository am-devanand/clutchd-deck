"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { s2 } from "../../content/screens";

export default function S2() {
  // P2 i18n: copy from messages/<locale>/screens.json (content/screens.ts
  // remains the English editing surface; static import kept for image shape).
  const t = useTranslations("screens.s2");
  const minis = t.raw("minis") as { k: string; v: string; s: string }[];
  const pillars = t.raw("pillars") as { t: string; body: string }[];
  const commitments = t.raw("commitments") as { code: string; t: string; body: string }[];
  const marketplace = t.raw("marketplace") as { fitmentTitle: string; fitmentBody: string; compareTitle: string; compareBody: string };
  return (
    <section
      aria-label="Features"
      className="relative flex h-full w-full items-center overflow-hidden bg-paper"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:px-16">
        
        {/* Left content */}
        <div className="flex flex-col gap-8">
          {/* F14: live indicator keeps emerald (not the beacon section
              standard) — green signals live status. */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-200/70 bg-emerald-50/80 px-4 py-2 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{t("livePill")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("eyebrow")}</p>
            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-balance text-ink lg:text-6xl">
              {t("headlineA")}{" "}
              <span className="text-beacon">
                {t("headlineBrand")}
              </span>{" "}
              {t("headlineB")}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-base leading-relaxed text-muted"
          >
            {t("sub")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="u-btn-grad group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-bold text-white">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                {t("ctaPrimary")}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="m9 18 6-6-6-6" /></svg>
              </span>
            </button>
            <button className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-beacon bg-white/70 px-7 py-3 text-sm font-bold text-beacon backdrop-blur transition-all hover:bg-beacon hover:text-white">
              {t("ctaSecondary")}
            </button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            {minis.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group rn-card p-4"
              >
                <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-beacon">{m.k}</span>
                <span className="block text-xl font-black tabular-nums text-ink">{m.v}</span>
                <span className="block text-[11px] text-muted mt-0.5">{m.s}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Informational copy: pillars, TRUST commitments, marketplace */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("pillarsTitle")}</p>
            <p className="max-w-lg text-sm leading-relaxed text-muted">{t("pillarsSub")}</p>
            {pillars.map((p) => (
              <div key={p.t} className="group rn-card p-4">
                <span className="mb-1 block text-sm font-bold text-ink">{p.t}</span>
                <span className="block text-xs leading-relaxed text-muted">{p.body}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("commitmentsTitle")}</p>
            <p className="max-w-lg text-sm leading-relaxed text-muted">{t("commitmentsSub")}</p>
            {commitments.map((c) => (
              <div key={c.code} className="group rn-card p-4">
                <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-beacon">{c.code}</span>
                <span className="mb-1 block text-sm font-bold text-ink">{c.t}</span>
                <span className="block text-xs leading-relaxed text-muted">{c.body}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="group rn-card p-4">
              <span className="mb-1 block text-sm font-bold text-ink">{marketplace.fitmentTitle}</span>
              <span className="block text-xs leading-relaxed text-muted">{marketplace.fitmentBody}</span>
            </div>
            <div className="group rn-card p-4">
              <span className="mb-1 block text-sm font-bold text-ink">{marketplace.compareTitle}</span>
              <span className="block text-xs leading-relaxed text-muted">{marketplace.compareBody}</span>
            </div>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Glow behind phone */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[300px] rounded-full bg-[#232DA1]/10 blur-[80px]" />
          </div>
          <div className="group relative w-[260px] overflow-hidden rounded-[44px] border border-line bg-white p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50">
            <div className="relative w-full overflow-hidden rounded-[36px] bg-slate-50">
              <Image
                src={s2.image.src}
                alt={s2.image.alt}
                width={s2.image.width}
                height={s2.image.height}
                className="h-auto w-full"
              />
              {/* Bottom-sheet caption row */}
              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-line bg-white/90 p-3 shadow-lg backdrop-blur-xl">
                <div aria-hidden="true" className="mx-auto mb-2.5 h-1 w-10 rounded-full bg-line" />
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-beacon opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-beacon" />
                  </span>
                  <span aria-hidden="true" className="h-2 flex-1 rounded-full bg-line" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
