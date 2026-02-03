import React from 'react'

export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "border-cyan-500 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    secondary: "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white",
    ghost: "border-transparent text-slate-400 hover:text-cyan-400",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
