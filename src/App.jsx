import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { RouteSeo } from './seo/RouteSeo'
import { SiteLayout } from './components/SiteLayout'
import { Home } from './pages/Home'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ContactPage } from './pages/ContactPage'
import { WaitlistModal } from './components/WaitlistModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <RouteSeo />
      <Routes>
        <Route path="/" element={<SiteLayout onOpenModal={openModal} />}>
          <Route index element={<Home onOpenModal={openModal} />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <WaitlistModal isOpen={modalOpen} onClose={closeModal} />
    </>
  )
}

export default App
