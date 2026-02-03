import React, { useState } from 'react'
import { ArrowRight, Lock, FileCheck, CheckCircle2, Shield } from 'lucide-react'
import { Button } from './ui/Button'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Logic to simulate routing to fda@aiworkify.com
      console.log(`Routing waitlist request for ${email} to fda@aiworkify.com`)
      setIsSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer id="waitlist" className="bg-slate-950 pt-32 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        <div className="max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Shield className="w-3 h-3" /> Secure Access Terminal
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">
            READY TO REVEAL THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">HUMAN ELEMENT IN AI?</span>
          </h2>

          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Secure priority access to the BIZMRI Beta. Deploy your first diagnostic scan and see the truth behind your workforce data.
          </p>

          {isSubmitted ? (
            <div className="glass-panel p-10 rounded-xl border border-cyan-500/40 flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500 max-w-lg mx-auto shadow-[0_0_50px_rgba(34,211,238,0.1)]">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl uppercase tracking-widest mb-2">Transmission Confirmed</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Request successfully routed to <span className="text-cyan-400 font-mono">fda@aiworkify.com</span>.<br />
                  Our team will contact you shortly for technical onboarding.
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-lg mx-auto group">
              <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2 p-2 bg-slate-900/50 border border-slate-700 rounded-lg focus-within:border-cyan-500/50 transition-all duration-300">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Work Email"
                  className="flex-1 bg-transparent text-white px-4 py-3 rounded focus:outline-none font-medium placeholder:text-slate-600"
                />
                <Button type="submit" variant="primary" className="h-12 px-8 uppercase tracking-widest text-xs font-bold whitespace-nowrap">
                  REQUEST ACCESS <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
              <p className="mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Encrypted with AES-256 Protocol // Direct Route to Engineering
              </p>
            </div>
          )}

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-[11px] text-slate-500 font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2 group cursor-default">
              <Lock className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" /> SOC2 COMPLIANT
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <FileCheck className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" /> GDPR PROTECTED
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Shield className="w-3.5 h-3.5 group-hover:text-cyan-400 transition-colors" /> ZERO-KNOWLEDGE PRIVACY
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
              © 2026 Ai Workify / The Raidar
            </div>
          </div>
          <div className="flex gap-8 text-[10px] text-slate-500 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Security</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Decorative Scan Line at very bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.1)]"></div>
    </footer>
  )
}
