import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import landwaveIcon from "@/assets/landwave-logo-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-10 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={landwaveIcon} 
              alt="Landwave Icon" 
              className="h-32 md:h-40 w-auto drop-shadow-[0_0_50px_rgba(0,123,255,0.4)]"
            />
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              landwave
            </h1>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight max-w-5xl bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              Cria ondas no digital.
            </h2>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-3xl leading-relaxed">
              Na Landwave, criamos landing pages modernas que transformam visitantes em clientes.
            </p>
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-10 py-7 mt-6 shadow-[0_0_50px_hsl(var(--primary-glow)/.4)]"
            asChild
          >
            <a href="mailto:gerallandwave@gmail.com">
              Quero a minha landing page
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          
          <div className="pt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Design moderno</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Conversão otimizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Entrega rápida</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default Hero;
