import React from 'react'
import { AlertCircle, Clock, Users, FileSpreadsheet } from 'lucide-react'

export const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-red-500 w-5 h-5" />
              <span className="text-red-500 font-mono text-sm tracking-widest uppercase">The Blind Spot</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              YOU CANNOT SCALE EMPATHY MANUALLY.
            </h2>
            <div className="space-y-6 text-slate-400">
              <p className="text-lg">
                A People Business Partner drowning in spreadsheets is unable to track 500+ employees. You are chasing ghosts.
              </p>
              <p>
                Annual surveys are too slow, and manual 1:1s are mathematically impossible at scale. By the time you find the problem, the talent has already left.
              </p>
              <p className="text-white font-medium border-l-2 border-red-500 pl-4">
                You are flying blind.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-transparent rounded-lg blur-xl"></div>
            <div className="glass-panel p-8 rounded-lg border-l-4 border-red-500 relative z-10">
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h3 className="text-sm font-mono text-slate-400">STATUS: OVERLOADED</h3>
                <Clock className="w-4 h-4 text-red-500" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-300">Employees per PBP</span>
                  </div>
                  <span className="font-mono text-red-500">1:540</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-300">Data Lag Time</span>
                  </div>
                  <span className="font-mono text-red-500">~6 Weeks</span>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="bg-red-500/10 p-4 rounded border border-red-500/20 text-xs font-mono text-red-400">
                    WARNING: 87% of exit interviews cite issues that were detectable 3 months prior.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
