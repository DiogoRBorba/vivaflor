import { VideoPlayer } from "./video-player"
import { ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <ArrowRight className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Como o Programa Funciona?</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-lg text-foreground leading-relaxed text-pretty">
                O Programa Viva Flor ajuda mulheres que sofrem violência em casa e estão em perigo sério. Ele oferece um
                aparelho chamado <strong>Dispositivo de Proteção Preventiva (DPP)</strong>, que é como um celular
                especial para pedir ajuda rápida à polícia.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Atendimento Especializado</h3>
                  <p className="text-muted-foreground text-pretty">
                    A mulher recebe atendimento cuidadoso em um lugar especial chamado Sala Lilás, na Secretaria de
                    Segurança Pública.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Treinamento</h3>
                  <p className="text-muted-foreground text-pretty">
                    Ela aprende a usar o aparelho e responde a perguntas para avaliar o risco e como ela se sente segura
                    usando o DPP.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Apoio Integral</h3>
                  <p className="text-muted-foreground text-pretty">
                    Recebe ajuda jurídica e psicológica durante todo o processo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Proteção Imediata</h3>
                  <p className="text-muted-foreground text-pretty">
                    Se apertar o botão de ajuda no aparelho, a polícia mais próxima vai rápido para proteger.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {/* VIDEO 5: Como o Programa Funciona 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Como Funciona em Libras"
              placeholder="Explicação completa de como o programa funciona"
              videoSrc="/como-funciona.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
