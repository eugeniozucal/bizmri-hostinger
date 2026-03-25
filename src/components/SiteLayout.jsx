import React from 'react'
import { Outlet } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function SiteLayout({ onOpenModal }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-zinc-100 scroll-smooth flex flex-col">
      <ScrollToTop />
      <Navbar onOpenModal={onOpenModal} />
      <Outlet />
      <Footer />
    </div>
  )
}
