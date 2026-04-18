"use client"

import { useTheme } from "./theme-provider"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themes = [
    {
      id: "dark" as const,
      label: "Dark",
      bg: "#0a0a0a",
      dot: "#f43f5e",
      ring: "#f43f5e",
    },
    {
      id: "light" as const,
      label: "Light",
      bg: "#f8f8f8",
      dot: "#f43f5e",
      ring: "#f43f5e",
    },
    {
      id: "red" as const,
      label: "Red",
      bg: "#0d0000",
      dot: "#ef0000",
      ring: "#ef0000",
    },
  ]

  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "24px",
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {/* Label */}
      <span
        style={{
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--muted-foreground)",
          opacity: 0.6,
        }}
      >
        Theme
      </span>

      {/* Pill container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          padding: "10px 10px",
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "999px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          backdropFilter: "blur(12px)",
        }}
      >
        {themes.map((t) => {
          const isActive = theme === t.id
          return (
            <button
              key={t.id}
              title={`${t.label} theme`}
              onClick={() => setTheme(t.id)}
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                background: t.bg,
                border: isActive
                  ? `2px solid ${t.ring}`
                  : "2px solid transparent",
                cursor: "pointer",
                position: "relative",
                outline: "none",
                transition: "transform 0.2s ease, border-color 0.2s ease",
                transform: isActive ? "scale(1.15)" : "scale(1)",
                boxShadow: isActive
                  ? `0 0 0 3px ${t.ring}44`
                  : "none",
              }}
            >
              {/* Color dot inside */}
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: t.dot,
                    opacity: isActive ? 1 : 0.5,
                  }}
                />
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
