"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuotation } from "../hooks/useQuotation.js";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/urban-code", label: "Urban Code" },
  { href: "/no-limits", label: "No Limits" },
  { href: "/about", label: "About" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getQuotationCount } = useQuotation();
  const quotationCount = getQuotationCount();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-charcoal/40 bg-brand-black text-brand-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-2xl uppercase tracking-tight text-brand-cream">
          Tu Marca Streetwear
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-wide text-brand-cream/80 transition-colors hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/carrito" aria-label="Cotización" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m-6 3.75h6M5.25 6h13.5A1.5 1.5 0 0 1 20.25 7.5v13.5a.75.75 0 0 1-1.086.67L15 19.5l-2.914 1.457a.75.75 0 0 1-.672 0L8.5 19.5l-3.164 1.67A.75.75 0 0 1 4.25 21V7.5A1.5 1.5 0 0 1 5.75 6Zm2.25-2.25h9a.75.75 0 0 1 .75.75V6h-10.5v-1.5a.75.75 0 0 1 .75-.75Z"
              />
            </svg>
            {quotationCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-brand-cream">
                {quotationCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={isMenuOpen}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-1 border-t border-brand-charcoal/40 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-3 font-sans text-sm uppercase tracking-wide text-brand-cream/80 transition-colors hover:bg-brand-charcoal/30 hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
