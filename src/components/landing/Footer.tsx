import { Github, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer aria-label="Rodapé" className="bg-[#061b3a] py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <img
              src="/logo.webp"
              alt="CodexSites"
              width={2172}
              height={724}
              className="h-14 w-auto mb-4 mx-auto md:mx-0 object-contain"
            />
            <p className="text-white/70 text-sm max-w-xs">
              Criação de Landing Pages, Sites Institucionais e Bio Pro focados em conversão.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/IsaqueCodeX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#60a5fa] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://isaquesantosdev.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#60a5fa] transition-colors duration-300"
              aria-label="Website Pessoal"
            >
              <Globe size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaque-santos-720b8b15a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#60a5fa] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-xs">
          <p>© 2026 CodexSites. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
