import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, categories, type PortfolioCategory } from "@/data/portfolioData";
import PortfolioCard from "./PortfolioCard";
import BioProCard from "./BioProCard";
import { cn } from "@/lib/utils";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Landing Pages");

  const filteredItems = portfolioData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="py-20 bg-[#f3f7fd] dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="portfolio-title"
            className="text-3xl md:text-4xl font-bold text-foreground mb-3"
          >
            Nosso <span className="text-primary dark:text-[#60a5fa]">Portfólio</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Explore projetos reais por categoria e veja o padrão de design e velocidade que entregamos.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Categorias do portfólio"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "min-h-[44px] rounded-full px-6 py-3 font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              activeCategory === "Bio Pro Instagram" ? (
                <BioProCard key={item.id} item={item} />
              ) : (
                <PortfolioCard key={item.id} item={item} />
              )
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
