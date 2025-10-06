import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Pronto para criar a tua landing?
          </h2>
          
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Vamos começar hoje mesmo. Contacta-nos e transforma a tua visão em realidade.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="text-base md:text-lg px-8 md:px-16 py-6 md:py-8 shadow-[0_0_60px_hsl(var(--primary-glow)/.4)] hover:shadow-[0_0_80px_hsl(var(--primary-glow)/.5)]"
            asChild
          >
            <a href="mailto:gerallandwave@gmail.com" className="flex items-center gap-2 md:gap-3">
              <Mail className="h-5 w-5 md:h-6 md:w-6" />
              Fala connosco
            </a>
          </Button>
          
          <div className="pt-8 md:pt-12 space-y-1 md:space-y-2">
            <div className="text-sm md:text-base text-muted-foreground">
              Email direto
            </div>
            <div className="text-base md:text-lg font-medium text-foreground">
              gerallandwave@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
