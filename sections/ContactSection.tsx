'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { COMPANY_INFO } from '@/constants/data'
import { cn } from '@/lib/utils'

const SERVICES = [
  'Web Development', 'Mobile App Development', 'UI/UX Design',
  'Cloud Solutions', 'AI & ML', 'DevOps', 'Data Engineering',
  'QA Automation', 'Digital Transformation', 'ERP Solutions',
  'Software Consulting', 'Other',
]

const BUDGETS = [
  'Under $10K', '$10K – $25K', '$25K – $50K',
  '$50K – $100K', '$100K – $250K', '$250K+',
]

const CONTACT_INFO = [
  { icon: Mail, label: 'Email Us', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  { icon: Phone, label: 'Call Us', value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
  { icon: MapPin, label: 'Visit Us', value: COMPANY_INFO.address, href: '#' },
  { icon: Clock, label: 'Working Hours', value: 'Mon–Fri: 9AM – 6PM PST', href: '#' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    country: '', budget: '', service: '', message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setIsSubmitting(true)
    // Simulated submission
    await new Promise((r) => setTimeout(r, 2000))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const inputClass = (field: string) =>
    cn(
      'w-full px-4 py-3 rounded-xl border bg-white text-secondary placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2',
      errors[field]
        ? 'border-danger focus:ring-danger/20'
        : 'border-slate-200 focus:border-primary focus:ring-primary/20 hover:border-slate-300',
    )

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-custom">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Start Your "
          highlight="Project"
          description="Tell us about your project, and we'll get back to you within 24 hours with a tailored proposal."
          centered
          className="mb-14"
        />

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <info.icon size={20} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{info.label}</div>
                  <div className="text-secondary font-medium text-sm">{info.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-5 bg-primary/5 rounded-2xl border border-primary/10"
            >
              <h4 className="font-bold text-secondary mb-2 text-sm">⚡ Fast Response Guarantee</h4>
              <ul className="space-y-1.5 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-success" /> Initial response within 2 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-success" /> Detailed proposal within 48 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-success" /> NDA signed on request
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-card">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-secondary mb-2">Message Sent!</h3>
                  <p className="text-slate-500 mb-6">
                    Thanks for reaching out. We'll get back to you within 2 hours.
                  </p>
                  <button
                    onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', phone: '', company: '', country: '', budget: '', service: '', message: '' }) }}
                    className="text-primary font-semibold hover:text-primary-700 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClass('name')} />
                      {errors.name && <p className="text-xs text-danger mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Work Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className={inputClass('email')} />
                      {errors.email && <p className="text-xs text-danger mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={inputClass('phone')} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Company Name</label>
                      <input name="company" value={formData.company} onChange={handleChange} placeholder="Acme Inc." className={inputClass('company')} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Service Needed</label>
                      <select name="service" value={formData.service} onChange={handleChange} className={inputClass('service')}>
                        <option value="">Select a service</option>
                        {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-secondary mb-1.5">Project Budget</label>
                      <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass('budget')}>
                        <option value="">Select budget range</option>
                        {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-secondary mb-1.5">Tell Us About Your Project *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                      className={cn(inputClass('message'), 'resize-none')}
                    />
                    {errors.message && <p className="text-xs text-danger mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary hover:bg-primary-700 text-white font-bold text-base transition-all duration-200 shadow-blue-glow hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400 mt-3">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
                    We never share your data.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
