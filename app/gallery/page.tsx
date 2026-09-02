import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryStats from "@/components/gallery/GalleryStats";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryCTA from "@/components/gallery/GalleryCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <main>
       <Navbar /> 
      <GalleryHero />

      <GalleryStats />

      <GalleryGrid />

      <GalleryCTA />
        <Footer />
    </main>
  );
}