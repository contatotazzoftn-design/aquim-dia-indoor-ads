import { Pill, Coffee, Dumbbell, ShoppingCart, Ticket } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      icon: Pill,
      name: "Farmácias",
      reach: "+100",
      description: "pessoas/dia",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Coffee,
      name: "Padarias",
      reach: "+300",
      description: "pessoas/dia",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Dumbbell,
      name: "Academias",
      reach: "+200",
      description: "pessoas/dia",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: ShoppingCart,
      name: "Supermercados",
      reach: "+1000",
      description: "pessoas/dia",
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Ticket,
      name: "Lotéricas",
      reach: "Alto",
      description: "tempo de espera",
      color: "from-primary to-purple-light",
    },
  ];

  return (
    <section id="locais" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            Locais de Exibição
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 animate-fade-in-up animation-delay-100">
            Sua marca presente <span className="gradient-text">onde as pessoas estão</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up animation-delay-200">
            Telas estrategicamente posicionadas em estabelecimentos de alto fluxo em Sorocaba.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className={`glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${location.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <location.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{location.name}</h3>
              <div className="text-3xl font-black gradient-text mb-1">{location.reach}</div>
              <p className="text-muted-foreground text-sm">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Map indicator */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
          <p className="text-muted-foreground">
            📍 <span className="text-foreground font-medium">Cobertura completa</span> em Sorocaba – SP e região
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
