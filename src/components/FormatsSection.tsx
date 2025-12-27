import { Smartphone, Monitor } from "lucide-react";

const FormatsSection = () => {
  const formats = [
    {
      type: "Vertical",
      icon: Smartphone,
      resolution: "1080 x 1920",
      duration: "15 segundos",
      frequency: "A cada 2 minutos",
      indication: "Ideal para Stories e vídeos móveis",
    },
    {
      type: "Horizontal",
      icon: Monitor,
      resolution: "1920 x 1080",
      duration: "15 segundos",
      frequency: "A cada 2 minutos",
      indication: "Ideal para banners e apresentações",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Formatos de Anúncio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Escolha o <span className="gradient-text">formato ideal</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Adeque sua mensagem ao formato da tela para máximo impacto visual.
          </p>
        </div>

        {/* Format Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {formats.map((format, index) => (
            <div
              key={format.type}
              className="glass-card p-8 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <format.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{format.type}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Resolução</span>
                  <span className="font-semibold">{format.resolution}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Duração</span>
                  <span className="font-semibold">{format.duration}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border/50">
                  <span className="text-muted-foreground">Frequência</span>
                  <span className="font-semibold">{format.frequency}</span>
                </div>
                <div className="pt-2">
                  <span className="text-sm text-primary font-medium">{format.indication}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explanatory text */}
        <div className="text-center max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          <p className="text-muted-foreground">
            💡 <span className="text-foreground font-medium">Dica:</span> Use vídeos e animações para maior engajamento. Nossa equipe pode criar o material perfeito para você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
