import React from 'react'
import { Activity } from 'lucide-react'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold tracking-wider text-white">BIZMRI</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#precision" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Diagnosis</a>
              <a href="#scan" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">The Scan</a>
              <a href="#reporting" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Reports</a>
              <a href="#waitlist" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors font-bold text-cyan-400">Join Waitlist</a>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              v1.0.4-beta
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}
