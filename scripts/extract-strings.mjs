// P0 string-extraction (docs/TAMIL-PLAN.md §2, §8): generates messages/en/*.json
// from content/screens.ts + hardcoded component/page copy, so English keeps a
// single editing surface (screens.ts) and never drifts from the catalogs.
//
// Usage: node scripts/extract-strings.mjs
// Idempotent: regenerating overwrites the en seed files in place.
//
// NOTE: extraction is intentionally explicit (keyed writes below), not AST
// magic — screens.ts is stable and reviewed, and explicit keys make reviewable
// diffs. When you add a new field to screens.ts, add the mapping here; the
// checker step in verify will catch missing keys via next-intl's dev warning.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

// Parse content/screens.ts as data via the TypeScript compiler (robust type
// stripping — no regex surgery on source text).
import ts from "typescript";

const screensSrc = readFileSync(
  path.join(root, "content", "screens.ts"),
  "utf8"
);
const js = ts.transpileModule(screensSrc, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.ESNext,
  },
}).outputText;

const tmp = path.join(root, "scripts", ".screens.tmp.mjs");
writeFileSync(tmp, js);
const { s1, s2, s3, s4, s5, s6, s7, s8 } = await import(tmp);

const common = {
  nav: {
    features: "Features",
    howItWorks: "How it Works",
    forYou: "For You",
    impact: "Impact",
    app: "App",
    roadmap: "Roadmap",
    faq: "FAQ",
    download: "Get the App",
  },
  footer: {
    blurb:
      "ClutchD connects drivers, mechanics, garages, fleets, parts, payments and service history into one automotive ecosystem.",
    liveBadge: "Live in Coimbatore",
    platform: "Platform",
    company: "Company",
    legal: "Legal",
    platformLinks: {
      features: "Features",
      howItWorks: "How it Works",
      forYou: "For You",
      app: "App Showcase",
    },
    companyLinks: { impact: "Impact", roadmap: "Roadmap", download: "Get the App" },
    legalLinks: { faq: "FAQ", privacy: "Privacy Policy", terms: "Terms of Use" },
    rights: "ClutchD. All rights reserved.",
  },
  back: "Back to ClutchD",
};

const faq = {
  eyebrow: "Support",
  title: "Questions, <gradient>answered.</gradient>",
  lede: "Everything you need to know about how ClutchD works before you book.",
  items: [
    {
      question: "How does ClutchD matching work?",
      answer:
        "ClutchD finds verified nearby providers for your request, and you can track the match in real time.",
    },
    {
      question: "How do estimates and pricing work?",
      answer:
        "You see the price before work starts and approve the estimate before the wrench lifts.",
    },
    {
      question: "How are providers verified?",
      answer:
        "Every mechanic and garage passes identity and skill verification (KYC) before joining the network.",
    },
    { question: "Where is ClutchD available?", answer: "Currently rolling out in Coimbatore, with more cities planned." },
    { question: "What payment methods are supported?", answer: "Pay securely through the platform with Stripe and Razorpay." },
    {
      question: 'What does "Preview" mean?',
      answer:
        "Some screens and figures on this page are illustrative previews of the product; real numbers update as ClutchD rolls out.",
    },
  ],
};

const legal = {
  backLink: "Back to ClutchD",
  updatedLabel: "Last updated",
  copyright: "ClutchD — connected automotive care, Coimbatore.",
  privacy: {
    title: "Privacy Policy",
    updated: "14 August 2026",
    intro: "How ClutchD handles information when you visit the site or sign up for early access.",
    sections: [
      { h: "1. What this policy covers", body: ["This policy explains how the ClutchD site handles information when you visit it or sign up for early access."] },
      {
        h: "2. Early-access signups",
        body: [
          "When you enter your email address to request early access, we receive it through our form provider at the contact address clutchd04dsvs@gmail.com. We use it solely to contact you about the ClutchD Coimbatore launch. We do not share, sell, or rent your email address to anyone.",
          "Your email is stored with our form provider and checked by our team.",
          "You can ask us to remove it at any time by emailing clutchd04dsvs@gmail.com.",
          "We do not send marketing newsletters beyond launch-related updates.",
        ],
      },
      { h: "3. Analytics", body: ["The site uses GoatCounter, a cookie-free, privacy-friendly analytics tool, to count page views and measure general traffic. GoatCounter does not use cookies and does not collect personal data such as names, email addresses, or IP-identifying information."] },
      { h: "4. Local storage", body: ["Your browser may store two small flags locally: your early-access dedupe list and the dismissal state of our privacy notice. These never leave your device."] },
      { h: "5. Contact", body: ["Questions about this policy or your data? Email clutchd04dsvs@gmail.com."] },
    ],
  },
  terms: {
    title: "Terms of Use",
    updated: "14 August 2026",
    intro: "The terms that apply when you use the ClutchD site or sign up for early access.",
    sections: [
      { h: "1. The site", body: ["The ClutchD site introduces the ClutchD platform and collects early-access interest. Everything shown — features, prices, stats, testimonials, timelines — is an illustrative preview of the planned service and does not constitute an offer, contract, or guarantee of availability, pricing, or service levels."] },
      { h: "2. Early access", body: ["Submitting your email requests early access to the ClutchD Coimbatore rollout. It does not guarantee access, timing, or pricing. We may contact you at the address you provide."] },
      { h: "3. Acceptable use", body: ["Do not submit false, abusive, or automated form submissions.", "Do not attempt to disrupt, scrape, or probe the site.", "Do not reuse ClutchD content, marks, or visuals without permission."] },
      { h: "4. No warranty", body: ['The site is provided "as is" without warranties of any kind. We may change, suspend, or remove the site or the early-access program at any time.'] },
      { h: "5. Contact", body: ["Questions about these terms? Email clutchd04dsvs@gmail.com."] },
    ],
  },
};

const meta = {
  site: {
    title: "ClutchD — Connected Automotive Care",
    description:
      "On-demand verified mechanics, roadside help, parts marketplace, real-time tracking and digital service history: one connected automotive ecosystem, live in Coimbatore.",
  },
  features: { title: "Features — ClutchD", description: "Verified mechanics, transparent estimates, secure payments, parts marketplace and digital service history — one connected ecosystem." },
  howItWorks: { title: "How it works — ClutchD", description: "From breakdown to back on the road: request, match, accept, en route, in progress, done — six real job states with live tracking." },
  forYou: { title: "For providers — ClutchD", description: "Built for everyone who keeps vehicles moving: drivers, mechanics, garages and fleets — one verified network." },
  impact: { title: "Proof — ClutchD", description: "People on the road, in their own words: drivers, mechanics and garages on the ClutchD network." },
  roadmap: { title: "Roadmap — ClutchD", description: "Where ClutchD is headed: deeper diagnostics, fleet contracts, and statewide expansion from Coimbatore across Tamil Nadu." },
  download: { title: "Early access — ClutchD", description: "ClutchD is rolling out in Coimbatore — be among the first to try one connected ecosystem for automotive care." },
  faq: { title: "FAQ — ClutchD", description: "Straight answers about how ClutchD works, what it costs, and how your data is handled." },
  app: { title: "App showcase — ClutchD", description: "A guided tour of the ClutchD app: authentication, dashboard, parts marketplace, service history, settings and vehicles — one system end to end." },
  classic: { title: "Classic deck — ClutchD", description: "The full ClutchD story in one scroll: dispatch, matching, tracking, roles, proof, roadmap and early access." },
  privacy: { title: "Privacy policy — ClutchD", description: "How ClutchD handles information when you visit the site or sign up for early access." },
  terms: { title: "Terms of use — ClutchD", description: "The terms that apply when you use the ClutchD site or sign up for early access." },
};

// P2: s1 UI strings hardcoded in s1-cold-open.tsx (CTAs, stat labels, dispatch
// card rows) now live in content/screens.ts so both locales can translate them.
// (The object spread below picks them up automatically.)

// screens.json keeps s1–s8 content verbatim as nested objects.
const screens = { s1, s2, s3, s4, s5, s6, s7, s8 };

const out = path.join(root, "messages");
for (const [name, data] of Object.entries({ common, screens, faq, legal, meta })) {
  const dir = path.join(out, "en");
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, `${name}.json`), JSON.stringify(data, null, 2) + "\n");
  console.log(`wrote messages/en/${name}.json`);
}

// Tamil seed: echo the English catalog (P2 replaces these with translations;
// locale switching is functional from day one).
// P2 GUARD (2026-09-16): never overwrite hand-translated Tamil catalogs.
// Once messages/ta/<name>.json contains real Tamil, the extractor leaves it
// alone — delete the file to force a re-seed.
const TAMIL_INDICATOR = /[\u0B80-\u0BFF]/; // Tamil Unicode block
for (const [name, data] of Object.entries({ common, screens, faq, legal, meta })) {
  const taPath = path.join(out, "ta", `${name}.json`);
  const existing = readFileSync(taPath, "utf8");
  const hasTamil = TAMIL_INDICATOR.test(existing);
  if (hasTamil) {
    console.log(`kept messages/ta/${name}.json (hand-translated — extractor skipped)`);
    continue;
  }
  const dir = path.join(out, "ta");
  mkdirSync(dir, { recursive: true });
  writeFileSync(taPath, JSON.stringify(data, null, 2) + "\n");
  console.log(`wrote messages/ta/${name}.json (en echo — P2 pending)`);
}
