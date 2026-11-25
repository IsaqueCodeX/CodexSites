import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
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
    question: "Qual é o prazo real de entrega?",
    answer:
      "Depende do tipo de projeto, sempre contado após o alinhamento e o envio das informações da sua empresa: Bio Pro em até 3 dias úteis, Landing Page em até 7 dias úteis e Site Institucional entre 10 e 15 dias úteis.",
  },
  {
    question: "Preciso ter todos os textos e fotos prontos?",
    answer:
      "Não. Se você já tiver material, usamos tudo. Se não tiver, nós organizamos a estrutura das seções e te ajudamos a escrever textos claros e objetivos para o seu público — sem você travar nessa etapa.",
  },
  {
    question: "E o domínio e a hospedagem? Existe mensalidade?",
    answer:
      "Não cobramos mensalidade obrigatória pelo site. Você precisa apenas do seu domínio (um .com.br custa em torno de R$ 40 por ano no Registro.br) e, quando o projeto exigir, da hospedagem. Nós te ajudamos a registrar e configurar tudo no seu nome.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Trabalhamos de forma transparente: 50% de entrada para iniciar o projeto e 50% na entrega, após sua aprovação. Você pode pagar via Pix, boleto ou parcelar em até 12x no cartão (com as taxas da operadora).",
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer:
      "Sim. Desenvolvemos pensando primeiro em quem acessa pelo celular e pelo 4G, já que a maior parte dos cliques vindos do Instagram e do Google acontece em telas móveis.",
  },
  {
    question: "O site e o código ficam no meu nome?",
    answer:
      "Sim, 100% seus. Domínio, arquivos e código pertencem a você, sem contrato de fidelidade nem dependência para continuar com o site no ar.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas <span className="text-primary dark:text-[#60a5fa]">Frequentes</span>
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
                className="bg-card rounded-xl border border-border hover:border-primary/40 data-[state=open]:border-primary/60 data-[state=open]:shadow-md px-6 shadow-sm transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary dark:hover:text-[#60a5fa] hover:no-underline">
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
              href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre os sites da CodexSites.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary dark:text-[#60a5fa] font-semibold hover:underline"
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
