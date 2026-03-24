import React, { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'

function measureMenu(btnEl) {
  if (!btnEl) return null
  const r = btnEl.getBoundingClientRect()
  const maxH = Math.min(280, window.innerHeight - r.bottom - 16)
  return {
    top: r.bottom + 4,
    left: r.left,
    width: r.width,
    maxHeight: maxH,
  }
}

/**
 * Select accesible sin <select> nativo: listbox + botón, lista en portal (evita clip por overflow del modal).
 */
export function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  'aria-label': ariaLabel,
}) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const [menuPos, setMenuPos] = useState(null)
  const btnRef = useRef(null)
  const listRef = useRef(null)

  const selected = options.find((o) => o.value === value)
  const display = selected ? selected.label : placeholder

  const updatePosition = useCallback(() => {
    setMenuPos(measureMenu(btnRef.current))
  }, [])

  useEffect(() => {
    if (!open) return
    updatePosition()
    const onScrollOrResize = () => updatePosition()
    window.addEventListener('resize', onScrollOrResize)
    window.addEventListener('scroll', onScrollOrResize, true)
    return () => {
      window.removeEventListener('resize', onScrollOrResize)
      window.removeEventListener('scroll', onScrollOrResize, true)
    }
  }, [open, updatePosition])

  useEffect(() => {
    if (!open || !listRef.current) return
    const id = requestAnimationFrame(() => listRef.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (btnRef.current?.contains(e.target)) return
      if (listRef.current?.contains(e.target)) return
      setOpen(false)
      setHighlight(-1)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        setOpen(false)
        setHighlight(-1)
        btnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [open])

  const pick = (v) => {
    onChange({ target: { name, value: v } })
    setOpen(false)
    setHighlight(-1)
    btnRef.current?.focus()
  }

  const toggle = () => {
    if (open) {
      setOpen(false)
      setHighlight(-1)
      return
    }
    setMenuPos(measureMenu(btnRef.current))
    setOpen(true)
    setHighlight(-1)
  }

  const onBtnKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!open) {
        setMenuPos(measureMenu(btnRef.current))
        setOpen(true)
        setHighlight(0)
      } else {
        setHighlight((h) => Math.min(h < 0 ? 0 : h + 1, options.length - 1))
      }
    }
    if (e.key === 'ArrowUp' && open) {
      e.preventDefault()
      setHighlight((h) => Math.max(h - 1, 0))
    }
  }

  const onListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHighlight((h) => Math.min(h < 0 ? 0 : h + 1, options.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((h) => Math.max(h - 1, 0))
    }
    if (e.key === 'Enter' && highlight >= 0) {
      e.preventDefault()
      pick(options[highlight].value)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      setHighlight(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      setHighlight(options.length - 1)
    }
  }

  useEffect(() => {
    if (!open || highlight < 0) return
    const node = listRef.current?.querySelector(`[data-idx="${highlight}"]`)
    node?.scrollIntoView({ block: 'nearest' })
  }, [highlight, open])

  const listbox =
    open &&
    menuPos &&
    createPortal(
      <ul
        ref={listRef}
        role="listbox"
        tabIndex={0}
        id={`${name}-listbox`}
        onKeyDown={onListKeyDown}
        className="fixed z-[200] overflow-y-auto rounded-lg border border-white/15 bg-[#141414] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.55)] outline-none modal-panel-scroll"
        style={{
          top: menuPos.top,
          left: menuPos.left,
          width: menuPos.width,
          maxHeight: menuPos.maxHeight,
        }}
      >
        {options.map((opt, i) => (
          <li
            key={opt.value}
            role="option"
            data-idx={i}
            aria-selected={value === opt.value}
            className={`cursor-pointer px-3 py-2.5 text-left text-[14px] transition-colors sm:text-[15px] ${
              value === opt.value
                ? 'bg-white/10 text-white'
                : highlight === i
                  ? 'bg-white/[0.07] text-white'
                  : 'text-white/85 hover:bg-white/[0.06]'
            }`}
            onMouseEnter={() => setHighlight(i)}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => pick(opt.value)}
          >
            {opt.label}
          </li>
        ))}
      </ul>,
      document.body
    )

  return (
    <div className="relative w-full">
      <button
        ref={btnRef}
        type="button"
        id={`${name}-trigger`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? `${name}-listbox` : undefined}
        aria-label={ariaLabel}
        aria-required={required}
        className={`flex w-full items-center justify-between gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-3 py-2.5 text-left text-[14px] transition-colors sm:py-2.5 sm:text-[15px] ${
          !value ? 'text-white/40' : 'text-white'
        } hover:border-white/20 hover:bg-white/[0.06] focus:border-white/35 focus:outline-none focus:ring-1 focus:ring-white/20`}
        onClick={toggle}
        onKeyDown={onBtnKeyDown}
      >
        <span className="min-w-0 flex-1 truncate">{display}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-white/45 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M4 5.5L8 9.5 12 5.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {listbox}
    </div>
  )
}
