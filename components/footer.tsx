import { Flower2, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-primary bg-primary/10">
                <Flower2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Viva Flor</h3>
                <p className="text-xs text-muted-foreground">Acessível</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Programa de proteção para mulheres vítimas de violência doméstica com acessibilidade em Libras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Parceiros</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>TJDFT</li>
              <li>MPDFT</li>
              <li>Secretaria da Mulher - DF</li>
              <li>Secretaria de Segurança Pública - DF</li>
              <li>PCDF</li>
              <li>Corpo de Bombeiros - DF</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Emergência</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:190" className="text-primary hover:underline font-semibold">
                  190 - Polícia Militar
                </a>
              </li>
              <li>
                <a href="tel:197" className="text-primary hover:underline font-semibold">
                  197 - Polícia Civil
                </a>
              </li>
              <li>
                <a href="tel:180" className="text-muted-foreground hover:text-primary hover:underline">
                  180 - Central de Atendimento à Mulher
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.pcdf.df.gov.br/servicos/delegacia-eletronica/violencia-domestica-contra-mulher"
                  className="hover:text-primary hover:underline inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maria da Penha Online
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#programa" className="hover:text-primary hover:underline">
                  Sobre o Programa
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-primary hover:underline">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#ajuda" className="hover:text-primary hover:underline">
                  Buscar Ajuda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Programa Viva Flor Acessível. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Lei Maria da Penha - Lei n.º 11.340/2006
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
