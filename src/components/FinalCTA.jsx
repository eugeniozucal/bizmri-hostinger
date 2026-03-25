import React, { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/I18nContext.jsx'

export function FinalCTA({ onOpenModal }) {
  const { t } = useI18n()
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const buttonRef = useRef(null)
  const starsRef = useRef([])
  const rafRef = useRef(0)
  const runningRef = useRef(true)
  const hoverRef = useRef(false)
  const frameRef = useRef(0)

  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    hoverRef.current = hovered
  }, [hovered])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const rect = section.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(section)

    const loop = () => {
      if (!runningRef.current) return

      const sec = sectionRef.current
      const btn = buttonRef.current
      if (!sec || !canvas || !btn) {
        rafRef.current = requestAnimationFrame(loop)
        return
      }

      const rect = sec.getBoundingClientRect()
      const b = btn.getBoundingClientRect()
      const originX = b.left - rect.left + b.width / 2
      const originY = b.top - rect.top + b.height / 2
      const btnLeft = b.left - rect.left
      const btnTop = b.top - rect.top
      const btnW = b.width
      const btnH = b.height
      const w = rect.width
      const h = rect.height

      const starInsideButton = (x, y) =>
        x >= btnLeft && x <= btnLeft + btnW && y >= btnTop && y <= btnTop + btnH

      frameRef.current += 1

      if (hoverRef.current && w > 0 && h > 0) {
        const burst = frameRef.current % 2 === 0 ? 4 : 3
        for (let i = 0; i < burst; i++) {
          const angle = Math.random() * Math.PI * 2
          const speed = 0.6 + Math.random() * 2.8
          starsRef.current.push({
            x: originX + (Math.random() - 0.5) * 4,
            y: originY + (Math.random() - 0.5) * 4,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            size: 0.4 + Math.random() * 1.4,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }

      ctx.clearRect(0, 0, w, h)

      starsRef.current = starsRef.current.filter((s) => {
        s.x += s.vx
        s.y += s.vy
        s.vx *= 1.008
        s.vy *= 1.008
        s.life -= hoverRef.current ? 0.006 : 0.028

        const out = s.life <= 0 || s.x < -32 || s.y < -32 || s.x > w + 32 || s.y > h + 32
        return !out
      })

      starsRef.current.forEach((s) => {
        if (starInsideButton(s.x, s.y)) return

        const tw = 0.65 + 0.35 * Math.sin(frameRef.current * 0.12 + s.phase)
        const alpha = Math.min(1, s.life * 1.1) * tw
        ctx.globalAlpha = alpha
        ctx.fillStyle = 'rgba(0,0,0,0.75)'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()

        if (s.size > 0.9) {
          ctx.globalAlpha = alpha * 0.35
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * 2.2, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      ctx.globalAlpha = 1

      rafRef.current = requestAnimationFrame(loop)
    }

    runningRef.current = true
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      runningRef.current = false
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      starsRef.current = []
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative isolate py-20 md:py-32 lg:py-44 px-4 sm:px-6 bg-zinc-100 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-100 via-zinc-100 to-zinc-200 pointer-events-none" />

      <canvas ref={canvasRef} className="absolute inset-0 z-[5] w-full h-full pointer-events-none" aria-hidden />

      <div
        className={`relative z-50 max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight leading-tight mb-6">
          {t('finalCta.h2')}
        </h2>
        <p className="text-base sm:text-lg text-neutral-600 mb-10 max-w-lg mx-auto">{t('finalCta.p')}</p>
        <button
          ref={buttonRef}
          type="button"
          onClick={onOpenModal}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative z-[100] isolate inline-flex items-center px-8 py-4 rounded-md text-sm font-medium tracking-wide text-white bg-emerald-800 border border-emerald-800 shadow-[0_4px_14px_rgba(6,95,70,0.45)] hover:bg-emerald-900 hover:border-emerald-900 hover:shadow-[0_6px_22px_rgba(6,78,59,0.5)] active:scale-[0.98] transition-all duration-400 pointer-events-auto"
        >
          {t('finalCta.btn')}
        </button>
      </div>
    </section>
  )
}
