"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Brain, Palette, Rocket, Server, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    subtitle: "End-to-End Solutions",
    years: "5+",
    projects: "30+",
    description: "Building complete web applications from frontend to backend, ensuring seamless integration and optimal performance across all layers.",
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
    highlights: ["Scalable Architecture", "RESTful APIs", "Real-time Features", "Cloud Deployment"]
  },
  {
    icon: Brain,
    title: "AI Integration",
    subtitle: "Intelligent Systems",
    years: "3+",
    projects: "15+",
    description: "Integrating AI and machine learning capabilities into applications, from chatbots to predictive analytics and automation.",
    techStack: ["Python", "TensorFlow", "OpenAI", "LangChain", "RAG"],
    highlights: ["LLM Integration", "NLP Solutions", "Predictive Models", "AI Automation"]
  },
  {
    icon: Palette,
    title: "Creative Development",
    subtitle: "Stunning Interfaces",
    years: "5+",
    projects: "40+",
    description: "Crafting beautiful, responsive, and interactive user interfaces with attention to detail and user experience.",
    techStack: ["Tailwind CSS", "Framer Motion", "Three.js", "GSAP", "Figma"],
    highlights: ["Animations", "3D Graphics", "Responsive Design", "Accessibility"]
  },
  {
    icon: Rocket,
    title: "SaaS Platforms",
    subtitle: "Product Building",
    years: "3+",
    projects: "10+",
    description: "Developing scalable SaaS products with subscription management, multi-tenancy, and enterprise-grade features.",
    techStack: ["Stripe", "Auth.js", "Prisma", "Redis", "Docker"],
    highlights: ["Payment Integration", "User Management", "Analytics", "Multi-tenant"]
  },
  {
    icon: Server,
    title: "API Development",
    subtitle: "Backend Systems",
    years: "5+",
    projects: "25+",
    description: "Designing and building robust APIs that power applications with security, documentation, and performance in mind.",
    techStack: ["Express", "FastAPI", "GraphQL", "REST", "WebSockets"],
    highlights: ["API Design", "Authentication", "Rate Limiting", "Documentation"]
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized skills and services I bring to every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative"
            >
              {/* Card */}
              <div 
                className={`relative bg-card/50 backdrop-blur-xl border border-border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  expandedCard === i 
                    ? "ring-2 ring-primary shadow-lg shadow-primary/20" 
                    : "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                }`}
                onClick={() => setExpandedCard(expandedCard === i ? null : i)}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs text-accent font-medium px-2 py-1 bg-accent/10 rounded-full">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{service.years} years</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>{service.projects} projects</span>
                  </div>

                  {/* Expand indicator */}
                  <div className="flex items-center text-primary text-sm">
                    <span>Learn more</span>
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${expandedCard === i ? "rotate-90" : ""}`} />
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedCard === i && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 z-50 bg-card border border-border rounded-2xl p-6 shadow-2xl"
                >
                  <button 
                    onClick={(e) => { e.stopPropagation(); setExpandedCard(null); }}
                    className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
