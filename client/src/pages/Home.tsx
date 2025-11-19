import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PriceCalculator from "@/components/PriceCalculator";
import ComparisonSection from "@/components/ComparisonSection";
import ServiceDetailsSection from "@/components/ServiceDetailsSection";
import FlowSection from "@/components/FlowSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        
        <FeaturesSection />
        <PriceCalculator />
        <FlowSection />
        <ComparisonSection />
        <ServiceDetailsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
