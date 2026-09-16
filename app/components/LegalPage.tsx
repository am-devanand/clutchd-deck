import Link from "next/link";

// Shared layout for imported legal pages (privacy, terms). Server component —
// content is static and SEO-renderable. Sections: { h, body: string[] }.
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { h: string; body: string[] }[];
}) {
  return (
    <div className="flex w-full justify-center bg-white px-6 pb-20 pt-14 md:px-12">
      <div className="w-full max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-blue-600"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to ClutchD
        </Link>

        <h1 className="mb-2 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">{title}</h1>
        <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-400">
          Last updated: {updated}
        </p>
        <p className="mb-10 text-sm text-slate-500">{intro}</p>

        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.h}>
              <h2 className="mb-3 text-lg font-bold text-slate-900">{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mb-3 text-sm leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} ClutchD — connected automotive care, Coimbatore.
        </p>
      </div>
    </div>
  );
}
