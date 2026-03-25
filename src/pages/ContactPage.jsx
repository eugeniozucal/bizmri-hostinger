import React from 'react'
import { getContactMailto, useI18n } from '../i18n/I18nContext.jsx'

export function ContactPage() {
  const { locale, t } = useI18n()
  return (
    <main className="flex-1 pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">{t('contactPage.h1')}</h1>
        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-xl mx-auto sm:mx-0">{t('contactPage.intro')}</p>

        <a
          href={getContactMailto(locale)}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium text-white bg-emerald-800 border border-emerald-800 shadow-[0_4px_14px_rgba(6,95,70,0.45)] hover:bg-emerald-900 hover:border-emerald-900 hover:shadow-[0_6px_22px_rgba(6,78,59,0.5)] active:scale-[0.98] transition-all duration-300"
        >
          {t('contactPage.cta')}
        </a>

        <p className="mt-10 text-sm text-zinc-500">
          {t('contactPage.direct')}{' '}
          <a href={getContactMailto(locale)} className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2">
            contact@bizmri.ai
          </a>
        </p>
      </div>
    </main>
  )
}
