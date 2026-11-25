import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import horizonFullPage from "@/assets/hero-scroll/horizon-viagens.webp";
import fitlifeFullPage from "@/assets/hero-scroll/fitlife-gym.webp";
import patitasFullPage from "@/assets/hero-scroll/patitas-petshop.webp";
import loveBrasaFullPage from "@/assets/hero-scroll/love-brasa.webp";
import solarisFullPage from "@/assets/hero-scroll/solaris-energia.webp";
import obsidianFullPage from "@/assets/hero-scroll/obsidian-auto.webp";

interface ShowcaseSlide {
  id: string;
  title: string;
  domain: string;
  image: string;
  alt: string;
  /** Natural dimensions of the full-page .webp (width is 1280px). */
  width: number;
  height: number;
  durationSec: number;
}

const VIEWPORT_RATIO = 9 / 16;

const showcaseSlides: ShowcaseSlide[] = [
  {
    id: "horizon-viagens",
    title: "Horizon Viagens",
    domain: "horizonviagens.com.br",
    image: horizonFullPage,
    alt: "Página completa do projeto Horizon Viagens",
    width: 1280,
    height: 3770,
    durationSec: 5.6,
  },
  {
    id: "fitlife-gym",
    title: "Academia FitLife",
    domain: "fitlifegym.com.br",
    image: fitlifeFullPage,
    alt: "Página completa do projeto Academia FitLife",
    width: 1280,
    height: 3626,
    durationSec: 5.6,
  },
  {
    id: "patitas-petshop",
    title: "Patitas Pet Shop",
    domain: "patitaspetshop.com.br",
    image: patitasFullPage,
    alt: "Página completa do projeto Patitas Pet Shop",
    width: 1280,
    height: 4003,
    durationSec: 5.8,
  },
  {
    id: "love-brasa",
    title: "Love Brasa",
    domain: "lovebrasa.com.br",
    image: loveBrasaFullPage,
    alt: "Página completa do projeto Love Brasa",
    width: 1280,
    height: 3949,
    durationSec: 5.8,
  },
  {
    id: "solaris-energia",
    title: "Solaris Energia",
    domain: "solarisenergia.com.br",
    image: solarisFullPage,
    alt: "Página completa do projeto Solaris Energia",
    width: 1280,
    height: 4104,
    durationSec: 5.8,
  },
  {
    id: "obsidian-auto",
    title: "Obsidian Auto Studio",
    domain: "obsidianauto.com.br",
    image: obsidianFullPage,
    alt: "Página completa do projeto Obsidian Auto Studio",
    width: 1280,
    height: 5783,
    durationSec: 6.4,
  },
];

function getScrollEndPercent(width: number, height: number): string {
  const imageRatio = height / width;
  if (imageRatio <= VIEWPORT_RATIO) {
    return "0%";
  }
  // Scroll smoothly from top down to the middle (~50%) of the page before fading.
  const endOffset = (1 - VIEWPORT_RATIO / imageRatio) * 50;
  return `-${endOffset.toFixed(2)}%`;
}

const HeroShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const activeSlide = showcaseSlides[currentIndex];
  const animationPlayState =
    isPaused || prefersReducedMotion ? "paused" : "running";

  const scrollStyle = {
    animationPlayState,
    "--hero-scroll-end": getScrollEndPercent(
      activeSlide.width,
      activeSlide.height
    ),
    "--hero-scroll-duration": `${activeSlide.durationSec}s`,
  } as CSSProperties;

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const handleScrollComplete = () => {
    if (!prefersReducedMotion && !isPaused) {
      setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
    }
  };

  return (
    <div className="relative w-full max-w-[740px] xl:max-w-[780px]">
      <div className="absolute inset-0 bg-cyan-300/20 rounded-2xl blur-3xl scale-105 -z-10" />

      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="group relative w-full rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-[#061b3a]"
      >
        {/* Barra estilo navegador */}
        <div
          aria-hidden="true"
          className="h-9 bg-[#061b3a] border-b border-white/10 px-4 flex items-center justify-between z-20 relative"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] text-white/80 font-sans">
            <span className="text-[10px]" aria-hidden="true">
              🔒
            </span>
            <span className="font-medium tracking-wide">
              {activeSlide.domain}
            </span>
          </div>
          <div className="w-12" />
        </div>

        {/* Área limpa da vitrine (scroll real de página inteira: topo -> meio) */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#061b3a]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full overflow-hidden bg-[#061b3a]"
            >
              <img
                src={activeSlide.image}
                alt={activeSlide.alt}
                width={activeSlide.width}
                height={activeSlide.height}
                loading={currentIndex === 0 ? "eager" : "lazy"}
                decoding="async"
                onAnimationEnd={handleScrollComplete}
                style={scrollStyle}
                className={`w-full h-auto block ${
                  prefersReducedMotion ? "" : "animate-hero-scroll"
                }`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Setas sutis de navegação manual */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Projeto anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#061b3a]/65 border border-white/15 text-white/80 backdrop-blur-sm opacity-75 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 hover:bg-[#061b3a]/90 hover:text-white transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Próximo projeto"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#061b3a]/65 border border-white/15 text-white/80 backdrop-blur-sm opacity-75 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 hover:bg-[#061b3a]/90 hover:text-white transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* 6 indicadores alinhados abaixo da moldura */}
      <div className="mt-3 flex items-center justify-center gap-0.5 sm:gap-1">
        {showcaseSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className="flex h-11 w-9 sm:w-10 items-center justify-center rounded-full"
            aria-label={`Ver projeto ${index + 1}: ${slide.title}`}
            aria-pressed={index === currentIndex}
          >
            <span
              aria-hidden="true"
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]"
                  : "w-2 bg-white/35 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroShowcase;
