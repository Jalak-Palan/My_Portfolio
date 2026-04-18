"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, User, MessageSquare } from "lucide-react"

type Message = {
  id: string
  text: string | React.ReactNode
  sender: "bot" | "user"
}

const mockResponses: Record<string, React.ReactNode> = {
  "skills": (
    <div className="space-y-3">
      <p className="font-bold border-b border-white/10 pb-2 mb-2 text-[#c68a53]">Jalak's Core Competencies:</p>
      <div className="grid grid-cols-1 gap-2 text-xs">
        <div className="bg-[#1a1a1a] p-2 rounded-lg border border-[#333]">
          <span className="block font-bold text-white mb-1">Frontend</span>
          <p className="text-[#a3a3a3]">React, Next.js, TypeScript, Tailwind, Framer Motion</p>
        </div>
        <div className="bg-[#1a1a1a] p-2 rounded-lg border border-[#333]">
          <span className="block font-bold text-white mb-1">Backend & DB</span>
          <p className="text-[#a3a3a3]">Node.js, Express, PostgreSQL, MongoDB, Prisma</p>
        </div>
        <div className="bg-[#1a1a1a] p-2 rounded-lg border border-[#333]">
          <span className="block font-bold text-white mb-1">Cloud & Tools</span>
          <p className="text-[#a3a3a3]">AWS, Docker, Git, Linux, Vercel</p>
        </div>
      </div>
      <button 
        onClick={() => {
          document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          // Update URL to clean path as per previous requirement
          window.history.pushState(null, "", "/skills");
        }}
        className="w-full mt-2 py-2 bg-[#c68a53] hover:bg-[#b57a42] text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2"
      >
        View Full Skills Section ↗
      </button>
    </div>
  ),
  "frontend": (
    <p>For the frontend, Jalak specializes in <strong>React, Next.js, and TypeScript</strong> to build highly scalable, interactive user interfaces. He frequently leverages <strong>Tailwind CSS</strong> for rapid styling and uses <strong>Framer Motion</strong> (just like this chat window!) to craft seamless animations.</p>
  ),
  "databases": (
    <p>Jalak relies heavily on robust relational & NoSQL solutions! He primarily builds with <strong>PostgreSQL</strong> using <strong>Prisma ORM</strong> for structured data, and <strong>MongoDB</strong> for flexible document storage depending on the ecosystem demands.</p>
  ),
  "projects": (
    <div className="space-y-2">
      <p>Here are some core projects Jalak has shipped:</p>
      <ul className="list-disc pl-4 space-y-1">
        <li><strong>AI Chat Assistants:</strong> Intelligent RAG bots.</li>
        <li><strong>Full-stack Dashboards:</strong> Rich SaaS analytics platforms.</li>
        <li><strong>Responsive Portfolios:</strong> Liquid glass architectures and dark-mode themes.</li>
      </ul>
      <p className="text-xs text-[#a3a3a3] mt-2 italic">You can scroll up to the 'Work' section for live links!</p>
    </div>
  ),
  "experience": (
    <p>Jalak has spent the last 3+ years diving deep into robust Full Stack development. Over that time, he has worked individually and integrated into dynamic teams, leading architectural decisions and deploying over 6+ significant products!</p>
  ),
  "hello": (
    <p>Hello! 👋 I'm here to answer any questions you have about Jalak and his work. How can I help?</p>
  ),
  "default": (
    <p>Hmm, I'm just a simple visual bot right now! I know mostly about Jalak's <strong>skills, frontend stack, databases, projects, and experience</strong>. Try asking me one of those!</p>
  )
}

const matchKeyword = (input: string): string => {
  const lower = input.toLowerCase()
  if (lower.includes("skill") || lower.includes("tech")) return "skills"
  if (lower.includes("front") || lower.includes("ui")) return "frontend"
  if (lower.includes("database") || lower.includes("sql") || lower.includes("mongo")) return "databases"
  if (lower.includes("project") || lower.includes("work") || lower.includes("build")) return "projects"
  if (lower.includes("experience") || lower.includes("year") || lower.includes("work")) return "experience"
  if (lower.includes("hi") || lower.includes("hey") || lower.includes("hello")) return "hello"
  return "default"
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hey there! 👋 I'm Jalak's AI assistant. I can tell you all about his skills, projects, experience, and more. What would you like to know?"
    }
  ])

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (isOpen) {
      // Short timeout to allow window expansion before scroll
      setTimeout(scrollToBottom, 100)
    }
  }, [isOpen, messages, isTyping])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = { id: Date.now().toString(), sender: "user", text }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const keyword = matchKeyword(text)
      const botResponse: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: mockResponses[keyword] }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1200)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend(inputValue)
  }

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleChat}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#262626] rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-[#f43f5e]/20 transition-all cursor-pointer group"
          >
            {/* User requested icon to be their photo, let's make the open button their photo! */}
            <div className="w-full h-full rounded-full overflow-hidden p-0.5 border border-[#333] group-hover:border-[#f43f5e] transition-colors">
              <img 
                src="/jp-logo.png" 
                alt="Chat Assistant" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Absolute badge */}
            <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#1a1a1a] rounded-full" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] max-h-[85vh] bg-[#111111]/95 backdrop-blur-xl border border-[#262626] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden"
          >
            {/* Background shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c68a53]/5 via-transparent to-transparent pointer-events-none" />
            
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#262626] bg-[#161616]">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full border border-[#333] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <img 
                    src="/jp-logo.png" 
                    alt="AI Avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-[#a3a3a3]">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={toggleChat}
                className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[#262626] transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Log */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-5 bg-[#0a0a0a] scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === "user" ? "bg-[#c68a53] text-white" : "bg-[#262626] text-[#a3a3a3] border border-[#333]"}`}>
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  
                  {/* Bubble */}
                  <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-[#c68a53] text-white rounded-tr-sm' : 'bg-[#1a1a1a] border border-[#262626] text-white rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-start gap-3 flex-row">
                  <div className="w-8 h-8 rounded-full bg-[#262626] text-[#a3a3a3] border border-[#333] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="max-w-[80%] rounded-2xl p-4 bg-[#1a1a1a] border border-[#262626] rounded-tl-sm flex items-center gap-1.5 h-[52px]">
                    <motion.div className="w-1.5 h-1.5 bg-[#a3a3a3] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-[#a3a3a3] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-[#a3a3a3] rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Footer Area */}
            <div className="p-4 bg-[#161616] border-t border-[#262626] flex flex-col gap-3">
              {/* Quick Actions */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {["Tell me about frontend", "What databases do you use?", "Show me your projects"].map((query) => (
                  <button
                    key={query}
                    onClick={() => handleSend(query)}
                    className="px-3 py-1.5 flex-shrink-0 border border-[#333] bg-[#1a1a1a] hover:bg-[#262626] text-[#a3a3a3] hover:text-white rounded-full text-xs transition-colors"
                  >
                    {query}
                  </button>
                ))}
              </div>

              {/* Input Area (Highlighted Search Bar) */}
              <div className="relative flex items-center group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c68a53]/0 via-[#c68a53]/20 to-[#c68a53]/0 rounded-full blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="relative w-full bg-[#0a0a0a] border border-[#333] group-focus-within:border-[#c68a53]/50 text-white rounded-full pl-5 pr-12 py-3.5 text-sm focus:outline-none transition-all shadow-inner"
                />
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-2 w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-[#a3a3a3] hover:text-white hover:bg-[#c68a53] group-focus-within:bg-[#c68a53] group-focus-within:text-white hover:border-[#c68a53] disabled:opacity-50 disabled:hover:bg-[#1a1a1a] transition-all"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
