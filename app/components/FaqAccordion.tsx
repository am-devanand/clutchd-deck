"use client";

import { useState } from "react";

// Accessible accordion for the imported FAQ content (/faq).
// One item open at a time; arrow/tab flow via native button + aria-expanded.
export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-blue-200 bg-white shadow-[0_10px_30px_-15px_rgba(37,99,235,0.25)]"
                : "border-slate-200 bg-slate-50/60 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-bold text-slate-900">{item.question}</span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg font-black leading-none transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-blue-200 bg-blue-50 text-blue-600"
                    : "border-slate-200 bg-white text-slate-400"
                }`}
              >
                +
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
