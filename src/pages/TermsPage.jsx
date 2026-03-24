import React from 'react'
import { CONTACT_HREF } from '../contactHref'

export function TermsPage() {
  return (
    <main className="flex-1 pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-black/40 mb-12">Last updated: March 24, 2026</p>

        <div className="space-y-8 text-[15px] sm:text-base text-black/55 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-black mb-3">1. Agreement</h2>
            <p>
              By accessing or using bizMRI.ai (&quot;Service&quot;), operated by bizMRI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">2. The Service</h2>
            <p>
              bizMRI provides software and related services to help organizations discover, document, and analyze operational knowledge and processes. Features, availability, and pricing may change. We may suspend or discontinue parts of the Service with reasonable notice where practicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">3. Accounts and eligibility</h2>
            <p>
              You must provide accurate information when registering or joining a waitlist or beta. You are responsible for safeguarding credentials and for activity under your account. You must comply with applicable laws and not misuse the Service (including probing, scraping, or interfering with security or performance).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">4. Your data and content</h2>
            <p>
              You retain rights to data and content you submit. You grant us a limited license to host, process, and use that material solely to provide and improve the Service, as described in our Privacy Policy. You represent that you have the rights needed to share such data with us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">5. Intellectual property</h2>
            <p>
              The Service, including software, branding, and documentation, is owned by bizMRI or its licensors. Except for the limited rights expressly granted here, no rights are transferred to you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">6. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee uninterrupted or error-free operation or that outputs (including analyses or recommendations) will meet your requirements or be suitable for any particular decision.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">7. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, bizMRI and its suppliers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill. Our aggregate liability for any claim arising out of these Terms or the Service shall not exceed the greater of (a) amounts you paid us for the Service in the twelve months before the claim or (b) one hundred U.S. dollars (US$100), if you have not paid fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">8. Changes</h2>
            <p>
              We may update these Terms from time to time. We will post the revised version on this page and update the &quot;Last updated&quot; date. Continued use after changes constitutes acceptance. Material changes may require additional notice where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">9. Contact</h2>
            <p>
              Questions about these Terms:{' '}
              <a href={CONTACT_HREF} className="text-black/80 underline underline-offset-2 hover:text-black">
                contact@bizmri.ai
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
