# Tamil Support Plan (தமிழ்) — clutchd-deck

_Plan written 2026-09-16. No code changed — this is the scoping doc._

> **STATUS UPDATE (2026-09-16, P2 shipped):** P0 + P2 are DONE. Discovery that
> changes §3 below: the old site's **source repo**
> (`/home/darkdevil/clutchd-combined/src/lib/translations/ta.js`) contains a
> complete hand-corrected Tamil string map (MT draft + 3 correction rounds,
> 2026-08-17) — the deployed bundle never shipped it, but the source had it.
> P2 imported from it verbatim: nav/footer (`common.json`), FAQ 6 Q&As
> (`faq.json`), meta titles/descriptions (`meta.json`), hero + trust pillars
> (`screens.json` s1/s2). Its own header carries the standing caveat:
> **REVIEW NEEDED — a native Tamil speaker should review tone/register before
> launch.** s3–s8 + legal remain English-echo (P3). Extractor now guards
> `messages/ta/*` — it skips any catalog containing Tamil characters.
> Font: Noto Sans Tamil added to every CSS chain (`--font-tamil`),
> `html[lang="ta"]` gets line-height/copy-fitting relief.
>
> **P3 SHIPPED (2026-09-16):** s3–s8 + legal now Tamil on /ta. All deck
> components (s3–s8) rewired from static `content/screens.ts` imports to
> `useTranslations()`; their hardcoded strings moved into the catalog
> (s3 eyebrow/metrics, s4 headline/roleLabels, s5 srNote, s6 header,
> s7 headline/pilot, s8 apkAria). Vocabulary from the old map verbatim
> where it exists (workflow steps, audiences.*, testimonials.*, stats
> labels); legal translated fresh with the standard
> "Tamil is informational; English version governs" clause (§3 Phase B).
> Terminal chrome stays English per §5. Extractor got a merge step so new
> EN keys flow into TA catalogs without clobbering Tamil values.
> Remaining: P4 native review + visual copy-fitting QA.
> P4 SEO layer shipped 2026-09-16: per-locale canonicals + hreflang (en/ta/x-default)
> via `i18n/seo.ts` on all 12 routes, `app/sitemap.ts` (24 URLs, hreflang alternates),
> `app/robots.txt`, OG locale tags (en_IN/ta_IN), and Tamil keyword pass on meta.json
> ("வாகன பழுது" + கோயம்புத்தூர் in site description; glossary term நிகழ்நேர கண்காணிப்பு
> unified). Remaining: native review + visual copy-fitting QA.

## 0. Key findings (grounded)

1. **The old site never actually shipped Tamil.** Its bundle contains 590 namespaced i18n
   strings (nav, hero, trust, faq, meta…) — all English. The only Tamil text is the
   announcement "தமிழ் இப்போது கிடைக்கிறது: Tamil now available", stored under the key
   `footer.tamilComingSoon`. The EN|தமிழ் toggle was a teaser. **There are no translations to
   import** — but there IS a proven key-namespace model we can borrow:
   `nav.* footer.* hero.* trust.* audiences.* faq.* meta.* …`
2. **Our deck is already centralized** — nearly all rendered copy lives in
   `content/screens.ts` (s1–s8). That is our de-facto string catalog. What lives *outside*
   it: Navbar labels, Footer columns, FAQ page (`app/faq/page.tsx`), legal pages
   (`LegalPage` consumers), page metadata, splash screen, DeckShell chrome
   (progress rail, overview dialog, boot lines).
3. **Coimbatore is in Tamil Nadu** — for a roadside-assistance product, Tamil is not a
   nice-to-have; stranded drivers in distress default to their mother tongue. The reference
   competitor (ResQNow) has no Tamil either, so this is a differentiator.

## 1. Recommended architecture: `next-intl` (App Router)

| Option | Verdict |
|---|---|
| **`next-intl` with `/[locale]` segments** | ✅ Recommended. Mature App Router support, SSR-friendly (SEO-critical for us), ICU messages, middleware for locale negotiation. |
| Client-only context dictionary | ❌ No SSR metadata translation, hydration flicker, worse SEO. |
| Hand-rolled `?lang=` query toggle | ❌ Fragile, unshareable URLs, no SEO. |

### Proposed routing
```
/            → English (default, redirects to /en or stays via middleware)
/en/...      → English pages
/ta/...      → Tamil pages
```
`middleware.ts` negotiates via `Accept-Language` + saved cookie; `/features` → `/en/features`
canonicalized, hreflang tags pair `en`/`ta`/`x-default`.

> Alternative lighter phase-1: cookie-based locale without URL segments. Faster to ship,
> but Tamil pages won't be indexable. Given "Google koodam road venum" searches happen in
> Tamil, URL-segment i18n is the SEO-correct investment. Decide at kickoff.

## 2. String-catalog design

Split the monolith into per-domain catalogs (borrowing the old site's namespaces):

```
messages/
  en/
    common.json      # nav, footer, cta labels, deck chrome (rail, boot, overview)
    screens.json     # s1–s8 content (from content/screens.ts)
    faq.json
    legal.json       # privacy, terms section text
    meta.json        # per-page titles/descriptions
  ta/
    …same shape…
```

- `content/screens.ts` becomes a thin typed accessor: `t("screens.s2.sub")` — or the deck
  components take `useTranslations()` directly. Keep the `S4Pod`/`S6Phone` interfaces as the
  array shapes inside JSON.
- **Keep `content/screens.ts` as the single editing surface** during migration: a small
  script can generate `messages/en/*.json` from it so English never drifts.

## 3. Translation workflow (honest copy rule applies in Tamil too)

1. **Phase A — seed Tamil via a professional pass on the ~250-string core** (nav, footer,
   hero, s2, s3, faq, meta). NOT machine-translation-only: roadside/automotive terms need
   consistent glossary (see §4).
2. **Phase B — expand to s4–s8, legal.** Legal (privacy/terms) translation should be
   reviewed by a Tamil-speaking legal-adjacent reader; add a "Tamil translation is
   informational; English version governs" clause — standard Indian practice.
3. **Illustrative-figure labels** ("Launch figures pending: illustrative") must be
   translated with equal prominence — trust copy is the point of Tamil support.
4. **Review loop:** native-speaker review pass; both decks ship with the same
   `check-placeholders` honesty rules (extend it to scan both locales).

## 4. Glossary (draft — needs native review)

| English | Tamil (draft) |
|---|---|
| Roadside assistance | சாலையோர உதவி |
| Verified mechanic | சரிபார்க்கப்பட்ட மெக்கானிக் |
| Estimate | மதிப்பீடு |
| Live tracking | நேரடி கண்காணிப்பு |
| Service history | சேவை வரலாறு |
| Parts marketplace | உதிரிபாகச் சந்தை |
| Breakdown | வாகனம் சீர்கெட்டது / பழுது |
| SOS / Emergency | அவசரம் |
| Garage | வொர்க்ஷாப் / கேரேஜ் |
| Fleet | வாகனக் கூட்டம் |
| Now live in Coimbatore | கோயம்புத்தூரில் இப்போது இயங்குகிறது |

Brand stays "ClutchD" (Latin script) everywhere; tagline translates.

## 5. Typography & UI concerns (non-trivial — budget for it)

- **Font:** Inter has no Tamil coverage. Add **Noto Sans Tamil** (Google Fonts, same
  `next/font` pattern we already use) with `font-family` fallback chain:
  `Inter, "Noto Sans Tamil", sans-serif`. Tamil headings run ~15–20% taller — check the
  deck's fixed-viewport screens (`h-full`, `overflow-hidden`) for clipping, especially the
  giant s5 number and s1 headline.
- **`lang` attribute:** `<html lang="ta">` on Tamil routes (Next handles via `[locale]`
  layout). Also affects screen readers + font selection.
- **Line-length:** Tamil strings run 10–25% longer than English; the deck's tight grids
  (s2 minis, s4 pods, s8 cards) need a copy-fitting pass — allow `text-balance` + min-height.
- **Deck chrome:** the mono "SYS_DEPLOY // REV_4.2" telemetry-flavored strings are a design
  language, not just copy. Decide: keep chrome English-only (tech aesthetics) while content
  translates, or translate chrome too. **Recommendation:** keep terminal chrome English,
  translate all user-facing content — cheapest, preserves the aesthetic, matches how the
  old site treated it.

## 6. Phased delivery

| Phase | Scope | Est. effort |
|---|---|---|
| **P0 — Foundations** | next-intl + middleware + `/en` `/ta` segments + Noto Sans Tamil + catalog extraction script from `screens.ts` | 1–2 sessions |
| **P1 — EN parity** | All existing copy into `messages/en/*`; site unchanged visually; CI check that en catalog ⊇ screens.ts | 1 session |
| **P2 — Tamil core** | nav/footer/s2/s3/faq/meta translated + reviewed; language toggle (EN|தமிழ்) live in Navbar | 1–2 sessions incl. review |
| **P3 — Tamil full** | s4–s8 + legal; copy-fitting pass on fixed-viewport screens; hreflang + sitemap per locale | 2 sessions |
| **P4 — Polish** | Native review round, `check-placeholders` per-locale, OG/locale meta, Tamil metadata for SEO keywords ("கோயம்புத்தூர் வாகன பழுது") | 1 session |

## 7. Risks / open decisions

1. **URL strategy** (segments vs cookie) — decide before P0; segments recommended for SEO.
2. **Translation source** — who does the Tamil? (professional translator vs founder review
   vs MT+review). Budget owner: you.
3. **Deck vs site scope** — the 8-screen deck has heavy stylized copy; if deck Tamil is too
   costly, scope Tamil to the informational pages first (faq, privacy, terms, for-you) and
   defer deck screens to P3.
4. **Fonts on fixed screens** — needs a visual QA round per locale; budget it.
5. **i18n of dynamic data later** — when the deck wires to the real backend (job statuses
   like "en_route"), those statuses need Tamil too; the catalog shape already anticipates it.

## 8. First concrete step when green-lit

Run P0: `npm install next-intl`, add `middleware.ts` + `messages/` scaffold + extraction
script `scripts/extract-strings.mjs` (screens.ts → messages/en/*.json), verify with
`npm run verify` + all routes 200 under both `/en` and `/ta` (Tamil initially echoing
English), commit. Nothing user-visible changes until P2.
