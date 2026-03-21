import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import NumbersStrip from "@/components/home/NumbersStrip";
import EcosystemSection from "@/components/home/EcosystemSection";
import AboutSection from "@/components/home/AboutSection";
import KeyParametersSection from "@/components/home/KeyParametersSection";
import CtaSection from "@/components/home/CtaSection";
import Footer from "@/components/home/Footer";
import { bg } from "@/components/home/constants";
import { LanguageProvider } from "@/components/home/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: bg, color: "white", minHeight: "100vh", overflowX: "hidden" }}>
        <Navbar />
        <HeroSection />
        <NumbersStrip />
        <EcosystemSection />
        <AboutSection />
        <KeyParametersSection />
        <CtaSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
