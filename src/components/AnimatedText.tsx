import { useEffect, useMemo, useRef } from 'react'

type AnimatedTextProps = {
  lines: string[]
  as?: keyof JSX.IntrinsicElements
  className?: string
  delayPerLineMs?: number
  delayPerWordMs?: number
}

export default function AnimatedText({
  lines,
  as = 'h1',
  className,
  delayPerLineMs = 180,
  delayPerWordMs = 26,
}: AnimatedTextProps) {
  const Tag = as as any
  const containerRef = useRef<HTMLDivElement | null>(null)

  const tokenized = useMemo(() => {
    return lines.map(line => line.split(/\s+/g))
  }, [lines])

  useEffect(() => {
    // trigger reflow-based animation on mount
    const node = containerRef.current
    if (!node) return
    // Reset state
    node.querySelectorAll('[data-word]').forEach(el => el.classList.remove('is-revealed'))
    const words = Array.from(node.querySelectorAll<HTMLElement>('[data-word]'))
    words.forEach((word, idx) => {
      const lineIdx = Number(word.dataset.lineIndex || 0)
      const base = lineIdx * delayPerLineMs
      const totalDelay = base + idx * delayPerWordMs
      word.style.setProperty('--delay', `${totalDelay}ms`)
      requestAnimationFrame(() => {
        word.classList.add('is-revealed')
      })
    })
  }, [tokenized, delayPerLineMs, delayPerWordMs])

  return (
    <Tag className={className}>
      <span ref={containerRef} className="animated-text">
        {tokenized.map((words, lineIndex) => (
          <span key={lineIndex} className="animated-text__line">
            {words.map((w, i) => (
              <span
                key={i}
                data-word
                data-line-index={lineIndex}
                className="animated-text__word"
              >
                {w}
                <span className="animated-text__space"> </span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </Tag>
  )
}


