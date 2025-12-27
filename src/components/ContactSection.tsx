import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, MapPin, Gift, Headphones } from "lucide-react";

const ContactSection = () => {
  const whatsappLink =
  "https://wa.me/5515981001101?text=Ol%C3%A1!%20Gostaria%20de%20anunciar.";

  const features = [
    {
      icon: Gift,
      title: "Consultoria gratuita",
      description: "Analisamos seu negócio sem compromisso",
    },
    {
      icon: MessageCircle,
      title: "Resposta rápida",
      description: "Retorno via WhatsApp em minutos",
    },
    {
      icon: MapPin,
      title: "Localizações estratégicas",
      description: "Telas nos melhores pontos da cidade",
    },
    {
      icon: Headphones,
      title: "Suporte dedicado",
      description: "Atendimento personalizado para você",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Pronto para <span className="gradient-text">começar?</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Entre em contato e receba uma proposta personalizada para seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 text-center animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 animate-fade-in-up animation-delay-500">
          <Button variant="whatsapp" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-6 w-6" />
              Falar no WhatsApp
            </a>
          </Button>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>Atendimento: Seg–Sex, 9h às 18h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
