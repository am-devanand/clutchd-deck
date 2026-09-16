import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

// Locale negotiation: Accept-Language + NEXT_LOCALE cookie, then /en or /ta
// segment routing per docs/TAMIL-PLAN.md §1. Root-relative because this
// project has no src/ directory (app/ lives at the repo root).
export default createMiddleware(routing);

export const config = {
  // Run on all paths except API routes, Next internals, and static files.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
