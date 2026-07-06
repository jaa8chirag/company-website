import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/constants/data'
import CTASection from '@/sections/CTASection'
import Button from '@/components/ui/Button'

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.id)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = BLOG_POSTS.find((p) => p.id === params.id)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className={`pt-36 pb-20 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-dark" />
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-xl text-white text-xs font-extrabold flex items-center justify-center"
                style={{ backgroundColor: post.authorColor }}
              >
                {post.authorInitials}
              </div>
              <span className="text-white/80 font-medium">{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-4 gap-10">
            <article className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 shadow-card prose prose-slate max-w-none">
                <p className="text-lg font-medium text-slate-700 leading-relaxed mb-6">{post.excerpt}</p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  This is a placeholder article body. In a real implementation, the full article content would be stored in a CMS, MDX file, or database, and rendered here using a rich text renderer or markdown parser.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  The article would dive deep into the topic, providing actionable insights, code examples, case studies, and expert perspectives from the QuickMindsSolutions engineering team.
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-medium">
                      <Tag size={11} />#{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-card">
                <h3 className="font-bold text-secondary mb-3 text-sm">About the Author</h3>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                    style={{ backgroundColor: post.authorColor }}
                  >
                    {post.authorInitials}
                  </div>
                  <div>
                    <div className="font-bold text-secondary text-sm">{post.author}</div>
                    <div className="text-slate-400 text-xs">Engineering Team</div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 rounded-2xl border border-primary/10 p-5">
                <h3 className="font-bold text-secondary mb-2 text-sm">Start a Project?</h3>
                <p className="text-slate-500 text-xs mb-3 leading-relaxed">Interested in applying what you've read? Let's discuss your project.</p>
                <Button href="/contact" size="sm" fullWidth rightIcon={<ArrowRight size={14} />}>
                  Get in Touch
                </Button>
              </div>
            </aside>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-secondary mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map((p) => (
                  <Link key={p.id} href={`/blog/${p.id}`} className="group">
                    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-card transition-all duration-200 hover:-translate-y-1">
                      <div className={`h-32 bg-gradient-to-br ${p.gradient}`} />
                      <div className="p-4">
                        <span className="text-xs font-semibold text-primary">{p.category}</span>
                        <h3 className="font-bold text-secondary text-sm mt-1 line-clamp-2 group-hover:text-primary transition-colors">{p.title}</h3>
                        <span className="text-xs text-slate-400 mt-1 block">{p.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
