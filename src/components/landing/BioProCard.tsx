import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/data/portfolioData";
import { ChevronsDown, ExternalLink } from "lucide-react";

interface BioProCardProps {
  item: PortfolioItem;
}

const BioProCard = ({ item }: BioProCardProps) => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 w-full max-w-[320px] mx-auto flex flex-col"
    >
      <div className="relative border-b border-border">
        <div
          className="relative h-[420px] overflow-y-auto scrollbar-hide bg-[#f3f7fd] dark:bg-slate-900"
          onScroll={(event) =>
            setShowScrollHint(event.currentTarget.scrollTop < 24)
          }
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-black/5 to-transparent z-10" />

          <img
            src={item.image}
            alt={`Prévia do projeto ${item.title}`}
            className="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>

        <div
          className={`pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 transition-opacity duration-300 ${
            showScrollHint ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <div className="flex h-9 w-9 animate-scroll-hint items-center justify-center rounded-full border border-border bg-white/95 text-primary shadow-md backdrop-blur-sm dark:border-slate-700 dark:bg-slate-950/95 dark:text-[#60a5fa]">
            <ChevronsDown size={17} strokeWidth={2.2} />
          </div>
        </div>
      </div>

      <div className="p-4 bg-card shrink-0 z-20 relative">
        <h3 className="font-semibold text-foreground mb-3 text-center">
          {item.title}
        </h3>
        {item.projectUrl && item.projectUrl !== "#" ? (
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground font-bold hover:bg-[#0066ff] hover:scale-[1.02] transition-all duration-200"
          >
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Ver Projeto <ExternalLink size={16} />
            </a>
          </Button>
        ) : (
          <Button
            disabled
            className="w-full bg-primary text-primary-foreground font-bold opacity-50 cursor-not-allowed"
          >
            Em Breve
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default BioProCard;
