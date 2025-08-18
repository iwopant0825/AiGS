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
    const ro = new ResizeObserver(setVar)
    ro.observe(header)
    window.addEventListener('resize', setVar)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setVar)
    }
  }, [])

  return null
}


