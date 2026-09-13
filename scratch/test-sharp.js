const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createMockup({
  desktopPath,
  phonePath,
  outputPath,
  accent = '#e50914',
  features = []
}) {
  const width = 1000;
  const height = 1333;

  // Read images and convert to base64
  const desktopBuffer = await sharp(desktopPath)
    .resize(760, 475, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();
  const desktopBase64 = `data:image/png;base64,${desktopBuffer.toString('base64')}`;

  const phoneBuffer = await sharp(phonePath)
    .resize(340, 580, { fit: 'cover', position: 'top' })
    .png()
    .toBuffer();
  const phoneBase64 = `data:image/png;base64,${phoneBuffer.toString('base64')}`;

  // Build features SVG elements
  const featuresSvg = features.map((f, i) => {
    const y = 820 + (i * 125);
    const safeTitle = f.title.replace(/&/g, '&amp;');
    const safeDesc = f.desc.replace(/&/g, '&amp;');
    return `
      <g transform="translate(490, ${y})">
        <!-- Icon background -->
        <rect width="60" height="60" rx="16" fill="${accent}" filter="url(#iconShadow)"/>
        <!-- Icon SVG content -->
        <g transform="translate(16, 16) scale(1.15)" stroke="#ffffff" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          ${f.iconSvg}
        </g>
        <!-- Title & description -->
        <text x="78" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="20" font-weight="700" fill="#111827">${safeTitle}</text>
        <text x="78" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14.5" font-weight="500" fill="#4b5563">${safeDesc}</text>
      </g>
    `;
  }).join('');

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <!-- Gradients -->
      <radialGradient id="bgGrad" cx="50%" cy="35%" r="65%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#f5f6f8"/>
        <stop offset="100%" stop-color="#eaedf0"/>
      </radialGradient>
      
      <linearGradient id="standGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#a0a5ad"/>
        <stop offset="100%" stop-color="#767c85"/>
      </linearGradient>

      <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#cfd3d9"/>
        <stop offset="100%" stop-color="#9da3ac"/>
      </linearGradient>

      <!-- Filters / Shadows -->
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="25" stdDeviation="30" flood-color="#000000" flood-opacity="0.18"/>
      </filter>

      <filter id="monitorShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="28" flood-color="#000000" flood-opacity="0.25"/>
      </filter>

      <filter id="phoneShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="28" stdDeviation="32" flood-color="#000000" flood-opacity="0.32"/>
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.18"/>
      </filter>

      <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000000" flood-opacity="0.12"/>
      </filter>

      <!-- Clip Paths -->
      <clipPath id="monitorClip">
        <rect x="120" y="70" width="760" height="475" rx="6"/>
      </clipPath>

      <clipPath id="phoneClip">
        <rect x="75" y="665" width="340" height="580" rx="36"/>
      </clipPath>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>

    <!-- Subtle Ambient Glow -->
    <circle cx="500" cy="300" r="380" fill="${accent}" opacity="0.07" filter="blur(60px)"/>

    <!-- ================= MONITOR MOCKUP ================= -->
    <!-- Monitor Stand -->
    <polygon points="430,570 570,570 590,640 410,640" fill="url(#standGrad)"/>
    <rect x="350" y="638" width="300" height="14" rx="5" fill="url(#baseGrad)" filter="url(#cardShadow)"/>

    <!-- Monitor Outer Bezel -->
    <rect x="106" y="55" width="788" height="515" rx="18" fill="#111317" filter="url(#monitorShadow)"/>
    <!-- Inner bezel border highlight -->
    <rect x="107" y="56" width="786" height="513" rx="17" fill="none" stroke="#2c3038" stroke-width="1.5"/>
    <!-- Webcam dot -->
    <circle cx="500" cy="62" r="3" fill="#232730"/>

    <!-- Screen Content -->
    <g clip-path="url(#monitorClip)">
      <image href="${desktopBase64}" x="120" y="70" width="760" height="475" preserveAspectRatio="xMidYMin slice"/>
    </g>

    <!-- ================= PHONE MOCKUP ================= -->
    <g filter="url(#phoneShadow)">
      <!-- Phone Outer Shell -->
      <rect x="62" y="650" width="366" height="610" rx="46" fill="#121418"/>
      <rect x="62" y="650" width="366" height="610" rx="46" fill="none" stroke="#353a45" stroke-width="3"/>
      
      <!-- Phone Screen -->
      <g clip-path="url(#phoneClip)">
        <image href="${phoneBase64}" x="75" y="665" width="340" height="580" preserveAspectRatio="xMidYMin slice"/>
        
        <!-- Status Bar -->
        <text x="110" y="694" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#ffffff" text-anchor="middle">9:41</text>
        
        <!-- Dynamic Island -->
        <rect x="180" y="674" width="130" height="26" rx="13" fill="#000000"/>
        <circle cx="282" cy="687" r="4.5" fill="#121927"/>
        <circle cx="210" cy="687" r="3.5" fill="#07090e"/>

        <!-- Bottom Home Indicator -->
        <rect x="185" y="1232" width="120" height="4" rx="2" fill="#ffffff" opacity="0.75"/>
      </g>
    </g>

    <!-- ================= FEATURES PANEL ================= -->
    ${featuresSvg}

  </svg>
  `;

  await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toFile(outputPath);

  console.log(`Saved mockup thumbnail to ${outputPath}`);
}

// Test with OG Burger
createMockup({
  desktopPath: path.join(__dirname, '../public/projects/og.png'),
  phonePath: path.join(__dirname, '../public/projects/ogPhone.png'),
  outputPath: path.join(__dirname, '../public/projects/og_thumb.png'),
  accent: '#e50914',
  features: [
    {
      iconSvg: '<rect width="18" height="14" x="3" y="4" rx="2"/><path d="M7 20h10"/><path d="M12 18v2"/>',
      title: 'Modern & Responsive',
      desc: 'Seamless experience across all devices.'
    },
    {
      iconSvg: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
      title: 'Bold & Readable',
      desc: 'Strong typography and clear hierarchy.'
    },
    {
      iconSvg: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      title: 'Engaging & Action-Oriented',
      desc: 'Clear CTAs and visuals that drive cravings.'
    }
  ]
}).catch(console.error);
