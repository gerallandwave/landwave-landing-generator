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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Landing pages que convertem.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Criamos páginas otimizadas para conversão, com design moderno e copy estratégica. 
            Desde o conceito até à publicação — tratamos de tudo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/.2)]"
            >
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
