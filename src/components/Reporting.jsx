import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: 'Eng.', value: 85, type: 'healthy' },
  { name: 'Ops', value: 45, type: 'critical' },
  { name: 'Ret.', value: 70, type: 'warning' },
  { name: 'Trust', value: 90, type: 'healthy' },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-2 text-xs font-mono">
        <p className="text-white">{`${payload[0].payload.name}: ${payload[0].value}%`}</p>
        <p className="text-slate-400">{payload[0].payload.type === 'critical' ? 'ACTION REQUIRED' : 'STABLE'}</p>
      </div>
    )
  }
  return null
}

export const Reporting = () => {
  return (
    <section id="reporting" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 relative">
            <div className="glass-panel p-6 rounded-lg border border-slate-700 shadow-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h4 className="font-mono text-sm text-slate-400">EXECUTIVE_READINESS_Q3.PDF</h4>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fontSize: 12, fontFamily: 'monospace' }} axisLine={false} tickLine={false} />
                    <YAxis stroke="#64748b" tick={{ fontSize: 12, fontFamily: 'monospace' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'critical' ? '#ef4444' : entry.type === 'warning' ? '#f59e0b' : '#22d3ee'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 flex gap-4 text-xs font-mono">
                <div className="flex items-center gap-1 text-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-sm"></span> CRITICAL
                </div>
                <div className="flex items-center gap-1 text-cyan-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-sm"></span> OPTIMAL
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 bg-white text-slate-900 px-4 py-2 font-bold font-mono text-sm transform rotate-3 shadow-lg">
              GENERATED IN 45s
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              FROM INTERVIEW TO EXECUTIVE REPORT IN MINUTES.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Accelerate your impact. Skip the weeks of data compiling. Generate 'Executive Readiness' reports that visualize Economic Impact, Quick Wins, and Strategic Transformation opportunities.
            </p>
            <p className="text-white font-medium mb-8">
              Make HR the most data-driven department in the room.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
