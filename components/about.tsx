"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Mail, Linkedin, Github, Twitter, Copy, Check, CheckCircle2, BookOpen, TrendingUp, Youtube, Code2 } from "lucide-react"

const techTags = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "AI/ML", icon: "🤖" },
  { name: "System Design", icon: "⚙️" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("jalak.a.palan@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#a3a3a3] text-sm uppercase tracking-widest block mb-4">
            GET TO KNOW ME
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            TURNING IDEAS INTO <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">REALITY</span>
          </h2>
          <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Developer by day, problem solver by nature. Let's build<br />something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-[#111111] rounded-3xl p-8 border border-[#222222] h-full flex flex-col items-center">
              
              {/* Profile Image with Ring */}
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-500 mb-6">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#111111]">
                  <img 
                    src="https://avatars.githubusercontent.com/u/225344229?v=4" 
                    alt="Jalak Palan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Status Dot */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#10b981] rounded-full border-4 border-[#111111]" />
              </div>

              {/* Basic Info */}
              <h3 className="text-2xl font-bold text-white mb-3">Jalak Palan</h3>
              <div className="px-4 py-1.5 bg-[#1a1a1a] border border-[#333] rounded-full flex items-center gap-2 mb-4">
                <span className="text-xs text-[#a3a3a3]">✨ Full Stack & AI Developer</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-[#666] text-sm mb-6">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Gandhinagar (Academic)
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> Rajkot (Home)
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mb-10 w-full justify-center flex-wrap px-2">
                <a href="mailto:jalak.a.palan@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[#262626] transition-all">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/jalak-palan-726597367/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-[#0077b5] hover:bg-[#262626] transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://github.com/Jalak-Palan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[#262626] transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href="https://x.com/Jalak_Palan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-[#1da1f2] hover:bg-[#262626] transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@JALAKPALAN-q8i" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-[#ff0000] hover:bg-[#262626] transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
                <a title="LeetCode" href="https://leetcode.com/u/m1Xyd1Iqw0/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-[#f89f1b] hover:bg-[#262626] transition-all">
                  <Code2 className="w-4 h-4" />
                </a>
              </div>

              {/* Core Expertise Tags */}
              <div className="w-full">
                <h4 className="text-[#666] text-xs font-bold uppercase tracking-widest text-center mb-6">Core Expertise</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {techTags.map((tag, i) => (
                    <motion.span
                      key={tag.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="px-3 py-1.5 text-xs bg-[#1a1a1a] text-[#a3a3a3] rounded-full border border-[#262626] flex items-center gap-2"
                    >
                      <span className="text-[10px]">{tag.icon}</span>
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right - Info Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Top Row: 3 Rings */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Ring 1 - Projects */}
              <div className="bg-[#111111] rounded-3xl p-6 border border-[#222222] flex flex-col items-center justify-center gap-2">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#1f1f1f" strokeWidth="6" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#f97316" strokeWidth="6" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 * 0.25} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#f97316] mb-0.5" />
                    <span className="text-white text-xl font-bold">5+</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-red-500 mt-2">Projects Built</span>
              </div>

              {/* Ring 2 - Education (requested to replace Experience) */}
              <div className="bg-[#111111] rounded-3xl p-6 border border-[#222222] flex flex-col items-center justify-center gap-2">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#1f1f1f" strokeWidth="6" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#3b82f6" strokeWidth="6" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 * 0.25} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <BookOpen className="w-4 h-4 text-[#3b82f6] mb-0.5" />
                    <span className="text-white text-xl font-bold">B.E</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-orange-500 mt-2">Education</span>
              </div>

              {/* Ring 3 - Technologies */}
              <div className="bg-[#111111] rounded-3xl p-6 border border-[#222222] flex flex-col items-center justify-center gap-2">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#1f1f1f" strokeWidth="6" fill="none" />
                    <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="6" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 * 0.25} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-[#10b981] mb-0.5" />
                    <span className="text-white text-xl font-bold">20+</span>
                  </div>
                </div>
                <span className="text-sm font-medium text-red-500 mt-2">Technologies</span>
              </div>

            </div>

            {/* Middle Row: Description block from image */}
            <div className="bg-[#111111] rounded-3xl p-8 border border-[#222222] relative overflow-hidden flex flex-col justify-center min-h-[140px]">
              <div className="absolute left-0 top-8 bottom-8 w-[6px] bg-gradient-to-b from-orange-500 via-pink-500 to-purple-500 rounded-r-md" />
              <div className="pl-6 space-y-3">
                <h3 className="text-white text-xl sm:text-2xl font-serif leading-snug font-medium">
                  Jalak Palan crafts high-performance web applications with clean architecture and exceptional user experiences.
                </h3>
                <p className="text-[#a3a3a3] text-sm sm:text-base leading-relaxed">
                  Specializing in scalable AI-powered applications that blend cutting-edge technology with intuitive design.
                </p>
              </div>
            </div>

            {/* Bottom Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              
              {/* Visitors Card */}
              <div className="bg-[#111111] rounded-3xl p-8 border border-[#222222] flex flex-col items-center justify-center relative overflow-hidden group min-h-[160px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <span className="text-4xl sm:text-5xl font-bold text-red-500 z-10 mb-2 relative">613+</span>
                <span className="text-white font-bold text-lg z-10 relative">Portfolio Visitors</span>
                <span className="text-[#666] text-xs z-10 mt-1 relative text-center">Thank you for being part of my journey</span>
              </div>

              {/* Call to action Card */}
              <div className="bg-[#111111] rounded-3xl px-8 py-6 border border-[#222222] relative flex flex-col items-center justify-center min-h-[160px]">
                {/* macOS dots */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                
                <div className="text-red-500 font-bold text-3xl italic mb-3 mt-4 select-none">JP</div>
                <h4 className="text-white font-bold text-base mb-1">Let's innovate together</h4>
                <p className="text-[#666] text-xs mb-5">Ready to bring your vision to life?</p>
                
                <button 
                  onClick={copyEmail} 
                  className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#262626] transition-colors border border-[#333] rounded-full text-[#a3a3a3] text-xs w-full max-w-[240px] justify-between"
                >
                  jalak.a.palan@gmail.com 
                  {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
