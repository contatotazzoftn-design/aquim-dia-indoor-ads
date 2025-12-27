import { Monitor, Eye, RotateCcw, Users, MessageSquare } from "lucide-react";

const WhatIsIndoorSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Atenção garantida",
      description: "Público cativo enquanto aguarda ou circula pelo estabelecimento",
    },
    {
      icon: RotateCcw,
      title: "Repetição visual",
      description: "Sua marca exibida várias vezes ao dia para o mesmo público",
    },
    {
      icon: Users,
      title: "Presença diária da marca",
      description: "Construa reconhecimento com exposição contínua",
    },
    {
      icon: MessageSquare,
      title: "Comunicação direta",
      description: "Mensagem clara e objetiva para o público certo",
    },
  ];

  return (
    <section id="o-que-e" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            O que é Mídia Indoor?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Publicidade em <span className="gradient-text">telas digitais</span> onde seu cliente está
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Mídia indoor é a divulgação em telas digitais internas, exibidas para pessoas reais enquanto compram, esperam ou circulam por estabelecimentos do seu bairro.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Visual element */}
        <div className="mt-16 relative">
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 animate-fade-in-up">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-primary flex items-center justify-center glow-effect">
                <Monitor className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Mais de <span className="gradient-text">5.000</span> pessoas impactadas por dia
              </h3>
              <p className="text-muted-foreground text-lg">
                Nossa rede de telas alcança milhares de pessoas diariamente em locais estratégicos de Sorocaba.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIndoorSection;
