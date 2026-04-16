"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    number: "01",
    title: "WebCraft",
    category: "SaaS Platform",
    description: "A no-code website builder that enables users to create stunning websites with drag-and-drop functionality and AI-powered design suggestions.",
    features: ["Drag & Drop Editor", "AI Design Assistant", "Custom Domains", "SEO Optimization"],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-violet-600 to-indigo-600"
  },
  {
    number: "02",
    title: "Safecoast",
    category: "Security Platform",
    description: "An AI-powered coastal monitoring system that uses satellite imagery and ML models to detect and predict environmental threats.",
    features: ["Real-time Monitoring", "ML Predictions", "Alert System", "Data Visualization"],
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "AWS"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-cyan-600 to-blue-600"
  },
  {
    number: "03",
    title: "Spam Detection",
    category: "ML Application",
    description: "A machine learning model that accurately detects and filters spam messages with 99% accuracy using NLP techniques.",
    features: ["NLP Processing", "Real-time Detection", "API Integration", "Custom Training"],
    techStack: ["Python", "scikit-learn", "Flask", "Docker", "Redis"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-orange-600 to-red-600"
  },
  {
    number: "04",
    title: "Moungiri Store",
    category: "E-commerce",
    description: "A modern e-commerce platform with seamless payment integration, inventory management, and analytics dashboard.",
    features: ["Payment Gateway", "Inventory System", "Order Tracking", "Admin Dashboard"],
    techStack: ["Next.js", "Stripe", "MongoDB", "Tailwind", "Vercel"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-emerald-600 to-teal-600"
  },
  {
    number: "05",
    title: "Devory",
    category: "AI Assistant",
    description: "An AI-powered development assistant that helps developers write, review, and debug code with intelligent suggestions.",
    features: ["Code Generation", "Bug Detection", "Code Review", "Documentation"],
    techStack: ["OpenAI", "LangChain", "Next.js", "Python", "PostgreSQL"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-purple-600 to-pink-600"
  },
]

const hiddenProjects = [
  {
    number: "06",
    title: "TaskFlow",
    category: "Productivity",
    description: "A collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    features: ["Real-time Sync", "Kanban Boards", "Team Chat", "Analytics"],
    techStack: ["React", "Socket.io", "Node.js", "MongoDB", "Docker"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-amber-600 to-yellow-600"
  },
  {
    number: "07",
    title: "HealthTrack",
    category: "Healthcare",
    description: "A comprehensive health monitoring application with wearable integration and AI-powered health insights.",
    features: ["Wearable Sync", "Health Insights", "Appointment Booking", "Prescription Management"],
    techStack: ["React Native", "Node.js", "PostgreSQL", "TensorFlow", "AWS"],
    liveUrl: "#",
    sourceUrl: "#",
    image: "from-rose-600 to-red-600"
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showMore, setShowMore] = useState(false)

  const displayedProjects = showMore ? [...projects, ...hiddenProjects] : projects

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-8 mb-12 text-muted-foreground"
        >
          <span>5 Projects</span>
          <span className="text-primary">|</span>
          <span>15+ Technologies</span>
          <span className="text-primary">|</span>
          <span>4 Industries</span>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-8">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/50 transition-all">
                {/* Image placeholder */}
                <div className={`relative aspect-video rounded-xl bg-gradient-to-br ${project.image} overflow-hidden order-1 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white/20">{project.number}</span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <Button asChild size="sm" className="bg-white text-black hover:bg-white/90">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center order-2 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm text-muted-foreground font-mono">{project.number}/05</span>
                    <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full">
                        {tech}
                      </span>
                    ))}
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
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowMore(!showMore)}
            className="border-border hover:border-primary/50"
          >
            {showMore ? "Show Less" : "Explore 2 More Projects"}
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showMore ? "rotate-180" : ""}`} />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
