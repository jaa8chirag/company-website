import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'QuickMindsSolutions Privacy Policy — how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-20 bg-background">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-extrabold text-secondary mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card prose prose-slate max-w-none space-y-6">
          {[
            {
              title: '1. Information We Collect',
              text: 'We collect information you provide directly (name, email, phone, company details) when you contact us, subscribe to our newsletter, or use our services. We also automatically collect usage data including IP addresses, browser type, pages visited, and time spent on our site.',
            },
            {
              title: '2. How We Use Your Information',
              text: 'We use collected information to respond to inquiries, provide services, send relevant communications, improve our website, and comply with legal obligations. We never sell your personal data to third parties.',
            },
            {
              title: '3. Data Security',
              text: 'We implement industry-standard security measures including SSL/TLS encryption, access controls, and regular security audits to protect your information. However, no internet transmission is 100% secure.',
            },
            {
              title: '4. Cookies',
              text: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You may control cookie settings through your browser preferences.',
            },
            {
              title: '5. Third-Party Services',
              text: 'We may use third-party services (Google Analytics, Hotjar, etc.) that have their own privacy policies. We encourage you to review their policies.',
            },
            {
              title: '6. Your Rights',
              text: 'Depending on your location, you may have rights to access, correct, delete, or port your personal data. Contact us at privacy@quickmindssolutions.com to exercise these rights.',
            },
            {
              title: '7. Contact',
              text: 'For privacy-related questions, contact our Data Protection Officer at privacy@quickmindssolutions.com or write to us at 123 Innovation Drive, San Francisco, CA 94105.',
            },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-secondary mb-2">{section.title}</h2>
              <p className="text-slate-500 leading-relaxed text-sm">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
