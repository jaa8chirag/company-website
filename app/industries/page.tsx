import type { Metadata } from 'next'
import { Heart, TrendingUp, BookOpen, ShoppingCart, Factory, Truck, Hotel, Shield, Landmark, Building, Plane, Radio, CheckCircle, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { INDUSTRIES } from '@/constants/data'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'QuickMindsSolutions serves 12+ industries with domain-specific digital solutions. Healthcare, finance, education, retail, logistics, and more.',
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Heart, TrendingUp, BookOpen, ShoppingCart, Factory, Truck, Hotel, Shield, Landmark, Building, Plane, Radio,
}

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/12 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            12+ Industries Served
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Deep Expertise Across{' '}
            <span className="gradient-text">Every Industry</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine technical mastery with industry-specific knowledge to deliver solutions that truly understand your business domain.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => {
              const Icon = ICON_MAP[industry.icon] ?? Building
              return (
                <div
                  key={industry.id}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className={`h-24 bg-gradient-to-r ${industry.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-dark" />
                    <div className="absolute inset-0 flex items-center px-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-extrabold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{industry.description}</p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: industry.color }}>
                      Explore Solutions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
