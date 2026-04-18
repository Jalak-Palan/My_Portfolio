import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InitialLoader } from "@/components/initial-loader"
import { ChatBot } from "@/components/chat-bot"
import { ContactModal } from "@/components/contact-modal"

// Lazy-load all below-the-fold sections to improve LCP and reduce initial JS bundle
const About        = dynamic(() => import("@/components/about").then(m => ({ default: m.About })))
const Expertise    = dynamic(() => import("@/components/expertise").then(m => ({ default: m.Expertise })))
const Marquee      = dynamic(() => import("@/components/marquee").then(m => ({ default: m.Marquee })))
const Journey      = dynamic(() => import("@/components/journey").then(m => ({ default: m.Journey })))
const Technologies = dynamic(() => import("@/components/technologies").then(m => ({ default: m.Technologies })))
const Projects     = dynamic(() => import("@/components/projects").then(m => ({ default: m.Projects })))
const Certificates = dynamic(() => import("@/components/certificates").then(m => ({ default: m.Certificates })))
const Contact      = dynamic(() => import("@/components/contact").then(m => ({ default: m.Contact })))
const Footer       = dynamic(() => import("@/components/footer").then(m => ({ default: m.Footer })))

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <InitialLoader />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Marquee />
      <Journey />
      <Technologies />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ChatBot />
      <ContactModal />
    </main>
  )
}
