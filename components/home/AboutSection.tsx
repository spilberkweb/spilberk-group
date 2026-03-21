"use client";

import {
  borderLight,
  h2StyleLight,
  kpi,
  label,
  bgLight,
  textDark,
} from "./constants";
import { useLanguage } from "./LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        background: bgLight,
        borderTop: `1px solid ${borderLight}`,
        color: textDark,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "clamp(50px, 8vw, 90px) clamp(20px, 5vw, 36px)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px]">
          <div>
            <span style={label}>{t.about.label}</span>
            <h2 style={h2StyleLight}>{t.about.title}</h2>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: textDark,
                opacity: 0.7,
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              {t.about.desc1}
            </p>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: textDark,
                opacity: 0.7,
                lineHeight: 1.75,
                marginBottom: 30,
              }}
            >
              {t.about.desc2}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                t.about.partner1,
                t.about.partner2,
                t.about.partner3,
                "AUDIT ONE",
                "BDO Czech Republic",
              ].map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: "clamp(12px, 1.5vw, 14px)",
                    color: textDark,
                    opacity: 0.8,
                    background: "#FFFFFF",
                    border: `1px solid ${borderLight}`,
                    borderRadius: 20,
                    padding: "5px 14px",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.about.features.map((v, i) => (
                <div
                  key={i}
                  style={{ ...kpi, textAlign: "left", padding: "18px 20px" }}
                >
                  <div
                    style={{ fontSize: "clamp(20px, 2.5vw, 24px)", marginBottom: 8 }}
                    dangerouslySetInnerHTML={{
                      __html: [
                        "&#128737;",
                        "&#127970;",
                        "&#128202;",
                        "&#9878;&#65039;",
                        "&#127919;",
                        "&#128200;",
                      ][i],
                    }}
                  />
                  <h3
                    style={{ fontSize: "clamp(15px, 2vw, 17px)", color: textDark, fontWeight: 700, marginBottom: 6 }}
                  >
                    {v.t}
                  </h3>
                  <p style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: textDark, opacity: 0.6, lineHeight: 1.5 }}>
                    {v.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
