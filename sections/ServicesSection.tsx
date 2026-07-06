'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp,
  Database, Code, MessageSquare, CheckCircle, BarChart, ArrowRight,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { SERVICES } from '@/constants/data'
import Button from '@/components/ui/Button'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Globe, Smartphone, Palette, Cloud, Brain, Settings, TrendingUp,
  Database, Code, MessageSquare, CheckCircle, BarChart,
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            badge="What We Do"
            title="Services That Power "
            highlight="Your Business"
            description="End-to-end technology services tailored to your goals — from idea to enterprise-scale product."
          />
          <Button href="/services" variant="outline" size="md" rightIcon={<ArrowRight size={16} />} className="shrink-0 self-start md:self-auto">
            View All Services
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] ?? Globe
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full bg-white rounded-2xl p-6 border border-slate-100 hover:border-transparent hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
                    {/* Hover background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(135deg, ${service.color}08 0%, transparent 60%)` }}
                    />

                    {/* Icon */}
                    <div
                      className="relative w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon size={22} style={{ color: service.color }} />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-secondary text-base mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-5">
                      {service.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                          <span
                            className="w-1 h-1 rounded-full shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div
                      className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                      style={{ color: service.color }}
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-200"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
