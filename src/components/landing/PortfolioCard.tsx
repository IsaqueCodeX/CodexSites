import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import type { PortfolioItem } from "@/data/portfolioData";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
    >
      <AspectRatio ratio={16 / 9}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </AspectRatio>
      <div className="p-4">

        <h3 className="font-semibold text-foreground mb-3 text-center">
          {item.title}
        </h3>
        {item.projectUrl && item.projectUrl !== "#" ? (
          <Button
            asChild
            className="w-full bg-accent text-accent-foreground font-bold hover:scale-[1.02] transition-transform duration-200"
          >
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Projeto
            </a>
          </Button>
        ) : (
          <Button
            disabled
            className="w-full bg-accent text-accent-foreground font-bold opacity-50 cursor-not-allowed"
          >
            Ver Projeto
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
