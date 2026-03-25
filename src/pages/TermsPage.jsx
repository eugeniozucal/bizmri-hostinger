import React from 'react'
import { getContactMailto, useI18n } from '../i18n/I18nContext.jsx'

export function TermsPage() {
  const { locale, t } = useI18n()
  const sections = t('termsPage.sections')

  return (
    <main className="flex-1 pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-2">{t('termsPage.h1')}</h1>
        <p className="text-sm text-zinc-500 mb-12">{t('termsPage.lastUpdated')}</p>

        <div className="space-y-8 text-[15px] sm:text-base text-zinc-400 leading-relaxed">
          {sections.map((sec, idx) => (
            <section key={idx}>
              <h2 className="text-lg font-semibold text-zinc-100 mb-3">{sec.h}</h2>
              {sec.p != null && <p>{sec.p}</p>}
              {sec.pPrefix != null && (
                <p>
                  {sec.pPrefix}{' '}
                  <a href={getContactMailto(locale)} className="text-zinc-200 underline underline-offset-2 hover:text-white">
                    contact@bizmri.ai
                  </a>
                </p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
