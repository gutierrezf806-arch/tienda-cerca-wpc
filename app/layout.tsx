import type { Metadata } from "next";
import { Archivo, Karla, Poppins } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Australis Haus | Cercos WPC en Punta Arenas",
  description:
    "Full Privacy: panel de cerco WPC (madera plástica) resistente y de fácil instalación, fabricado en Punta Arenas. Consulta por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${karla.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
