"use client"

import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Treat anything non-light as 'dark' mode visually for the toggle switch starting position
  const isDark = theme !== "light"
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const newRipple = { x, y, id: Date.now() }
    setRipples((prev) => [...prev, newRipple])

    setTheme(isDark ? "light" : "dark")
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`
          relative flex items-center justify-center shrink-0
          w-11 h-11 rounded-full overflow-hidden
          transition-all duration-700 ease-in-out
          border backdrop-blur-xl
          hover:scale-[1.10] active:scale-95
          ${
            isDark
              ? "bg-[#0f172a]/70 border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              : "bg-white/70 border-[#e2e8f0] shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:shadow-[0_0_25px_rgba(255,255,255,1)]"
          }
        `}
      >
        {/* Dynamic shadow burst ripple */}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={`absolute rounded-full pointer-events-none animate-ripple-burst ${
              isDark 
                ? "bg-blue-400/40 shadow-[0_0_50px_rgba(56,189,248,0.9)]" 
                : "bg-white shadow-[0_0_50px_rgba(255,255,255,1)]"
            }`}
            style={{
              top: ripple.y,
              left: ripple.x,
              transform: "translate(-50%, -50%)",
            }}
            onAnimationEnd={() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id))}
          />
        ))}

        {/* Icon Container with smooth rotate/fade */}
        <div className={`relative w-6 h-6 transition-transform duration-[800ms] ${isDark ? "rotate-0" : "rotate-[360deg]"}`}>
          {/* Moon Icon for Dark Mode */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-in-out ${
              isDark 
                ? "opacity-100 scale-100 rotate-0 text-blue-200 drop-shadow-[0_0_8px_rgba(147,197,253,0.8)]" 
                : "opacity-0 scale-50 -rotate-90 text-blue-100"
            }`}
          >
            <Moon className="w-5 h-5" strokeWidth={1.5} />
          </div>

          {/* Sun Icon for Light Mode */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-[600ms] ease-in-out ${
              !isDark 
                ? "opacity-100 scale-100 rotate-0 text-amber-500 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]" 
                : "opacity-0 scale-50 rotate-90 text-amber-900 drop-shadow-none"
            }`}
          >
            <Sun className="w-6 h-6" strokeWidth={1.5} />
          </div>
        </div>
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ripple-burst {
          0% { width: 0px; height: 0px; opacity: 1; }
          100% { width: 250px; height: 250px; opacity: 0; }
        }
        .animate-ripple-burst { animation: ripple-burst 700ms ease-out forwards; }
      `}} />
    </>
  )
}
