import React, { useState } from 'react'

const steps = [
  {
    num: '1',
    title: 'Define Objectives / Target Your Discovery',
    description: 'Align discovery goals with strategic outcomes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="14" cy="14" r="10" />
        <circle cx="14" cy="14" r="5" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
        {/* Pulse rings */}
        <circle cx="14" cy="14" r="12" opacity="0.3" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'AI Agents Deploy',
    description:
      'Relentless, non-biased agents interview your workforce capturing both documented processes and the hidden expertise your team relies on.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* Network of agents */}
        <circle cx="14" cy="6" r="3" />
        <circle cx="6" cy="20" r="3" />
        <circle cx="22" cy="20" r="3" />
        <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.3" />
        <line x1="14" y1="9" x2="14" y2="12" />
        <line x1="12" y1="15.5" x2="8.5" y2="18" />
        <line x1="16" y1="15.5" x2="19.5" y2="18" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Extract Deep Insights',
    description:
      'We map the invisible data to pinpoint operational bottlenecks, uncover root pain points, and surface executive-level insights.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* Data flow / speech bubbles */}
        <rect x="3" y="4" width="10" height="7" rx="2" />
        <path d="M6 11v2l3-2" />
        <rect x="15" y="10" width="10" height="7" rx="2" />
        <path d="M22 17v2l-3-2" />
        <path d="M8 20h12" strokeDasharray="2 2" opacity="0.5" />
        <path d="M14 22v3" opacity="0.5" />
      </svg>
    ),
  },
  {
    num: '4',
    title: 'Receive Blueprint',
    description:
      'We deliver a comprehensive, actionable backlog designed to optimize your processes and accelerate your growth.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        {/* Blueprint / architecture */}
        <rect x="4" y="3" width="20" height="22" rx="2" />
        <line x1="8" y1="8" x2="20" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="18" y2="16" />
        <line x1="8" y1="20" x2="13" y2="20" />
        <path d="M17 18l2 2 4-4" strokeWidth="2" />
      </svg>
    ),
  },
]

export function HowItWorks() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="technology" className="pt-4 pb-12 md:py-28 lg:py-36 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black text-center mb-3 sm:mb-14 md:mb-16">
          The Automated Blueprint
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex min-h-0 flex-col rounded-md border border-black/5 bg-white p-2.5 transition-all duration-300 cursor-default sm:rounded-lg sm:p-5 md:p-6 ${
                hoveredIdx === i
                  ? 'shadow-[0_2px_8px_rgba(0,0,0,0.03)] sm:scale-[1.03] sm:border-black/10 sm:shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
                  : 'shadow-[0_2px_8px_rgba(0,0,0,0.03)]'
              }`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="mb-1.5 text-black/70 sm:mb-5 [&_svg]:h-[18px] [&_svg]:w-[18px] sm:[&_svg]:h-7 sm:[&_svg]:w-7">
                {step.icon}
              </div>
              <div className="mb-0.5 text-[9px] font-mono tracking-wider text-black/25 sm:mb-2 sm:text-[11px]">
                STEP {step.num}
              </div>
              <h3 className="mb-0.5 line-clamp-4 text-[10px] font-semibold leading-tight text-black sm:mb-2 sm:line-clamp-none sm:text-base sm:leading-snug">
                {step.title}
              </h3>
              <p className="line-clamp-4 text-[9px] leading-snug text-black/45 sm:line-clamp-none sm:text-sm sm:leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
