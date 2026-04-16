"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started my coding journey with HTML & CSS, building simple websites and discovering my passion for web development."
  },
  {
    year: "2024",
    title: "B.Tech & Full Stack",
    description: "Completed my B.Tech in Computer Science while mastering full-stack development with React, Node.js, and cloud technologies."
  },
  {
    year: "2025",
    title: "ThinkVerse Launch",
    description: "Launched ThinkVerse, a SaaS platform for AI-powered content creation that helps creators and businesses scale their output."
  },
  {
    year: "2026",
    title: "AI Development",
    description: "Deep diving into AI/ML with Devory, building intelligent systems that transform how businesses operate and make decisions."
  },
  {
    year: "2027+",
    title: "The Future",
    description: "Continuing to push boundaries, building products that matter, and helping shape the future of AI-powered applications."
  },
]

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            The Story{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              So Far
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my journey in tech and the milestones along the way
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                  <div className="w-full h-full bg-primary rounded-full animate-pulse-glow" />
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                </div>

                {/* Content */}
                <div className={`ml-12 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <span className="inline-block px-3 py-1 text-sm font-bold bg-primary/10 text-primary rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* To be continued */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <span className="text-muted-foreground/50 text-lg italic">To be continued...</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
