import landwaveLogo from "@/assets/landwave-logo.png";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={landwaveLogo} 
              alt="Landwave" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="flex gap-8 text-sm">
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
          
          <div className="text-sm text-muted-foreground">
            © 2025 Landwave. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
