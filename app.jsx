const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

// ---------- i18n ----------
const STRINGS = {
  es: {
    nav: { links: "Links", practice: "Práctica", schedule: "Agenda · Próximamente", wa: "WhatsApp" },
    hero: {
      pill: "En vivo · Próximo jam · Sábado 8:00 AM",
      wordmarkA: "ACRO", wordmarkAem: "yoga",
      wordmarkB1: "PUNTA", wordmarkB2: "CANA",
      tagline_a: "Entrená ", tagline_b: "fuerza, equilibrio y flexibilidad",
      tagline_c: " con acroyoga en el corazón del Caribe. ",
      tagline_d: "Workshops · Eventos · Team Building.",
      cta: "Únete al grupo de WhatsApp",
      scrollCue: "links & comunidad",
      stats: { posts: "publicaciones", followers: "seguidores", acro: "acroyoguis" },
      logoPh: "Logo Acroyoga PC",
    },
    links: {
      kicker: "01 / Comunidad",
      title_a: "Entra donde ", title_aem: "quieras", title_b: ".",
      title_c: "Todos los caminos llevan al jam.",
      items: {
        wa:     { title: "Comunidad WhatsApp",          sub: "Acroyoga en Punta Cana · entra al grupo",  cta: "Unirme" },
        ig:     { title: "Instagram",                   sub: "@acroyoga.puntacana · 3.5k seguidores",    cta: "Seguir" },
        global: { title: "AcroComunidad Global",        sub: "Conecta con acroyoguis del mundo",         cta: "Entrar" },
        maps:   { title: "AcroGlobalMaps",              sub: "Encuentra jams y clases cerca de ti",      cta: "Explorar" },
        fotos:  { title: "Fotos · Plaza San Juan",      sub: "Galería del último jam outdoor",           cta: "Ver" },
        top:    { title: "Acroyoga Punta Cana · Top",   sub: "Lo mejor de la comunidad este mes",        cta: "Ver" },
      },
    },
    practice: {
      kicker: "02 / Práctica",
      title_a: "Tres pilares,", title_b: " una ", title_bem: "misma energía", title_c: ".",
      pillars: [
        { t: "Acrobacia",  d: "Inversiones, washing machines, standing acro. De principiantes a intermedios." },
        { t: "Movilidad",  d: "Calistenia y movilidad funcional para abrir caderas, hombros y columna." },
        { t: "Comunidad",  d: "Jams al aire libre, team building y eventos por toda República Dominicana." },
      ],
    },
    gallery: {
      kicker: "03 / Lente",
      title_a: "El último mes,", title_b: " a través de la ", title_bem: "comunidad", title_c: ".",
      slots: ["Jam outdoor", "Standing acro", "L-base", "Team building", "Plaza San Juan", "Workshop"],
    },
    schedule: {
      kicker: "04 / Calendario",
      title_a: "Próximos ", title_aem: "encuentros", title_b: ".",
      soon: "Próximamente",
      soonBody: "Estamos puliendo el calendario semanal. Entra al grupo de WhatsApp para recibir las fechas y ubicaciones en cuanto se publiquen.",
      items: [
        { day: "SÁB", date: "17", title: "Jam abierto · Plaza San Juan",       time: "08:00 — 11:00", loc: "Punta Cana", tag: "Gratis" },
        { day: "MIÉ", date: "21", title: "Clase L-base & Counterbalance",      time: "18:30 — 20:30", loc: "BlueMall",   tag: "Drop-in" },
        { day: "SÁB", date: "24", title: "Workshop · Washing Machines",        time: "09:00 — 13:00", loc: "Santiago",   tag: "Cupos: 12" },
        { day: "DOM", date: "25", title: "Team Building corporativo",          time: "10:00 — 14:00", loc: "Bávaro",     tag: "Privado" },
      ],
    },
    finalCta: {
      kicker: "Únete hoy",
      title_a: "Nos vemos en", title_b: " la ", title_bem: "arena", title_c: ".",
      body: "Entra a la comunidad de WhatsApp y recibe el calendario semanal, ubicaciones y novedades de acro en RD.",
      cta: "Acroyoga en Punta Cana · WhatsApp",
    },
    footer: {
      name: "ACROYOGA PUNTA CANA",
      sub: "Acro & Movilidad · República Dominicana",
      colA: { h: "Comunidad",   items: ["WhatsApp", "Instagram", "Telegram", "AcroGlobalMaps"] },
      copy: "© 2026 · Acroyoga Punta Cana",
      made: ["Hecho con ", " en RD"],
    },
    locations: ["P. CANA 🇩🇴", "SANTIAGO 🇩🇴", "SDOM 🇩🇴", "ARMONÍA", "BLUEMALL", "EVENTOS", "WORKSHOPS"],
  },
  en: {
    nav: { links: "Links", practice: "Practice", schedule: "Schedule · Coming soon", wa: "WhatsApp" },
    hero: {
      pill: "Live · Next jam · Saturday 8:00 AM",
      wordmarkA: "ACRO", wordmarkAem: "yoga",
      wordmarkB1: "PUNTA", wordmarkB2: "CANA",
      tagline_a: "Train ", tagline_b: "strength, balance and flexibility",
      tagline_c: " with acroyoga in the heart of the Caribbean. ",
      tagline_d: "Workshops · Events · Team Building.",
      cta: "Join the WhatsApp group",
      scrollCue: "links & community",
      stats: { posts: "posts", followers: "followers", acro: "acroyogis" },
      logoPh: "Acroyoga PC logo",
    },
    links: {
      kicker: "01 / Community",
      title_a: "Enter wherever ", title_aem: "you want", title_b: ".",
      title_c: "Every path leads to the jam.",
      items: {
        wa:     { title: "WhatsApp Community",         sub: "Acroyoga in Punta Cana · join the group",  cta: "Join" },
        ig:     { title: "Instagram",                   sub: "@acroyoga.puntacana · 3.5k followers",    cta: "Follow" },
        global: { title: "Global AcroCommunity",        sub: "Connect with acroyogis worldwide",        cta: "Enter" },
        maps:   { title: "AcroGlobalMaps",              sub: "Find jams and classes near you",          cta: "Explore" },
        fotos:  { title: "Photos · Plaza San Juan",     sub: "Gallery from the latest outdoor jam",     cta: "View" },
        top:    { title: "Acroyoga Punta Cana · Top",   sub: "Community highlights this month",         cta: "View" },
      },
    },
    practice: {
      kicker: "02 / Practice",
      title_a: "Three pillars,", title_b: " one ", title_bem: "shared energy", title_c: ".",
      pillars: [
        { t: "Acrobatics", d: "Inversions, washing machines, standing acro. From beginners to intermediate." },
        { t: "Mobility",   d: "Calisthenics and functional mobility to open hips, shoulders and spine." },
        { t: "Community",  d: "Outdoor jams, team building and events across the Dominican Republic." },
      ],
    },
    gallery: {
      kicker: "03 / Lens",
      title_a: "Last month,", title_b: " through the eyes of the ", title_bem: "community", title_c: ".",
      slots: ["Outdoor jam", "Standing acro", "L-base", "Team building", "Plaza San Juan", "Workshop"],
    },
    schedule: {
      kicker: "04 / Calendar",
      title_a: "Upcoming ", title_aem: "gatherings", title_b: ".",
      soon: "Coming soon",
      soonBody: "We’re polishing the weekly calendar. Join the WhatsApp group to receive dates and locations as soon as they’re published.",
      items: [
        { day: "SAT", date: "17", title: "Open jam · Plaza San Juan",          time: "08:00 — 11:00", loc: "Punta Cana", tag: "Free" },
        { day: "WED", date: "21", title: "L-base & Counterbalance class",      time: "18:30 — 20:30", loc: "BlueMall",   tag: "Drop-in" },
        { day: "SAT", date: "24", title: "Workshop · Washing Machines",        time: "09:00 — 13:00", loc: "Santiago",   tag: "12 spots" },
        { day: "SUN", date: "25", title: "Corporate Team Building",            time: "10:00 — 14:00", loc: "Bávaro",     tag: "Private" },
      ],
    },
    finalCta: {
      kicker: "Join today",
      title_a: "See you on", title_b: " the ", title_bem: "sand", title_c: ".",
      body: "Join the WhatsApp community to receive the weekly schedule, locations and news of acro in DR.",
      cta: "Acroyoga in Punta Cana · WhatsApp",
    },
    footer: {
      name: "ACROYOGA PUNTA CANA",
      sub: "Acro & Mobility · Dominican Republic",
      colA: { h: "Community",  items: ["WhatsApp", "Instagram", "Telegram", "AcroGlobalMaps"] },
      copy: "© 2026 · Acroyoga Punta Cana",
      made: ["Made with ", " in DR"],
    },
    locations: ["P. CANA 🇩🇴", "SANTIAGO 🇩🇴", "SDOM 🇩🇴", "ARMONÍA", "BLUEMALL", "EVENTS", "WORKSHOPS"],
  },
};

const LangContext = createContext({ lang: "es", t: STRINGS.es, toggle: () => {} });
const useT = () => useContext(LangContext);

// ---------- Brand mark ----------
// Stylized geometric acro silhouette — abstract figure with palm. Geometric, not a copy of their photo logo.
function AcroMark({ size = 64, color = "currentColor", bg = "transparent" }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
      <circle cx="50" cy="50" r="49" fill={bg} />
      {/* palm fronds, simple lines */}
      <g stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M22 30 Q18 22 14 18" />
        <path d="M22 30 Q26 22 30 16" />
        <path d="M22 30 Q14 28 8 28" />
        <path d="M22 30 L22 46" />
      </g>
      {/* base figure (flyer + base) — abstract: two triangles + circle */}
      <g fill={color}>
        <circle cx="58" cy="36" r="5" />
        <path d="M58 42 L66 58 L50 58 Z" />
        <circle cx="62" cy="72" r="4" />
        <path d="M48 78 L78 78 L74 84 L52 84 Z" opacity="0.9" />
      </g>
    </svg>
  );
}

// Tiny inline icons
const Icon = {
  WhatsApp: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1-.5-2-1.1-2.8-2.1-.6-.7-1.1-1.6-1.4-2.3-.1-.3 0-.5.1-.6.1-.2.3-.4.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .2.2 2 3.1 4.9 4.4 1.7.7 2.4.8 3.3.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Globe: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  Image: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
      <path d="M4 18l5-5 4 4 3-3 4 4"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/>
    </svg>
  ),
  Play: (p) => (
    <svg viewBox="0 0 24 24" width={p.size || 18} height={p.size || 18} fill="currentColor">
      <path d="M6 4l14 8-14 8z"/>
    </svg>
  ),
};

// ---------- Link data ----------
const LINK_META = [
  { id: "wa",     icon: <Icon.WhatsApp size={22}/>, accent: true, href: "https://chat.whatsapp.com/" },
  { id: "ig",     icon: <Icon.Instagram size={20}/>,               href: "https://instagram.com/acroyoga.puntacana" },
  { id: "global", icon: <Icon.Globe size={20}/>,                   href: "#" },
  { id: "maps",   icon: <Icon.Pin size={20}/>,                     href: "#" },
  { id: "fotos",  icon: <Icon.Image size={20}/>,                   href: "#" },
  { id: "top",    icon: <Icon.Sparkle size={20}/>,                 href: "#" },
];

// ---------- Hero ----------
function Hero({ tweaks }) {
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
            <image-slot
              id="logo"
              shape="circle"
              placeholder={t.hero.logoPh}
              style={{ width: 128, height: 128 }}
            ></image-slot>
          </div>
          <AcroMark size={28} color="#F4F1EA" />
        </div>

        <h1 className="wordmark">
          <span className="line">{t.hero.wordmarkA}<em>{t.hero.wordmarkAem}</em></span>
          <span className="line">{t.hero.wordmarkB1}<span className="amp">·</span>{t.hero.wordmarkB2}</span>
        </h1>

        <p className="tagline">
          {t.hero.tagline_a}<strong>{t.hero.tagline_b}</strong>{t.hero.tagline_c}<em>{t.hero.tagline_d}</em>
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

function Stat({ label, value, highlight }) {
  return (
    <div className={"stat" + (highlight ? " stat-hi" : "")}>
      <div className="stat-val">{value}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  );
}
function Divider() { return <span className="stat-div" aria-hidden="true" />; }

function PalmSilhouette() {
  // Decorative palm fronds (simple lines, not a full illustration)
  return (
    <svg className="palm" viewBox="0 0 400 600" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round">
        <path d="M200 600 Q210 480 195 360 Q183 250 170 160" />
        <path d="M170 160 Q150 120 90 110" />
        <path d="M170 160 Q200 110 270 100" />
        <path d="M170 160 Q120 150 70 170" />
        <path d="M170 160 Q230 150 290 175" />
        <path d="M170 160 Q160 100 140 60" />
        <path d="M170 160 Q200 100 230 70" />
      </g>
    </svg>
  );
}

// ---------- Links section ----------
function Links({ tweaks }) {
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

function LinkRow({ title, subtitle, icon, cta, accent, href, index }) {
  return (
    <li className={"link-row" + (accent ? " link-accent" : "")} style={{ "--i": index }}>
      <a href={href} target="_blank" rel="noreferrer">
        <span className="link-icon" aria-hidden="true">{icon}</span>
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

// ---------- Locations marquee ----------
function Marquee() {
  const { t } = useT();
  const items = [...t.locations, ...t.locations];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Practice section ----------
function Practice() {
  const { t } = useT();
  return (
    <section className="practice">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.practice.kicker}</span>
        <h2>{t.practice.title_a}<br/>{t.practice.title_b}<em>{t.practice.title_bem}</em>{t.practice.title_c}</h2>
      </header>

      <div className="pillars">
        {t.practice.pillars.map((p, i) => (
          <article key={i} className="pillar">
            <div className="pillar-n">{String(i+1).padStart(2,'0')}</div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
            <span className="pillar-line" />
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- Gallery ----------
function Gallery() {
  const { t } = useT();
  const spans = ["tall", "wide", "sq", "sq", "wide", "tall"];
  return (
    <section className="gallery">
      <header className="section-head">
        <span className="kicker"><span className="kicker-bar"/> {t.gallery.kicker}</span>
        <h2>{t.gallery.title_a}<br/>{t.gallery.title_b}<em>{t.gallery.title_bem}</em>{t.gallery.title_c}</h2>
      </header>

      <div className="grid">
        {t.gallery.slots.map((label, i) => (
          <div key={i} className={"grid-cell cell-" + spans[i]}>
            <image-slot id={"g"+(i+1)} shape="rect" radius="22" placeholder={label} style={{ width: "100%", height: "100%" }}></image-slot>
            <span className="cell-tag">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- Schedule ----------
function Schedule() {
  const { t } = useT();
  return (
    <section className="schedule">
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

// ---------- Final CTA (just the WhatsApp button) ----------
function FinalCTA() {
  const { t } = useT();
  return (
    <section className="final-cta-simple">
      <a className="primary-cta giant" href="#">
        <Icon.WhatsApp size={22}/>
        <span>{t.finalCta.cta}</span>
        <span className="cta-arrow"><Icon.Arrow size={18}/></span>
      </a>
    </section>
  );
}

function Footer() {
  const { t } = useT();
  return (
    <footer className="footer">
      <div className="foot-top">
        <div className="foot-mark">
          <AcroMark size={36} color="#F4F1EA"/>
          <div>
            <div className="foot-name">{t.footer.name}</div>
            <div className="foot-sub">{t.footer.sub}</div>
          </div>
        </div>
        <div className="foot-cols foot-cols-single">
          <div>
            <h5>{t.footer.colA.h}</h5>
            {t.footer.colA.items.map((item) => <a key={item} href="#">{item}</a>)}
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <span>{t.footer.copy}</span>
        <span>{t.footer.made[0]}<span className="heart">♥</span>{t.footer.made[1]}</span>
      </div>
    </footer>
  );
}

// ---------- Top nav ----------
function Nav() {
  const { t, lang, toggle } = useT();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " nav-scrolled" : "")}>
      <a className="nav-brand" href="#">
        <AcroMark size={26} color="currentColor"/>
        <span>Acroyoga · PC</span>
      </a>
      <div className="nav-links">
        <a href="#links">{t.nav.links}</a>
        <a href="#practice">{t.nav.practice}</a>
        <a href="#schedule">{t.nav.schedule}</a>
      </div>
      <div className="nav-right">
        <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
          <span className={"lt-opt" + (lang === "es" ? " lt-on" : "")}>ES</span>
          <span className="lt-sep">/</span>
          <span className={"lt-opt" + (lang === "en" ? " lt-on" : "")}>EN</span>
        </button>
        <a className="nav-cta" href="#">
          <Icon.WhatsApp size={14}/> {t.nav.wa}
        </a>
      </div>
    </nav>
  );
}

// ---------- Tweaks ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "density": "comfy",
  "linkStyle": "card",
  "showStats": true,
  "showSchedule": true,
  "showGallery": true,
  "showPractice": true
}/*EDITMODE-END*/;

function Tweaks({ tweaks, setTweak }) {
  const TP = window.TweaksPanel, TS = window.TweakSection, TR = window.TweakRadio,
        TT = window.TweakToggle, TC = window.TweakColor;
  if (!TP) return null;
  return (
    <TP title="Tweaks · Acroyoga PC">
      <TS label="Paleta">
        <TR
          label="Verde"
          value={tweaks.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "forest",  label: "Bosque" },
            { value: "jungle",  label: "Selva" },
            { value: "moss",    label: "Musgo" },
          ]}
        />
      </TS>
      <TS label="Layout">
        <TR
          label="Densidad"
          value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "tight",  label: "Compacto" },
            { value: "comfy",  label: "Cómodo" },
            { value: "airy",   label: "Aireado" },
          ]}
        />
        <TR
          label="Links"
          value={tweaks.linkStyle}
          onChange={(v) => setTweak("linkStyle", v)}
          options={[
            { value: "card",   label: "Tarjeta" },
            { value: "list",   label: "Lista" },
            { value: "pill",   label: "Píldora" },
          ]}
        />
      </TS>
      <TS label="Secciones">
        <TT label="Pilares de práctica" value={tweaks.showPractice} onChange={(v)=>setTweak("showPractice", v)}/>
        <TT label="Galería" value={tweaks.showGallery} onChange={(v)=>setTweak("showGallery", v)}/>
        <TT label="Calendario" value={tweaks.showSchedule} onChange={(v)=>setTweak("showSchedule", v)}/>
      </TS>
    </TP>
  );
}

// ---------- App ----------
function App() {
  const useTweaks = window.useTweaks;
  const [tweaks, setTweak] = useTweaks ? useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("acro-lang") || "es"; } catch (e) { return "es"; }
  });
  const toggle = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    try { localStorage.setItem("acro-lang", next); } catch (e) {}
  };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const ctx = useMemo(() => ({ lang, toggle, t: STRINGS[lang] }), [lang]);

  return (
    <LangContext.Provider value={ctx}>
      <div
        className={`app palette-${tweaks.palette} density-${tweaks.density} links-${tweaks.linkStyle}`}
      >
        <Nav />
        <Hero tweaks={tweaks}/>
        <Marquee/>
        <Links tweaks={tweaks}/>
        {tweaks.showPractice && <section id="practice"><Practice/></section>}
        {tweaks.showGallery && <Gallery/>}
        {tweaks.showSchedule && <section id="schedule"><Schedule/></section>}
        <FinalCTA/>
        <Footer/>
        <Tweaks tweaks={tweaks} setTweak={setTweak}/>
      </div>
    </LangContext.Provider>
  );
}

window.App = App;
