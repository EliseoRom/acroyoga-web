"use client";
import { useT } from "@/lib/LangContext";

export default function Services() {
  const { t } = useT();
  return (
    <section id="services" className="services">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.services.kicker}</span>
        <h2>{t.services.title_a}<em>{t.services.title_aem}</em>{t.services.title_b}</h2>
        {t.services.subtitle && <p className="section-subtitle" style={{ marginTop: "16px", color: "var(--ink-dim)", fontSize: "16px", lineHeight: "1.4" }}>{t.services.subtitle}</p>}
      </header>

      <div className="services-grid">
        {t.services.cards.map((c, i) => (
          <article key={i} className={`service-card ${i === 1 ? 'service-card-animate' : ''}`}>
            <div className="service-n">{String(i+1).padStart(2,"0")}</div>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
            <a href="https://wa.link/i1ahu1" target="_blank" rel="noreferrer" className={`service-btn service-btn-${i}`}>
              Contratar servicio
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
