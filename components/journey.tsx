"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
  {
    year: "2022",
    title: "The Beginning",
    description: "Started my coding journey with HTML & CSS, building simple websites and discovering my passion for web development.",
    side: "right"
  },
  {
    year: "2024",
    title: "B.Tech & Full Stack",
    description: "Completed my B.Tech in Computer Science while mastering full-stack development with React, Node.js, and cloud technologies.",
    side: "left"
  },
  {
    year: "2025",
    title: "ThinkVerse Launch",
    description: "Launched ThinkVerse, a SaaS platform for AI-powered content creation that helps creators and businesses scale their output.",
    side: "right"
  },
  {
    year: "2026",
    title: "AI Development",
    description: "Deep diving into AI/ML with Devory, building intelligent systems that transform how businesses operate and make decisions.",
    side: "left"
  },
  {
    year: "2027+",
    title: "The Future",
    description: "Continuing to push boundaries, building products that matter, and helping shape the future of AI-powered applications.",
    side: "right"
  },
]

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#f43f5e] text-sm uppercase tracking-[0.3em] mb-4 block">The Story So Far</span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="text-white">MY </span>
            <span className="gradient-text-orange">JOURNEY</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#f97316] to-[#f43f5e]" />

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative"
              >
                {/* Center dot */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-[#f97316] glow-orange" />
                </div>

                {/* Content card */}
                <div className={`flex ${milestone.side === "left" ? "justify-start" : "justify-end"}`}>
                  <div className={`w-5/12 ${milestone.side === "left" ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 card-hover">
                      <span className="inline-block px-3 py-1 text-sm font-bold bg-[#f97316]/10 text-[#f97316] rounded-full mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-[#737373] text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom glow */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#f43f5e] glow-pink" />
        </div>
      </div>
    </section>
  )
}
