import React from 'react'
import { CONTACT_HREF } from '../contactHref'

export function ContactPage() {
  return (
    <main className="flex-1 pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-4">
          Contact
        </h1>
        <p className="text-lg text-black/50 font-light leading-relaxed mb-10 max-w-xl mx-auto sm:mx-0">
          Reach out for product questions, partnerships, press, or enterprise inquiries. We read every message.
        </p>

        <a
          href={CONTACT_HREF}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-md text-sm font-medium text-white bg-indigo-600 border border-indigo-600 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:bg-indigo-700 hover:border-indigo-700 hover:shadow-[0_6px_22px_rgba(79,70,229,0.45)] active:scale-[0.98] transition-all duration-300"
        >
          Email us
        </a>

        <p className="mt-10 text-sm text-black/40">
          Direct:{' '}
          <a href={CONTACT_HREF} className="text-black/60 hover:text-black underline underline-offset-2">
            contact@bizmri.ai
          </a>
        </p>
      </div>
    </main>
  )
}
