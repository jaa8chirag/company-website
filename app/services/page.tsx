import type { Metadata } from 'next'
import {
  Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp,
  Database, Code, MessageSquare, CheckCircle, BarChart, ArrowRight,
} from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { SERVICES } from '@/constants/data'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore QuickMindsSolutions\' full range of IT services — web development, mobile apps, cloud, AI, DevOps, and more. Enterprise-grade solutions for every business need.',
}

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp,
  Database, Code, MessageSquare, CheckCircle, BarChart,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px]" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            End-to-End Technology Services
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Services That{' '}
            <span className="gradient-text">Power Modern Businesses</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            From MVP to enterprise scale — we deliver comprehensive technology services tailored to your business objectives.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = ICON_MAP[service.icon] ?? Globe
              return (
                <Link key={service.id} href={`/services/${service.slug}`} className="group block">
                  <div className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 h-full">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={26} style={{ color: service.color }} />
                    </div>
                    <h2 className="font-extrabold text-secondary text-lg mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle size={14} style={{ color: service.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
