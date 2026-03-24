import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/text-logo.png'
import { useLanguage } from '../context/LanguageContext'

const translations = {
  en: {
    home: 'Home',
    aboutUs: 'About Us',
    features: 'Features',
    news: 'News',
    contact: 'Contact',
    downloadNow: 'Download Now!',
  },
  tl: {
    home: 'Tahanan',
    aboutUs: 'Tungkol sa Amin',
    features: 'Mga Tampok',
    news: 'Balita',
    contact: 'Makipag-ugnayan',
    downloadNow: 'I-download Ngayon!',
  },
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const location = useLocation()

  const t = (key: keyof typeof translations.en) => translations[language as keyof typeof translations][key]

  const reloadIfSame = (path: string, e: React.MouseEvent) => {
    if (location.pathname === path) {
      e.preventDefault()
      window.location.reload()
    }
  }

  const [scrolled, setScrolled] = useState(false)
  const [mobileHidden, setMobileHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [activeSection, setActiveSection] = useState(location.pathname)

  useEffect(() => {
    setActiveSection(location.pathname)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      // Use a slightly larger threshold so top stays truly transparent
      setScrolled(y > 24)
      
      // Scroll Spy logic
      const sections = [
        { path: '/about', id: 'about-section' },
        { path: '/features', id: 'features-section' },
        { path: '/news', id: 'news-section' },
        { path: '/contact', id: 'contact-section' },
        { path: '/download', id: 'download-section' }
      ]
      
      let currentPath = '/' // Default to home
      // Use middle of screen as the threshold for an "active" section
      const vh = window.innerHeight || document.documentElement.clientHeight
      const threshold = vh / 2
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const { path, id } = sections[i]
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // If the top of the section is exactly or above the threshold
          if (rect.top <= threshold) {
            currentPath = path
            break
          }
        }
      }
      setActiveSection(currentPath)

      // Mobile auto-hide on scroll down, show on scroll up
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        const goingDown = y > lastY
        const distance = Math.abs(y - lastY)
        // small threshold to avoid flicker
        if (distance > 4) {
          if (goingDown && y > 16) setMobileHidden(true)
          else setMobileHidden(false)
          setLastY(y)
        }
      } else {
        // ensure visible on desktop
        setMobileHidden(false)
      }
    }
    // Do not force-run on mount; start as transparent
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <header
      className={`fixed left-0 right-0 z-9999 transition-all duration-500 transform ${scrolled ? 'top-2 md:top-4 px-4' : 'top-0 px-0'} ${mobileHidden ? '-translate-y-full md:translate-y-0' : 'translate-y-0'} `}
      style={{ paddingTop: scrolled ? '0' : 'env(safe-area-inset-top)' }}
    >
      <div 
        className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'max-w-5xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40 rounded-full' : 'max-w-7xl bg-slate-200/30 backdrop-blur-md border-b border-slate-200/40 rounded-none'}`} 
        style={!scrolled ? { paddingLeft: 'max(1rem, env(safe-area-inset-left))', paddingRight: 'max(1rem, env(safe-area-inset-right))' } : {}}
      >
        <div className="flex items-center h-16 md:h-20 px-4 md:px-6 gap-5">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link
              to="/"
              className="flex items-center"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault()
                  // Force full reload to refresh state
                  window.location.reload()
                }
                setOpen(false)
              }}
            >
              <img src={logo} alt="Ritmo text logo" className="h-14 md:h-16 lg:h-20 w-auto mr-4 drop-shadow" />
            </Link>
          </div>

          {/* Center/Right: Desktop nav; ensure space for burger with flex-1 justify-end */}
          <div className="flex-1 flex items-center justify-end gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-lg text-[#2D7778] whitespace-nowrap font-semibold">
              <Link to="/" onClick={(e) => { reloadIfSame('/', e); setOpen(false) }}
                className={`px-4 py-2 rounded-full inline-block ${activeSection === '/' ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`}>
                {t('home')}
              </Link>
              <Link to="/about" onClick={(e) => { reloadIfSame('/about', e); setOpen(false) }}
                className={`px-4 py-2 rounded-full inline-block ${activeSection === '/about' ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`}>
                {t('aboutUs')}
              </Link>
              <Link to="/features" onClick={(e) => { reloadIfSame('/features', e); setOpen(false) }}
                className={`px-4 py-2 rounded-full inline-block ${activeSection === '/features' ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`}>
                {t('features')}
              </Link>
              <Link to="/news" onClick={(e) => { reloadIfSame('/news', e); setOpen(false) }}
                className={`px-4 py-2 rounded-full inline-block ${activeSection === '/news' ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`}>
                {t('news')}
              </Link>
              <Link to="/contact" onClick={(e) => { reloadIfSame('/contact', e); setOpen(false) }}
                className={`px-4 py-2 rounded-full inline-block ${activeSection === '/contact' ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`}>
                {t('contact')}
              </Link>
              <Link to="/download" onClick={(e) => { 
                reloadIfSame('/download', e)
                setOpen(false)
              }} className="ml-2 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-5 py-2.5 rounded-lg text-base font-semibold shadow-sm whitespace-nowrap transition-colors">
                {t('downloadNow')}
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2D7778] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden fixed left-0 right-0 z-9998 bg-white/95 backdrop-blur shadow-lg border-t border-slate-100" style={{ top: 'calc(5rem + env(safe-area-inset-top))' }}>
          <div className="px-4 py-4 flex flex-col items-center space-y-3 text-center text-lg font-medium max-h-[calc(100vh-6rem)] overflow-auto">
            <Link to="/" onClick={(e) => { reloadIfSame('/', e); setOpen(false) }}
              className={`block w-full px-4 py-2 ${activeSection === '/' ? 'rounded-full bg-emerald-100 text-[#2D7778]' : 'text-[#2D7778]'}`}>
              {t('home')}
            </Link>
            <Link to="/about" onClick={(e) => { reloadIfSame('/about', e); setOpen(false) }}
              className={`block w-full px-4 py-2 ${activeSection === '/about' ? 'rounded-full bg-emerald-100 text-[#2D7778]' : 'text-[#2D7778]'}`}>
              {t('aboutUs')}
            </Link>
            <Link to="/features" onClick={(e) => { reloadIfSame('/features', e); setOpen(false) }}
              className={`block w-full px-4 py-2 ${activeSection === '/features' ? 'rounded-full bg-emerald-100 text-[#2D7778]' : 'text-[#2D7778]'}`}>
              {t('features')}
            </Link>
            <Link to="/news" onClick={(e) => { reloadIfSame('/news', e); setOpen(false) }}
              className={`block w-full px-4 py-2 ${activeSection === '/news' ? 'rounded-full bg-emerald-100 text-[#2D7778]' : 'text-[#2D7778]'}`}>
              {t('news')}
            </Link>
            <Link to="/contact" onClick={(e) => { reloadIfSame('/contact', e); setOpen(false) }}
              className={`block w-full px-4 py-2 ${activeSection === '/contact' ? 'rounded-full bg-emerald-100 text-[#2D7778]' : 'text-[#2D7778]'}`}>
              {t('contact')}
            </Link>
            <Link to="/download" onClick={(e) => { 
              reloadIfSame('/download', e)
              setOpen(false)
            }} className="block w-full bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-5 py-3 rounded-lg text-base font-semibold">{t('downloadNow')}</Link>
          </div>
        </div>
      )}
    </header>
  )
}
