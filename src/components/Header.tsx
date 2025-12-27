import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5515999999999?text=Olá! Gostaria de saber mais sobre mídia indoor.";

  const navLinks = [
    { href: "#o-que-e", label: "O que é" },
    { href: "#locais", label: "Locais" },
    { href: "#planos", label: "Planos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#servicos", label: "Serviços" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-black text-lg">A</span>
            </div>
            <span className="text-xl font-bold">
              Aqui<span className="gradient-text">Mídia</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="hero" size="default" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Anunciar agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="w-full mt-4" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Anunciar agora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
