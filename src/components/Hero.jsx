import React from 'react'
import { ChevronRight, ScanLine } from 'lucide-react'
import { Button } from './ui/Button'
import { Badge } from './ui/Badge'

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Corporate Architecture"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 flex justify-center">
          <Badge variant="cyan" className="animate-pulse shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></span>
            SYSTEM STATUS: OPERATIONAL
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          STOP GUESSING. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-teal-300">
            START SCANNING.
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed font-light">
          Manual assessments are obsolete. BIZMRI deploys empathetic AI agents to interview your entire workforce simultaneously, delivering a real-time radiography of your organizational health.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#waitlist">
            <Button variant="primary" className="group h-14 px-8 text-base">
              <ScanLine className="w-5 h-5 mr-2" />
              START DIAGNOSTIC
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        <p className="mt-6 text-xs font-mono text-cyan-500/60 tracking-[0.2em] uppercase">
          TRUSTED BY GLOBAL ENTERPRISES &gt; 400 EMPLOYEES
        </p>
      </div>

      {/* Decorative Scan Lines */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent z-10"></div>
    </section>
  )
}
