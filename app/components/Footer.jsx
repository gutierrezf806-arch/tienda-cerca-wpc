import Link from "next/link";
import Wordmark from "./Wordmark.jsx";

const linkSections = [
  {
    title: "Ayuda",
    links: [{ href: "/contacto", label: "Contacto" }],
  },
];

const socialLinks = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-5 w-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-stone/30 bg-brand-graphite px-6 pb-6 pt-12 text-brand-paper">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl">
              <Wordmark />
            </Link>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-paper/70 transition-colors hover:text-brand-wood"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            {linkSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h3 className="font-display text-sm uppercase tracking-wide text-brand-wood">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-brand-paper/70 transition-colors hover:text-brand-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-brand-stone/30 pt-6">
          <p className="text-center text-xs text-brand-paper/40">
            © 2026 Australis Haus. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
