const ATTRIBUTES = [
  { title: "Cero mantención" },
  { title: "Resistente a UV, humedad y corrosión" },
  { title: "Libre de formaldehído" },
  { title: "Vida útil superior a la madera tradicional" },
  { title: "Instalación simplificada" },
  { title: "Apto para autoconstrucción" },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export default function ProductAttributes() {
  return (
    <section id="ventajas" className="bg-brand-paper px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-left font-display text-3xl uppercase tracking-tight text-brand-graphite sm:text-4xl">
          Por qué este es su cerco
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ATTRIBUTES.map((attribute) => (
            <div
              key={attribute.title}
              className="flex items-start gap-4 rounded-lg border border-brand-stone/30 bg-brand-paper p-6 shadow-sm"
            >
              <span className="text-brand-wood">
                <CheckIcon />
              </span>
              <div>
                <h3 className="font-display text-base uppercase tracking-wide text-brand-graphite">
                  {attribute.title}
                </h3>
                {attribute.description && (
                  <p className="mt-1 text-sm text-brand-stone">{attribute.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
