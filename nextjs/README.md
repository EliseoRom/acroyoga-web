# 🌊 Acroyoga Punta Cana — Next.js Landing

Landing page oficial de **Acroyoga Punta Cana**, construida con [Next.js 14](https://nextjs.org/) (App Router) y React 18.

- Bilingüe ES / EN (toggle persistente en `localStorage`)
- Paleta verde bosque + lima
- Componentes 100% en `/components`
- Sin dependencias externas más allá de Next + React

---

## 🚀 Probar en local

Necesitas **Node.js 18.17+** (recomendado 20+).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Para una build de producción local:

```bash
npm run build
npm start
```

---

## ☁️ Subir a Vercel

Tienes dos caminos. **El más fácil es el A.**

### A) Drag & drop (sin Git)

1. Entra a [https://vercel.com/new](https://vercel.com/new) (crea cuenta gratis con tu correo o GitHub).
2. Arrastra la **carpeta del proyecto** (la que contiene `package.json`) al área de import — o haz `vercel deploy` con la CLI.
3. Vercel detecta automáticamente que es **Next.js**. No tienes que configurar nada: deja todos los valores por defecto.
4. Click **Deploy**. En ~1 minuto te da una URL `https://acroyoga-puntacana.vercel.app`.

### B) Con GitHub (recomendado para actualizar fácil)

1. Crea un repo en GitHub: [https://github.com/new](https://github.com/new) (puede ser privado).
2. Dentro de la carpeta del proyecto, ejecuta:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/acroyoga-puntacana.git
   git push -u origin main
   ```
3. Entra a [https://vercel.com/new](https://vercel.com/new), conecta GitHub, selecciona el repo y click **Deploy**.
4. **Ventaja:** cada vez que hagas `git push`, Vercel re-despliega automáticamente.

### C) CLI de Vercel (alternativa rápida)

```bash
npm i -g vercel
vercel        # primera vez: te guía paso a paso
vercel --prod # publicar a producción
```

---

## 🌐 Dominio personalizado

En Vercel → tu proyecto → **Settings → Domains** → "Add". Apunta el dominio (ej. `acroyogapuntacana.com`) siguiendo las instrucciones DNS (un registro A o CNAME). Tarda unos minutos en propagarse.

---

## ✏️ Cómo personalizar

### Cambiar los enlaces (WhatsApp, Instagram, etc.)
Edita `components/Links.jsx`. Reemplaza los `href` de `LINK_META`:

```js
const LINK_META = [
  { id: "wa",     icon: "WhatsApp",  accent: true, href: "https://chat.whatsapp.com/TU_INVITACION" },
  { id: "ig",     icon: "Instagram",               href: "https://instagram.com/acroyoga.puntacana" },
  // ...
];
```

También el botón flotante de WhatsApp del nav: `components/Nav.jsx` y el CTA final: `components/FinalCTA.jsx`.

### Cambiar textos (ES / EN)
Todos los textos están en `lib/i18n.js`. Edita las propiedades dentro de `es` y `en`.

### Reemplazar el logo
Coloca tu logo en `public/logo.png` y en `components/Hero.jsx` cambia:

```jsx
<div className="logo-inner">
  {/* sustituye AcroMark por: */}
  <img src="/logo.png" alt={t.hero.logoAlt} />
</div>
```

### Reemplazar la galería
Igual: pon tus fotos en `public/gallery/` y en `components/Gallery.jsx` sustituye `<Placeholder ... />` por `<img src="/gallery/g1.jpg" alt="..." />`.

### Cambiar los colores de la paleta
En `app/globals.css`, sección `:root`, cambia `--bg`, `--accent`, etc. Las paletas alternativas (`.palette-jungle`, `.palette-moss`) están más abajo — para activarlas, cambia la className en `app/page.jsx`.

---

## 📁 Estructura

```
acroyoga-puntacana/
├─ app/
│  ├─ layout.jsx       # fuentes + providers
│  ├─ page.jsx         # composición de la home
│  └─ globals.css      # todos los estilos
├─ components/
│  ├─ Nav.jsx
│  ├─ Hero.jsx
│  ├─ Marquee.jsx
│  ├─ Links.jsx
│  ├─ Practice.jsx
│  ├─ Gallery.jsx
│  ├─ Schedule.jsx
│  ├─ FinalCTA.jsx
│  ├─ Footer.jsx
│  ├─ AcroMark.jsx     # logo SVG abstracto
│  ├─ Icons.jsx        # iconos inline
│  ├─ PalmSilhouette.jsx
│  └─ Placeholder.jsx  # rectángulos rayados para fotos
├─ lib/
│  ├─ i18n.js          # todos los textos ES/EN
│  └─ LangContext.jsx  # provider de idioma
└─ public/             # pon aquí logo.png, og.jpg, fotos…
```

---

## 🛠️ Stack

- [Next.js 14](https://nextjs.org/) App Router
- [React 18.3](https://react.dev/)
- Google Fonts via `next/font` (Archivo + Inter + Instrument Serif)
- 0 dependencias UI: todo CSS hecho a mano

---

Hecho con ♥ en RD.
