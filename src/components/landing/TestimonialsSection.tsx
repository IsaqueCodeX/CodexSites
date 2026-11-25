import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, CheckCheck } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  role: string;
  company: string;
  content: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dra. Ana Paula Silva",
    initials: "AP",
    role: "Proprietária",
    company: "Clínica Estética Renova",
    content:
      "O site anterior era lento e as pessoas desistiam antes de falar com a gente. Agora o cliente clica e já cai no WhatsApp com a mensagem pronta. Triplicamos as consultas no primeiro mês.",
    time: "09:42",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    initials: "CE",
    role: "Fundador",
    company: "Studio Move Fitness",
    content:
      "O design ficou moderno e abre rápido no celular. O investimento se pagou em 10 dias com as matrículas que vieram dos anúncios do Instagram.",
    time: "10:15",
  },
  {
    id: 3,
    name: "Mariana Costa",
    initials: "MC",
    role: "Diretora Comercial",
    company: "Vértice Imóveis",
    content:
      "Precisávamos de um site que passasse solidez para clientes de alto padrão. O resultado superou o que a gente esperava e já fechamos vendas que começaram por aqui.",
    time: "14:30",
  },
  {
    id: 4,
    name: "Roberto Santos",
    initials: "RS",
    role: "Sócio",
    company: "Brasa & Mesa Grill",
    content:
      "O cardápio digital e o link da bio organizaram nossas reservas. Os clientes elogiam a facilidade e não perdemos mais contato no WhatsApp.",
    time: "16:45",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#eef4fd] dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(0,82,255,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(0,168,255,0.1),transparent_45%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos <span className="text-primary dark:text-[#60a5fa]">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conversas reais de quem já colocou o negócio no digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-14 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative bg-white dark:bg-slate-950 p-4 shadow-sm border border-black/5 dark:border-slate-800 flex flex-col"
              style={{ borderRadius: "0 12px 12px 12px" }}
            >
              <div
                className="absolute -left-2 top-0 w-4 h-4 bg-white dark:bg-slate-950"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />

              <div className="flex items-center gap-3 mb-3">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0052ff] to-[#00a8ff] text-white font-bold text-xs tracking-wide flex items-center justify-center shrink-0 shadow-sm"
                >
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[#0052ff] dark:text-[#7dd3fc] text-sm truncate">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                {testimonial.content}
              </p>

              <div className="mt-auto flex justify-end items-center gap-1">
                <span className="text-[10px] text-muted-foreground">{testimonial.time}</span>
                <CheckCheck size={14} className="text-[#53bdeb]" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbe5b] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            <MessageCircle size={24} />
            Consulte o Especialista
          </a>
          <p className="mt-4 text-muted-foreground text-sm">
            Fale diretamente conosco no WhatsApp e tire suas dúvidas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
