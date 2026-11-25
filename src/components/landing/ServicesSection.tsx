import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServicePlan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  popular?: boolean;
  custom?: boolean;
}

const WHATSAPP_URL = "https://wa.me/qr/SW4TC4J2EZVNM1";

const servicePlans: ServicePlan[] = [
  {
    id: 1,
    name: "Link na Bio",
    price: "R$ 497",
    description: "Perfeito para Instagram e redes sociais",
    icon: <Zap className="text-primary dark:text-[#60a5fa]" size={30} />,
    features: [
      "Página personalizada de alto impacto",
      "Design responsivo no celular",
      "Links e botões ilimitados",
      "Integração direta com WhatsApp",
    ],
  },
  {
    id: 2,
    name: "Landing Page",
    price: "R$ 997",
    description: "Focada em captura de leads e fechamento",
    icon: <Star className="text-primary dark:text-[#60a5fa]" size={30} />,
    popular: true,
    features: [
      "Página única de altíssima conversão",
      "Design exclusivo sob medida",
      "Integração rápida com WhatsApp",
      "SEO otimizado para o Google",
    ],
  },
  {
    id: 3,
    name: "Site Institucional",
    price: "R$ 2.497",
    description: "Para empresas que buscam máxima autoridade",
    icon: <Crown className="text-primary dark:text-[#60a5fa]" size={30} />,
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
    price: "Sob Medida",
    description: "Para projetos únicos com demandas específicas",
    icon: <Rocket className="text-primary dark:text-[#60a5fa]" size={30} />,
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
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName}. Podemos conversar?`);
    window.open(`${WHATSAPP_URL}?text=${message}`, "_blank", "noopener,noreferrer");
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
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 flex flex-col shadow-xl transition-all duration-300 border border-white/10 ${
                plan.popular
                  ? "ring-2 ring-[#7dd3fc] md:scale-105 z-10 shadow-[0_20px_50px_rgba(0,20,60,0.28)]"
                  : "hover:shadow-2xl hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-codex-highlight text-codex-navy text-xs font-black px-4 py-1.5 rounded-full shadow-lg tracking-wider">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-[#67e8f9] mb-2">{plan.name}</h3>
                <p className="text-sm text-white/80">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="sr-only">Preço: </span>
                <span className="text-3xl font-extrabold text-white">
                  {plan.price}
                </span>
                {!plan.custom && <span className="text-muted-foreground text-sm"> /projeto</span>}
                {!plan.custom && (
                  <p className="text-xs text-white/70 mt-1">
                    ou a partir de 12x de{" "}
                    {plan.id === 1
                      ? "R$ 41,42"
                      : plan.id === 2
                      ? "R$ 83,08"
                      : "R$ 208,08"}
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check aria-hidden="true" className="text-primary dark:text-[#60a5fa] shrink-0" size={16} />
                    <span className="text-sm text-white/90">{feature}</span>
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
                {plan.custom ? "Falar com Especialista" : "Quero Este Plano"}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-white/75 mt-10 text-sm max-w-2xl mx-auto"
        >
          Pagamento facilitado: até 12x no cartão via link de pagamento (sujeito a taxas da operadora), além de Pix e boleto.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-white/60 mt-4 text-sm"
        >
          * Valores transparentes sem mensalidades ou taxas ocultas. Entre em contato para orçamentos customizados.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
