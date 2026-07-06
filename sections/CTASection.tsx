'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Calendar, MessageSquare } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-dots-dark" />
          <div className="absolute inset-0 bg-grid-dark opacity-50" />

          {/* Blobs */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/15 blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center px-6 md:px-12 py-16 md:py-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles size={13} className="text-warning" />
              Ready to Transform Your Business?
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight max-w-3xl mx-auto">
              Let's Build Something{' '}
              <span className="gradient-text">Extraordinary</span>{' '}
              Together
            </h2>

            <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 150+ companies that trust QuickMindsSolutions to power their digital future. Start with a free 30-minute strategy consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                href="/contact"
                size="xl"
                variant="white"
                rounded
                rightIcon={<ArrowRight size={20} />}
                className="font-bold shadow-glow-lg"
              >
                Get Free Consultation
              </Button>
              <Button
                href="/portfolio"
                size="xl"
                variant="outline-white"
                rounded
                leftIcon={<MessageSquare size={18} />}
              >
                View Our Work
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Free 30-min strategy call
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                Proposal within 48 hours
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                NDA signed upfront
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
