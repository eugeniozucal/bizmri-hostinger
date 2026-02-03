import React from 'react'

export const SocialProof = () => {
  const metrics = [
    { label: "COVERAGE", value: "100%", sub: "Interview 500+ employees simultaneously" },
    { label: "PULSE", value: "REAL-TIME", sub: "Detect stress spikes instantly" },
    { label: "TRUST", value: "AUDITABLE", sub: "Human-in-the-loop verification" },
  ]

  const logos = [
    { name: "NebulaCorp", icon: "N" },
    { name: "VortexSystems", icon: "V" },
    { name: "ApexIndustrial", icon: "A" },
    { name: "ZenithGlobal", icon: "Z" },
    { name: "EtherTech", icon: "E" }
  ]

  return (
    <section className="py-20 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center p-6 border-r border-white/5 last:border-0 group">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 font-mono tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {metric.value}
              </div>
              <div className="text-white font-bold tracking-widest text-sm mb-2 uppercase">
                {metric.label}
              </div>
              <div className="text-slate-500 text-sm font-light">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5">
          <p className="text-center text-[10px] font-mono text-slate-600 uppercase tracking-[0.4em] mb-10">
            SECURED & TRUSTED BY ARCHITECTS OF THE FUTURE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 group cursor-pointer">
                <div className="w-10 h-10 border border-slate-700 rounded flex items-center justify-center font-bold text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-colors">
                  {logo.icon}
                </div>
                <span className="font-bold text-lg tracking-tight text-slate-400 group-hover:text-white transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
