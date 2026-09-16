"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { s6 } from "../../content/screens";

export default function S6() {
  return (
    <section
      aria-label="App Showcase"
      className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-slate-50/50"
    >
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[700px] rounded-full bg-blue-100/60 blur-[100px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="z-10 px-6 pb-10 text-center md:px-12 lg:px-16"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Experience</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
          See It Before You{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Need It.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-slate-600">
          A unified system connecting drivers, emergency mechanics, parts suppliers, and fleet intelligence.
        </p>
      </motion.div>

      {/* Phone gallery */}
      <div className="no-scrollbar z-10 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-4 md:px-16 lg:gap-10">
        <div className="w-[5vw] shrink-0 lg:w-[15vw]" />
        {s6.phones.map((phone, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative flex shrink-0 snap-center flex-col items-center gap-5"
          >
            {/* Glow beneath phone */}
            <div className="absolute -bottom-4 h-16 w-40 rounded-full bg-blue-200 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Phone shell */}
            <div className="relative aspect-[9/19.5] w-[200px] overflow-hidden rounded-[36px] border border-slate-100 bg-white p-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-200/50 transition-transform duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.15)] group-hover:border-blue-100 sm:w-[240px]">
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
              <span className="block text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1">{phone.meta}</span>
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
        className="z-10 mt-8 flex w-full max-w-4xl flex-wrap items-center justify-center gap-6 border-t border-slate-200 px-6 pt-6"
      >
        {s6.metrics.map((m) => (
          <div key={m.k} className="flex flex-col items-center gap-1 text-center">
            <span className="font-mono text-sm font-black text-slate-900">{m.v}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">{m.s}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
