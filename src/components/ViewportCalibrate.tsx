import { useEffect } from 'react'

export default function ViewportCalibrate() {
  useEffect(() => {
    const root = document.documentElement
    const header = document.getElementById('site-header')
    if (!header) return

    const setVar = () => {
      const h = Math.round(header.getBoundingClientRect().height)
      root.style.setProperty('--nav-offset', `${h}px`)
    }

    setVar()
    const onScroll = () => {
      const nav = document.querySelector('.nav')
      if (!nav) return
      if (window.scrollY > 8) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
    const ro = new ResizeObserver(setVar)
    ro.observe(header)
    window.addEventListener('resize', setVar)
    window.addEventListener('scroll', onScroll)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setVar)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Scroll to top on initial mount for reload cases
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [])

  return null
}


