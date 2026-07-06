import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp, Database, Code, MessageSquare, BarChart } from 'lucide-react'
import { notFound } from 'next/navigation'
import { SERVICES } from '@/constants/data'
import Button from '@/components/ui/Button'
import CTASection from '@/sections/CTASection'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp,
  Database, Code, MessageSquare, CheckCircle, BarChart,
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const Icon = ICON_MAP[service.icon] ?? Globe
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: `${service.color}20` }}
        />
        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${service.color}20` }}
              >
                <Icon size={32} style={{ color: service.color }} />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8">{service.description}</p>
              <div className="flex gap-4 flex-wrap">
                <Button href="/contact" size="lg" rounded>Start Your Project</Button>
                <Button href="/portfolio" size="lg" variant="outline-white" rounded>See Case Studies</Button>
              </div>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-bold text-white mb-5">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/75">
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.color}25` }}
                    >
                      <CheckCircle size={14} style={{ color: service.color }} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl font-extrabold text-secondary mb-8">Explore Other Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const SIcon = ICON_MAP[s.icon] ?? Globe
              return (
                <Link key={s.id} href={`/services/${s.slug}`} className="group">
                  <div className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-primary/20 hover:shadow-card transition-all duration-200 hover:-translate-y-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${s.color}15` }}
                    >
                      <SIcon size={20} style={{ color: s.color }} />
                    </div>
                    <h3 className="font-bold text-secondary text-sm group-hover:text-primary transition-colors">
                      {s.title}
                    </h3>
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
