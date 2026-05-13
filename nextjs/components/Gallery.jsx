"use client";
import { useT } from "@/lib/LangContext";
import Placeholder from "./Placeholder";

export default function Gallery() {
  const { t } = useT();
  const images = [
    "acroyogapuntacana.jpg", "acroyogapuntacana3.jpg", 
    "acroyogapuntacana4.jpg", "acroyogapuntacana5.jpg", "acroyogapuntacana6.jpg", 
    "acroyogapuntacana8.jpg", "acroyogapuntacana9.jpg", 
    "acroyogapuntacana10.jpg", "acroyogapuntacana11.jpg", "acroyogapuntacana13.jpg", 
    "acroyogapuntacana15.jpg", "acroyogapuntacana16.jpg"
  ];

  return (
    <section className="gallery">
      <header className="section-head" style={{ width: "var(--max)", margin: "0 auto 56px" }}>
        <span className="kicker"><span className="kicker-bar"/> {t.gallery.kicker}</span>
        <h2>{t.gallery.title_a}<br/>{t.gallery.title_b}<em>{t.gallery.title_bem}</em>{t.gallery.title_c}</h2>
      </header>

      <div className="gallery-carousel">
        <div className="gallery-track">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="gallery-item">
              <img 
                src={`/${img}`} 
                alt={`Acroyoga Punta Cana - Comunidad ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
