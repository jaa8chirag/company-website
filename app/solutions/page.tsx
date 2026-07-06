import type { Metadata } from 'next'
import { ArrowRight, Layers, TrendingUp, Cpu, ShoppingBag, MessageSquare, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Enterprise-grade digital solutions — digital transformation, ERP, e-commerce, and software consulting from QuickMindsSolutions.',
}

const SOLUTIONS = [
  {
    icon: TrendingUp,
    title: 'Digital Transformation',
    description:
      'End-to-end digital transformation programs that modernize your operations, culture, and customer experience. We guide you from legacy to digital-first.',
    features: ['Legacy Modernization', 'Process Automation', 'Digital Strategy Roadmap', 'Change Management', 'ROI Measurement'],
    color: '#2563EB',
    href: '/solutions/digital-transformation',
  },
  {
    icon: Layers,
    title: 'ERP Solutions',
    description:
      'Custom ERP implementations and integrations that unify your business operations — finance, HR, supply chain, sales, and more — in one intelligent system.',
    features: ['SAP & Microsoft Dynamics', 'Custom ERP Build', 'Module Integration', 'Data Migration', 'Ongoing Support'],
    color: '#7C3AED',
    href: '/solutions/erp',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Solutions',
    description:
      'Scalable omnichannel commerce platforms that deliver exceptional shopping experiences, maximize conversions, and handle enterprise-scale traffic.',
    features: ['Custom Commerce Platform', 'Headless Commerce', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
    color: '#D97706',
    href: '/solutions/e-commerce',
  },
  {
    icon: MessageSquare,
    title: 'Software Consulting',
    description:
      'Strategic technology advisory from senior architects and CTOs. We help you make the right technology decisions that align with your business goals.',
    features: ['Architecture Review', 'Tech Stack Selection', 'Code & Security Audit', 'Scalability Planning', 'CTO-as-a-Service'],
    color: '#059669',
    href: '/solutions/consulting',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description:
      'Intelligent automation solutions that eliminate repetitive work, improve decision-making, and unlock new capabilities for your business.',
    features: ['Process Automation (RPA)', 'AI-Powered Analytics', 'Intelligent Document Processing', 'Chatbots & Virtual Agents', 'ML Model Development'],
    color: '#0891B2',
    href: '/solutions/ai-automation',
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] rounded-full bg-primary/12 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Enterprise-Grade Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Holistic Solutions for{' '}
            <span className="gradient-text">Complex Challenges</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond individual services — we architect and deliver end-to-end solutions that transform how your business operates.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-8">
            {SOLUTIONS.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <solution.icon size={26} style={{ color: solution.color }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-4">{solution.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-6">{solution.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold transition-colors"
                    style={{ color: solution.color }}
                  >
                    Discuss This Solution <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="bg-white rounded-2xl border border-slate-100 p-7 shadow-card">
                  <h3 className="font-bold text-secondary mb-5 text-sm uppercase tracking-wide">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {solution.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-600">
                        <CheckCircle size={16} style={{ color: solution.color }} className="shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
