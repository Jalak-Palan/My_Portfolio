"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Code2, Briefcase, Mail, ChevronDown, Search, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CommandPalette } from "./command-palette"
import { ThemeSwitcher } from "./theme-switcher"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["800"], style: ["italic"] })

const navLinks = [
  { name: "Home", href: "#home", icon: Home, iconColor: "text-purple-500" },
  { name: "About", href: "#about", icon: User, hasDropdown: true, iconColor: "text-blue-500" },
  { name: "Skills", href: "#skills", icon: Code2, iconColor: "text-pink-500" },
  { name: "Work", href: "#projects", icon: Briefcase, iconColor: "text-orange-500" },
  { name: "Certificates", href: "#certificates", icon: Award, iconColor: "text-amber-500" },
  { name: "Contact", href: "#contact", icon: Mail, iconColor: "text-green-500" },
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
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeSection !== section) {
              setActiveSection(section)
              // Update URL without hash, using replaceState to avoid cluttering history
              const path = section === "home" ? "/" : `/${section}`
              window.history.replaceState(null, "", path)
            }
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Global Hashtag Interceptor to remove all '#' from routes
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")
      
      if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.origin === window.location.origin) {
        // Find the target element
        const targetId = anchor.hash.slice(1)
        const targetElement = document.getElementById(targetId)
        
        if (targetElement) {
          e.preventDefault()
          targetElement.scrollIntoView({ behavior: "smooth" })
          
          // Update to clean path
          const path = targetId === "home" ? "/" : `/${targetId}`
          window.history.pushState(null, "", path)

          // Ensure the mobile menu closes if a link was clicked inside it
          setIsMobileMenuOpen(false)
        }
      }
    }

    window.addEventListener("click", handleGlobalClick)
    return () => window.removeEventListener("click", handleGlobalClick)
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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      // Update to clean path
      const targetId = href.replace("#", "")
      const path = targetId === "home" ? "/" : `/${targetId}`
      window.history.pushState(null, "", path)
    }
    setIsMobileMenuOpen(false)
  }

  // Handle initial scroll based on path if refreshing a clean URL
  useEffect(() => {
    const path = window.location.pathname.replace("/", "")
    if (path && path !== "") {
      // Small timeout to ensure components are rendered
      const timer = setTimeout(() => {
        const target = document.getElementById(path)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
      return () => clearTimeout(timer)
    }
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
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              window.history.pushState(null, "", "/");
            }}
            className="relative z-10 flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden p-0.5">
              <img 
                src="/jp-logo.png" 
                alt="JP Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.a>

          {/* Desktop Navigation - Centered pill */}
          <div className="hidden md:flex items-center">
            <div className="p-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <div className="flex items-center gap-1 bg-[#1a1a1a]/95 backdrop-blur-xl rounded-full px-2 py-2">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = activeSection === link.href.replace("#", "")
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        isActive 
                          ? "bg-[#262626] text-white shadow-inner" 
                          : "text-[#a3a3a3] hover:text-white hover:bg-[#262626]/50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-white" : link.iconColor}`} />
                      <span className="text-sm font-medium">{link.name}</span>
                      {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right side - Get in Touch button */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitcher />
            <Button
              asChild
              className="bg-[#262626] hover:bg-[#333333] text-white rounded-full px-6 cursor-pointer"
            >
              <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')); }} className="flex items-center gap-2">
                Get in Touch
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeSwitcher />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
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
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="flex items-center gap-3 text-[#a3a3a3] hover:text-white transition-colors py-3 px-4 rounded-xl hover:bg-[#1a1a1a]"
                    >
                      <Icon className="w-5 h-5" />
                      {link.name}
                    </a>
                  )
                })}
                <Button asChild className="w-full bg-[#262626] hover:bg-[#333333] mt-4 rounded-full cursor-pointer">
                  <a onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact-modal')); setIsMobileMenuOpen(false); }}>Get in Touch</a>
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



      <CommandPalette open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </>
  )
}
