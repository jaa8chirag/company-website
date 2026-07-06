'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/constants/data'

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPaused, current])

  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge="Client Stories"
          title="What Our Clients "
          highlight="Say About Us"
          description="Real words from real clients who've experienced the QuickMindsSolutions difference."
          centered
          light
          className="mb-14"
        />

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <div className="glass-card p-8 md:p-12">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote size={40} className="text-primary/50" />
                  </div>

                  {/* Review */}
                  <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 font-medium">
                    "{TESTIMONIALS[current].review}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg"
                        style={{ backgroundColor: TESTIMONIALS[current].color }}
                      >
                        {TESTIMONIALS[current].initials}
                      </div>
                      <div>
                        <div className="font-bold text-white text-base">{TESTIMONIALS[current].name}</div>
                        <div className="text-white/60 text-sm">{TESTIMONIALS[current].designation}</div>
                        <div className="text-primary text-sm font-semibold">{TESTIMONIALS[current].company}</div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                        <Star key={i} size={18} className="text-warning fill-warning" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300"
                    aria-label={`Go to testimonial ${i + 1}`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-white/30 hover:bg-white/50'}`}
                    />
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All testimonials row preview */}
        <div className="hidden xl:grid grid-cols-3 gap-4 mt-10">
          {TESTIMONIALS.filter((_, i) => i !== current).slice(0, 3).map((t, idx) => (
            <motion.button
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setCurrent(TESTIMONIALS.indexOf(t))}
              className="glass-card p-4 text-left hover:border-white/25 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.company}</div>
                </div>
              </div>
              <p className="text-white/50 text-xs line-clamp-2 group-hover:text-white/70 transition-colors">
                "{t.review}"
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
