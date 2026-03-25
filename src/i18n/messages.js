import en from './locales/en.js'
import es from './locales/es.js'
import pt from './locales/pt.js'

export const LOCALE_STORAGE_KEY = 'bizmri-locale'
export const DEFAULT_LOCALE = 'en'

export const messages = { en, es, pt }

export function normalizeLocale(raw) {
  const v = String(raw || '').toLowerCase()
  if (v === 'es' || v.startsWith('es-')) return 'es'
  if (v === 'pt' || v.startsWith('pt')) return 'pt'
  return 'en'
}
