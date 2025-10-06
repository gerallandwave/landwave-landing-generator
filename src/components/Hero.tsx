import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import landwaveLogo from "@/assets/landwave-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <img 
            src={landwaveLogo} 
            alt="Landwave Logo" 
            className="h-24 md:h-32 w-auto mb-4 drop-shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl">
            Cria ondas no digital.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Na Landwave, criamos landing pages modernas que transformam visitantes em clientes.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 mt-4"
            asChild
          >
            <a href="mailto:gerallandwave@gmail.com">
              Quero a minha landing page
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          
          <div className="pt-12 text-sm text-muted-foreground">
            Design moderno · Conversão otimizada · Entrega rápida
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
