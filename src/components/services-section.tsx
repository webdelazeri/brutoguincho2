import { Zap, Car, DollarSign, Users, Shield, TruckIcon, Phone, Clock } from "lucide-react"
import brutoPrincipal from "@/assets/guincho-bruto-novo.webp"
import brutoMoto from "@/assets/guincho-bruto-2.jpg"

const services = [
  {
    icon: Zap,
    title: "Atendimento Imediato",
    description: "Resposta rápida ao seu chamado. Estamos sempre prontos para atender sua emergência.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: Car,
    title: "Chegada Rápida", 
    description: "Tempo de chegada otimizado para minimizar sua espera em situações de emergência.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "Valores transparentes e justos, sem surpresas. Orçamento claro antes do serviço.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: Users,
    title: "Equipe Experiente",
    description: "Profissionais qualificados e experientes para garantir a segurança do seu veículo.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: Shield,
    title: "Transporte Seguro",
    description: "Equipamentos modernos e técnicas adequadas para o transporte seguro do seu veículo.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    icon: TruckIcon,
    title: "Guincho Leve",
    description: "Serviços especializados de guincho leve para situações específicas e veículos menores.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  }
]

export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Service Image and Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-card/80 backdrop-blur-sm p-6 md:p-8 border-r border-border/30 h-72 md:h-80 flex flex-col justify-center">
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-3 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                <div className="p-2 bg-primary/20 rounded-xl">
                  <Phone className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <span className="text-xl md:text-3xl">(51) 99875-4146</span>
              </h3>
              <p className="text-muted-foreground text-base md:text-lg">
                Atendimento 24 horas por dia, 7 dias por semana
              </p>
            </div>
            
            {/* Quick Features Grid */}
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <div className="text-center">
                <div className="p-2 md:p-3 bg-primary/20 rounded-xl mb-2 md:mb-3 mx-auto w-fit">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-base">24h</span>
                <p className="text-xs text-muted-foreground mt-1">Sempre disponível</p>
              </div>
              <div className="text-center">
                <div className="p-2 md:p-3 bg-primary/20 rounded-xl mb-2 md:mb-3 mx-auto w-fit">
                  <Shield className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-base">Seguro</span>
                <p className="text-xs text-muted-foreground mt-1">Transporte protegido</p>
              </div>
              <div className="text-center">
                <div className="p-2 md:p-3 bg-primary/20 rounded-xl mb-2 md:mb-3 mx-auto w-fit">
                  <DollarSign className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                </div>
                <span className="font-semibold text-foreground text-sm md:text-base">Justo</span>
                <p className="text-xs text-muted-foreground mt-1">Preço transparente</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-80">
            <img 
              src={brutoPrincipal} 
              alt="Guincho Bruto - Serviço profissional de reboque"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">Bruto Guincho</h3>
              <p className="text-sm opacity-90"></p>
            </div>
          </div>
        </div>

        <h2 className="section-title mb-16">
          Nossos Diferenciais
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative bg-card/60 backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 text-center group hover:scale-105 hover:shadow-xl transition-all duration-300 hover:border-opacity-40`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon container with colored background */}
              <div className={`${service.bgColor} rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-10 w-10 ${service.color}`} />
              </div>
              
              {/* Title with better prominence */}
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description with improved readability */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Subtle accent line */}
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 ${service.bgColor} rounded-t-full transition-all duration-300 group-hover:w-20`}></div>
            </div>
          ))}
        </div>
        
        {/* Vehicle Types */}
        <div className="text-center bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
          <h3 className="text-2xl font-bold text-primary mb-4">
            🚗 Guincho e reboque 24 horas 🏍️
          </h3>
          <p className="text-lg text-muted-foreground">
            Atendemos todos os tipos de veículos com segurança e profissionalismo
          </p>
        </div>
      </div>
    </section>
  )
}
