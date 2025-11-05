import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Saltar para o conteúdo principal
      </a>
      <Hero />
      <main id="main-content">
        <WhatWeDo />
        <HowItWorks />
        <Portfolio />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
