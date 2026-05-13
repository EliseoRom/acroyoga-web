"use client";
import { useT } from "@/lib/LangContext";

export default function Services() {
  const { t } = useT();
  return (
    <section id="services" className="services">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.services.kicker}</span>
        <h2>{t.services.title_a}<em>{t.services.title_aem}</em>{t.services.title_b}</h2>
      </header>

      <div className="services-grid">
        {t.services.cards.map((c, i) => (
          <article key={i} className="service-card">
            <div className="service-n">{String(i+1).padStart(2,"0")}</div>
            <h3>{c.t}</h3>
            <p>{c.d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
