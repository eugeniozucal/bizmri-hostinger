import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { PrecisionDiagnostics } from './components/PrecisionDiagnostics'
import { Solution } from './components/Solution'
import { DiagnosticScan } from './components/DiagnosticScan'
import { Comparison } from './components/Comparison'
import { PlatformShowcase } from './components/PlatformShowcase'
import { Reporting } from './components/Reporting'
import { SocialProof } from './components/SocialProof'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-100 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <PrecisionDiagnostics />
        <Solution />
        <DiagnosticScan />
        <Comparison />
        <PlatformShowcase />
        <Reporting />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}

export default App
