import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Links from "@/components/Links";
import Services from "@/components/Services";
import Practice from "@/components/Practice";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="app palette-forest density-comfy links-card">
      <Nav />
      <Hero />
      <Marquee />
      <Links />
      <Services />
      <Practice />
      <Gallery />
      <Schedule />
      <FinalCTA />
      <Footer />
    </main>
  );
}
