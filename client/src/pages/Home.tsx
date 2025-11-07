import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
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
        <PricingSection />

        <FlowSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
