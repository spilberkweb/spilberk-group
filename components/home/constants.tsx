import React from "react";

export const CDN = "https://cdn.sanity.io/images/by9osh4f/production";

export const gold = "#C8A96E";
export const goldL = "#FFE292";
export const bg = "#0A0428";
export const bgLight = "#FAFAFA";
export const textDark = "#0A0428";
export const border = "rgba(255,255,255,0.07)";
export const borderLight = "rgba(0,0,0,0.08)";
export const muted = "rgba(255,255,255,0.45)";
export const faint = "rgba(255,255,255,0.28)";

export const label: React.CSSProperties = { fontSize: 10, textTransform: "uppercase", letterSpacing: 3, color: gold, fontWeight: 700, marginBottom: 10, display: "block" };
export const h2Style: React.CSSProperties = { fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: "white" };
export const h2StyleLight: React.CSSProperties = { fontSize: "clamp(28px, 6vw, 36px)", fontWeight: 700, lineHeight: 1.2, marginBottom: 16, color: textDark };
export const sectionContainer: React.CSSProperties = { maxWidth: 1120, margin: "0 auto", padding: "clamp(50px, 8vw, 90px) clamp(20px, 5vw, 36px)" };
export const kpi: React.CSSProperties = { background: "#FFFFFF", border: `1px solid ${borderLight}`, borderRadius: 14, padding: "26px 28px", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.03)", color: textDark };
export const ctaBtn: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 34px", background: `linear-gradient(135deg, ${gold}, ${goldL})`, color: bg, fontWeight: 700, fontSize: 14, border: "none", borderRadius: 50, cursor: "pointer" };
export const ghostBtn: React.CSSProperties = { display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 28px", background: "transparent", color: "white", fontWeight: 600, fontSize: 13, border: "1px solid rgba(255,255,255,0.18)", borderRadius: 50, cursor: "pointer" };

export const getBrands = (t: any) => [
  {
    name: "SPILBERK Fund",
    tagline: t.brands.fund.tagline,
    url: "fund.spilberk.com",
    realUrl: "https://wafer-accent-33203612.figma.site",
    color: gold,
    icon: "S",
    iconBg: `linear-gradient(135deg, ${gold}, ${goldL})`,
    logo: (c: string) => (
      <img src="/spilberk-logo-white.png" alt="SPILBERK" style={{ height: 26, opacity: 0.5 }} />
    ),
    stats: [
      { v: "2,6+", u: "mld CZK" },
      { v: "min 7%", u: "p.a." },
      { v: "SRI 3/7", u: "" },
    ],
    desc: t.brands.fund.desc,
    cta: t.brands.fund.cta,
  },
  {
    name: "Urbanblok",
    tagline: t.brands.urban.tagline,
    url: "urbanblok.cz",
    realUrl: "https://www.urbanblok.cz",
    color: "#6B8EBF",
    icon: "U",
    iconBg: "linear-gradient(135deg, #6B8EBF, #9BB8D8)",
    logo: (c: string) => (
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlZyc3R2YV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMzk5LjZweCIgaGVpZ2h0PSIxMzEuN3B4IiB2aWV3Qm94PSIwIDAgMzk5LjYgMTMxLjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM5OS42IDEzMS43OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKCT4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTY3LjEsNjNjMC42LTAuNSwxLjQtMC43LDIuMi0wLjdjMC42LDAsMS4xLDAuMSwxLjUsMC40YzEuMiwwLjgsMS41LDIuNCwxLjMsMy42Yy0wLjUsMi42LTEuNiw0LjgtMy4xLDYuOQoJYy0wLjItMC4zLTAuNC0wLjYtMC42LTAuOUM2Ni45LDY5LjksNjQuNyw2NSw2Ny4xLDYzIE03Miw4Ny43aDEwYy0yLjgtMi42LTUuNS01LjYtOC40LTguOWMyLjQtMyw0LjYtNi43LDUuNS0xMS4zCgljMC44LTQuMy0xLTguNy00LjUtMTAuOWMtMy42LTIuMy04LjMtMS45LTEyLDAuOWMtNS45LDQuOC0zLjgsMTMtMC4yLDE4LjZjMC42LDAuOSwxLjIsMS43LDEuOCwyLjZjLTEuNCwxLjMtMi44LDIuMS00LjQsMi41CgljLTIuOSwwLjYtNi44LTAuMy04LjMtMy4zYy0wLjctMS4zLTEtMi45LTEtNC42VjU2aC03LjF2MTcuM2MwLDIuNywwLjYsNS40LDEuNyw3LjdjMi43LDUuNSw5LjUsOC41LDE2LjEsNy4xCgljMy4xLTAuNiw1LjQtMi4yLDcuNS00QzY5LjksODUuNCw3MC45LDg2LjYsNzIsODcuNyBNMzExLjcsNzEuOWMwLTUuNi00LjEtOS44LTkuNi05LjhjLTUuNiwwLTkuNiw0LjEtOS42LDkuOGMwLDUuNiw0LDkuOCw5LjYsOS44CglDMzA3LjcsODEuNywzMTEuNyw3Ny41LDMxMS43LDcxLjkgTTI4NC41LDcxLjljMC05LjYsNy4zLTE2LjUsMTcuNi0xNi41YzEwLjMsMCwxNy42LDYuOSwxNy42LDE2LjVjMCw5LjYtNy4zLDE2LjUtMTcuNiwxNi41CglDMjkxLjgsODguNCwyODQuNSw4MS41LDI4NC41LDcxLjkgTTI3MC4zLDQ0aDcuOXY0My43aC03LjlWNDR6IE0yNDYuNCw4MS43YzUuNiwwLDkuNy00LjEsOS43LTkuN2MwLTUuNi00LjEtOS42LTkuNy05LjYKCXMtOS43LDQuMS05LjcsOS42UzI0MC44LDgxLjcsMjQ2LjQsODEuNyBNMjQ4LjcsNTUuMmM4LjksMCwxNS42LDcuMywxNS42LDE2LjdjMCw5LjUtNi44LDE2LjQtMTUuNiwxNi40Yy01LjMsMC05LjUtMi42LTExLjUtNi45CglIMjM3djYuM2gtNy45VjQ0aDcuOXYxOC40aDAuMUMyMzkuMyw1Ny45LDI0My41LDU1LjIsMjQ4LjcsNTUuMiBNMjA5LjEsNTUuM3M3LjQsMCwxMiw0LjgsMTIsMTIuOHYxOS41aC04LjFWNjkuNgoJYzAtNC43LTIuNi03LjQtNy03LjRjLTQuOSwwLTgsMy40LTgsOXYxNi42aC03LjlWNTZoNy45djYuMmgwLjFDMjAwLDU3LjksMjAzLjksNTUuMywyMDkuMSw1NS4zTDIwOS4xLDU1LjN6IE0xNzUsNzMuMnYtMC42CglsLTcuOCwwLjNjLTUuOCwwLjItOC40LDEuNi04LjQsNC43YzAsMi44LDIuMiw0LjQsNS44LDQuNEMxNzAuMiw4MiwxNzQuOSw3OC4yLDE3NSw3My4yIE0xNjcuNyw1NS4yYzkuMywwLDE1LjIsNC45LDE1LjIsMTIuMnYyMC4yCgloLTcuNFY4MWgtMC4xYy0yLDQuNC02LjcsNy4yLTEyLjgsNy4yYy03LjIsMC0xMS45LTMuOC0xMS45LTEwYzAtNi41LDUuMS05LjUsMTYuNC05LjlsNy45LTAuM3YtMC40YzAtMy45LTIuOC02LjMtNy41LTYuMwoJYy00LjEsMC02LjksMS43LTcuNSw0LjhoLTcuOUMxNTIuNyw1OS43LDE1OC45LDU1LjIsMTY3LjcsNTUuMkwxNjcuNyw1NS4yeiBNMTI4LjIsODEuN2M1LjYsMCw5LjctNC4xLDkuNy05LjcKCWMwLTUuNi00LjEtOS42LTkuNy05LjZjLTUuNiwwLTkuNyw0LjEtOS43LDkuNlMxMjIuNiw4MS43LDEyOC4yLDgxLjcgTTEzMC41LDU1LjJjOC45LDAsMTUuNiw3LjMsMTUuNiwxNi43CgljMCw5LjUtNi44LDE2LjQtMTUuNiwxNi40Yy01LjMsMC05LjUtMi42LTExLjUtNi45aC0wLjF2Ni4zaC03LjlWNDRoNy45djE4LjRoMC4xQzEyMSw1Ny45LDEyNS4yLDU1LjIsMTMwLjUsNTUuMiBNMTA0LjgsNTUuMwoJYzAuNCwwLDAuOCwwLDEuMiwwLjF2Ny45aC0xLjZjLTcsMC0xMC4xLDQuNi0xMC4xLDEyLjJ2MTIuMmgtNy45VjU2aDcuNnY5LjNoMC4xQzk1LjcsNTguOCw5OS4yLDU1LjMsMTA0LjgsNTUuM0wxMDQuOCw1NS4zegoJIE0zNTUuMiw4Ny43aC05LjhsLTEyLjEtMTQuNWgtMC4xdjE0LjVoLTcuOVY0My45aDcuOXYyNi40aDAuMWwxMS42LTE0LjNoOS42bC0xMy40LDE1LjdMMzU1LjIsODcuN3oiLz4KPC9zdmc+Cg==" alt="Urbanblok" style={{ height: 35, opacity: 0.6 }} />
    ),
    stats: [
      { v: "263", u: "jednotek" },
      { v: "2", u: "projekty" },
      { v: "9+", u: "zemi" },
    ],
    desc: t.brands.urban.desc,
    cta: t.brands.urban.cta,
  },
  {
    name: "RENT|BACK",
    tagline: t.brands.rent.tagline,
    url: "rentback.spilberk.com",
    realUrl: "https://send-size-81349154.figma.site",
    color: "#A07ECF",
    icon: "R",
    iconBg: "linear-gradient(135deg, #A07ECF, #C4A8E8)",
    logo: (c: string) => (
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgMTUwIiB3aWR0aD0iNDgwIiBoZWlnaHQ9IjE1MCI+CiAgCiAgCiAgPHRleHQgeD0iMjA4IiB5PSI3MCIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1mYW1pbHk9Ikdlb3JnaWEsc2VyaWYiIGZvbnQtd2VpZ2h0PSIzMDAiIGZvbnQtc2l6ZT0iNTgiIGxldHRlci1zcGFjaW5nPSIzIiBmaWxsPSIjQzhBOTZFIj5SRU5UPC90ZXh0PgogIDxyZWN0IHg9IjIxNiIgeT0iMjQiIHdpZHRoPSIyIiBoZWlnaHQ9IjYwIiByeD0iMSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMiIvPgogIDx0ZXh0IHg9IjIyOCIgeT0iNzAiIGZvbnQtZmFtaWx5PSJHZW9yZ2lhLHNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI1OCIgbGV0dGVyLXNwYWNpbmc9IjMiIGZpbGw9IndoaXRlIj5CQUNLPC90ZXh0PgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzMiw4Mikgc2NhbGUoMC43KSI+CiAgICA8cGF0aCBkPSJNNCwwIEM0LDAgNSw0IDUuNSwxMCBDNiwxNiA2LDIyIDUuOCwyOCBDNS42LDMyIDYsMzUgOCwzNiBDMTEsMzcgMTQuNSwzNCAxNywzMCBDMTksMjcgMjAsMjQgMTkuNSwyMiBDMTguNSwxOSAxNSwxOCAxMiwxOS41IEM5LDIxIDcsMjUgNiwzMCIgc3Ryb2tlPSIjQzhBOTZFIiBzdHJva2Utd2lkdGg9IjIuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMjYsMTggQzI2LDE4IDI3LDIyIDI4LjUsMjYgQzMwLDMwIDMxLDMyIDMyLDMyIEMzMywzMiAzMy41LDMwIDMzLjUsMzAiIHN0cm9rZT0iI0M4QTk2RSIgc3Ryb2tlLXdpZHRoPSIyLjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTM3LDE4IEMzNywxOCAzNSwyNCAzMywzMCBDMzEsMzYgMjguNSw0MiAyNi41LDQ0IEMyNSw0NS41IDIzLjUsNDUgMjMsNDMgQzIyLjUsNDEgMjMsMzkgMjQsMzgiIHN0cm9rZT0iI0M4QTk2RSIgc3Ryb2tlLXdpZHRoPSIyLjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDwvZz4KICA8dGV4dCB4PSI0MjAiIHk9IjExMiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC1mYW1pbHk9IlNlZ29lIFVJLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSIzMDAiIGZvbnQtc2l6ZT0iMTgiIGxldHRlci1zcGFjaW5nPSI4IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC43NSI+U1BJTEJFUks8L3RleHQ+Cjwvc3ZnPg==" alt="RENTBACK" style={{ height: 38, opacity: 0.7 }} />
    ),
    stats: [
      { v: "101", u: "bytu" },
      { v: "3,5-4%", u: "yield" },
      { v: "15,6M", u: "CZK/rok" },
    ],
    desc: t.brands.rent.desc,
    cta: t.brands.rent.cta,
  },
];
