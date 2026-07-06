'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Zap, ArrowRight, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS, COMPANY_INFO } from '@/constants/data'
import Button from '@/components/ui/Button'

const SERVICES_PREVIEW = [
  { title: 'Web Development', icon: '🌐', href: '/services/web-development' },
  { title: 'Mobile Apps', icon: '📱', href: '/services/mobile-app-development' },
  { title: 'UI/UX Design', icon: '🎨', href: '/services/ui-ux-design' },
  { title: 'Cloud Solutions', icon: '☁️', href: '/services/cloud-solutions' },
  { title: 'AI & ML', icon: '🧠', href: '/services/ai-solutions' },
  { title: 'DevOps', icon: '⚙️', href: '/services/devops' },
  { title: 'Data Engineering', icon: '📊', href: '/services/data-engineering' },
  { title: 'QA Automation', icon: '✅', href: '/services/qa-automation' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const mainNavItems = NAV_ITEMS.filter(item =>
    ['Home', 'Services', 'Solutions', 'Industries', 'Portfolio', 'About', 'Blog', 'Contact'].includes(item.label)
  )

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/80'
            : 'bg-transparent',
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-blue-glow group-hover:shadow-glow-lg transition-shadow duration-300">
                <Zap size={18} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className={cn(
                  'font-extrabold text-lg tracking-tight transition-colors duration-300',
                  isScrolled ? 'text-secondary' : 'text-white',
                )}>
                  QuickMinds
                </span>
                <span className="font-extrabold text-lg tracking-tight text-primary">Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {mainNavItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.children ? (
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isScrolled
                          ? 'text-slate-700 hover:text-primary hover:bg-primary/5'
                          : 'text-white/85 hover:text-white hover:bg-white/10',
                        activeDropdown === item.label && (isScrolled ? 'text-primary bg-primary/5' : 'text-white bg-white/10'),
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180',
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 link-underline',
                        isScrolled
                          ? pathname === item.href
                            ? 'text-primary font-semibold'
                            : 'text-slate-700 hover:text-primary hover:bg-primary/5'
                          : pathname === item.href
                          ? 'text-white font-semibold'
                          : 'text-white/85 hover:text-white hover:bg-white/10',
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-card-hover border border-slate-100 p-3 z-50"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {SERVICES_PREVIEW.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-primary/5 group transition-colors duration-150"
                            >
                              <span className="text-base leading-none">{s.icon}</span>
                              <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors leading-tight">
                                {s.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100">
                          <Link
                            href="/services"
                            className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-700 transition-colors py-1"
                          >
                            View All Services <ArrowRight size={14} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className={cn(
                  'hidden xl:flex items-center gap-1.5 text-sm font-medium transition-colors duration-200',
                  isScrolled ? 'text-slate-600 hover:text-primary' : 'text-white/80 hover:text-white',
                )}
              >
                <Phone size={14} />
                {COMPANY_INFO.phone}
              </a>
              <Button
                href="/contact"
                variant={isScrolled ? 'primary' : 'outline-white'}
                size="sm"
                className="hidden md:inline-flex rounded-full"
                rightIcon={<ArrowRight size={14} />}
              >
                Free Consultation
              </Button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-xl transition-colors duration-200',
                  isScrolled
                    ? 'text-secondary hover:bg-slate-100'
                    : 'text-white hover:bg-white/10',
                )}
                aria-label="Toggle mobile menu"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 shadow-2xl overflow-y-auto lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <span className="font-extrabold text-secondary">
                    QuickMinds<span className="text-primary">Solutions</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-500"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150',
                        pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-slate-700 hover:bg-primary/5 hover:text-primary',
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-100 space-y-3">
                <Button href="/contact" fullWidth size="md" rightIcon={<ArrowRight size={16} />}>
                  Get Free Consultation
                </Button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors py-2"
                >
                  <Phone size={15} />
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
