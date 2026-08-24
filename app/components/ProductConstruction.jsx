export default function ProductConstruction() {
  return (
    <section id="construccion" className="bg-brand-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <img
          src="/images/03-perfil-tablon.png"
          alt="Corte transversal del perfil del tablón, mostrando su construcción hueca co-extruida"
          className="w-full rounded-lg object-cover"
        />

        <div className="flex flex-col gap-5">
          <h2 className="font-display text-3xl uppercase tracking-tight text-brand-graphite sm:text-4xl">
            Perfil hueco co-extruido
          </h2>

          <p className="text-base text-brand-stone">
            Liviano. Sólido. Sin flexión.
          </p>
        </div>
      </div>
    </section>
  );
}
