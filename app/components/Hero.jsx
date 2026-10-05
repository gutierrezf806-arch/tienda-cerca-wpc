import WhatsAppButton from "./WhatsAppButton.jsx";
import { responsiveImage } from "../lib/responsiveImage";

const heroImage = responsiveImage(
  "/images/hero.png",
  { width: 1944, height: 809, fileWidth: 2400 },
  { width: 800, height: 333 }
);

export default function Hero() {
  return (
    <section className="relative flex h-[50vh] items-center overflow-hidden bg-brand-graphite md:h-[70vh]">
      <img
        src={heroImage.src}
        srcSet={heroImage.srcSet}
        sizes="100vw"
        width={heroImage.width}
        height={heroImage.height}
        alt="Cerco WPC Full Privacy instalado"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="auto"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-brand-graphite/50" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 sm:gap-6 lg:px-8">
        <span className="font-sans text-[22px] uppercase tracking-wide text-brand-wood">
          Panel de cerco WPC
        </span>

        <h1 className="max-w-2xl font-display uppercase leading-none tracking-tightest text-5xl text-brand-paper md:text-7xl">
          Un cerco, una sola vez
        </h1>

        <p className="max-w-xl font-sans text-[22px] text-brand-paper/80">
          Resistente al paso del tiempo y al clima de la Patagonia Fácil
          instalación, sin complicaciones
        </p>

        <WhatsAppButton
          message="Hola! Quiero una asesoría para instalar el cerco Línea Gris Antracita"
          className="mt-2 rounded-full bg-brand-wood px-8 py-3 font-display text-sm uppercase text-brand-paper transition-colors hover:bg-brand-green sm:px-10 sm:py-4 sm:text-base"
        >
          Asesoría personalizada
        </WhatsAppButton>
      </div>
    </section>
  );
}
