import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const advantages = [
  { title: "Entrega Ágil", description: "Landing Pages no ar em até 7 dias úteis e Bio Pro em até 3 dias úteis" },
  { title: "Pensado Para o Celular", description: "Estrutura feita primeiro para telas móveis, onde nasce a maioria dos contatos" },
  { title: "Rápido Até no 4G", description: "Carregamento leve que evita que o cliente feche a página antes de ver sua oferta" },
  { title: "Foco em Conversão", description: "Layout e chamadas planejadas para levar o visitante direto para o seu WhatsApp" },
  { title: "Atendimento Direto", description: "Você fala direto com quem desenvolve o seu projeto, sem intermediários" },
  { title: "Sem Mensalidade Obrigatória", description: "Valor fechado e transparente — o site e o domínio ficam 100% no seu nome" },
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
