import React, { useEffect, useRef, useState } from 'react'

const benefits = [
  {
    title: 'DIGITIZE TRIBAL KNOWLEDGE',
    description:
      'Transform undocumented expertise and unspoken workflows into accessible data.',
  },
  {
    title: 'UNCOVER OPERATIONAL PAINS',
    description:
      'Pinpoint hidden bottlenecks and the exact friction points slowing your operations.',
  },
  {
    title: 'MAP AUTOMATION BACKLOGS',
    description:
      'Turn raw discovery data into a clear, prioritized roadmap for automation.',
  },
  {
    title: 'SCALE ORGANIZATIONAL INTELLIGENCE',
    description:
      'Elevate everyday workforce insights into a long-term strategic advantage.',
  },
]

// Sticky MRI visualization for right column
function StickyMRIVisual() {
  const [scanPos, setScanPos] = useState(0)

  useEffect(() => {
    let frame
    const animate = () => {
      setScanPos(prev => (prev + 0.4) % 200)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const y = Math.abs(scanPos - 100) // bounce 0→100→0

  return (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] bg-white rounded-lg border border-black/5 overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {/* Grid pattern */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id="benefitGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#benefitGrid)"/>

        {/* Abstract org structure nodes */}
        {[
          [200,60],[120,120],[280,120],[80,190],[160,190],[240,190],[320,190],
          [100,260],[200,260],[300,260],[150,330],[250,330]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill={`rgba(0,0,0,${Math.abs(cy/100 - y/100) < 0.4 ? 0.55 : 0.1})`} className="transition-all duration-500" />
            {i > 0 && (
              <line
                x1={cx} y1={cy}
                x2={[200,120,280,80,160,240,320,100,200,300,150,250][Math.max(0, Math.floor((i-1)/2))]}
                y2={[60,60,60,120,120,120,120,190,190,190,260,260][Math.max(0, Math.floor((i-1)/2))]}
                stroke={`rgba(0,0,0,${Math.abs(cy/100 - y/100) < 0.5 ? 0.12 : 0.03})`}
                strokeWidth="1"
                className="transition-all duration-500"
              />
            )}
          </g>
        ))}

        {/* Scanning light bar */}
        <rect x="0" y={y/100*400 - 10} width="400" height="20" fill="url(#scanGradBenefit)" opacity="0.6" />
        <defs>
          <linearGradient id="scanGradBenefit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.04)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function Benefits() {
  const [activeIdx, setActiveIdx] = useState(-1)
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = benefits.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(prev => Math.max(prev, i))
        },
        { threshold: 0.6 }
      )
      if (itemRefs.current[i]) observer.observe(itemRefs.current[i])
      return observer
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="scroll-mt-20 py-16 md:py-28 lg:py-36 px-4 sm:px-6 bg-white border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-start">
          {/* Left: Scrolling benefits text */}
          <div className="space-y-8 md:space-y-10 lg:py-12">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                ref={el => itemRefs.current[i] = el}
                className={`transition-all duration-700 ${
                  activeIdx >= i
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-20 translate-x-2'
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-all duration-700 ${
                    activeIdx >= i ? 'text-black' : 'text-black/20'
                  }`}
                  style={{
                    textShadow: activeIdx >= i ? '0 0 40px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  {benefit.title}
                </h3>
                {benefit.description && (
                  <p
                    className={`mt-3 max-w-md text-base sm:text-lg font-light leading-relaxed transition-all duration-700 ${
                      activeIdx >= i ? 'text-black/50' : 'text-black/25'
                    }`}
                  >
                    {benefit.description}
                  </p>
                )}
                <div className={`mt-3 h-[2px] transition-all duration-700 ${
                  activeIdx >= i ? 'w-12 bg-black/20' : 'w-0 bg-transparent'
                }`}></div>
              </div>
            ))}
          </div>

          {/* Right: Sticky MRI visualization */}
          <div className="lg:sticky lg:top-24">
            <StickyMRIVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
