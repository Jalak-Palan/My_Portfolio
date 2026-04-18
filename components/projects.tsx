"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ExternalLink, Github, ChevronDown, Diamond, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Platour",
    category: "Restaurant Platform",
    description: "A luxury dining experience captured in a high-end web platform featuring interactive menus, reservation systems, and cinematic food photography.",
    features: [
      "Menu Management",
      "Online Reservations",
      "Gallery Showcase",
      "Dynamic Pricing"
    ],
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    liveUrl: "https://platour-nu.vercel.app/",
    sourceUrl: "https://github.com/Jalak-Palan/PALATOUR.git",
    images: ["/projects/platour.png", "/projects/platour-2.png"]
  },
  {
    title: "BlinkQ",
    category: "Healthcare SaaS",
    description: "A smart OPD management system that eliminates long hospital queues with real-time tracking, digital records, and seamless scheduling.",
    features: [
      "Real-time Queue Tracking",
      "Online Payments",
      "Digital Health Records",
      "SMS Notifications"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind"],
    liveUrl: "https://blinkq.vercel.app/",
    sourceUrl: "https://github.com/Jalak-Palan/Hospital_opd_system",
    images: ["/projects/blinkq-v2.png", "/projects/blinkq-v2-2.png"]
  },
  {
    title: "E-Commerce Platform",
    category: "Online Storefront",
    description: "A modern, fully responsive e-commerce storefront featuring dynamic product grids, seasonal promotions, and an intuitive user interface.",
    features: [
      "Dynamic Product Grid",
      "Responsive Design",
      "Promotional Deals",
      "Seamless Navigation"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    liveUrl: "https://habib277672.github.io/e-commerce-site/",
    sourceUrl: "https://github.com/Jalak-Palan/e-commerce-site",
    images: ["/projects/ecommerce.png", "/projects/ecommerce-2.png"]
  },
  {
    title: "Career Craft",
    category: "Job Tracker & Analyzer",
    description: "A smart platform to track job applications, get AI-powered resume analysis, and find the perfect match for your skills.",
    features: [
      "Job Tracking Dashboard",
      "AI Resume Analysis",
      "Skill Matching",
      "Search & Analytics"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://career-craft-virid.vercel.app/",
    sourceUrl: "https://github.com/Jalak-Palan/Resume_trekar.git",
    images: ["/projects/career-craft.png", "/projects/career-craft-2.png"]
  },
]

const hiddenProjects = [
  {
    title: "Moungiri Store",
    category: "E-commerce",
    description: "A modern e-commerce platform with seamless payment integration, inventory management, and analytics dashboard.",
    features: [
      "Payment Gateway",
      "Inventory System",
      "Order Tracking",
      "Admin Dashboard"
    ],
    techStack: ["Next.js", "Stripe", "MongoDB", "Tailwind", "Vercel"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "/projects/moungiri.png"
  },
  {
    title: "Devory",
    category: "AI Assistant",
    description: "An AI-powered development assistant that helps developers write, review, and debug code with intelligent suggestions.",
    features: [
      "Code Generation",
      "Bug Detection",
      "Code Review",
      "Documentation"
    ],
    techStack: ["OpenAI", "LangChain", "Next.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "/projects/devory.png"
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showMore, setShowMore] = useState(false)
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)

  const displayedProjects = showMore ? [...projects, ...hiddenProjects] : projects

  // Close zoom on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedIndex(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Zoom Backdrop Overlay */}
      <AnimatePresence>
        {zoomedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedIndex(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl cursor-pointer flex items-center justify-center p-4"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-8 right-8 text-white hover:bg-white/10 rounded-full z-[120]"
              onClick={(e) => { e.stopPropagation(); setZoomedIndex(null); }}
            >
              <X className="w-8 h-8" />
            </Button>
            
            <motion.div
              layoutId={`project-image-${zoomedIndex}`}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-[110] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={displayedProjects[zoomedIndex].images ? displayedProjects[zoomedIndex].images[0] : displayedProjects[zoomedIndex].image} 
                alt={displayedProjects[zoomedIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-white/10 flex items-center px-4 gap-2 z-10">
                <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
                <div className="w-2 h-2 rounded-full bg-[#eab308]" />
                <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f43f5e] text-sm uppercase tracking-[0.3em] mb-4 block">My Work</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#737373] text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image Stack */}
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[16/10] flex items-center justify-center group/stack">
                    
                    {/* Secondary Image (Behind) - Only if multiple images exist */}
                    {project.images && project.images.length > 1 && (
                      <motion.div
                        className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-[#141414] shadow-2xl z-0"
                        animate={{ 
                          x: zoomedIndex === i ? 0 : 0, // Reset when zoomed
                          rotate: zoomedIndex === i ? 0 : 0,
                          scale: zoomedIndex === i ? 0 : 0.95,
                          opacity: zoomedIndex === i ? 0 : 1
                        }}
                        whileHover={{ 
                          rotate: -8, 
                          x: -70, 
                          scale: 1,
                        }}
                        transition={{ type: "spring", stiffness: 150, damping: 18 }}
                      >
                         <img 
                          src={project.images[1]} 
                          alt={`${project.title} secondary`}
                          className="w-full h-full object-cover opacity-60 transition-opacity group-hover/stack:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </motion.div>
                    )}

                    {/* Primary Image (Front) */}
                    <motion.div
                      layoutId={`project-image-${i}`}
                      onClick={() => setZoomedIndex(i)}
                      animate={{
                        opacity: zoomedIndex === i ? 0 : 1
                      }}
                      whileHover={project.images && project.images.length > 1 ? { 
                        rotate: 8, 
                        x: 70,
                        scale: 1.05 
                      } : { 
                        scale: 1.05 
                      }}
                      transition={{ type: "spring", stiffness: 150, damping: 18 }}
                      className={`relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-2xl cursor-zoom-in z-10`}
                    >
                      <img 
                        src={project.images ? project.images[0] : project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover/stack:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      
                      {/* Browser mockup controls */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-white/10 flex items-center px-4 gap-2 z-10">
                        <div className="w-2 h-2 rounded-full bg-[#ef4444]" />
                        <div className="w-2 h-2 rounded-full bg-[#eab308]" />
                        <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
                      </div>

                      {/* Helper text on hover */}
                      <div className="absolute bottom-4 right-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest opacity-0 group-hover/stack:opacity-100 transition-opacity">
                         Click to Focus
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Diamond className="w-4 h-4 text-[#f43f5e]" />
                    <span className="text-[#f43f5e] text-sm font-medium uppercase tracking-widest">{project.category}</span>
                  </div>

                  <h3 className="text-4xl font-bold text-white tracking-tight leading-none uppercase">{project.title}</h3>
                  <p className="text-[#737373] text-lg leading-relaxed">{project.description}</p>

                  <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
                    {project.features && project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#f43f5e] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-xs bg-[#1a1a1a] text-[#a3a3a3] rounded-full border border-white/5 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button
                      asChild
                      className="bg-[#f43f5e] hover:bg-[#e11d48] text-white rounded-xl px-8 h-12 font-bold uppercase tracking-widest text-xs"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="bg-transparent hover:bg-[#1a1a1a] border-white/10 text-white rounded-xl px-8 h-12 font-bold uppercase tracking-widest text-xs"
                    >
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                        Source Code
                        <Github className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-32"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="group flex flex-col items-center gap-4 mx-auto"
          >
            <div className="p-4 rounded-full bg-[#1a1a1a] border border-white/10 group-hover:border-[#f43f5e]/50 transition-colors">
              <ChevronDown className={`w-6 h-6 text-[#f43f5e] transition-transform duration-500 ${showMore ? "rotate-180" : ""}`} />
            </div>
            <span className="text-[#f43f5e] text-sm uppercase tracking-[0.2em] font-bold">
              {showMore ? "Show Less" : `Discover ${hiddenProjects.length} More Projects`}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
