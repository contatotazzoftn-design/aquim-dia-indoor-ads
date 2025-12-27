import { Button } from "@/components/ui/button";
import { Monitor, FileText, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const whatsappLink =
    "https://wa.me/5515981001101?text=Ol%C3%A1!%20Quero%20atrair%20mais%20clientes%20no%20meu%20bairro.";

  const services = [
    {
      icon: Monitor,
      title: "Mídia Indoor",
      description: "Gestão completa da sua campanha em telas digitais. Do design à exibição, cuidamos de tudo.",
      features: ["Criação de artes", "Gestão de campanha", "Relatórios mensais", "Suporte dedicado"],
      highlight: true,
    },
    {
      icon: FileText,
      title: "Materiais Impressos",
      description: "Cartões de visita, flyers, banners e todo material gráfico para seu negócio.",
      features: ["Cartões de visita", "Flyers e panfletos", "Banners e faixas", "Adesivos"],
      highlight: false,
    },
  ];

  return (
    <section id="servicos" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Soluções <span className="gradient-text">completas</span> para seu negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                service.highlight
                  ? "glass-card-elevated border-2 border-primary/50"
                  : "glass-card"
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center animate-fade-in-up animation-delay-300">
          <p className="text-muted-foreground mb-4">
            Se precisar, também fazemos. Solicite um orçamento no WhatsApp.
          </p>
          <Button variant="glass" size="lg" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
