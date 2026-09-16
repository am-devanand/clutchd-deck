# ClutchD — Verified Product Facts (for deck copy)

_Distilled 2026-09-16 from the product reference docs (`ClutchD-reference.md`, `BACKEND_CONTRACTS.md`).
Rule: deck copy may only claim what appears here or stays flagged `TODO(swap)`. Metrics marked
**UNVERIFIED** are deck inventions — swap or cut before external use._

## Identity
- **Product:** ClutchD — on-demand mechanic platform: roadside dispatch + auto-parts marketplace.
- **Live city:** Coimbatore, Tamil Nadu (coords `11.0283, 76.8961` — verified backend seed).
- **Stack proof-points:** Next.js PWA + Capacitor Android APK; FastAPI + PostgreSQL/PostGIS +
  Redis; JWT with 15-min proactive refresh; WebSocket live tracking (`/ws/tracking/{job_id}`);
  Firebase push (FCM); Stripe + Razorpay payments; Sentry monitoring; offline-first fallbacks.
- **Formats:** Android APK (Capacitor, `com.clutchd.app`) + installable PWA. **No store listings
  yet** — s8 store badges stay non-linking until published.

## Roles & features (grounded — used for s4 pods)
- **Car owners:** SOS button, live map tracking + in-app chat, marketplace with VIN fitment check,
  service history & warranty tracking, subscription plans, referrals, ClutchD virtual card.
- **Mechanics:** job queue (accept/reject), navigation tab, earnings dashboard, online/offline
  availability toggle, KYC verification (admin), job chat, parts store.
- **Garages:** garage dashboard (overview/profile/analytics), team management (add mechanics),
  business profile, shared parts store.
- **Fleets:** fleet dashboard, vehicle registration, fleet bookings, maintenance reminders,
  subscriptions. (Fleet backend is local-first; endpoints proposed, not live.)

## Service lifecycle (grounded — s3 flow)
`searching → accepted → en_route → in_progress → completed → rated/paid` via PostGIS nearby-matching;
real-time status + mechanic location over WebSocket; invoice PDF from backend (HTML receipt fallback).

## Marketplace (grounded — s6)
Products/categories/cart/orders, fitment check per vehicle, search + filters, vendor price
comparison, reviews, checkout (Stripe/Razorpay), order timeline, warranty claims (local-first).

## Claims that are UNVERIFIED (in deck copy — keep flagged or soften)
_2026-09-16 sweep: all invented operational metrics have been removed or reframed as design
targets/capabilities (s2 minis, s3 footers + metrics row, s5, s6 metrics, s7 subs + velocity,
s8 sub + cards, s1 hardcoded stats row). Remaining open items below._

- s8 `callHref: "tel:911"` — stand-in; no real dispatch line published yet (still TODO(swap)).
- s8 CTA (reworked 2026-09-16): primary button + "Open Web App" card link to the Tailscale
  Funnel URL; "Android APK" card is non-linking with a SOON chip until a public APK URL exists.
  Swap `pwaHref` to clutchd.com when live (TODO(swap)).
- "15 min" arrival design target — superseded on s5 by the old site's illustrative
  "~18 min avg response" (imported 2026-09-16 with its explicit "Launch figures pending:
  illustrative" label — see docs/REFERENCE-old-site.md). Old-site figures (120+ mechanics,
  35+ garages, 12k+ records, ~18 min) are legitimate under that label; do not present them
  as measured SLAs elsewhere.
- s1 flavor text ("CARRIER_LOCK 99.4%", "GEO-SYNC 04") — narrative sci-fi chrome, not product
  claims; left as-is intentionally.
- s1 ThreeHero (rendered 2026-09-16): three.js dispatch-core visual is client-only, lazy-loaded
  (not in First Load JS), and suppressed under prefers-reduced-motion. If it ever feels heavy,
  the fallback is the static glows + dot-grid that remain underneath.

## Safe framing if numbers must stay
Use "design target" / "engineered for" framing ("engineered for minutes, not hours") instead of
asserted metrics, or gate behind `TODO(swap)` until backend analytics can source real values.

## Deploy & contact (real)
- Frontend: `https://clutchd.tail14cfb9.ts.net` · API: same host `:8000/api` (`/health`, `/docs`).
- Self-hosted via Tailscale Funnel + Docker (db/redis/api). Neon Postgres production.
- Demo seed accounts exist (`customer@demo.com` etc.) — never publicize credentials on the deck.
