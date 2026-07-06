import type { Metadata } from 'next'
import ContactSection from '@/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with QuickMindsSolutions. Start your project today with a free 30-minute consultation. We respond within 2 hours.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-primary/12 blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Response within 2 hours
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a fully scoped project or just an idea — we'd love to hear from you. No commitment, just a conversation.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
