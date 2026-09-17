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
            className="rn-card overflow-hidden"
            style={
              isOpen
                ? {
                    borderColor: "var(--beacon)",
                    boxShadow:
                      "0 0 0 2px rgba(26,92,255,0.45), 0 10px 30px -15px rgba(26,92,255,0.35)",
                  }
                : undefined
            }
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-base font-bold text-ink">{item.question}</span>
              <span
                aria-hidden="true"
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-lg font-black leading-none transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-transparent bg-beacon text-white"
                    : "border-line bg-white text-muted"
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
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
