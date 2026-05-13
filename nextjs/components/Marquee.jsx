"use client";
import { useT } from "@/lib/LangContext";

export default function Marquee() {
  const { t } = useT();
  const items = [...t.locations, ...t.locations];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" /> {text}
          </span>
        ))}
      </div>
    </div>
  );
}
