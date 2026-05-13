"use client";
import { useT } from "@/lib/LangContext";
import { Icon } from "./Icons";

export default function Schedule() {
  const { t } = useT();
  return (
    <section id="schedule" className="schedule">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.schedule.kicker}</span>
        <h2>
          {t.schedule.title_a}<em>{t.schedule.title_aem}</em>{t.schedule.title_b}
          <span className="soon-badge">{t.schedule.soon}</span>
        </h2>
        <p className="soon-body">{t.schedule.soonBody}</p>
      </header>

      <ul className="schedule-list schedule-soon">
        {t.schedule.items.map((e, i) => (
          <li key={i} className="schedule-row">
            <div className="schedule-date">
              <span className="schedule-day">{e.day}</span>
              <span className="schedule-num">{e.date}</span>
            </div>
            <div className="schedule-body">
              <h4>{e.title}</h4>
              <p>{e.time} · {e.loc}</p>
            </div>
            <span className="schedule-tag">{e.tag}</span>
            <span className="schedule-arrow"><Icon.Arrow size={18}/></span>
          </li>
        ))}
      </ul>
    </section>
  );
}
