import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Camila Rocha",
    role: "Web CA Marketing",
    rating: 5,
    time: "um ano atrás",
    comment: "Excelente atendimento e muito atencioso. Recomendo",
    avatar: "C"
  },
  {
    name: "Samuel Camilotti",
    role: "Local Guide",
    rating: 5,
    time: "um ano atrás",
    comment: "Serviço de qualidade e de confiança. Atendimento nota 10.",
    avatar: "S"
  },
  {
    name: "Sandy Arens",
    role: "Local Guide",
    rating: 5,
    time: "9 meses atrás",
    comment: "Perfeito! Ótimo serviço, muito rápido e bom preço.",
    avatar: "S"
  },
  {
    name: "Juliano",
    role: "Cliente",
    rating: 5,
    time: "10 meses atrás",
    comment: "Prestou um ótimo serviço. Bem cuidadoso com o veículo do cliente. Recomendo!",
    avatar: "J"
  },
  {
    name: "Gabriel Castro",
    role: "Cliente",
    rating: 5,
    time: "11 meses atrás",
    comment: "Excelente trabalho! Recomendo de boca cheia!! Serviço 1000%",
    avatar: "G"
  },
  {
    name: "Lilia Camilotti",
    role: "Cliente",
    rating: 5,
    time: "um ano atrás",
    comment: "Serviço de qualidade. Empresa confiável e com responsabilidade. Essa da pra confiar. Recomendo!!!",
    avatar: "L"
  },
  {
    name: "Pandora Rocha",
    role: "Cliente",
    rating: 5,
    time: "um ano atrás",
    comment: "Ótimo, rapidez e profissionalismo! Recomendo",
    avatar: "P"
  },
  {
    name: "Vitória Machado",
    role: "Cliente",
    rating: 5,
    time: "8 meses atrás",
    comment: "Excelência no serviço. Rápido no socorro. Recomendo!",
    avatar: "V"
  },
  {
    name: "Ricardo Souza",
    role: "Cliente",
    rating: 5,
    time: "11 meses atrás",
    comment: "Excelente atendimento, Cleber motorista ótimo profissional",
    avatar: "R"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira as avaliações reais dos nossos clientes no Google
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-sm text-gray-600 ml-2">
              Baseado em avaliações do Google
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                    <p className="text-xs text-gray-500">{review.time}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <StarRating rating={review.rating} />
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-200" />
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {review.comment}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
