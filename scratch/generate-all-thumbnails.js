const sharp = require('sharp');
const path = require('path');

const projects = [
  {
    id: "og",
    desktop: path.join(__dirname, '../public/projects/og.png'),
    phone: path.join(__dirname, 'mobile-sources/og_mobile.png'),
    output: path.join(__dirname, '../public/projects/og_thumb.png'),
    accent: "#e50914",
    features: [
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Modern & Responsive", desc: "Seamless experience across all devices." },
      { iconSvg: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>', title: "Bold & Readable", desc: "Strong typography and clear hierarchy." },
      { iconSvg: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', title: "Engaging & Action-Oriented", desc: "Clear CTAs that drive cravings and orders." }
    ]
  },
  {
    id: "wobli3d",
    desktop: path.join(__dirname, '../public/projects/wobli3d.png'),
    phone: path.join(__dirname, 'mobile-sources/wobli_mobile.png'),
    output: path.join(__dirname, '../public/projects/wobli_thumb.png'),
    accent: "#8b5cf6",
    features: [
      { iconSvg: '<path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.78a2 2 0 0 0 .95 1.7l6.05 4.06a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V9.8a2 2 0 0 0-.95-1.7Z"/><polyline points="3.29 7 12 12.5 20.71 7"/><line x1="12" x2="12" y1="22.5" y2="12.5"/>', title: "Interactive 3D Customizer", desc: "Real-time Three.js figurine preview." },
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Responsive E-Commerce", desc: "Photo upload pipelines & order tracking." },
      { iconSvg: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>', title: "Automated 3D Print Engine", desc: "Mesh processing & payment gateways." }
    ]
  },
  {
    id: "dance_studio",
    desktop: path.join(__dirname, '../public/projects/dance_studio.png'),
    phone: path.join(__dirname, 'mobile-sources/dance_studio_mobile.png'),
    output: path.join(__dirname, '../public/projects/dance_studio_thumb.png'),
    accent: "#d97706",
    features: [
      { iconSvg: '<polygon points="6 3 20 12 6 21 6 3"/>', title: "Dynamic Video Heroes", desc: "High-octane rhythm & choreography." },
      { iconSvg: '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>', title: "Interactive Class Timetable", desc: "Live schedule filters & instructor profiles." },
      { iconSvg: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', title: "Frictionless Booking", desc: "Fast reservations & instant confirmations." }
    ]
  },
  {
    id: "kineticx",
    desktop: path.join(__dirname, '../public/projects/kineticx.png'),
    phone: path.join(__dirname, 'mobile-sources/kineticx_mobile.png'),
    output: path.join(__dirname, '../public/projects/kineticx_thumb.png'),
    accent: "#0284c7",
    features: [
      { iconSvg: '<circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>', title: "360° Spatial Product Lab", desc: "Rotation & exploded chassis viewer." },
      { iconSvg: '<path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/>', title: "Real-time Telemetry UI", desc: "Carbon plate metrics & sprint data." },
      { iconSvg: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>', title: "WebGL Shader Pipelines", desc: "Ultra-crisp 60fps lighting & materials." }
    ]
  },
  {
    id: "pebbleboat",
    desktop: path.join(__dirname, '../public/projects/pebbleboat.png'),
    phone: path.join(__dirname, 'mobile-sources/pebbleboat_mobile.png'),
    output: path.join(__dirname, '../public/projects/pebbleboat_thumb.png'),
    accent: "#2563eb",
    features: [
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Digital Product Studio", desc: "Enterprise full-stack engineering & design." },
      { iconSvg: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', title: "Design-First Engineering", desc: "Micro-interactions, sleek dark theme." },
      { iconSvg: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>', title: "Automated Lead Capture", desc: "High-converting inquiry workflows." }
    ]
  },
  {
    id: "oeuvre",
    desktop: path.join(__dirname, '../public/projects/oeuvre.png'),
    phone: path.join(__dirname, 'mobile-sources/oeuvre_mobile.png'),
    output: path.join(__dirname, '../public/projects/oeuvre_thumb.png'),
    accent: "#b45309",
    features: [
      { iconSvg: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>', title: "Luxury E-Commerce", desc: "Immersive browsing for couture pieces." },
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Mobile-First Lookbook", desc: "Fluid transitions & editorial zoom." },
      { iconSvg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', title: "Seamless Checkout", desc: "Frictionless bag & global currencies." }
    ]
  },
  {
    id: "hangers",
    desktop: path.join(__dirname, '../public/projects/hangers.png'),
    phone: path.join(__dirname, 'mobile-sources/hangers_mobile.png'),
    output: path.join(__dirname, '../public/projects/hangers_thumb.png'),
    accent: "#0284c7",
    features: [
      { iconSvg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>', title: "Comprehensive Catalog", desc: "Premium hangers & wardrobe fittings." },
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "B2B & B2C Ordering", desc: "Instant bulk inquiries & filtering." },
      { iconSvg: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>', title: "High-Performance UI", desc: "Optimised image loading & lookup." }
    ]
  },
  {
    id: "kiddle",
    desktop: path.join(__dirname, '../public/projects/kiddle.png'),
    phone: path.join(__dirname, 'mobile-sources/kiddle_mobile.png'),
    output: path.join(__dirname, '../public/projects/kiddle_thumb.png'),
    accent: "#059669",
    features: [
      { iconSvg: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>', title: "Joyful EdTech Design", desc: "Playful animations & child-first UI." },
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Parent Portal", desc: "Simple admission inquiries & tours." },
      { iconSvg: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', title: "Interactive Learning", desc: "Engaging curriculum & responsive layouts." }
    ]
  },
  {
    id: "global",
    desktop: path.join(__dirname, '../public/projects/global.png'),
    phone: path.join(__dirname, 'mobile-sources/global_mobile.png'),
    output: path.join(__dirname, '../public/projects/global_thumb.png'),
    accent: "#1d4ed8",
    features: [
      { iconSvg: '<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>', title: "Study Abroad Portal", desc: "Global university finder & guidance." },
      { iconSvg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>', title: "Scholarship Search", desc: "Interactive database for top admissions." },
      { iconSvg: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>', title: "Visa & Application Guide", desc: "Step-by-step documentation support." }
    ]
  },
  {
    id: "aixgrow",
    desktop: path.join(__dirname, '../public/projects/aixgrow.png'),
    phone: path.join(__dirname, 'mobile-sources/aixgrow_mobile.png'),
    output: path.join(__dirname, '../public/projects/aixgrow_thumb.png'),
    accent: "#4f46e5",
    features: [
      { iconSvg: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>', title: "Growth Acceleration UI", desc: "Brand elevation & conversion analytics." },
      { iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>', title: "Elite Digital Experience", desc: "Dark-mode aesthetic & smooth motion." },
      { iconSvg: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>', title: "Automated Conversion Engine", desc: "Lead capture & interactive booking." }
    ]
  }
];

// ─── DIMENSIONS ───────────────────────────────────────────────────────────────
const W = 1200;
const H = 1380;

// ── Monitor (fills top ~56% of card)
const MONITOR_X = 50;
const MONITOR_Y = 48;
const MONITOR_W = 1100;
const MONITOR_H = 560;
const MONITOR_BEZEL = 14;
const MONITOR_R = 20;
const SCREEN_X = MONITOR_X + MONITOR_BEZEL;
const SCREEN_Y = MONITOR_Y + MONITOR_BEZEL;
const SCREEN_W = MONITOR_W - MONITOR_BEZEL * 2;
const SCREEN_H = MONITOR_H - MONITOR_BEZEL * 2 - 8;

const STAND_TOP_W = 130;
const STAND_BOT_W = 210;
const STAND_H = 60;
const STAND_Y = MONITOR_Y + MONITOR_H;
const BASE_H = 12;
const BASE_W = 300;

// ── Phone (portrait, starts ~80px below monitor bottom, left side)
const PH_X = 48;
const PH_Y = STAND_Y + STAND_H + BASE_H + 30;
const PH_W = 280;
const PH_H = 580;
const PH_R = 40;
const PH_BEZEL = 11;
const PH_SCREEN_X = PH_X + PH_BEZEL;
const PH_SCREEN_Y = PH_Y + PH_BEZEL;
const PH_SCREEN_W = PH_W - PH_BEZEL * 2;
const PH_SCREEN_H = PH_H - PH_BEZEL * 2;

// ── Feature cards (right of phone)
const FEAT_X = 370;
const FEAT_Y = PH_Y + 10;
const FEAT_W = 780;

async function generateAll() {
  for (const proj of projects) {
    console.log(`Generating: ${proj.id}...`);
    try {
      // ── Process images ─────────────────────────────────────────────────────
      const desktopBuf = await sharp(proj.desktop)
        .resize(SCREEN_W, SCREEN_H, { fit: 'cover', position: 'top' })
        .png().toBuffer();
      const desktopB64 = `data:image/png;base64,${desktopBuf.toString('base64')}`;

      // For phone: crop to portrait 9:19.5 ratio from center-top
      const phoneBuf = await sharp(proj.phone)
        .resize(PH_SCREEN_W * 2, PH_SCREEN_H * 2, { fit: 'cover', position: 'top' })
        .png().toBuffer();
      const phoneB64 = `data:image/png;base64,${phoneBuf.toString('base64')}`;

      // ── Feature callouts ───────────────────────────────────────────────────
      const accentRGB = hexToRgb(proj.accent);
      const accentLight = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.12)`;
      const accentMid   = `rgba(${accentRGB.r},${accentRGB.g},${accentRGB.b},0.6)`;

      const featuresSvg = proj.features.map((f, i) => {
        const fy = FEAT_Y + i * 148;
        const safeTitle = f.title.replace(/&/g, '&amp;');
        const safeDesc  = f.desc.replace(/&/g, '&amp;');
        return `
          <!-- Feature card ${i} -->
          <g>
            <!-- Card background -->
            <rect x="${FEAT_X}" y="${fy}" width="${FEAT_W}" height="120" rx="18"
              fill="white" fill-opacity="0.72"
              filter="url(#cardBlur)"/>
            <rect x="${FEAT_X}" y="${fy}" width="${FEAT_W}" height="120" rx="18"
              fill="none" stroke="white" stroke-opacity="0.6" stroke-width="1"/>

            <!-- Icon pill -->
            <rect x="${FEAT_X + 16}" y="${fy + 16}" width="72" height="72" rx="16"
              fill="${proj.accent}" filter="url(#iconGlow)"/>
            <!-- Icon -->
            <g transform="translate(${FEAT_X + 16 + 18}, ${fy + 16 + 18}) scale(1.5)"
               stroke="white" fill="none" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round">
              ${f.iconSvg}
            </g>

            <!-- Text -->
            <text x="${FEAT_X + 108}" y="${fy + 53}"
              font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
              font-size="22" font-weight="700" fill="#0f172a">${safeTitle}</text>
            <text x="${FEAT_X + 108}" y="${fy + 83}"
              font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
              font-size="15" font-weight="400" fill="#475569">${safeDesc}</text>

            <!-- Accent left stripe -->
            <rect x="${FEAT_X}" y="${fy + 24}" width="4" height="72" rx="2" fill="${proj.accent}"/>
          </g>
        `;
      }).join('');

      // ── SVG ────────────────────────────────────────────────────────────────
      const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <!-- Background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="40%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>

    <!-- Mesh noise texture feel via stacked radials -->
    <radialGradient id="spotL" cx="15%" cy="25%" r="45%">
      <stop offset="0%" stop-color="${proj.accent}" stop-opacity="0.09"/>
      <stop offset="100%" stop-color="${proj.accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="spotR" cx="88%" cy="75%" r="40%">
      <stop offset="0%" stop-color="${proj.accent}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="${proj.accent}" stop-opacity="0"/>
    </radialGradient>

    <!-- Monitor gradients -->
    <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1a1d24"/>
      <stop offset="100%" stop-color="#0c0e12"/>
    </linearGradient>
    <linearGradient id="standGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#64748b"/>
    </linearGradient>
    <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#cbd5e1"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>

    <!-- Phone gradients -->
    <linearGradient id="phoneBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e2029"/>
      <stop offset="100%" stop-color="#0d0f14"/>
    </linearGradient>
    <linearGradient id="phoneEdgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3a3f50"/>
      <stop offset="50%" stop-color="#4a5268"/>
      <stop offset="100%" stop-color="#2a2e3c"/>
    </linearGradient>
    <!-- Screen reflection on phone -->
    <linearGradient id="phoneReflect" x1="0%" y1="0%" x2="30%" y2="100%">
      <stop offset="0%" stop-color="white" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>

    <!-- Shadows / filters -->
    <filter id="monitorShadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="20" stdDeviation="28" flood-color="#000" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="6"  stdDeviation="10" flood-color="#000" flood-opacity="0.10"/>
    </filter>
    <filter id="phoneShadow" x="-30%" y="-20%" width="160%" height="140%">
      <feDropShadow dx="8"  dy="24" stdDeviation="32" flood-color="#000" flood-opacity="0.30"/>
      <feDropShadow dx="0"  dy="6"  stdDeviation="10" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <filter id="cardBlur" x="-5%" y="-8%" width="110%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#000" flood-opacity="0.07"/>
    </filter>
    <filter id="iconGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="${proj.accent}" flood-opacity="0.45"/>
    </filter>
    <filter id="baseShadow">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.15"/>
    </filter>

    <!-- Clip paths -->
    <clipPath id="screenClip">
      <rect x="${SCREEN_X}" y="${SCREEN_Y}" width="${SCREEN_W}" height="${SCREEN_H}" rx="6"/>
    </clipPath>
    <clipPath id="phoneScreenClip">
      <rect x="${PH_SCREEN_X}" y="${PH_SCREEN_Y}" width="${PH_SCREEN_W}" height="${PH_SCREEN_H}" rx="${PH_R - PH_BEZEL + 2}"/>
    </clipPath>
  </defs>

  <!-- ═══════════════════════ BACKGROUND ═══════════════════════ -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>
  <rect width="${W}" height="${H}" fill="url(#spotL)"/>
  <rect width="${W}" height="${H}" fill="url(#spotR)"/>

  <!-- Subtle grid dot pattern -->
  <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="1" cy="1" r="1" fill="#94a3b8" opacity="0.2"/>
  </pattern>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>

  <!-- ═══════════════════════ MONITOR ═══════════════════════════ -->
  <g filter="url(#monitorShadow)">
    <!-- Outer bezel -->
    <rect x="${MONITOR_X}" y="${MONITOR_Y}" width="${MONITOR_W}" height="${MONITOR_H}"
          rx="${MONITOR_R}" fill="url(#bezelGrad)"/>
    <!-- Bezel inner highlight -->
    <rect x="${MONITOR_X + 0.5}" y="${MONITOR_Y + 0.5}"
          width="${MONITOR_W - 1}" height="${MONITOR_H - 1}"
          rx="${MONITOR_R - 0.5}" fill="none"
          stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <!-- Webcam dot -->
    <circle cx="${MONITOR_X + MONITOR_W / 2}" cy="${MONITOR_Y + 7}" r="3.5"
            fill="#0f1117"/>
    <circle cx="${MONITOR_X + MONITOR_W / 2}" cy="${MONITOR_Y + 7}" r="2"
            fill="#1a2035"/>
    <!-- Screen -->
    <g clip-path="url(#screenClip)">
      <image href="${desktopB64}"
             x="${SCREEN_X}" y="${SCREEN_Y}"
             width="${SCREEN_W}" height="${SCREEN_H}"
             preserveAspectRatio="xMidYMin slice"/>
      <!-- Subtle screen glare -->
      <rect x="${SCREEN_X}" y="${SCREEN_Y}" width="${SCREEN_W / 3}" height="${SCREEN_H}"
            fill="url(#phoneReflect)" rx="0"/>
    </g>
    <!-- Bottom bezel accent line -->
    <rect x="${MONITOR_X + 20}" y="${MONITOR_Y + MONITOR_H - 6}" width="${MONITOR_W - 40}" height="2" rx="1" fill="rgba(255,255,255,0.04)"/>
  </g>

  <!-- Stand neck -->
  <polygon
    points="${MONITOR_X + MONITOR_W/2 - STAND_TOP_W/2},${STAND_Y}
            ${MONITOR_X + MONITOR_W/2 + STAND_TOP_W/2},${STAND_Y}
            ${MONITOR_X + MONITOR_W/2 + STAND_BOT_W/2},${STAND_Y + STAND_H}
            ${MONITOR_X + MONITOR_W/2 - STAND_BOT_W/2},${STAND_Y + STAND_H}"
    fill="url(#standGrad)"/>
  <!-- Stand highlight edge -->
  <line x1="${MONITOR_X + MONITOR_W/2 - STAND_TOP_W/2 + 10}" y1="${STAND_Y}"
        x2="${MONITOR_X + MONITOR_W/2 - STAND_BOT_W/2 + 30}" y2="${STAND_Y + STAND_H}"
        stroke="rgba(255,255,255,0.15)" stroke-width="2"/>

  <!-- Base -->
  <rect x="${MONITOR_X + MONITOR_W/2 - BASE_W/2}"
        y="${STAND_Y + STAND_H}"
        width="${BASE_W}" height="${BASE_H}" rx="5"
        fill="url(#baseGrad)" filter="url(#baseShadow)"/>

  <!-- ═══════════════════════ PHONE ═══════════════════════════════ -->
  <g filter="url(#phoneShadow)">
    <!-- Outer shell -->
    <rect x="${PH_X}" y="${PH_Y}" width="${PH_W}" height="${PH_H}"
          rx="${PH_R}" fill="url(#phoneBodyGrad)"/>

    <!-- Edge highlight ring (metallic frame simulation) -->
    <rect x="${PH_X + 0.5}" y="${PH_Y + 0.5}"
          width="${PH_W - 1}" height="${PH_H - 1}"
          rx="${PH_R - 0.5}" fill="none"
          stroke="url(#phoneEdgeGrad)" stroke-width="2.5"/>

    <!-- Inner frame line -->
    <rect x="${PH_X + 3}" y="${PH_Y + 3}"
          width="${PH_W - 6}" height="${PH_H - 6}"
          rx="${PH_R - 3}" fill="none"
          stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

    <!-- Volume buttons (left side) -->
    <rect x="${PH_X - 3}" y="${PH_Y + 110}" width="4" height="36" rx="2"
          fill="#2a2e3c"/>
    <rect x="${PH_X - 3}" y="${PH_Y + 156}" width="4" height="36" rx="2"
          fill="#2a2e3c"/>
    <!-- Mute toggle -->
    <rect x="${PH_X - 3}" y="${PH_Y + 72}" width="4" height="22" rx="2"
          fill="#2a2e3c"/>

    <!-- Power button (right side) -->
    <rect x="${PH_X + PH_W - 1}" y="${PH_Y + 128}" width="4" height="52" rx="2"
          fill="#2a2e3c"/>

    <!-- Screen -->
    <g clip-path="url(#phoneScreenClip)">
      <image href="${phoneB64}"
             x="${PH_SCREEN_X}" y="${PH_SCREEN_Y}"
             width="${PH_SCREEN_W}" height="${PH_SCREEN_H}"
             preserveAspectRatio="xMidYMin slice"/>
      <!-- Screen reflection -->
      <rect x="${PH_SCREEN_X}" y="${PH_SCREEN_Y}"
            width="${PH_SCREEN_W / 2}" height="${PH_SCREEN_H}"
            fill="url(#phoneReflect)"/>
    </g>

    <!-- Dynamic Island cutout -->
    <rect x="${PH_X + PH_W/2 - 52}" y="${PH_Y + PH_BEZEL + 8}"
          width="104" height="28" rx="14"
          fill="url(#phoneBodyGrad)"/>
    <!-- Camera dot inside island -->
    <circle cx="${PH_X + PH_W/2 + 28}" cy="${PH_Y + PH_BEZEL + 22}" r="5"
            fill="#0a0c10"/>
    <circle cx="${PH_X + PH_W/2 + 28}" cy="${PH_Y + PH_BEZEL + 22}" r="2.5"
            fill="#111420"/>

    <!-- Status bar: time -->
    <text x="${PH_X + 22}" y="${PH_Y + PH_BEZEL + 27}"
          font-family="-apple-system,BlinkMacSystemFont,sans-serif"
          font-size="13" font-weight="700" fill="white">9:41</text>

    <!-- Home indicator bar -->
    <rect x="${PH_X + PH_W/2 - 55}" y="${PH_Y + PH_H - PH_BEZEL - 10}"
          width="110" height="4" rx="2"
          fill="rgba(255,255,255,0.55)"/>
  </g>

  <!-- ═══════════════════════ FEATURE CARDS ════════════════════════ -->
  ${featuresSvg}

</svg>`;

      await sharp(Buffer.from(svg))
        .png({ quality: 100 })
        .toFile(proj.output);

      console.log(`✅ ${proj.id} → ${path.basename(proj.output)}`);
    } catch (err) {
      console.error(`❌ ${proj.id}:`, err.message);
    }
  }
  console.log('\nAll done!');
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

generateAll();
