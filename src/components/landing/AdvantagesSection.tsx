import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const advantages = [
  { title: "Entrega Rápida", description: "Seu site no ar em até 7 dias úteis, sem enrolação" },
  { title: "100% Responsivo", description: "Perfeito no celular, tablet e computador" },
  { title: "Código Limpo e Seguro", description: "Tecnologia moderna com proteção e estabilidade" },
  { title: "Foco em Vendas", description: "Estruturado para atrair visitantes e converter em clientes" },
  { title: "Suporte Próximo", description: "Fale direto com a equipe que construiu o seu projeto" },
  { title: "Sem Mensalidade Surpresa", description: "Preço claro e fechado, sem taxas escondidas" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const AdvantagesSection = () => {
  return (
    <section aria-labelledby="advantages-title" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          id="advantages-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          Por que escolher a <span className="text-primary dark:text-[#60a5fa]">CodexSites</span>?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-sm shadow-primary/20">
                  <CheckCircle aria-hidden="true" className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-[#00e5ff]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
