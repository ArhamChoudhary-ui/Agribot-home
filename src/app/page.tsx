import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturesInteractive from "@/components/FeaturesInteractive";
import BenefitsGrid from "@/components/BenefitsGrid";
import TrustSection from "@/components/TrustSection";
import DemoSection from "@/components/DemoSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-earth-100 font-sans text-earth-900 selection:bg-accent-500/30">
      <Hero />
      <About />
      <FeaturesInteractive />
      <BenefitsGrid />
      <TrustSection />
      <DemoSection />
      <ContactFooter />
    </div>
  );
}
