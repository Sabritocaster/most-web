import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VehicleAnalysis from "@/components/VehicleAnalysis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <VehicleAnalysis />
      <Contact />
      <Footer />
    </main>
  );
}
