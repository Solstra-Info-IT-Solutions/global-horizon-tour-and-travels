import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import JourneyProcess from "@/components/services/JourneyProcess";
import ServiceExperience from "@/components/services/ServiceExperience";
import ServicesCTA from "@/components/services/ServicesCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
            <Navbar />
      <ServicesHero />

      <ServicesGrid />

      {/* NEW PREMIUM JOURNEY PROCESS */}
      <JourneyProcess />

      <ServiceExperience />

      <ServicesCTA />
      <Footer/>
    </main>
  );
}