import type { Metadata } from 'next'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'
import { BLOG_POSTS } from '@/constants/data'
import CTASection from '@/sections/CTASection'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert insights on web development, cloud computing, AI, cybersecurity, and digital transformation from the QuickMindsSolutions engineering team.',
}

const CATEGORIES = ['All', 'AI', 'Cloud', 'Development', 'Cyber Security', 'Digital Transformation', 'Technology']

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
            Tech Insights & Thought Leadership
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            The QMS <span className="gradient-text">Tech Blog</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on emerging technologies, engineering best practices, and digital transformation strategies.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${i === 0
                  ? 'bg-primary text-white shadow-blue-glow'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col">
                  <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden shrink-0`}>
                    <div className="absolute inset-0 bg-grid-dark" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-between">
                      <span className="self-start px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold">
                        {post.category}
                      </span>
                      <div className="flex gap-1.5 flex-wrap">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-white/15 text-white/80 text-xs">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="font-bold text-secondary group-hover:text-primary transition-colors text-base leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
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
                        <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
