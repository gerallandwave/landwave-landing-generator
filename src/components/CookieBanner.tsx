import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5">
      <Card className="max-w-4xl mx-auto border-2 shadow-2xl bg-background/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3 flex-1">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    Este website utiliza cookies
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Utilizamos cookies essenciais para garantir o funcionamento do website e cookies 
                    de análise para melhorar a sua experiência. Ao clicar em "Aceitar", concorda com 
                    o uso de todos os cookies. Pode gerir as suas preferências a qualquer momento.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Link to="/politica-privacidade" className="text-xs text-foreground underline hover:text-primary">
                      Política de Privacidade
                    </Link>
                    <span className="text-xs text-muted-foreground">•</span>
                    <Link to="/politica-cookies" className="text-xs text-foreground underline hover:text-primary">
                      Política de Cookies
                    </Link>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={rejectCookies}
                className="flex-shrink-0"
                aria-label="Fechar banner de cookies"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="outline"
                onClick={rejectCookies}
                className="w-full sm:w-auto"
              >
                Rejeitar
              </Button>
              <Button
                onClick={acceptCookies}
                className="w-full sm:w-auto"
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;
