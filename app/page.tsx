import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramSection } from "@/components/program-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DppSection } from "@/components/dpp-section"
import { InclusionSection } from "@/components/inclusion-section"
import { DurationSection } from "@/components/duration-section"
import { ViolenceTypesSection } from "@/components/violence-types-section"
import { WhatToDoSection } from "@/components/what-to-do-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramSection />
      <HowItWorksSection />
      <DppSection />
      <InclusionSection />
      <DurationSection />
      <ViolenceTypesSection />
      <WhatToDoSection />
      <Footer />
    </main>
  )
}
