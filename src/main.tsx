import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// Global IntersectionObserver toggling Tailwind utility classes for reveal animations
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-6')
          el.classList.add('opacity-100', 'translate-y-0')
        }
        // Do not revert on exit; avoid hiding content.
      })
    },
    { threshold: 0.05 }
  )

  const reveals = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  reveals.forEach((el) => {
    // Set initial Tailwind-based hidden state
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-in-out')
    observer.observe(el)
    // If currently visible, reveal immediately
    const rect = el.getBoundingClientRect()
    const viewportH = window.innerHeight || document.documentElement.clientHeight
    const visible = rect.top < viewportH && rect.bottom > 0
    if (visible) {
      el.classList.remove('opacity-0', 'translate-y-6')
      el.classList.add('opacity-100', 'translate-y-0')
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal)
} else {
  initReveal()
}
