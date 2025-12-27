import { Upload, MapPin, Rocket, BarChart3 } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Envie seu material",
      description: "Mande suas fotos, logo e informações. Nós cuidamos do resto.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Escolha suas telas",
      description: "Selecione os locais estratégicos para sua campanha.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Ative sua campanha",
      description: "Em até 24h seu anúncio estará no ar impactando clientes.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "Acompanhe resultados",
      description: "Receba relatórios de alcance e métricas da sua campanha.",
    },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            <span className="gradient-text">4 Passos</span> para o Sucesso
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Processo simples e rápido para começar a anunciar hoje mesmo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}

              <div className="glass-card p-8 text-center h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl font-black gradient-text mb-4">{step.number}</div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
