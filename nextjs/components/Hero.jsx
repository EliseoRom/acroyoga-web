"use client";
import { useT } from "@/lib/LangContext";
import AcroMark from "./AcroMark";
import { Icon } from "./Icons";
import PalmSilhouette from "./PalmSilhouette";

function Stat({ label, value, highlight }) {
  return (
    <div className={"stat" + (highlight ? " stat-hi" : "")}>
      <div className="stat-val">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
function Divider() { return <span className="stat-div" aria-hidden="true" />; }

export default function Hero() {
  const { t } = useT();
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="grain" />
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <PalmSilhouette />
      </div>

      <div className="hero-inner">
        <div className="hero-pill">
          <span className="dot" /> {t.hero.pill}
        </div>

        <div className="logo-wrap">
          <div className="logo-ring">
            <div className="logo-inner">
              <img 
                src="/logo.png" 
                alt="Acroyoga Punta Cana Logo" 
                style={{ transform: "scale(1.1) translateY(-12px)", background: "#F9F9FA" }}
              />
            </div>
          </div>
          <AcroMark size={28} color="#F4F1EA" />
        </div>

        <h1 className="wordmark">
          <span className="line">{t.hero.wordmarkA}<em>{t.hero.wordmarkAem}</em></span>
          <span className="line">{t.hero.wordmarkB1}<span className="amp">·</span>{t.hero.wordmarkB2}</span>
        </h1>

        <p className="tagline">
          {t.hero.tagline_a}<strong>{t.hero.tagline_b}</strong>{t.hero.tagline_c}
          <br/>
          <em>{t.hero.tagline_d}</em>
        </p>

        <div className="stats">
          <Stat label={t.hero.stats.posts} value="257" />
          <Divider/>
          <Stat label={t.hero.stats.followers} value="3.5k" highlight />
          <Divider/>
          <Stat label={t.hero.stats.acro} value="180+" />
        </div>

        <a href="#links" className="primary-cta">
          <Icon.WhatsApp size={20} />
          <span>{t.hero.cta}</span>
          <span className="cta-arrow"><Icon.Arrow size={18}/></span>
        </a>

        <a href="#links" className="scroll-cue">
          <span>{t.hero.scrollCue}</span>
          <span className="scroll-line" />
        </a>
      </div>
    </section>
  );
}
