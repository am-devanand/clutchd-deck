import Link from "next/link";

// Shared layout for imported legal pages (privacy, terms). Server component —
// content is static and SEO-renderable. Sections: { h, body: string[] }.
//
// Layout mirrors the ResQNow PrivacyPolicy/TermsOfService rhythm — centered
// header, card container, numbered sections with separators, centered
// footer — with ClutchD beacon tokens. All strings arrive via props from
// messages/[locale]/legal.json and are rendered byte-identical.
// P3 i18n: backLink/updatedLabel/copyright come from the legal.* catalog so
// /ta renders Tamil chrome around Tamil body text.
export default function LegalPage({
  title,
  updated,
  updatedLabel,
  intro,
  backLink,
  copyright,
  sections,
}: {
  title: string;
  updated: string;
  updatedLabel: string;
  intro: string;
  backLink: string;
  copyright: string;
  sections: { h: string; body: string[] }[];
}) {
  return (
    <div className="w-full bg-paper py-12">
      <div className="mx-auto w-full max-w-4xl px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-beacon"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          {backLink}
        </Link>

        <div className="mb-8 text-center">
          <h1 className="mb-2 text-balance text-3xl font-bold tracking-tight text-ink md:text-4xl">
            {title}
          </h1>
          <p className="text-sm font-medium text-muted">
            {updatedLabel}: {updated}
          </p>
        </div>

        <div className="rn-card mb-8 overflow-hidden">
          <div className="space-y-6 p-6 md:p-8">
            <p className="text-sm font-medium leading-relaxed text-muted">{intro}</p>
            {sections.map((s) => (
              <div key={s.h}>
                <hr className="mb-6 border-0 border-t border-line" aria-hidden="true" />
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-beacon">{s.h}</h2>
                  {s.body.map((p, i) => (
                    <p key={i} className="mb-3 text-sm leading-relaxed text-slate-600 last:mb-0">
                      {p}
                    </p>
                  ))}
                </section>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted">
          © {new Date().getFullYear()} {copyright}
        </p>
      </div>
    </div>
  );
}
