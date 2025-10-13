import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import mockupSaas from "@/assets/mockup-saas.jpg";
import mockupPromotional from "@/assets/mockup-promotional.jpg";
import mockupProfessional from "@/assets/mockup-professional.jpg";

const projects = [
  {
    title: "Landing Page Corporativa",
    category: "Empresas & Startups",
    image: mockupSaas,
  },
  {
    title: "Landing Page Promocional",
    category: "Lançamentos & Campanhas",
    image: mockupPromotional,
  },
  {
    title: "Landing Page Profissional",
    category: "Serviços & Consultoria",
    image: mockupProfessional,
  },
];

const Portfolio = () => {
  return (
    <section className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs md:text-sm text-primary font-medium mb-2 md:mb-4">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
            Exemplos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Exemplos de Landing Pages Profissionais que Geram Resultados
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Landing pages que convertem visitantes em clientes reais.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-[0_20px_60px_-10px_hsl(var(--primary)/.4)] bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative h-56 md:h-72 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <div className="p-4 md:p-6 space-y-1 md:space-y-2">
                  <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{project.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
