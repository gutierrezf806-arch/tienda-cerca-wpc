import WhatsAppButton from "./WhatsAppButton.jsx";
import { responsiveImage } from "../lib/responsiveImage";

const ambienteImage = responsiveImage(
  "/images/04-ambiente-piscina.jpg",
  { width: 1600, height: 557 },
  { width: 800, height: 278 }
);

export default function ClosingCta() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-brand-graphite px-4 py-20 text-center sm:px-6 lg:px-8">
      <img
        src={ambienteImage.src}
        srcSet={ambienteImage.srcSet}
        sizes="100vw"
        width={ambienteImage.width}
        height={ambienteImage.height}
        alt="Cerco WPC Full Privacy en un espacio con piscina"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-brand-graphite/70" />

      <div className="relative flex flex-col items-center gap-6">
        <h2 className="max-w-2xl font-display text-3xl normal-case tracking-tight text-brand-paper sm:text-4xl">
          Disponible en Punta Arenas
        </h2>

        <WhatsAppButton
          message="Hola! Quiero una asesoría para instalar el cerco Línea Gris Antracita"
          className="rounded-full bg-brand-green px-8 py-3 font-display text-sm uppercase text-brand-paper transition-colors hover:bg-brand-wood sm:px-10 sm:py-4 sm:text-base"
        >
          Diseñemos tu proyecto
        </WhatsAppButton>
      </div>
    </section>
  );
}
