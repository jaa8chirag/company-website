'use client'

import { motion } from 'framer-motion'
import { TRUSTED_COMPANIES } from '@/constants/data'

export default function TrustedBySection() {
  const doubled = [...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES]

  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by leading companies worldwide
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 shrink-0"
            animate={{ x: '-50%' }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
          >
            {doubled.map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-card transition-all duration-200 cursor-default shrink-0 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shrink-0 transition-all duration-200"
                  style={{ backgroundColor: company.color, opacity: 0.85 }}
                >
                  {company.initials}
                </div>
                <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-700 transition-colors whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
