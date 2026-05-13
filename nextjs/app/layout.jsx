import "./globals.css";
import { Archivo, Inter, Instrument_Serif } from "next/font/google";
import { LangProvider } from "@/lib/LangContext";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: "Acroyoga Punta Cana · Acro & Movilidad",
  description:
    "Entrená fuerza, equilibrio y flexibilidad con acroyoga en el corazón del Caribe. Workshops · Eventos · Team Building en República Dominicana.",
  openGraph: {
    title: "Acroyoga Punta Cana",
    description: "Acro & Movilidad · República Dominicana",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${archivo.variable} ${inter.variable} ${instrument.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
