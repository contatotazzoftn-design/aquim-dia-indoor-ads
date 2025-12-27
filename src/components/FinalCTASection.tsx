import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTASection = () => {
  const whatsappLink = "https://wa.me/5515981001101?text=Ol%C3%A1!%20Gostaria%20de%20anunciar.";

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="glass-card-elevated p-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-8">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">Comece hoje mesmo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Anuncie com a <span className="gradient-text">gente!</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Atraia mais clientes com mídia indoor simples, acessível e eficiente em Sorocaba – SP.
          </p>

          <Button variant="hero" size="xl" className="text-lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Começar Minha Campanha Agora
              <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>

          <p className="text-muted-foreground text-sm mt-6">
            ✓ Ativação em 24h &nbsp;&nbsp; ✓ Sem taxa de cancelamento &nbsp;&nbsp; ✓ Suporte dedicado
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
