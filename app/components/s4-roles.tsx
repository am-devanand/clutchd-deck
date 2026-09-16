"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { s4 } from "../../content/screens";

export default function S4() {
  // P3 i18n: tab state keys stay English (pod lookup), display labels come
  // from roleLabels so /ta shows Tamil tabs.
  const t = useTranslations("screens.s4");
  const headline = t.raw("headline") as string[];
  const roleLabels = t.raw("roleLabels") as Record<string, string>;
  const [role, setRole] = useState("Car owners");
  const pods = t.raw(`podsByRole.${role}`) as { code: string; icon: string; title: string; body: string }[];

  return (
    <section
      aria-label="For You"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-white"
    >
      {/* Gradient mesh wall */}
      <div className="u-mesh" />

      <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-2 lg:px-16">
        
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] u-grad-text">{t("eyebrow")}</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl xl:text-6xl">
              {headline[0]}{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {headline[1]}
              </span>
              <br />{headline[2]}
            </h2>
          </motion.div>

          {/* Role tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-2 flex-wrap"
          >
            {s4.roles.map((r) => {
              const active = r === role;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-200"
                      : "border border-slate-200 bg-white/70 text-slate-500 backdrop-blur hover:border-indigo-200 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  {roleLabels[r] ?? r}
                </button>
              );
            })}
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 min-h-[240px]">
            <AnimatePresence mode="popLayout">
              {pods.map((p, i) => (
                <motion.div
                  key={p.code + role}
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="group u-glass u-lift relative overflow-hidden rounded-xl p-5 transition-shadow hover:shadow-lg"
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-50 to-cyan-50 text-xl text-indigo-600 ring-1 ring-indigo-100/80 transition-all group-hover:from-indigo-600 group-hover:to-cyan-500 group-hover:text-white">
                      {p.icon}
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-slate-900">{p.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Phone */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, type: "spring", bounce: 0.3 }}
          className="relative hidden justify-center lg:flex"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[300px] rounded-full bg-indigo-200/60 blur-[80px]" />
          </div>
          <div className="group relative w-[260px] overflow-hidden rounded-[44px] border border-slate-100 bg-white p-1.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-200/50">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[36px] bg-slate-50">
              <Image
                src={s4.image.src}
                alt={s4.image.alt}
                width={s4.image.width}
                height={s4.image.height}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
