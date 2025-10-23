import { VideoPlayer } from "./video-player"
import { AlertTriangle, ArrowRight } from "lucide-react"

export function ViolenceTypesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <ArrowRight className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            Como Identificar Violência Doméstica?
          </h2>
        </div>

        <p className="text-lg text-muted-foreground mb-12 max-w-4xl text-pretty">
          De acordo com a Lei Maria da Penha (Lei n.º 11.340/2006), entende-se por violência doméstica e familiar toda
          espécie de agressão dirigida contra a mulher num determinado ambiente (doméstico, familiar ou de intimidade),
          baseada no gênero.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-foreground">Violência Física</h3>
              <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
            </div>
            <p className="text-muted-foreground text-pretty">
              Quando a pessoa bate, chuta, empurra, dá tapa, soco ou puxa o cabelo da mulher.
            </p>
            {/* VIDEO 9: Violência Física 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Violência Física em Libras"
              placeholder="Explicação sobre violência física"
              compact
              videoSrc="/violenciafisica.mp4"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-foreground">Violência Psicológica</h3>
              <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
            </div>
            <p className="text-muted-foreground text-pretty">
              Quando a pessoa faz ameaças, persegue, xinga, ou impede a mulher de sair e fazer o que quiser, causando
              sofrimento emocional.
            </p>
            {/* VIDEO 10: Violência Psicológica 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Violência Psicológica em Libras"
              placeholder="Explicação sobre violência psicológica"
              compact
              videoSrc="/violenciapsicologica.mp4"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-foreground">Violência Sexual</h3>
              <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
            </div>
            <p className="text-muted-foreground text-pretty">
              Quando a mulher é forçada a ter ou assistir a relações sexuais que não quer, usando ameaça ou força.
            </p>
            {/* VIDEO 11: Violência Sexual 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Violência Sexual em Libras"
              placeholder="Explicação sobre violência sexual"
              compact
              videoSrc="/violenciasexual.mp4"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-foreground">Violência Patrimonial</h3>
              <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
            </div>
            <p className="text-muted-foreground text-pretty">
              Quando alguém tira, destrói ou guarda os bens, documentos, dinheiro ou coisas importantes da mulher para
              prejudicá-la.
            </p>
            {/* VIDEO 12: Violência Patrimonial 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Violência Patrimonial em Libras"
              placeholder="Explicação sobre violência patrimonial"
              compact
              videoSrc="/violenciapatrimonial.mp4"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-foreground">Violência Moral</h3>
              <AlertTriangle className="h-5 w-5 text-primary shrink-0" />
            </div>
            <p className="text-muted-foreground text-pretty">
              Quando a pessoa fala coisas falsas, difama ou humilha a mulher para machucá-la.
            </p>
            {/* VIDEO 13: Violência Moral 
                Para adicionar o vídeo, adicione a prop videoSrc="/nome-do-video.mp4"
            */}
            <VideoPlayer
              title="Violência Moral em Libras"
              placeholder="Explicação sobre violência moral"
              compact
              videoSrc="/violenciamoral.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
