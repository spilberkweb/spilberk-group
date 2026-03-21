"use client";

import {
  bg,
  border,
  faint,
  getBrands,
  gold,
  h2Style,
  label,
  muted,
  sectionContainer,
} from "./constants";
import { useLanguage } from "./LanguageContext";

export default function EcosystemSection() {
  const { t } = useLanguage();
  const brands = getBrands(t);

  return (
    <section id="ecosystem" style={sectionContainer}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <span style={{ ...label, display: "block", textAlign: "center" }}>
          {t.ecosystem.label}
        </span>
        <h2 style={{ ...h2Style, textAlign: "center" }}>{t.ecosystem.title}</h2>
        <p
          style={{
            fontSize: 15,
            color: muted,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {t.ecosystem.desc}
        </p>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {brands.map((b, i) => (
          <a
            key={i}
            href={b.realUrl}
            className={i === 2 && brands.length === 3 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-10px)]" : ""}
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${border}`,
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
            <div className="hidden sm:block" style={{ position: "absolute", top: 20, right: 24 }}>
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
                  color: bg,
                }}
              >
                {b.icon}
              </div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{b.name}</div>
                <div
                  style={{
                    fontSize: 11,
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
                fontSize: 13,
                color: muted,
                lineHeight: 1.65,
                marginBottom: 20,
                minHeight: 44,
              }}
            >
              {b.desc}
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              {b.stats.map((s, j) => (
                <div
                  key={j}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 10,
                    padding: "12px 16px",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{ fontSize: 18, fontWeight: 700, color: "white" }}
                  >
                    {s.v}
                    {s.u && (
                      <span
                        style={{ fontSize: 10, color: faint, marginLeft: 3 }}
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
              <span style={{ fontSize: 13, fontWeight: 700, color: b.color }}>
                {b.cta} &#8594;
              </span>
              <span
                style={{ fontSize: 10, color: faint, fontFamily: "monospace" }}
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
          background: `linear-gradient(135deg, rgba(200,169,110,0.06) 0%, rgba(64,64,138,0.06) 100%)`,
          border: `1px solid rgba(200,169,110,0.15)`,
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
                    border: `2px solid ${bg}`,
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
            <div style={{ fontSize: 22, fontWeight: 700, color: "white" }}>
              40<span style={{ color: gold }}>+</span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: muted,
                  marginLeft: 8,
                }}
              >
                {t.ecosystem.teamPro}
              </span>
            </div>
            <div style={{ fontSize: 12, color: faint, marginTop: 2 }}>
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
                    color: i === 0 ? gold : "white",
                  }}
                >
                  {s.v}
                </div>
                <div style={{ fontSize: 9, color: faint }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
