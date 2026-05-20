"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, GraduationCap, MapPin, Sparkles } from "lucide-react"

// Clean and rich education milestones
const milestones = [
  {
    step: "01",
    year: "2022 - 2023",
    title: "Saraswati Schooling System",
    type: "Secondary School (SSC)",
    board: "Gujarat Board (GSEB)",
    location: "Rajkot, Gujarat",
    description: "Completed secondary schooling with an intensive focus on core mathematics and sciences, laying the structural analytical foundation for computational thinking.",
    skills: ["Mathematics", "General Sciences", "Logical Reasoning"],
    icon: BookOpen
  },
  {
    step: "02",
    year: "2024 - 2025",
    title: "P.V Modi School",
    type: "Higher Secondary (HSC)",
    board: "Gujarat Board (GSEB)",
    location: "Rajkot, Gujarat",
    description: "Focused on advanced Science and Mathematics. Developed strong problem-solving skills, algorithmic principles, and early programming logic.",
    skills: ["Physics & Chem", "Calculus & Algebra", "Computing Basics"],
    icon: Award
  },
  {
    step: "03",
    year: "2025 - 2029",
    title: "Swaminarayan University & Codinggita",
    type: "B.Tech Computer Science",
    board: "Integrated Professional Track",
    location: "Kalol, Gandhinagar, Gujarat",
    description: "Pursuing full-scale computer engineering integrated with intensive technical developer training at Codinggita to construct modern, scalable SaaS architectures.",
    skills: ["Next.js & React", "Algorithms", "System Architecture", "Cloud Dev"],
    icon: GraduationCap
  }
]

// Container staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 14
    }
  }
}

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Blur glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        
        {/* Modern Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
              The Path of Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
          >
            My Education <span className="gradient-text">Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
          >
            A chronological timeline of my academic development, technical specializations, and professional training.
          </motion.p>
        </div>

        {/* Stepper Timeline Container */}
        <div className="relative mt-8 sm:mt-12">
          
          {/* Connecting Line: Desktop (Horizontal) */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/10 hidden md:block z-0" />
          
          {/* Connecting Line: Mobile/Tablet (Vertical) */}
          <div className="absolute top-12 bottom-12 left-[31px] w-[2px] bg-gradient-to-b from-primary/30 via-accent/30 to-primary/10 block md:hidden z-0" />

          {/* Milestone Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {milestones.map((milestone, idx) => {
              const IconComponent = milestone.icon

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="relative flex flex-col md:flex-col gap-6 md:gap-0"
                >
                  
                  {/* Step Stepper Header (Number & Icon) */}
                  <div className="flex md:flex-col items-center gap-4 md:gap-3 z-10 md:mb-6 shrink-0 md:w-auto">
                    
                    {/* Stepper Dot */}
                    <div className="w-16 h-16 rounded-full bg-card border border-border/80 shadow-lg flex items-center justify-center relative group-hover:border-primary transition-colors duration-300">
                      {/* Pulse Glow for active/last step */}
                      {idx === milestones.length - 1 && (
                        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping pointer-events-none" />
                      )}
                      
                      <div className="w-12 h-12 rounded-full bg-secondary/80 flex items-center justify-center text-primary">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step tag */}
                    <div className="flex flex-col md:items-center">
                      <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase leading-none">
                        STEP {milestone.step}
                      </span>
                      <span className="text-xs font-mono font-bold text-primary mt-1 md:mt-0.5">
                        {milestone.year}
                      </span>
                    </div>
                  </div>

                  {/* Stepper Body Card */}
                  <div className="flex-grow pl-10 md:pl-0">
                    <div className="h-full bg-card/30 backdrop-blur-md border border-border/80 rounded-2xl p-6 shadow-md shadow-black/5 hover:shadow-xl hover:border-primary/50 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between">
                      
                      {/* Gradient Ambient Overlay */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                      <div className="flex flex-col">
                        
                        {/* Header metadata */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="text-[11px] font-mono bg-secondary border border-border/50 text-foreground/80 px-2.5 py-0.5 rounded-md font-semibold">
                            {milestone.type}
                          </span>
                          <span className="text-[10px] font-mono text-muted-foreground font-medium">
                            {milestone.board}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:gradient-text transition-all duration-300 mb-2 leading-tight">
                          {milestone.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{milestone.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                          {milestone.description}
                        </p>

                      </div>

                      {/* Technical Tags footer */}
                      <div className="border-t border-border/40 pt-4 mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {milestone.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono border border-border bg-secondary/50 text-foreground/80"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>
              )
            })}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
