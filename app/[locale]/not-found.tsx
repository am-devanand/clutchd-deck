import { getTranslations } from "next-intl/server";
import Link from "next/link";

// Required error boundary: without this file next-intl's dev runtime shows
// "missing required error components, refreshing..." (2026-09-17).
// Path-preserving reset: unknown URLs land back on a locale root.
export default async function LocaleNotFound() {
  const t = await getTranslations("common");
  return (
    <section className="rn-section bg-paper text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-data text-xs font-bold tracking-widest text-beacon">
          404
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-ink">
          {t("notFound.title")}
        </h1>
        <p className="mt-3 text-lg font-medium text-muted">
          {t("notFound.body")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="u-btn-grad rounded-2xl px-8 py-3 font-bold text-white"
          >
            {t("notFound.home")}
          </Link>
          <Link
            href="/faq"
            className="rounded-2xl border-2 border-beacon/30 bg-white px-8 py-3 font-bold text-beacon transition-colors hover:border-beacon hover:bg-beacon hover:text-white"
          >
            {t("notFound.faq")}
          </Link>
        </div>
      </div>
    </section>
  );
}
