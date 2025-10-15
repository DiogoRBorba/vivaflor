import { VideoPlayer } from "./video-player"
import { Phone, Globe, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatToDoSection() {
  return (
    <section id="ajuda" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-3">
          <ArrowRight className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-balance">
            O que Fazer se Sofrer Algum Tipo de Violência?
          </h2>
        </div>

        <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Não se cale, denuncie!</h3>
              <p className="text-lg text-foreground/80 mb-6 text-pretty">
                O enfrentamento à violência contra a mulher é uma luta de toda a sociedade e pode começar por você. Se
                você for a vítima, ao menor sinal de violência, busque ajuda e denuncie.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Phone className="h-6 w-6 text-primary" />
              Canais de Atendimento
            </h3>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">URGÊNCIA</h4>
                  <span className="rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                    Emergência
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Polícia Militar do Distrito Federal</p>
                <Button className="w-full text-lg font-bold" size="lg" asChild>
                  <a href="tel:190">
                    <Phone className="mr-2 h-5 w-5" />
                    190
                  </a>
                </Button>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-foreground">DENÚNCIA</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Polícia Civil do Distrito Federal</p>
                <Button className="w-full text-lg font-bold bg-transparent" size="lg" variant="outline" asChild>
                  <a href="tel:197">
                    <Phone className="mr-2 h-5 w-5" />
                    197
                  </a>
                </Button>
              </div>
            </div>

            <VideoPlayer
              title="Canais de Atendimento em Libras"
              placeholder="Informações sobre canais de atendimento"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              Maria da Penha Online
            </h3>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <p className="text-foreground leading-relaxed text-pretty">
                Se você é mulher e está sofrendo violência em casa, pode pedir ajuda pela internet, sem sair de casa,
                usando o site <strong>Maria da Penha Online</strong> da Polícia Civil do Distrito Federal (PCDF).
              </p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    1
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-foreground">Acesse o site:</strong> Vá para{" "}
                    <a
                      href="https://www.pcdf.df.gov.br/servicos/delegacia-eletronica/violencia-domestica-contra-mulher"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      pcdf.df.gov.br
                    </a>
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    2
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-foreground">Preencha o formulário:</strong> Clique em "Registrar Ocorrência"
                    e preencha as informações pedidas
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    3
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-foreground">Envie os documentos:</strong> Você pode anexar fotos, vídeos ou
                    documentos que ajudem a comprovar
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    4
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    <strong className="text-foreground">Aguarde o retorno:</strong> A PCDF vai analisar sua denúncia e
                    entrar em contato
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4 mt-4">
                <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                  <strong>Importante:</strong> O atendimento é sigiloso e você pode fazer a denúncia de forma anônima.
                  Se você estiver em perigo imediato, ligue para o número 190.
                </p>
              </div>
            </div>

            <VideoPlayer title="Maria da Penha Online em Libras" placeholder="Como usar o serviço online" />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Informações Importantes ao Registrar Ocorrência
          </h3>
          <p className="text-muted-foreground mb-4 text-pretty">
            Ao efetuar o registro, no campo DESCRIÇÃO DO FATO, é fundamental que você informe:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">O grau de parentesco do autor com a vítima</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">O tipo de relacionamento existente e sua duração</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">Se possui filhos em comum, informando nomes e idades</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">Se já sofreu anteriormente alguma outra violência</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">Se existem medidas protetivas em vigência</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span className="text-pretty">Se tem notícia de arma de fogo em posse do autor</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
