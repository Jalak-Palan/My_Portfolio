"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Globe wireframe - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] h-[600px] opacity-60">
          {/* Globe circles */}
          <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Horizontal lines */}
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={`h-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry={30 + i * 20}
                fill="none"
                stroke="url(#orangeGradient)"
                strokeWidth="0.5"
                transform={`rotate(${i * 22.5} 200 200)`}
                opacity="0.5"
              />
            ))}
            {/* Vertical lines */}
            {[...Array(12)].map((_, i) => (
              <ellipse
                key={`v-${i}`}
                cx="200"
                cy="200"
                rx="180"
                ry="180"
                fill="none"
                stroke="url(#orangeGradient)"
                strokeWidth="0.5"
                transform={`rotate(${i * 15} 200 200)`}
                opacity="0.3"
              />
            ))}
            {/* Main circle */}
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="url(#orangeGradient)"
              strokeWidth="1"
              opacity="0.6"
            />
            {/* Glowing dots */}
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2
              const radius = 180
              const x = 200 + Math.cos(angle) * radius
              const y = 200 + Math.sin(angle) * radius
              return (
                <circle
                  key={`dot-${i}`}
                  cx={x}
                  cy={y}
                  r="2"
                  fill="#f97316"
                  opacity="0.8"
                />
              )
            })}
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#f43f5e" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-2"
          >
            <span className="text-white">{"Hey, I'm"}</span>
          </motion.h1>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4"
          >
            <span className="gradient-text">Rameshwar</span>
            <span className="text-white"> Bhagwat</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#737373] text-lg sm:text-xl tracking-[0.3em] uppercase mb-2"
          >
            Full Stack & AI Developer
          </motion.p>

          {/* Orange underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-48 h-1 mx-auto mb-8"
            style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }}
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[#a3a3a3] text-lg sm:text-xl mb-10 max-w-2xl mx-auto italic"
          >
            Crafting <span className="gradient-text-orange font-medium not-italic">AI-Powered</span> platforms that elevate{" "}
            <span className="gradient-text-orange font-medium not-italic">SaaS & Web Innovators</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:from-[#e11d48] hover:to-[#db2777] text-white rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-[#262626] hover:bg-[#333333] border-[#404040] text-white rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Curved line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 Q720,0 1440,120"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  )
}
