import heroMockup from "@/assets/hero-mockup.png";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5515999999999?text=Olá! Gostaria de saber mais sobre mídia indoor.";

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-light/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text and CTAs */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                📍 Sorocaba – SP
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight animate-fade-in-up animation-delay-100">
              Impacte a audiência do seu bairro a partir de{" "}
              <span className="gradient-text">R$79,90</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground animate-fade-in-up animation-delay-200">
              Alcance seu público local com telas digitais estrategicamente posicionadas em Sorocaba – SP.
            </p>

            <p className="text-lg text-muted-foreground/80 animate-fade-in-up animation-delay-300">
              Anuncie em telas digitais dentro de <span className="text-foreground font-medium">farmácias, padarias, academias, supermercados e lotéricas</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button variant="hero" size="xl" asChild>
                <a href="#planos">
                  Anunciar agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com especialista
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span>+50 telas ativas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span>Ativação em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span>Sem taxa de cancelamento</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative animate-float">
              <img
                src={heroMockup}
                alt="AquiMídia - Plataforma de gestão de telas digitais mostrando mapa com pontos de mídia indoor em Sorocaba"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
              {/* Glow effect behind mockup */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
