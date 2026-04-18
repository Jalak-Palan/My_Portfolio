"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "colorful"

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")

  // Load persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null
    if (saved && ["dark", "light", "colorful"].includes(saved)) {
      setThemeState(saved)
      document.documentElement.setAttribute("data-theme", saved)
    }
  }, [])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem("portfolio-theme", t)
    document.documentElement.setAttribute("data-theme", t)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
