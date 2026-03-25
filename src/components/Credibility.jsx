import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nContext.jsx'

export function Credibility() {
  const { t } = useI18n()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const stats = t('about.stats')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="scroll-mt-20 py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-neutral-950 border-t border-white/10">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] mb-10">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1l2.47 5.01L17 6.87l-4 3.9.94 5.5L9 13.77l-4.94 2.5.94-5.5-4-3.9 5.53-.86L9 1z"
              fill="white"
              opacity="0.75"
            />
          </svg>
          <span className="text-xs font-medium text-zinc-400 tracking-wide">{t('about.badge')}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-4">{t('about.h2')}</h2>
        <p className="text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">{t('about.p')}</p>

        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">{stat.value}</div>
              <div className="mt-1 text-[11px] text-zinc-500 leading-tight whitespace-pre-line">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
