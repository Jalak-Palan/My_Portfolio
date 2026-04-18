"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NetworkGlobe } from "./network-globe"

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

      {/* 3D Network Globe Background */}
      <NetworkGlobe />

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
            <span className="gradient-text">Jalak</span>
            <span className="text-white"> Palan</span>
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
            style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)' }}
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
              className="bg-gradient-to-r from-[#f43f5e] to-[#ec4899] hover:from-[#e11d48] hover:to-[#db2777] text-white rounded-full px-8 py-6 text-base font-medium cursor-pointer"
            >
              <a onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }} className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-[#262626] hover:bg-[#333333] border-[#404040] text-white rounded-full px-8 py-6 text-base font-medium cursor-pointer"
            >
              <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')); }}>Get In Touch</a>
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
          {/* Outer glow */}
          <path
            d="M0,120 Q720,0 1440,120"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="15"
            className="blur-md"
          />
          {/* Inner glow */}
          <path
            d="M0,120 Q720,0 1440,120"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="8"
            className="blur-sm"
          />
          {/* Core bright line */}
          <path
            d="M0,120 Q720,0 1440,120"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
          />
        </svg>
      </div>
    </section>
  )
}
