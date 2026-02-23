import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroVideos = [

  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Patitas-Co.-Pet-Shop-Grooming-em-Sao-Paulo-Google-Chrome-2026-02-15-20-14-56-Trim.mp4",
    alt: "Patitas Co. Pet Shop Grooming",
  },
  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Love-Brasa-—-Fogo-Carvao-_-Steakhouse-Sao-Paulo-Google-Chrome-2026-02-15-19-44-23.mp4",
    alt: "Love Brasa Steakhouse",
  },
  {
    src: "https://isaquesantosdev.com/wp-content/uploads/2026/02/Obsidian-Auto-Studio-_-Estetica-Automotiva-Premium-em-Sao-Paulo-Google-Chrome-2026-02-15-20-04-48.mp4",
    alt: "Obsidian Auto Studio",
  },
];

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000); // 8 seconds per video

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="gradient-cosmic min-h-screen flex items-center pt-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left relative z-20"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              Transforme sua Presença Digital em uma{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA500] to-[#FF7F50] drop-shadow-[0_0_25px_rgba(96,239,255,0.6)]">
                Máquina de Vendas
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-light">
              Design impactante e estratégia focada em conversão. Não perca mais clientes para a concorrência: tenha um site que posiciona sua marca e vende 24h por dia.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-cta text-lg uppercase tracking-wide group"
            >
              <a href="https://wa.me/5548984576217?text=Ol%C3%A1!%20Quero%20um%20site%20TOP!" target="_blank" rel="noopener noreferrer">
                QUERO UM SITE TOP
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={24} />
              </a>
            </Button>
          </motion.div>

          {/* Right Content - Rotating Videos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[600px]">
              {/* Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-primary/30 to-transparent rounded-[2rem] blur-3xl scale-110 -z-10 animate-glow-pulse" />

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-black/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVideoIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full bg-black/50"
                  >
                    <video
                      src={heroVideos[currentVideoIndex].src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Video indicators */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                {heroVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentVideoIndex
                      ? "bg-accent scale-150 shadow-[0_0_10px_rgba(255,144,19,0.8)]"
                      : "bg-white/30 hover:bg-white/60"
                      }`}
                    aria-label={`Ver vídeo ${index + 1}`}
                  />
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
