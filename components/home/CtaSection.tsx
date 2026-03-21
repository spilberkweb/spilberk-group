"use client";

import { bg, border, faint, muted, label, sectionContainer, ctaBtn, ghostBtn, getBrands } from "./constants";

import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();
  const brands = getBrands(t);

  return (
    <section style={{ background: "linear-gradient(135deg, #12094A 0%, #0A0428 100%)", borderTop: `1px solid rgba(200,169,110,0.12)` }}>
      <div style={{ ...sectionContainer, textAlign: "center", paddingTop: 80, paddingBottom: 80 }}>
        <span style={{ ...label, textAlign: "center", display: "block" }}>{t.cta.label}</span>
        <h2 style={{ fontSize: "clamp(36px, 8vw, 56px)", fontWeight: 700, marginTop: 12, marginBottom: 18, lineHeight: 1.15 }}>
          {t.cta.title}
        </h2>
        <p style={{ fontSize: "clamp(16px, 2.5vw, 18px)", color: muted, maxWidth: 580, margin: "0 auto 36px", lineHeight: 1.7 }}>
          {t.cta.desc}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-[14px] mb-[40px]">
          <Button onClick={() => window.open("https://www.avantfunds.cz/fondy/spilberk-investicni-fond-sicav-a-s/", "_blank")} style={ctaBtn} className="w-full md:w-auto justify-center">{t.cta.invest}</Button>
          <Button onClick={() => window.location.href="mailto:invest@spilberk.com"} style={ghostBtn} className="w-full md:w-auto justify-center">invest@spilberk.com</Button>
        </div>

        {/* Mini brand tiles */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch md:items-center gap-[20px] mt-[30px]">
          {brands.map((b, i) => (
             <div key={i} onClick={() => window.open(b.realUrl, "_blank")} className="flex items-center gap-[8px] bg-white/5 border border-white/5 rounded-xl px-[18px] py-[10px] cursor-pointer hover:bg-white/10 transition-colors">
              <div style={{ width: 32, height: 32, borderRadius: 6, background: b.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: bg }}>{b.icon}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{b.name}</div>
                <div style={{ fontSize: 10, color: faint }}>{b.url}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
