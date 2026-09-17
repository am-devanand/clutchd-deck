import { notFound } from "next/navigation";

// Catch-all inside [locale]: any unknown path under /en/* or /ta/* lands here
// and triggers the localized not-found boundary (app/[locale]/not-found.tsx),
// rendered inside the locale layout — so the navbar, footer and translated
// copy all apply. Without it, unknown paths bypass [locale] entirely and fall
// back to Next's default 404 (2026-09-17).
export default function LocaleCatchAll() {
  notFound();
}
