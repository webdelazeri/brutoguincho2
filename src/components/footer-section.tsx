import { Phone, MapPin, Clock } from "lucide-react"

export const FooterSection = () => {
  return (
    <footer className="bg-card border-t-4 border-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center md:justify-start gap-2">
              <Phone className="h-5 w-5" />
              Contato
            </h3>
            <p className="text-2xl font-bold text-foreground mb-2">
              (51) 99875-4146
            </p>
            <p className="text-muted-foreground">
              Ligue a qualquer hora, estamos sempre prontos para ajudar
            </p>
          </div>
          
          {/* Service Area */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5" />
              Área de Atendimento
            </h3>
            <p className="text-foreground font-semibold mb-2">
              Lajeado e Região
            </p>
            <p className="text-muted-foreground">
              Vale do Taquari • Atendimento completo
            </p>
          </div>
          
          {/* Hours */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center justify-center md:justify-end gap-2">
              <Clock className="h-5 w-5" />
              Horário
            </h3>
            <p className="text-foreground font-semibold mb-2">
              24 Horas por Dia
            </p>
            <p className="text-muted-foreground">
              7 dias por semana • Sempre disponível
            </p>
          </div>
        </div>
        
        {/* Service Description */}
        <div className="text-center border-t border-border/50 pt-8 mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Guincho 24h Lajeado
          </h4>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serviços profissionais de guincho e reboque. 
            Atendimento imediato, equipe experiente e preços justos. 
            Sua segurança é nossa prioridade.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border/50 pt-6">
          <p>© 2025 Guincho 24h Lajeado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}