/*
 * Deck shell adapter (Todo 3+). Single source of truth is content/screens.ts —
 * no copy lives here. Keeps route-line variants + hash helpers; TOTAL derives
 * from the content array so shell and content can never drift.
 */
import { screens } from "../../content/screens";

export const TOTAL = screens.length;

// Route-line shape per screen: subtle left/width shifts along the bottom edge.
export const ROUTE_VARIANTS = [
  { left: "4%", width: "30%" },
  { left: "12%", width: "44%" },
  { left: "8%", width: "56%" },
  { left: "20%", width: "60%" },
  { left: "30%", width: "40%" },
  { left: "10%", width: "72%" },
  { left: "16%", width: "52%" },
  { left: "34%", width: "32%" },
];

export function hashFor(n: number): string {
  return `#/${n}`;
}

/** Parse `#/1`..`#/8` (arena canonical); also accept legacy `#/01`..`#/08`. */
export function parseHash(): number | null {
  const m = window.location.hash.match(/^#\/(\d{1,2})$/);
  if (!m) return null;
  const n = Number(m[1]);
  return n >= 1 && n <= TOTAL ? n : null;
}
