"use client";
import { useT } from "@/lib/LangContext";
import AcroMark from "./AcroMark";

export default function Footer() {
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
