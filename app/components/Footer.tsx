import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { routing } from "../../i18n/routing";
import type { Locale } from "../../i18n/routing";

// UI 2026-09-16: beige footer wall with ink columns. Copy still 100%
// from messages/[locale]/common.json.
export default async function Footer({
  locale,
}: {
  locale?: string;
}) {
  const t = await getTranslations("common.footer");
  const loc = locale ?? routing.defaultLocale;
  const withLocale = (href: string) =>
    `/${loc}${href === "/" ? "" : href}`;

  const platformLinks = [
    { href: "/features", label: t("platformLinks.features") },
    { href: "/how-it-works", label: t("platformLinks.howItWorks") },
    { href: "/for-you", label: t("platformLinks.forYou") },
    { href: "/app", label: t("platformLinks.app") },
  ];
  const companyLinks = [
    { href: "/impact", label: t("companyLinks.impact") },
    { href: "/roadmap", label: t("companyLinks.roadmap") },
    { href: "/download", label: t("companyLinks.download") },
  ];
  const legalLinks = [
    { href: "/faq", label: t("legalLinks.faq") },
    { href: "/privacy", label: t("legalLinks.privacy") },
    { href: "/terms", label: t("legalLinks.terms") },
  ];

  return (
    <footer className="u-hero-grad relative w-full overflow-hidden text-ink">
      {/* Faint grid texture */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="foot-grid" width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#0f172a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#foot-grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href={withLocale("/")}>
              <Image
                src="/stitch/navbar-logo.png"
                alt="ClutchD"
                width={160}
                height={50}
                className="mb-5 h-10 w-auto rounded-lg bg-white/95 p-1.5 object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {t("blurb")}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {t("liveBadge")}
              </span>
            </div>
          </div>

          {[
            { title: t("platform"), links: platformLinks },
            { title: t("company"), links: companyLinks },
            { title: t("legal"), links: legalLinks },
          ].map(({ title, links }) => (
            <div key={title} className="border-t border-line pt-6 md:border-0 md:pt-0">
              <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-beacon">{title}</h3>
              <span aria-hidden="true" className="mb-4 block h-0.5 w-8 rounded-full bg-beacon" />
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={withLocale(href)} className="text-sm font-medium text-muted transition-colors hover:text-beacon">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} ClutchD. {t("rights")}
          </p>
          <span className="rounded-full border border-[#232DA1]/25 bg-[#232DA1]/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-[#232DA1] backdrop-blur">
            CLUTCH-ALPHA-884 ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}

// Re-exported so route pages can type their locale params from one place.
export type { Locale };
export { routing };
