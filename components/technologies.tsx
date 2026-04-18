"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  Database, 
  Server, 
  Box, 
  GitBranch, 
  Github, 
  Cpu, 
  Globe, 
  Layers, 
  Zap, 
  Code2, 
  Cloud, 
  Terminal,
  FileCode2,
  Lock,
  Workflow,
  Sparkles,
  Search,
  MessageSquare
} from "lucide-react"

const technologies = [
  { name: "ReactJS", icon: <Layers className="w-4 h-4 text-[#61DAFB]" /> },
  { name: "NextJS", icon: <Zap className="w-4 h-4 text-white" /> },
  { name: "TypeScript", icon: <FileCode2 className="w-4 h-4 text-[#3178C6]" /> },
  { name: "Tailwind CSS", icon: <Globe className="w-4 h-4 text-[#06B6D4]" /> },
  { name: "Motion", icon: <Sparkles className="w-4 h-4 text-[#FF0055]" /> },
  { name: "Sanity", icon: <Search className="w-4 h-4 text-[#F03E2F]" /> },
  { name: "Contentful", icon: <Database className="w-4 h-4 text-[#2478CC]" /> },
  { name: "NodeJS", icon: <Server className="w-4 h-4 text-[#339933]" /> },
  { name: "ExpressJS", icon: <Terminal className="w-4 h-4 text-white" /> },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4 text-[#4169E1]" /> },
  { name: "MongoDB", icon: <Database className="w-4 h-4 text-[#47A248]" /> },
  { name: "Prisma", icon: <Layers className="w-4 h-4 text-[#2D3748]" /> },
  { name: "Zustand", icon: <Layers className="w-4 h-4 text-[#443E38]" /> },
  { name: "Zod", icon: <Lock className="w-4 h-4 text-[#3068B7]" /> },
  { name: "pnpm", icon: <Box className="w-4 h-4 text-[#F69220]" /> },
  { name: "Bun", icon: <Zap className="w-4 h-4 text-[#fbf0df]" /> },
  { name: "Git", icon: <GitBranch className="w-4 h-4 text-[#F05032]" /> },
  { name: "GitHub", icon: <Github className="w-4 h-4 text-white" /> },
  { name: "Vercel", icon: <Globe className="w-4 h-4 text-white" /> },
  { name: "AWS", icon: <Cloud className="w-4 h-4 text-[#FF9900]" /> },
  { name: "Docker", icon: <Box className="w-4 h-4 text-[#2496ED]" /> },
  { name: "Expo", icon: <Layers className="w-4 h-4 text-white" /> },
  { name: "Clerk", icon: <Lock className="w-4 h-4 text-[#6C47FF]" /> },
  { name: "Linux", icon: <Terminal className="w-4 h-4 text-white" /> },
]

export function Technologies() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Heading Section */}
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-sm font-bold tracking-[0.4em] uppercase mb-4 block"
          >
            My Skillset
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight"
          >
            The Magic <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Behind</span>
          </motion.h2>
        </div>

        {/* Tech Pills Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-[#121212] hover:bg-[#181818] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300 text-sm font-medium text-zinc-300 group shadow-lg"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                {tech.icon}
              </span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Decorative side lines */}
      <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-4 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
