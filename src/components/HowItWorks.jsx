import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nContext.jsx'

function stepIcons() {
  return [
    <svg key="i0" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="14" cy="14" r="10" />
      <circle cx="14" cy="14" r="5" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="12" opacity="0.3" strokeDasharray="2 3" />
    </svg>,
    <svg key="i1" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="14" cy="6" r="3" />
      <circle cx="6" cy="20" r="3" />
      <circle cx="22" cy="20" r="3" />
      <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.3" />
      <line x1="14" y1="9" x2="14" y2="12" />
      <line x1="12" y1="15.5" x2="8.5" y2="18" />
      <line x1="16" y1="15.5" x2="19.5" y2="18" />
    </svg>,
    <svg key="i2" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="4" width="10" height="7" rx="2" />
      <path d="M6 11v2l3-2" />
      <rect x="15" y="10" width="10" height="7" rx="2" />
      <path d="M22 17v2l-3-2" />
      <path d="M8 20h12" strokeDasharray="2 2" opacity="0.5" />
      <path d="M14 22v3" opacity="0.5" />
    </svg>,
    <svg key="i3" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="4" y="3" width="20" height="22" rx="2" />
      <line x1="8" y1="8" x2="20" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="18" y2="16" />
      <line x1="8" y1="20" x2="13" y2="20" />
      <path d="M17 18l2 2 4-4" strokeWidth="2" />
    </svg>,
  ]
}

function stepCardClass({ isCarousel, hoveredIdx, i }) {
  const base =
    'relative flex min-h-0 flex-col rounded-lg border border-white/10 bg-neutral-900/80 transition-all duration-300 cursor-default'
  const hover =
    hoveredIdx === i
      ? 'shadow-[0_2px_8px_rgba(0,0,0,0.3)] sm:scale-[1.03] sm:border-white/20 sm:shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
      : 'shadow-[0_2px_8px_rgba(0,0,0,0.25)]'
  if (isCarousel) {
    return `${base} ${hover} w-[min(92vw,22rem)] shrink-0 snap-center p-4 min-h-[200px]`
  }
  return `${base} ${hover} rounded-md p-2.5 sm:rounded-lg sm:p-5 md:p-6`
}

export function HowItWorks() {
  const { t } = useI18n()
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const scrollRef = useRef(null)
  const steps = t('blueprint.steps')
  const icons = stepIcons()

  const scrollToSlide = useCallback((index) => {
    const root = scrollRef.current
    if (!root) return
    const slide = root.querySelector(`[data-carousel-index="${index}"]`)
    slide?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [])

  useEffect(() => {
    const root = scrollRef.current
    if (!root) return

    const slides = root.querySelectorAll('[data-carousel-index]')
    if (!slides.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.51)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target) {
          const idx = Number(visible.target.getAttribute('data-carousel-index'))
          if (!Number.isNaN(idx)) setCarouselIdx(idx)
        }
      },
      { root, rootMargin: '0px', threshold: [0.5, 0.55, 0.6] }
    )

    slides.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [steps])

  const cardInner = (step, i, isCarousel) => (
    <>
      <div
        className={`text-zinc-300 ${isCarousel ? 'mb-3 [&_svg]:h-7 [&_svg]:w-7' : 'mb-1.5 sm:mb-5 [&_svg]:h-[18px] [&_svg]:w-[18px] sm:[&_svg]:h-7 sm:[&_svg]:w-7'}`}
      >
        {icons[i]}
      </div>
      <div
        className={`font-mono tracking-wider text-zinc-500 ${isCarousel ? 'mb-2 text-[11px]' : 'mb-0.5 text-[9px] sm:mb-2 sm:text-[11px]'}`}
      >
        {t('blueprint.step')} {String(i + 1)}
      </div>
      <h3
        className={`font-semibold leading-tight text-zinc-100 ${
          isCarousel
            ? 'mb-2 text-base leading-snug'
            : 'mb-0.5 line-clamp-4 text-[10px] sm:mb-2 sm:line-clamp-none sm:text-base sm:leading-snug'
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`text-zinc-400 leading-relaxed ${
          isCarousel ? 'text-sm' : 'line-clamp-4 text-[9px] leading-snug sm:line-clamp-none sm:text-sm sm:leading-relaxed'
        }`}
      >
        {step.description}
      </p>
    </>
  )

  return (
    <section id="technology" className="pt-4 pb-12 md:py-28 lg:py-36 px-4 sm:px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 text-center mb-3 sm:mb-14 md:mb-16">
          {t('blueprint.h2')}
        </h2>

        {/* Mobile / tablet: horizontal carousel */}
        <div className="lg:hidden -mx-4 sm:-mx-6">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-pl-4 scroll-pr-4"
            aria-roledescription="carousel"
          >
            {steps.map((step, i) => (
              <div
                key={`c-${i}`}
                data-carousel-index={i}
                className={stepCardClass({ isCarousel: true, hoveredIdx, i })}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {cardInner(step, i, true)}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-1.5 mt-4" role="tablist" aria-label="Blueprint steps">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={carouselIdx === i}
                aria-label={`${t('blueprint.step')} ${i + 1}`}
                onClick={() => scrollToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  carouselIdx === i ? 'w-7 bg-zinc-100' : 'w-1.5 bg-zinc-600 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 4-column grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={`g-${i}`}
              className={stepCardClass({ isCarousel: false, hoveredIdx, i })}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {cardInner(step, i, false)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
