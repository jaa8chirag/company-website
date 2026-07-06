'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Code2, Shield } from 'lucide-react'
import Link from 'next/link'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Button from '@/components/ui/Button'

const STATS = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 150, suffix: '+', label: 'Clients' },
  { value: 12, suffix: '+', label: 'Years' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
]

const FLOATING_CARDS = [
  {
    id: 'performance',
    icon: TrendingUp,
    title: 'Performance',
    value: '+247%',
    sub: 'avg. traffic growth',
    color: '#10B981',
    delay: 0,
    position: 'top-8 -right-4 md:right-4',
  },
  {
    id: 'code',
    icon: Code2,
    title: 'Code Quality',
    value: '99.2%',
    sub: 'test coverage',
    color: '#2563EB',
    delay: 0.3,
    position: 'bottom-24 -left-4 md:left-4',
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security',
    value: 'OWASP A+',
    sub: 'security grade',
    color: '#F59E0B',
    delay: 0.6,
    position: 'bottom-4 right-8 md:right-12',
  },
]

const CHART_BARS = [45, 65, 50, 80, 60, 95, 75, 88, 70, 92]

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-20 pb-16">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-dark opacity-100" />
      <div className="absolute inset-0 bg-grid-dark opacity-50" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-accent/15 blur-[100px] animate-blob-delay" />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[90px] animate-blob-delay-2" />
      </div>

      <motion.div style={{ y, opacity }} className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium">
                <Star size={13} className="text-warning fill-warning" />
                Rated #1 IT Partner by 150+ Enterprises
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            >
              We Build{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Digital Solutions</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left"
                />
              </span>{' '}
              That Drive{' '}
              <span className="text-accent">Business Growth</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              From startups to Fortune 500 — we architect, build, and scale high-performance software that powers your business. 12+ years of engineering excellence, 500+ projects delivered globally.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
            >
              {['Web & Mobile Development', 'Cloud & DevOps', 'AI Solutions', 'UI/UX Design'].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle size={11} className="text-success" />
                  {f}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10"
            >
              <Button
                href="/contact"
                size="lg"
                variant="primary"
                rounded
                rightIcon={<ArrowRight size={18} />}
                className="shadow-glow hover:shadow-glow-lg"
              >
                Start Your Project
              </Button>
              <Button
                href="/portfolio"
                size="lg"
                variant="outline-white"
                rounded
                leftIcon={<Play size={16} className="fill-current" />}
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-extrabold text-white leading-none mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-white/50 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[540px]">
              {/* Main Dashboard Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 glass-card p-6 overflow-hidden"
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 h-6 bg-white/5 rounded-lg flex items-center px-3 gap-2 text-white/30 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                    quickmindssolutions.com/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-5">
                  {/* Header row */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/40 text-xs mb-1">Total Revenue</div>
                      <div className="text-white text-2xl font-bold">$2.4M</div>
                      <div className="flex items-center gap-1 text-success text-xs mt-0.5">
                        <TrendingUp size={11} />
                        <span>+24.5% this quarter</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40 text-xs mb-1">Active Projects</div>
                      <div className="text-white text-2xl font-bold">48</div>
                      <div className="text-white/40 text-xs mt-0.5">across 12 industries</div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div>
                    <div className="flex items-center justify-between text-xs text-white/40 mb-3">
                      <span>Performance Overview</span>
                      <span className="text-primary">↑ 34%</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-28">
                      {CHART_BARS.map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-md relative overflow-hidden"
                          style={{
                            background: `linear-gradient(180deg, ${i % 2 === 0 ? '#2563EB' : '#38BDF8'} 0%, rgba(37,99,235,0.3) 100%)`,
                          }}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.06, duration: 0.7, ease: 'easeOut' }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-white/20 mt-1.5 px-0.5">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map(m => (
                        <span key={m}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Progress items */}
                  <div className="space-y-3">
                    {[
                      { label: 'Client Satisfaction', value: 98, color: '#10B981' },
                      { label: 'On-time Delivery', value: 95, color: '#2563EB' },
                      { label: 'Code Quality Score', value: 99, color: '#38BDF8' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-white/60">{item.label}</span>
                          <span className="text-white font-medium">{item.value}%</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: item.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React', 'Next.js', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-white/8 border border-white/10 text-white/60 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              {FLOATING_CARDS.map((card) => (
                <motion.div
                  key={card.id}
                  className={`absolute ${card.position} z-10`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { delay: card.delay + 1, duration: 0.4 },
                    scale: { delay: card.delay + 1, duration: 0.4 },
                    y: { delay: card.delay + 1.4, duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  <div className="glass-card px-4 py-3 flex items-center gap-3 min-w-[160px] shadow-glass">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${card.color}20` }}
                    >
                      <card.icon size={16} style={{ color: card.color }} />
                    </div>
                    <div>
                      <div className="text-white/50 text-[10px] font-medium uppercase tracking-wide">{card.title}</div>
                      <div className="text-white font-bold text-sm">{card.value}</div>
                      <div className="text-white/40 text-[10px]">{card.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1440 40 1200 0 720 0C240 0 0 40 0 40L0 80Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
