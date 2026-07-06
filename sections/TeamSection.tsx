'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Phone, Linkedin, Github } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { TEAM_MEMBERS } from '@/constants/data'

export default function TeamSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeader
          badge="Our Team"
          title="Meet the Minds Behind "
          highlight="Your Success"
          description="World-class engineers, designers, and strategists — united by a passion for building exceptional digital products."
          centered
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-slate-100 p-6 text-center hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
                {/* Avatar */}
                <div className="relative mx-auto mb-4">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg mx-auto transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="font-bold text-secondary text-base mb-0.5 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-semibold mb-1">{member.role}</p>
                  <p className="text-slate-400 text-xs mb-3 uppercase tracking-wide">{member.department}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${member.color}15`, color: member.color }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="flex justify-center gap-2 mt-auto">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all duration-200"
                    >
                      <Linkedin size={14} />
                    </a>
                  )}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all duration-200"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href="/contact"
                    className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all duration-200"
                  >
                    <MessageSquare size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
