import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, messages, normalizeLocale } from './messages'

function getByPath(obj, path) {
  if (!path) return undefined
  return path.split('.').reduce((o, key) => (o == null ? undefined : o[key]), obj)
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return DEFAULT_LOCALE
    return normalizeLocale(localStorage.getItem(LOCALE_STORAGE_KEY))
  })

  const setLocale = useCallback((next) => {
    const n = normalizeLocale(next)
    setLocaleState(n)
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, n)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    const map = { en: 'en', es: 'es', pt: 'pt-BR' }
    document.documentElement.lang = map[locale] || 'en'
  }, [locale])

  const t = useCallback((path) => getByPath(messages[locale], path), [locale])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

export function getContactMailto(locale) {
  const l = normalizeLocale(locale)
  const subj = messages[l]?.contact?.mailSubject || messages.en.contact.mailSubject
  return `mailto:contact@bizmri.ai?subject=${encodeURIComponent(subj)}`
}
