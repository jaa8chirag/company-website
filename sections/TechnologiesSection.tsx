'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'
import { TECH_CATEGORIES } from '@/constants/data'
import { cn } from '@/lib/utils'

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState('frontend')

  const activeCategory = TECH_CATEGORIES.find((c) => c.id === activeTab)

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          badge="Technology Stack"
          title="Modern Technologies We "
          highlight="Specialize In"
          description="We use best-in-class, battle-tested technologies to build scalable, maintainable, and high-performance solutions."
          centered
          className="mb-12"
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-blue-glow'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
              >
                {activeCategory.items.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="group"
                  >
                    <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center hover:border-primary/20 hover:shadow-card transition-all duration-200 hover:-translate-y-1 cursor-default">
                      {/* Color indicator circle */}
                      <div
                        className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-extrabold text-sm transition-transform duration-200 group-hover:scale-110"
                        style={{ backgroundColor: tech.color === '#000000' || tech.color === '#000020' ? '#334155' : tech.color }}
                      >
                        {tech.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors leading-tight">
                        {tech.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm">
            And many more. We select the best technology for each project based on your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
