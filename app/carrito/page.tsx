"use client";

import Link from "next/link";
import Header from "../components/Header.jsx";
import { useQuotation } from "../hooks/useQuotation.js";

type QuotationItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
};

function buildWhatsAppMessage(items: QuotationItem[]) {
  const lines = items.map((item) => {
    const details = [item.size, item.color].filter(Boolean).join(" · ");
    return `- ${item.name}${details ? ` (${details})` : ""} x${item.quantity}`;
  });

  return ["Hola! Quiero cotizar los siguientes productos:", "", ...lines].join("\n");
}

export default function CotizacionPage() {
  const { quotationItems, removeItem, updateQuantity } = useQuotation() as {
    quotationItems: QuotationItem[];
    removeItem: (id: string, size: string, color: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  function handleSendWhatsApp() {
    if (!whatsappNumber) {
      alert(
        "Falta configurar el número de WhatsApp de la empresa (NEXT_PUBLIC_WHATSAPP_NUMBER)."
      );
      return;
    }

    const message = buildWhatsAppMessage(quotationItems);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col bg-brand-black text-brand-cream">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {quotationItems.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-24 text-center">
              <p className="text-lg font-medium text-brand-cream/80">
                Tu cotización está vacía
              </p>
              <Link
                href="/"
                className="rounded-full bg-brand-gold px-6 py-2.5 font-display text-sm uppercase text-brand-black transition-colors hover:bg-brand-red hover:text-brand-cream"
              >
                Ir al catálogo
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-8 lg:flex-row">
              <section className="flex flex-col gap-6 lg:w-[70%]">
                <h1 className="font-display text-3xl uppercase tracking-tight text-brand-cream">
                  Tu Cotización
                </h1>

                <ul className="flex flex-col gap-4">
                  {quotationItems.map((item) => (
                    <li
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex flex-col gap-4 rounded-lg border border-brand-charcoal/40 bg-brand-surface p-4 sm:flex-row sm:items-center"
                    >
                      <div className="h-24 w-24 shrink-0 rounded-md bg-brand-charcoal/30" />

                      <div className="flex flex-1 flex-col gap-1">
                        <p className="font-semibold text-brand-cream">{item.name}</p>
                        <p className="text-sm text-brand-cream/60">
                          Talla: {item.size} · Color: {item.color}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <label className="flex items-center gap-2">
                          <span className="text-xs text-brand-cream/60">Cantidad</span>
                          <input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                            className="w-16 rounded-md border border-brand-charcoal bg-brand-surface-alt px-2 py-1 text-sm text-brand-cream focus:outline-none focus:ring-2 focus:ring-brand-gold"
                          />
                        </label>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="rounded-full bg-brand-red px-4 py-1.5 font-display text-xs uppercase tracking-wide text-brand-cream transition-colors hover:bg-brand-red/80"
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <aside className="flex flex-col gap-4 rounded-lg border border-brand-charcoal/40 bg-brand-surface p-6 lg:w-[30%]">
                <h2 className="font-display text-lg uppercase text-brand-cream">
                  Resumen de Cotización
                </h2>

                <p className="text-sm text-brand-cream/70">
                  {quotationItems.reduce((count, item) => count + item.quantity, 0)}{" "}
                  producto(s) seleccionados
                </p>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="mt-2 w-full rounded-full bg-brand-gold px-4 py-3 font-display text-sm uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-red hover:text-brand-cream"
                >
                  Enviar cotización por WhatsApp
                </button>

                <Link
                  href="/"
                  className="w-full rounded-full border border-brand-charcoal px-4 py-3 text-center text-sm font-medium text-brand-cream transition-colors hover:border-brand-gold hover:text-brand-gold"
                >
                  Continuar Comprando
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
