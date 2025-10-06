import landwaveIcon from "@/assets/landwave-logo-icon.png";
import { Button } from "@/components/ui/button";
import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src={landwaveIcon} 
              alt="Landwave" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-xl md:text-2xl font-bold">landwave</span>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground text-center max-w-md px-4">
            Criamos landing pages modernas que transformam visitantes em clientes.
          </p>

          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToTop}
            className="gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Voltar ao início
          </Button>
        </div>
        
        <div className="pt-6 md:pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 px-4">
          <a 
            href="mailto:gerallandwave@gmail.com" 
            className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <Mail className="h-3 w-3 md:h-4 md:w-4" />
            gerallandwave@gmail.com
          </a>
          <div className="text-xs md:text-sm text-muted-foreground text-center">
            © 2025 Landwave. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
