import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col bg-brand-paper text-brand-graphite">
        <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl uppercase tracking-tight text-brand-graphite sm:text-4xl">
            Australis Haus
          </h1>

          <p className="mt-6 text-base leading-relaxed text-brand-stone sm:text-lg">
            Importamos cercos WPC con certificación CE directo desde fábrica y los
            traemos a Punta Arenas. Un sistema durable, de instalación simple y con
            asesoría local en Punta Arenas.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
