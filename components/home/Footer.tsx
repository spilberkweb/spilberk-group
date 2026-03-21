"use client";

import { bg, border, faint, sectionContainer, gold, goldL } from "./constants";
import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" style={{ borderTop: `1px solid ${border}` }}>
      <div style={{ ...sectionContainer, paddingBottom: 30 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 30, height: 30, background: `linear-gradient(135deg, ${gold}, ${goldL})`, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: bg, fontSize: 13 }}>S</div>
              <img src="/spilberk-logo-white.png" alt="SPILBERK" style={{ height: 28 }} />
            </div>
            <p style={{ fontSize: 10.5, color: faint, lineHeight: 1.7, maxWidth: 320 }}>
              {t.footer.disclaimer}
            </p>
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: faint, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>{t.footer.websites}</div>
            {[
              { label: "fund.spilberk.com", href: "https://wafer-accent-33203612.figma.site" },
              { label: "urbanblok.cz", href: "https://www.urbanblok.cz" },
              { label: "rentback.spilberk.com", href: "https://send-size-81349154.figma.site" },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: 11, color: faint, marginBottom: 6, textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: faint, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>{t.footer.contact}</div>
            {["invest@spilberk.com", "office@spilberk.com", "+420 725 926 580", "Triniti Office Center", "Trnita 500/9, 602 00 Brno"].map(txt => (
              <div key={txt} style={{ fontSize: 11, color: faint, marginBottom: 6 }}>{txt}</div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: faint, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>{t.footer.fund}</div>
            {["ICO: 051 94 148", "ISIN: CZ0008042645", "LEI: 315700AKR2M5RKLX8220", "ID DS: avyxn4z", t.footer.established].map(txt => (
              <div key={txt} style={{ fontSize: 11, color: faint, marginBottom: 6 }}>{txt}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${border}`, padding: "20px 36px", maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: 9.5, color: "rgba(255,255,255,0.18)" }}>
        <span>{t.footer.rights}</span>
        <span>{t.footer.links}</span>
      </div>
    </footer>
  );
}
