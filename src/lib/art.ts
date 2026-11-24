// Generated artwork: speaker avatars and sponsor wordmarks as inline SVG.
// Deterministic, so every build produces the same picture for the same name.

const palettes = [
  ["#c6ff3d", "#1d3b00"],
  ["#ff5ca8", "#3d0b24"],
  ["#58c7ff", "#062c42"],
  ["#ffb347", "#3d2300"],
  ["#ff7a59", "#3a1409"],
  ["#4ef0c0", "#003a2c"],
];

function hash(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function escapeXml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** A square abstract portrait with the speaker's initials. */
export function avatarSvg(name: string, label: string): string {
  const h = hash(name);
  const [accent, deep] = palettes[h % palettes.length];
  const shape = (h >>> 4) % 3;
  const rot = (h >>> 8) % 360;
  const cx = 30 + ((h >>> 12) % 40);
  const cy = 30 + ((h >>> 16) % 40);
  const shapes = [
    `<circle cx="${cx}" cy="${cy}" r="38" fill="${accent}" opacity=".9"/>`,
    `<rect x="18" y="18" width="64" height="64" rx="6" fill="${accent}" opacity=".9" transform="rotate(${rot} 50 50)"/><rect x="34" y="34" width="32" height="32" fill="${deep}" transform="rotate(${rot + 20} 50 50)"/>`,
    `<path d="M0 ${cy} Q50 ${cx - 30} 100 ${cy + 10} V100 H0Z" fill="${accent}" opacity=".9"/><circle cx="${cx}" cy="28" r="12" fill="${accent}"/>`,
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="${escapeXml(label)}"><title>${escapeXml(label)}</title><rect width="100" height="100" fill="${deep}"/>${shapes[shape]}<rect x="8" y="70" width="34" height="22" rx="6" fill="#0b0b12" opacity=".88"/><text x="25" y="86" text-anchor="middle" font-family="Space Grotesk Variable, sans-serif" font-weight="600" font-size="13" fill="#ffffff">${escapeXml(initials(name))}</text></svg>`;
}

/** A simple wordmark: a geometric glyph and the company name. */
export function wordmarkSvg(name: string): string {
  const h = hash(name);
  const glyph = h % 4;
  const width = 42 + Math.ceil(name.length * 11.2);
  const glyphs = [
    `<circle cx="16" cy="20" r="11" fill="currentColor"/><circle cx="16" cy="20" r="5" fill="var(--bg-raised)"/>`,
    `<rect x="5" y="9" width="22" height="22" rx="4" fill="currentColor" transform="rotate(45 16 20)"/>`,
    `<path d="M5 31 L16 8 L27 31Z" fill="currentColor"/>`,
    `<rect x="5" y="9" width="9" height="22" rx="2" fill="currentColor"/><rect x="18" y="15" width="9" height="16" rx="2" fill="currentColor"/>`,
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} 40" height="40" role="img" aria-label="${escapeXml(name)} logo"><title>${escapeXml(name)}</title>${glyphs[glyph]}<text x="38" y="27" font-family="Space Grotesk Variable, sans-serif" font-weight="600" font-size="20" letter-spacing="-0.5" fill="currentColor">${escapeXml(name)}</text></svg>`;
}
