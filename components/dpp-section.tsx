import { VideoPlayer } from "./video-player"
import { Smartphone } from "lucide-react"

export function DppSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border-2 border-primary/20 bg-card p-12 flex items-center justify-center">
                <Smartphone className="h-48 w-48 text-primary/40" />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">O que é o DPP?</h2>
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed text-pretty">
                É um aparelho parecido com um celular, dado de graça para mulheres em risco. Com ele, elas podem pedir
                socorro apertando um botão.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                O dispositivo é instalado no celular da ofendida e permite, nos casos classificados como de risco
                extremo, a possibilidade de acionar a polícia com apenas um toque na tela inicial do aparelho.
              </p>
            </div>
            <div className="pt-4">
              <VideoPlayer
                title="O que é o DPP em Libras"
                placeholder="Explicação sobre o Dispositivo de Proteção Preventiva"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
