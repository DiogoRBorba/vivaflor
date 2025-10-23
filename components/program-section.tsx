import { VideoPlayer } from "./video-player"
import { Shield, Smartphone, Users } from "lucide-react"

export function ProgramSection() {
  return (
    <section id="programa" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">O que é o Programa?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Uma iniciativa fruto de cooperação técnica entre TJDFT, MPDFT, Secretaria da Mulher do DF, Secretaria de
            Segurança Pública do DF, PCDF e Corpo de Bombeiros do DF.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Proteção Prioritária</h3>
            <p className="text-muted-foreground text-pretty">
              Atendimento prioritário em situação de emergência com apenas um toque no dispositivo.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Dispositivo Móvel</h3>
            <p className="text-muted-foreground text-pretty">
              Aplicativo instalado no celular da vítima para acionar a polícia rapidamente.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">Acompanhamento</h3>
            <p className="text-muted-foreground text-pretty">
              Fiscalização do cumprimento das medidas protetivas de afastamento e proibição de aproximação.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
