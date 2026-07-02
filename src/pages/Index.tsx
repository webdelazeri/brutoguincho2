import { MapPin } from "lucide-react"

const cities = [
  "Lajeado",
  "Estrela",
  "Arroio do Meio",
  "Cruzeiro do Sul",
  "Encantado",
  "Teutônia",
  "Venâncio Aires",
  "Roca Sales",
  "Colinas",
  "Fazenda Vilanova",
  "Marques de Souza",
  "Capitão",
  "Travesseiro",
  "Paverama",
  "Imigrante",
  "Taquari",
  "Bom Retiro do Sul",
  "Pouso Novo",
  "Poço das Antas",
  "Progresso",
  "Santa Clara do Sul",
]

export const CitiesSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="section-title mb-4">
          Cidades Atendidas
        </h2>
        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          Nossa base em Lajeado permite chegada rápida em toda a região do Vale do Taquari.
          Confira as cidades onde oferecemos atendimento de guincho e reboque 24 horas:
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {cities.map((city) => (
            <span
              key={city}
              className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2 text-sm md:text-base text-foreground hover:border-primary/40 hover:bg-primary/10 transition-colors duration-300"
            >
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
