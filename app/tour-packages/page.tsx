import ToursHero from "@/components/tours/ToursHero";
import TourCategories from "@/components/tours/TourCategories";
import TourPackagesGrid from "@/components/tours/TourPackagesGrid";
import WhyTravelWithUs from "@/components/tours/WhyTravelWithUs";
import TourCTA from "@/components/tours/TourCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ToursPage() {
  return (
    <main>
      <Navbar /> 
      <ToursHero />

      <TourCategories />

      <TourPackagesGrid />

      <WhyTravelWithUs />

      <TourCTA />
       <Footer />
    </main>
  );
}