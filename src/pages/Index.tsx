import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Portfolio />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
