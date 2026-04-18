"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const milestones = [
          {
    year: "2022-2023",
    title: "Saraswati Schooling System",
    type: "Secondary School (SSC)",
    board: "Gujarat Board",
    location: "Rajkot, Gujarat",
    description: "Completed my secondary education with a focus on core science and mathematics, laying the foundation for my technical career.",
    side: "right"
  },
  {
    year: "2024-2025",
    title: "P.V Modi school",
    type: "Higher Secondary school",
    board: "Gujarat Board (GSEB)",
    location: "Rajkot, Gujarat",
    description: "Focused on higher secondary education with a specialized curriculum in Science, preparing for advanced engineering and technical studies.",
    side: "left"
  },
  {
    year: "2025-2029",
    title: "Swaminarayan University X Codinggita",
    type: "B.E/B.Tech",
    location: "Kalol, Gandhinagar, Gujarat",
    description: "Pursuing a Bachelor of Engineering in Computer Science, combined with intensive industry-focused coding training at Codinggita to master late-stack software development.",
    side: "right"
  },
]

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  })

  // High-stiffness spring = snappy, zero-lag tracking
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.0005
  })

  // Move the dot indicator perfectly in sync with the spring-animated line
  const dotPosition = useTransform(scaleY, [0, 1], ["0%", "100%"])

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
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter">
            <span className="text-white">MY </span>
            <span className="gradient-text-orange uppercase">Education Journey</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          {/* Background Track - Thicker Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10 rounded-full" />
          
          {/* Active Progress Line */}
          <motion.div 
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-[#f97316] to-[#f43f5e] rounded-full"
          />

          {/* Moving Indicator - Dramatic Starburst & Arrow */}
          <motion.div 
            style={{ top: dotPosition }}
            className="absolute left-1/2 -translate-x-1/2 z-20 -translate-y-1/2"
          >
            <div className="relative flex items-center justify-center">
              {/* Central Intense Star Core */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute w-12 h-12 bg-white rounded-full blur-md z-30 opacity-50"
              />
              
              {/* Massive Outer Glow */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-32 h-32 bg-[#f97316] rounded-full blur-[60px] opacity-40"
              />

              {/* Light Rays / Starburst Beams */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`ray-${i}`}
                  initial={{ rotate: i * 30 }}
                  className="absolute w-[2px] h-[60px] origin-bottom"
                  style={{ bottom: "50%" }}
                >
                  <motion.div
                    animate={{ 
                      height: [40, 80, 40],
                      opacity: [0.1, 0.4, 0.1]
                    }}
                    transition={{ 
                      duration: 1.5 + (i % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1
                    }}
                    className="w-full h-full bg-gradient-to-t from-[#f97316] to-transparent rounded-full"
                  />
                </motion.div>
              ))}

              {/* Stardust Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  animate={{ 
                    x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 5)],
                    y: [0, (i < 4 ? 1 : -1) * (20 + i * 5)],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2 + (i % 2),
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                  className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_8px_white]"
                />
              ))}
              
              {/* Arrow Head Container */}
              <div className="w-12 h-12 rounded-full bg-[#141414] border-2 border-[#f97316] shadow-[0_0_30px_rgba(249,115,22,0.8)] flex items-center justify-center relative overflow-hidden z-20">
                {/* Intense Internal Spark */}
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute inset-0 bg-[#f97316]/20"
                />
                
                {/* Chevron */}
                <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Milestones */}
          <div className="space-y-24 py-10">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative"
              >
                {/* Fixed Center dot for each milestone */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-3 h-3 rounded-full bg-[#262626] border-2 border-[#141414]" />
                </div>

                {/* Content card */}
                <div className={`flex ${milestone.side === "left" ? "justify-start" : "justify-end"}`}>
                  <div className={`w-[45%] ${milestone.side === "left" ? "pr-8 text-left" : "pl-8 text-left"}`}>
                    <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 sm:p-10 card-hover relative overflow-hidden group min-h-[250px] flex flex-col justify-center items-start">
                      {/* Decorative background glow for 'big box' feel */}
                      <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#f97316]/5 blur-3xl rounded-full group-hover:bg-[#f97316]/10 transition-colors" />
                      
                      <div className="flex flex-col gap-6 relative z-10">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="inline-block px-4 py-1.5 text-[11px] font-black bg-[#f97316]/10 text-[#f97316] rounded-full border border-[#f97316]/10 uppercase tracking-widest">
                            {milestone.year}
                          </span>
                          {(milestone.type || milestone.board) && (
                            <div className="flex gap-2">
                              {milestone.type && (
                                <span className="text-[12px] font-bold bg-white/5 text-white/70 px-3 py-1 rounded border border-white/5 uppercase tracking-tight">
                                  {milestone.type}
                                </span>
                              )}
                              {milestone.board && (
                                <span className="text-[12px] font-bold bg-[#f97316]/5 text-[#f97316]/90 px-3 py-1 rounded border border-[#f97316]/10 uppercase tracking-tight">
                                  {milestone.board}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black gradient-text-orange mb-3 leading-tight tracking-tight">
                            {milestone.title}
                          </h3>
                          {milestone.location && (
                            <div className="flex items-center gap-1.5 text-[#a3a3a3] text-sm font-bold">
                              <svg className="w-4 h-4 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {milestone.location}
                            </div>
                          )}
                        </div>

                        <p className="text-[#d4d4d4] text-sm sm:text-base leading-relaxed font-medium">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Terminal Glow point & Final Explosion */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 flex items-center justify-center">
            {/* The terminal dot */}
            <div className="w-4 h-4 rounded-full bg-[#f43f5e] glow-pink relative z-20" />
            
            {/* Explosive Spark that triggers on reach */}
            <motion.div 
              style={{ 
                opacity: useTransform(scaleY, [0.98, 1], [0, 1]),
                scale: useTransform(scaleY, [0.98, 1], [0.5, 1.5])
              }}
              className="absolute pointer-events-none"
            >
              {/* Giant burst */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#f43f5e] rounded-full blur-[40px] opacity-60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full blur-[20px] opacity-80" />
              
              {/* Radial rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`end-ray-${i}`}
                  initial={{ rotate: i * 45 }}
                  className="absolute w-[2px] h-[80px] origin-bottom top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"
                >
                  <motion.div
                    animate={{ 
                      height: [40, 120, 40],
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{ 
                      duration: 1 + (i % 2) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-full h-full bg-gradient-to-t from-[#f43f5e] via-white to-transparent rounded-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
