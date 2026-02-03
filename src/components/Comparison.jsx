import React from 'react'
import { FileText, MessageSquare } from 'lucide-react'

export const Comparison = () => {
  return (
    <section className="py-24 bg-slate-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 border border-slate-700 rounded-xl overflow-hidden">

          {/* Old Era */}
          <div className="p-12 bg-slate-900/50 text-slate-500 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-700">
            <div className="mb-6 opacity-50">
              <FileText className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">OLD ERA</h3>
              <p className="font-mono text-sm uppercase tracking-widest">SurveyMonkey / Qualtrics</p>
            </div>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                Static Forms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                Low Response Rates (~12%)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                "Fill this out by Friday"
              </li>
            </ul>
          </div>

          {/* New Era */}
          <div className="p-12 bg-slate-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="mb-6 text-cyan-400">
                <MessageSquare className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">NEW ERA</h3>
                <p className="font-mono text-sm uppercase tracking-widest">BIZMRI INTELLIGENCE</p>
              </div>
              <ul className="space-y-4 font-mono text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"></span>
                  Dynamic Conversation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"></span>
                  Empathetic Probing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"></span>
                  "Tell me about your day"
                </li>
              </ul>
              <div className="mt-8 p-4 bg-cyan-950/30 border border-cyan-500/20 rounded text-cyan-200 text-sm italic">
                "We turn unstructured venting into structured strategy."
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
