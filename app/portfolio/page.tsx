import type { Metadata } from 'next'
import PortfolioSection from '@/sections/PortfolioSection'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore QuickMindsSolutions\' portfolio of 500+ successful projects across web, mobile, AI, cloud, and enterprise — real impact for real businesses.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            500+ Projects Delivered
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Work That <span className="gradient-text">Speaks for Itself</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Real solutions built for real businesses. Explore our portfolio of impactful digital products across industries.
          </p>
        </div>
      </section>

      <PortfolioSection />
      <CTASection />
    </>
  )
}
