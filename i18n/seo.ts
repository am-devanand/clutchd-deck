import type { Metadata } from "next";

// P4 i18n SEO (docs/TAMIL-PLAN.md): canonical URLs + hreflang alternates for
// every locale variant of a page. Canonical home is https://clutchd.in (live
// since 2026-09-18); NEXT_PUBLIC_SITE_URL still overrides per environment.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clutchd.in";

/** All supported locales — keep in sync with i18n/routing.ts. */
export const LOCALES = ["en", "ta"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/**
 * Build Metadata for a page in every locale, wired with:
 *  - canonical URL for the rendered locale variant
 *  - hreflang alternates: /en, /ta, and x-default (English)
 *
 * `meta` comes from messages/<locale>/meta.json (title + description).
 * Used as: return pageMeta({ locale, path: "/features", meta: { title, description } })
 */
export function pageMeta({
  locale,
  path,
  meta,
}: {
  locale: string;
  /** Route path with no locale prefix, "" for home (e.g. "", "/features"). */
  path: string;
  meta: { title: string; description: string };
}): Metadata {
  const clean = path.replace(/\/$/, "");
  const url = (l: string) => `${SITE_URL}/${l}${clean === "" ? "" : clean}`;
  const languages = Object.fromEntries([
    ...LOCALES.map((l) => [l, url(l)]),
    ["x-default", url(DEFAULT_LOCALE)],
  ]);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url(locale),
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: url(locale),
      siteName: "ClutchD",
      locale: locale === "ta" ? "ta_IN" : "en_IN",
      type: "website",
      // Share-card image (2026-09-18 audit gap: WhatsApp/X showed no preview).
      // 1024x558 ≈ the 1.91:1 OG ideal, so crops stay minimal.
      images: [
        {
          url: `${SITE_URL}/stitch/logo.png`,
          width: 1024,
          height: 558,
          alt: "ClutchD — verified mechanics, 24/7 roadside assistance",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}/stitch/logo.png`],
    },
  };
}
