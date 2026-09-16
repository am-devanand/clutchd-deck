"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const STEP_COLORS: Record<string, string> = {
  "01": "#3b82f6",
  "02": "#6366f1",
  "03": "#8b5cf6",
  "04": "#a855f7",
  "05": "#ec4899",
};

export default function S3() {
  // P3 i18n: copy from messages/<locale>/screens.json (EN source: screens.ts).
  const t = useTranslations("screens.s3");
  const headline = t.raw("headline") as string[];
  const steps = t.raw("steps") as { n: string; title: string; icon: string; body: string; foot: string; footExtra?: string; active?: boolean }[];
  const metrics = t.raw("metrics") as { label: string; value: string }[];
  return (
    <section
      aria-label="How it Works"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 flex flex-col justify-center gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] u-grad-text">{t("eyebrow")}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            {headline[0]}{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              {headline[1]}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            {t("sub")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — gradient */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent md:block" />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
            {steps.map((st, i) => (
              <motion.div
                key={st.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative flex flex-col gap-4 ${st.active ? "md:-translate-y-3" : ""}`}
              >
                {/* Number bubble */}
                <div className="flex items-center justify-center md:justify-start">
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full text-lg font-black text-white shadow-lg transition-transform group-hover:-translate-y-1 ${
                      st.active
                        ? "ring-4 ring-offset-4 ring-offset-white"
                        : "bg-slate-100 text-slate-400 shadow-none ring-0 border border-slate-200"
                    }`}
                    style={
                      st.active
                        ? {
                            background: `radial-gradient(circle at 30% 30%, ${STEP_COLORS[st.n]}ee, ${STEP_COLORS[st.n]}aa)`,
                            boxShadow: `0 0 20px ${STEP_COLORS[st.n]}60`,
                            "--tw-ring-color": STEP_COLORS[st.n],
                          } as React.CSSProperties
                        : {}
                    }
                  >
                    {st.n}
                    {st.active && (
                      <span
                        className="absolute -inset-1 rounded-full animate-ping opacity-20"
                        style={{ background: STEP_COLORS[st.n] }}
                      />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`relative flex flex-col gap-2 overflow-hidden rounded-2xl p-5 transition-all duration-300 group-hover:-translate-y-1 ${
                    st.active
                      ? "u-glass shadow-[0_15px_30px_-10px_rgba(79,70,229,0.25)]"
                      : "border border-slate-200/70 bg-slate-50/60 backdrop-blur-sm hover:u-glass hover:shadow-md"
                  }`}
                >
                  {st.active && (
                    <div className="absolute left-0 top-0 h-1 w-full" style={{ background: `linear-gradient(to right, ${STEP_COLORS[st.n]}, transparent)` }} />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-base font-black tracking-tight text-slate-900">{st.title}</span>
                    <span className={`text-xl ${st.active ? "text-blue-600" : "text-slate-400"}`} aria-hidden="true">{st.icon}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">{st.body}</p>
                  <div className="mt-2 border-t border-slate-100 pt-2">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      {st.foot}
                      {st.footExtra && <span className="ml-2 u-grad-text">{st.footExtra}</span>}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom metrics row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="u-glass flex flex-wrap items-center justify-center gap-8 rounded-2xl px-8 py-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1">
              <span className="u-grad-text font-mono text-sm font-black">{m.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
