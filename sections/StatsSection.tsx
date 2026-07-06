'use client'

import { motion } from 'framer-motion'
import { Briefcase, Users, Calendar, ThumbsUp, Globe, Award } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const STATS = [
  { icon: Briefcase, value: 500, suffix: '+', label: 'Projects Delivered', description: 'Across 20+ countries', color: '#2563EB' },
  { icon: Users, value: 150, suffix: '+', label: 'Happy Clients', description: 'From startups to Fortune 500', color: '#10B981' },
  { icon: Calendar, value: 12, suffix: '+', label: 'Years Experience', description: 'In enterprise software', color: '#F59E0B' },
  { icon: ThumbsUp, value: 98, suffix: '%', label: 'Client Satisfaction', description: 'Based on 500+ reviews', color: '#EC4899' },
  { icon: Globe, value: 25, suffix: '+', label: 'Countries Served', description: 'Global client base', color: '#7C3AED' },
  { icon: Award, value: 40, suffix: '+', label: 'Awards & Recognitions', description: 'Industry accolades', color: '#0891B2' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-accent/8 blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Numbers That{' '}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-white/60 text-lg">
            Over a decade of delivering excellence for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="glass-card p-5 text-center h-full hover:border-white/25 transition-all duration-300 hover:-translate-y-1">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
