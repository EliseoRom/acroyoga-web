"use client";
import { useT } from "@/lib/LangContext";
import { useEffect, useRef, useState } from "react";

export default function Gallery() {
  const { t } = useT();
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    "acroyogapuntacana.jpg", "acroyogapuntacana3.jpg", 
    "acroyogapuntacana4.jpg", "acroyogapuntacana5.jpg", "acroyogapuntacana6.jpg", 
    "acroyogapuntacana8.jpg", "acroyogapuntacana9.jpg", 
    "acroyogapuntacana10.jpg", "acroyogapuntacana11.jpg", "acroyogapuntacana13.jpg", 
    "acroyogapuntacana15.jpg", "acroyogapuntacana16.jpg"
  ];

  useEffect(() => {
    let animationId;
    const track = trackRef.current;
    let floatScroll = track ? track.scrollLeft : 0;
    
    const play = () => {
      if (!isPaused && track) {
        floatScroll += 0.40;
        track.scrollLeft = floatScroll;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          floatScroll = 0;
          track.scrollLeft = 0;
        }
      } else if (track) {
        // Sync the float value with native scroll when paused/dragged
        floatScroll = track.scrollLeft;
      }
      animationId = requestAnimationFrame(play);
    };

    animationId = requestAnimationFrame(play);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section className="gallery">
      <div style={{ width: "var(--max)", margin: "0 auto" }}>
        <header className="section-head" style={{ marginBottom: "56px" }}>
          <span className="kicker"><span className="kicker-bar"/> {t.gallery.kicker}</span>
          <h2>{t.gallery.title}</h2>
        </header>
      </div>

      <div className="gallery-carousel">
        <div 
          className="gallery-track-js" 
          ref={trackRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
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
