"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Calendar, ShieldCheck, ChevronLeft, ChevronRight, Award, ZoomIn, Sparkles, Building } from "lucide-react"

// Rich certificates dataset with curated details
const certificates = [
  {
    badge: "Hackathon Winner",
    title: "IISC CodeForge Hackathon",
    subtitle: "Excelled in building scalable AI platforms at the CodeForge Hackathon hosted at the Indian Institute of Science, Bangalore. Designed modern web architectures under high-pressure competitive environments.",
    bg: "linear-gradient(135deg, #1e3a5f 0%, #0f1f36 100%)",
    accent: "#3b82f6", // Royal blue
    accentGlow: "rgba(59, 130, 246, 0.35)",
    src: "/certificates/IISC CodeForge Hackthon_page-0001.jpg",
    date: "Feb 2025",
    issuer: "Indian Institute of Science (IISc), Bangalore",
    skills: ["Next.js", "AI Agent Integration", "Framer Motion", "SaaS Systems"],
    verifyUrl: "https://lightswind.com/components/Installation"
  },
  {
    badge: "IIT Certification",
    title: "IIT Kharagpur Achievement",
    subtitle: "Recognized by the Indian Institute of Technology, Kharagpur for technical excellence, algorithmic optimization, and backend engineering principles. Designed robust software frameworks for competitive paradigms.",
    bg: "linear-gradient(135deg, #3b1f5e 0%, #1a0d2e 100%)",
    accent: "#a855f7", // Vibrant Purple
    accentGlow: "rgba(168, 85, 247, 0.35)",
    src: "/certificates/IIT Kharagpur_page-0001.jpg",
    date: "Nov 2024",
    issuer: "IIT Kharagpur",
    skills: ["Algorithms", "Data Structures", "System Design", "Node.js"],
    verifyUrl: "#"
  },
  {
    badge: "National Finalist",
    title: "IIT Bombay TechFest Award",
    subtitle: "Honored with the technical excellence award at the national level TechFest hosted by Indian Institute of Technology, Bombay. Recognized for exceptional engineering designs and rapid prototyping.",
    bg: "linear-gradient(135deg, #0f3d2e 0%, #071f18 100%)",
    accent: "#10b981", // Emerald Green
    accentGlow: "rgba(16, 185, 129, 0.35)",
    src: "/certificates/IIT-BOMBAY.png",
    date: "Dec 2024",
    issuer: "IIT Bombay",
    skills: ["Product Development", "UX Engineering", "Rapid Prototyping", "Full Stack"],
    verifyUrl: "#"
  },
  {
    badge: "Excellence Honor",
    title: "Certificate of Excellence",
    subtitle: "Awarded for outstanding performance, core dedication, and overall engineering excellence across competitive technical hackathons and product building sessions.",
    bg: "linear-gradient(135deg, #3d2a0f 0%, #1f1507 100%)",
    accent: "#f59e0b", // Amber/Gold
    accentGlow: "rgba(245, 158, 11, 0.35)",
    src: "/certificates/Jalak Palan_page-0001.jpg",
    date: "Aug 2024",
    issuer: "National Board of Innovation",
    skills: ["Software Engineering", "Full-Stack Dev", "Team Leadership", "Clean Code"],
    verifyUrl: "#"
  },
  {
    badge: "Hackathon Runner-Up",
    title: "K Hacks 3.0 Hackathon",
    subtitle: "Runner-up at the K Hacks 3.0 Hackathon — a premium competitive event bringing together elite developers to create impactful software models addressing real-world enterprise issues.",
    bg: "linear-gradient(135deg, #3d0f1a 0%, #200810 100%)",
    accent: "#ef4444", // Red
    accentGlow: "rgba(239, 68, 68, 0.35)",
    src: "/certificates/K Hacks 3.0_page-0001.jpg",
    date: "Oct 2023",
    issuer: "K Hacks Board",
    skills: ["React Native", "Tailwind CSS", "API Design", "Database Modeling"],
    verifyUrl: "#"
  },
  {
    badge: "Cybersecurity Expert",
    title: "Jaipur Cyberathon",
    subtitle: "Demonstrated cybersecurity excellence, network security defense, and ethical hacking protocols during the Jaipur Cyberathon challenge organized in association with security agencies.",
    bg: "linear-gradient(135deg, #1a3a1e 0%, #0d200f 100%)",
    accent: "#22c55e", // Light Green
    accentGlow: "rgba(34, 197, 94, 0.35)",
    src: "/certificates/jaipur Cybrathon_page-0001.jpg",
    date: "May 2023",
    issuer: "Cyber Security Association & Police Cell",
    skills: ["Network Security", "Ethical Hacking", "Threat Assessment", "Cryptography"],
    verifyUrl: "#"
  },
  {
    badge: "Industry Collaboration",
    title: "Odoo X Adani Achievement",
    subtitle: "Awarded at the enterprise solution workshop hosted by Adani Group and Odoo. Designed automated ERP logic and analytics pipelines for large-scale operations.",
    bg: "linear-gradient(135deg, #1e1a3a 0%, #0f0d20 100%)",
    accent: "#6366f1", // Indigo
    accentGlow: "rgba(99, 102, 241, 0.35)",
    src: "/certificates/odoo X Adani_page-0001.jpg",
    date: "Mar 2023",
    issuer: "Odoo & Adani Group",
    skills: ["Enterprise Systems", "Database Optimization", "SaaS Dev", "ERP Logic"],
    verifyUrl: "#"
  }
]

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // 3D Marquee Columns (curated mixture for visual balance)
  const columns = [
    [certificates[0], certificates[3], certificates[5], certificates[1]],
    [certificates[2], certificates[6], certificates[4], certificates[0]],
    [certificates[1], certificates[5], certificates[3], certificates[2]]
  ]

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const nextCert = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length)
  }

  const prevCert = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  const handleCardInteraction = (certTitle: string) => {
    const origIndex = certificates.findIndex((c) => c.title === certTitle)
    if (origIndex !== -1) {
      setActiveIndex(origIndex)
    }
  }

  const activeCert = certificates[activeIndex]

  return (
    <section id="certificates" className="py-24 sm:py-32 relative overflow-hidden bg-background border-t border-border/20">
      {/* Immersive Glowing Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern Section Header */}
        <div className="text-center md:text-left mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary">
              Credentials & Achievements
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4"
          >
            Certificates &amp; <span className="gradient-text">Awards</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl"
          >
            Explore an interactive 3D vault of my academic accolades, tech hackathon victories, and professional industry credentials.
          </motion.p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Inspector Panel */}
          <div className="lg:col-span-5 flex flex-col h-full justify-center">
            <div className="bg-card/30 backdrop-blur-md border border-border/60 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 flex flex-col justify-between relative overflow-hidden group min-h-[460px]">
              
              {/* Animated Accent Line */}
              <div 
                className="absolute top-0 left-0 w-full h-[3px] transition-all duration-500 ease-out" 
                style={{
                  background: `linear-gradient(90deg, ${activeCert.accent}, transparent)`
                }}
              />

              {/* Inspector HUD Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/40">
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  CREDENTIAL INSPECTOR
                </span>
                <span className="text-[11px] font-mono text-muted-foreground font-semibold">
                  0{activeIndex + 1} / 0{certificates.length}
                </span>
              </div>

              {/* Info Container with Transition cross-fade */}
              <div className="flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-grow"
                  >
                    {/* Badge */}
                    <div className="mb-4">
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                        style={{ 
                          borderColor: `${activeCert.accent}30`, 
                          color: activeCert.accent,
                          backgroundColor: `${activeCert.accent}08` 
                        }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        {activeCert.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                      {activeCert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {activeCert.subtitle}
                    </p>

                    {/* Meta Section (Issuer & Date) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-secondary/20 p-4 rounded-xl border border-border/30">
                      <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <Building className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="line-clamp-1">{activeCert.issuer}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span>Issued {activeCert.date}</span>
                      </div>
                    </div>

                    {/* Tech & Skills Gained Tags */}
                    <div className="mb-6">
                      <h4 className="text-[11px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2.5">
                        SKILLS VERIFIED:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeCert.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-border/60 bg-secondary/40 text-foreground/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Buttons & Manual Navigation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-border/40">
                
                {/* Actions */}
                <div className="flex items-center gap-2.5">
                  <button 
                    onClick={() => setZoomedIndex(activeIndex)}
                    className="flex-grow sm:flex-grow-0 inline-flex items-center justify-center gap-2 bg-foreground text-background hover:opacity-90 active:scale-95 transition-all px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-foreground/5 cursor-pointer"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    Inspect High-Res
                  </button>
                  
                  {activeCert.verifyUrl && activeCert.verifyUrl !== "#" && (
                    <a 
                      href={activeCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 border border-border/80 hover:bg-secondary/40 rounded-xl transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
                      title="Verify Official Credential"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Arrow Nav Buttons */}
                <div className="flex items-center justify-end gap-2">
                  <button 
                    onClick={prevCert}
                    className="w-10 h-10 border border-border/80 hover:bg-secondary/40 active:scale-95 rounded-xl transition-all flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
                    aria-label="Previous Certificate"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextCert}
                    className="w-10 h-10 border border-border/80 hover:bg-secondary/40 active:scale-95 rounded-xl transition-all flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
                    aria-label="Next Certificate"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: 3D Isometric Floating Marquee Gallery */}
          <div ref={containerRef} className="lg:col-span-7 relative w-full h-[550px] sm:h-[650px] overflow-hidden rounded-3xl border border-border/40 bg-secondary/10 backdrop-blur-sm p-4 flex items-center justify-center">
            
            {/* Fine isometric grid texture */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                 style={{ 
                   backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`, 
                   backgroundSize: '20px 20px' 
                 }} 
            />

            {/* Glowing active backdrop */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ease-out opacity-25"
              style={{ backgroundColor: activeCert.accent }}
            />

            {/* 3D Tilted Perspective Box */}
            <div 
              className="w-full h-full flex items-center justify-center transition-transform duration-500"
              style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
              }}
            >
              <div 
                className="relative grid grid-cols-3 gap-6 sm:gap-8 w-[130%] max-w-[850px] h-[130%] origin-center"
                style={{
                  transform: "rotateX(55deg) rotateY(0deg) rotateZ(35deg) scale(0.9)",
                  transformStyle: "preserve-3d",
                }}
              >
                {columns.map((columnItems, colIdx) => {
                  const isEven = colIdx % 2 === 0
                  
                  return (
                    <motion.div
                      key={`col-${colIdx}`}
                      animate={{ 
                        y: isEven ? [10, 110, 10] : [-10, -110, -10] 
                      }}
                      transition={{
                        duration: isEven ? 14 : 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                      className="flex flex-col gap-6 relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {columnItems.map((item, imgIdx) => {
                        const originalIndex = certificates.findIndex((c) => c.title === item.title)
                        const isCurrentlyActive = originalIndex === activeIndex
                        
                        return (
                          <div 
                            key={`item-${colIdx}-${imgIdx}`}
                            className="relative w-full aspect-[970/700] rounded-xl cursor-pointer"
                            style={{ 
                              transformStyle: "preserve-3d",
                            }}
                            onMouseEnter={() => handleCardInteraction(item.title)}
                            onClick={() => {
                              handleCardInteraction(item.title)
                              setZoomedIndex(originalIndex)
                            }}
                          >
                            <motion.div
                              whileHover={{ 
                                y: -12, 
                                z: 30,
                                scale: 1.05
                              }}
                              transition={{ type: "spring", stiffness: 260, damping: 22 }}
                              className={`w-full h-full rounded-xl overflow-hidden shadow-lg border transition-all duration-300 relative ${
                                isCurrentlyActive 
                                  ? "border-foreground shadow-2xl ring-2 ring-primary/40" 
                                  : "border-border/60 hover:border-foreground/40 shadow-black/10"
                              }`}
                              style={{
                                background: item.bg,
                                boxShadow: isCurrentlyActive ? `0 15px 35px -5px ${item.accentGlow}` : ''
                              }}
                            >
                              {/* Overlay for inactive cards */}
                              <div className={`absolute inset-0 bg-background/20 backdrop-grayscale-[20%] transition-opacity duration-300 pointer-events-none ${
                                isCurrentlyActive ? "opacity-0" : "opacity-[0.25] hover:opacity-0"
                              }`} />

                              {/* Certificate Thumbnail */}
                              <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover object-top block transition-transform duration-500"
                                loading="lazy"
                              />

                              {/* Corner Icon Accent */}
                              <div 
                                className="absolute bottom-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shadow-md border"
                                style={{
                                  backgroundColor: `rgba(0,0,0,0.6)`,
                                  borderColor: `${item.accent}30`,
                                  color: item.accent
                                }}
                              >
                                {item.icon || "◈"}
                              </div>
                            </motion.div>
                          </div>
                        )
                      })}
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Instruction tooltip in bottom center */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full flex items-center gap-2 pointer-events-none shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <p className="text-[10px] font-mono tracking-wider text-white/80 uppercase">
                Hover to inspect • Click to zoom
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Immersive Dual-Pane Fullscreen Lightbox */}
      <AnimatePresence>
        {zoomedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoomedIndex(null)}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            {/* Immersive radial glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] rounded-full blur-[160px] opacity-15 pointer-events-none"
              style={{ backgroundColor: certificates[zoomedIndex].accent }}
            />

            {/* Lightbox Wrapper */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-card border border-border/80 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden max-h-[92vh] sm:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setZoomedIndex(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 text-white rounded-full w-10 h-10 border border-white/10 flex items-center justify-center hover:scale-105 transition-all cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Left Pane: Visual high-res canvas (takes 70% width on large screen) */}
              <div className="flex-grow bg-black/40 flex items-center justify-center p-6 relative select-none border-b lg:border-b-0 lg:border-r border-border/60 max-h-[50vh] lg:max-h-none lg:w-[65%]">
                
                {/* Arrow navigation inside lightbox */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setZoomedIndex((prev) => prev !== null ? (prev - 1 + certificates.length) % certificates.length : null)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-md"
                  aria-label="Prev high-res image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setZoomedIndex((prev) => prev !== null ? (prev + 1) % certificates.length : null)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/50 hover:bg-black/80 border border-white/10 text-white rounded-full flex items-center justify-center active:scale-95 transition-all cursor-pointer shadow-md"
                  aria-label="Next high-res image"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Certificate High-Res Render */}
                <img
                  src={certificates[zoomedIndex].src}
                  alt={certificates[zoomedIndex].title}
                  className="max-w-[90%] max-h-[44vh] lg:max-h-[70vh] rounded-lg shadow-2xl object-contain object-center scale-95 hover:scale-100 transition-transform duration-500 ease-out border border-white/5"
                />
              </div>

              {/* Right Pane: Descriptive Metadata Drawer (takes 35% width on large screen) */}
              <div className="w-full lg:w-[35%] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-card select-none">
                <div>
                  <span 
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border mb-4"
                    style={{ 
                      borderColor: `${certificates[zoomedIndex].accent}30`, 
                      color: certificates[zoomedIndex].accent,
                      backgroundColor: `${certificates[zoomedIndex].accent}08` 
                    }}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
                    {certificates[zoomedIndex].title}
                  </h3>

                  <div className="space-y-4 mb-6 border-y border-border/40 py-4">
                    <div className="flex items-start gap-3 text-sm">
                      <Building className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase leading-none mb-1">ISSUED BY</p>
                        <p className="text-foreground/90 font-medium">{certificates[zoomedIndex].issuer}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-mono text-muted-foreground uppercase leading-none mb-1">DATE EARNED</p>
                        <p className="text-foreground/90 font-medium">{certificates[zoomedIndex].date}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                    {certificates[zoomedIndex].subtitle}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-[10px] font-mono font-bold tracking-wider text-muted-foreground uppercase mb-2">
                      VERIFIED SKILLSETS
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {certificates[zoomedIndex].skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-2 py-0.5 rounded text-[10px] font-mono border border-border/80 bg-secondary/40 text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/40">
                  {certificates[zoomedIndex].verifyUrl && certificates[zoomedIndex].verifyUrl !== "#" ? (
                    <a 
                      href={certificates[zoomedIndex].verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all px-4 py-3 rounded-xl text-xs font-bold shadow-lg shadow-foreground/5 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify Official Credential
                    </a>
                  ) : (
                    <button 
                      disabled
                      className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-muted-foreground border border-border/60 px-4 py-3 rounded-xl text-xs font-bold opacity-60 cursor-not-allowed"
                    >
                      Verification ID Embedded
                    </button>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
