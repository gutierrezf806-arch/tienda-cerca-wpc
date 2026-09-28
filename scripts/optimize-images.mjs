// Genera versiones WebP (grande + móvil) de las imágenes del sitio a partir
// de los originales en imagenes-originales/, y las deja listas en
// public/images/. No modifica ni borra los originales.
//
// Uso: node scripts/optimize-images.mjs

import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SOURCE_DIR = path.join(ROOT, "imagenes-originales");
const OUTPUT_DIR = path.join(ROOT, "public", "images");
const MOBILE_WIDTH = 800;
const MOBILE_QUALITY = 80;

// Cada imagen usada en el sitio, con su ancho grande y calidad según categoría:
//   hero               -> 2400px
//   fotos grandes       -> 1600px
//   componentes y pasos -> 1200px
const IMAGES = [
  { file: "hero.png", largeWidth: 2400, largeQuality: 84 },
  { file: "04-ambiente-piscina.jpg", largeWidth: 1600, largeQuality: 84 },
  { file: "poste-placa.png", largeWidth: 1600, largeQuality: 84 },
  { file: "paso-1-1.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "paso-1-2.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "paso-1-3.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "paso-2-1.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "paso-2-2.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "paso-2-3.jpg", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-01-perfil-terminacion.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-02-tapa-poste.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-03-ensamble-elementos.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-04-tablones-wpc.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-05-poste-cerca.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-06-base-poste-cerca.png", largeWidth: 1200, largeQuality: 83 },
  { file: "componente-07-vista-ensamble.png", largeWidth: 1200, largeQuality: 83 },
];

async function resizeTo(inputPath, outputPath, width, quality) {
  const image = sharp(inputPath).resize({ width, withoutEnlargement: true });
  await image.webp({ quality }).toFile(outputPath);
  return sharp(outputPath).metadata();
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const allSourceFiles = await readdir(SOURCE_DIR);
  const usedFiles = new Set(IMAGES.map((i) => i.file));
  const unusedFiles = allSourceFiles.filter((f) => !usedFiles.has(f));

  const results = [];

  for (const { file, largeWidth, largeQuality } of IMAGES) {
    const inputPath = path.join(SOURCE_DIR, file);
    const base = file.replace(/\.[^.]+$/, "");

    const originalSize = (await stat(inputPath)).size;

    const largeOut = path.join(OUTPUT_DIR, `${base}-${largeWidth}w.webp`);
    const mobileOut = path.join(OUTPUT_DIR, `${base}-${MOBILE_WIDTH}w.webp`);

    const largeMeta = await resizeTo(inputPath, largeOut, largeWidth, largeQuality);
    const mobileMeta = await resizeTo(inputPath, mobileOut, MOBILE_WIDTH, MOBILE_QUALITY);

    const largeSize = (await stat(largeOut)).size;
    const mobileSize = (await stat(mobileOut)).size;

    results.push({
      file,
      originalSize,
      large: { path: path.basename(largeOut), width: largeMeta.width, height: largeMeta.height, size: largeSize },
      mobile: { path: path.basename(mobileOut), width: mobileMeta.width, height: mobileMeta.height, size: mobileSize },
    });
  }

  console.log(JSON.stringify({ results, unusedFiles }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
