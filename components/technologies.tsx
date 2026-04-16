"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const techRow1 = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚂" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
]

const techRow2 = [
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Vercel", icon: "▲" },
  { name: "Git", icon: "📦" },
  { name: "GitHub", icon: "🐙" },
  { name: "Prisma", icon: "💎" },
  { name: "Firebase", icon: "🔥" },
  { name: "Stripe", icon: "💳" },
  { name: "TailwindCSS", icon: "🎨" },
]

function TechRow({ items, reverse = false }: { items: typeof techRow1; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 hover:bg-card transition-all whitespace-nowrap group"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
            <span className="text-foreground font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <TechRow items={techRow1} />
        <TechRow items={techRow2} reverse />
      </motion.div>
    </section>
  )
}
