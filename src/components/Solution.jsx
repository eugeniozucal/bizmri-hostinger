import React, { useState, useEffect } from 'react'
import { Mic, ShieldCheck, Play, Pause } from 'lucide-react'
import { Badge } from './ui/Badge'

export const Solution = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeBar, setActiveBar] = useState(0)

  // Simulate waveform animation when playing
  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveBar((prev) => (prev + 1) % 12)
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">THE RADIOGRAPHY</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            COMPLETE VISIBILITY. ZERO FRICTION.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="glass-panel p-6 rounded-lg hover:border-cyan-500/30 transition-colors">
            <div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
              <ActivityIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Evergreen Assessment</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Not a one-time snapshot. A continuous, 24/7 pulse. Our AI agents conduct voice or text interviews that employees actually want to engage with.
            </p>
          </div>

          {/* Feature 2 - Interactive Demo */}
          <div className="glass-panel p-6 rounded-lg border-cyan-500/40 relative overflow-hidden lg:scale-105 shadow-2xl shadow-cyan-900/20">
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Mic className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400">LIVE AGENT DEMO</span>
              </div>
              <Badge variant="outline">AI-VOICE</Badge>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 border border-white/5 mb-4">
              <p className="text-slate-300 italic text-sm mb-4">
                "Hi Sarah, I noticed the engineering team has been running hot lately. Tell me about your main blocker this week?"
              </p>

              {/* Audio Visualizer */}
              <div className="h-12 flex items-center justify-center gap-1 mb-2">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 bg-cyan-500 rounded-full transition-all duration-75 ${isPlaying ? 'waveform-bar' : 'h-1'}`}
                    style={{
                      height: isPlaying ? `${Math.random() * 100}%` : '20%',
                      opacity: isPlaying ? 1 : 0.5
                    }}
                  ></div>
                ))}
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 rounded flex items-center justify-center text-xs font-mono text-white transition-colors"
              >
                {isPlaying ? <><Pause className="w-3 h-3 mr-2" /> PAUSE AGENT</> : <><Play className="w-3 h-3 mr-2" /> HEAR THE EMPATHY</>}
              </button>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">The 'Bite'</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We don't just extract data. We give back. Every employee receives a personalized summary of their 'Pains & Gains' immediately.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-6 rounded-lg hover:border-cyan-500/30 transition-colors">
            <div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Anonymized Insight</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Radical candor requires safety. We aggregate and anonymize sentiment, turning 'venting' into structural data without compromising trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)
