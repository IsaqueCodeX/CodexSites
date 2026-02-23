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

const WHATSAPP_URL = "https://wa.me/5548984576217";

const servicePlans: ServicePlan[] = [
  {
    id: 1,
    name: "Link na Bio",
    price: "R$ 297",
    description: "Perfeito para Instagram e redes sociais",
    icon: <Zap className="text-accent" size={32} />,
    features: [
      "Página personalizada",
      "Design responsivo",
      "Links ilimitados",
      "Integração com redes sociais",
    ],
  },
  {
    id: 2,
    name: "Landing Page",
    price: "R$ 697",
    description: "Perfeita para captura de leads",
    icon: <Star className="text-accent" size={32} />,
    popular: true,
    features: [
      "Página única otimizada",
      "Design premium exclusivo",
      "Formulário de contato",
      "SEO básico",
    ],
  },
  {
    id: 3,
    name: "Site Institucional",
    price: "R$ 1.297",
    description: "Ideal para empresas em crescimento",
    icon: <Crown className="text-accent" size={32} />,
    features: [
      "Até 5 páginas",
      "Design premium exclusivo",
      "Formulário inteligente",
      "SEO avançado",
    ],
  },
  {
    id: 4,
    name: "Personalizado",
    price: "Sob Medida",
    description: "Para projetos únicos e complexos",
    icon: <Rocket className="text-accent" size={32} />,
    custom: true,
    features: [
      "Consultoria especializada",
      "Funcionalidades sob demanda",
      "Integrações complexas",
      "Solução 100% adaptada",
    ],
  },
];

const ServicesSection = () => {
  const handleWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no plano ${planName}. Podemos conversar?`);
    window.open(`${WHATSAPP_URL}?text=${message}`, "_blank");
  };

  return (
    <section id="servicos" className="py-20 gradient-cosmic">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio e comece a vender mais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {servicePlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-card rounded-2xl p-6 shadow-xl flex flex-col ${plan.popular ? "ring-2 ring-accent md:scale-105 z-10" : ""
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-sm font-bold px-4 py-1 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-primary" style={{ textShadow: "0 0 10px rgba(var(--primary), 0.7), 0 0 20px rgba(var(--primary), 0.5)" }}>
                  {plan.price}
                </span>
                {!plan.custom && <span className="text-muted-foreground text-sm"> /projeto</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="text-accent shrink-0" size={16} />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full font-bold mt-auto ${plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                variant={plan.custom ? "outline" : "default"}
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
          className="text-center text-white/60 mt-12 text-sm"
        >
          * Valores podem variar de acordo com a complexidade do projeto. Entre em contato para um orçamento personalizado.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
