import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/ritmo-lgo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'} `}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-7xl mx-auto px-4" style={{ paddingLeft: 'max(1rem, env(safe-area-inset-left))', paddingRight: 'max(1rem, env(safe-area-inset-right))' }}>
        <div className="flex items-center h-20 gap-5">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img src={logo} alt="Ritmo" className="h-12 w-auto mr-4" />
            </Link>
          </div>

          {/* Center/Right: Desktop nav; ensure space for burger with flex-1 justify-end */}
          <div className="flex-1 flex items-center justify-end">
            <nav className="hidden md:flex items-center gap-6 text-lg text-[#2D7778] whitespace-nowrap font-semibold">
              <NavLink to="/" end onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                About Us
              </NavLink>
              <NavLink to="/features" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Features
              </NavLink>
              {/* How It Works removed per request */}
              <NavLink to="/news" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                News
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Contact
              </NavLink>
              <Link to="/download" onClick={() => setOpen(false)} className="ml-2 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-5 py-2.5 rounded-lg text-base font-semibold shadow-sm whitespace-nowrap transition-colors">
                Download Now!
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#2D7778] md:hidden hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
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

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden fixed left-0 right-0 z-[9998] bg-white/95 backdrop-blur shadow-lg border-t border-slate-100" style={{ top: 'calc(6rem + env(safe-area-inset-top))' }}>
          <div className="px-4 py-4 flex flex-col items-center space-y-3 text-center text-lg font-medium max-h-[calc(100vh-6rem)] overflow-auto">
            <NavLink to="/" end onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'block px-4 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'block px-4 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              About Us
            </NavLink>
            <NavLink to="/features" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'block px-4 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Features
            </NavLink>
            {/* How It Works removed per request */}
            <NavLink to="/news" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'block px-4 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              News
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'block px-4 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Contact
            </NavLink>
            <Link to="/download" onClick={() => setOpen(false)} className="block bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-5 py-3 rounded-lg text-base font-semibold">Download Now!</Link>
          </div>
        </div>
      )}
    </header>
  )
}
