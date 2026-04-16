"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const techRow1 = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Python", color: "#3776AB" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#ffffff" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Tailwind", color: "#06B6D4" },
]

const techRow2 = [
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Vercel", color: "#ffffff" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Redis", color: "#DC382D" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Framer", color: "#0055FF" },
]

function TechRow({ items, reverse = false }: { items: typeof techRow1; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-3">
      <div className={`flex gap-4 ${reverse ? "animate-scroll-right" : "animate-scroll-left"}`}>
        {[...items, ...items, ...items, ...items].map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-[#141414] border border-[#262626] rounded-lg hover:border-[#404040] transition-all whitespace-nowrap"
          >
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: tech.color }}
            />
            <span className="text-[#a3a3a3] text-sm">{tech.name}</span>
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
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#f43f5e] text-sm uppercase tracking-[0.3em] mb-4 block">My Arsenal</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-[#525252]">TECHNOLOGIES </span>
            <span className="gradient-text-rainbow">I MASTER</span>
          </h2>
          <p className="text-[#737373] text-lg max-w-2xl mx-auto">
            Building modern web experiences with cutting-edge tools and frameworks
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-2"
      >
        <TechRow items={techRow1} />
        <TechRow items={techRow2} reverse />
      </motion.div>
    </section>
  )
}
