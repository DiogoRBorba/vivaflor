import { VideoPlayer } from "./video-player"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Proteção e Acessibilidade
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
              Programa Viva Flor Acessível
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Um sistema de segurança preventiva para mulheres vítimas de violência doméstica ou familiar que estejam
              sob o resguardo de medida protetiva de urgência. Com acessibilidade em Libras para garantir que todas as
              mulheres tenham acesso à proteção.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <VideoPlayer
              title="Apresentação do Programa em Libras"
              placeholder="Vídeo de apresentação do Programa Viva Flor em Libras"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
