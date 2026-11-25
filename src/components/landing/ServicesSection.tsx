import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicePlan {
  id: number;
  name: string;
  pricePrefix?: string;
  price: string;
  paymentHint: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  custom?: boolean;
}

import { getWhatsAppUrl } from "@/lib/whatsapp";

const servicePlans: ServicePlan[] = [
  {
    id: 1,
    name: "Bio Pro Instagram",
    pricePrefix: "A partir de",
    price: "R$ 397",
    paymentHint: "em até 12x no cartão ou Pix",
    description: "Perfeito para Instagram e redes sociais",
    icon: <Zap className="text-[#67e8f9]" size={28} />,
    features: [
      "Página personalizada de alto impacto",
      "Design responsivo focado no celular",
      "Links e botões ilimitados",
      "Integração direta com WhatsApp",
    ],
  },
  {
    id: 2,
    name: "Landing Page",
    pricePrefix: "A partir de",
    price: "R$ 997",
    paymentHint: "em até 12x no cartão ou Pix",
    description: "Focada em captura de leads e fechamento",
    icon: <Star className="text-[#67e8f9]" size={28} />,
    popular: true,
    features: [
      "Página única de altíssima conversão",
      "Design exclusivo sob medida",
      "Integração rápida com WhatsApp",
      "SEO e performance otimizados",
    ],
  },
  {
    id: 3,
    name: "Site Institucional",
    pricePrefix: "A partir de",
    price: "R$ 2.497",
    paymentHint: "em até 12x no cartão ou Pix",
    description: "Para empresas que buscam máxima autoridade",
    icon: <Crown className="text-[#67e8f9]" size={28} />,
    features: [
      "Até 5 páginas completas e dinâmicas",
      "Design corporativo de alto padrão",
      "Formulário inteligente com validação",
      "Otimização completa de SEO e velocidade",
    ],
  },
  {
    id: 4,
    name: "Personalizado",
    pricePrefix: "Projeto exclusivo",
    price: "Sob Consulta",
    paymentHint: "proposta conforme escopo",
    description: "Para projetos únicos com demandas específicas",
    icon: <Rocket className="text-[#67e8f9]" size={28} />,
    custom: true,
    features: [
      "Consultoria técnica especializada",
      "Funcionalidades sob demanda",
      "Integrações de sistemas e APIs",
      "Solução 100% personalizada",
    ],
  },
];

const ServicesSection = () => {
  const handleWhatsApp = (planName: string) => {
    window.open(
      getWhatsAppUrl(`Olá! Tenho interesse no plano ${planName}. Podemos conversar?`),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="py-24 gradient-cosmic relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="services-title"
            className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight"
          >
            Nossos <span className="text-gradient-hero inline-block">Serviços</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Escolha a solução ideal para o momento do seu negócio e acelere suas vendas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {servicePlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative bg-slate-900/55 backdrop-blur-sm rounded-2xl p-6 flex flex-col shadow-xl transition-all duration-300 border border-white/15 ${
                plan.popular
                  ? "ring-2 ring-[#7dd3fc] md:scale-[1.03] z-10 shadow-[0_20px_50px_rgba(0,20,60,0.32)]"
                  : "hover:border-white/25 hover:shadow-2xl hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-codex-highlight text-codex-navy text-xs font-black px-4 py-1.5 rounded-full shadow-lg tracking-wider whitespace-nowrap">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-[#67e8f9] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-6 pb-6 border-b border-white/10">
                {plan.pricePrefix && (
                  <span className="block text-[11px] uppercase tracking-widest font-semibold text-white/60 mb-1">
                    {plan.pricePrefix}
                  </span>
                )}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="sr-only">Preço: </span>
                  <span className="text-3xl font-extrabold text-white tracking-tight">
                    {plan.price}
                  </span>
                  {!plan.custom && (
                    <span className="text-white/65 text-xs font-medium">
                      /projeto
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/70 mt-1.5">
                  {plan.paymentHint}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="text-[#67e8f9] shrink-0 mt-0.5"
                      size={16}
                    />
                    <span className="text-sm text-white/90 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full font-bold mt-auto py-5 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-[#00a8ff] text-white hover:bg-[#0095e6] shadow-[0_10px_25px_rgba(0,168,255,0.3)]"
                    : "bg-primary text-primary-foreground hover:bg-[#0066ff] shadow-[0_10px_25px_rgba(0,82,255,0.25)]"
                }`}
              >
                {plan.custom ? "Solicitar Orçamento" : "Quero Este Plano"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-white/80 mt-10 text-sm max-w-2xl mx-auto"
        >
          Pagamento facilitado via Pix, boleto ou em até 12x no cartão (sujeito às taxas da operadora).
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/65 mt-3 text-xs sm:text-sm max-w-2xl mx-auto"
        >
          Valores de referência sem mensalidade obrigatória — o orçamento final acompanha a complexidade e os recursos do seu projeto.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
