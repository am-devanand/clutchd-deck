// Eq check for Todo 4 placeholders (owned by content track).
// Rule: isPlaceholder===true iff the screen's image src is a
// /public/screens/* grey placeholder box (served at /screens/*).
// Exception: a screen may be isPlaceholder:true with NO image when its
// placeholder content is data-only (s05 stat pending verification).
// Fails non-zero with a message on any mismatch.
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const screensTs = path.join(root, "content", "screens.ts");
const screensDir = path.join(root, "public", "screens");

const fail = (msg) => {
  console.error(`check-placeholders: FAIL — ${msg}`);
  process.exit(1);
};
const ok = (msg) => console.log(`check-placeholders: ok — ${msg}`);

const text = readFileSync(screensTs, "utf8");

// No eyebrow field allowed on Screens.
if (/eyebrow/i.test(text)) fail("screens.ts contains a forbidden eyebrow field");

// No dead href="#" links allowed.
if (/href\s*=\s*["']#["']/.test(text)) fail('screens.ts contains dead href="#"');

const todoCount = (text.match(/TODO\(swap\)/g) || []).length;
if (todoCount < 8)
  fail(`only ${todoCount} TODO(swap) markers, need >= 8`);
ok(`${todoCount} TODO(swap) markers`);

// Split into per-screen chunks by slug.
const slugs = [...text.matchAll(/slug:\s*"(\d{2})"/g)].map((m) => m[1]);
if (slugs.length !== 8 || new Set(slugs).size !== 8)
  fail(`expected 8 unique screens, found [${slugs.join(", ")}]`);
for (const want of ["01","02","03","04","05","06","07","08"])
  if (!slugs.includes(want)) fail(`missing screen slug "${want}"`);

const chunks = text.split(/(?=slug:\s*"\d{2}")/);
const isGreyBox = (abs) => {
  if (!existsSync(abs)) return false;
  const svg = readFileSync(abs, "utf8");
  return svg.includes("#9aa0a6");
};

for (const chunk of chunks) {
  const slugM = chunk.match(/slug:\s*"(\d{2})"/);
  if (!slugM) continue;
  const slug = slugM[1];
  const phM = chunk.match(/isPlaceholder:\s*(true|false)/);
  if (!phM) fail(`screen ${slug}: missing isPlaceholder`);
  const isPlaceholder = phM[1] === "true";

  const srcs = [...chunk.matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1]);
  const placeholderSrcs = srcs.filter(
    (s) => s.startsWith("/screens/") || s.startsWith("/public/screens/")
  );
  // Non-placeholder (final-art) srcs must never point at /public/screens.
  // Today every image src is a grey box, so any other src would be suspect.
  for (const s of srcs) {
    if (!s.startsWith("/screens/") && !s.startsWith("/public/screens/"))
      fail(`screen ${slug}: image src "${s}" is not a /public/screens/* box`);
  }
  // Every referenced box must exist on disk and be a grey box.
  for (const s of placeholderSrcs) {
    const file = s.replace(/^\/public/, "").replace(/^\/screens\//, "");
    const abs = path.join(screensDir, file);
    if (!existsSync(abs)) fail(`screen ${slug}: missing file ${s}`);
    if (!isGreyBox(abs)) fail(`screen ${slug}: ${s} is not a grey box`);
  }

  const hasPlaceholderImage = placeholderSrcs.length > 0;
  // Iff for image-backed screens: image box <=> placeholder flag.
  if (hasPlaceholderImage && !isPlaceholder)
    fail(`screen ${slug}: grey-box image but isPlaceholder===false`);
  if (!hasPlaceholderImage && !isPlaceholder) {
    ok(`screen ${slug}: final copy, no placeholder image`);
    continue;
  }
  if (!hasPlaceholderImage && isPlaceholder) {
    // Data-only placeholder (e.g. s05 stat) — must carry a TODO(swap).
    if (!/TODO\(swap\)/.test(chunk))
      fail(`screen ${slug}: isPlaceholder without image or TODO(swap)`);
    ok(`screen ${slug}: data-only placeholder (no image)`);
    continue;
  }
  ok(`screen ${slug}: placeholder image box matches flag`);
}

// Disk: at least 9 grey boxes (s1, s2, s4, s6 x5, s8).
const files = readdirSync(screensDir).filter((f) => f.endsWith(".svg"));
if (files.length < 9)
  fail(`only ${files.length} SVGs in public/screens, need >= 9`);
for (const f of files) {
  if (!isGreyBox(path.join(screensDir, f))) fail(`${f} is not a grey box`);
}
ok(`${files.length} grey boxes on disk`);

console.log("check-placeholders: PASS");
