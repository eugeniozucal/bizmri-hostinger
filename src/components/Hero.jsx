import React, { useEffect, useState } from 'react'
import { getContactMailto, useI18n } from '../i18n/I18nContext.jsx'

export function Hook() {
  const { locale, t } = useI18n()
  const [visible, setVisible] = useState(false)
  const [subVisible, setSubVisible] = useState(false)
  const [ctaVisible, setCtaVisible] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 200)
    const t2 = setTimeout(() => setSubVisible(true), 900)
    const t3 = setTimeout(() => setCtaVisible(true), 1600)
    const t4 = setTimeout(() => setContactVisible(true), 1950)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

  const fadeUp = (show) =>
    `transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

  const body =
    'text-left text-base sm:text-lg md:text-xl leading-[1.5] sm:leading-[1.55] font-light tracking-normal max-w-2xl w-full'

  const contactBtnClass =
    'inline-flex items-center justify-center self-start px-8 py-3.5 rounded-md text-sm font-medium text-white bg-emerald-800 border border-emerald-800 shadow-[0_4px_14px_rgba(6,95,70,0.45)] hover:bg-emerald-900 hover:border-emerald-900 hover:shadow-[0_6px_22px_rgba(6,78,59,0.5)] active:scale-[0.98] transition-all duration-300'

  const bodyText = t('hero.body')
  const [beforeBrand, afterBrand] = bodyText.includes('{brand}')
    ? bodyText.split('{brand}')
    : [bodyText, '']

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center">
      <div
        className={`flex w-full max-w-3xl flex-1 flex-col justify-center px-4 pb-14 pt-[calc(3.5rem+1.25rem+env(safe-area-inset-top,0px))] sm:mx-auto sm:px-6 sm:pb-20 ${fadeUp(visible)}`}
      >
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h1 className="text-left text-[1.65rem] font-bold leading-[1.15] tracking-tight text-zinc-100 max-w-2xl w-full sm:text-3xl md:text-4xl lg:text-5xl sm:leading-[1.12]">
              {t('hero.h1')}
            </h1>

            <p className={`${body} text-zinc-400 ${fadeUp(subVisible)}`}>{t('hero.sub')}</p>
          </div>

          <p className={`${body} text-zinc-300 ${fadeUp(ctaVisible)}`}>
            {beforeBrand}
            <span className="font-semibold text-zinc-50">{t('hero.brand')}</span>
            {afterBrand}
          </p>

          <a
            href={getContactMailto(locale)}
            className={`${contactBtnClass} mt-2 sm:mt-3 ${fadeUp(contactVisible)}`}
          >
            {t('hero.cta')}
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator sm:bottom-10">
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/35 to-transparent mx-auto sm:h-12"></div>
      </div>
    </section>
  )
}
