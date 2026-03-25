import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext.jsx'

export function Navbar({ onOpenModal }) {
  const { locale, setLocale, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const LangBtn = ({ code }) => (
    <button
      type="button"
      onClick={() => setLocale(code)}
      className={`rounded px-1.5 py-0.5 text-[11px] font-medium transition-colors sm:px-2 sm:text-[12px] ${
        locale === code ? 'bg-white text-neutral-950' : 'text-zinc-500 hover:bg-white/10 hover:text-zinc-100'
      }`}
      aria-pressed={locale === code}
      aria-label={code}
    >
      {t(`lang.${code}`)}
    </button>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 min-w-0 text-lg font-semibold tracking-tight text-zinc-100 select-none"
        >
          <img
            src="/bizmri-logo-night.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 max-h-8 max-w-8 shrink-0 object-contain"
            decoding="async"
            fetchPriority="high"
          />
          <span className="leading-none whitespace-nowrap">bizMRI</span>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          <a href="/#solution" className="text-[13px] text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
            {t('nav.solution')}
          </a>
          <a href="/#technology" className="text-[13px] text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
            {t('nav.technology')}
          </a>
          <a href="/#about" className="text-[13px] text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
            {t('nav.about')}
          </a>
          <button
            onClick={onOpenModal}
            className="text-[13px] text-zinc-100 border border-white/15 px-4 py-1.5 rounded-md hover:border-white/35 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300"
          >
            {t('nav.betaPortal')}
          </button>
          <div className="flex items-center gap-0.5 pl-1" role="group" aria-label="Language">
            <LangBtn code="en" />
            <LangBtn code="es" />
            <LangBtn code="pt" />
          </div>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-transparent text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100 active:scale-[0.98]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {mobileOpen ? (
              <path d="M4 4l10 10M14 4L4 14" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden animate-fade-in border-t border-white/10 bg-neutral-950 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] sm:px-6 sm:py-5 space-y-3 sm:space-y-4">
          <a href="/#solution" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-400 hover:text-zinc-100">
            {t('nav.solution')}
          </a>
          <a href="/#technology" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-400 hover:text-zinc-100">
            {t('nav.technology')}
          </a>
          <a href="/#about" onClick={() => setMobileOpen(false)} className="block text-sm text-zinc-400 hover:text-zinc-100">
            {t('nav.about')}
          </a>
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenModal()
            }}
            className="text-sm text-zinc-100 border border-white/15 px-4 py-1.5 rounded-md"
          >
            {t('nav.betaPortal')}
          </button>

          <div
            className="flex items-center gap-1 border-t border-white/10 pt-4 mt-1 [&_button]:min-h-9 [&_button]:min-w-9 [&_button]:px-2 [&_button]:text-xs"
            role="group"
            aria-label="Language"
          >
            <LangBtn code="en" />
            <LangBtn code="es" />
            <LangBtn code="pt" />
          </div>
        </div>
      )}
    </nav>
  )
}
