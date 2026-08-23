"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuotation } from "../hooks/useQuotation.js";

function formatCLP(price) {
  return `$${Math.round(price).toLocaleString("es-CL")}`;
}

export default function ProductCard({ slug, image, name, description, price, category }) {
  const { addItem } = useQuotation();
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToQuotation(event) {
    event.preventDefault();
    event.stopPropagation();

    addItem({ id: slug, name, price });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  }

  return (
    <Link
      href={`/product/${slug}`}
      className="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-brand-charcoal/40 bg-brand-surface transition-colors hover:border-brand-gold/60"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-brand-charcoal/30">
        {category && (
          <span className="absolute left-3 top-3 rounded bg-brand-black/80 px-2 py-1 text-xs uppercase text-brand-gold">
            {category}
          </span>
        )}
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-brand-cream/50">
            Sin imagen
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <h3 className="font-display text-lg uppercase text-brand-cream">
            {name}
          </h3>
          <p className="truncate text-xs text-brand-cream/60 sm:text-sm">
            {description}
          </p>
        </div>

        <p className="font-sans text-lg font-bold text-brand-gold">
          {formatCLP(price)}
        </p>

        <button
          type="button"
          onClick={handleAddToQuotation}
          className={`mt-auto w-full rounded border py-2 text-xs font-display uppercase tracking-wide transition-colors ${
            isAdded
              ? "border-brand-gold bg-brand-gold text-brand-black"
              : "border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-brand-cream"
          }`}
        >
          {isAdded ? "¡Agregado!" : "Agregar a Cotización"}
        </button>
      </div>
    </Link>
  );
}
