"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TOTAL, hashFor, parseHash } from "./deck-data";
import S1 from "./s1-cold-open";
import S2 from "./s2-reveal";
import S3 from "./s3-steps";
import S4 from "./s4-roles";
import S5 from "./s5-proof";
import S6 from "./s6-guide";
import S7 from "./s7-roadmap";
import S8 from "./s8-final";

/*
 * Deck shell (stitch-2 precision, light system + Arena Deck_OS chrome).
 * Chrome + hash nav + keyboard + swipe + sweep + deck:* screen events.
 * Screens-agnostic: copy + order come from content/screens.ts (single
 * source); bodies below render one component per screen.
 *
 * Contract (from .omo/plans/clutchd-deck.md, restyled to light):
 * hash #/01..#/08, arrows/Home/End, dots, advance+prev chevrons
 * (next hidden on 8), swipe ignores [data-innerscroll], h1 focus,
 * sweep + reduced-motion crossfade, page-level no-scroll on documentElement.
 * Screen bodies dispatch `deck:advance` ({from,to} or {targetScreen}) and
 * `deck:next`; the shell owns navigation so bodies never touch the hash.
 *
 * Deck_OS polish (ported from arena index.html — shell only, screen
 * content untouched): top progress rule, index rail, brand button, SEC +
 * hint statusbar, overview index (grid_view / O / Esc / scrim), boot
 * splash (DECK_OS v2.4), boundary-aware wheel, F fullscreen, END toast.
 */

const SWIPE_PX = 48;
const WHEEL_COOLDOWN_MS = 700;
const TOAST_MS = 1600;
const BOOT_HARD_CAP_MS = 6000;
const BOOT_MIN_MS = 700;
const BOOT_STEP_MS = 220;

// Arena sequence meta (shell labels only — screen bodies own their copy).
const SEQ_META = [
  { key: "COLD_OPEN", title: "Broken Down. 2 A.M." },
  { key: "THE_REVEAL", title: "That\u2019s What ClutchD Is For." },
  { key: "HOW_IT_WORKS", title: "The Response Sequence." },
  { key: "FEATURES", title: "Built For Everyone At The Job." },
  { key: "PROOF", title: "Field-Verified Numbers." },
  { key: "THE_GUIDE", title: "See It Before You Need It." },
  { key: "ROADMAP", title: "Where We\u2019re Headed." },
  { key: "FINAL_CTA", title: "Next Breakdown, Covered." },
];

const BOOT_LINES = [
  { text: "MOUNTING 8 SEQUENCES ......... ", ok: "OK" },
  { text: "TAILWIND RUNTIME PER SCREEN .. ", ok: "OK" },
  { text: "TELEMETRY LINK GEO-SYNC 04 ... ", ok: "LOCKED" },
];

const NAV_LINKS = [
  { n: 3, label: "How It Works" },
  { n: 4, label: "Services" },
  { n: 5, label: "Proof" },
  { n: 6, label: "Guide" },
  { n: 7, label: "Roadmap" },
  { n: 8, label: "Contact" },
];

function pad(n: number): string {
  return (n < 10 ? "0" : "") + n;
}

// One body component per screen, in #/01..#/08 order.

function focusHeading(n: number): void {
  document.getElementById(`screen-heading-${n}`)?.focus({ preventScroll: true });
}

function toggleFull(): void {
  try {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void document.documentElement.requestFullscreen();
  } catch {
    /* fullscreen unavailable — stay in place */
  }
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {direction === "right" ? (
        <path d="m9 6 6 6-6 6" />
      ) : (
        <path d="m15 6-6 6 6 6" />
      )}
    </svg>
  );
}

function GridIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function Deck() {
  const [index, setIndex] = useState(1);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [toastOn, setToastOn] = useState(false);
  const [bootDone, setBootDone] = useState(false);
  const [bootFull, setBootFull] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [visited, setVisited] = useState<ReadonlySet<number>>(
    () => new Set([1]),
  );
  const touchStart = useRef<{ x: number; y: number; inner: boolean } | null>(
    null,
  );
  const coolUntil = useRef(0);
  const toastTimer = useRef<number | undefined>(undefined);
  const bootedAt = useRef(0);
  if (bootedAt.current === 0) bootedAt.current = Date.now();

  // Initial deep-link + Back/Forward sync: hashchange + popstate, plain
  // location.hash only — no Next.js navigation interception.
  useEffect(() => {
    const start = parseHash();
    if (start === null) {
      window.history.replaceState(null, "", hashFor(1));
    } else if (start !== 1) {
      setIndex(start);
    }
    focusHeading(parseHash() ?? 1);

    const sync = () => {
      const n = parseHash();
      if (n === null) {
        window.history.replaceState(null, "", hashFor(1));
        setIndex(1);
        focusHeading(1);
      } else {
        setIndex((prev) => (prev === n ? prev : n));
        focusHeading(n);
      }
    };
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const go = useCallback((n: number) => {
    const clamped = Math.min(TOTAL, Math.max(1, n));
    if (window.location.hash !== hashFor(clamped)) {
      window.location.hash = hashFor(clamped);
    }
  }, []);

  const indexRef = useRef(index);
  indexRef.current = index;

  // Rail visited trail: every sequence ever shown (arena marks on load).
  useEffect(() => {
    setVisited((prev) =>
      prev.has(index) ? prev : new Set(prev).add(index),
    );
  }, [index]);

  const showToast = useCallback(() => {
    setToastOn(true);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastOn(false), TOAST_MS);
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  // Forward navigation: at #/08 the sequence ends — toast + deck index
  // (arena `next()`), instead of a clamped no-op.
  const next = useCallback(() => {
    if (indexRef.current >= TOTAL) {
      showToast();
      setOverviewOpen(true);
      return;
    }
    go(indexRef.current + 1);
  }, [go, showToast]);

  const prev = useCallback(() => {
    if (indexRef.current > 1) go(indexRef.current - 1);
  }, [go]);

  const skipBoot = useCallback(() => {
    setBootFull(true);
    setBootDone(true);
  }, []);

  // Screen-body advance events: `deck:advance` ({from,to} | {targetScreen})
  // and `deck:next`. The shell owns all navigation.
  useEffect(() => {
    const onAdvance = (e: Event) => {
      const d = (e as CustomEvent).detail as
        | { from?: number; to?: number; targetScreen?: number }
        | undefined;
      if (d?.targetScreen) go(d.targetScreen);
      else if (typeof d?.to === "number") go(d.to);
      else next();
    };
    const onNext = () => next();
    window.addEventListener("deck:advance", onAdvance as EventListener);
    window.addEventListener("deck:next", onNext);
    return () => {
      window.removeEventListener("deck:advance", onAdvance as EventListener);
      window.removeEventListener("deck:next", onNext);
    };
  }, [go, next]);

  // Uniform keyboard nav. ArrowRight/End are inert on #/08 (END_OF_SEQUENCE
  // toast + overview instead); Home/rail always live. O toggles the deck
  // index, F toggles fullscreen. Any key skips the boot splash.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!bootDone) {
        skipBoot();
        e.preventDefault();
        return;
      }
      const t = e.target as HTMLElement | null;
      if (t && /^(input|textarea|select)$/i.test(t.tagName || "")) return;
      const k = e.key;
      let handled = true;
      switch (k) {
        case "ArrowRight":
        case "PageDown":
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          prev();
          break;
        case "Home":
          go(1);
          break;
        case "End":
          go(TOTAL);
          break;
        case "o":
        case "O":
          setOverviewOpen((v) => !v);
          break;
        case "Escape":
          setOverviewOpen(false);
          break;
        case "f":
        case "F":
          toggleFull();
          break;
        default:
          if (/^[1-9]$/.test(k) && Number(k) <= TOTAL) go(Number(k));
          else handled = false;
      }
      if (handled) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, next, prev, bootDone, skipBoot]);

  // Wheel: boundary-aware like the arena host — only navigate when the
  // page itself is at the scroll bound in the wheel direction (the deck
  // never scrolls, so inner regions keep their own scroll).
  useEffect(() => {
    const atBounds = (dirDown: boolean): boolean => {
      try {
        const de = document.scrollingElement ?? document.documentElement;
        if (de.scrollHeight <= de.clientHeight + 4) return true;
        return dirDown
          ? de.scrollTop + de.clientHeight >= de.scrollHeight - 4
          : de.scrollTop <= 4;
      } catch {
        return true;
      }
    };
    const onWheel = (e: WheelEvent) => {
      const now = Date.now();
      if (now < coolUntil.current) {
        e.preventDefault();
        return;
      }
      if (Math.abs(e.deltaY) < 10) return;
      const down = e.deltaY > 0;
      if (!atBounds(down)) return;
      coolUntil.current = now + WHEEL_COOLDOWN_MS;
      if (down) next();
      else prev();
      e.preventDefault();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [next, prev]);

  // Boot sequence: 3 lines at 220ms, bar 0 -> 92%, then 100% + fade once
  // the minimum dwell passes. Click / any key skips; hard cap at 6s.
  useEffect(() => {
    if (bootDone) return;
    const timer = window.setInterval(() => {
      setBootStep((s) => {
        if (s + 1 >= BOOT_LINES.length) window.clearInterval(timer);
        return Math.min(s + 1, BOOT_LINES.length);
      });
    }, BOOT_STEP_MS);
    const cap = window.setTimeout(skipBoot, BOOT_HARD_CAP_MS);
    return () => {
      window.clearInterval(timer);
      window.clearTimeout(cap);
    };
  }, [bootDone, skipBoot]);

  useEffect(() => {
    if (bootDone || bootStep < BOOT_LINES.length) return;
    const wait = Math.max(0, BOOT_MIN_MS - (Date.now() - bootedAt.current));
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const full = window.setTimeout(() => {
      setBootFull(true);
      const done = window.setTimeout(skipBoot, reduced ? 0 : 260);
      void done;
    }, wait);
    return () => window.clearTimeout(full);
  }, [bootStep, bootDone, skipBoot]);

  // Overview focus: land on the current card when the index opens.
  useEffect(() => {
    if (!overviewOpen) return;
    const el =
      document.querySelector<HTMLElement>(".deckos-ov-card.current") ??
      document.querySelector<HTMLElement>(".deckos-ov-card");
    el?.focus({ preventScroll: true });
  }, [overviewOpen]);

  // Deck swipe: horizontal ~48px. Gestures starting inside [data-innerscroll]
  // are ignored (rail/keyboard/advance-button are the fallback there);
  // vertical swipes are always ignored.
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    const inner =
      (e.target as Element | null)?.closest?.("[data-innerscroll]") != null;
    touchStart.current = { x: t.clientX, y: t.clientY, inner };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const s = touchStart.current;
    touchStart.current = null;
    if (!s || s.inner) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - s.x;
    const dy = t.clientY - s.y;
    if (Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  };

  const Body = [S1, S2, S3, S4, S5, S6, S7, S8][index - 1];
  const meta = SEQ_META[index - 1];

  return (
    <main
      className="deck-root relative bg-paper text-ink"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Screen body. Key remounts .deck-sweep. */}
      <div key={index} className="deck-sweep absolute inset-0">
        <Body />
      </div>

      {/* Top progress rule: 3px rule + blue bar at n/8 width. */}
      <div aria-hidden="true" className="deckos-topbar">
        <div
          className="deckos-progress"
          style={{ width: `${(index / TOTAL) * 100}%` }}
        />
      </div>

      <header className="absolute top-[3px] left-0 right-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12">
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="ClutchD home"
            className="flex items-center"
          >
            <Image
              src="/stitch/navbar-logo.png"
              alt="ClutchD"
              width={180}
              height={60}
              priority
              className="h-10 w-auto object-contain"
            />
          </button>
          <nav
            aria-label="Deck sections"
            className="hidden items-center gap-7 md:flex text-sm font-medium text-slate-600"
          >
            {NAV_LINKS.map((l) => (
              <button
                key={l.n}
                type="button"
                onClick={() => go(l.n)}
                aria-current={index === l.n ? "true" : undefined}
                className={`transition-colors hover:text-[#1A5CFF] ${
                  index === l.n ? "text-[#1A5CFF]" : ""
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => go(8)}
            className="rounded-full bg-[image:var(--gradient-primary)] px-5 py-2 text-sm font-bold text-white shadow-[var(--shadow-elegant)] transition-all hover:opacity-90"
          >
            Get the App
          </button>
        </div>
      </header>

      {/* Right index rail. Current = blue + glow, visited = slate. */}
      <nav aria-label="Deck index rail" className="deckos-rail">
        {SEQ_META.map((s, i) => {
          const n = i + 1;
          const current = n === index;
          return (
            <button
              key={s.key}
              type="button"
              title={`Screen ${pad(n)} \u2014 ${s.key}`}
              aria-label={`Go to screen ${n}`}
              aria-current={current ? "true" : undefined}
              onClick={() => go(n)}
              className={`deckos-rail-item${current ? " active" : ""}${!current && visited.has(n) ? " visited" : ""}`}
            >
              <span className="deckos-rail-num">{pad(n)}</span>
              <span className="deckos-rail-tick" />
            </button>
          );
        })}
      </nav>

      {/* Bottom-left status: SEC chip + hint chip. */}
      <div className="deckos-statusbar">
        <span className="deckos-chip deckos-sec">
          <span className={`deckos-dot${index === TOTAL ? " amber" : ""}`} />
          <b>SEC_{pad(index)}</b>&nbsp;// {meta.key}
        </span>
        <span className="deckos-chip deckos-hint">
          {"\u2190/\u2192 NAV \u00B7 O INDEX \u00B7 F FULLSCREEN"}
        </span>
      </div>

      {/* Prev/next chevron controls + deck index, bottom-right. Next hidden
          on screen 8 (sequence ends); prev + rail + Home remain the way back. */}
      <div className="absolute bottom-8 right-6 z-40 flex gap-3">
        <button
          type="button"
          aria-label="Open deck index"
          title="Deck index (O)"
          onClick={() => setOverviewOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-[var(--shadow-card)]"
        >
          <GridIcon />
        </button>
        {index > 1 && (
          <button
            type="button"
            aria-label="Previous screen"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border transition-colors border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-[var(--shadow-card)]"
          >
            <Chevron direction="left" />
          </button>
        )}
        {index < TOTAL && (
          <button
            type="button"
            aria-label="Next screen"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-white shadow-[var(--shadow-elegant)] transition-all hover:scale-105 hover:opacity-90"
          >
            <Chevron direction="right" />
          </button>
        )}
      </div>

      {/* END_OF_SEQUENCE toast. */}
      <div role="status" className={`deckos-toast${toastOn ? " on" : ""}`}>
        {"END_OF_SEQUENCE // "}<b>DECK_INDEX</b>
      </div>

      {/* Overview (deck index) dialog: scrim click / Esc / O closes. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Deck index"
        className={`deckos-overview${overviewOpen ? " on" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOverviewOpen(false);
        }}
      >
        <div className="deckos-ov-panel">
          <div className="deckos-ov-head">
            <div>
              <h2>Deck_Index</h2>
              <div className="deckos-ov-sub">
                CLUTCHD // PRECISION ROADSIDE {"\u00B7"} 8 SEQUENCES {"\u00B7"}{" "}
                LIGHT SERIES
              </div>
            </div>
            <button
              type="button"
              className="deckos-ov-close"
              title="Close (Esc)"
              aria-label="Close deck index"
              onClick={() => setOverviewOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="deckos-ov-grid">
            {SEQ_META.map((s, i) => {
              const n = i + 1;
              return (
                <button
                  key={s.key}
                  type="button"
                  className={`deckos-ov-card${n === index ? " current" : ""}`}
                  onClick={() => {
                    go(n);
                    setOverviewOpen(false);
                  }}
                >
                  <span className="deckos-ov-thumb">
                    <Image
                      loading="lazy"
                      src={`/thumbs/${pad(n)}.png`}
                      alt={`Screen ${pad(n)} preview`}
                      width={640}
                      height={400}
                    />
                    <span className="deckos-ov-idx">SEC_{pad(n)}</span>
                  </span>
                  <span className="deckos-ov-body">
                    <span className="deckos-ov-key">{s.key}</span>
                    <span className="deckos-ov-title">{s.title}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Boot splash: DECK_OS v2.4. Click / any key skips. */}
      {!bootDone && (
        <div className="deckos-boot" onClick={skipBoot}>
          <div className="deckos-boot-inner">
            <div className="deckos-boot-logo">
              Clutch<span>D</span>
            </div>
            <div className="deckos-boot-sub">
              DECK_OS v2.4 // PRECISION ROADSIDE
            </div>
            <div className="deckos-boot-bar">
              <div
                className="deckos-boot-fill"
                style={{
                  width: bootFull
                    ? "100%"
                    : `${(bootStep / BOOT_LINES.length) * 92}%`,
                }}
              />
            </div>
            <div className="deckos-boot-lines">
              {BOOT_LINES.slice(0, bootStep).map((l) => (
                <div key={l.text}>
                  {l.text}
                  <span className="ok">{l.ok}</span>
                </div>
              ))}
            </div>
            <div className="deckos-boot-skip">
              CLICK OR PRESS ANY KEY TO SKIP
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
