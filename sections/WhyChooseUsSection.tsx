'use client'

import { motion } from 'framer-motion'
import {
  Users, Zap, DollarSign, Headphones, Cpu, Rocket, Shield, Layers,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { WHY_CHOOSE_US } from '@/constants/data'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Users, Zap, DollarSign, Headphones, Cpu, Rocket, Shield, Layers,
}

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Why QuickMindsSolutions"
          title="Built for "
          highlight="Enterprise Excellence"
          description="We combine technical mastery with business acumen to deliver solutions that don't just work — they transform."
          centered
          light
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = ICON_MAP[item.icon] ?? Shield
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group"
              >
                <div className="glass-card p-6 h-full hover:border-white/25 transition-all duration-300 hover:-translate-y-1.5">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>

                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>

                  {/* Bottom accent */}
                  <div
                    className="mt-4 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
