// Deck content: single source of truth for all 8 hash screens (#/01..#/08).
// Copy is verbatim from stitch-2 code.html reality. Unknowns are flagged
// TODO(swap) — never invented. Images are local /stitch/* only (no remote URLs).

export type ScreenTheme = "light" | "dark";

export interface Screen {
  slug: string;
  theme: ScreenTheme;
}

export const screens: Screen[] = [
  { slug: "01", theme: "light" },
  { slug: "02", theme: "light" },
  { slug: "03", theme: "light" },
  { slug: "04", theme: "light" },
  { slug: "05", theme: "light" },
  // Screens 6 (gallery) and 8 (terminal CTA) are DARK sections inside this
  // light deck — per-screen themes, no global toggle.
  { slug: "06", theme: "dark" },
  { slug: "07", theme: "light" },
  { slug: "08", theme: "dark" },
];

/* ---------------- s1 cold open ---------------- */

export const s1 = {
  section: "SEC_01 // COLD_ACQUISITION",
  coords: "LAT 41.8781° N · LON 87.6298° W",
  sys: "SYS_ONLINE",
  eyebrow: "Critical Incident Protocol",
  headline: ["Broken Down.", "2 A.M.", "Middle of", "Nowhere."],
  sub: "It happens. Here's what happens next. Precision roadside response mobilized in silence while the highway sleeps.",
  tierLabel: "RESPONSE TIER",
  tierValue: "DISPATCH_IMMEDIATE",
  satLabel: "NETWORK SATELLITE",
  satValue: "GEO-SYNC 04 [LOCKED]",
  hazards: "HAZARDS ACTIVE",
  velocity: "VELOCITY: 0.0 MPH",
  locating: "LOCATING... CARRIER_LOCK 99.4%",
  packet: "PACKET ID #884-CQ",
  proceed: "PROCEED WITH SEQUENCE",
  rail: "01/08",
  image: {
    src: "/stitch/s1-desert.jpg",
    alt: "Cinematic wide shot of an empty asphalt two-lane desert highway stretching into total pitch black darkness at 2am",
    width: 1600,
    height: 900,
  },
};

/* ---------------- s2 reveal ---------------- */

export const s2 = {
  sysId: "SYS_ID: CBE-OPS-02",
  netActive: "Network active: Coimbatore",
  coords: "LAT 11.0283 | LON 76.8961",
  livePill: "Now Live in Coimbatore",
  verifiedPill: "VERIFIED DISPATCH DECK",
  eyebrow: "Breakdown protocol engaged",
  headlineA: "That's what",
  headlineBrand: "ClutchD",
  headlineB: "is for.",
  sub: "Instant roadside triage, zero hidden tariffs, and surgical mechanic dispatch calibrated directly to your precise breakdown coordinates. Composure restored in minutes.",
  ctaPrimary: "SEE HOW IT WORKS",
  ctaSecondary: "LIVE TELEMETRY VIEW",
  minis: [
    { k: "Avg Dispatch", v: "3 MIN", s: "Real-time routing" },
    { k: "Network", v: "24/7", s: "Vetted mechanics" },
    { k: "Coordinates", v: "GPS PIN", s: "Sub-meter accuracy" },
  ],
  footer: "FRAME // 02 — THE REVEAL",
  footerSub: "COIMBATORE RAPID DISPATCH INFRASTRUCTURE",
  image: {
    src: "/stitch/media_1789468692674.jpg",
    alt: "ClutchD Mobile App Live Interface",
    width: 800,
    height: 1700,
  },
};

/* ---------------- s3 how it works ---------------- */

export interface S3Step {
  n: string;
  title: string;
  icon: string;
  body: string;
  foot: string;
  footExtra?: string;
  active?: boolean;
}

export const s3 = {
  sys: "SYS_DEPLOY // REV_4.2",
  seq: "SEQUENCE INDEX // 03 — LIVE PROTOCOL",
  radar: "RADAR_ENGAGED",
  coords: "LAT: 37.7749° N   LON: 122.4194° W",
  node: "NODE 03 ACTIVE",
  headline: ["FIVE STEPS.", "START TO FINISH."],
  sub: "High-precision dispatch mechanics orchestrating rapid roadside triage, proximity vector matching, verified mechanical execution, and cryptographic sign-off.",
  activeTag: "ACTIVE_NODE: 03 ● RADAR_ENGAGED",
  vector: "VECTOR: 37.7749° N, 122.4194° W",
  routeWidth: "56%",
  steps: [
    {
      n: "01",
      title: "REQUEST",
      icon: "SOS",
      body: "Tap SOS or pick a calibrated service profile; outline mechanical malfunction indicators.",
      foot: "LATENCY: <1.2s",
    },
    {
      n: "02",
      title: "MATCH",
      icon: "◎",
      body: "Algorithmic proximity dispatch connects localized certified specialists by diagnostic tier.",
      foot: "RADIUS: 8.4 MI",
    },
    {
      n: "03",
      title: "TRACK",
      icon: "➤",
      body: "Watch arrival in sub-second telemetry mapping; continuous bidirectional audio/data link.",
      foot: "STATUS: EN ROUTE",
      footExtra: "ETA 11M",
      active: true,
    },
    {
      n: "04",
      title: "FIXED",
      icon: "⚒",
      body: "Standardized roadside interventions with photographic diagnostic audit checkpoints.",
      foot: "SPEC: ISO-9001",
    },
    {
      n: "05",
      title: "REVIEW",
      icon: "✓",
      body: "One-tap automated ledger settlement, parts warranty logging, and technician evaluation.",
      foot: "ESCROW SECURE",
    },
  ] as S3Step[],
  orch: "ORCHESTRATION: AUTOMATED",
  orchValue: "AUTOMATED",
  avg: "AVG_RESPONSE_TIME:",
  avgValue: "14.2 MIN",
  enc: "CARRIER_ENCRYPTION:",
  encValue: "AES-256",
  proceed: "PROCEED",
  proceedSub: "STEP 04 // LIVE DISPATCH",
  rail: "03/08",
};

/* ---------------- s4 features / roles ---------------- */

export interface S4Pod {
  code: string;
  icon: string;
  title: string;
  body: string;
}

export const s4 = {
  section: "04 // CAPABILITIES & INTERFACES",
  realtime: "REALTIME_LINK_ACTIVE",
  specA: "[ SYSTEM SPECIFICATION ]",
  specB: "MULTI-TIER DISPATCH",
  headline: ["BUILT FOR EVERYONE", "AT THE JOB."],
  roles: ["Car owners", "Mechanics", "Garages", "Fleets"],
  podsByRole: {
    "Car owners": [
      {
        code: "01 // TELEMETRY_RELAY",
        icon: "SOS",
        title: "SOS button for real emergencies",
        body: "Instant telemetry relay bypassing traditional phone trees and dispatch queues with sub-second incident broadcast.",
      },
      {
        code: "02 // SECURE_TRACKING",
        icon: "➤",
        title: "Live map tracking and in-app chat",
        body: "Direct encrypted vector channel tracking mechanics in transit with high-cadence GPS pings and integrated technician messaging.",
      },
      {
        code: "03 // VIN_HARDWARE_INDEX",
        icon: "⚒",
        title: "Parts marketplace with fitment check",
        body: "VIN-matched hardware clearance engine cross-references live catalog specs to guarantee zero return delays.",
      },
      {
        code: "04 // DIAGNOSTIC_LEDGER",
        icon: "▤",
        title: "Service history & warranty tracking",
        body: "Immutable service records linked directly to onboard diagnostics, warranty validation, and component lifecycle curves.",
      },
    ] as S4Pod[],
    // TODO(swap): role content pending — brief covers Car owners only.
    Mechanics: [
      {
        code: "TODO(swap)",
        icon: "○",
        title: "TODO(swap): role content pending",
        body: "TODO(swap): Mechanics pods pending — brief covers Car owners only.",
      },
    ] as S4Pod[],
    Garages: [
      {
        code: "TODO(swap)",
        icon: "○",
        title: "TODO(swap): role content pending",
        body: "TODO(swap): Garages pods pending — brief covers Car owners only.",
      },
    ] as S4Pod[],
    Fleets: [
      {
        code: "TODO(swap)",
        icon: "○",
        title: "TODO(swap): role content pending",
        body: "TODO(swap): Fleets pods pending — brief covers Car owners only.",
      },
    ] as S4Pod[],
  } as Record<string, S4Pod[]>,
  deckMode: "DECK_MODE // 04",
  coords: "LAT: 11.0283° N // LON: 76.8961° E",
  advanceLabel: "ADVANCE TO DISPATCH ARCHITECTURE",
  rail: "04/08",
  image: {
    src: "/stitch/media_1789467779145.jpg",
    alt: "ClutchD App Live Service Request",
    width: 800,
    height: 1700,
  },
};

/* ---------------- s5 proof ---------------- */

export const s5 = {
  metric: "Metric Telemetry // Realtime Engine Proof",
  sysref: "SYS_REF: CLU-8809-D5",
  active: "ACTIVE STREAM",
  badge: "Benchmark Metric 01",
  giant: "3 min",
  proof: "Average time to get matched with a certified nearby mobile mechanic.",
  poolLabel: "TELEMETRY POOL:",
  poolStart: 142891,
  poolSuffix: "DISPATCHES LOGGED",
  stats: [
    { v: "14.2", u: "min", label: "Average On-Site Arrival", bar: "82%" },
    { v: "98.4", u: "%", label: "First-Call Resolution", bar: "98.4%" },
    { v: "4.9", u: "/ 5", label: "Verified Driver Rating", bar: "96%" },
  ],
  rail: "05/08",
};

/* ---------------- s6 guide gallery (dark) ---------------- */

export interface S6Phone {
  code: string;
  meta: string;
  title: string;
  body: string;
  img: { src: string; alt: string; width: number; height: number };
}

export const s6 = {
  sysref: "SYS_REF: ARCH_GALLERY_V6",
  frame: "INDEXED_DECK // FRAME 06",
  live: "LIVE OPS",
  eyebrow: "INTERFACE SPECIFICATION // REALTIME WORKFLOW",
  headline: "SEE IT BEFORE YOU NEED IT.",
  sub: "A unified system connecting drivers, emergency mechanics, parts suppliers, and fleet intelligence.",
  phones: [
    {
      code: "01 — AUTH_SYS",
      meta: "01 — Sign in",
      title: "Secure Authentication",
      body: "Role-based access (Customer / Mechanic / Garage) with encrypted multi-tenant login.",
      img: {
        src: "/stitch/media_1789467499414.jpg",
        alt: "Sign In Screen",
        width: 700,
        height: 1500,
      },
    },
    {
      code: "02 — DASHBOARD",
      meta: "02 — Dashboard",
      title: "Command Center",
      body: "Central hub for your active orders, referrals, account details, and active subscriptions.",
      img: {
        src: "/stitch/media_1789468692674.jpg",
        alt: "Dashboard Screen",
        width: 700,
        height: 1500,
      },
    },
    {
      code: "03 — MARKETPLACE",
      meta: "03 — Marketplace",
      title: "Parts & Accessories",
      body: "Browse verified spare parts and accessories with instant stock availability and seamless checkout.",
      img: {
        src: "/stitch/media_1789467499491.jpg",
        alt: "Marketplace Screen",
        width: 700,
        height: 1500,
      },
    },
    {
      code: "04 — HISTORY",
      meta: "04 — Service History",
      title: "Transparent Records",
      body: "Full immutable log of all past service requests, active tracking, and cancelled dispatch histories.",
      img: {
        src: "/stitch/media_1789467499435.jpg",
        alt: "History Screen",
        width: 700,
        height: 1500,
      },
    },
    {
      code: "05 — SETTINGS",
      meta: "05 — Settings",
      title: "Account Preferences",
      body: "Granular control over push alerts, SMS notifications, and complete account data management.",
      img: {
        src: "/stitch/media_1789467499417.jpg",
        alt: "Settings Screen",
        width: 700,
        height: 1500,
      },
    },
    {
      code: "06 — VEHICLES",
      meta: "06 — Vehicles",
      title: "Fleet & Garage",
      body: "Manage your registered vehicles, track maintenance schedules, and monitor upcoming service dates.",
      img: {
        src: "/stitch/media_1789467789374.jpg",
        alt: "Vehicles Screen",
        width: 700,
        height: 1500,
      },
    },
  ] as S6Phone[],
  metrics: [
    { k: "NETWORK_DISPATCH", v: "< 14 MIN", s: "AVG TRIAGE RESPONSE" },
    { k: "OEM_SUPPLY_VERIFIED", v: "12,400+", s: "CATEGORIZED SKUS" },
    { k: "TRIAGE_PRECISION", v: "99.4%", s: "FIRST-PASS RESOLUTION" },
    { k: "COVERAGE_LOCALE", v: "COIMBATORE", s: "LIVE PILOT ZONE" },
  ],
  proceed: "PROCEED TO SLIDE 07",
  proceedSub: "FLEET TELEMETRY & SOS",
  rail: "06 / 08",
};

/* ---------------- s7 roadmap ---------------- */

export const s7 = {
  phase: "PHASE PROTOCOL // 07.ROADMAP",
  spec: "SPEC_VER: 4.8.2 // TRAJECTORY_STABLE",
  coord: "COORDINATE: [37.7749,-122.4194]",
  eyebrow: "STRATEGIC CADENCE",
  headline: "WHERE WE'RE HEADED.",
  rows: [
    {
      phase: "NOW",
      idx: "/ 01",
      body: "Verified mechanics and garages you can already book across active service sectors.",
      sub: "REAL-TIME DISPATCH VALIDATED ON 1,400+ UNITS",
      pill: "ACTIVE DEPLOY",
      pillActive: true,
    },
    {
      phase: "NEXT",
      idx: "/ 02",
      body: "Warranty protection on every part you buy, automatic diagnostic OBD-II sync, and full fleet contracts for commercial operations.",
      sub: "TELEMETRY PLUG & PLAY CAN-BUS PROTOCOL",
      pill: "Q3–Q4 2025",
      pillActive: false,
    },
    {
      phase: "LATER",
      idx: "/ 03",
      body: "Multi-city expansion across 50+ tier-1 corridors, driver subscription perks, and multi-language roadside triage.",
      sub: "INTERSTATE LOGISTICS INFRASTRUCTURE & CORRIDORS",
      pill: "GLOBAL ARCH",
      pillActive: false,
    },
  ],
  engine: "DISPATCH ENGINE READY",
  velocity: "EST_VELOCITY: 99.4%",
  page: "PAGE 07 // DEPLOYMENT HORIZONS",
  rail: "07/08",
};

/* ---------------- s8 final CTA (dark terminal) ---------------- */

export const s8 = {
  sys: "SYS.V3.42 // RECOVERY PROTOCOL DECK",
  terminal: "TERMINAL READY",
  badge: "PROTOCOL SEQUENCE 08 — TERMINAL RESOLUTION",
  headlineA: "NEXT BREAKDOWN,",
  headlineB: "YOU'RE ALREADY",
  headlineC: "COVERED.",
  sub: "Autonomous mechanic telemetry instantly paired to your coordinate within 180 seconds. Eliminate wait distress through dedicated roadside infrastructure.",
  cta: "GET THE APP",
  // TODO(swap): app store links pending — rendered as buttons, no dead hrefs.
  storeIos: "Download on the App Store",
  storeAndroid: "Get it on Google Play",
  urgent: "Need urgent assistance right now?",
  call: "Call 24/7 Emergency Dispatch",
  callHref: "tel:911",
  or: "OR",
  sms: "TEXT SOS",
  smsHref: "sms:SOS",
  cards: [
    {
      k: "FLEET READOUT",
      v: "1,842",
      u: "Units Active",
      f: "● Dynamic Positioning: Locked",
    },
    {
      k: "MEAN TIME TO ARRIVAL",
      v: "11.4",
      u: "MINUTES",
      f: "Metro Sector Accuracy 99.1%",
    },
    {
      k: "COVERAGE INTEGRITY",
      v: "100%",
      u: "ALL HIGHWAYS",
      f: "Interstate & Suburban Corridors",
    },
  ],
  dispatch: "DISPATCH LINE: ACTIVE",
  standby: "STANDBY: PRIORITY LEVEL 1",
  station: "STATION IDENT: CLUTCH-ALPHA-884",
  end: "END OF SEQUENCE",
  endNum: "08 // 08",
  rail: "POS 08/08",
  railTerm: "TERM",
};
