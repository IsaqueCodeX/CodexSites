import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-codex-navy/95 backdrop-blur-md border-b border-white/10 ${
        isScrolled || isOpen ? "shadow-xl py-2" : "py-3"
      }`}
    >
      <nav className="container mx-auto px-4" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="block transition-opacity hover:opacity-90"
            aria-label="CodexSites — voltar ao início"
          >
            <img
              src="/logo.webp"
              alt="CodexSites"
              width={2172}
              height={724}
              className="h-[72px] md:h-[84px] w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button
              asChild
              className="btn-cta text-sm px-6 py-3 rounded-xl"
            >
              <a
                href="https://wa.me/qr/SW4TC4J2EZVNM1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 py-4 border-t border-white/10 mt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <Button asChild className="btn-cta w-full rounded-xl">
                  <a
                    href="https://wa.me/qr/SW4TC4J2EZVNM1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Orçamento
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
