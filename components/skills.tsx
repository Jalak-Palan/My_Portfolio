"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Code2, Palette, MessageSquare, ChevronDown, ChevronUp, Check, Clock, Target } from "lucide-react"
import { ShapeBlur } from "./ui/shape-blur"

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    description: "Building robust, scalable web applications from database design to deployment",
    techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    highlights: [
      "Custom web application development",
      "API design and integration",
      "Real-time features with WebSockets",
      "Database optimization & query performance"
    ],
    stats: { years: "3+", projects: "6+" }
  },
  {
    icon: Palette,
    title: "Modern Frontend Engineering",
    description: "Crafting pixel-perfect, responsive interfaces that engage and convert",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    highlights: [
      "Component-driven architecture",
      "Performance-optimized SPAs",
      "Accessibility-first development",
      "Interactive animations & micro-interactions"
    ],
    stats: { years: "3+", projects: "6+" }
  },
  {
    icon: MessageSquare,
    title: "AI Integration & Automation",
    description: "Implementing intelligent solutions that automate and enhance user experiences",
    techStack: ["Python", "OpenAI", "LangChain", "RAG"],
    highlights: [
      "Custom AI chatbots & assistants",
      "NLP and text processing pipelines",
      "Workflow automation systems",
      "AI-powered analytics dashboards"
    ],
    stats: { years: "2+", projects: "4+" }
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Interactive Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <ShapeBlur 
          variation={0}
          shapeSize={1.5}
          roundness={0.5}
          borderSize={0.04}
          circleSize={0.3}
          circleEdge={0.5}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#f43f5e] text-sm uppercase tracking-wider mb-2 block">What I Do</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            My Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group"
            >
              <div 
                className={`bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedCard === i ? "ring-1 ring-[#f43f5e]/30" : "hover:border-[#333333]"
                }`}
              >
                {/* Main content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4 border border-[#262626]">
                    <service.icon className="w-6 h-6 text-[#f43f5e]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[#737373] text-sm mb-4">{service.description}</p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 text-xs bg-[#1a1a1a] text-[#a3a3a3] rounded-md border border-[#262626]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand button */}
                  <button
                    onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                    className="flex items-center gap-2 text-[#f43f5e] text-sm font-medium hover:text-[#fb7185] transition-colors"
                  >
                    {expandedCard === i ? (
                      <>
                        Show Less <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Expanded content */}
                {expandedCard === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-[#262626] p-6 bg-[#0f0f0f]"
                  >
                    <h4 className="text-white text-sm font-medium mb-3">Key Highlights</h4>
                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                          <Check className="w-4 h-4 text-[#22c55e] mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4 pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#3b82f6]" />
                        <span className="text-white text-sm">{service.stats.years} Years</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-[#22c55e]" />
                        <span className="text-white text-sm">{service.stats.projects} Projects</span>
                      </div>
                    </div>

                    <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-[#a3a3a3] text-sm hover:text-white hover:border-[#333333] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      {"Let's discuss your project"}
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
