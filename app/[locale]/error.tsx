"use client";

// Locale-scoped error boundary: renders a real retry screen instead of a
// white page when a route throws (the 2026-09-17 stepTargets crash surfaced
// as a blank screen because this file was missing).
export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="rn-section bg-paper text-center">
      <div className="mx-auto max-w-xl">
        <p className="font-data text-xs font-bold tracking-widest text-beacon">
          ERROR
        </p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-ink">
          Something went off-road.
        </h1>
        <p className="mt-3 text-sm font-medium text-muted">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="u-btn-grad mt-8 rounded-2xl px-8 py-3 font-bold text-white"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
