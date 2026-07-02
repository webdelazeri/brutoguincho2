import { Button } from "@/components/ui/enhanced-button"
import { Phone, Clock, Shield, DollarSign } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import heroImage from "@/assets/hero-background-compact.png"
import logo from "@/assets/logo.png"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat hero-bg-mobile"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="absolute inset-0 bg-gradient-modern backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo em destaque com animação */}
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-all duration-500 blur-xl"></div>
              <img 
                src={logo} 
                alt="Guincho 24h Lajeado - Logo" 
                className="relative h-36 md:h-44 lg:h-52 w-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="space-y-8 mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight text-foreground animate-fade-in">
              Guincho 24h em Lajeado e Região
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="feature-badge">Atendimento imediato</span>
              <span className="feature-badge">Chegada rápida</span>
              <span className="feature-badge">Preço justo</span>
              <span className="feature-badge">Transporte seguro</span>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Serviço profissional de guincho e reboque disponível 24 horas por dia. 
              Atendemos toda a região do Vale do Taquari com rapidez e segurança.
            </p>
          </div>
          
          {/* CTA Buttons Modernos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              variant="whatsapp" 
              size="xl"
              asChild
              className="w-full sm:w-auto min-w-[320px] h-16 text-lg font-semibold modern-button-shadow"
            >
              <a 
                href="https://wa.me/5551998754146?text=Olá%2C%20gostaria%20de%20atendimento.%20Vi%20seu%20anúncio%20no%20Google." 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <WhatsAppIcon className="h-7 w-7" />
                <span>Fale no WhatsApp</span>
              </a>
            </Button>
            
            <Button 
              variant="phone" 
              size="xl"
              asChild
              className="w-full sm:w-auto min-w-[240px] h-16 text-lg font-semibold modern-button-shadow"
            >
              <a href="tel:+5551998754146" className="flex items-center gap-3">
                <Phone className="h-7 w-7" />
                <span>Ligar Agora</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
