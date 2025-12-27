import { Instagram, MessageCircle, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = "https://wa.me/5515999999999?text=Olá! Gostaria de saber mais sobre mídia indoor.";

  return (
    <footer className="section-padding bg-card border-t border-border">
      <div className="container-custom">
        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-lg">A</span>
              </div>
              <span className="text-xl font-bold">
                Aqui<span className="gradient-text">Mídia</span>
              </span>
            </a>
            <p className="text-muted-foreground">
              Soluções em mídia indoor para pequenos e médios negócios em Sorocaba – SP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">
                  Anunciar agora
                </a>
              </li>
              <li>
                <a href="#o-que-e" className="text-muted-foreground hover:text-primary transition-colors">
                  O que é mídia indoor
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#locais" className="text-muted-foreground hover:text-primary transition-colors">
                  Locais de exibição
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/aquimidia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/aquimidia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Aqui Mídia. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
