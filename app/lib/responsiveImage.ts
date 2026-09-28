type ImageSize = { width: number; height: number };

/**
 * Arma src/srcSet/width/height para una imagen que tiene una versión "grande"
 * y una "móvil" generadas por scripts/optimize-images.mjs (mismo nombre base,
 * sufijo -{ancho}w.webp). Los anchos deben ser el ancho real del archivo
 * generado (puede ser menor al pedido si el original era más chico).
 */
export function responsiveImage(basePath: string, large: ImageSize, mobile: ImageSize) {
  const base = basePath.replace(/\.[^.]+$/, "");
  const largeSrc = `${base}-${large.width}w.webp`;
  const mobileSrc = `${base}-${mobile.width}w.webp`;

  return {
    src: largeSrc,
    srcSet: `${mobileSrc} ${mobile.width}w, ${largeSrc} ${large.width}w`,
    width: large.width,
    height: large.height,
  };
}
