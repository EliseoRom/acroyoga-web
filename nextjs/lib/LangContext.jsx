"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { STRINGS } from "./i18n";

const LangContext = createContext({ lang: "es", t: STRINGS.es, toggle: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("acro-lang");
      if (saved === "es" || saved === "en") setLang(saved);
    } catch (e) {}
  }, []);

  const toggle = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    try { localStorage.setItem("acro-lang", next); } catch (e) {}
  };

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const value = useMemo(() => ({ lang, toggle, t: STRINGS[lang] }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useT = () => useContext(LangContext);
