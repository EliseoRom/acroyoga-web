"use client";
import { useState, useEffect } from "react";
import { useT } from "@/lib/LangContext";
import AcroMark from "./AcroMark";
import { Icon } from "./Icons";
import PalmSilhouette from "./PalmSilhouette";

function Stat({ label, target, suffix = "", duration = 2000, highlight }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = parseFloat(target);
    if (isNaN(end)) {
      setCount(target);
      return;
    }
    
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = end * easeOut;
      
      if (target.toString().includes(".")) {
        setCount(currentVal.toFixed(1));
      } else {
        setCount(Math.floor(currentVal));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <div className={"stat" + (highlight ? " stat-hi" : "")}>
      <div className="stat-val">{count}{suffix}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
function Divider() { return <span className="stat-div" aria-hidden="true" />; }

function TypewriterTagline({ a, b, c }) {
  const [text, setText] = useState({ a: "", b: "", c: "" });

  useEffect(() => {
    let iA = 0, iB = 0, iC = 0;
    let timer;
    const type = () => {
      if (iA < a.length) {
        iA++;
        setText(prev => ({ ...prev, a: a.slice(0, iA) }));
        timer = setTimeout(type, 35);
      } else if (iB < b.length) {
        iB++;
        setText(prev => ({ ...prev, b: b.slice(0, iB) }));
        timer = setTimeout(type, 35);
      } else if (iC < c.length) {
        iC++;
        setText(prev => ({ ...prev, c: c.slice(0, iC) }));
        timer = setTimeout(type, 35);
      }
    };
    timer = setTimeout(type, 300); // Initial delay
    return () => clearTimeout(timer);
  }, [a, b, c]);

  return (
    <>
      <span>{text.a}</span>
      <strong>{text.b}</strong>
      <span>{text.c}</span>
    </>
  );
}

export default function Hero() {
  const { t } = useT();
  const [clickCount, setClickCount] = useState(0);
  const [toastMsg, setToastMsg] = useState("");
  const [statClicks, setStatClicks] = useState(0);
  const [statToast, setStatToast] = useState("");

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 1) setToastMsg("¿Por qué haces tantos clicks? 😄");
    else if (newCount === 2) setToastMsg("¡Lo hiciste de nuevo! 👀");
    else if (newCount >= 3) {
      setToastMsg("¡Te esperamos en las próximas actividades! 🤸‍♀️");
      setClickCount(0);
    }
  };

  const statMessages = [
    "¿Qué onda? 🤙",
    "Hacete acroyogui 🤸‍♀️",
    "¿Tenés un michi? 🐈",
    "¿O tenés 2 michis? 🐈🐈",
    "¿Cuántos michis tenés? 🤔",
    "Si sos acroyogui tomás mate 🧉",
    "¿Cuántos mensajes ocultos encontraste? 🕵️‍♂️"
  ];

  const handleStatClick = () => {
    const nextClicks = statClicks + 1;
    setStatClicks(nextClicks);
    const msgIndex = Math.min(nextClicks - 1, statMessages.length - 1);
    setStatToast(statMessages[msgIndex]);
    if (nextClicks >= statMessages.length) {
      setStatClicks(0);
    }
    setTimeout(() => setStatToast(""), 3000);
  };

  useEffect(() => {
    if (toastMsg) {
      const duration = clickCount === 0 ? 4000 : 2500;
      const timer = setTimeout(() => setToastMsg(""), duration);
      return () => clearTimeout(timer);
    }
  }, [toastMsg, clickCount]);

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

        <div className="logo-wrap" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <div className="logo-ring">
            <div className="logo-inner">
              <img 
                src="/logo.png" 
                alt="Acroyoga Punta Cana Logo" 
                style={{ transform: "scale(1.1) translateY(-12px)", background: "#F9F9FA" }}
              />
            </div>
          </div>
          <div className={`fun-toast ${toastMsg ? "show" : ""}`}>
            {toastMsg}
          </div>
        </div>

        <h1 className="wordmark">
          <span className="line">{t.hero.wordmarkA}<em>{t.hero.wordmarkAem}</em></span>
          <span className="line">{t.hero.wordmarkB1}<span className="amp">·</span>{t.hero.wordmarkB2}</span>
        </h1>

        <p className="tagline">
          <TypewriterTagline a={t.hero.tagline_a} b={t.hero.tagline_b} c={t.hero.tagline_c} />
          <br/>
          <em>{t.hero.tagline_d}</em>
        </p>

        <div style={{ position: "relative", display: "inline-block" }}>
          <div className="stats" onClick={handleStatClick} style={{ cursor: "pointer" }}>
            <Stat label={t.hero.stats.posts} target="257" duration={2500} />
            <Divider/>
            <Stat label={t.hero.stats.followers} target="3.5" suffix="k" highlight duration={3500} />
            <Divider/>
            <Stat label={t.hero.stats.acro} target="180" suffix="+" duration={5500} />
          </div>
          <div className={`fun-toast ${statToast ? "show" : ""}`} style={{ top: "-30px", left: "50%" }}>
            {statToast}
          </div>
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
