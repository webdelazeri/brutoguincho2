import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ReviewsSection } from "@/components/reviews-section"
import { FooterSection } from "@/components/footer-section"
import { MobileCTA } from "@/components/mobile-cta"
import { useEffect } from "react"

const Index = () => {
  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Guincho 24h Lajeado",
      "description": "Serviços de guincho e reboque 24 horas para carros e motos",
      "telephone": "+55 51 99875-4146",
      "url": "https://guincho24hlajeado.com",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": -29.4669,
          "longitude": -51.9614
        },
        "geoRadius": "50000"
      },
      "areaServed": [
        "Lajeado", "Arroio do Meio", "Estrela", "Cruzeiro do Sul", "Encantado", 
        "Teutônia", "Roca Sales", "Colinas", "Fazenda Vilanova", "Marques de Souza", 
        "Capitão", "Travesseiro", "Paverama", "Imigrante"
      ],
      "openingHours": "Mo-Su 00:00-23:59",
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Guincho",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Guincho 24 horas",
              "description": "Serviço de guincho para carros e motos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Reboque 24 horas",
              "description": "Serviço de reboque para veículos"
            }
          }
        ]
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ReviewsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
