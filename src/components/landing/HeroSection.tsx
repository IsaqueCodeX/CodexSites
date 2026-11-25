import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HeroShowcase from "./HeroShowcase";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="gradient-cosmic relative flex min-h-screen min-h-[100svh] items-center overflow-hidden pt-28 lg:pt-24 pb-20"
    >
      {/* Luzes de fundo */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-14 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative z-20"
          >
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.55rem] font-extrabold leading-[1.14] mb-6 tracking-tight text-white"
            >
              A solução digital certa para o seu cliente{" "}
              <span className="text-gradient-hero">
                encontrar você na internet.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-9 max-w-xl leading-relaxed font-light">
              De <span className="font-semibold text-white">Landing Pages</span>,{" "}
              <span className="font-semibold text-white">Sites Institucionais</span> e{" "}
              <span className="font-semibold text-white">Bio para redes sociais</span>{" "}
              — seja qual for o seu projeto, criamos soluções que transmitem autoridade e colocam sua empresa no mercado digital.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0052ff] hover:bg-[#eef5ff] text-lg sm:text-xl font-extrabold group w-full sm:w-auto hover:scale-105 transition-all duration-300 py-6 rounded-2xl shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
              >
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  Sim, quero meu site profissional
                  <ArrowRight
                    className="ml-2 transition-transform duration-200 group-hover:translate-x-1.5"
                    size={22}
                  />
                </a>
              </Button>
            </div>

            <p className="mt-5 text-sm text-white/65">
              Atendimento direto no WhatsApp · Orçamento sem compromisso
            </p>
          </motion.div>

          {/* Vitrine interativa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <HeroShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
