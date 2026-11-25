import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("servicos");
      if (servicesSection) {
        // Show button when user scrolls near the Services section
        const sectionTop = servicesSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Trigger when viewport middle hits section

        setIsVisible(scrollPosition >= sectionTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-colors duration-200 group sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="text-white" size={32} />

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />

          {/* Tooltip */}
          <span className="absolute right-full mr-3 bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Fale conosco!
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
