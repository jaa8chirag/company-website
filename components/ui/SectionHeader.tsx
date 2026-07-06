'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = false,
  light = false,
  className,
  size = 'md',
}: SectionHeaderProps) {
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl lg:text-5xl',
    lg: 'text-4xl md:text-5xl lg:text-6xl',
  }

  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>
    }

    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={cn(centered && 'text-center', className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border',
            light
              ? 'bg-white/10 text-white border-white/20 backdrop-blur-sm'
              : 'bg-primary/10 text-primary border-primary/20',
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'font-extrabold leading-tight tracking-tight mb-4',
          titleSizes[size],
          light ? 'text-white' : 'text-secondary',
        )}
      >
        {renderTitle()}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            'leading-relaxed',
            size === 'lg' ? 'text-lg md:text-xl' : 'text-base md:text-lg',
            light ? 'text-white/70' : 'text-slate-500',
            centered ? 'max-w-2xl mx-auto' : 'max-w-2xl',
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
