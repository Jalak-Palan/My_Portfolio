"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronDown, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "WebCraft",
    category: "SaaS Platform",
    description: "A no-code website builder that enables users to create stunning websites with drag-and-drop functionality and AI-powered design suggestions.",
    features: [
      "Drag & Drop Editor",
      "AI Design Assistant",
      "Custom Domains",
      "SEO Optimization"
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "/projects/webcraft.png"
  },
  {
    title: "Safecoast",
    category: "Security Platform",
    description: "An AI-powered coastal monitoring system that uses satellite imagery and ML models to detect and predict environmental threats.",
    features: [
      "Real-time Monitoring",
      "ML Predictions",
      "Alert System",
      "Data Visualization"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "/projects/safecoast.png"
  },
  {
    title: "Spam Detection",
    category: "ML Application",
    description: "A machine learning model that accurately detects and filters spam messages with high accuracy using NLP techniques.",
    features: [
      "NLP Processing",
      "Real-time Detection",
      "API Integration",
      "Custom Training"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "NLTK", "Matplotlib"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "/projects/spam.png"
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

  const displayedProjects = showMore ? [...projects, ...hiddenProjects] : projects

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
        <div className="space-y-16">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#141414] border border-[#262626]">
                    {/* Placeholder gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]" />
                    {/* Browser mockup */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a1a] border-b border-[#262626] flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                      <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                      <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                    </div>
                    {/* Project preview placeholder */}
                    <div className="absolute inset-8 top-12 bg-[#0f0f0f] rounded-lg flex items-center justify-center">
                      <span className="text-[#262626] text-6xl font-bold">{project.title.charAt(0)}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-4 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <Diamond className="w-4 h-4 text-[#f43f5e]" />
                    <span className="text-[#f43f5e] text-sm font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-[#737373] leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-[#a3a3a3] text-sm">
                        <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 text-xs bg-[#1a1a1a] text-[#a3a3a3] rounded-full border border-[#262626]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      asChild 
                      className="bg-[#f43f5e] hover:bg-[#e11d48] text-white rounded-lg"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="bg-[#1a1a1a] hover:bg-[#262626] border-[#262626] text-white rounded-lg"
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
          className="text-center mt-16"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="group flex flex-col items-center gap-2 mx-auto"
          >
            <span className="text-[#f43f5e] text-sm uppercase tracking-wider">
              {showMore ? "Show Less" : `Explore ${hiddenProjects.length} More Projects`}
            </span>
            <ChevronDown className={`w-6 h-6 text-[#f43f5e] transition-transform ${showMore ? "rotate-180" : "animate-bounce"}`} />
            <span className="text-[#525252] text-xs">Click to reveal more innovative projects</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
