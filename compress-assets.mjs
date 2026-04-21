import sharp from "sharp";
import fs from "fs";
import path from "path";

const assetsDir = "./public/assets";

const images = [
  { file: "show-from.webp", width: 600 },
  { file: "show-americanbeauty.webp", width: 600 },
  { file: "show-sopranos.webp", width: 600 },
  { file: "show-familyguy.webp", width: 600 },
  { file: "whatsapp-reviews-2.webp", width: 800 },
  { file: "whatsapp-reviews-1.webp", width: 800 },
  { file: "show-rickmorty.webp", width: 600 },
  { file: "film-deepstate.webp", width: 600 },
  { file: "film-horsepower.webp", width: 600 },
  { file: "film-shark.webp", width: 600 },
  { file: "film-harrypotter.webp", width: 600 },
  { file: "servers-worldwide.webp", width: 900 },
  { file: "sports-leagues.webp", width: 800 },
  { file: "adult-section.webp", width: 800 },
  { file: "hero-bg.webp", width: 1200 },
];

for (const img of images) {
  const input = path.join(assetsDir, img.file);

  if (!fs.existsSync(input)) {
    console.log(`Missing: ${img.file}`);
    continue;
  }

  await sharp(input)
    .resize(img.width, null, { withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(input + ".tmp");

    const finalOutput = input.replace(".webp", "-opt.webp");
    fs.renameSync(input + ".tmp", finalOutput);

  console.log(`Optimized: ${img.file}`);
}

console.log("All done!");