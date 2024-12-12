import { HeroSection } from "@/components/sections/hero-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { generateStructuredData } from "@/lib/structured-data";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <CalculatorSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}