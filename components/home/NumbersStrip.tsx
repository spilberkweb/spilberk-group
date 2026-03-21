"use client";

import { borderLight, gold, kpi, textDark } from "./constants";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useLanguage } from "./LanguageContext";

export default function NumbersStrip() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        background: "#F5F5F5",
        borderTop: `1px solid ${borderLight}`,
        borderBottom: `1px solid ${borderLight}`,
        color: textDark,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 36px" }}>
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
              v: <NumberTicker value={2.6} decimalPlaces={1} />,
              u: "mld CZK",
              l: t.numbers.assets,
            },
            { v: <NumberTicker value={725} />, u: "+", l: t.numbers.built },
            { v: <NumberTicker value={36} />, u: "SPV", l: t.numbers.spv },
            { v: "min\u00A07%", u: "p.a.", l: t.numbers.yield },
            { v: "SRI 3/7", u: "", l: t.numbers.risk },
            { v: <NumberTicker value={40} />, u: "+", l: t.numbers.pro },
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
                  fontSize: "clamp(24px, 5vw, 32px)",
                  fontWeight: 700,
                  color: i === 3 || i === 4 ? gold : textDark,
                  whiteSpace: "nowrap",
                }}
              >
                {k.v}
                <span
                  style={{
                    fontSize: 12,
                    color: i === 3 || i === 4 ? gold : textDark,
                    opacity: 0.7,
                    marginLeft: 3,
                  }}
                >
                  {k.u}
                </span>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: textDark,
                  opacity: 0.5,
                  marginTop: 8,
                }}
              >
                {k.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
