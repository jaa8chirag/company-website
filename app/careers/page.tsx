import type { Metadata } from 'next'
import { MapPin, Clock, Briefcase, ArrowRight, Heart, Zap, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { CAREER_POSITIONS } from '@/constants/data'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the QuickMindsSolutions team. We\'re hiring world-class engineers, designers, and strategists. Explore open positions and build the future with us.',
}

const BENEFITS = [
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, vision coverage + mental health support.' },
  { icon: Zap, title: 'Learning & Growth', description: '$3,000 annual learning budget, conference attendance, and certifications.' },
  { icon: TrendingUp, title: 'Equity & Bonuses', description: 'Competitive salary, performance bonuses, and equity participation.' },
  { icon: Users, title: 'Remote-First Culture', description: 'Work from anywhere. Flexible hours, async-friendly, 30+ countries.' },
]

const DEPT_COLORS: Record<string, string> = {
  Engineering: '#2563EB',
  Design: '#EC4899',
  Sales: '#D97706',
  Management: '#7C3AED',
}

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full bg-primary/12 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              We're Hiring — {CAREER_POSITIONS.length} Open Positions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Build the Future <br />
              <span className="gradient-text">With Brilliant Minds</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-2xl">
              Join a team of 200+ engineers, designers, and innovators who are shaping digital experiences for companies worldwide. Remote-first, mission-driven, high-impact.
            </p>
            <Button href="#positions" size="lg" rounded rightIcon={<ArrowRight size={18} />}>
              Explore Open Roles
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Why Join Us"
            title="Perks That Make the "
            highlight="Difference"
            centered
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-card transition-all duration-200 text-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Open Roles"
            title="Current "
            highlight="Openings"
            description="Find your next opportunity to make an impact."
            className="mb-10"
          />
          <div className="space-y-4">
            {CAREER_POSITIONS.map((pos) => (
              <div
                key={pos.id}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-primary/20 hover:shadow-card transition-all duration-200 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-extrabold text-secondary text-lg group-hover:text-primary transition-colors">
                        {pos.title}
                      </h3>
                      <span
                        className="px-3 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: DEPT_COLORS[pos.department] ?? '#2563EB' }}
                      >
                        {pos.department}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-3">{pos.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><MapPin size={14} />{pos.location}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} />{pos.type}</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={14} />{pos.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pos.skills.map((s) => (
                        <span key={s} className="px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button href="/contact" size="md" rightIcon={<ArrowRight size={16} />} className="shrink-0">
                    Apply Now
                  </Button>
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
