import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold">
            Pronto para criar a tua landing?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos começar hoje mesmo. Contacta-nos e transforma a tua visão em realidade.
          </p>
          
          <Button 
            variant="hero" 
            size="lg"
            className="text-lg px-12 py-7 shadow-[0_0_50px_hsl(var(--primary-glow)/.3)]"
            asChild
          >
            <a href="mailto:gerallandwave@gmail.com" className="gap-3">
              <Mail className="h-5 w-5" />
              Fala connosco
            </a>
          </Button>
          
          <div className="pt-8 text-sm text-muted-foreground">
            gerallandwave@gmail.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
