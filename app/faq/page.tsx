import type { Metadata } from "next";
import FaqAccordion from "../components/FaqAccordion";

// 2026-09-16: FAQ imported verbatim from the old site (clutchd-193.netlify.app),
// answers extracted from its JS bundle — see docs/REFERENCE-old-site.md.
export const metadata: Metadata = {
  title: "FAQ — ClutchD",
  description:
    "Straight answers about how ClutchD works, what it costs, and how your data is handled.",
};

const FAQS = [
  {
    q: "How does ClutchD matching work?",
    a: "ClutchD finds verified nearby providers for your request, and you can track the match in real time.",
  },
  {
    q: "How do estimates and pricing work?",
    a: "You see the price before work starts and approve the estimate before the wrench lifts.",
  },
  {
    q: "How are providers verified?",
    a: "Every mechanic and garage passes identity and skill verification (KYC) before joining the network.",
  },
  {
    q: "Where is ClutchD available?",
    a: "Currently rolling out in Coimbatore, with more cities planned.",
  },
  {
    q: "What payment methods are supported?",
    a: "Pay securely through the platform with Stripe and Razorpay.",
  },
  {
    q: 'What does "Preview" mean?',
    a: "Some screens and figures on this page are illustrative previews of the product; real numbers update as ClutchD rolls out.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex w-full justify-center bg-white px-6 pb-20 pt-14 md:px-12">
      <div className="w-full max-w-3xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
          Support
        </p>
        <h1 className="mb-3 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Questions, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">answered.</span>
        </h1>
        <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600">
          Everything you need to know about how ClutchD works before you book.
        </p>

        <FaqAccordion
          items={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
        />
      </div>
    </div>
  );
}
