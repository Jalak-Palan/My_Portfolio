import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Marquee } from "@/components/marquee"
import { Journey } from "@/components/journey"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Marquee />
      <Journey />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
