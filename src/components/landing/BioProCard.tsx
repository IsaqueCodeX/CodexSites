import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { PortfolioItem } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";

interface BioProCardProps {
    item: PortfolioItem;
}

const BioProCard = ({ item }: BioProCardProps) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 w-full max-w-[320px] mx-auto flex flex-col"
        >
            {/* Mobile Scrollable Viewport - Reduced Height (approx 30% less than 600px -> 420px) */}
            <div className="h-[420px] overflow-y-auto scrollbar-hide relative bg-muted/10 border-b border-border">
                {/* Simple top highlight to suggest screen */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-black/5 to-transparent z-10" />

                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                />
            </div>

            {/* Footer Details - Similar to PortfolioCard */}
            <div className="p-4 bg-card shrink-0 z-20 relative">
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
                            className="flex items-center justify-center gap-2"
                        >
                            Ver Projeto <ExternalLink size={16} />
                        </a>
                    </Button>
                ) : (
                    <Button
                        disabled
                        className="w-full bg-accent text-accent-foreground font-bold opacity-50 cursor-not-allowed"
                    >
                        Em Breve
                    </Button>
                )}
            </div>
        </motion.div>
    );
};

export default BioProCard;
