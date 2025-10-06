import landwaveIcon from "@/assets/landwave-logo-icon.png";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <img 
              src={landwaveIcon} 
              alt="Landwave" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold">landwave</span>
          </div>
          
          <p className="text-muted-foreground text-center max-w-md">
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
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 Landwave. Todos os direitos reservados.
          </div>
          <a 
            href="mailto:gerallandwave@gmail.com" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            gerallandwave@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
