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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skupina SPILBERK | Nemovitostní ekosystém",
  description: "Česká nemovitostní skupina pokrývající celý životní cyklus nemovitosti — od developmentu přes správu a nájemní bydlení až po investiční zhodnocení. 10+ let na trhu, 2,6+ mld CZK pod správou.",
  keywords: ["nemovitosti", "investice", "development", "správa nemovitostí", "nájemní bydlení", "SPILBERK fund", "SICAV"],
  authors: [{ name: "Skupina SPILBERK" }],
  metadataBase: new URL("https://www.spilberk.com"),
  openGraph: {
    title: "Skupina SPILBERK | Nemovitostní ekosystém",
    description: "Budujeme. Spravujeme. Zhodnocujeme. Česká nemovitostní skupina s 10+ lety na trhu.",
    url: "https://www.spilberk.com",
    siteName: "Skupina SPILBERK",
    images: [
      {
        url: "/spilberk-logo.png",
        width: 1200,
        height: 630,
        alt: "Skupina SPILBERK Logo",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skupina SPILBERK | Nemovitostní ekosystém",
    description: "Budujeme. Spravujeme. Zhodnocujeme. Česká nemovitostní skupina s 10+ lety na trhu.",
    images: ["/spilberk-logo.png"],
  },
};

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
