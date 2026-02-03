import React from 'react'
import { CheckCircle2, AlertTriangle, Activity } from 'lucide-react'
import { Badge } from './ui/Badge'

export const PrecisionDiagnostics = () => {
  const features = [
    {
      title: "AI-Powered Assessments",
      description: "Smart questionnaires that adapt and provide instant insights on organizational health."
    },
    {
      title: "Real-Time Health Scores",
      description: "Monitor KPIs, stress levels, PTO patterns, and leadership relationships continuously."
    },
    {
      title: "C-Level Ready Reports",
      description: "Generate executive summaries instantly with actionable recommendations."
    },
    {
      title: "Bottleneck Detection",
      description: "Like an MRI for your business—find process bottlenecks and resource constraints."
    }
  ]

  const departments = [
    { name: "Engineering", score: 85, color: "bg-cyan-400" },
    { name: "Sales", score: 72, color: "bg-cyan-500" },
    { name: "Marketing", score: 68, color: "bg-amber-500" },
    { name: "Operations", score: 91, color: "bg-teal-400" }
  ]

  return (
    <section id="precision" className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Diagnose Your Organization <br />
              with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">AI Precision</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
              BIZMRI gives you a complete health scan of your organization, identifying bottlenecks, engagement risks, and growth opportunities before they become problems.
            </p>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Card */}
          <div className="relative">
            {/* Decorative elements behind card */}
            <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-3xl opacity-50"></div>

            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  Department Health Overview
                </h3>
                <Badge variant="outline" className="font-mono text-[10px]">REAL-TIME TELEMETRY</Badge>
              </div>

              <div className="space-y-8 mb-10">
                {departments.map((dept, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center font-mono text-sm">
                      <span className="text-slate-300 uppercase tracking-wider">{dept.name}</span>
                      <span className={`font-bold ${dept.score < 70 ? 'text-amber-500' : 'text-cyan-400'}`}>{dept.score}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${dept.color} shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-1000 ease-out`}
                        style={{ width: `${dept.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert Box */}
              <div className="bg-red-500/5 border-l-4 border-red-500 p-5 rounded-r-lg flex gap-4 items-start animate-[pulse_4s_infinite]">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-bold mb-1">
                    <span className="text-red-500 uppercase tracking-tighter mr-2">Alert:</span>
                    Marketing Burnout Detected
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Marketing team showing early signs of burnout. Recommend immediate attention to growth-ops structure.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Data Decorator */}
            <div className="absolute -bottom-6 -right-6 glass-panel border border-white/10 px-4 py-3 rounded shadow-xl hidden md:block">
              <div className="text-[10px] font-mono text-slate-500 uppercase mb-1">Confidence Score</div>
              <div className="text-xl font-bold text-cyan-400 font-mono">98.2%</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
