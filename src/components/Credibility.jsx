import React, { useEffect, useRef, useState } from 'react'

export function Credibility() {
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
    <section id="about" ref={sectionRef} className="scroll-mt-20 py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white border-t border-black/5">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Web Summit badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/8 bg-black/[0.02] mb-10">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1l2.47 5.01L17 6.87l-4 3.9.94 5.5L9 13.77l-4.94 2.5.94-5.5-4-3.9 5.53-.86L9 1z" fill="black" opacity="0.7"/>
          </svg>
          <span className="text-xs font-medium text-black/60 tracking-wide">
            Web Summit Rio 2026 — Alpha Startup Program
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-4">
          Building the Future of Operational Intelligence
        </h2>
        <p className="text-base text-black/45 leading-relaxed max-w-2xl mx-auto mb-12">
          bizMRI is an early-stage AI company rethinking how organizations understand themselves. Selected for the Web Summit Rio 2026 Alpha program, we're working with forward-thinking teams to validate a fundamentally new approach to process discovery.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '80%', label: 'Processes\nUndocumented' },
            { value: '10x', label: 'Faster Than\nConsulting' },
            { value: '0', label: 'Human Bias\nIn Discovery' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] text-black/35 leading-tight whitespace-pre-line">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
