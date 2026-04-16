"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Github, Eye } from "lucide-react"

const techTags = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker", "AI/ML"
]

const stats = [
  { value: "50+", label: "Projects Built" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Turning Ideas Into{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Reality
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-6">
                {/* Profile header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent p-0.5">
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          RB
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Rameshwar Bhagwat</h3>
                    <p className="text-accent">Full Stack & AI Developer</p>
                    <div className="flex items-center gap-1 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">India</span>
                    </div>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {techTags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-3 py-1 text-sm bg-secondary/50 text-muted-foreground rounded-full border border-border"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="text-center p-3 bg-secondary/30 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-secondary/30 rounded-lg border border-border">
                    <Eye className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">1,234 visitors</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-secondary/30 rounded-lg border border-border">
                    <Github className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground">@rameshwarbhagwat</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {"I'm"} a passionate Full Stack Developer with expertise in building scalable web applications 
              and integrating cutting-edge AI technologies. My journey in tech started with a curiosity 
              for how things work on the web, and {"it's"} evolved into a deep love for creating meaningful 
              digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With experience across the entire development stack, from crafting pixel-perfect frontends 
              with React and Next.js to architecting robust backends with Node.js and Python, I bring 
              ideas to life with clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, {"I'm"} focused on building AI-powered SaaS platforms that help businesses 
              automate their workflows and make data-driven decisions. When {"I'm"} not coding, 
              {"you'll"} find me exploring new technologies, contributing to open source, or sharing 
              my knowledge with the developer community.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-foreground">Available for freelance projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
