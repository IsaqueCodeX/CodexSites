import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AdvantagesSection from "@/components/landing/AdvantagesSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import StepsSection from "@/components/landing/StepsSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:text-base focus:font-semibold focus:text-[#0052ff] focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <HeroSection />
        <AdvantagesSection />
        <PortfolioSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
