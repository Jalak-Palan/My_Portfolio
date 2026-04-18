"use client"

import { motion } from "framer-motion"

const row1Items = [
  "NEXT.JS EXPERT",
  "REACT SPECIALIST",
  "TYPESCRIPT",
  "MONGODB",
  "PRODUCT BUILDER",
  "UI/UX ENTHUSIAST",
  "CLEAN ARCHITECTURE",
  "SCALABLE SAAS",
]

const row2Items = [
  "FULL STACK DEVELOPER",
  "10+ PROJECTS DELIVERED",
  "OPEN SOURCE CONTRIBUTOR",
  "AI INTEGRATION",
  "PERFORMANCE OPTIMIZATION",
  "CREATIVE DEVELOPER",
  "PROBLEM SOLVER",
  "TECH ARCHITECT",
]

function MarqueeRow({ 
  items, 
  reverse = false, 
  className = "", 
  variant = "dark" 
}: { 
  items: string[]; 
  reverse?: boolean; 
  className?: string;
  variant?: "dark" | "primary" 
}) {
  const isPrimary = variant === "primary"
  
  return (
    <div className={`flex overflow-hidden w-full ${className}`}>
      <div className={`flex gap-4 sm:gap-8 items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-4 sm:gap-8 whitespace-nowrap">
            <span className={`font-black tracking-tighter ${
              isPrimary ? "text-lg sm:text-2xl text-white" : "text-xl sm:text-3xl text-white"
            }`}>
              {item}
            </span>
            <div className={`rotate-45 ${
              isPrimary ? "w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40" : "w-2 h-2 sm:w-3 sm:h-3 bg-white/20"
            }`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Marquee() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
      <div className="relative flex flex-col justify-center items-center h-[350px] sm:h-[400px]">
        {/* Dark Ribbon - Bottom Layer */}
        <div className="absolute inset-0 flex items-center justify-center transform rotate-[5deg] z-10 w-[120%] -ml-[10%]">
          <div className="w-full bg-[#111111] backdrop-blur-md border-y border-white/5 py-4 shadow-2xl">
            <MarqueeRow items={row2Items} reverse variant="dark" />
          </div>
        </div>

        {/* Primary Ribbon - Top Layer */}
        <div className="absolute inset-0 flex items-center justify-center transform -rotate-[5deg] z-20 w-[120%] -ml-[10%]">
          <div className="w-full bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#ff512f] py-2 sm:py-3 shadow-[0_20px_80px_rgba(221,36,118,0.5)] border-y border-white/10">
            <MarqueeRow items={row1Items} variant="primary" />
          </div>
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-[#dd2476]/10 blur-[150px] pointer-events-none" />
      </div>
    </section>
  )
}
