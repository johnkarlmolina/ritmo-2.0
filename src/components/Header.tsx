import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/ritmo-lgo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          {/* Left: Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
              <img src={logo} alt="Ritmo" className="h-8 w-auto mr-3" />
            </Link>
          </div>

          {/* Center: Nav (hidden on small screens) */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center gap-6 text-base text-[#2D7778] whitespace-nowrap font-medium">
              <NavLink to="/" end onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                About Us
              </NavLink>
              <NavLink to="/features" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Features
              </NavLink>
              {/* How It Works removed per request */}
              <NavLink to="/news" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                News
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-full inline-block ${isActive ? 'bg-emerald-100' : 'hover:bg-emerald-50'} text-[#2D7778] transition-colors`
                }>
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Right: CTA and mobile menu button */}
          <div className="flex items-center justify-end space-x-4 shrink-0">
            <Link to="/download" onClick={() => setOpen(false)} className="hidden sm:inline-block bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-4 py-2 rounded-md text-sm font-semibold shadow-sm whitespace-nowrap">Download Now!</Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 md:hidden hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
        <div className="md:hidden bg-white shadow-sm">
          <div className="px-4 py-3 space-y-1 text-center">
            <NavLink to="/" end onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'inline-block px-3 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'inline-block px-3 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              About Us
            </NavLink>
            <NavLink to="/features" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'inline-block px-3 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Features
            </NavLink>
            {/* How It Works removed per request */}
            <NavLink to="/news" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'inline-block px-3 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              News
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'inline-block px-3 py-2 rounded-full bg-emerald-100 text-[#2D7778]' : 'block text-[#2D7778] py-2'}>
              Contact
            </NavLink>
            <Link to="/download" onClick={() => setOpen(false)} className="inline-block bg-[#61CCB2] hover:bg-[#4FBDA4] text-white px-4 py-2 rounded-md text-sm font-semibold">Download Now!</Link>
          </div>
        </div>
      )}
    </header>
  )
}
