import { VideoPlayer } from "./video-player"
import { UserCheck } from "lucide-react"

export function InclusionSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-12 text-center">
          Formas de Inclusão no Programa
        </h2>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <UserCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Quem pode participar?</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    Mulheres e meninas que moram no Distrito Federal e estão em perigo grave por causa de violência em
                    casa. Para participar, precisam ser indicadas pela Justiça ou pela polícia.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Requisitos para Inclusão:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">Medida Protetiva de Urgência (MPU) deferida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">Interesse da vítima em participar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">Residência no Distrito Federal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-pretty">Sigilo garantido da inclusão</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            {/* VIDEO 7: Formas de Inclusão no Programa 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Inclusão no Programa em Libras"
              placeholder="Explicação sobre quem pode participar"
              videoSrc="/nome-do-video.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
