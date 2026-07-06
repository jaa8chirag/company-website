'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
  className?: string
  separator?: string
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2.2,
  decimals = 0,
  className,
  separator = ',',
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
          prefix={prefix}
          decimals={decimals}
          separator={separator}
          useEasing
          easingFn={(t, b, c, d) => {
            t /= d
            t--
            return c * (t * t * t + 1) + b
          }}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
