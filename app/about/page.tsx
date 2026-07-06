import type { Metadata } from 'next'
import { Award, Globe, Users, Target, Heart, CheckCircle, Zap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { AWARDS, TEAM_MEMBERS, COMPANY_INFO } from '@/constants/data'
import CTASection from '@/sections/CTASection'
import TeamSection from '@/sections/TeamSection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about QuickMindsSolutions — our story, values, team, and the mission driving us to deliver exceptional digital solutions for businesses worldwide.',
}

const VALUES = [
  { icon: Target, title: 'Innovation', description: 'We embrace emerging technologies and challenge conventions to deliver cutting-edge solutions.', color: '#2563EB' },
  { icon: Heart, title: 'Integrity', description: 'We operate with complete transparency, honesty, and ethical standards in everything we do.', color: '#EC4899' },
  { icon: Users, title: 'Customer Success', description: 'Your success is our success. We\'re invested in outcomes, not just deliverables.', color: '#10B981' },
  { icon: CheckCircle, title: 'Quality', description: 'We hold ourselves to the highest standards of engineering and design excellence.', color: '#F59E0B' },
  { icon: Globe, title: 'Collaboration', description: 'We work as true partners — transparent, communicative, and fully aligned with your goals.', color: '#7C3AED' },
  { icon: Zap, title: 'Speed', description: 'We move with urgency without sacrificing quality — agility is a competitive advantage.', color: '#0891B2' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/12 blur-[120px] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              About QuickMindsSolutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              We Are a Team of{' '}
              <span className="gradient-text">Passionate Builders</span>
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-2xl">
              Founded in {COMPANY_INFO.founded}, QuickMindsSolutions has grown from a small dev studio to a 200+ strong global IT powerhouse. We've helped 150+ companies across 25 countries build products that matter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg" rounded>Start a Project</Button>
              <Button href="/portfolio" size="lg" variant="outline-white" rounded>View Portfolio</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            <div>
              <SectionHeader
                badge="Our Mission"
                title="Empowering Businesses Through "
                highlight="Technology"
                description="We believe that every business deserves access to world-class software. Our mission is to democratize enterprise-quality technology — making it accessible, affordable, and impactful for companies of all sizes."
              />
              <div className="mt-8 space-y-4">
                {['500+ projects shipped globally', '150+ long-term client relationships', '98% client retention rate', 'Offices in USA, Europe & Asia'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={18} className="text-success shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2013', label: 'Founded', sub: 'Over a decade of innovation' },
                { value: '200+', label: 'Team Members', sub: 'Across 3 continents' },
                { value: '$500M+', label: 'Client Revenue', sub: 'Generated through our work' },
                { value: '25+', label: 'Countries', sub: 'Global client base' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 border border-slate-100 text-center shadow-card">
                  <div className="text-3xl font-extrabold text-primary mb-1">{item.value}</div>
                  <div className="font-semibold text-secondary text-sm">{item.label}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <SectionHeader
            badge="Our Values"
            title="Principles That Guide "
            highlight="Everything We Do"
            centered
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-card transition-all duration-200 group">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon size={22} style={{ color: value.color }} />
                </div>
                <h3 className="font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Recognition"
            title="Awards & "
            highlight="Certifications"
            description="Industry recognition for our commitment to excellence and innovation."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {AWARDS.map((award) => (
              <div key={award.title} className="bg-white rounded-2xl p-5 text-center border border-slate-100 hover:shadow-card hover:border-primary/20 transition-all duration-200 group">
                <Award size={28} className="mx-auto mb-3 transition-transform duration-200 group-hover:scale-110" style={{ color: award.color }} />
                <div className="font-bold text-secondary text-xs leading-tight mb-1">{award.title}</div>
                <div className="text-xs text-slate-400">{award.year}</div>
                <div className="text-xs text-primary font-medium mt-1">{award.issuer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
    </>
  )
}
