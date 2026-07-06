'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-dark" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Display */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-[10rem] font-extrabold leading-none gradient-text select-none">
              404
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/" size="lg" rounded leftIcon={<Home size={18} />}>
              Back to Home
            </Button>
            <Button href="/contact" size="lg" variant="outline-white" rounded leftIcon={<Search size={18} />}>
              Get Help
            </Button>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white/40 text-sm mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Careers', href: '/careers' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl glass text-white/70 text-sm hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
