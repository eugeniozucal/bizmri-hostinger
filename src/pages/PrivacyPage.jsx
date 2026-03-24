import React from 'react'
import { CONTACT_HREF } from '../contactHref'

export function PrivacyPage() {
  return (
    <main className="flex-1 pt-20 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-black/40 mb-12">Last updated: March 24, 2026</p>

        <div className="space-y-8 text-[15px] sm:text-base text-black/55 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-black mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy describes how bizMRI (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information when you use bizMRI.ai and related services (the &quot;Service&quot;). By using the Service, you agree to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">2. Information we collect</h2>
            <p className="mb-3">We may collect:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-black/70">Contact and account data</strong> — such as name, work email, company, and role when you join a waitlist, request access, or create an account.
              </li>
              <li>
                <strong className="text-black/70">Usage and technical data</strong> — such as device type, browser, IP address, approximate location, pages viewed, and timestamps, collected through logs and similar technologies.
              </li>
              <li>
                <strong className="text-black/70">Content you provide</strong> — information you or your organization submit in connection with discovery, interviews, integrations, or support (subject to your agreements with us).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">3. How we use information</h2>
            <p>
              We use information to provide, secure, and improve the Service; communicate with you (including product updates and, where permitted, marketing); analyze usage; comply with law; and enforce our Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">4. Sharing</h2>
            <p>
              We may share information with service providers who assist us (hosting, analytics, email) under strict confidentiality; with professional advisers where required; to comply with legal process; or in connection with a merger, acquisition, or asset sale, with notice as appropriate. We do not sell your personal information as that term is commonly understood.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">5. Cookies and similar technologies</h2>
            <p>
              We use cookies and similar tools for essential functionality, preferences, and analytics. You can control cookies through your browser settings; some features may not work if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">6. Retention and security</h2>
            <p>
              We retain information as long as needed for the purposes above and as required by law. We implement appropriate technical and organizational measures to protect data; no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">7. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or export personal data, or to object to or restrict certain processing. To exercise these rights, contact us at the email below. You may also lodge a complaint with a supervisory authority where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">8. International transfers</h2>
            <p>
              If we process data in countries other than your own, we use appropriate safeguards (such as standard contractual clauses) where required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the new version here and revise the &quot;Last updated&quot; date. Continued use of the Service after changes constitutes acceptance, to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-black mb-3">10. Contact</h2>
            <p>
              Privacy questions:{' '}
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
