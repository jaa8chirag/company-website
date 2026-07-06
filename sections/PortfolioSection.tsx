'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { PORTFOLIO_PROJECTS } from '@/constants/data'
import { cn } from '@/lib/utils'

const FILTERS = ['All', 'Web', 'Mobile', 'AI', 'Cloud', 'Enterprise']

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = PORTFOLIO_PROJECTS.filter(
    (p) => activeFilter === 'All' || p.category.includes(activeFilter),
  )

  return (
    <section id="portfolio" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            badge="Our Work"
            title="Projects That "
            highlight="Made an Impact"
            description="Real-world solutions delivering measurable business results for our clients."
          />
          <Button href="/portfolio" variant="outline" size="md" rightIcon={<ArrowRight size={16} />} className="shrink-0 self-start md:self-auto">
            View All Projects
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200',
                activeFilter === f
                  ? 'bg-primary text-white shadow-blue-glow'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5">
                  {/* Project image / gradient */}
                  <div
                    className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-grid-dark" />
                    <div className="absolute inset-0 flex flex-col justify-between p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5">
                          {project.category.map((c) => (
                            <span
                              key={c}
                              className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink size={14} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-white font-extrabold text-xl mb-1">{project.title}</h3>
                        <span className="text-white/70 text-sm">{project.industry}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-4 pb-4 border-b border-slate-100">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="font-extrabold text-secondary text-base">{m.value}</div>
                          <div className="text-slate-400 text-xs">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
