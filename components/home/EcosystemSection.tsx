"use client";

import {
  bgLight,
  textDark,
  borderLight,
  getBrands,
  gold,
  h2StyleLight,
  label,
  sectionContainer,
} from "./constants";
import { useLanguage } from "./LanguageContext";

export default function EcosystemSection() {
  const { t } = useLanguage();
  const brands = getBrands(t);

  return (
    <section id="ecosystem" style={{ background: bgLight, color: textDark }}>
      <div style={{ ...sectionContainer }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span style={{ ...label, display: "block", textAlign: "center" }}>
            {t.ecosystem.label}
          </span>
          <h2 style={{ ...h2StyleLight, textAlign: "center" }}>{t.ecosystem.title}</h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: textDark,
              opacity: 0.7,
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0 auto",
            }}
          >
            {t.ecosystem.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {brands.map((b, i) => (
            <a
              key={i}
              href={b.realUrl}
              className={i === 2 && brands.length === 3 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-10px)]" : ""}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                background: "#FFFFFF",
                border: `1px solid ${borderLight}`,
                boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
                borderRadius: 20,
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s",
                cursor: "pointer",
              }}
            >
              {/* Accent top border */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: b.color,
                }}
              />

              {/* Brand logo top-right */}
              <div className="hidden sm:block" style={{ position: "absolute", top: 20, right: 24, opacity: 0.2, filter: "brightness(0)" }}>
                {b.logo(b.color)}
              </div>

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 10,
                    background: b.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 18,
                    color: "#FFFFFF",
                  }}
                >
                  {b.icon}
                </div>
                <div>
                  <div style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: 700, color: textDark }}>{b.name}</div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.5vw, 13px)",
                      color: b.color,
                      fontWeight: 600,
                      letterSpacing: 0.5,
                    }}
                  >
                    {b.tagline}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "clamp(14px, 1.5vw, 16px)",
                  color: textDark,
                  opacity: 0.7,
                  lineHeight: 1.65,
                  marginBottom: 20,
                  minHeight: 44,
                }}
              >
                {b.desc}
              </p>

              {/* Stats row */}
              <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 mb-5">
                {b.stats.map((s, j) => (
                  <div
                    key={j}
                    className="flex-1 text-center rounded-xl py-2 px-1 sm:py-3 sm:px-4"
                    style={{
                      background: bgLight,
                      minWidth: "calc(33% - 8px)",
                    }}
                  >
                    <div
                      style={{ fontSize: "clamp(18px, 2.3vw, 24px)", fontWeight: 700, color: textDark, letterSpacing: -0.5 }}
                    >
                      {s.v}
                      {s.u && (
                        <span
                          style={{ fontSize: "clamp(10px, 1.2vw, 13px)", color: textDark, opacity: 0.5, marginLeft: 2 }}
                        >
                          {s.u}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA + URL */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "clamp(14px, 1.5vw, 16px)", fontWeight: 700, color: b.color }}>
                  {b.cta} &#8594;
                </span>
                <span
                  style={{ fontSize: "clamp(11px, 1.5vw, 13px)", color: textDark, opacity: 0.5, fontFamily: "monospace" }}
                >
                  {b.url}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Team banner below tiles */}
        <div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 md:gap-0 mt-8"
          style={{
            background: "#F9F8F5", // warm light tint
            border: `1px solid rgba(200, 169, 110, 0.3)`, // light golden border
            borderRadius: 16,
            padding: "32px 40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Avatar stack */}
            <div style={{ display: "flex", marginRight: 4 }}>
              {[gold, "#6B8EBF", "#A07ECF", "#E87B5A", "#8888BB"].map(
                (clr, i) => (
                  <div
                    key={i}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${clr}40, ${clr}90)`,
                      border: `2px solid ${bgLight}`,
                      marginLeft: i > 0 ? -12 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "white",
                      zIndex: 5 - i,
                      position: "relative",
                    }}
                  >
                    {i < 4 ? ["M", "R", "J", "M"][i] : ""}
                    {i === 4 && <span style={{ fontSize: 10 }}>+</span>}
                  </div>
                ),
              )}
            </div>
            <div>
              <div style={{ fontSize: "clamp(24px, 3.5vw, 30px)", fontWeight: 700, color: textDark }}>
                40<span style={{ color: gold }}>+</span>
                <span
                  style={{
                    fontSize: "clamp(16px, 2vw, 18px)",
                    fontWeight: 500,
                    color: textDark,
                    opacity: 0.7,
                    marginLeft: 8,
                  }}
                >
                  {t.ecosystem.teamPro}
                </span>
              </div>
              <div style={{ fontSize: "clamp(13px, 1.5vw, 15px)", color: textDark, opacity: 0.6, marginTop: 4 }}>
                {t.ecosystem.teamDesc}
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "flex", gap: 16 }}>
              {[
                { v: "5", l: t.ecosystem.divs },
                { v: "36", l: t.ecosystem.spvs },
                { v: "4", l: t.ecosystem.plats },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: i === 0 ? gold : textDark,
                    }}
                  >
                    {s.v}
                  </div>
                  <div style={{ fontSize: "clamp(10px, 1.5vw, 12px)", color: textDark, opacity: 0.5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
