import Navbar from "@/components/Navbar";
import TransportHero from "@/components/Transport/TransportHero";
import TransportServices from "@/components/Transport/TransportServices";
import Fleet from "@/components/Transport/Fleet";
import Footer from "@/components/Footer";

export default function TransportPage() {
  return (
    <>
      <Navbar />

      <main>
        <TransportHero />
        <TransportServices />
        <Fleet />
      </main>

      <Footer />
    </>
  );
}