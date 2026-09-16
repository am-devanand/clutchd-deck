// Deck content integrity check — rewritten 2026-09-16 to match the current deck.
//
// The deck outgrew the old contract: art moved from grey /public/screens/*
// placeholder boxes to final local /stitch/* images, content fields no longer
// carry isPlaceholder flags, and the eyebrow ban is obsolete (s1/s2/s6/s7
// legitimately render eyebrow fields). What is enforced now:
//
//   1. Registry: exactly 8 screens, slugs 01..08, valid themes; 06 and 08 are
//      the dark screens (documented per-screen theme invariant — screens.ts).
//   2. Art: every image src is a LOCAL /stitch/* path (no remote URLs, per the
//      screens.ts header rule) and the file exists under public/.
//   3. Accessibility: every image object carries an alt string.
//   4. Honesty: TODO(swap) may only live in comments — never inside rendered
//      string literals (verified-facts rule in docs/CLUTCHD-FACTS.md).
//   5. Pendings: at least one TODO(swap) marker stays tracked (s8 store links
//      + dispatch line are knowingly pending).
//   6. No dead href="#" placeholders anywhere in content.
//
// Fails non-zero with a message on any mismatch.
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const screensTs = path.join(root, "content", "screens.ts");
const publicDir = path.join(root, "public");

const fail = (msg) => {
  console.error(`check-placeholders: FAIL — ${msg}`);
  process.exit(1);
};
const ok = (msg) => console.log(`check-placeholders: ok — ${msg}`);

const text = readFileSync(screensTs, "utf8");

// 1. Screen registry: 8 unique slugs 01..08 with valid themes.
const registry = [
  ...text.matchAll(/slug:\s*"(\d{2})",\s*theme:\s*"(light|dark)"/g),
].map((m) => ({ slug: m[1], theme: m[2] }));

if (registry.length !== 8)
  fail(`expected 8 registry entries, found ${registry.length}`);
const slugs = registry.map((r) => r.slug);
if (new Set(slugs).size !== 8) fail(`duplicate slugs in registry: [${slugs.join(", ")}]`);
for (const want of ["01", "02", "03", "04", "05", "06", "07", "08"])
  if (!slugs.includes(want)) fail(`missing screen slug "${want}"`);

const darkSlugs = registry.filter((r) => r.theme === "dark").map((r) => r.slug).sort();
if (darkSlugs.join(",") !== "06,08")
  fail(`dark screens must be exactly 06 and 08 (per screens.ts invariant), found [${darkSlugs.join(", ")}]`);
ok(`8 screens registered; dark set = [${darkSlugs.join(", ")}]`);

// 2. Art: local /stitch/* only, present on disk.
const srcs = [...text.matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1]);
if (srcs.length === 0) fail("no image src fields found in screens.ts");
for (const s of srcs) {
  if (!s.startsWith("/stitch/"))
    fail(`image src "${s}" is not a local /stitch/* path (remote URLs banned by screens.ts header rule)`);
  if (!existsSync(path.join(publicDir, s)))
    fail(`image src "${s}" does not exist under public/`);
}
ok(`${srcs.length} /stitch/* image srcs, all present on disk`);

// 3. Every image object carries an alt string (window: 400 chars after src).
for (const m of [...text.matchAll(/src:\s*"([^"]+)"/g)]) {
  const window = text.slice(m.index, m.index + 400);
  if (!/alt:\s*"/.test(window))
    fail(`image ${m[1]} has no alt within 400 chars of its src`);
}
ok("all images carry alt text");

// 4. TODO(swap) never inside a rendered string literal.
const literals = [...text.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
const offenders = literals.filter((l) => l.includes("TODO(swap)"));
if (offenders.length > 0)
  fail(
    `TODO(swap) found inside rendered string(s) — move it to a comment: "${offenders[0].slice(0, 60)}…"`
  );
ok("TODO(swap) markers confined to comments");

// 5. Known pendings must stay tracked.
const todoCount = (text.match(/TODO\(swap\)/g) || []).length;
if (todoCount < 1)
  fail("no TODO(swap) markers — known pendings (s8 store links, dispatch line) must stay tracked");
ok(`${todoCount} TODO(swap) marker(s) tracked in comments`);

// 6. No dead href="#" placeholders in content.
if (/href\s*=\s*["']#["']/.test(text)) fail('screens.ts contains dead href="#"');
ok('no dead href="#" in content');

console.log("check-placeholders: PASS");
