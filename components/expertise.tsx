"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, BrainCircuit, Sparkles, Cloud, Code, Briefcase, Star, MessageSquare, Check, ArrowRight, ChevronRight, Clock, Box } from "lucide-react"

const expertiseData = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "End-to-End Solutions",
    icon: Layers,
    description: "Building complete web applications from database architecture to pixel-perfect user interfaces. I specialize in creating scalable, maintainable codebases that power modern digital experiences.",
    color: "from-orange-500 to-amber-500",
    bgLight: "bg-orange-500/10",
    textColor: "text-orange-500",
    stats: { projects: "6+", years: "3 Years" },
    techStack: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Node.js", icon: "📦" },
      { name: "TypeScript", icon: "📘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" }
    ],
    highlights: [
      "Scalable architecture design with microservices",
      "Server-side rendering & static generation",
      "Real-time features with WebSockets",
      "Database optimization & query performance"
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    subtitle: "Intelligent Solutions",
    icon: BrainCircuit,
    description: "Integrating advanced artificial intelligence models into web applications. From intelligent chatbots to complex data analysis, I bring machine learning capabilities to your digital products.",
    color: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-500/10",
    textColor: "text-blue-500",
    stats: { projects: "4+", years: "2 Years" },
    techStack: [
      { name: "Python", icon: "🐍" },
      { name: "OpenAI API", icon: "🤖" },
      { name: "LangChain", icon: "🔗" },
      { name: "TensorFlow", icon: "🧠" }
    ],
    highlights: [
      "Custom AI chatbots & assistants",
      "NLP and text processing pipelines",
      "Workflow automation systems",
      "AI-powered analytics dashboards"
    ]
  },
  {
    id: "creative-development",
    title: "Creative Development",
    subtitle: "Visual Excellence",
    icon: Sparkles,
    description: "Crafting immersive, interactive web experiences with advanced animations, WebGL, and stunning visual effects that captivate users and elevate brand identity.",
    color: "from-pink-500 to-rose-500",
    bgLight: "bg-pink-500/10",
    textColor: "text-pink-500",
    stats: { projects: "8+", years: "3 Years" },
    techStack: [
      { name: "Framer Motion", icon: "✨" },
      { name: "Three.js", icon: "🧊" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "GSAP", icon: "🚀" }
    ],
    highlights: [
      "High-performance fluid animations",
      "3D elements and WebGL integration",
      "Pixel-perfect responsive design",
      "Interactive scroll experiences"
    ]
  },
  {
    id: "saas-platforms",
    title: "SaaS Platforms",
    subtitle: "Scalable Products",
    icon: Cloud,
    description: "Architecting and developing robust Software as a Service (SaaS) platforms with multi-tenancy, subscription management, and complex user dashboards.",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-500/10",
    textColor: "text-emerald-500",
    stats: { projects: "3+", years: "2 Years" },
    techStack: [
      { name: "Next.js", icon: "▲" },
      { name: "Stripe", icon: "💳" },
      { name: "Supabase", icon: "⚡" },
      { name: "Prisma", icon: "🗄️" }
    ],
    highlights: [
      "Multi-tenant architecture",
      "Subscription & billing integration",
      "Role-based access control (RBAC)",
      "Analytics & reporting dashboards"
    ]
  },
  {
    id: "api-development",
    title: "API Development",
    subtitle: "Backend Architecture",
    icon: Code,
    description: "Designing and implementing secure, lightning-fast RESTful and GraphQL APIs that serve as the reliable backbone for scale-ready web and mobile applications.",
    color: "from-purple-500 to-violet-500",
    bgLight: "bg-purple-500/10",
    textColor: "text-purple-500",
    stats: { projects: "10+", years: "4 Years" },
    techStack: [
      { name: "Express.js", icon: "🚂" },
      { name: "GraphQL", icon: "🕸️" },
      { name: "Redis", icon: "🔴" },
      { name: "Docker", icon: "🐳" }
    ],
    highlights: [
      "RESTful & GraphQL API design",
      "Authentication & authorization (JWT/OAuth)",
      "Rate limiting & security hardening",
      "Microservices architecture"
    ]
  }
]

export function Expertise() {
  const [activeTab, setActiveTab] = useState(expertiseData[0].id)

  const activeData = expertiseData.find(d => d.id === activeTab) || expertiseData[0]

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ zoom: 0.85 } as any}>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#f43f5e] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block"
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            MY <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-teal-400">EXPERTISE</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Sidebar - Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {expertiseData.map((item, index) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    relative group flex items-center justify-between p-4 rounded-xl transition-all duration-300 text-left
                    ${isActive
                      ? "bg-[#111625] border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                      : "bg-[#111111] border border-white/5 hover:bg-[#161616] hover:border-white/10"
                    }
                  `}
                >
                  {/* Left accent line for active state */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${item.color} rounded-r-full`}
                    />
                  )}

                  <div className="flex items-center gap-4 relative z-10 pl-2">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center border transition-colors duration-300
                      ${isActive ? item.bgLight + " border-" + item.textColor.split('-')[1] + "-500/30" : "bg-white/5 border-white/10 group-hover:bg-white/10"}
                    `}>
                      <Icon className={`w-5 h-5 ${isActive ? item.textColor : "text-zinc-400"}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm sm:text-base ${isActive ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs ${isActive ? "text-zinc-400" : "text-zinc-500"}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? item.textColor + " translate-x-1" : "text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1"}`} />
                </motion.button>
              )
            })}

            {/* Summary Stats at bottom of sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-3 mt-1"
            >
              <div className="flex-1 flex items-center justify-center gap-2.5 p-4 bg-[#111111] hover:bg-[#161616] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300 text-sm sm:text-base font-bold text-white">
                <Clock className="w-5 h-5 text-blue-500" /> 3+ Years
              </div>
              <div className="flex-1 flex items-center justify-center gap-2.5 p-4 bg-[#111111] hover:bg-[#161616] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300 text-sm sm:text-base font-bold text-white">
                <Box className="w-5 h-5 text-emerald-500" /> 6+ Projects
              </div>
            </motion.div>
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 xl:p-10 h-full flex flex-col relative overflow-hidden"
              >
                {/* Subtle background glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${activeData.color} rounded-full blur-[100px] opacity-10 pointer-events-none`} />

                {/* Header of Content Area */}
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-sm relative overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} opacity-20`} />
                      <activeData.icon className={`w-7 h-7 ${activeData.textColor} relative z-10`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{activeData.title}</h3>
                      <p className={`font-medium ${activeData.textColor}`}>{activeData.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs font-medium text-zinc-300">
                      <Briefcase className="w-3.5 h-3.5 text-blue-400" /> {activeData.stats.projects}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
                  {activeData.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold text-zinc-500 tracking-wider uppercase mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeData.techStack.map((tech, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/5 hover:border-white/10 transition-colors rounded-lg text-sm text-zinc-300"
                      >
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-white/5 mb-8" />

                {/* Key Highlights */}
                <div className="mb-10">
                  <h4 className="text-xs font-bold text-zinc-500 tracking-wider uppercase mb-4">Key Highlights</h4>
                  <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                    {activeData.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                        </div>
                        <span className="text-sm text-zinc-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="bg-black/30 border border-white/5 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-sm">Interested in this service?</h5>
                        <p className="text-xs text-zinc-400">Let's discuss your project</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')); }}
                      className="w-full sm:w-auto px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
