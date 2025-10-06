import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tech Startup",
    category: "SaaS",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "E-commerce",
    category: "Produto",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Consultoria",
    category: "Serviços",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Resultados que fazem ondas.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Landing pages que convertem visitantes em clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/.3)]"
            >
              <CardContent className="p-0">
                <div className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                    <ExternalLink className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
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
