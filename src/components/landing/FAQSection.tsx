import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto tempo até meu site estar no ar vendendo?",
    answer: "Nosso foco é agilidade com qualidade. Projetos como Landing Pages e Link na Bio são entregues em tempo recorde, prontos para receber tráfego e converter visitantes em clientes. Não perdemos tempo para que você não perca vendas.",
  },
  {
    question: "Preciso ter todos os textos e imagens prontos?",
    answer: "Não se preocupe! Atuamos de forma consultiva. Se você não tiver o conteúdo, nós te guiamos na estrutura ideal para alta conversão. Você não está sozinho nessa; construímos a autoridade da sua marca juntos.",
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Absolutamente. Adotamos a metodologia 'Mobile First'. Seu site será uma experiência fluida, rápida e intuitiva em qualquer dispositivo, garantindo que você converta leads onde quer que eles estejam.",
  },
  {
    question: "Eu serei o dono do meu site?",
    answer: "Com certeza! O site, o domínio e todo o código são 100% seus. Não prendemos clientes com contratos abusivos. Queremos que você fique conosco pelos resultados que geramos e não por obrigação.",
  },
  {
    question: "Por que investir em um site profissional agora?",
    answer: "Um site profissional não é um custo, é um investimento. Aplicamos estratégias de design, SEO e performance que ferramentas gratuitas não oferecem. É a diferença entre ter apenas um 'cartão de visita' e uma verdadeira máquina de vendas 24h.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="https://wa.me/5548984576217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
