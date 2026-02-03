import React, { useRef, useState, useMemo } from 'react'
import { Eye, AlertTriangle, Zap, ShieldCheck } from 'lucide-react'
import { Badge } from './ui/Badge'

export const DiagnosticScan = () => {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // Circle radius - bigger for easier reading
  const SCAN_RADIUS = 320

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setContainerSize({ width: rect.width, height: rect.height })
    }
  }

  const scanNodes = [
    {
      id: 'node-1',
      x: 25,
      y: 25,
      label: 'MARKETING',
      status: 'critical',
      insight: 'Severe Disengagement Detected',
      metric: '84% Attrition Risk',
      department: 'Growth Ops'
    },
    {
      id: 'node-2',
      x: 65,
      y: 40,
      label: 'ENGINEERING',
      status: 'warning',
      insight: 'Technical Debt Burnout',
      metric: 'Sprint Velocity -22%',
      department: 'Core Product'
    },
    {
      id: 'node-3',
      x: 45,
      y: 70,
      label: 'SALES',
      status: 'healthy',
      insight: 'High Cultural Cohesion',
      metric: '92% Alignment',
      department: 'Direct Sales'
    },
    {
      id: 'node-4',
      x: 80,
      y: 80,
      label: 'HR / PEOPLE',
      status: 'warning',
      insight: 'Administrative Overload',
      metric: '1:620 PBP Ratio',
      department: 'Corporate'
    }
  ]

  // Find the closest node to the cursor (only show ONE tooltip)
  const closestNodeId = useMemo(() => {
    if (!isHovering || containerSize.width === 0) return null

    let closestId = null
    let closestDist = Infinity

    scanNodes.forEach((node) => {
      const nodeX = (node.x / 100) * containerSize.width
      const nodeY = (node.y / 100) * containerSize.height
      const dist = Math.sqrt(Math.pow(mousePosition.x - nodeX, 2) + Math.pow(mousePosition.y - nodeY, 2))

      if (dist < SCAN_RADIUS && dist < closestDist) {
        closestDist = dist
        closestId = node.id
      }
    })

    return closestId
  }, [mousePosition, containerSize, isHovering])

  return (
    <section id="scan" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="cyan" className="mb-4">SYSTEM RADIOGRAPHY</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            THE MRI FOR <span className="text-cyan-400">HUMAN CAPITAL.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Move beyond superficial metrics. Our scanner visualizes the hidden health of your organization, detecting pathology before it leads to failure.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Legend / Key Findings */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="text-red-500 w-5 h-5" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Critical Finding</h3>
              </div>
              <p className="text-slate-300 text-sm">Marketing shows advanced signs of "Middle Management Friction." High turnover probable within 90 days if left unaddressed.</p>
            </div>

            <div className="glass-panel p-6 rounded-lg border-l-4 border-cyan-400">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-cyan-400 w-5 h-5" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm">Optimal Flow</h3>
              </div>
              <p className="text-slate-300 text-sm">Sales team sentiment is at an all-time high. Strategic alignment with product goals is optimal (92% correlation).</p>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500">SCAN ACCURACY:</span>
                <span className="text-cyan-400">99.8%</span>
              </div>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[99.8%] h-full bg-cyan-500"></div>
              </div>
            </div>
          </div>

          {/* Interactive Scan Area */}
          <div
            className="lg:col-span-8 relative h-[650px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 cursor-none shadow-3xl group"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Background Architecture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale opacity-10 blur-sm"
                alt="Technical Schematic"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-transparent to-slate-950/90"></div>
            </div>

            {/* Scanning Logic Layer */}
            <div
              className="absolute inset-0 bg-slate-900 pointer-events-none transition-opacity duration-500"
              style={{
                clipPath: isHovering ? `circle(${SCAN_RADIUS}px at ${mousePosition.x}px ${mousePosition.y}px)` : 'circle(0px at 50% 50%)',
                backgroundImage: 'radial-gradient(circle at center, rgba(34,211,238,0.1) 0%, transparent 70%)'
              }}
            >
              <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>

              {scanNodes.map((node) => {
                const nodeX = (node.x / 100) * containerSize.width
                const nodeY = (node.y / 100) * containerSize.height
                const dist = Math.sqrt(Math.pow(mousePosition.x - nodeX, 2) + Math.pow(mousePosition.y - nodeY, 2))
                const isNear = dist < SCAN_RADIUS
                const isClosest = node.id === closestNodeId

                // Position tooltip to avoid edges
                const tooltipOnLeft = node.x > 55
                const tooltipOnTop = node.y > 65

                return (
                  <div
                    key={node.id}
                    className="absolute"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      zIndex: isClosest ? 100 : 10
                    }}
                  >
                    <div className={`relative flex items-center justify-center transition-all duration-500 ${isNear ? 'scale-125' : 'scale-100'}`}>
                      <div className={`absolute w-12 h-12 rounded-full blur-xl transition-opacity duration-500 ${isNear ? 'opacity-100' : 'opacity-0'} ${node.status === 'critical' ? 'bg-red-500/40' :
                          node.status === 'warning' ? 'bg-amber-500/40' : 'bg-cyan-500/40'
                        }`}></div>

                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-20 ${node.status === 'critical' ? 'border-red-500 bg-red-950' :
                          node.status === 'warning' ? 'border-amber-500 bg-amber-950' : 'border-cyan-500 bg-cyan-950'
                        } ${isNear ? 'animate-pulse' : ''}`}>
                        {node.status === 'critical' ? <AlertTriangle className="w-3 h-3 text-red-500" /> : <Zap className="w-3 h-3 text-cyan-400" />}
                      </div>

                      {/* Only show tooltip for the CLOSEST node */}
                      <div className={`absolute w-64 glass-panel border border-white/20 rounded-lg p-4 pointer-events-none transition-all duration-300 backdrop-blur-xl shadow-2xl z-[110] ${tooltipOnLeft ? 'right-10' : 'left-10'
                        } ${tooltipOnTop ? 'bottom-0' : 'top-0'
                        } ${isClosest ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="text-[10px] font-mono text-cyan-500 block uppercase tracking-tighter mb-0.5">Diagnostic Unit</span>
                            <span className="text-white font-bold text-base tracking-wide">{node.label}</span>
                          </div>
                          <Badge variant={node.status === 'critical' ? 'alert' : 'outline'} className="text-[10px] px-2 py-1">
                            {node.status.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-[9px] font-mono text-slate-500 block uppercase mb-1">Pathology Finding</span>
                            <span className={`text-sm leading-snug font-medium block ${node.status === 'critical' ? 'text-red-400' : 'text-slate-200'}`}>
                              {node.insight}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-white/10 flex justify-between items-end">
                            <div>
                              <span className="text-[9px] font-mono text-slate-500 block uppercase">Department</span>
                              <span className="text-xs text-slate-300 font-mono">{node.department}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-[9px] font-mono text-slate-500 block uppercase">Risk Factor</span>
                              <span className="text-sm font-bold text-cyan-400 font-mono">{node.metric}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}

              <svg className="absolute inset-0 w-full h-full opacity-30 stroke-cyan-500/20" strokeWidth="1">
                <line x1="25%" y1="25%" x2="65%" y2="40%" />
                <line x1="65%" y1="40%" x2="45%" y2="70%" />
                <line x1="45%" y1="70%" x2="80%" y2="80%" />
              </svg>
            </div>

            {/* Custom Scanner Cursor - also bigger */}
            <div
              className="absolute pointer-events-none w-[580px] h-[580px] -translate-x-1/2 -translate-y-1/2 z-[150]"
              style={{
                left: mousePosition.x,
                top: mousePosition.y,
                opacity: isHovering ? 1 : 0,
                transition: 'opacity 0.2s'
              }}
            >
              <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-8 border border-cyan-400/40 border-dashed rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
                <div className="absolute w-[1px] h-full bg-cyan-400/50"></div>
                <div className="absolute w-full h-[1px] bg-cyan-400/50"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
              </div>

              <div className="absolute top-0 right-0 font-mono text-[10px] text-cyan-400 bg-slate-900/90 px-3 py-1.5 border border-cyan-500/30 backdrop-blur rounded shadow-lg">
                LAT: {Math.round(mousePosition.x)}<br />
                LNG: {Math.round(mousePosition.y)}
              </div>
            </div>

            {!isHovering && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px] z-[200] transition-all duration-700">
                <div className="text-center group">
                  <a href="#waitlist" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 border border-cyan-500/50 rounded-full text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-all duration-300 cursor-pointer animate-bounce">
                    <Eye className="w-5 h-5" />
                    <span className="text-sm font-mono tracking-widest font-bold">INITIATE DEEP SCAN</span>
                  </a>
                  <p className="mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Hardware Layer 01 // Biometric Sync Ready</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
