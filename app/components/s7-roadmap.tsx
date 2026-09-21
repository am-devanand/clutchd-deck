"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PHASE_STYLES = [
  { badge: "bg-[#232DA1]/10 text-beacon border-[#232DA1]/25", dot: "bg-emerald-500", border: "border-[#232DA1]/25", hover: "hover:border-[#232DA1]/50" },
  { badge: "bg-beacon text-white border-transparent", dot: "bg-white", border: "border-transparent", hover: "hover:bg-[#1B237E]" },
  { badge: "bg-slate-100 text-muted border-line", dot: "bg-slate-400", border: "border-line", hover: "hover:border-muted" },
];

export default function S7() {
  // P3 i18n: copy from messages/<locale>/screens.json (EN source: screens.ts).
  const t = useTranslations("screens.s7");
  const headline = t.raw("headline") as string[];
  const rows = t.raw("rows") as { phase: string; idx: string; body: string; sub: string; pill: string; pillActive: boolean }[];
  const details = t.raw("details") as string[];
  return (
    <section
      aria-label="Roadmap"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-paper px-6 md:px-12 lg:px-16"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("eyebrow")}</p>
          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-balance text-ink md:text-5xl lg:text-6xl">
            {headline[0]}{" "}
            <span className="text-beacon">
              {headline[1]}
            </span>
          </h2>
        </motion.div>

        {/* Timeline rows */}
        <div className="flex flex-col gap-5">
          {rows.map((r, i) => {
            const style = PHASE_STYLES[i] ?? PHASE_STYLES[2];
            return (
              <motion.div
                key={r.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`group rn-card relative overflow-hidden p-6`}
              >
                {/* Left blue accent bar */}
                <div className="absolute bottom-0 left-0 top-0 w-1.5 rounded-l-2xl bg-beacon" />

                <div className="grid grid-cols-1 items-center gap-6 pl-4 md:grid-cols-12">
                  {/* Phase label */}
                  <div className="md:col-span-2">
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted">{r.idx}</span>
                    <span className="text-3xl font-black tabular-nums text-beacon">{r.phase}</span>
                  </div>

                  {/* Body */}
                  <div className="md:col-span-7">
                    <p className="text-sm font-semibold leading-relaxed text-ink">{r.body}</p>
                    <p className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted">{r.sub}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{details[i]}</p>
                  </div>

                  {/* Pill */}
                  <div className="md:col-span-3 md:flex md:justify-end">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${style.badge}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot} ${r.pillActive ? "animate-pulse" : ""}`} />
                      {r.pill}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expansion teaser + honesty framing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("expansionTitle")}</p>
          <p className="mb-3 text-sm leading-relaxed text-muted">{t("expansionBody")}</p>
          <p className="text-sm font-semibold leading-relaxed text-ink">{t("honesty")}</p>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center gap-8 border-t border-line pt-8"
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
            <span className="font-mono text-xs text-emerald-600">{t("engine")}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-muted">{t("pilotLabel")}</span>
            <span className="font-mono text-xs font-bold text-ink">{t("pilotValue")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
