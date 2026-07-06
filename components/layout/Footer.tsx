'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, ArrowRight, Youtube } from 'lucide-react'
import { COMPANY_INFO } from '@/constants/data'
import { useState } from 'react'

const FOOTER_LINKS = {
  services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app-development' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
    { label: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { label: 'AI & ML Solutions', href: '/services/ai-solutions' },
    { label: 'DevOps', href: '/services/devops' },
    { label: 'Data Engineering', href: '/services/data-engineering' },
    { label: 'QA Automation', href: '/services/qa-automation' },
  ],
  industries: [
    { label: 'Healthcare', href: '/industries' },
    { label: 'Finance & Banking', href: '/industries' },
    { label: 'Education', href: '/industries' },
    { label: 'Retail & E-Commerce', href: '/industries' },
    { label: 'Manufacturing', href: '/industries' },
    { label: 'Logistics', href: '/industries' },
    { label: 'Government', href: '/industries' },
    { label: 'Real Estate', href: '/industries' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
}

const SOCIAL_LINKS = [
  { icon: Linkedin, href: COMPANY_INFO.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, href: COMPANY_INFO.twitter, label: 'Twitter', color: '#1DA1F2' },
  { icon: Github, href: COMPANY_INFO.github, label: 'GitHub', color: '#333' },
  { icon: Facebook, href: COMPANY_INFO.facebook, label: 'Facebook', color: '#1877F2' },
  { icon: Instagram, href: COMPANY_INFO.instagram, label: 'Instagram', color: '#E4405F' },
  { icon: Youtube, href: COMPANY_INFO.youtube, label: 'YouTube', color: '#FF0000' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-secondary text-white">
      {/* Newsletter Banner */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Stay Ahead in Tech</h3>
              <p className="text-white/60 text-sm">Get the latest insights, case studies, and industry trends.</p>
            </div>
            {subscribed ? (
              <div className="text-success font-medium text-sm">✓ You&apos;re subscribed! Welcome aboard.</div>
            ) : (
              <form className="flex gap-2 w-full md:w-auto" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 md:w-72 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary hover:bg-primary-700 text-white text-sm font-semibold rounded-xl transition-colors duration-200 flex items-center gap-1.5 shrink-0"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 xl:gap-12">
          {/* Brand Column */}
          <div className="xl:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-blue-glow">
                <Zap size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">QuickMinds</span>
                <span className="font-extrabold text-xl text-primary tracking-tight">Solutions</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              A premier IT solutions company delivering enterprise-grade software development, cloud solutions, and AI integration that drives real business growth.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} />
                </span>
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} />
                </span>
                {COMPANY_INFO.phone}
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} />
                </span>
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Industries</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-150 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <p>© {currentYear} QuickMindsSolutions. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
            <p>Made with ❤️ in San Francisco, CA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
