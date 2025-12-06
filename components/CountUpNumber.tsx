'use client'

import { useCountUp } from '@/hooks/useCountUp'

interface CountUpNumberProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CountUpNumber({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpNumberProps) {
  const { ref, count } = useCountUp({
    end,
    duration,
    decimals,
    suffix,
    prefix,
  })

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}

