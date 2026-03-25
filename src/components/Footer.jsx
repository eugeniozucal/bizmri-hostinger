import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nContext.jsx'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="bg-zinc-100 py-8 px-6 border-t border-black/10 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[11px] text-neutral-500">{t('footer.rights')}</div>
        <div className="flex flex-wrap justify-center gap-6 text-[11px] text-neutral-500">
          <Link to="/terms" className="hover:text-neutral-900 transition-colors">
            {t('footer.terms')}
          </Link>
          <Link to="/privacy" className="hover:text-neutral-900 transition-colors">
            {t('footer.privacy')}
          </Link>
          <Link to="/contact" className="hover:text-neutral-900 transition-colors">
            {t('footer.contact')}
          </Link>
        </div>
      </div>
    </footer>
  )
}
