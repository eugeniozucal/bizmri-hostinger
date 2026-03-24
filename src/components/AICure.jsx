import React, { useRef, useEffect, useState } from 'react'

// Abstract MRI Visualization - SVG based
function MRIVisualization() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame
    const animate = () => {
      setOffset(prev => (prev + 0.3) % 360)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Generate node positions for the "scan" network
  const nodes = [
    { x: 120, y: 80, r: 6 }, { x: 200, y: 60, r: 4 }, { x: 280, y: 90, r: 5 },
    { x: 160, y: 140, r: 5 }, { x: 240, y: 130, r: 7 }, { x: 320, y: 110, r: 4 },
    { x: 100, y: 180, r: 4 }, { x: 180, y: 200, r: 6 }, { x: 260, y: 190, r: 5 },
    { x: 340, y: 170, r: 4 }, { x: 140, y: 250, r: 5 }, { x: 220, y: 260, r: 4 },
    { x: 300, y: 240, r: 6 }, { x: 380, y: 200, r: 5 }, { x: 60, y: 130, r: 3 },
    { x: 400, y: 140, r: 3 },
  ]

  // Generate connections
  const connections = [
    [0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[3,7],[4,8],[5,9],
    [7,8],[8,9],[6,10],[7,10],[7,11],[8,12],[9,13],[10,11],[11,12],[12,13],
    [14,0],[14,6],[15,5],[15,9],[15,13]
  ]

  // Scanning line position
  const scanY = 40 + (Math.sin(offset * 0.02) + 1) * 130

  return (
    <div className="relative mx-auto w-full max-w-[min(460px,100%)]">
      <svg viewBox="0 0 460 320" className="h-auto w-full max-h-[220px] sm:max-h-none" style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.05))' }}>
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="460" height="320" fill="url(#grid)" rx="8"/>

        {/* Connections */}
        {connections.map(([a, b], i) => (
          <line
            key={`c-${i}`}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />
        ))}

        {/* Scanning line */}
        <line
          x1="0" y1={scanY} x2="460" y2={scanY}
          stroke="rgba(0,0,0,0.06)"
          strokeWidth="1"
        />
        <rect
          x="0" y={scanY - 8} width="460" height="16"
          fill="url(#scanGrad)"
          opacity="0.5"
        />
        <defs>
          <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.03)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {nodes.map((node, i) => {
          const nearScan = Math.abs(node.y - scanY) < 30
          return (
            <g key={`n-${i}`}>
              {nearScan && (
                <circle
                  cx={node.x} cy={node.y} r={node.r * 3}
                  fill="rgba(0,0,0,0.02)"
                />
              )}
              <circle
                cx={node.x} cy={node.y} r={node.r}
                fill={nearScan ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.15)'}
                className="transition-all duration-300"
              />
            </g>
          )
        })}

        {/* Abstract text boxes representing processes */}
        {[[70, 55, 60], [250, 45, 70], [350, 65, 50], [90, 220, 55], [300, 210, 65]].map(([x, y, w], i) => (
          <g key={`tb-${i}`}>
            <rect x={x} y={y} width={w} height="8" rx="1" fill="rgba(0,0,0,0.04)" />
            <rect x={x} y={y+12} width={w*0.7} height="4" rx="1" fill="rgba(0,0,0,0.025)" />
          </g>
        ))}
      </svg>
    </div>
  )
}

export function AICure({ onOpenModal }) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution" ref={sectionRef} className="scroll-mt-20 py-16 md:py-28 lg:py-36 px-4 sm:px-6 bg-white">
      <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.1] mb-5 sm:mb-6">
              bizMRI Digitizes Your Invisible Knowledge.
            </h2>
            <p className="text-lg text-black/50 leading-relaxed mb-10 max-w-xl">
              By capturing your organization&apos;s invisible knowledge, our AI agents uncover deep operational pains and untapped opportunities for improvement. Get a clear, prioritized roadmap so you know exactly where to attack first-driving massive productivity gains and giving you the head start needed to become your industry&apos;s next success story.
            </p>
            <button
              onClick={onOpenModal}
              className="inline-flex items-center px-8 py-4 rounded-md text-sm font-medium text-white bg-indigo-600 border border-indigo-600 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:bg-indigo-700 hover:border-indigo-700 hover:shadow-[0_6px_22px_rgba(79,70,229,0.45)] active:scale-[0.98] transition-all duration-300"
            >
              Join the Waitlist
            </button>
            <p className="mt-4 text-xs text-black/30 italic">
              Spots are strictly limited. Join the waitlist to secure your early competitive edge.
            </p>
          </div>

          {/* Right: MRI Visualization */}
          <div className="relative">
            <MRIVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
