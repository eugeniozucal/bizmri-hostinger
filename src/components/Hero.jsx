import React, { useEffect, useState } from 'react'
import { CONTACT_HREF } from '../contactHref'

export function Hook() {
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
    'text-base sm:text-lg md:text-xl leading-[1.5] sm:leading-[1.55] font-light tracking-normal max-w-2xl mx-auto'

  const contactBtnClass =
    'inline-flex items-center justify-center self-center px-8 py-3.5 rounded-md text-sm font-medium text-white bg-indigo-600 border border-indigo-600 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:bg-indigo-700 hover:border-indigo-700 hover:shadow-[0_6px_22px_rgba(79,70,229,0.45)] active:scale-[0.98] transition-all duration-300'

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center">
      {/* pt clears fixed nav (h-14); inner flex-1 + justify-center avoids tucking content under the bar */}
      <div
        className={`flex w-full max-w-3xl flex-1 flex-col justify-center px-4 pb-14 pt-[calc(3.5rem+1.25rem+env(safe-area-inset-top,0px))] sm:mx-auto sm:px-6 sm:pb-20 ${fadeUp(visible)}`}
      >
        <div className="flex flex-col gap-3 sm:gap-3.5">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h1 className="text-[1.65rem] font-bold leading-[1.15] tracking-tight text-black max-w-2xl mx-auto sm:text-3xl md:text-4xl lg:text-5xl sm:leading-[1.12]">
              Did you know 80% of your business processes are undocumented?
            </h1>

            <p className={`${body} text-black/50 ${fadeUp(subVisible)}`}>
              They exist only as tribal knowledge inside your employees&apos; heads.
            </p>
          </div>

          <p className={`${body} text-black/80 ${fadeUp(ctaVisible)}`}>
            With <span className="font-semibold text-black">bizMRI</span>, gather the information, gain full visibility, and take back the power to make better decisions.
          </p>

          <a
            href={CONTACT_HREF}
            className={`${contactBtnClass} mt-2 sm:mt-3 ${fadeUp(contactVisible)}`}
          >
            Contact us
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator sm:bottom-10">
        <div className="w-[1px] h-10 bg-gradient-to-b from-black/40 to-transparent mx-auto sm:h-12"></div>
      </div>
    </section>
  )
}
