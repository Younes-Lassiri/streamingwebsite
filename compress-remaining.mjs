import sharp from "sharp";
import fs from "fs";
const files = [
  { input: "./public/assets/sports-bg.webp", width: 1200 },
  { input: "./public/assets/adult-section.webp", width: 900 },
  { input: "./public/assets/hero-bg.webp", width: 1200 },
];
for (const f of files) {
  if (!fs.existsSync(f.input)) { console.log(`Missing: ${f.input}`); continue; }
  const tmp = f.input + ".tmp";
  await sharp(f.input).resize(f.width, null, { withoutEnlargement: true }).webp({ quality: 68 }).toFile(tmp);
  fs.renameSync(tmp, f.input);
  console.log(`Compressed: ${f.input}`);
}
console.log("Done!");
