import { VideoPlayer } from "./video-player"
import { Clock } from "lucide-react"

export function DurationSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Tempo de Duração</h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="text-lg text-foreground leading-relaxed text-pretty mb-4">
                <strong>Por quanto tempo o programa dura?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Enquanto a medida protetiva estiver válida ou até a mulher querer sair do programa.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                <strong>Importante:</strong> O programa abrange somente a territorialidade do Distrito Federal. Não é
                possível o seu uso em outra localidade, como no entorno, por exemplo.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <VideoPlayer title="Duração do Programa em Libras" placeholder="Explicação sobre a duração do programa" />
          </div>
        </div>
      </div>
    </section>
  )
}
