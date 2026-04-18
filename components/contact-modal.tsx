"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter, Send } from "lucide-react"

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  // Global event listener to toggle modal anywhere in the app
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    window.addEventListener("open-contact-modal", handleOpen)
    window.addEventListener("close-contact-modal", handleClose)
    return () => {
      window.removeEventListener("open-contact-modal", handleOpen)
      window.removeEventListener("close-contact-modal", handleClose)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://formsubmit.co/ajax/jalak.a.palan@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      })

      if (response.ok) {
        setStatus("success")
        setTimeout(() => {
          setIsOpen(false)
          setStatus("idle")
          setFormData({ name: "", email: "", subject: "", message: "" })
        }, 3000)
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  /* 
    IMPORTANT: We assign pointer-events-none conditionally to prevent interaction while loading/success 
  */
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-[#141414] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background glowing meshes */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button Mobile - Top Right */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] flex md:hidden items-center justify-center text-[#a3a3a3] z-20 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Box - Info */}
            <div className="w-full md:w-[45%] p-8 lg:p-12 border-b md:border-b-0 md:border-r border-[#262626] relative z-10 bg-[#141414]/50">
              <h2 className="text-3xl font-bold text-white mb-3">Let's Connect</h2>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>

              <div className="space-y-4">
                <a href="mailto:jalak.a.palan@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-[#262626] hover:border-[#444] transition-colors relative overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#666] font-bold block mb-0.5">Email</span>
                    <span className="text-sm font-medium text-[#d4d4d4] group-hover:text-white transition-colors">jalak.a.palan@gmail.com</span>
                  </div>
                  <div className="ml-auto text-[#444] group-hover:text-[#a3a3a3]">↗</div>
                </a>

                <a href="tel:+919274325274" className="group flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-[#262626] hover:border-[#444] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#666] font-bold block mb-0.5">Phone</span>
                    <span className="text-sm font-medium text-[#d4d4d4] group-hover:text-white transition-colors">+91 9274325274</span>
                  </div>
                  <div className="ml-auto text-[#444] group-hover:text-[#a3a3a3]">↗</div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-[#262626]">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#666] font-bold block mb-0.5">Location</span>
                    <span className="text-sm font-medium text-[#d4d4d4]">Gandhinagar / Rajkot, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1a1a1a] border border-[#262626]">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#666] font-bold block mb-0.5">Response Time</span>
                    <span className="text-sm font-medium text-[#d4d4d4]">Within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <span className="text-[10px] uppercase tracking-widest text-[#666] font-bold block mb-4">Follow Me</span>
                <div className="flex gap-3">
                  <a href="https://github.com/Jalak-Palan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#888] hover:text-white hover:border-[#444] transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/jalak-palan-726597367/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#888] hover:text-[#0a66c2] hover:border-[#0a66c2]/50 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/Jalak_Palan" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#888] hover:text-[#1d9bf0] hover:border-[#1d9bf0]/50 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Box - Form */}
            <div className="w-full md:w-[55%] p-8 lg:p-12 relative z-10 flex flex-col pt-[4.5rem] md:pt-12">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] hidden md:flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[#262626] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>
                <p className="text-[#a3a3a3] text-sm">
                  Fill out the form and I'll get back to you as soon as possible.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#a3a3a3] text-sm max-w-xs mx-auto">
                    Thanks for reaching out. I've received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                  {status === "error" && (
                     <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                       Something went wrong sending your message. Please email me directly instead.
                     </div>
                  )}

                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={status === "loading"}
                        className="w-full bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#444] transition-colors disabled:opacity-50"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        disabled={status === "loading"}
                        className="w-full bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#444] transition-colors disabled:opacity-50"
                      />
                    </div>
                    
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      disabled={status === "loading"}
                      className="w-full bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#444] transition-colors disabled:opacity-50"
                    />

                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      disabled={status === "loading"}
                      className="w-full bg-[#1a1a1a] border border-[#262626] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-[#666] focus:outline-none focus:border-[#444] transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-6 w-full py-4 rounded-xl font-bold text-white shadow-lg bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:ring-offset-[#141414] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
