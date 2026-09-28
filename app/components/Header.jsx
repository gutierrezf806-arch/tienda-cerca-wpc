"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton.jsx";
import Wordmark from "./Wordmark.jsx";

const navLinks = [
  { href: "/#ventajas", label: "Ventajas" },
  { href: "/#componentes", label: "Componentes" },
  { href: "/#construccion", label: "Instalación" },
  { href: "/about", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-stone/30 bg-brand-graphite text-brand-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl">
          <Wordmark />
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-base uppercase tracking-wide text-brand-paper/80 transition-colors hover:text-brand-wood"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <WhatsAppButton className="hidden rounded-full bg-brand-wood px-5 py-2 font-display text-[14.4px] uppercase tracking-wide text-brand-paper transition-colors hover:bg-brand-green md:inline-block">
            Consultar por WhatsApp
          </WhatsAppButton>

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
        <nav className="flex flex-col gap-1 border-t border-brand-stone/30 px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-md px-2 py-3 font-sans text-base uppercase tracking-wide text-brand-paper/80 transition-colors hover:bg-brand-stone/20 hover:text-brand-wood"
            >
              {link.label}
            </Link>
          ))}
          <WhatsAppButton className="mt-2 w-full rounded-full bg-brand-wood px-5 py-2.5 font-display text-base uppercase tracking-wide text-brand-paper transition-colors hover:bg-brand-green">
            Consultar por WhatsApp
          </WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
