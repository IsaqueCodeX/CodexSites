import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";

import { getWhatsAppUrl } from "@/lib/whatsapp";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.name.length > 100) {
      toast.error("Por favor, insira um nome válido (máximo 100 caracteres)");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Por favor, insira um email válido");
      return;
    }
    if (formData.phone && formData.phone.length > 20) {
      toast.error("Telefone inválido");
      return;
    }
    if (!formData.message.trim() || formData.message.length > 1000) {
      toast.error("Por favor, insira uma mensagem válida (máximo 1000 caracteres)");
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = `Olá! Meu nome é ${formData.name.trim()}.\n\nEmail: ${formData.email.trim()}\nTelefone: ${formData.phone.trim() || "Não informado"}\n\nMensagem: ${formData.message.trim()}`;

    window.open(getWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");

    toast.success("Redirecionando para o WhatsApp...");

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" aria-labelledby="contact-title" className="py-20 bg-[#f3f7fd] dark:bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Entre em <span className="text-primary dark:text-[#60a5fa]">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preencha o formulário abaixo e conversamos diretamente sobre o seu projeto
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-2xl shadow-md border border-border hover:border-primary/30 transition-all duration-300"
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">Nome *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                required
                className="bg-white dark:bg-slate-950 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={255}
                required
                className="bg-white dark:bg-slate-950 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">Telefone / WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={handleChange}
                maxLength={20}
                className="bg-white dark:bg-slate-950 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground font-medium">Mensagem *</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Como podemos ajudar você e o seu negócio?"
                value={formData.message}
                onChange={handleChange}
                maxLength={1000}
                required
                rows={4}
                className="bg-white dark:bg-slate-950 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/60 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              aria-busy={isSubmitting}
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-[#0066ff] font-bold shadow-lg shadow-primary/20 py-6 rounded-xl hover:scale-[1.01] transition-all"
            >
              {isSubmitting ? (
                <>
                  <CheckCircle className="mr-2" size={20} />
                  Enviando...
                </>
              ) : (
                <>
                  <MessageCircle className="mr-2" size={20} />
                  Enviar pelo WhatsApp
                </>
              )}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Ao enviar, abriremos seu WhatsApp com a conversa pronta para atendimento direto.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
