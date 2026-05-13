"use client";
import { useT } from "@/lib/LangContext";
import { useState, useRef } from "react";

export default function Services() {
  const { t } = useT();
  const [toastMsg, setToastMsg] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const timerRef = useRef(null);

  const msgs = [
    "¿Sos acroyogui?", 
    "¿O sos yogi?", 
    "¿Ya conoces el acroyoga?", 
    "¿Qué flow te gusta más?", 
    "¿Cómo conociste el acroyoga?"
  ];

  const handleCardClick = (i, e) => {
    // Avoid triggering if they click the WhatsApp button
    if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
    
    if (timerRef.current) clearTimeout(timerRef.current);
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    setToastMsg(randomMsg);
    setActiveCard(i);
    timerRef.current = setTimeout(() => {
      setToastMsg("");
      setActiveCard(null);
    }, 3000);
  };
  return (
    <section id="services" className="services">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.services.kicker}</span>
        <h2>{t.services.title_a}<em>{t.services.title_aem}</em>{t.services.title_b}</h2>
        {t.services.subtitle && <p className="section-subtitle" style={{ marginTop: "16px", color: "var(--ink-dim)", fontSize: "16px", lineHeight: "1.4" }}>{t.services.subtitle}</p>}
      </header>

      <div className="services-grid">
        {t.services.cards.map((c, i) => (
          <article 
            key={i} 
            className={`service-card ${i === 1 ? 'service-card-animate' : ''}`}
            onClick={(e) => handleCardClick(i, e)}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <div className={`fun-toast ${toastMsg && activeCard === i ? "show" : ""}`} style={{ top: "-10px", left: "50%", zIndex: 20, pointerEvents: "none" }}>
              {toastMsg}
            </div>
            <div className="service-n">{String(i+1).padStart(2,"0")}</div>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
            <a href="https://wa.link/i1ahu1" target="_blank" rel="noreferrer" className={`service-btn service-btn-${i}`}>
              {t.services.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
