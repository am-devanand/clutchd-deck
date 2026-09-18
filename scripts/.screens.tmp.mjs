// Deck content: single source of truth for all 8 hash screens (#/01..#/08).
// Copy is verbatim from stitch-2 code.html reality. Unknowns are flagged
// TODO(swap) — never invented. Images are local /stitch/* only (no remote URLs).
// 2026-09-16: s4 role pods + geo coords grounded from ClutchD product docs
// (see docs/CLUTCHD-FACTS.md). s8 store links + dispatch line still pending.
export const screens = [
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
    coords: "LAT 11.0283° N · LON 76.8961° E",
    sys: "SYS_ONLINE",
    eyebrow: "Critical Incident Protocol",
    headline: ["Dead Battery.", "Flat Tyre.", "Long", "Night."],
    sub: "Whatever stopped you, ClutchD gets you moving — verified mechanics, transparent estimates, 24/7 roadside response.",
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
    // 2026-09-16 (P2 i18n): hero CTA + stat labels + dispatch-card rows moved
    // here from s1-cold-open.tsx so both locales translate them (messages/*/screens.json).
    ctaPrimary: "Explore Platform",
    ctaSecondary: "Emergency SOS",
    stats: [
        { v: "15 min", l: "Arrival Target" },
        { v: "24/7", l: "Active Network" },
        { v: "GPS", l: "Live Tracking" },
        { v: "1", l: "City Live — Coimbatore" },
    ],
    cardLabel: "Live Dispatch",
    cardRows: [
        { label: "Locating Mechanic", value: "99.4%", pct: "99%" },
        { label: "Network Coverage", value: "100%", pct: "100%" },
        { label: "Dispatch Speed", value: "3 min", pct: "82%" },
    ],
    // 2026-09-17: hero phone now shows the ClutchD app home screen itself
    // (ResQNow-style). All strings grounded in docs/CLUTCHD-FACTS.md: SOS
    // button, live mechanic tracking, VIN-fitment marketplace, service
    // history + warranty tracking. City is the verified live seed.
    phone: {
        city: "Coimbatore · 24/7",
        sosTitle: "Roadside emergency?",
        sosAction: "SOS — Get Help Now",
        enRoute: "Mechanic en route",
        enRouteSub: "Verified mechanic · live tracking",
        quickParts: "Parts Marketplace",
        quickPartsSub: "VIN fitment check",
        quickHistory: "Service History",
        quickHistorySub: "Warranty tracking",
        tabs: ["Home", "Parts", "History", "Profile"],
        // Stage-driven live demo cycling the real app lifecycle (searching →
        // accepted → en_route → in_progress, docs/CLUTCHD-FACTS.md). `pos` =
        // route-marker %, `eta` = chip chrome. The demo persona (Karthik S.) is
        // illustrative UI chrome in the same class as s1 flavor text — not a
        // product claim.
        stages: [
            {
                label: "Locating mechanic",
                sub: "Scanning nearby verified mechanics",
                eta: "SCAN",
                pos: 8,
            },
            {
                label: "Mechanic accepted",
                sub: "Karthik S. accepted your request",
                eta: "4 MIN",
                pos: 32,
            },
            {
                label: "Mechanic en route",
                sub: "Live tracking · heading your way",
                eta: "3 MIN",
                pos: 64,
            },
            {
                label: "Arriving now",
                sub: "Estimate approved · work beginning",
                eta: "NOW",
                pos: 94,
            },
        ],
        mechName: "Karthik S.",
        mechMeta: "Verified mechanic · 4.9",
    },
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
    eyebrow: "Connected automotive care",
    headlineA: "One connected ecosystem",
    headlineBrand: "for automotive care.",
    headlineB: "",
    sub: "Find verified mechanics, request roadside help, source the right parts, track work live, and keep your complete service history.",
    ctaPrimary: "GET EARLY ACCESS",
    ctaSecondary: "SEE HOW IT WORKS",
    // 2026-09-17: home bento-grid data — 3 pillars + 5 commitments from the
    // old-site trust copy (verbatim, see docs/REFERENCE-old-site.md). Consumed
    // by app/components/home-services.tsx; extracted into messages/*/screens.json.
    pillars: [
        {
            t: "Verified providers",
            body: "Every mechanic and garage passes identity and skill checks (KYC) before joining the network. No anonymous strangers at your breakdown.",
        },
        {
            t: "Transparent estimates",
            body: "See the price before the work starts. You approve the estimate, then the wrench lifts. Labour and parts are shown separately.",
        },
        {
            t: "Secure payments",
            body: "Pay through the platform with Stripe and Razorpay. Every payment is protected and receipt-backed.",
        },
    ],
    commitments: [
        {
            code: "KYC",
            t: "Verified mechanics and garages",
            body: "Identity and skill verification before anyone joins the network.",
        },
        {
            code: "ESTIMATE",
            t: "Transparent estimates",
            body: "See the price before work starts. Approve it, then work begins.",
        },
        {
            code: "RATINGS",
            t: "Ratings and reviews",
            body: "Real feedback from real jobs keeps the network honest.",
        },
        {
            code: "PAYMENTS",
            t: "Secure payments",
            body: "Stripe and Razorpay. Protected and receipt-backed, every time.",
        },
        {
            code: "RECORDS",
            t: "Digital service records",
            body: "History lives on the vehicle, not in a drawer of paper invoices.",
        },
    ],
    // 2026-09-16: minis imported from old-site home pillars (verbatim).
    minis: [
        { k: "Verified Providers", v: "KYC", s: "Identity & skill checks" },
        { k: "Transparent Estimates", v: "APPROVE", s: "Price before work starts" },
        { k: "Secure Payments", v: "PROTECTED", s: "Stripe & Razorpay, receipt-backed" },
    ],
    footer: "FRAME // 02 — THE REVEAL",
    footerSub: "COIMBATORE RAPID DISPATCH INFRASTRUCTURE",
    image: {
        src: "/stitch/media_1789468692674.jpg",
        alt: "ClutchD customer profile screen with ACTIVE badge, order stats, and account shortcuts",
        width: 800,
        height: 1700,
    },
};
export const s3 = {
    // P3 i18n: eyebrow + metrics moved here from s3-steps.tsx so both locales
    // translate them.
    eyebrow: "How it works",
    sys: "SYS_DEPLOY // REV_4.2",
    seq: "SEQUENCE INDEX // 03 — LIVE PROTOCOL",
    radar: "RADAR_ENGAGED",
    coords: "LAT: 11.0283° N   LON: 76.8961° E",
    node: "NODE 03 ACTIVE",
    headline: ["Five Steps.", "Start to Finish."],
    sub: "From request to completed service: ClutchD matches you with verified nearby providers in minutes — you approve the estimate before the wrench lifts, and track every step live.",
    activeTag: "ACTIVE_NODE: 03 ● RADAR_ENGAGED",
    vector: "VECTOR: 11.0283° N, 76.8961° E",
    routeWidth: "56%",
    // 2026-09-16: step feet grounded to the real job lifecycle (searching →
    // accepted → en_route → in_progress → completed) and stack facts
    // (PostGIS matching, WebSocket tracking, Stripe/Razorpay) per
    // docs/CLUTCHD-FACTS.md. Invented timings/specs removed.
    steps: [
        {
            n: "01",
            title: "REQUEST",
            icon: "SOS",
            body: "Tap SOS or pick a calibrated service profile; outline mechanical malfunction indicators.",
            foot: "SOS // 1 TAP",
        },
        {
            n: "02",
            title: "MATCH",
            icon: "◎",
            body: "Algorithmic proximity dispatch connects localized certified specialists by diagnostic tier.",
            foot: "POSTGIS NEARBY MATCH",
        },
        {
            n: "03",
            title: "TRACK",
            icon: "➤",
            body: "Watch arrival in sub-second telemetry mapping; continuous bidirectional audio/data link.",
            foot: "STATUS: EN ROUTE",
            footExtra: "LIVE GPS",
            active: true,
        },
        {
            n: "04",
            title: "FIXED",
            icon: "⚒",
            body: "Standardized roadside interventions with photographic diagnostic audit checkpoints.",
            foot: "STATUS: IN PROGRESS",
        },
        {
            n: "05",
            title: "REVIEW",
            icon: "✓",
            body: "One-tap automated ledger settlement, parts warranty logging, and technician evaluation.",
            foot: "STRIPE / RAZORPAY",
        },
    ],
    orch: "ORCHESTRATION: AUTOMATED",
    orchValue: "AUTOMATED",
    avg: "AVG_RESPONSE_TIME:",
    avgValue: "14.2 MIN",
    enc: "CARRIER_ENCRYPTION:",
    encValue: "AES-256",
    proceed: "PROCEED",
    proceedSub: "STEP 04 // LIVE DISPATCH",
    metrics: [
        { label: "Avg Response", value: "15 MIN TARGET" },
        { label: "Tracking", value: "LIVE GPS" },
        { label: "Orchestration", value: "AUTOMATED" },
        { label: "Pilot Grid", value: "COIMBATORE" },
    ],
    rail: "03/08",
};
export const s4 = {
    // P3 i18n: eyebrow + headline moved here from s4-roles.tsx. headline[1]
    // gets the gradient. roleLabels maps the podsByRole EN keys to display
    // labels (Tamil labels come from old-site audiences.*.title).
    eyebrow: "Tailored Experience",
    section: "04 // CAPABILITIES & INTERFACES",
    realtime: "REALTIME_LINK_ACTIVE",
    specA: "[ SYSTEM SPECIFICATION ]",
    specB: "MULTI-TIER DISPATCH",
    headline: [
        "Built for",
        "Everyone",
        "at the Job."
    ], roles: [
        "Car owners",
        "Mechanics",
        "Garages",
        "Fleets"
    ],
    roleLabels: {
        "Car owners": "Car owners",
        "Mechanics": "Mechanics",
        "Garages": "Garages",
        "Fleets": "Fleets"
    },
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
                title: "Digital service history",
                body: "Your vehicle's history lives on the vehicle, not in a drawer of paper invoices — with maintenance reminders before things break.",
            },
        ],
        // 2026-09-16: refreshed from old-site for-providers bullets (verbatim
        // benefit language), cross-checked against real app features.
        Mechanics: [
            {
                code: "01 // DISCOVERY",
                icon: "☰",
                title: "Get discovered & receive jobs",
                body: "Verified leads reach you directly — customers already know your rating before they call.",
            },
            {
                code: "02 // SCHEDULE",
                icon: "₹",
                title: "Manage schedules & track jobs",
                body: "Your queue, your availability. Take the jobs that fit and follow each one from accept to complete.",
            },
            {
                code: "03 // EARNINGS",
                icon: "✓",
                title: "Earn and track earnings",
                body: "Every payout lands in one ledger — transparent, receipt-backed, always reconciled.",
            },
            {
                code: "04 // REPUTATION",
                icon: "➤",
                title: "Build ratings & reputation",
                body: "Real feedback from real jobs compounds into a reputation that grows your customer base.",
            },
        ],
        Garages: [
            {
                code: "01 // FRONT_DESK",
                icon: "⚒",
                title: "Customers, jobs & appointments",
                body: "Estimates, approvals, payment: it all lands in one place now. Your desk stops being a filing cabinet.",
            },
            {
                code: "02 // TEAM",
                icon: "◎",
                title: "Mechanics & team",
                body: "Your roster under one verified garage profile, sharing one dispatch queue.",
            },
            {
                code: "03 // INVENTORY",
                icon: "▤",
                title: "Inventory & spare parts",
                body: "Source spares through the same platform your customers book through — one supplier relationship.",
            },
            {
                code: "04 // BILLING",
                icon: "⚒",
                title: "Billing & revenue analytics",
                body: "Job volume, revenue, and rating trends in one view — know what's driving the business.",
            },
        ],
        Fleets: [
            {
                code: "01 // MONITOR",
                icon: "▣",
                title: "Monitor vehicles & health",
                body: "Every unit's systems in one live view — from battery to brakes, downtime becomes planned, not discovered.",
            },
            {
                code: "02 // SCHEDULE",
                icon: "➤",
                title: "Schedule maintenance",
                body: "Per-vehicle service reminders keep the fleet ahead of breakdowns, not reacting to them.",
            },
            {
                code: "03 // DRIVERS",
                icon: "▤",
                title: "Manage drivers",
                body: "Raise and track service requests for any vehicle, with every job on the record.",
            },
            {
                code: "04 // INTELLIGENCE",
                icon: "◎",
                title: "Predictive maintenance & analytics",
                body: "Anomalies in the data flag issues early — cut downtime before it happens.",
            },
        ],
    },
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
// 2026-09-16: stats + testimonials imported verbatim from old-site PROOF
// section (docs/REFERENCE-old-site.md). Figures carry the old site's own
// "Launch figures pending: illustrative" label — honest by design.
export const s5 = {
    metric: "Metric Telemetry // Illustrative Proof",
    sysref: "SYS_REF: CLU-8809-D5",
    active: "ACTIVE STREAM",
    badge: "Launch figures pending: illustrative",
    giant: "~18 min",
    proof: "Average response time across the network. Illustrative launch figures — real numbers update as ClutchD rolls out.",
    poolLabel: "EARLY NETWORK:",
    poolStart: 120, // Verified mechanics (illustrative)
    poolSuffix: "VERIFIED MECHANICS",
    // P3 i18n: screen-reader honesty note (was hardcoded in s5-proof.tsx).
    srNote: "Figures on this screen are illustrative launch figures pending real network data.",
    stats: [
        { v: "120", u: "+", label: "Verified Mechanics — Illustrative", bar: "80%" },
        { v: "35", u: "+", label: "Partner Garages — Illustrative", bar: "55%" },
        { v: "12", u: "k+", label: "Service Records — Illustrative", bar: "92%" },
    ],
    testimonials: [
        {
            quote: "My bike broke down on Trichy Road: a verified mechanic was at my spot in under twenty minutes. I watched the whole thing on the live map.",
            name: "Ravi K",
            role: "Two-wheeler owner · Coimbatore",
        },
        {
            quote: "ClutchD brings me jobs I'd never reach on my own. Customers already know my rating before they call.",
            name: "Mohammed Irfan",
            role: "Verified mechanic · Chennai",
        },
        {
            quote: "Estimates, approvals, payment: it all lands in one place now. My desk stopped being a filing cabinet.",
            name: "Deepa Nair",
            role: "Garage operator · Kochi",
        },
    ],
    rail: "05/08",
};
export const s6 = {
    sysref: "SYS_REF: ARCH_GALLERY_V6",
    frame: "INDEXED_DECK // FRAME 06",
    live: "LIVE OPS",
    eyebrow: "Experience",
    // [0] plain · [1] gradient
    headline: ["See It Before You", "Need It."],
    sub: "Drivers, mechanics, garages, fleets, parts, payments and service history on one system — so the vehicle's story never starts over.",
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
            code: "02 — PROFILE",
            meta: "02 — Profile",
            title: "Account & Profile",
            body: "Central hub for your active orders, referrals, account details, and active subscriptions.",
            img: {
                src: "/stitch/media_1789468692674.jpg",
                alt: "Customer profile screen",
                width: 700,
                height: 1500,
            },
        },
        {
            code: "03 — MARKETPLACE",
            meta: "03 — Marketplace",
            title: "Parts & Accessories",
            body: "Pick your make, model, and year — only see parts that actually fit, compare prices across verified suppliers, and order.",
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
    ],
    // 2026-09-16: grounded per docs/CLUTCHD-FACTS.md — capability claims only,
    // no invented volumes or percentages.
    metrics: [
        { k: "DISPATCH", v: "AUTOMATED", s: "POSTGIS NEARBY MATCHING" },
        { k: "MARKETPLACE", v: "PARTS + FITMENT", s: "VEHICLE-MATCHED CATALOG" },
        { k: "TRACKING", v: "LIVE GPS", s: "WEBSOCKET TELEMETRY" },
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
    coord: "COORDINATE: [11.0283, 76.8961]",
    eyebrow: "Strategic cadence",
    headline: ["Where We're", "Headed."],
    // 2026-09-16: grounded per docs/CLUTCHD-FACTS.md — NOW = shipped app
    // features; NEXT = in-flight contracts (warranty claims, fleet API are
    // backend NEWs); LATER = statewide-first expansion. No invented counts/dates.
    rows: [
        {
            phase: "NOW",
            idx: "/ 01",
            body: "Verified mechanics, roadside help, parts, payments and service history — one ecosystem, live in Coimbatore.",
            sub: "LIVE DISPATCH, GPS TRACKING & PARTS MARKETPLACE",
            pill: "ACTIVE DEPLOY",
            pillActive: true,
        },
        {
            phase: "NEXT",
            idx: "/ 02",
            body: "Warranty protection on every part you buy, deeper vehicle diagnostics, and full fleet contracts for commercial operations.",
            sub: "WARRANTY CLAIMS PIPELINE / FLEET API",
            pill: "IN DEVELOPMENT",
            pillActive: false,
        },
        {
            phase: "LATER",
            idx: "/ 03",
            body: "Statewide expansion across Tamil Nadu, driver subscription perks, and multi-language roadside triage.",
            sub: "STATEWIDE COVERAGE, THEN INTERSTATE CORRIDORS",
            pill: "HORIZON",
            pillActive: false,
        },
    ],
    engine: "Dispatch Engine Ready",
    pilotLabel: "Pilot Grid:",
    pilotValue: "Coimbatore",
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
    sub: "Dispatch telemetry pairs to your coordinate the moment you request help. No call centers, no hold music — engineered for minutes, not hours.",
    cta: "GET THE APP",
    // 2026-09-16: CTA reworked to APK/PWA per docs/CLUTCHD-FACTS.md — ClutchD
    // ships as a Capacitor Android APK + installable PWA (no store listings yet).
    // TODO(swap): apkLabel badge is non-linking until a public APK URL exists;
    // TODO(swap): swap pwaHref to the production domain (clutchd.com) when live.
    // TODO(swap): callHref "tel:911" below is a stand-in for the real dispatch line.
    pwaHref: "https://clutchd.tail14cfb9.ts.net",
    pwaTop: "INSTALLABLE PWA",
    pwaLabel: "Open Web App",
    apkTop: "DIRECT INSTALL", apkLabel: "Android APK",
    apkSoon: "SOON",
    apkAria: "Android APK coming soon",
    urgent: "Need urgent assistance right now?",
    call: "Call 24/7 Emergency Dispatch",
    callHref: "tel:911",
    or: "OR",
    sms: "TEXT SOS",
    smsHref: "sms:SOS",
    // 2026-09-16: cards reframed per docs/CLUTCHD-FACTS.md — pilot facts and
    // design targets only; invented fleet/arrival/coverage stats removed.
    cards: [
        {
            k: "PILOT GRID",
            v: "1",
            u: "City Live",
            f: "● Coimbatore — statewide next",
        },
        {
            k: "TIME TO ARRIVAL",
            v: "15",
            u: "MIN TARGET",
            f: "● Design target — pilot calibration",
        },
        {
            k: "DISPATCH DESK",
            v: "24/7",
            u: "",
            f: "● SOS and dispatch, always on",
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
