import React, { useState, useEffect } from 'react'
import {
  BarChart3,
  ShieldCheck,
  Target,
  Settings,
  UserPlus,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { Badge } from './ui/Badge'

const iconMap = {
  BarChart3,
  ShieldCheck,
  Target,
  Settings,
  UserPlus
}

const screenshots = [
  {
    id: 'command-center',
    src: '/screenshots/command-center.png',
    title: 'Command Center',
    subtitle: 'AI Adoption Assessment Overview',
    description: 'Real-time dashboard with overall progress, active assessments, completion rates, and live activity feed.',
    icon: 'BarChart3',
    tag: 'DASHBOARD'
  },
  {
    id: 'results-dashboard',
    src: '/screenshots/results-dashboard.png',
    title: 'Results Dashboard',
    subtitle: 'Executive Intelligence Overview',
    description: 'Assessment results with AI Literacy percentile, Sentiment Analysis, and Economic Impact metrics at a glance.',
    icon: 'Target',
    tag: 'ANALYTICS'
  },
  {
    id: 'sentiment-analysis',
    src: '/screenshots/sentiment-analysis.png',
    title: 'Sentiment Analysis',
    subtitle: 'Granular Emotional Insights',
    description: 'Deep-dive into sentiment by area with emotional dimension breakdowns and strategic shift recommendations.',
    icon: 'Settings',
    tag: 'INSIGHTS'
  },
  {
    id: 'validation',
    src: '/screenshots/validation.png',
    title: 'AI Validation',
    subtitle: 'Interview Integrity Engine',
    description: 'Real-time transcript validation with truth scoring, analyst notes, and assessment authenticity checks.',
    icon: 'ShieldCheck',
    tag: 'VERIFICATION'
  },
  {
    id: 'live-monitoring',
    src: '/screenshots/live-monitoring.png',
    title: 'Live Monitoring',
    subtitle: 'PBP Pulse Tracking',
    description: 'Track assessment progress in real-time with timeline projections, workflow status, and live activity feed.',
    icon: 'UserPlus',
    tag: 'MONITORING'
  }
]

export const PlatformShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % screenshots.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  const active = screenshots[activeIndex]

  return (
    <section id="platform" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">PLATFORM PREVIEW</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SEE RAIDAR IN ACTION.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            From assessment creation to executive reporting, explore the intelligence
            platform that transforms workforce data into strategic clarity.
          </p>
        </div>

        {/* Featured Image Area */}
        <div className="relative group">
          {/* Decorative glow behind the card */}
          <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-3xl opacity-20"></div>

          <div className="glass-panel rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
            {/* Terminal-style header bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/5 bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                  raidar.bizmri.com/{active.id}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  {active.tag}
                </span>
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>
            </div>

            {/* Image container */}
            <div
              className="relative bg-slate-950 cursor-pointer overflow-hidden"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                key={activeIndex}
                src={active.src}
                alt={active.title}
                className="w-full h-auto block animate-fadeIn"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Expand View</span>
                </div>
              </div>
            </div>

            {/* Caption bar */}
            <div className="px-4 sm:px-6 py-4 border-t border-white/5 bg-slate-900/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{active.title}</h3>
                  <p className="text-slate-400 text-sm mt-1">{active.description}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden sm:block whitespace-nowrap ml-4">
                  {activeIndex + 1} / {screenshots.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {screenshots.map((shot, index) => {
            const Icon = iconMap[shot.icon]
            const isActive = index === activeIndex
            return (
              <button
                key={shot.id}
                onClick={() => setActiveIndex(index)}
                className={`group text-left p-3 rounded-lg border transition-all duration-300 ${
                  isActive
                    ? 'glass-panel border-cyan-500/40 shadow-[0_0_15px_rgba(34,211,238,0.1)]'
                    : 'border-white/5 hover:border-white/20 bg-slate-900/30'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'} transition-colors`} />
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'} transition-colors`}>
                    {shot.tag}
                  </span>
                </div>
                <h4 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'} transition-colors`}>
                  {shot.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1 hidden sm:block">
                  {shot.subtitle}
                </p>
                {/* Active indicator line */}
                <div className={`mt-2 h-0.5 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-cyan-400 w-full' : 'bg-transparent w-0'
                }`}></div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev arrow */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-2 glass-panel rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next arrow */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-2 glass-panel rounded-full border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all z-10"
            onClick={(e) => {
              e.stopPropagation()
              setActiveIndex((prev) => (prev + 1) % screenshots.length)
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox image */}
          <div
            className="max-w-6xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={`lightbox-${activeIndex}`}
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].title}
              className="w-full h-auto animate-fadeIn"
            />
            <div className="bg-slate-900 px-6 py-4 border-t border-white/5">
              <h3 className="text-white font-bold">{screenshots[activeIndex].title}</h3>
              <p className="text-slate-400 text-sm mt-1">{screenshots[activeIndex].description}</p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveIndex(idx)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-cyan-400 w-6' : 'bg-slate-600 hover:bg-slate-400'
                }`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
