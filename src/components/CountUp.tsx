import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  durationMs?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({
  to,
  durationMs = 1600,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = useState<string>(() => `${prefix}${(0).toFixed(decimals)}${suffix}`)
  const startedRef = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const onIntersect: IntersectionObserverCallback = (entries, obs) => {
      const entry = entries[0]
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true
        const start = performance.now()
        const animate = (now: number) => {
          const elapsed = now - start
          const t = Math.min(1, elapsed / durationMs)
          const eased = easeOutCubic(t)
          const value = Number((eased * to).toFixed(decimals))
          setDisplay(`${prefix}${value}${suffix}`)
          if (t < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        obs.disconnect()
      }
    }

    const io = new IntersectionObserver(onIntersect, { threshold: 0.4 })
    io.observe(node)
    return () => io.disconnect()
  }, [to, durationMs, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${to}${suffix}`}>
      {display}
    </span>
  )
}


