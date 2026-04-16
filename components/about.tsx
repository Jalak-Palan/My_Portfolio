"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Target, Eye } from "lucide-react"

const techTags = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "AI/ML", icon: "🤖" },
  { name: "System Design", icon: "⚙️" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#141414] rounded-3xl p-6 border border-[#262626] h-full">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#f97316] to-[#f43f5e] flex items-center justify-center text-white text-2xl font-bold">
                  RB
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">Rameshwar Bhagwat</h3>
                  <p className="text-[#f97316] text-sm mb-2">Full Stack & AI Developer</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-[#a3a3a3] text-sm">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Core Expertise */}
              <div className="mb-6">
                <h4 className="text-[#737373] text-sm uppercase tracking-wider mb-4">Core Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag, i) => (
                    <motion.span
                      key={tag.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="px-3 py-1.5 text-sm bg-[#1a1a1a] text-[#a3a3a3] rounded-full border border-[#262626] flex items-center gap-2"
                    >
                      <span className="text-xs">{tag.icon}</span>
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                  <Clock className="w-4 h-4 text-[#3b82f6]" />
                  <span className="text-white text-sm">3+ Years</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-[#262626]">
                  <Target className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-white text-sm">6+ Projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Info Cards */}
          <div className="space-y-4">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* Bio card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-2 bg-[#141414] rounded-2xl p-5 border border-[#262626]"
              >
                <p className="text-[#a3a3a3] text-sm leading-relaxed">
                  I build modern, scalable web apps with a focus on clean code and great UX. 
                  I love turning complex problems into simple, beautiful solutions that drive real impact - 
                  blending technology with intuitive design.
                </p>
              </motion.div>

              {/* Visitor counter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#141414] rounded-2xl p-5 border border-[#262626] flex flex-col items-center justify-center"
              >
                <span className="text-3xl font-bold gradient-text-orange">608+</span>
                <span className="text-[#737373] text-sm mt-1">Portfolio Visitors</span>
                <span className="text-[#525252] text-xs mt-1">Thank you for being part of my journey</span>
              </motion.div>
            </div>

            {/* Bottom - Large card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#141414] rounded-2xl p-5 border border-[#262626]"
            >
              {/* This can be additional content or left minimal */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
