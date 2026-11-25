import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { PortfolioItem } from "@/data/portfolioData";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const hasProject = Boolean(item.projectUrl && item.projectUrl !== "#");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_16px_rgba(6,27,58,0.06)] transition-[box-shadow,border-color] duration-300 hover:border-primary/30 hover:shadow-[0_20px_50px_-18px_rgba(0,82,255,0.35)] dark:border-slate-800"
    >
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={item.image}
            alt={`Prévia do projeto ${item.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
      </AspectRatio>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-4 text-center text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary dark:group-hover:text-[#60a5fa]">
          {item.title}
        </h3>

        {hasProject ? (
          <Button
            asChild
            className="mt-auto w-full justify-center gap-2 rounded-xl bg-primary font-bold text-primary-foreground transition-all duration-200 hover:bg-[#0066ff] hover:scale-[1.02]"
          >
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver projeto ${item.title} em nova aba`}
            >
              Ver projeto
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </Button>
        ) : (
          <Button
            disabled
            className="mt-auto w-full justify-center gap-2 rounded-xl bg-primary font-bold text-primary-foreground opacity-50 cursor-not-allowed"
          >
            Ver projeto
            <ArrowUpRight size={16} />
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
