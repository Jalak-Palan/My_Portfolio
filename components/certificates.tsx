"use client"

import { useRef, useState } from "react"

const certificates = [
  {
    src: "/certificates/Jalak Palan_page-0001.jpg",
    title: "Certificate of Excellence",
    description: "Award for outstanding performance and overall excellence.",
  },
  {
    src: "/certificates/IISC CodeForge Hackthon_page-0001.jpg",
    title: "IISC CodeForge Hackathon",
    description: "Participated and excelled in the CodeForge Hackathon at IISC.",
  },
  {
    src: "/certificates/IIT Kharagpur_page-0001.jpg",
    title: "IIT Kharagpur",
    description: "Recognition from Indian Institute of Technology, Kharagpur.",
  },
  {
    src: "/certificates/IIT-BOMBAY.png",
    title: "IIT Bombay",
    description: "TechFest or technical achievement certificate from IIT Bombay.",
  },
  {
    src: "/certificates/K Hacks 3.0_page-0001.jpg",
    title: "K Hacks 3.0",
    description: "Winner or participant at the K Hacks 3.0 Hackathon.",
  },
  {
    src: "/certificates/jaipur Cybrathon_page-0001.jpg",
    title: "Jaipur Cyberathon",
    description: "Cybersecurity excellence demonstrated at Jaipur Cyberathon.",
  },
  {
    src: "/certificates/odoo X Adani_page-0001.jpg",
    title: "Odoo X Adani",
    description: "Special event achievement from the Odoo X Adani collaboration.",
  },
]

export function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault()
        setActiveIndex(activeIndex === index ? null : index)
        break
      case "ArrowLeft":
        e.preventDefault()
        const prev = index > 0 ? index - 1 : certificates.length - 1
        ;(containerRef.current?.children[prev] as HTMLElement)?.focus()
        break
      case "ArrowRight":
        e.preventDefault()
        const next = index < certificates.length - 1 ? index + 1 : 0
        ;(containerRef.current?.children[next] as HTMLElement)?.focus()
        break
    }
  }

  return (
    <section id="certificates" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#f43f5e] text-sm uppercase tracking-[0.3em] mb-4 block">
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Certificates &amp; <span className="text-[#f43f5e]">Awards</span>
          </h2>
          <p className="text-[#737373] text-lg max-w-2xl mx-auto">
            Hover any certificate to expand and view the details.
          </p>
        </div>

        {/* Accordion Gallery — all certificates always visible */}
        <div
          ref={containerRef}
          className="flex items-stretch gap-3 w-full"
          style={{ height: "380px" }}
        >
          {certificates.map((cert, index) => {
            const isActive = activeIndex === index
            const isFocused = focusedIndex === index

            return (
              <div
                key={index}
                tabIndex={0}
                role="button"
                aria-label={cert.title}
                aria-pressed={isActive}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => { setActiveIndex(index); setFocusedIndex(index) }}
                onBlur={() => { setActiveIndex(null); setFocusedIndex(null) }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                style={{
                  /* Key: flex grow so all fill equally, active gets 5x more */
                  flex: isActive ? "5 0 0%" : "1 0 0%",
                  minWidth: "48px",
                  height: "100%",
                  backgroundImage: `url("${cert.src}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "14px",
                  border: isActive
                    ? "1px solid rgba(244,63,94,0.4)"
                    : "1px solid rgba(255,255,255,0.07)",
                  cursor: "pointer",
                  outline: isFocused ? "2px solid #f43f5e" : "none",
                  outlineOffset: "3px",
                  filter: isActive
                    ? "brightness(1) grayscale(0)"
                    : "brightness(0.5) grayscale(0.75)",
                  transition:
                    "flex 0.65s cubic-bezier(.1,.7,0,1), filter 0.5s ease, border-color 0.3s ease, box-shadow 0.4s ease",
                  boxShadow: isActive
                    ? "0 24px 64px rgba(0,0,0,0.75)"
                    : "none",
                }}
              >
                {/* Expanded: gradient overlay with title + description */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "55%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s",
                    pointerEvents: "none",
                  }}
                >
                  <h3
                    className="text-white font-bold drop-shadow-lg"
                    style={{
                      fontSize: "clamp(0.9rem, 1.4vw, 1.4rem)",
                      marginBottom: "0.35rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {cert.title}
                  </h3>
                  <p
                    className="text-zinc-300 drop-shadow-md"
                    style={{
                      fontSize: "clamp(0.7rem, 0.9vw, 0.95rem)",
                      lineHeight: 1.45,
                    }}
                  >
                    {cert.description}
                  </p>
                </div>

                {/* Collapsed: rotated vertical title */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      maxHeight: "80%",
                    }}
                  >
                    {cert.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
