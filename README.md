# ClutchD Deck

Standalone Next.js 14 (App Router + TypeScript + ESLint + Tailwind CSS) marketing
deck for ClutchD — eight full-screen hash-routed screens (`#/01`…`#/08`).

## Separation from ClutchD-App

This repo is **fully separate** from `ClutchD-App` (and from `clutchd-landing`):

- No imports from ClutchD-App — the old Stitch exports are **structure reference
  only** (their Barlow Condensed type and `#0B0E13` / `#F8FAFC` / `#ffb689`
  token values are superseded by the brief and must never be used here).
- No Capacitor, auth, or state stores — this is a static marketing deck.
- No committed test suites (agent-executed QA only, evidence under
  `.omo/evidence/` outside this repo).

## Getting started

```bash
npm run dev
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Layout

- `app/page.tsx` — single `/` page hosting the hash deck.
- `app/layout.tsx` — `next/font` slots: Big Shoulders Display (headlines),
  IBM Plex Sans (body/UI), IBM Plex Mono (data-only).
- `public/screens/` — vendored screenshot placeholders (grey boxes until real
  captures are supplied; see the pre-publish swap gate in later todos).

Work plan: `.omo/plans/clutchd-deck.md` (outside this repo).
