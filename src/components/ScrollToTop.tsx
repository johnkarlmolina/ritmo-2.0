import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If there's a hash (anchor), scroll to that element after navigation
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''))
      // Allow the new route to render before querying the element
      // First jump to the top so the motion feels like a full-page scroll
      window.scrollTo(0, 0)
      const t = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          // Account for fixed header height (main has pt-16 ≈ 64px)
          const headerOffset = 64
          const rect = el.getBoundingClientRect()
          const absoluteTop = rect.top + window.scrollY
          const targetTop = Math.max(absoluteTop - headerOffset, 0)
          window.scrollTo({ top: targetTop, behavior: 'smooth' })
        } else {
          // Fallback to top if element isn't found
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 50)
      return () => window.clearTimeout(t)
    }
    // No hash: default to scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}
