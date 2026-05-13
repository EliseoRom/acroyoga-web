"use client";
import { useT } from "@/lib/LangContext";
import { Icon } from "./Icons";

const LINK_META = [
  { id: "ig",     icon: "Instagram",               href: "https://www.instagram.com/acroyoga.puntacana?igsh=OGJlZnRuM3Q4cHZl&utm_source=qr" },
  { id: "wa",     icon: "WhatsApp",  accent: true, href: "https://chat.whatsapp.com/KJmKPhyVxrK4f6PLDDCXFS" },
  { id: "tg",     icon: "Telegram",                href: "https://t.me/acromultimedia2023" },
];

const ICON_SIZES = { WhatsApp: 22, Instagram: 20, Telegram: 22 };

function LinkRow({ id, icon, accent, href, title, subtitle, cta, index }) {
  const IconComp = Icon[icon];
  return (
    <li className={"link-row" + (accent ? " link-accent" : "")} style={{ "--i": index }}>
      <a href={href} target="_blank" rel="noreferrer">
        <span className="link-icon" aria-hidden="true">
          <IconComp size={ICON_SIZES[icon]} />
        </span>
        <span className="link-text">
          <span className="link-title">{title}</span>
          <span className="link-sub">{subtitle}</span>
        </span>
        <span className="link-cta">
          <span className="link-cta-label">{cta}</span>
          <span className="link-cta-arrow"><Icon.Arrow size={16}/></span>
        </span>
      </a>
    </li>
  );
}

export default function Links() {
  const { t } = useT();
  return (
    <section id="links" className="links">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.links.kicker}</span>
        <h2>
          {t.links.title_a}<em>{t.links.title_aem}</em>{t.links.title_b}<br/>
          {t.links.title_c}
        </h2>
      </header>

      <ul className="link-list">
        {LINK_META.map((l, i) => {
          const s = t.links.items[l.id];
          return <LinkRow key={l.id} {...l} title={s.title} subtitle={s.sub} cta={s.cta} index={i} />;
        })}
      </ul>
    </section>
  );
}
