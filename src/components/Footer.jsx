import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-black py-8 px-6 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[11px] text-white/25">
          © 2026 bizMRI.ai — All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-[11px] text-white/25">
          <Link to="/terms" className="hover:text-white/50 transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="hover:text-white/50 transition-colors">
            Privacy
          </Link>
          <Link to="/contact" className="hover:text-white/50 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
