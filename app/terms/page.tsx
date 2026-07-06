import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'QuickMindsSolutions Terms of Service — the rules and guidelines governing use of our services.',
}

export default function TermsPage() {
  return (
    <section className="pt-36 pb-20 bg-background">
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl font-extrabold text-secondary mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">Last updated: January 1, 2025</p>

        <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-card space-y-6">
          {[
            {
              title: '1. Acceptance of Terms',
              text: 'By accessing or using QuickMindsSolutions\' website and services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of our services.',
            },
            {
              title: '2. Services',
              text: 'QuickMindsSolutions provides software development, consulting, and IT solutions. Service scope, deliverables, and timelines are defined in individual project agreements or statements of work.',
            },
            {
              title: '3. Intellectual Property',
              text: 'Upon full payment, clients receive ownership of all custom-developed code and deliverables. QuickMindsSolutions retains rights to proprietary tools, frameworks, and methodologies used in delivery.',
            },
            {
              title: '4. Confidentiality',
              text: 'Both parties agree to maintain confidentiality of proprietary information. NDAs can be executed prior to project commencement upon request.',
            },
            {
              title: '5. Payment Terms',
              text: 'Payment terms are defined in individual contracts. Late payments may incur interest charges. QuickMindsSolutions reserves the right to pause work on overdue accounts.',
            },
            {
              title: '6. Limitation of Liability',
              text: 'Our liability is limited to the amount paid for services in the preceding 3 months. We are not liable for indirect, incidental, or consequential damages.',
            },
            {
              title: '7. Governing Law',
              text: 'These terms are governed by the laws of the State of California, USA. Disputes shall be resolved through binding arbitration in San Francisco, CA.',
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
