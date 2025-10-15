"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  title: string
  placeholder: string
  compact?: boolean
}

export function VideoPlayer({ title, placeholder, compact = false }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-muted group",
        compact ? "aspect-video w-full" : "aspect-video w-full max-w-md",
      )}
    >
      {/* Placeholder for video - will be replaced with actual video */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="text-center p-6">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Play className="h-8 w-8 text-primary" />
            </div>
          </div>
          <p className="text-sm font-medium text-foreground/80 text-balance">{placeholder}</p>
          <p className="text-xs text-muted-foreground mt-2">Vídeo em Libras</p>
        </div>
      </div>

      {/* Video element (hidden until actual video is added) */}
      <video ref={videoRef} className="hidden w-full h-full object-cover" muted={isMuted} loop playsInline>
        {/* Video source will be added here */}
        <source src="" type="video/mp4" />
      </video>

      {/* Controls overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12 rounded-full"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-12 w-12 rounded-full"
            onClick={toggleMute}
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Accessibility label */}
      <div className="sr-only">{title}</div>
    </div>
  )
}
