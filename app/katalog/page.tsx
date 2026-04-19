"use client";

import { BookOpen } from "lucide-react";
import { bg, gold, goldL, muted, border } from "@/components/home/constants";

export default function KatalogPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
        background: bg,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: 560,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div>
          <span
            style={{
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 3.5,
              color: gold,
              fontWeight: 700,
              display: "block",
              marginBottom: 16,
            }}
          >
            Skupina SPILBERK
          </span>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 16,
              color: "white",
            }}
          >
            Produktový katalog
          </h1>
          <p style={{ color: muted, fontSize: 17, lineHeight: 1.7 }}>
            Stáhněte si kompletní katalog skupiny SPILBERK s přehledem fondů,
            brandů a investičních příležitostí.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            borderRadius: 16,
            border: `1px solid ${border}`,
            padding: "2rem",
            background: "rgba(255,255,255,0.03)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${gold}22, ${goldL}11)`,
              border: `1px solid ${gold}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookOpen size={30} color={gold} strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>
              SPILBERK Group — Katalog
            </p>
            <p style={{ color: muted, fontSize: 14 }}>PDF dokument</p>
          </div>

          <a
            href="/catalogue/catalogue.pdf"
            download="SPILBERK-katalog.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: `linear-gradient(135deg, ${gold}, ${goldL})`,
              color: "#0A0428",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: 0.5,
              padding: "14px 36px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
            }
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Stáhnout katalog
          </a>
        </div>

        <p style={{ color: muted, fontSize: 13 }}>
          © {new Date().getFullYear()} Skupina SPILBERK. Všechna práva vyhrazena.
        </p>
      </div>
    </div>
  );
}
