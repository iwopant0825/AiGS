import { PropsWithChildren, useEffect, useRef } from 'react'

type RevealProps = PropsWithChildren<{
  delayMs?: number
}>

export default function Reveal({ children, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const io = new IntersectionObserver(entries => {
      const e = entries[0]
      if (e.isIntersecting) {
        node.style.setProperty('--reveal-delay', `${delayMs}ms`)
        node.classList.add('is-visible')
        io.disconnect()
      }
    }, { threshold: 0.2 })
    io.observe(node)
    return () => io.disconnect()
  }, [delayMs])
  return <div ref={ref} className="reveal">{children}</div>
}


