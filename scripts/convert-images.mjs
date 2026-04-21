import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = new URL('../public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const QUALITY = 82;
const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

const files = await readdir(PUBLIC_DIR);
const imageFiles = files.filter(f => EXTENSIONS.includes(extname(f).toLowerCase()));

console.log(`Converting ${imageFiles.length} images to WebP (quality ${QUALITY})...\n`);

let totalOriginal = 0;
let totalConverted = 0;

for (const file of imageFiles) {
  const inputPath = join(PUBLIC_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(PUBLIC_DIR, outputName);

  try {
    const info = await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const { size: origSize } = await (await import('fs')).promises.stat(inputPath);
    const savedPct = (((origSize - info.size) / origSize) * 100).toFixed(1);

    totalOriginal += origSize;
    totalConverted += info.size;

    console.log(`✓ ${file} → ${outputName}  ${(origSize / 1024).toFixed(0)}KB → ${(info.size / 1024).toFixed(0)}KB  (-${savedPct}%)`);

    await unlink(inputPath);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

const totalSaved = totalOriginal - totalConverted;
console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalConverted / 1024 / 1024).toFixed(1)}MB  saved ${(totalSaved / 1024 / 1024).toFixed(1)}MB (${(totalSaved / totalOriginal * 100).toFixed(1)}%)`);
