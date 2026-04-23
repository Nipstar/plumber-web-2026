#!/usr/bin/env node
// Convert all PNG images in public/images/ to WebP + generate apple-icon.png
// Usage: node scripts/convert-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const APP_DIR = path.join(__dirname, '..', 'app');

async function convertDirectory(dir) {
  const files = fs.readdirSync(dir);
  let savedBytes = 0;

  for (const file of files) {
    if (!file.toLowerCase().endsWith('.png')) continue;

    const src = path.join(dir, file);
    const webpName = file.replace(/\.png$/i, '.webp');
    const dest = path.join(dir, webpName);

    const srcStat = fs.statSync(src);

    // icon.png and logo.png have transparency — use lossless-ish high quality
    const isLogo = /^(icon|logo)\.png$/i.test(file);
    const quality = isLogo ? 95 : 82;

    await sharp(src)
      .webp({ quality, effort: 6 })
      .toFile(dest);

    const destStat = fs.statSync(dest);
    const saved = srcStat.size - destStat.size;
    savedBytes += saved;

    const pctSaved = ((saved / srcStat.size) * 100).toFixed(1);
    console.log(`${file.padEnd(30)} ${formatBytes(srcStat.size).padStart(10)} -> ${formatBytes(destStat.size).padStart(10)}  (-${pctSaved}%)`);

    // Delete original PNG
    fs.unlinkSync(src);
  }

  console.log(`\nTotal saved: ${formatBytes(savedBytes)}`);
}

async function generateAppleIcon() {
  const src = path.join(IMAGES_DIR, 'icon.webp');
  if (!fs.existsSync(src)) {
    console.log('icon.webp not found — skipping apple-icon');
    return;
  }

  // Apple requires PNG, 180x180
  const dest = path.join(APP_DIR, 'apple-icon.png');
  await sharp(src)
    .resize(180, 180, { fit: 'contain', background: { r: 11, g: 17, b: 32, alpha: 1 } })
    .png()
    .toFile(dest);

  console.log(`\nGenerated apple-icon.png (180x180, navy background)`);
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

(async () => {
  console.log('Converting PNGs to WebP in public/images/\n');
  await convertDirectory(IMAGES_DIR);
  await generateAppleIcon();
  console.log('\nDone.');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
