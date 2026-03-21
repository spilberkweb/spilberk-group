"use client";

import { border, faint, gold, kpi } from "./constants";
import Counter from "./Counter";
import { useLanguage } from "./LanguageContext";

export default function NumbersStrip() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 36px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 12,
            textAlign: "center",
          }}
        >
          {[
            {
              v: <Counter end={2.6} decimals={1} />,
              u: "mld CZK",
              l: t.numbers.assets,
            },
            { v: <Counter end={725} />, u: "+", l: t.numbers.built },
            { v: <Counter end={36} />, u: "SPV", l: t.numbers.spv },
            { v: "min\u00A07%", u: "p.a.", l: t.numbers.yield },
            { v: "SRI 3/7", u: "", l: t.numbers.risk },
            { v: <Counter end={40} />, u: "+", l: t.numbers.pro },
          ].map((k, i) => (
            <div
              key={i}
              style={{
                ...kpi,
                flex: "1 1 150px",
                minWidth: 140,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(20px, 5vw, 26px)",
                  fontWeight: 700,
                  color: i === 3 || i === 4 ? gold : "white",
                  whiteSpace: "nowrap",
                }}
              >
                {k.v}
                <span style={{ fontSize: 12, color: faint, marginLeft: 3 }}>
                  {k.u}
                </span>
              </div>
              <div style={{ fontSize: 10, color: faint, marginTop: 4 }}>
                {k.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
