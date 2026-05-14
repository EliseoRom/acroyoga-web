"use client";
import { useEffect, useState } from "react";

export default function GlobalEasterEgg() {
  const [toasts, setToasts] = useState([]);

  const msgs = [
    "¿Tenés un michi? 🐈",
    "¿O tenés 2 michis? 🐈🐈",
    "¿Cuántos michis tenés? 🤔",
    "Si sos acroyogui tomás mate 🧉",
    "¿Cuántos mensajes ocultos encontraste? 🕵️‍♂️",
    "¡Sigue explorando! 🌴"
  ];

  useEffect(() => {
    const handleClick = (e) => {
      // Don't trigger if they clicked an interactive element like a link, button, or specific cards
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.closest('.service-card') ||
        target.closest('.stats') ||
        target.closest('.logo-wrap')
      ) {
        return;
      }

      const id = Date.now() + Math.random();
      const newToast = {
        id,
        x: e.clientX,
        y: e.clientY,
        msg: msgs[Math.floor(Math.random() * msgs.length)]
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="fun-toast show"
          style={{
            position: "absolute",
            left: toast.x,
            top: toast.y - 20, // Offset slightly above the click
            transform: "translate(-50%, -100%)" // Center horizontally and place above
          }}
        >
          {toast.msg}
        </div>
      ))}
    </div>
  );
}
