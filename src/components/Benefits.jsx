import React, { useEffect, useId, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nContext.jsx'

/** ViewBox 400×400 — org-style tree: explicit edges so every segment connects real endpoints */
const MRI_NODES = [
  { x: 200, y: 48 },
  { x: 118, y: 108 },
  { x: 282, y: 108 },
  { x: 68, y: 178 },
  { x: 168, y: 178 },
  { x: 232, y: 178 },
  { x: 332, y: 178 },
  { x: 118, y: 248 },
  { x: 282, y: 248 },
  { x: 78, y: 318 },
  { x: 158, y: 318 },
  { x: 242, y: 318 },
  { x: 322, y: 318 },
]

const MRI_EDGES = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 5],
  [2, 6],
  [3, 7],
  [4, 7],
  [5, 8],
  [6, 8],
  [7, 9],
  [7, 10],
  [8, 11],
  [8, 12],
]

function StickyMRIVisual() {
  const uid = useId().replace(/:/g, '')
  const gridPatId = `benefitGrid-${uid}`
  const scanGradId = `scanGradBenefit-${uid}`

  const [scanPos, setScanPos] = useState(0)

  useEffect(() => {
    let frame
    const animate = () => {
      setScanPos((prev) => (prev + 0.4) % 200)
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const phase = Math.abs(scanPos - 100)
  const scanLineY = (phase / 100) * 380 + 10

  const nodeNearScan = (ny) => Math.abs(ny - scanLineY) < 42
  const edgeNearScan = (y1, y2) => Math.abs((y1 + y2) / 2 - scanLineY) < 55

  return (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] lg:min-h-[400px] bg-neutral-900/60 rounded-lg border border-white/10 overflow-hidden shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={gridPatId} width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
          </pattern>
          <linearGradient id={scanGradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#${gridPatId})`} />

        <g strokeLinecap="round">
          {MRI_EDGES.map(([from, to], i) => {
            const a = MRI_NODES[from]
            const b = MRI_NODES[to]
            const strong = edgeNearScan(a.y, b.y)
            return (
              <line
                key={`e-${from}-${to}-${i}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={`rgba(255,255,255,${strong ? 0.22 : 0.08})`}
                strokeWidth="1"
                className="transition-all duration-500"
              />
            )
          })}
        </g>

        <g>
          {MRI_NODES.map((n, i) => {
            const on = nodeNearScan(n.y)
            return (
              <circle
                key={`n-${i}`}
                cx={n.x}
                cy={n.y}
                r={on ? 5 : 4}
                fill={`rgba(255,255,255,${on ? 0.85 : 0.18})`}
                className="transition-all duration-500"
              />
            )
          })}
        </g>

        <rect
          x="0"
          y={scanLineY - 10}
          width="400"
          height="20"
          fill={`url(#${scanGradId})`}
          opacity="0.65"
        />
      </svg>
    </div>
  )
}

export function Benefits() {
  const { locale, t } = useI18n()
  const benefits = t('benefits.items')
  const [activeIdx, setActiveIdx] = useState(-1)
  const itemRefs = useRef([])

  useEffect(() => {
    const b = t('benefits.items')
    const observers = b.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx((prev) => Math.max(prev, i))
        },
        { threshold: 0.6 }
      )
      if (itemRefs.current[i]) observer.observe(itemRefs.current[i])
      return observer
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [locale, t])

  return (
    <section className="scroll-mt-20 py-16 md:py-28 lg:py-36 px-4 sm:px-6 bg-neutral-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-start">
          <div className="space-y-8 md:space-y-10 lg:py-12">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                className={`transition-all duration-700 ${
                  activeIdx >= i ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                }`}
              >
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight transition-all duration-700 ${
                    activeIdx >= i ? 'text-zinc-100' : 'text-zinc-600'
                  }`}
                  style={{
                    textShadow: activeIdx >= i ? '0 0 40px rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  {benefit.title}
                </h3>
                {benefit.description && (
                  <p
                    className={`mt-3 max-w-md text-base sm:text-lg font-light leading-relaxed transition-all duration-700 ${
                      activeIdx >= i ? 'text-zinc-400' : 'text-zinc-600'
                    }`}
                  >
                    {benefit.description}
                  </p>
                )}
                <div
                  className={`mt-3 h-[2px] transition-all duration-700 ${
                    activeIdx >= i ? 'w-12 bg-white/25' : 'w-0 bg-transparent'
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            <StickyMRIVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
