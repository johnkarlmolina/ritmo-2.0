import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { useNetworkAwareLoading } from './hooks/useNetworkAwareLoading'
import { GlobalLoadingScreen } from './components/GlobalLoadingScreen'
import frontViewChild from './assets/front-view-kid-making-puzzle-table.jpg'
import istockPhoto from './assets/istockphoto-2030023202-612x612.jpg'
import sideViewChild from './assets/side-view-child-learning-how-count-home-using-pencils.jpg'
import ritmoOldLogo from './assets/ritmo-old-log.png'
import bgImg from './assets/bg.png'
import cra1 from './assets/CRA-1.png'
import cra2 from './assets/CRA-2.png'
import cra3 from './assets/CRA-3.png'
import handPhoneImg from './assets/hand-phone.png'

export default function Index() {
  const { isLoading, progress } = useNetworkAwareLoading()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Sliding / reveal animations similar to other pages
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[data-reveal]'))
    const hide = (el: HTMLElement) => {
      const headings = el.querySelectorAll<HTMLElement>('h1,h2,h3')
      const texts = el.querySelectorAll<HTMLElement>('p,li')
      const buttons = el.querySelectorAll<HTMLElement>('a,button')
      const cards = el.querySelectorAll<HTMLElement>('.rounded-2xl,.rounded-3xl')
      headings.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translate(-42px,-18px) scale(.94)'; })
      texts.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(34px) scale(.94)'; })
      buttons.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; })
      cards.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88)'; })
    }
    sections.forEach(hide)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          const headings = el.querySelectorAll<HTMLElement>('h1,h2,h3')
          const texts = el.querySelectorAll<HTMLElement>('p,li')
          const buttons = el.querySelectorAll<HTMLElement>('a,button')
          const cards = el.querySelectorAll<HTMLElement>('.rounded-2xl,.rounded-3xl')
          requestAnimationFrame(() => {
            headings.forEach((node, idx) => {
              const d = Math.min(idx * 90, 450)
              node.style.transition = `transform 820ms cubic-bezier(.16,.68,.44,1.02) ${d}ms, opacity 820ms ease-out ${d}ms`
              node.style.opacity = '1'; node.style.transform = 'translate(0,0) scale(1)'
            })
            texts.forEach((node, idx) => {
              const d = Math.min(idx * 70, 420)
              node.style.transition = `transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 760ms ease-out ${d}ms`
              node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1)'
            })
            buttons.forEach((node, idx) => {
              const d = Math.min(idx * 80, 480)
              node.style.transition = `transform 700ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 700ms ease-out ${d}ms`
              node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1)'
            })
            cards.forEach((node, idx) => {
              const d = Math.min(idx * 75, 480)
              node.style.transition = `transform 880ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 800ms ease-out ${d}ms`
              node.style.opacity = '1'; node.style.transform = 'translateY(0) scale(1)'
            })
          })
        } else {
          // Re-hide for re-trigger on future scroll-in
          hide(el)
        }
      })
    }, { threshold: 0.15 })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  // Show loading screen while content is loading
  if (isLoading) {
    return <GlobalLoadingScreen isLoading={isLoading} progress={progress} />
  }

  return (
    <>
      <section className="relative mt-4" data-reveal>
        <SliderHero />
      </section>

      {/* What is autism? */}
      <section className="bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
          {/* Top row: What is autism + definition card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left column: heading + paragraphs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">What is autism?</h2>
              <p className="mt-4 text-gray-800 leading-relaxed">
                Autism, or autism spectrum disorder (ASD), is a developmental condition marked by differences in social communication, interaction, sensory processing, and
                behavior. People on the spectrum may have a strong need for routines, focused interests, and repetitive actions. These characteristics usually appear in early
                childhood and continue throughout a person’s life. As a neurodevelopmental disorder, autism is formally diagnosed when these traits create notable differences
                in everyday functioning beyond what is typical for someone’s age or environment. Because autism exists on a spectrum, individuals can have very different
                experiences and levels of support needs ranging from minimal assistance to being non‑speaking or requiring full‑time care.
              </p>
            </div>

            {/* Right column: definition card */}
            <div className="w-full">
              <div className="rounded-2xl bg-gradient-to-b from-[#61CCB2] to-[#2D7778] text-white shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-white/90 text-[#2D7778] font-bold px-3 py-1">Autism</span>
                  <span className="text-white/90">aa·ti·zm</span>
                </div>
                <div className="mt-4 border-t border-white/40" />
                <p className="mt-4 text-white/95 text-sm md:text-base leading-relaxed">
                  The term “autism” comes from the Greek word auto, meaning “self.” Because autistic individuals can have many different traits and abilities, autism is
                  recognized as a spectrum of conditions. This spectrum ranges from people who struggle with social interaction to those who are non‑speaking. Autism may be
                  diagnosed by a professional or self‑identified by an individual, and people with autism are often described as autistic.
                </p>
              </div>
            </div>
          </div>

          {/* Full-width: Routine for Autism */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D7778]">Routine for Autism</h3>
            <p className="mt-4 text-gray-800 leading-relaxed">
              Autistic individuals often share that routines, rituals, and organized planning help them cope with stress by adding predictability and structure to their daily
              lives. These consistent patterns can support self‑regulation, help maintain energy levels by giving the day a clear flow, and make it easier to handle changes.
              By creating a sense of order, routines also reduce anxiety and provide stability in a world that can sometimes feel unpredictable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Text column (left on desktop) */}
            <div className="w-full md:pr-6 md:order-1 order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">What is Ritmo?</h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Ritmo is a daily routine tracker designed to support children with autism and their families. It helps make everyday tasks easier through visual guides,
                voice feedback, alarms, and engaging mini‑games that turn routines into enjoyable activities.
              </p>
              <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Ritmo also includes parent‑focused tools such as a parental lock and a progress tracker so parents can guide their child safely and monitor growth over time.
                It’s a simple, supportive app built to bring structure, clarity, and fun to each day.
              </p>
            </div>
            {/* Logo image (right on desktop) */}
            <div className="w-full flex items-start justify-center md:justify-end md:pl-0 md:order-2 order-1">
              <img src={ritmoOldLogo} alt="Ritmo logo" className="w-48 sm:w-64 md:w-72 lg:w-80 xl:w-88 h-auto object-contain" />
            </div>
          </div>
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
              { title: 'Setup Day Routine', subtitle: 'Interface 1', img: cra1 },
              { title: 'Progress Report', subtitle: 'Interface 2', img: cra2 },
              { title: 'Parent Settings', subtitle: 'Interface 3', img: cra3 },
            ].map(({ title, subtitle, img }) => (
              <div key={title} className="rounded-3xl bg-white shadow-md border-2 border-[#2B8A7A]/30 overflow-hidden h-full transition transform hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-10 flex items-center justify-center">
                  <img src={img} alt={title} className="w-52 md:w-56 h-auto" />
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
              {/* Close content block */}
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

function SliderHero() {
  const slides = useMemo(
    () => [
      { src: frontViewChild, alt: 'Child making puzzle at table' },
      { src: istockPhoto, alt: 'Therapist supporting child learning' },
      { src: sideViewChild, alt: 'Child learning to count at home' },
    ],
    []
  )
  const contents = useMemo(
    () => [
      {
        title: 'Guiding every step with care.',
        desc:
          'Ritmo is a daily routine tracker designed for children with autism — combining structured tasks with audio‑visual aids, voice feedback, and playful mini‑games to make every step clearer, calmer, and more engaging.',
        ctaLabel: 'Download Ritmo',
        ctaHref: '/download',
      },
      {
        title: 'Together with parents, Ritmo builds better habits.',
        desc:
          'Built in collaboration with parents, Ritmo features parental lock controls and a clear progress tracker to help parents monitor their children and support safe, guided, and meaningful daily routines.',
        ctaLabel: 'See all features',
        ctaHref: '/features',
      },
      {
        title: 'Our Mission to Support Families',
        desc:
          'To empower parents and support children with autism by providing intuitive, engaging tools that make daily routines safe, structured, and meaningful.',
        ctaLabel: 'More about us',
        ctaHref: '/about',
      },
    ],
    []
  )
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [paused, slides.length])

  const goTo = (i: number) => setIndex(i % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image layer */}
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        {slides.map((s, i) => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              imageRendering: 'crisp-edges',
              filter: 'contrast(1.08) saturate(1.08) brightness(1.05)',
              backfaceVisibility: 'hidden',
              perspective: '1000px',
              willChange: 'transform',
            }}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
          />
        ))}
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
        {/* Text overlay (absolute in front of image) */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">
            <div className="max-w-xl md:max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight drop-shadow-md">
                {contents[index].title}
              </h2>
              <p className="mt-3 md:mt-4 text-slate-900 text-base md:text-lg leading-relaxed drop-shadow">
                {contents[index].desc}
              </p>
              <div className="mt-4 md:mt-6">
                {(() => {
                  const isDownload = contents[index].ctaHref === '/download'
                  const base = 'inline-flex items-center gap-2 rounded-full bg-[#61CCB2] border-2 border-white px-6 py-3 md:px-7 md:py-3.5 shadow-lg hover:bg-[#4FBDA4] transition-colors'
                  const text = isDownload ? 'text-white font-bold' : 'text-white font-semibold'
                  return (
                    <Link to={contents[index].ctaHref} className={`${base} ${text}`}>
                      {isDownload && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <path d="M7 10l5 5 5-5"/>
                          <path d="M12 15V3"/>
                        </svg>
                      )}
                      {contents[index].ctaLabel}
                    </Link>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'} hover:bg-white`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
