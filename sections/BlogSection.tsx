'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import Button from '@/components/ui/Button'
import { BLOG_POSTS } from '@/constants/data'

export default function BlogSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            badge="Latest Insights"
            title="From Our Tech "
            highlight="Blog"
            description="Expert perspectives on technology trends, best practices, and digital transformation."
          />
          <Button href="/blog" variant="outline" size="md" rightIcon={<ArrowRight size={16} />} className="shrink-0 self-start md:self-auto">
            View All Articles
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
                  {/* Cover */}
                  <div className={`relative h-44 bg-gradient-to-br ${post.gradient} overflow-hidden shrink-0`}>
                    <div className="absolute inset-0 bg-grid-dark" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-white/15 text-white/80 text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-secondary text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-xl flex items-center justify-center text-white text-[10px] font-extrabold"
                          style={{ backgroundColor: post.authorColor }}
                        >
                          {post.authorInitials}
                        </div>
                        <span className="text-xs font-medium text-slate-600">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />{post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />{post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
