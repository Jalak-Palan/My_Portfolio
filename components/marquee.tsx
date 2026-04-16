"use client"

import { motion } from "framer-motion"

const row1Items = [
  "Full Stack Developer",
  "AI & ML Integration",
  "SaaS Architect",
  "Product Builder",
  "Next.js Expert",
  "React Developer",
  "Python Developer",
  "Cloud Engineer",
]

const row2Items = [
  "3+ Years Experience",
  "Creative Developer",
  "10+ Projects Delivered",
  "Open Source Contributor",
  "Tech Enthusiast",
  "Problem Solver",
  "Clean Code Advocate",
  "Continuous Learner",
]

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden py-4">
      <div className={`flex gap-8 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-2xl sm:text-3xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors">
              {item}
            </span>
            <span className="text-primary text-2xl">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="py-12 overflow-hidden border-y border-border bg-secondary/20">
      <MarqueeRow items={row1Items} />
      <MarqueeRow items={row2Items} reverse />
    </section>
  )
}
