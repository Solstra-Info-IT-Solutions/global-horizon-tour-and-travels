import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCTA from "@/components/contact/ContactCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fcfbf8]">
       <Navbar />     
      <ContactHero />

      <ContactInfoCards />

      <ContactForm />

      <ContactMap />

      <ContactCTA />
       <Footer />
    </main>
  );
}