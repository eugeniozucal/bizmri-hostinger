import React, { useState, useEffect } from 'react'
import { CustomSelect } from './CustomSelect'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xovdpvbq' // Replace with your Formspree form ID

const COMPANY_SIZE_OPTIONS = [
  { value: '1-50', label: '1–50' },
  { value: '51-200', label: '51–200' },
  { value: '201-1000', label: '201–1,000' },
  { value: '1000+', label: '1,000+' },
]

const OBJECTIVE_OPTIONS = [
  { value: 'map-processes', label: 'Map undocumented processes' },
  { value: 'ai-automation', label: 'Identify AI automation opportunities' },
  { value: 'reduce-bottlenecks', label: 'Reduce operational bottlenecks' },
  { value: 'replace-consulting', label: 'Replace slow consulting audits' },
]

export function WaitlistModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    companySize: '',
    jobTitle: '',
    objective: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!formData.companySize || !formData.objective) {
      setError('Please select company size and primary objective.')
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setIsSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-4 sm:px-4 modal-backdrop bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="modal-panel-scroll relative w-full max-w-md min-h-0 max-h-[min(88dvh,680px)] overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-black/95 px-4 py-5 shadow-[0_0_60px_rgba(0,0,0,0.5)] animate-fade-in sm:px-7 sm:py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-md p-1.5 text-white/35 transition-colors hover:bg-white/5 hover:text-white/80 sm:right-4 sm:top-4"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l10 10M14 4L4 14" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="px-0.5 py-6 text-center animate-fade-in sm:py-8">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 sm:mb-6 sm:h-14 sm:w-14">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">Application Received.</h3>
            <p className="text-sm leading-relaxed text-white/45">
              Thank you. Our team will review your organization&apos;s fit and reach out if you&apos;re selected for the
              next cohort.
            </p>
          </div>
        ) : (
          <>
            <h3 className="pr-8 text-lg font-semibold leading-tight text-white sm:pr-10 sm:text-xl">
              Apply for Early Access
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/45 sm:mt-2.5 sm:text-sm sm:leading-snug">
              Invite-only beta. Share your details—we&apos;ll email you if there&apos;s a fit.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4" noValidate>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="floating-input"
                  autoComplete="email"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="floating-input"
                  autoComplete="name"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="floating-input"
                  autoComplete="organization"
                />
              </div>
              <div>
                <CustomSelect
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  options={COMPANY_SIZE_OPTIONS}
                  placeholder="Company size"
                  required
                  aria-label="Company size"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job title / role"
                  className="floating-input"
                  autoComplete="organization-title"
                />
              </div>
              <div>
                <CustomSelect
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  options={OBJECTIVE_OPTIONS}
                  placeholder="Primary objective"
                  required
                  aria-label="Primary objective"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-md bg-white py-3 text-sm font-medium text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] disabled:cursor-not-allowed disabled:opacity-50 sm:py-3.5"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>

            <p className="mt-3 text-center text-[10px] leading-relaxed text-white/25 sm:mt-4">
              By applying, you agree to our Beta Terms of Service. We respect your data privacy.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
