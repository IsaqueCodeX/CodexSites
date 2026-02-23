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
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
        >
          NOSSO <span className="text-primary">PORTFÓLIO</span>
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
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
