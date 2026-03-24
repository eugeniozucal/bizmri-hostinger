import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex h-14 items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 min-w-0 text-lg font-semibold tracking-tight text-black select-none"
        >
          <img
            src="/bizmri-logo-header.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 max-h-8 max-w-8 shrink-0 object-contain"
            decoding="async"
            fetchPriority="high"
          />
          <span className="leading-none whitespace-nowrap">bizMRI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="/#solution" className="text-[13px] text-black/50 hover:text-black transition-colors duration-200">
            Solution
          </a>
          <a href="/#technology" className="text-[13px] text-black/50 hover:text-black transition-colors duration-200">
            Technology
          </a>
          <a href="/#about" className="text-[13px] text-black/50 hover:text-black transition-colors duration-200">
            About
          </a>
          <button
            onClick={onOpenModal}
            className="text-[13px] text-black border border-black/15 px-4 py-1.5 rounded-md hover:border-black/40 hover:shadow-[0_0_15px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            Beta Portal
          </button>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-black/10 bg-white/80 text-black/65 shadow-sm transition-colors hover:border-black/20 hover:bg-black/[0.03] hover:text-black active:scale-[0.98]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
        <div className="md:hidden animate-fade-in border-t border-black/5 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] sm:px-6 sm:py-5 space-y-3 sm:space-y-4">
          <a href="/#solution" onClick={() => setMobileOpen(false)} className="block text-sm text-black/60 hover:text-black">Solution</a>
          <a href="/#technology" onClick={() => setMobileOpen(false)} className="block text-sm text-black/60 hover:text-black">Technology</a>
          <a href="/#about" onClick={() => setMobileOpen(false)} className="block text-sm text-black/60 hover:text-black">About</a>
          <button
            onClick={() => { setMobileOpen(false); onOpenModal() }}
            className="text-sm text-black border border-black/15 px-4 py-1.5 rounded-md"
          >
            Beta Portal
          </button>
        </div>
      )}
    </nav>
  )
}
