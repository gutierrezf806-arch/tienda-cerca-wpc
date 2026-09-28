type ImageSize = {
  width: number;
  height: number;
  /**
   * Ancho pedido al script de optimización (el que queda en el nombre del
   * archivo). Solo hace falta indicarlo si es distinto de `width` — pasa
   * cuando la foto original era más chica que ese ancho y sharp no la
   * agrandó (withoutEnlargement), como con hero.png o poste-placa.png.
   */
  fileWidth?: number;
};

/**
 * Arma src/srcSet/width/height para una imagen que tiene una versión "grande"
 * y una "móvil" generadas por scripts/optimize-images.mjs (mismo nombre base,
 * sufijo -{ancho}w.webp).
 */
export function responsiveImage(basePath: string, large: ImageSize, mobile: ImageSize) {
  const base = basePath.replace(/\.[^.]+$/, "");
  const largeSrc = `${base}-${large.fileWidth ?? large.width}w.webp`;
  const mobileSrc = `${base}-${mobile.fileWidth ?? mobile.width}w.webp`;

  return {
    src: largeSrc,
    srcSet: `${mobileSrc} ${mobile.width}w, ${largeSrc} ${large.width}w`,
    width: large.width,
    height: large.height,
  };
}
