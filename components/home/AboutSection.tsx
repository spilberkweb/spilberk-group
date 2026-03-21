"use client";

import {
  border,
  faint,
  h2Style,
  kpi,
  label,
  muted,
  sectionContainer,
} from "./constants";
import { useLanguage } from "./LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        background: "rgba(255,255,255,0.015)",
        borderTop: `1px solid ${border}`,
      }}
    >
      <div style={sectionContainer}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px]">
          <div>
            <span style={label}>{t.about.label}</span>
            <h2 style={h2Style}>{t.about.title}</h2>
            <p
              style={{
                fontSize: 14,
                color: muted,
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              {t.about.desc1}
            </p>
            <p
              style={{
                fontSize: 14,
                color: muted,
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
                    fontSize: 11,
                    color: faint,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${border}`,
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
                    style={{ fontSize: 18, marginBottom: 6 }}
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
                    style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}
                  >
                    {v.t}
                  </h3>
                  <p style={{ fontSize: 11, color: faint, lineHeight: 1.5 }}>
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
