import { MessageSquare, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Briefing",
    description: "Conta-nos o teu objetivo e o que pretendes alcançar com a tua landing page.",
  },
  {
    number: "2",
    icon: Sparkles,
    title: "Design",
    description: "Criamos a tua landing personalizada com design moderno e copy estratégica.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Publicação",
    description: "Hospedamos e entregamos pronta a gerar resultados reais.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs md:text-sm text-accent font-medium mb-2 md:mb-4">
            <Rocket className="h-3 w-3 md:h-4 md:w-4" />
            Como funciona
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            O teu projeto, em 3 passos simples.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto mb-12 md:mb-20 px-4">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center space-y-4 md:space-y-6">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl rounded-full" />
                <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_10px_50px_-10px_hsl(var(--primary)/.5)]">
                  <step.icon className="h-10 w-10 md:h-12 md:w-12 text-primary-foreground" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary">{step.number}</div>
              <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 via-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Simples, rápido e sem complicações. <span className="text-foreground font-semibold">É assim que criamos landing pages que convertem.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
