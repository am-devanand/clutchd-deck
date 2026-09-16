import type { MetadataRoute } from "next";
import { LOCALES, DEFAULT_LOCALE, SITE_URL } from "../i18n/seo";

// P4 i18n SEO (docs/TAMIL-PLAN.md): one entry per route per locale, with
// hreflang alternates so search engines pair the EN/TA variants.
// NOTE: /classic and /app are the deck variants — still indexed, still paired.

const PATHS = [
  "",
  "/features",
  "/how-it-works",
  "/for-you",
  "/impact",
  "/app",
  "/roadmap",
  "/download",
  "/faq",
  "/privacy",
  "/terms",
  "/classic",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries([
          ...LOCALES.map((l) => [l, `${SITE_URL}/${l}${path}`]),
          ["x-default", `${SITE_URL}/${DEFAULT_LOCALE}${path}`],
        ]),
      },
    })),
  );
}
