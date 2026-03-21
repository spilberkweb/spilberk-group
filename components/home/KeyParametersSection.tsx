"use client";

import {
  borderLight,
  gold,
  kpi,
  label,
  bgLight,
  textDark,
  sectionContainer,
} from "./constants";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useLanguage } from "./LanguageContext";

export default function KeyParametersSection() {
  const { t } = useLanguage();

  return (
    <section style={{ borderTop: `1px solid ${borderLight}`, background: bgLight, color: textDark }}>
      <div style={{ ...sectionContainer, paddingTop: 60, paddingBottom: 60 }}>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <span style={{ ...label, textAlign: "center", display: "block" }}>
            {t.params.label}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "SICAV", l: t.params.form, sub: t.params.formSub },
            { v: "CZ0008042645", l: t.params.isin, sub: t.params.isinSub },
            {
              v: "",
              value: 1,
              suffix: " mil. CZK",
              l: t.params.min,
              sub: t.params.minSub,
            },
            {
              v: "",
              value: 4,
              suffix: " roky",
              l: t.params.horizon,
              sub: t.params.horizonSub,
            },
          ].map((p, i) => (
            <div key={i} style={kpi}>
              <div
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)",
                  fontWeight: 700,
                  color: i === 0 ? gold : textDark,
                }}
              >
                {"value" in p && p.value !== undefined ? (
                  <><NumberTicker value={p.value} />{p.suffix}</>
                ) : (
                  p.v
                )}
              </div>
              <div style={{ fontSize: 11, color: textDark, opacity: 0.7, marginTop: 4 }}>
                {p.l}
              </div>
              <div style={{ fontSize: 9, color: textDark, opacity: 0.5, marginTop: 4 }}>
                {p.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
