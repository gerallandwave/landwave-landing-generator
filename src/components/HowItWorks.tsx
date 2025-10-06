import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Briefing",
    description: "Conta-nos o teu objetivo e o que pretendes alcançar com a tua landing page.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Design",
    description: "Criamos a tua landing personalizada com design moderno e copy estratégica.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Publicação",
    description: "Hospedamos e entregamos pronta a gerar resultados reais.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            O teu projeto, em 3 passos simples.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center space-y-4">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent opacity-20 blur-xl rounded-full" />
                <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <div className="text-sm font-mono text-primary font-bold">{step.number}</div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            asChild
          >
            <a href="mailto:gerallandwave@gmail.com">
              Começa o teu projeto hoje
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
