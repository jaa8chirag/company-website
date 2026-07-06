'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { FAQS } from '@/constants/data'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('1')

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked "
              highlight="Questions"
              description="Everything you need to know about working with QuickMindsSolutions. Can't find what you're looking for? Contact us directly."
            />

            <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h4 className="font-bold text-secondary mb-2">Still have questions?</h4>
              <p className="text-slate-500 text-sm mb-4">
                Our team is happy to answer any questions about your specific project.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700 transition-colors"
              >
                Contact our team →
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={cn(
                    'bg-white border rounded-2xl overflow-hidden transition-all duration-200',
                    openId === faq.id
                      ? 'border-primary/30 shadow-card'
                      : 'border-slate-100 hover:border-slate-200',
                  )}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    aria-expanded={openId === faq.id}
                  >
                    <span
                      className={cn(
                        'font-semibold text-sm md:text-base leading-snug transition-colors',
                        openId === faq.id ? 'text-primary' : 'text-secondary',
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300',
                        openId === faq.id ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500',
                      )}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5">
                          <div className="h-px bg-slate-100 mb-4" />
                          <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
