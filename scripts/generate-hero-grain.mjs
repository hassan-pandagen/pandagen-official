import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

// Original self-authored hero grain. Rasterize at authoring time so browsers
// tile a small image rather than calculate SVG turbulence during first paint.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
await mkdir('public/textures', { recursive: true });
await sharp(Buffer.from(svg)).webp({ lossless: true }).toFile('public/textures/hero-grain.webp');
console.log('Generated hero grain');
