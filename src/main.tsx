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
  // Feature-like global animations for all sections
  const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
  sections.forEach((section, index) => {
    section.setAttribute('data-section', String(index))
    section.classList.add('transition-all','duration-1000','ease-out','transform')
    if (!section.classList.contains('opacity-100')) {
      section.classList.add('opacity-0','translate-y-10')
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-10')
          el.classList.add('opacity-100', 'translate-y-0')
          // Try directional animation for first/last direct children
          const first = el.querySelector<HTMLElement>(':scope > *:first-child')
          const last = el.querySelector<HTMLElement>(':scope > *:last-child')
          if (first) {
            first.style.transition = 'transform 1000ms ease-out, opacity 1000ms ease-out'
            if (!first.dataset._init) {
              first.style.opacity = '0'
              first.style.transform = 'translateX(-24px)'
              first.dataset._init = '1'
            }
            first.style.opacity = '1'
            first.style.transform = 'translateX(0)'
          }
          if (last && last !== first) {
            last.style.transition = 'transform 1000ms ease-out, opacity 1000ms ease-out'
            if (!last.dataset._init) {
              last.style.opacity = '0'
              last.style.transform = 'translateX(24px)'
              last.dataset._init = '1'
            }
            last.style.opacity = '1'
            last.style.transform = 'translateX(0)'
          }
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  )

  const targets = Array.from(document.querySelectorAll<HTMLElement>('section, [data-reveal]'))
  targets.forEach((el) => {
    el.classList.add('opacity-0','translate-y-10','transition-all','duration-1000','ease-out','transform')
    observer.observe(el)
    const rect = el.getBoundingClientRect()
    const viewportH = window.innerHeight || document.documentElement.clientHeight
    const visible = rect.top < viewportH && rect.bottom > 0
    if (visible) {
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0','translate-y-10')
        el.classList.add('opacity-100','translate-y-0')
        const first = el.querySelector<HTMLElement>(':scope > *:first-child')
        const last = el.querySelector<HTMLElement>(':scope > *:last-child')
        if (first) {
          first.style.transition = 'transform 1000ms ease-out, opacity 1000ms ease-out'
          first.style.opacity = '1'
          first.style.transform = 'translateX(0)'
        }
        if (last && last !== first) {
          last.style.transition = 'transform 1000ms ease-out, opacity 1000ms ease-out'
          last.style.opacity = '1'
          last.style.transform = 'translateX(0)'
        }
      })
    }
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal)
} else {
  initReveal()
}
