"use client"

import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"

const certificates = [
  {
    badge: "01 — Hackathon",
    title: "IISC CodeForge Hackathon",
    subtitle: "Participated and excelled in the CodeForge Hackathon hosted at the Indian Institute of Science, Bangalore.",
    bg: "linear-gradient(135deg, #1e3a5f 0%, #0f1f36 100%)",
    accent: "#60a5fa",
    icon: "⬡",
    src: "/certificates/IISC CodeForge Hackthon_page-0001.jpg",
  },
  {
    badge: "02 — IIT Kharagpur",
    title: "IIT Kharagpur Certificate",
    subtitle: "Recognized by the Indian Institute of Technology, Kharagpur for technical excellence and achievement.",
    bg: "linear-gradient(135deg, #3b1f5e 0%, #1a0d2e 100%)",
    accent: "#c084fc",
    icon: "◈",
    src: "/certificates/IIT Kharagpur_page-0001.jpg",
  },
  {
    badge: "03 — IIT Bombay",
    title: "IIT Bombay Certificate",
    subtitle: "TechFest or technical achievement certificate awarded by Indian Institute of Technology, Bombay.",
    bg: "linear-gradient(135deg, #0f3d2e 0%, #071f18 100%)",
    accent: "#34d399",
    icon: "◉",
    src: "/certificates/IIT-BOMBAY.png",
  },
  {
    badge: "04 — Excellence",
    title: "Certificate of Excellence",
    subtitle: "Awarded for outstanding performance, dedication, and overall excellence in a competitive program.",
    bg: "linear-gradient(135deg, #3d2a0f 0%, #1f1507 100%)",
    accent: "#fbbf24",
    icon: "✦",
    src: "/certificates/Jalak Palan_page-0001.jpg",
  },
  {
    badge: "05 — Hackathon",
    title: "K Hacks 3.0",
    subtitle: "Winner or top participant at the K Hacks 3.0 Hackathon — a premier competitive tech event.",
    bg: "linear-gradient(135deg, #3d0f1a 0%, #200810 100%)",
    accent: "#f87171",
    icon: "▲",
    src: "/certificates/K Hacks 3.0_page-0001.jpg",
  },
  {
    badge: "06 — Cybersecurity",
    title: "Jaipur Cyberathon",
    subtitle: "Demonstrated cybersecurity excellence at the Jaipur Cyberathon — a government-backed security challenge.",
    bg: "linear-gradient(135deg, #1a3a1e 0%, #0d200f 100%)",
    accent: "#4ade80",
    icon: "⬤",
    src: "/certificates/jaipur Cybrathon_page-0001.jpg",
  },
  {
    badge: "07 — Industry",
    title: "Odoo X Adani",
    subtitle: "Special industry-level achievement from the Odoo X Adani collaboration event and competition.",
    bg: "linear-gradient(135deg, #1e1a3a 0%, #0f0d20 100%)",
    accent: "#818cf8",
    icon: "◆",
    src: "/certificates/odoo X Adani_page-0001.jpg",
  },
]

export function Certificates() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [activeFloat, setActiveFloat] = useState(0)
  const [zoomed, setZoomed] = useState<number | null>(null)

  useEffect(() => {
    function onScroll() {
      if (!rootRef.current) return
      const rect = rootRef.current.getBoundingClientRect()
      const totalScroll = rootRef.current.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, Math.min(-rect.top, totalScroll))
      const progress = scrolled / totalScroll
      setActiveFloat(progress * (certificates.length - 1))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomed(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const getCardStyle = (i: number): React.CSSProperties => {
    const diff = i - activeFloat
    const base: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      borderRadius: "20px",
      willChange: "transform, opacity",
      overflow: "hidden",
      transition: "transform 0.05s linear, opacity 0.05s linear",
      cursor: "pointer",
    }

    if (diff < -1) {
      return { ...base, transform: "translateY(-60%) scale(0.85)", opacity: 0, zIndex: i }
    } else if (diff < 0) {
      const t = diff + 1
      return {
        ...base,
        transform: `translateY(${(1 - t) * -60}%) scale(${0.85 + 0.15 * t})`,
        opacity: t,
        zIndex: i,
      }
    } else {
      const offset = Math.min(diff, 4)
      return {
        ...base,
        transform: `translateY(${offset * 14}px) scale(${1 - offset * 0.045})`,
        opacity: diff > 3.5 ? 0 : 1 - Math.max(0, diff - 2) * 0.35,
        zIndex: certificates.length - i,
      }
    }
  }

  return (
    <section id="certificates">
      {/* Fullscreen Lightbox */}
      {zoomed !== null && (
        <div
          onClick={() => setZoomed(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(20px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <button
            onClick={() => setZoomed(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              borderRadius: "50%",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={20} />
          </button>
          <img
            src={certificates[zoomed].src}
            alt={certificates[zoomed].title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "min(90vw, 1100px)",
              maxHeight: "85vh",
              borderRadius: "16px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8)",
              objectFit: "contain",
            }}
          />
        </div>
      )}

      {/* Header above scroll area */}
      <div
        style={{
          background: "#0f1117",
          padding: "96px 24px 0",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "block",
            color: "#f43f5e",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "16px",
          }}
        >
          Achievements
        </span>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 16px",
          }}
        >
          Certificates &amp; <span style={{ color: "#f43f5e" }}>Awards</span>
        </h2>
        <p style={{ color: "#737373", fontSize: "1.125rem", maxWidth: "520px", margin: "0 auto 0" }}>
          Scroll through — click any card to view the full certificate.
        </p>
      </div>

      {/* Scroll-Driven Stack */}
      <div
        ref={rootRef}
        style={{
          position: "relative",
          height: `${certificates.length * 100}vh`,
          background: "#0f1117",
        }}
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Card stack */}
          <div
            style={{
              position: "relative",
              width: "min(520px, 92vw)",
              height: "68vh",
            }}
          >
            {certificates.map((card, i) => (
              <div
                key={i}
                onClick={() => setZoomed(i)}
                style={{
                  ...getCardStyle(i),
                  background: card.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
              >
                {/* Certificate image fills top 55% */}
                <div
                  style={{
                    flex: "0 0 55%",
                    overflow: "hidden",
                    borderBottom: `2px solid ${card.accent}22`,
                    position: "relative",
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                    }}
                  />
                  {/* Subtle click hint */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "10px",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    Click to view
                  </div>
                </div>

                {/* Text content fills bottom 45% */}
                <div
                  style={{
                    flex: 1,
                    padding: "24px 28px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        padding: "4px 12px",
                        borderRadius: "100px",
                        marginBottom: "14px",
                      }}
                    >
                      {card.badge}
                    </span>
                    <h3
                      style={{
                        fontSize: "clamp(16px, 2.5vw, 22px)",
                        fontWeight: 600,
                        margin: "0 0 10px",
                        lineHeight: 1.25,
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "2px",
                        background: card.accent,
                        borderRadius: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "10px",
                        color: card.accent,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      View Full →
                    </span>
                  </div>
                </div>

                {/* Decorative circle */}
                <div
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "-30px",
                    width: "130px",
                    height: "130px",
                    borderRadius: "50%",
                    border: `36px solid ${card.accent}`,
                    opacity: 0.07,
                    pointerEvents: "none",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {certificates.map((_, i) => {
              const isActive = i === Math.round(activeFloat)
              return (
                <div
                  key={i}
                  style={{
                    height: "5px",
                    borderRadius: "3px",
                    background: isActive ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.2)",
                    width: isActive ? "20px" : "5px",
                    transition: "all 0.3s ease",
                  }}
                />
              )
            })}
          </div>

          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll to navigate
          </p>
        </div>
      </div>
    </section>
  )
}
