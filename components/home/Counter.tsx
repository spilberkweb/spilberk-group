"use client";

import { useState, useEffect, useRef } from "react";

export default function Counter({ end, suffix = "", decimals = 0, duration = 2000 }: { end: number, suffix?: string, decimals?: number, duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - t0) / duration, 1);
          setVal((1 - Math.pow(1 - t, 3)) * end);
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  
  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("cs-CZ")}
      {suffix}
    </span>
  );
}
