import { motion } from "framer-motion";
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
    description: "Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.",
    icon: <MessageSquare size={28} />,
  },
  {
    number: 2,
    title: "Design Exclusivo",
    description: "Criamos um layout moderno e personalizado que representa sua marca.",
    icon: <Palette size={28} />,
  },
  {
    number: 3,
    title: "Desenvolvimento",
    description: "Transformamos o design em código, com performance e SEO otimizados.",
    icon: <Code size={28} />,
  },
  {
    number: 4,
    title: "Revisões e Ajustes",
    description: "Você revisa e solicita ajustes até ficar 100% satisfeito com o resultado.",
    icon: <Rocket size={28} />,
  },
  {
    number: 5,
    title: "Lançamento!",
    description: "Seu site vai ao ar e você começa a conquistar novos clientes.",
    icon: <PartyPopper size={28} />,
  },
];

const StepsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">5 Passos</span> Para Ter Seu Site no Ar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processo simples e transparente do início ao lançamento
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
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
            href="https://wa.me/5548984576217?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20meu%20projeto%20de%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
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
