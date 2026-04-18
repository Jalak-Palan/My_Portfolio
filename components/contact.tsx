"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Globe wireframe background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[800px] h-[800px] opacity-40">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Horizontal lines */}
            {[...Array(10)].map((_, i) => (
              <ellipse
                key={`h-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry={20 + i * 18}
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="0.3"
                transform={`rotate(${i * 18} 200 200)`}
                opacity="0.4"
              />
            ))}
            {/* Vertical lines */}
            {[...Array(16)].map((_, i) => (
              <ellipse
                key={`v-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry="180"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="0.3"
                transform={`rotate(${i * 11.25} 200 200)`}
                opacity="0.3"
              />
            ))}
            {/* Main circle */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#blueGradient)"
              strokeWidth="0.5"
              opacity="0.5"
            />
            {/* Glowing dots */}
            {[...Array(30)].map((_, i) => {
              const angle = (i / 30) * Math.PI * 2
              const radius = 180
              const x = (200 + Math.cos(angle) * radius).toFixed(3)
              const y = (200 + Math.sin(angle) * radius).toFixed(3)
              return (
                <circle
                  key={`dot-${i}`}
                  cx={x}
                  cy={y}
                  r="1.5"
                  fill="#3b82f6"
                  opacity="0.6"
                />
              )
            })}
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#f43f5e] text-sm uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">{"LET'S"} BUILD SOMETHING</span>
            <br />
            <span className="gradient-text-rainbow">EXTRAORDINARY</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto mb-8">
            {"Whether you're launching a startup or scaling an enterprise, I'm here to turn your vision into reality"}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#262626] hover:bg-[#333333] text-white rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="mailto:hello@jalakpalan.me" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 space-y-4"
          >
            <h3 className="text-white text-lg font-semibold">
              Available for full-time roles and selective freelance projects.
            </h3>
            <p className="text-[#737373]">
              I focus on shipping clean, scalable web solutions that support real users and growing products.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
