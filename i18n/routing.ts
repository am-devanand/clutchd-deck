import {defineRouting} from 'next-intl/routing';

// P0 scaffold (docs/TAMIL-PLAN.md §1): /en and /ta segments, English default.
// `localePrefix: 'always'` serves every locale at its literal URL (/en, /ta)
// — no invisible rewrites, which Next 14.2's static serving + middleware
// rewrite combo 404s (verified empirically). `/` redirects to `/en`.
export const routing = defineRouting({
  locales: ['en', 'ta'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export type Locale = (typeof routing.locales)[number];
