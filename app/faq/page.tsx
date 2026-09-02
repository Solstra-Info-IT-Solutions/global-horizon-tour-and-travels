import FAQHero from "@/components/faq/FAQHero";
import FAQCategories from "@/components/faq/FAQCategories";
import FAQList from "@/components/faq/FAQList";
import FAQCTA from "@/components/faq/FAQCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <main>
       <Navbar /> 
      <FAQHero />

      <FAQCategories />

      <FAQList />

      <FAQCTA />
      <Footer />
    </main>
  );
}