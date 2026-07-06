'use client'

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-white' | 'ghost' | 'white' | 'danger'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  href?: string
  external?: boolean
  fullWidth?: boolean
  rounded?: boolean
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary-700 text-white shadow-sm hover:shadow-glow active:scale-[0.98] border border-primary hover:border-primary-700',
  secondary:
    'bg-secondary hover:bg-secondary-light text-white shadow-sm active:scale-[0.98] border border-secondary',
  outline:
    'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]',
  'outline-white':
    'bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-secondary active:scale-[0.98]',
  ghost:
    'bg-transparent text-primary hover:bg-primary/10 active:scale-[0.98] border border-transparent hover:border-primary/20',
  white:
    'bg-white text-primary hover:bg-primary hover:text-white shadow-sm active:scale-[0.98] border border-white',
  danger:
    'bg-danger hover:bg-red-700 text-white shadow-sm active:scale-[0.98] border border-danger',
}

const sizeStyles: Record<ButtonSize, string> = {
  xs: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
  sm: 'text-sm px-4 py-2 rounded-xl gap-2',
  md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
  lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5',
  xl: 'text-lg px-9 py-4 rounded-2xl gap-3',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      href,
      external = false,
      fullWidth = false,
      rounded = false,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none btn-ripple whitespace-nowrap',
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && 'w-full',
      rounded && '!rounded-full',
      className,
    )

    const content = (
      <>
        {loading ? (
          <Loader2 className="animate-spin" size={size === 'xs' ? 12 : size === 'sm' ? 14 : 16} />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!loading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </>
    )

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {content}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={classes}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {content}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'
export default Button
