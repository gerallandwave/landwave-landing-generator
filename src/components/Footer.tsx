import landwaveLogo from "@/assets/landwave-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img 
              src={landwaveLogo} 
              alt="Landwave" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="flex gap-10 text-base">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="mailto:gerallandwave@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2025 Landwave. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
