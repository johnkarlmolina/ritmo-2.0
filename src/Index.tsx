import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import phoneImg from './assets/ritmo-cp.png'
import handPhoneImg from './assets/hand-phone.png'
import bgImg from './assets/bg.png'

export default function Index() {
  // Page-scoped sliding animations with different directions per element
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (!entry.isIntersecting) return

          const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
          const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
          const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'))
          const images = Array.from(el.querySelectorAll<HTMLElement>('img'))
          const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-2xl,.rounded-3xl'))

          headings.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 400)
            node.style.transition = `transform 800ms ease-out ${delay}ms, opacity 800ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0)'
          })
          texts.forEach((node, idx) => {
            const delay = Math.min(idx * 60, 360)
            node.style.transition = `transform 700ms ease-out ${delay}ms, opacity 700ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateY(0)'
          })
          buttons.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 480)
            node.style.transition = `transform 700ms ease-out ${delay}ms, opacity 700ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateY(0)'
          })
          images.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 480)
            node.style.transition = `transform 800ms ease-out ${delay}ms, opacity 800ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0)'
          })
          cards.forEach((node, idx) => {
            const delay = Math.min(idx * 85, 510)
            node.style.transition = `transform 850ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 850ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0) scale(1)'
          })
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    )

    // Initialize state for specific element types with directional offsets
    sections.forEach((section) => {
      const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
      const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
      const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'))
      const images = Array.from(section.querySelectorAll<HTMLElement>('img'))
      const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-2xl,.rounded-3xl'))

      headings.forEach((node) => {
        node.style.willChange = 'transform, opacity'
        node.style.opacity = '0'
        node.style.transform = 'translateX(-24px)'
      })
      texts.forEach((node) => {
        node.style.willChange = 'transform, opacity'
        node.style.opacity = '0'
        node.style.transform = 'translateY(16px)'
      })
      buttons.forEach((node) => {
        node.style.willChange = 'transform, opacity'
        node.style.opacity = '0'
        node.style.transform = 'translateY(12px)'
      })
      images.forEach((node) => {
        node.style.willChange = 'transform, opacity'
        node.style.opacity = '0'
        node.style.transform = 'translateX(24px)'
      })
      cards.forEach((node, idx) => {
        node.style.willChange = 'transform, opacity'
        node.style.opacity = '0'
        const dir = idx % 2 === 0 ? -1 : 1
        node.style.transform = `translateX(${dir * 40}px) scale(.92)`
      })

      observer.observe(section)

      // Immediate reveal for already visible sections
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < vh && rect.bottom > 0) {
        requestAnimationFrame(() => {
          headings.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 400)
            node.style.transition = `transform 800ms ease-out ${delay}ms, opacity 800ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0)'
          })
          texts.forEach((node, idx) => {
            const delay = Math.min(idx * 60, 360)
            node.style.transition = `transform 700ms ease-out ${delay}ms, opacity 700ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateY(0)'
          })
          buttons.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 480)
            node.style.transition = `transform 700ms ease-out ${delay}ms, opacity 700ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateY(0)'
          })
          images.forEach((node, idx) => {
            const delay = Math.min(idx * 80, 480)
            node.style.transition = `transform 800ms ease-out ${delay}ms, opacity 800ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0)'
          })
          cards.forEach((node, idx) => {
            const delay = Math.min(idx * 85, 510)
            node.style.transition = `transform 850ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 850ms ease-out ${delay}ms`
            node.style.opacity = '1'
            node.style.transform = 'translateX(0) scale(1)'
          })
        })
      }
    })

    return () => observer.disconnect()
  }, [])
  return (
    <>
    <section
      className="relative min-h-screen overflow-hidden"
      data-reveal
      style={{
        backgroundImage:
          'linear-gradient(to right, #61CCB2 0%, #61CCB2 50%, #2D7778 50%, #2D7778 100%)',
      }}
    >
      {/* Puzzle-like center squares */}
      <div
        className="pointer-events-none absolute rounded-xl"
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: '#61CCB2',
          left: '50%',
          top: '40%',
          transform: 'translate(-40%, -50%)',
          
        }}
      />
      <div
        className="pointer-events-none absolute rounded-xl"
        style={{
          width: '10rem',
          height: '10rem',
          backgroundColor: '#2D7778',
          left: '50%',
          top: '66%',
          transform: 'translate(-60%, -50%)',
          
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          {/* Left: Heading, description, buttons */}
          <div className="md:pr-24">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-white">
              <span className="inline-block whitespace-nowrap">Empowering Daily</span><br />
              <span className="inline-block whitespace-nowrap">Routines, supporting</span><br />
              <span className="inline-block whitespace-nowrap">brighter days.</span>
            </h1>

            <p className="mt-6 text-white text-lg md:text-xl leading-relaxed text-justify">
              Ritmo short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/download"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                <span>Download Now</span>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-white font-semibold shadow-sm hover:bg-white/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span>Watch Demo</span>
              </Link>
            </div>
          </div>

          {/* Right: Image with shadow */}
          <div className="w-full md:pl-24">
            <div className="mx-auto w-full max-w-md">
              <img src={phoneImg} alt="Ritmo preview" className="w-full rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* What is Ritmo section */}
    <section className="bg-white" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-20 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778] text-center">What is Ritmo?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>

    {/* Key Features section */}
    <section className="" style={{ backgroundColor: '#61CCB2' }} data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Key Features</h2>
        <p className="mt-3 max-w-3xl mx-auto text-center text-white/90">
          Explore the core tools that make Ritmo simple, supportive, and child‑friendly.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Routine Builder','Visual Schedules','Positive Reminders','Progress Tracking'].map((title) => (
            <div key={title} className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg p-6 flex flex-col transition transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="h-12 w-12 rounded-xl bg-[#61CCB2]/20 mb-4" />
              <div className="font-semibold text-[#2D7778]">{title}</div>
              <div className="mt-2 text-sm text-gray-700">Brief description about this feature and how it helps.</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
              <Link to="/features" className="inline-flex items-center rounded-full border border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
                View All Features
              </Link>
        </div>
      </div>
    </section>

    {/* Why Ritmo Helps section */}
    <section className="bg-white min-h-screen flex items-center" data-reveal>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D7778]">Why Ritmo Helps</h2>
          <p className="mt-4 text-base md:text-lg text-gray-700">Benefits for everyone involved</p>
        </div>
        <div className="mt-14 grid gap-10 lg:gap-12 grid-cols-1 md:grid-cols-3">
          {[
            { title: 'For Children', items: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum'] },
            { title: 'For Parent', items: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum'] },
            { title: 'For Therapist', items: ['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum'] },
          ].map(block => (
            <div key={block.title} className="rounded-2xl bg-[#61CCB2]/20 border border-[#61CCB2]/40 shadow-md p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2D7778]">{block.title}</h3>
              <ul className="mt-6 space-y-3 text-[#2D7778] text-base">
                {block.items.map((item, idx) => (
                  <li key={`${block.title}-${idx}`} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-none"><path d="M20 6 9 17l-5-5"/></svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* See Ritmo in Action */}
    <section
      className="py-24 min-h-screen flex items-center"
      data-reveal
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D7778]">See Ritmo in Action</h2>
          <p className="mt-3 text-gray-700">Simple, intuitive, and beautiful</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: 'Setup Day Routine', subtitle: 'Interface 1' },
            { title: 'Progress Report', subtitle: 'Interface 2' },
            { title: 'Parent Settings', subtitle: 'Interface 3' },
          ].map(({ title, subtitle }) => (
            <div key={title} className="rounded-3xl bg-white shadow-md border-2 border-[#2B8A7A]/30 overflow-hidden h-full transition transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-10 flex items-center justify-center">
                <img src={phoneImg} alt={title} className="w-52 md:w-56 h-auto" />
              </div>
              <div className="px-8 pb-8">
                <div className="mt-2 rounded-2xl bg-[#61CCB2] text-white px-6 py-5">
                  <div className="font-bold text-xl">{title}</div>
                  <div className="text-white/90 text-sm">{subtitle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    
    {/* Availability Promo */}
    <section className="bg-white min-h-screen flex items-center py-16" data-reveal>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border-4 border-[#2B8A7A] bg-[#61CCB2] shadow-xl p-10 md:p-12 lg:p-14 min-h-[28rem] md:min-h-[32rem] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 items-center">
            {/* Image panel */}
            <div className="rounded-2xl bg-white/75 p-4 md:p-6 flex items-center justify-center transition transform hover:-translate-y-1 hover:shadow-xl">
              <img src={handPhoneImg} alt="Ritmo phone in hand" className="w-64 md:w-72 h-auto object-contain" />
            </div>
            {/* Content */}
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">
                The Ritmo App is now available for download on Android.
              </h3>
              <div className="mt-5">
                <div className="font-semibold">What does Ritmo do?</div>
                <ul className="mt-3 space-y-2 text-white/95">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-white" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-white" />
                    <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-transform hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                  <span>Download Now</span>
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-5 py-2.5 text-white font-semibold shadow-sm hover:bg-white/10 transition-transform hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>Watch Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Mission */}
    <section className="bg-gray-100 py-16 md:py-20" data-reveal>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">Our Mission</h3>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] text-white px-6 py-3 font-semibold shadow hover:opacity-90 transition-transform hover:-translate-y-0.5"
          >
            Learn More About Us
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
    {/* We'd love to hear from you */}
    <section className="min-h-[70vh] flex items-center" style={{ backgroundColor: '#61CCB2' }} data-reveal>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          We’d love to hear
          <br className="hidden sm:block" />
          from you.
        </h2>
        <p className="mt-4 text-white/90">
          Feel free to reach out for questions, support, or collaboration. We’re always ready to assist you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/download"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
            <span>Download Now - It’s Free</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-white font-semibold shadow-sm hover:bg-white/10 transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
