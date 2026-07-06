'use client'

import { motion } from 'framer-motion'
import { Search, Map, Palette, Code, CheckCircle, Rocket, Headphones } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { PROCESS_STEPS } from '@/constants/data'

const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Search, Map, Palette, Code, CheckCircle, Rocket, Headphones,
}

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          badge="How We Work"
          title="Our Proven Development "
          highlight="Process"
          description="A systematic, transparent approach that delivers consistent results — on time, on budget, every time."
          centered
          className="mb-16"
        />

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-3">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = ICON_MAP[step.icon] ?? Code
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step number + icon */}
                  <div className="relative mb-5 z-10">
                    {/* Outer ring */}
                    <div
                      className="w-24 h-24 rounded-full border-2 flex items-center justify-center bg-white shadow-card group-hover:shadow-card-hover transition-all duration-300 group-hover:scale-105"
                      style={{ borderColor: step.color }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <Icon size={24} style={{ color: step.color }} />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold shadow-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-bold text-secondary text-sm mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[140px]">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
