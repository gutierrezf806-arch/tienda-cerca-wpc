import ComponentesSection from "./ComponentesSection.tsx";

export default function ProductShowcase() {
  return (
    <section id="componentes" className="scroll-mt-20 bg-brand-graphite py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl uppercase tracking-tight text-brand-paper sm:text-4xl">
          Línea Gris Antracita
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-sm uppercase tracking-wide text-brand-paper/80">
            1.8 × 1.8 m
          </span>
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-sm uppercase tracking-wide text-brand-paper/80">
            Color Gris Antracita
          </span>
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-sm uppercase tracking-wide text-brand-paper/80">
            Sistema completo
          </span>
        </div>

        <p className="max-w-xl text-sm text-brand-paper/80">
          Sistema completo, resultado compacto y robusto.
        </p>
      </div>

      <div className="mt-6 w-full bg-brand-paper px-4 py-10 sm:px-6 lg:px-8">
        <ComponentesSection />
      </div>
    </section>
  );
}
