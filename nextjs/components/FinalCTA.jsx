"use client";
import { useT } from "@/lib/LangContext";
import { Icon } from "./Icons";

export default function FinalCTA() {
  const { t } = useT();
  return (
    <section className="final-cta-simple">
      <a className="primary-cta giant" href="#" target="_blank" rel="noreferrer">
        <Icon.WhatsApp size={22}/>
        <span>{t.finalCta.cta}</span>
        <span className="cta-arrow"><Icon.Arrow size={18}/></span>
      </a>
    </section>
  );
}
