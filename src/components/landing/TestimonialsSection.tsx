import { motion } from "framer-motion";
import { Check, CheckCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  time: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Paula Silva",
    role: "CEO",
    company: "Clínica Estética Renova",
    content: "Triplicamos nossos agendamentos online após o novo site! A equipe entendeu exatamente o que precisávamos e entregou além das expectativas. 🙏",
    time: "09:42",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    role: "Fundador",
    company: "Academia FitLife",
    content: "Nossa taxa de conversão aumentou 200%! O site ficou profissional e moderno, nossos alunos adoraram. Recomendo demais! 💪",
    time: "10:15",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Diretora",
    company: "Imobiliária Premium",
    content: "Vendemos 3 imóveis no primeiro mês após o lançamento da landing page. Investimento que retornou muito rápido! 🏠✨",
    time: "14:30",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
  },
  {
    id: 4,
    name: "Roberto Santos",
    role: "Proprietário",
    company: "Restaurante Sabor & Arte",
    content: "As reservas online dispararam! O design do site transmite exatamente a experiência que oferecemos. Parabéns pelo trabalho! 👏",
    time: "16:45",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#efe7dd] relative overflow-hidden">
      {/* WhatsApp Background Pattern Overlay (Optional - keeping it subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados reais de quem confia no nosso trabalho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 relative max-w-sm mx-auto w-full"
              style={{ borderRadius: "0 12px 12px 12px", boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)" }}
            >
              {/* Triangle for chat bubble effect */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}></div>

              <div className="flex gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <p className="font-bold text-[#128C7E] truncate text-sm">{testimonial.name}</p>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{testimonial.role} - {testimonial.company}</p>

                  <p className="text-gray-800 text-sm leading-relaxed mb-1">
                    {testimonial.content}
                  </p>

                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-[10px] text-gray-400">{testimonial.time}</span>
                    <CheckCheck size={14} className="text-[#53bdeb]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Consulte o Especialista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg group"
          >
            <a
              href="https://wa.me/5548984576217?text=Ol%C3%A1!%20Li%20os%20depoimentos%20e%20quero%20saber%20mais%20sobre%20como%20ter%20um%20site%20assim."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle size={28} />
              Consulte o Especialista
            </a>
          </Button>
          <p className="mt-4 text-muted-foreground text-sm">
            Fale diretamente conosco no WhatsApp e tire suas dúvidas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
