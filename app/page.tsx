import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Services from "@/components/Services";
import About from "@/app/about/page";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Destinationss from "@/components/Destinationss";
import WhyChooseUs from "@/components/WhyChooseUs";
import PlanTour from "@/components/PlanTour";
import HappyClients from "@/components/HappyClients";
import HomeServices from "@/components/HomeServices";
import FeaturedTourPackages from "@/components/FeaturedTourPackages";
import JourneyTimeline from "@/components/JourneyTimeline";
import HomeTransportServices from "@/components/HomeTransportServices";
import DestinationCTA from "@/components/DestinationCTA";
import GalleryPreview from "@/components/GalleryPreview";
import PersonalizedJourneyCTA from "@/components/PersonalizedJourneyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeServices />
        <Destinationss/>
        <FeaturedTourPackages />
         <JourneyTimeline />
          <HomeTransportServices />
           <DestinationCTA />
            <GalleryPreview />
 <PersonalizedJourneyCTA />
        <WhyChooseUs/>
        <PlanTour/>
        <HappyClients/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
