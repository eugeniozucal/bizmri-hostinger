import React from 'react'

export const Badge = ({ children, variant = 'cyan', className = '' }) => {
  const variants = {
    cyan: "bg-cyan-950/30 text-cyan-400 border-cyan-500/30",
    alert: "bg-red-950/30 text-red-400 border-red-500/30",
    outline: "bg-transparent text-slate-400 border-slate-700",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono border ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
