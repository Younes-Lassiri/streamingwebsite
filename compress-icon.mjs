import sharp from "sharp";
await sharp("./public/assets/icon.png")
  .resize(512, 512, { withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile("./public/icon.webp");
await sharp("./public/assets/icon.png")
  .resize(512, 512, { withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile("./public/assets/icon.webp");
console.log("Icon compressed!");
