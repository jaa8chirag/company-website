'use client'

import { motion } from 'framer-motion'
import { Heart, TrendingUp, BookOpen, ShoppingCart, Factory, Truck, Hotel, Shield, Landmark, Building, Plane, Radio, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { INDUSTRIES } from '@/constants/data'
import Link from 'next/link'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Heart, TrendingUp, BookOpen, ShoppingCart, Factory, Truck, Hotel, Shield, Landmark, Building, Plane, Radio,
}

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          badge="Industries We Serve"
          title="Domain Expertise Across "
          highlight="12+ Industries"
          description="Deep industry knowledge combined with technical excellence — we understand your domain, compliance requirements, and business nuances."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const Icon = ICON_MAP[industry.icon] ?? Building
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <Link href="/industries">
                  <div className="bg-white rounded-2xl p-5 text-center border border-slate-100 hover:border-primary/20 hover:shadow-card transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${industry.color}20, ${industry.color}10)` }}
                    >
                      <Icon size={22} style={{ color: industry.color }} />
                    </div>
                    <h3 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                      {industry.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
          >
            Explore All Industries <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
