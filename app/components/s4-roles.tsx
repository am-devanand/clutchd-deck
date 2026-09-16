"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { s4 } from "../../content/screens";

export default function S4() {
  const [role, setRole] = useState("Car owners");
  const pods = s4.podsByRole[role] ?? [];

  return (
    <section
      aria-label="For You"
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-50/50"
    >
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-blue-100/50 blur-[100px]" />

      <div className="z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-2 lg:px-16">
        
        {/* Left */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Tailored Experience</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 lg:text-5xl xl:text-6xl">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Everyone
              </span>
              <br />at the Job.
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
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  {r}
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
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600 ring-1 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
            <div className="h-[500px] w-[300px] rounded-full bg-blue-100/50 blur-[80px]" />
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
