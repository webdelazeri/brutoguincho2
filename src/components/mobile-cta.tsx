import { Button } from "@/components/ui/enhanced-button"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export const MobileCTA = () => {
  return (
    <div className="mobile-fixed-cta md:hidden">
      <div className="flex gap-2 sm:gap-3">
        <Button 
          variant="whatsapp" 
          size="lg"
          asChild
          className="flex-1 text-sm sm:text-base"
        >
          <a 
            href="https://wa.me/5551998754146?text=Olá%2C%20gostaria%20de%20atendimento.%20Vi%20seu%20anúncio%20no%20Google." 
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden xs:inline">WhatsApp</span><span className="xs:hidden">Chat</span>
          </a>
        </Button>
        
        <Button 
          variant="phone" 
          size="lg"
          asChild
          className="flex-1 text-sm sm:text-base"
        >
          <a href="tel:+5551998754146">
            <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            Ligar
          </a>
        </Button>
      </div>
    </div>
  )
}