import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const PlansSection = () => {
  const whatsappBase = "https://wa.me/5515999999999?text=";

  const plans = [
    {
      name: "Plano Semanal",
      price: "29,90",
      period: "semana",
      subtitle: "Mídia de impacto",
      description: "Ideal para promoções rápidas e testes",
      popular: false,
      features: [
        "7 dias de exibição",
        "Design incluso",
        "Suporte técnico",
        "Métricas básicas",
      ],
    },
    {
      name: "Plano Quinzenal",
      price: "49,90",
      period: "quinzena",
      subtitle: "Ideal para eventos",
      description: "Perfeito para campanhas e eventos locais",
      popular: false,
      features: [
        "15 dias de exibição",
        "Design profissional incluso",
        "Suporte dedicado",
        "Relatório de métricas",
        "1 ajuste gratuito",
      ],
    },
    {
      name: "Plano Mensal",
      price: "79,90",
      period: "mês",
      subtitle: "Melhor custo-benefício",
      description: "Construa presença contínua com seu público",
      popular: true,
      features: [
        "30 dias de exibição",
        "Design premium incluso",
        "Suporte prioritário",
        "Relatórios completos",
        "Ajustes ilimitados",
        "Público recorrente",
      ],
    },
  ];

  const allBenefits = [
    "Tela digital estrategicamente posicionada",
    "Exibição contínua no horário comercial",
    "Métricas e relatórios de alcance",
    "Design profissional incluso",
    "Suporte técnico dedicado",
    "Ajustes ilimitados na arte",
    "Sem taxa de cancelamento",
    "Ativação em até 24h",
  ];

  return (
    <section id="planos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Planos e Preços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Escolha o plano <span className="gradient-text">ideal para você</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Preços acessíveis para todos os tamanhos de negócio. Comece a anunciar hoje!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular
                  ? "glass-card-elevated border-2 border-primary/50"
                  : "glass-card"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-current" />
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-primary text-sm font-medium">{plan.subtitle}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-muted-foreground">R$</span>
                  <span className="text-5xl font-black gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={`${whatsappBase}Olá! Tenho interesse no ${plan.name} por R$${plan.price}/${plan.period}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anunciar agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* All Benefits */}
        <div className="glass-card p-8 md:p-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-8">
            ✅ Benefícios inclusos em <span className="gradient-text">todos os planos</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allBenefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
