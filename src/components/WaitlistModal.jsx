import React, { useState, useEffect } from 'react'
import { CustomSelect } from './CustomSelect'
import { useI18n } from '../i18n/I18nContext.jsx'
import { WAITLIST_REGISTER_URL, buildWaitlistPayload } from '../config/waitlist.js'

export function WaitlistModal({ isOpen, onClose }) {
  const { t } = useI18n()
  const companySizeOptions = t('waitlist.companySizes')
  const objectiveOptions = t('waitlist.objectives')
  const heardAboutOptions = t('waitlist.heardAboutOptions')

  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    company: '',
    companySize: '',
    jobTitle: '',
    objective: '',
    heardAbout: '',
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

    if (!formData.email.trim() || !formData.fullName.trim() || !formData.company.trim()) {
      setError(t('waitlist.errRequired'))
      return
    }

    setIsSubmitting(true)

    const payload = buildWaitlistPayload(formData, objectiveOptions, heardAboutOptions)
    const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
    const anon = import.meta.env.VITE_SUPABASE_ANON_KEY
    if (anon) headers.Authorization = `Bearer ${anon}`

    try {
      const res = await fetch(WAITLIST_REGISTER_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setIsSubmitted(true)
      } else {
        let msg = t('waitlist.errGeneric')
        try {
          const data = await res.json()
          if (data?.error) msg = typeof data.error === 'string' ? data.error : msg
          else if (data?.message) msg = typeof data.message === 'string' ? data.message : msg
        } catch {
          /* ignore */
        }
        setError(msg)
      }
    } catch {
      setError(t('waitlist.errNetwork'))
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-4 sm:px-4 modal-backdrop bg-black/70"
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
          aria-label={t('waitlist.close')}
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
            <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{t('waitlist.successTitle')}</h3>
            <p className="text-sm leading-relaxed text-white/45">{t('waitlist.successBody')}</p>
          </div>
        ) : (
          <>
            <h3 className="pr-8 text-lg font-semibold leading-tight text-white sm:pr-10 sm:text-xl">{t('waitlist.title')}</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/45 sm:mt-2.5 sm:text-sm sm:leading-snug">{t('waitlist.subtitle')}</p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 sm:mt-6 sm:space-y-4" noValidate>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('waitlist.emailPh')}
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
                  placeholder={t('waitlist.fullNamePh')}
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
                  placeholder={t('waitlist.companyPh')}
                  className="floating-input"
                  autoComplete="organization"
                />
              </div>
              <div>
                <CustomSelect
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  options={companySizeOptions}
                  placeholder={t('waitlist.companySizePh')}
                  aria-label={t('waitlist.companySizeAria')}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder={t('waitlist.jobTitlePh')}
                  className="floating-input"
                  autoComplete="organization-title"
                />
              </div>
              <div>
                <CustomSelect
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  options={objectiveOptions}
                  placeholder={t('waitlist.objectivePh')}
                  aria-label={t('waitlist.objectiveAria')}
                />
              </div>
              <div>
                <CustomSelect
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleChange}
                  options={heardAboutOptions}
                  placeholder={t('waitlist.heardAboutPh')}
                  aria-label={t('waitlist.heardAboutAria')}
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-md border border-emerald-800 bg-emerald-800 py-3 text-sm font-medium text-white shadow-[0_4px_14px_rgba(6,95,70,0.45)] transition-all duration-300 hover:border-emerald-900 hover:bg-emerald-900 hover:shadow-[0_6px_22px_rgba(6,78,59,0.5)] disabled:cursor-not-allowed disabled:opacity-50 sm:py-3.5"
              >
                {isSubmitting ? t('waitlist.submitting') : t('waitlist.submit')}
              </button>
            </form>

            <p className="mt-3 text-center text-[10px] leading-relaxed text-white/25 sm:mt-4">{t('waitlist.legal')}</p>
          </>
        )}
      </div>
    </div>
  )
}
