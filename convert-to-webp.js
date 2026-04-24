const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "public/assets");
const supported = [".png", ".jpg", ".jpeg"];

async function convertFolder(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      await convertFolder(fullPath);
      continue;
    }

    const ext = path.extname(item.name).toLowerCase();
    if (!supported.includes(ext)) continue;

    const outputPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

    try {
      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      console.log(`Converted: ${fullPath} -> ${outputPath}`);
    } catch (err) {
      console.error(`Failed: ${fullPath}`, err.message);
    }
  }
}

convertFolder(inputDir).then(() => {
  console.log("Done.");
});

ro