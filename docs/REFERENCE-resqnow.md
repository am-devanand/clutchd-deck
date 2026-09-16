# ResQNow.org — Full Reference Site Analysis

_Analyzed 2026-09-16 via live fetch + search index. All pages are client-rendered; text extracted with a reader proxy._

---

## 1. Business Snapshot

| Item | Value |
|---|---|
| Product | On-demand roadside assistance platform ("emergency mobility" network) |
| Brand tagline | "Reimagining Emergency Mobility" / "When the road stops, we start." |
| Live market | Coimbatore, Tamil Nadu only (Tier-2 launch city) |
| Founder story | Founded 2025 by **Arokiya Aswanth A.** after a personal highway breakdown with no help available |
| Legal | MSME Udyam registered, Government Verified badge |
| HQ | KGISL Institute of Technology, KGISL Campus, Thudiyalur Road, Saravanampatti, Coimbatore – 641 035 |
| Phone | +91 9566510080, +91 9994806667 |
| Email | resqnow01@gmail.com |
| Social | LinkedIn "ResQNow" (18 followers, "ResQNow SuperGarage"), Instagram active |
| Core promise | **Sub-45-minute guaranteed ETA**, 100% price transparency, 24/7 active grid |

**Positioning:** premium, "digitally native" replacement for the unorganized local-garage chaos. Copy is aggressively tech/enterprise — "Tier-2 Emergency Grid", "Algorithmic Routing", "dispatch intelligence", "network telemetry".

---

## 2. Sitemap (complete)

```
/                                Home — hero, stats, problem, 4-step flow, recruit CTA
/services                        9 services with per-service request CTAs
/request-service/[service]       Vehicle-type wizard (dynamic per service slug)
   ├─ /request-service/flat-tire
   ├─ /request-service/towing
   ├─ /request-service/emergency   ← "SOS" button target ("Other Services")
   └─ ...one per service
/why-resqnow                     Problem/solution ("Status Quo", "Operations Layer", partners, capabilities)
/about                           MSME badge, mission, vision, founder story, live stats counters
/cities                          Coimbatore HQ feature + Tamil Nadu expansion teaser
/map                             Live radar map (MapmyIndia) of nearby technicians
/marketplace                     Auto-parts marketplace — "coming soon" placeholder
/technician/register             Partner signup + full 10-section independent-contractor agreement
/technician/login                Technician portal login (email/password)
/contact                         Contact form + direct info + full mega footer
/privacy-policy                  8-section policy
/terms-of-service                9-section terms (intermediary model, Coimbatore jurisdiction)
/*                               404 page ("Oops! Page not found" + Return Home)
```

Persistent chrome: sticky navbar (Platform, Why ResQNow, Services, Our Story, Cities We Serve, Partner Network, Contact, **SOS** button, Log in / Sign up) + 5-column mega footer (Platform, Solutions, Technology, Company, Legal) + social icons + "Test Mode" badge.

---

## 3. Page-by-Page Breakdown

### Home `/`
- **Eyebrow pill:** "Phase 1: Tier-2 Emergency Grid"
- **H1:** "Intelligent Roadside Assistance for Modern Mobility."
- **Sub:** replacing "unorganized service chaos and 3-hour waits" with a "premium, digitally native dispatch network engineered for sub-45 minute response times."
- **Stat trio:** `45 m — Guaranteed ETA` · `100% — Price Transparency` · `24/7 — Active Grid`
- **Problem section:** "Solving the Trust & Latency Collapse" — vehicle registrations skyrocketing in Coimbatore while "the physical support layer remains dangerously broken."
- **"Phase 1 Architecture" — 4 numbered steps:**
  1. **SOS Initiated** — driver requests aid via digital discovery or app
  2. **Algorithmic Routing** — AI predicts fastest unit, avoids traffic bottlenecks
  3. **Verified Dispatch** — vetted mechanic dispatched instantly
  4. **Safe Resolution** — transparent billing + digital audit on completion
- **Recruitment CTA band:** "Build the Support Grid with Us" — join as technician, "multiply your earning potential through our transparent dispatch system."

### `/services`
- **H1:** "Intelligent Infrastructure for Mobility Recovery"
- Sub: "dispatched algorithmically in under 45 minutes to eradicate operational latency."
- **9 service cards, each with an "Initialize Request" CTA:**
  1. Towing Services — transport to repair shop or preferred location
  2. Flat Tire Repair — fix/replace on the spot
  3. Battery Jumpstart — jumpstart or replacement battery
  4. Mechanical Issues — diagnose/fix common problems roadside
  5. Fuel Delivery — bring the fuel you need
  6. Lockout Assistance — regain vehicle access safely
  7. Winching Services — pull vehicle out of mud/snow/ditch
  8. EV Portable Charger — mobile charge for EVs
  9. Other Services — catch-all → contact

### `/request-service/[service]` (wizard step 1)
- Service-specific title (e.g. "Flat Tire Repair"), then **"Select Your Vehicle Type"**:
  - **Cars** — Sedan, Hatchback, SUV, MPV
  - **Motorcycles & Bikes** — Sport, Cruiser, Commuter, Scooter
  - **Commercial Vehicles** — Trucks, Vans, Buses, Construction Vehicle
  - **Electric Vehicles** — Electric Cars, E-Bikes, E-Scooters, Electric Auto
- Each card shows sub-vehicle chips with a "+1 more" overflow. (Deeper wizard steps are behind interaction — location/booking.)

### `/why-resqnow`
- **H1:** "Built for people who can't afford to stop."
- **The Status Quo:** "Breakdowns stop income. Traditional systems don't care." Legacy aggregators = "call-center cost", drivers wait "180+ minutes with zero visibility", fleets "bleed capital by the hour."
- **Operations Layer:** "Dispatch Intelligence." Hyper-local routing engine calculates ETA, matches skills, streams location. Bullets: sub-45 min guaranteed ETA · zero app-installation barrier · direct secure channel to technician.
- **Strategic Partners:** audience = individual owners → enterprise fleets.
- **Capabilities:** "Comprehensive recovery."

### `/about`
- **MSME Udyam Registration** badge section — "fully compliant, state-recognized entity", formalizing the Indian automotive aftermarket.
- **Enterprise Mission:** "systematically engineer a seamless, AI-driven dispatch network… zero-trust-deficit ecosystem nationwide."
- **Global Vision:** "the central, interconnected mobility grid for India's vehicular future" — fleets, OEMs, daily drivers.
- **Origin story:** "Forged from Systemic Failure." — founder's 2025 breakdown in an isolated corridor; predatory unverified garages. Quote from "Executive Board, ResQNow."
- **Network Telemetry** animated counters: Active Enterprise Users, Vetted Fleet Partners, Resolved Incidents, uptime (site shows "22/7 Algorithmic Uptime" — a typo of 24/7; counters render 0+ in snapshots).

### `/cities`
- **H1:** "Starting from the Heart of Kovai."
- Coimbatore as "launchpad" and "proving ground"; "The Manchester of South India demands resilience, speed, and trust."
- **Expansion teaser:** "Coming soon across all of Tamil Nadu" — sub-45 min "no matter where you travel in the state."
- Badge: "Engineered with pride in Tamil Nadu" · "Coimbatore HQ" · "Statewide Network Active Soon"

### `/map`
- **Live radar:** "Loading live map…", 200 km radius slider, "Nearby technicians — N technicians available around you", "Live" pill, ME marker, "Other technicians nearby" list.
- Location-permission flow with explicit error state: "Location permission denied. Please enable location access in browser settings."
- **MapmyIndia (Mappls)** tiles with attribution.

### `/marketplace`
- "Auto Parts Marketplace — Premium tyres and automobile spares at wholesale and retail prices", badges 🔧 Premium Quality / 💰 Best Prices / 🚚 Fast Delivery, category + Retail filter, **"Marketplace coming soon!"** banner. Placeholder page.

### `/technician/register`
- "Join our network of elite mobile mechanics and tow truck operators."
- Signup form **plus a full 10-section agreement** (important compliance pattern):
  1. Independent Service Partner (own schedule, tools, licenses, taxes)
  2. Professional Conduct
  3. Transparent Pricing & Payments (no off-platform payments; payout holds/reversals on misuse)
  4. Responsible Use of the App (no fake bookings, no job-allocation manipulation, no customer-data misuse)
  5. Customer Privacy
  6. Reliability & Cancellations
  7. Performance & Ratings
  8. Account Review & Termination (immediate termination for serious misconduct)
  9. Commitment to Growth
  10. Acceptance (signature confirms terms)

### `/technician/login`
- Split layout: "Join Our Network" pitch + login form (email/password), cross-link to register.

### `/contact`
- **H1:** "Let's keep you moving." Pill: "24/7 Support Desk". Sub mentions dispatch questions, tech support, partnerships.
- Form: Full Name, Email, Subject, Message + "Response within 2 hours." + Send.
- **Direct Contact card:** HQ address, phone (tel: link), email (mailto:), "Operating Hours: 24/7 Emergency Support Grid".

### `/privacy-policy` & `/terms-of-service`
- Privacy: data collected (personal, location, usage, device), use cases, no data selling, sharing with technicians/vendors/law, security, user rights, cookies, updates.
- Terms: **intermediary model** ("not a provider of vehicle repair services", "not a party to any agreement between users and technicians"), user/technician responsibilities, payments & disputes (mediation at sole discretion), liability limitation, termination, **governing law: India, exclusive jurisdiction of Coimbatore courts**.

---

## 4. Core User Flows

1. **Emergency (SOS):** navbar SOS button → `/request-service/emergency` ("Other Services") → pick vehicle type → booking.
2. **Planned service:** Services → "Initialize Request" on a card → `/request-service/[service]` → vehicle type → booking.
3. **Technician onboarding:** recruit CTAs on home/why pages → `/technician/register` → form + agreement acceptance → (login) `/technician/login`.
4. **Trust verification:** live radar map, telemetry counters, MSME badge, transparent-pricing claims.
5. **Support:** contact form or direct call/email.

---

## 5. Design & Content System

- **Voice:** militaristic/infrastructure metaphors — "grid", "dispatch", "telemetry", "architecture", "phase", "latency". Numbered protocols ("Phase 1 Architecture").
- **Trust devices everywhere:** stat chips (45 m / 100% / 24/7), animated counters, verified badges, "transparent billing".
- **Section rhythm:** eyebrow pill → big headline → supporting paragraph → feature grid → CTA. Repeated per page.
- **CTAs:** "Initialize Request", "Request Now", "Join As A Technician", persistent red-style **SOS** button.
- **Dark/premium tech aesthetic** with high-contrast sections (consistent with our deck's aesthetic).

---

## 6. Technical Observations

- **Full client-side rendered SPA** — every route returns the same empty HTML shell + one meta description. (Likely Vite/React.) Consequences: weak SEO beyond the shared meta, no per-page titles, reliance on JS execution. **Our rebuild should do SSR/SSG (Next.js) with per-page metadata — a clear win over the reference.**
- Maps: **MapmyIndia/Mappls** (Indian provider) with 200 km radius search + geolocation permission handling.
- Hashed asset filenames (`/assets/msme-logo-Bh-SyZ4n.png`) — bundled build.
- "Test Mode" badge in footer — flagged as non-production.
- Cities page content loads in a hidden iframe (reader flagged it).
- No app-store links surfaced on home (mobile app mentioned but download paths unclear; likely in-app/CTA).
- Animated counters captured at 0+ and a "22/7" typo — polish issues to avoid.

---

## 7. Weaknesses → Our Opportunities

| Reference weakness | Our opportunity |
|---|---|
| Client-only SPA, one shared meta description | Next.js App Router, per-route metadata, prerendered pages |
| No pricing anywhere | Transparent price bands per service/vehicle |
| Marketplace is a "coming soon" stub | Skip or clearly placeholder it |
| Counters show 0 / typos ("22/7") | Realistic, defensible numbers with correct copy |
| Single-city only | Same (Coimbatore), but present it as a strength with expansion roadmap |
| Deep wizard steps unknown/unclear | Build a fully specified booking flow with visible steps |
| Test Mode badge / empty map states | Polished empty & error states (denied-location etc. is done well — keep that pattern) |
| Legal pages thin | Keep the intermediary-model terms pattern; add DPDP Act (India) reference |

---

## 8. Reusable Content Blocks (verbatim source of truth)

- **Hero:** "Intelligent Roadside Assistance for Modern Mobility."
- **Stats:** 45 m guaranteed ETA · 100% price transparency · 24/7 active grid
- **4-step dispatch flow:** SOS Initiated → Algorithmic Routing → Verified Dispatch → Safe Resolution
- **9 services** (full list + blurbs in §3)
- **Vehicle categories:** Cars / Motorcycles & Bikes / Commercial / Electric Vehicles with sub-chips
- **Recruitment pitch:** "Build the Support Grid with Us… multiply your earning potential."
- **Why-page bullets:** sub-45 min ETA · zero app-installation barrier · direct secure channel
- **Founder narrative:** 2025 breakdown → "Forged from Systemic Failure"
- **Contacts:** phones +91 9566510080 / +91 9994806667, resqnow01@gmail.com, KGISL Campus Coimbatore 641035
