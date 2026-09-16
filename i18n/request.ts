import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

// Loads messages/en/*.json or messages/ta/*.json per request. Tamil catalogs
// echo English until P2 translations land — locale switching is functional
// from day one (docs/TAMIL-PLAN.md §2).
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = routing.locales.includes(requested as (typeof routing.locales)[number])
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // Catalogs nest under their file name (common.*, screens.*, faq.*,
    // legal.*, meta.*) so namespaces never collide across files.
    messages: {
      common: (await import(`../messages/${locale}/common.json`)).default,
      screens: (await import(`../messages/${locale}/screens.json`)).default,
      faq: (await import(`../messages/${locale}/faq.json`)).default,
      legal: (await import(`../messages/${locale}/legal.json`)).default,
      meta: (await import(`../messages/${locale}/meta.json`)).default
    }
  };
});
