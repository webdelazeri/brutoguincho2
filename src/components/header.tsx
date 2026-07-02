import { Phone } from "lucide-react"
import { Button } from "@/components/ui/enhanced-button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2">
              <Phone className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Guincho 24h</h1>
              <p className="text-sm text-muted-foreground">Lajeado e Região</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}