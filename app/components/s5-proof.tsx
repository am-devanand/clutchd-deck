"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// 2026-09-16: renders old-site PROOF content — illustrative network stats +
// three verbatim testimonials (docs/REFERENCE-old-site.md). The former
// auto-incrementing "telemetry pool" counter was removed: a ticking supply
// number would misrepresent the network. Count renders static.
export default function S5() {
  const t = useTranslations("screens.s5");
  const stats = t.raw("stats") as { v: string; u: string; label: string; bar: string }[];
  const testimonials = t.raw("testimonials") as { quote: string; name: string; role: string }[];
  const methodBody = t.raw("methodBody") as string[];
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      aria-label="Impact"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-paper px-6 md:px-12 lg:px-16"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rn-eyebrow mb-6"
        >
          <span>{t("badge")}</span>
        </motion.div>

        {/* Giant number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", bounce: 0.2 }}
          className="relative"
        >
          <h2 className="font-black leading-[1.02] tracking-tight text-balance text-ink text-[90px] sm:text-[130px] lg:text-[160px]">
            {t("giant").split(" ")[0]}{" "}
            <span className="text-beacon">
              {t("giant").split(" ")[1]}
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted"
        >
          {t("proof")}
        </motion.p>

        {/* Early network pill (static) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="u-glass mt-5 flex items-center gap-3 rounded-full px-6 py-3"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
          <span className="text-xs font-medium text-muted">{t("poolLabel")}</span>
          {/* raw(): poolStart is a number — t() would throw on non-strings */}
          <span className="font-mono text-base font-black text-ink">{t.raw("poolStart")}</span>
          <span className="text-xs font-medium text-muted">{t("poolSuffix")}</span>
        </motion.div>
      </div>

      {/* Stat trio with dividers */}
      <div className="rn-stat-row z-10 mt-12 w-full max-w-5xl rounded-2xl border border-line bg-white/80 py-6 backdrop-blur">
        {stats.map((st, i) => (
          <motion.div
            key={st.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15 }}
            className="flex flex-1 flex-col items-center gap-1 px-6 py-2 text-center"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-black tabular-nums text-ink">{st.v}</span>
              <span className="text-xl font-bold text-beacon">{st.u}</span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{st.label}</p>
            <div className="mt-2 h-1.5 w-full max-w-[160px] overflow-hidden rounded-full bg-line">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: st.bar }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-beacon"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials — imported verbatim from old-site PROOF */}
      <div className="z-10 mt-12 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.15 }}
            className="rn-card flex flex-col justify-between p-6 text-left"
          >
            <blockquote className="mb-5 text-sm leading-relaxed text-muted">
              <span aria-hidden="true" className="mr-1 text-lg font-black text-beacon">&ldquo;</span>
              {t.quote}
            </blockquote>
            <figcaption className="border-t border-line pt-4">
              <span className="block text-sm font-bold text-ink">{t.name}</span>
              <span className="block text-xs text-muted">{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* Informational copy: methodology + pilot scope */}
      <div className="z-10 mx-auto mt-12 flex w-full max-w-xl flex-col gap-6 text-center">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("methodTitle")}</p>
          {methodBody.map((p, i) => (
            <p key={i} className="mb-3 text-sm leading-relaxed text-muted">{p}</p>
          ))}
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-beacon">{t("scopeTitle")}</p>
          <p className="text-sm leading-relaxed text-muted">{t("scopeBody")}</p>
        </div>
      </div>

      {/* Screen-reader note: {!isInView && "stats illustrative"} */}
      <span className="sr-only">{t("srNote")}</span>
    </section>
  );
}
