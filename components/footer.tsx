"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const socialLinks = [
  { name: "GitHub", href: "https://github.com/rameshwarbhagwat", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/rameshwarbhagwat", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/rameshwarbhagwat", icon: Twitter },
]

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            © 2026 • Built with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            {" "}passion
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
