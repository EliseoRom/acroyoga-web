"use client";
import { useT } from "@/lib/LangContext";

export default function Practice() {
  const { t } = useT();
  return (
    <section id="practice" className="practice">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.practice.kicker}</span>
        <h2>{t.practice.title_a}<em>{t.practice.title_bem}</em>{t.practice.title_c}</h2>
        <p className="practice-subtitle">{t.practice.subtitle}</p>
      </header>

      <div className="pillars">
        {t.practice.pillars.map((p, i) => (
          <article key={i} className="pillar">
            <div className="pillar-n">{String(i+1).padStart(2,"0")}</div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
            <span className="pillar-line" />
          </article>
        ))}
      </div>
    </section>
  );
}
