import clinicaEstetica from "../assets/Landingpage/Clínica Estética Premium.png";
import academiaFitLife from "../assets/Landingpage/Academia FitLife.png";
import consultoriaFinanceira from "../assets/Landingpage/Consultoria Financeira Capitalis.png";
import marketingDigital from "../assets/Landingpage/Curso de Marketing Digital.png";
import imobiliariaPremium from "../assets/Landingpage/Imobiliária Premium.png";
import petShop from "../assets/Landingpage/Pet Shop Online.png";
import restauranteGourmet from "../assets/Landingpage/Restaurante Gourmet.png";
import lojaMoveis from "../assets/Landingpage/Loja de Móveis.png";
import escolaIdiomas from "../assets/Landingpage/Escola de Idiomas.png";
import clinicaOdontologica from "../assets/Landingpage/Clínica Odontológica.png";
import agenciaViagens from "../assets/Landingpage/Agência de Viagens Horizon.png";
import escritorioAdvocacia from "../assets/Landingpage/Escritório de Advocacia.png";

// Sites Institucionais
import estrutura from "../assets/Institucionais/estrutura.png";
import loveBrasa from "../assets/Institucionais/lovebrasa.png";
import novaEra from "../assets/Institucionais/novaera.png";
import obsidian from "../assets/Institucionais/obsidian.png";
import solaris from "../assets/Institucionais/solaris.png";
import vitalis from "../assets/Institucionais/vitalis.png";

// Bio Pro Instagram
import drValente from "../assets/Bio Pro Instagram/drvalente-advogado.png";
import drVitalis from "../assets/Bio Pro Instagram/drvitalis-estetica.png";
import bioLoveBrasa from "../assets/Bio Pro Instagram/love-brasa.png";
import bioObsidian from "../assets/Bio Pro Instagram/obsidian-auto.png";
import ricardoHorizon from "../assets/Bio Pro Instagram/ricardo-horizon.png";
import teamIron from "../assets/Bio Pro Instagram/team-iron-personal.png";

export type PortfolioCategory = "Landing Pages" | "Sites Institucionais" | "Bio Pro Instagram";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
  projectUrl?: string;
}

export const portfolioData: PortfolioItem[] = [
  // Landing Pages (12 items)
  { id: 1, title: "Agência de Viagens", category: "Landing Pages", image: agenciaViagens, projectUrl: "https://isaquecodex.github.io/HorizonViagens/" },
  { id: 2, title: "Academia FitLife", category: "Landing Pages", image: academiaFitLife, projectUrl: "https://fitlifegym-nu.vercel.app/" },
  { id: 3, title: "Clínica Estética Premium", category: "Landing Pages", image: clinicaEstetica, projectUrl: "https://bellaestetica-two.vercel.app/" },
  { id: 4, title: "Escritório de Advocacia", category: "Landing Pages", image: escritorioAdvocacia, projectUrl: "https://vanguard-advogados.vercel.app/" },
  { id: 5, title: "Imobiliária Premium", category: "Landing Pages", image: imobiliariaPremium, projectUrl: "https://legadoimobiliaria.vercel.app/" },
  { id: 6, title: "Pet Shop Online", category: "Landing Pages", image: petShop, projectUrl: "https://patitaspetshop.vercel.app/" },
  { id: 7, title: "Restaurante Gourmet", category: "Landing Pages", image: restauranteGourmet, projectUrl: "https://isaquecodex.github.io/lessencegastronomia/" },
  { id: 8, title: "Loja de Móveis", category: "Landing Pages", image: lojaMoveis, projectUrl: "https://isaquecodex.github.io/nordic-_home-_design/" },
  { id: 9, title: "Clínica Odontológica", category: "Landing Pages", image: clinicaOdontologica, projectUrl: "https://isaquecodex.github.io/LuminareOdontologia/" },
  { id: 10, title: "Curso de Marketing Digital", category: "Landing Pages", image: marketingDigital, projectUrl: "https://metodovendainfinita.vercel.app/" },
  { id: 11, title: "Consultoria Financeira", category: "Landing Pages", image: consultoriaFinanceira, projectUrl: "https://capitalis-topaz.vercel.app/" },
  { id: 12, title: "Escola de Idiomas", category: "Landing Pages", image: escolaIdiomas, projectUrl: "https://isaquecodex.github.io/nexusidiomas/" },





  // Sites Institucionais (6 items)
  { id: 13, title: "Obsidian Auto Studio", category: "Sites Institucionais", image: obsidian, projectUrl: "https://obsidian-roan.vercel.app" },
  { id: 14, title: "Love Brasa", category: "Sites Institucionais", image: loveBrasa, projectUrl: "https://love-brasa.vercel.app" },
  { id: 15, title: "Nova Era Contabilidade", category: "Sites Institucionais", image: novaEra, projectUrl: "https://nova-era-contabilidade.vercel.app" },
  { id: 16, title: "Estrutura Engenharia", category: "Sites Institucionais", image: estrutura, projectUrl: "https://estrutura-engenharia.vercel.app" },
  { id: 17, title: "Solaris Energia", category: "Sites Institucionais", image: solaris, projectUrl: "https://solaris-energia-seven.vercel.app" },
  { id: 18, title: "Vitalis Clínica", category: "Sites Institucionais", image: vitalis, projectUrl: "https://vitalis-clinica-site.vercel.app" },

  // Bio Pro Instagram (6 items)
  { id: 19, title: "Dr. Valente - Advocacia", category: "Bio Pro Instagram", image: drValente, projectUrl: "https://dr-valente-bio.vercel.app" },
  { id: 20, title: "Dr. Vitalis - Estética", category: "Bio Pro Instagram", image: drVitalis, projectUrl: "https://dr-vitalis-bio.vercel.app" },
  { id: 21, title: "Love Brasa - Bio", category: "Bio Pro Instagram", image: bioLoveBrasa, projectUrl: "https://love-brasa-bio-pro.vercel.app" },
  { id: 22, title: "Obsidian - Bio", category: "Bio Pro Instagram", image: bioObsidian, projectUrl: "https://obsidian-auto-studio-bio.vercel.app" },
  { id: 23, title: "Ricardo - Horizon", category: "Bio Pro Instagram", image: ricardoHorizon, projectUrl: "https://ricardo-horizon-bio.vercel.app" },
  { id: 24, title: "Team Iron - Personal", category: "Bio Pro Instagram", image: teamIron, projectUrl: "https://iron-team-bio.vercel.app" },
];

export const categories: PortfolioCategory[] = [
  "Landing Pages",
  "Sites Institucionais",
  "Bio Pro Instagram",
];
