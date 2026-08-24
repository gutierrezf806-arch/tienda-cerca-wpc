export default function ProductShowcase() {
  return (
    <section className="bg-brand-graphite px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl uppercase tracking-tight text-brand-paper sm:text-4xl">
          Línea Gris Antracita
        </h2>

        <p className="max-w-xl text-base text-brand-paper/80">
          Sistema completo, resultado compacto y robusto.
        </p>

        <img
          src="/images/02-panel-producto.png"
          alt="Panel de cerco WPC Línea Gris Antracita"
          className="w-full rounded-lg object-cover"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-xs uppercase tracking-wide text-brand-paper/80">
            1.8 × 1.8 m
          </span>
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-xs uppercase tracking-wide text-brand-paper/80">
            Color Gris Antracita
          </span>
          <span className="rounded-full border border-brand-stone/50 px-4 py-1.5 text-xs uppercase tracking-wide text-brand-paper/80">
            Sistema completo
          </span>
        </div>
      </div>
    </section>
  );
}
