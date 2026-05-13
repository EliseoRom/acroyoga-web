"use client";
import { useEffect, useState } from "react";
import { useT } from "@/lib/LangContext";
import AcroMark from "./AcroMark";
import { Icon } from "./Icons";

export default function Nav() {
  const { t, lang, toggle } = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <nav className={"nav" + (scrolled ? " nav-scrolled" : "")}>
        <a className="nav-brand" href="#">
          <img src="/logo.png" alt="Logo" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "contain", background: "#F9F9FA", transform: "scale(1.4)" }} />
          <span>Acroyoga · PC</span>
        </a>
        <div className="nav-links">
          <a href="#links">{t.nav.links}</a>
          <a href="#services">{t.nav.services}</a>
          <a href="#practice">{t.nav.practice}</a>
          <a href="#schedule">{t.nav.schedule}</a>
        </div>
        <div className="nav-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
            <span className={"lt-opt" + (lang === "es" ? " lt-on" : "")}>ES</span>
            <span className="lt-sep">/</span>
            <span className={"lt-opt" + (lang === "en" ? " lt-on" : "")}>EN</span>
          </button>
          <a className="nav-cta" href="#" target="_blank" rel="noreferrer">
            <Icon.WhatsApp size={14}/> <span>{t.nav.wa}</span>
          </a>
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </div>
      </nav>
      
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <a href="#links" onClick={() => setMenuOpen(false)}>{t.nav.links}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#practice" onClick={() => setMenuOpen(false)}>{t.nav.practice}</a>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>{t.nav.schedule}</a>
          <a href="https://chat.whatsapp.com/KJmKPhyVxrK4f6PLDDCXFS" className="mobile-cta" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            <Icon.WhatsApp size={18}/> {t.nav.wa}
          </a>
        </div>
      </div>
    </>
  );
}
