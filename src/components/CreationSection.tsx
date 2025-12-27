import { Palette, Zap, Phone, Target } from "lucide-react";

const CreationSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Design Profissional",
      description: "Artes criadas por designers especializados em mídia digital",
    },
    {
      icon: Zap,
      title: "Slide de 15 segundos",
      description: "Tempo ideal para passar sua mensagem com impacto",
    },
    {
      icon: Phone,
      title: "Contato Visível",
      description: "Telefone e redes sociais sempre em destaque",
    },
    {
      icon: Target,
      title: "CTA Claro",
      description: "Chamada para ação que converte visualizações em clientes",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
                Criação Profissional
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
                Sua arte <span className="gradient-text">pronta para exibição</span>
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
                A AquiMídia cria artes e vídeos profissionais prontos para exibição nas nossas telas. Você não precisa se preocupar com nada!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Example Visual */}
          <div className="animate-slide-in-right animation-delay-200">
            <div className="glass-card-elevated p-6 md:p-8 rounded-3xl">
              <div className="text-center mb-6">
                <span className="text-sm text-muted-foreground">Exemplo de anúncio</span>
                <h3 className="text-xl font-bold">Segmento: Eletricista</h3>
              </div>

              {/* Mock ad preview */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                    ⚡ Serviços Elétricos
                  </span>
                </div>
                <div className="relative z-10 text-white">
                  <h4 className="text-2xl md:text-3xl font-black mb-2">João Eletricista</h4>
                  <p className="text-white/80 text-sm mb-3">Instalações, manutenções e reparos elétricos</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-bold">📞 (15) 99999-9999</span>
                    <span className="px-3 py-1 rounded-full bg-white text-orange-600 font-bold text-xs">
                      LIGUE AGORA
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <span className="px-3 py-1.5 rounded-full bg-secondary text-sm">📸 Fotos reais</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary text-sm">⏱️ 15 segundos</span>
                <span className="px-3 py-1.5 rounded-full bg-secondary text-sm">📱 Contato visível</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationSection;
