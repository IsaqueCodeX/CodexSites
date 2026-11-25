import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageSquare, Palette, Code, Rocket, PartyPopper } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Conversa Inicial",
    description: "Entendemos seu negócio, objetivos e público-alvo para traçar o plano perfeito.",
    icon: <MessageSquare size={28} />,
  },
  {
    number: 2,
    title: "Design Exclusivo",
    description: "Criamos um layout moderno e personalizado que valoriza a imagem da sua marca.",
    icon: <Palette size={28} />,
  },
  {
    number: 3,
    title: "Desenvolvimento",
    description: "Construímos a página com código de alta performance, velocidade e foco em conversão.",
    icon: <Code size={28} />,
  },
  {
    number: 4,
    title: "Revisões e Ajustes",
    description: "Você acompanha e alinha os detalhes até ficar 100% satisfeito com o resultado.",
    icon: <Rocket size={28} />,
  },
  {
    number: 5,
    title: "Lançamento!",
    description: "Seu site entra no ar pronto para receber clientes e impulsionar suas vendas.",
    icon: <PartyPopper size={28} />,
  },
];

const StepsSection = () => {
  return (
    <section aria-labelledby="steps-title" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="steps-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary dark:text-[#60a5fa]">5 Passos</span> Para Ter Seu Site no Ar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo ágil, simples e transparente do início à entrega final
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white group-hover:text-[#00e5ff] shadow-lg shadow-primary/20 group-hover:scale-105 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#00a8ff] text-white font-extrabold text-sm flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 text-base sm:text-lg px-8 py-4"
          >
            Começar Meu Projeto Agora
            <Rocket size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StepsSection;
