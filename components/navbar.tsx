"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code2, Briefcase, Mail, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CommandPalette } from "./command-palette"

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User, hasDropdown: true },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Work", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detect active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsCommandOpen(true)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            <svg viewBox="0 0 50 50" className="w-12 h-12" fill="none">
              <text x="5" y="38" className="text-3xl font-bold italic fill-white" style={{ fontFamily: 'serif' }}>
                RB
              </text>
            </svg>
          </motion.a>

          {/* Desktop Navigation - Centered pill */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-full px-2 py-2 border border-[#262626]">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      isActive 
                        ? "bg-[#262626] text-white" 
                        : "text-[#a3a3a3] hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{link.name}</span>
                    {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right side - Get in Touch button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className="bg-[#262626] hover:bg-[#333333] text-white rounded-full px-6"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get in Touch
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 text-[#a3a3a3] hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-[#1a1a1a]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      {link.name}
                    </a>
                  )
                })}
                <Button asChild className="w-full bg-[#262626] hover:bg-[#333333] mt-4 rounded-full">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search button - Fixed bottom left */}
      <button
        onClick={() => setIsCommandOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#262626] rounded-full px-4 py-2 text-[#a3a3a3] hover:text-white transition-colors"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search</span>
        <span className="flex items-center gap-1 text-xs bg-[#262626] px-2 py-0.5 rounded">
          <span>Ctrl</span>
          <span>K</span>
        </span>
      </button>

      {/* Chat button - Fixed bottom right */}
      <button className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#1a1a1a]/80 backdrop-blur-xl border border-[#262626] rounded-full flex items-center justify-center text-[#a3a3a3] hover:text-white transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <CommandPalette open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </>
  )
}
