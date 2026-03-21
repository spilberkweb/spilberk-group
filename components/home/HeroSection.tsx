"use client";

import {
  CDN,
  ctaBtn,
  faint,
  ghostBtn,
  gold,
  goldL,
  label,
  muted,
} from "./constants";

import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${CDN}/3ab25d31d11776d100528160faefd6f9f7d8db6e-1650x800.webp?w=1200&h=600)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,4,40,0.3) 0%, rgba(10,4,40,1) 85%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(64,64,138,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "120px 36px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ ...label, fontSize: 12, letterSpacing: 3, marginBottom: 14 }}>{t.hero.label}</span>
        <h1
          style={{
            fontSize: "clamp(48px, 10vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
            marginBottom: 20,
            marginTop: 14,
          }}
        >
          <span style={{ color: "white" }}>{t.hero.build}</span>
          <br />
          <span
            style={{
              background: `linear-gradient(135deg, ${gold}, ${goldL})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t.hero.appreciate}
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 18px)",
            color: faint,
            marginBottom: 32,
            letterSpacing: 0.5,
          }}
        >
          {t.hero.subtitle}
        </p>
        <p
          style={{
            fontSize: "clamp(18px, 3vw, 22px)",
            color: muted,
            maxWidth: 820,
            lineHeight: 1.6,
            marginBottom: 44,
          }}
        >
          {t.hero.desc}
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Button
            onClick={() =>
              window.open(
                "https://www.avantfunds.cz/fondy/spilberk-investicni-fond-sicav-a-s/",
                "_blank",
              )
            }
            style={{ ...ctaBtn, fontSize: 16, padding: "20px 36px", fontWeight: 700, borderRadius: 50 }}
          >
            {t.hero.cta}
          </Button>
          <Button
            onClick={() => {
              const el = document.getElementById("ecosystem");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ ...ghostBtn, fontSize: 16, padding: "20px 36px", fontWeight: 700, borderRadius: 50 }}
          >
            {t.hero.ghost}
          </Button>
        </div>
      </div>
    </header>
  );
}
