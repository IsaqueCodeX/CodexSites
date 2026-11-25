import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

const heroVideos = [
  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Obsidian-Auto-Studio-_-Estetica-Automotiva-Premium-em-Sao-Paulo-Google-Chrome-2026-02-15-20-04-48.mp4",
    alt: "Obsidian Auto Studio",
  },
  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Love-Brasa-—-Fogo-Carvao-_-Steakhouse-Sao-Paulo-Google-Chrome-2026-02-15-19-44-23.mp4",
    alt: "Love Brasa Steakhouse",
  },
  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Patitas-Co.-Pet-Shop-Grooming-em-Sao-Paulo-Google-Chrome-2026-02-15-20-14-56-Trim.mp4",
    alt: "Patitas Co. Pet Shop Grooming",
  },
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="gradient-cosmic relative flex min-h-screen min-h-[100svh] items-center overflow-hidden pt-32 pb-20"
    >
      {/* Luzes de fundo */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative z-20"
          >
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.55rem] font-extrabold leading-[1.14] mb-6 tracking-tight"
            >
              <span className="text-shine">
                A solução digital certa para o seu cliente encontrar você na internet.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-9 max-w-xl leading-relaxed font-light">
              De <span className="text-shine-fast font-semibold">Landing Pages</span>,{" "}
              <span className="text-shine-fast font-semibold">Sites Institucionais</span>,{" "}
              <span className="text-shine-fast font-semibold">Bio para as redes sociais</span>{" "}
              seja qual for seu projeto viabilizamos soluções que transmitem autoridade e colocam sua empresa no mercado digital.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0052ff] hover:bg-[#eef5ff] text-lg sm:text-xl font-extrabold group w-full sm:w-auto hover:scale-105 transition-all duration-300 py-6 rounded-2xl shadow-[0_14px_35px_rgba(0,0,0,0.22)]"
              >
                <a href="https://wa.me/qr/SW4TC4J2EZVNM1" target="_blank" rel="noopener noreferrer">
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

          {/* Vitrine de vídeos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[720px] xl:max-w-[760px]">
              <div className="absolute inset-0 bg-cyan-300/20 rounded-2xl blur-3xl scale-105 -z-10" />

              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#061b3a]">
                {/* Barra estilo navegador */}
                <div
                  aria-hidden="true"
                  className="h-9 bg-[#061b3a] border-b border-white/10 px-4 flex items-center justify-between z-10 relative"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] text-white/80 font-sans">
                    <span className="text-[10px]" aria-hidden="true">🔒</span>
                    <span className="font-medium tracking-wide">codexsites.com.br</span>
                  </div>
                  <div className="w-12" />
                </div>

                <div className="relative aspect-video w-full bg-[#061b3a]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideoIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full bg-[#061b3a]"
                    >
                      <video
                        src={heroVideos[currentVideoIndex].src}
                        aria-label={`Prévia do projeto ${heroVideos[currentVideoIndex].alt}`}
                        autoPlay={!prefersReducedMotion}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-1">
                {heroVideos.map((video, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentVideoIndex(index)}
                    className="flex h-11 w-11 items-center justify-center rounded-full"
                    aria-label={`Ver vídeo ${index + 1}: ${video.alt}`}
                    aria-pressed={index === currentVideoIndex}
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        index === currentVideoIndex
                          ? "w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                          : "w-2 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
