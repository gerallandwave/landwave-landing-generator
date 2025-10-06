import { Target, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Target,
    title: "Estratégia e Copy",
    description: "Copy persuasiva focada em conversão e estratégia alinhada com os teus objetivos.",
  },
  {
    icon: Palette,
    title: "Design Responsivo",
    description: "Designs modernos e responsivos que funcionam perfeitamente em qualquer dispositivo.",
  },
  {
    icon: Zap,
    title: "Publicação e Optimização",
    description: "Publicamos a tua landing e otimizamos para velocidade e desempenho máximo.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-4">
            <Zap className="h-4 w-4" />
            O que fazemos
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            Landing pages que convertem.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Criamos páginas otimizadas para conversão, com design moderno e copy estratégica. 
            Desde o conceito até à publicação — tratamos de tudo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/.3)] bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="pt-10 pb-10 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_10px_40px_-10px_hsl(var(--primary)/.5)]">
                  <service.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
