import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import ProductAttributes from "./components/ProductAttributes.jsx";
import ProductShowcase from "./components/ProductShowcase.jsx";
import ProductConstruction from "./components/ProductConstruction.jsx";
import ClosingCta from "./components/ClosingCta.jsx";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />
        <ProductAttributes />
        <ProductShowcase />
        <ProductConstruction />
        <ClosingCta />
      </main>

      <Footer />
    </div>
  );
}
