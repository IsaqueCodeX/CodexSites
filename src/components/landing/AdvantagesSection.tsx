import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const advantages = [
  { title: "Entrega Rápida", description: "Seu site no ar em até 7 dias úteis, sem enrolação" },
  { title: "100% Responsivo", description: "Perfeito no celular, tablet e desktop" },
  { title: "Código Limpo e Seguro", description: "Tecnologia atual com proteção contra invasões" },
  { title: "Resultado Garantido", description: "Sites que realmente geram leads e vendas" },
  { title: "Suporte Humanizado", description: "Fale direto com quem criou seu site" },
  { title: "Sem Mensalidade Surpresa", description: "Preço fechado, sem custos ocultos" },
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16"
        >
          Por que escolher a <span className="text-primary">criandosites</span>?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-check-pink/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-check-pink" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm">
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
