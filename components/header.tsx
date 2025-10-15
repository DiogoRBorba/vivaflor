import { Flower2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-primary bg-primary/10">
            <Flower2 className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold leading-tight text-foreground md:text-xl">Programa Viva Flor</h1>
            <p className="text-xs text-muted-foreground md:text-sm">Acessível</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#programa" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            O Programa
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Como Funciona
          </a>
          <a href="#ajuda" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Buscar Ajuda
          </a>
        </nav>
      </div>
    </header>
  )
}
