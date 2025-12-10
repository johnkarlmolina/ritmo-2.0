import { Link } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import type React from 'react'
import { useNetworkAwareLoading } from './hooks/useNetworkAwareLoading'
import { GlobalLoadingScreen } from './components/GlobalLoadingScreen'
import { useLanguage } from './context/LanguageContext'
import { translations } from './utils/translations'
import handPhoneImg from './assets/hand-phone.png'
import feature1 from './assets/Feature-1.png'
import feature2 from './assets/Feature-2.png'
import feature3 from './assets/Feature-3.png'
import feature4 from './assets/Feature-4.png'
import frontViewChild from './assets/front-view-kid-making-puzzle-table.jpg'
import istockPhoto from './assets/istockphoto-2030023202-612x612.jpg'
import sideViewChild from './assets/side-view-child-learning-how-count-home-using-pencils.jpg'
import ritmoOldLogo from './assets/ritmo-old-log.png'
import ausLogo from './assets/AUS.png'
// Removed sections no longer use these assets

export default function Index() {
  const { isLoading, progress } = useNetworkAwareLoading()
  const { language } = useLanguage()
  const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

  // Preload feature images
  useEffect(() => {
    const images = [feature1, feature2, feature3, feature4]
    images.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Sliding / reveal animations similar to other pages
  // Run only after loading screen finishes so sections exist in the DOM
  useEffect(() => {
    if (isLoading) return
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

    // Ensure elements already in view reveal on initial load without scrolling
    const vh = window.innerHeight || document.documentElement.clientHeight
    sections.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < vh && rect.bottom > 0) {
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
      }
    })
    return () => observer.disconnect()
  }, [isLoading])
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
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">{t('whatIsAutism')}</h2>
              <p className="mt-4 text-gray-800 leading-relaxed">
                {t('autismDesc')}
              </p>
            </div>

            {/* Right column: definition card */}
            <div className="w-full">
              <div className="rounded-2xl bg-gradient-to-b from-[#61CCB2] to-[#2D7778] text-white shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-white/90 text-[#2D7778] font-bold px-3 py-1">{t('autism')}</span>
                  <span className="text-white/90">{t('autismPronunciation')}</span>
                </div>
                <div className="mt-4 border-t border-white/40" />
                <p className="mt-4 text-white/95 text-sm md:text-base leading-relaxed">
                  {t('autismDefinition')}
                </p>
              </div>
            </div>
          </div>

          {/* Full-width: Routine for Autism */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D7778]">{t('routineForAutism')}</h3>
            <p className="mt-4 text-gray-800 leading-relaxed">
              {t('routineDesc')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 items-center">
            {/* Text column (right on desktop) */}
            <div className="w-full md:pl-6 md:order-2 order-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">{t('whatIsRitmo')}</h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                {t('ritmoDesc1')}
              </p>
              <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                {t('ritmoDesc2')}
              </p>
            </div>
            {/* Logo image (left on desktop, nudged right and slightly larger) */}
            <div className="w-full flex items-start justify-center md:justify-end md:pr-6 md:order-1 order-1">
              <img src={ritmoOldLogo} alt="Ritmo logo" className="w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[24rem] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features section */}
      <section className="" style={{ backgroundColor: '#61CCB2' }} data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">{t('keyFeatures')}</h2>
          <p className="mt-3 max-w-3xl mx-auto text-center text-white/90">
            {t('keyFeaturesDesc')}
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {[
              { title: t('autismFriendly'), desc: t('autismFriendlyDesc'), img: feature1 },
              { title: t('parentalControl'), desc: t('parentalControlDesc'), img: feature2 },
              { title: t('entertainment'), desc: t('entertainmentDesc'), img: feature3 },
              { title: t('progressTracking'), desc: t('progressTrackingDesc'), img: feature4 },
            ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg p-8 w-full max-w-sm min-h-[520px] flex flex-col items-center text-center justify-between transition transform hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-[#2D7778]/30"
                >
                  <img
                    src={f.img}
                    alt={`${f.title} icon`}
                    className="mb-6 w-55 h-67 md:w-65 md:h-75 object-contain"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="text-[#2D7778] font-extrabold text-xl md:text-2xl">{f.title}</div>
                  <div className="mt-2 text-lg md:text-xl text-gray-700 leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/features" className="inline-flex items-center rounded-full border border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
              {t('viewAllFeatures')}
            </Link>
          </div>
        </div>
      </section>

      {/* We Recommend */}
      <section className="py-12 md:py-16 bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border-2 border-gray-300 rounded-3xl shadow-lg px-8 md:px-12 lg:px-20 py-12 md:py-16 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-2" style={{ color: '#2D7778' }}>We Recommend</h3>
            <p className="text-center text-lg mb-10" style={{ color: '#2D7778' }}>Visiting this website</p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12" style={{ gap: '7.5rem' }}>
              <div className="flex-shrink-0">
                <img src={ausLogo} alt="Autism Society Philippines" className="w-auto" style={{ height: '10rem' }} />
              </div>
              <div className="flex flex-col gap-6 lg:max-w-md">
                <div>
                  <p className="font-semibold text-2xl mb-2" style={{ color: '#2D7778' }}>Website:</p>
                  <a href="http://www.autismsocietyphilippines.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-base break-words">http://www.autismsocietyphilippines.org/</a>
                </div>
                <div>
                  <p className="font-semibold text-lg mb-4" style={{ color: '#2D7778' }}>You can also visit them on:</p>
                  <div className="flex gap-4 items-center">
                    <a href="https://www.instagram.com/autismsocietyphilippines/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/AutismSocietyPhilippines" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://twitter.com/autismsocietyph" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ritmo is now available (restored, full width) */}
      <section className="py-16 md:py-20 mt-12 md:mt-16 mb-12 md:mb-16" style={{ backgroundColor: '#61CCB2' }} data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10 md:gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img src={handPhoneImg} alt="Ritmo phone in hand" className="w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow" />
            </div>
            {/* Content */}
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">{t('ritmoAppAvailable')}</h3>
              <p className="mt-4 text-white/95 text-base md:text-lg max-w-2xl">
                {t('buildCalmStructured')}
              </p>
              <ul className="mt-5 space-y-2 text-white/95 text-sm md:text-base">
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-white" />{t('visualRoutines')}</li>
                <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-white" />{t('positiveFeedback')}</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-transform hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                  <span>{t('downloadNow')}</span>
                </Link>
                <Link
                  to="/features#how-ritmo-works"
                  className="inline-flex items-center gap-2 rounded-full border border-white bg-transparent px-6 py-3 text-white font-semibold shadow-sm hover:bg-white/10 transition-transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>{t('watchDemo')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function SliderHero() {
  const { language } = useLanguage()
  const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

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
        title: t('sliderTitle1'),
        desc: t('sliderDesc1'),
      },
      {
        title: t('sliderTitle2'),
        desc: t('sliderDesc2'),
      },
      {
        title: t('sliderTitle3'),
        desc: t('sliderDesc3'),
      },
    ],
    [language]
  )
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const touchStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const touchLastRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

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
      onTouchStart={(e: React.TouchEvent) => {
        const t = e.touches[0]
        ;(touchStartRef.current.x = t.clientX), (touchStartRef.current.y = t.clientY)
        touchLastRef.current.x = t.clientX
        touchLastRef.current.y = t.clientY
        setPaused(true)
      }}
      onTouchMove={(e: React.TouchEvent) => {
        const t = e.touches[0]
        touchLastRef.current.x = t.clientX
        touchLastRef.current.y = t.clientY
      }}
      onTouchEnd={() => {
        const dx = touchLastRef.current.x - touchStartRef.current.x
        const dy = touchLastRef.current.y - touchStartRef.current.y
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next()
          else prev()
        }
        setTimeout(() => setPaused(false), 250)
      }}
    >
      {/* Image layer */}
      <div className="relative h-[80vh] md:h-[92vh] lg:h-screen overflow-hidden">
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
              {index === 0 ? (
                <p className="mt-3 md:mt-4 text-slate-900 text-lg md:text-xl leading-relaxed drop-shadow">
                  {contents[index].desc}
                </p>
              ) : (
                <div className="mt-3 md:mt-4 space-y-2">
                  {contents[index].desc.split(' • ').map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-green-600 flex-shrink-0 mt-0.5 drop-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-slate-900 text-lg md:text-xl leading-relaxed drop-shadow">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-3">
                <Link to="/download" className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] border-2 border-white px-6 py-3 md:px-7 md:py-3.5 shadow-lg hover:bg-[#4FBDA4] transition-colors text-white font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <path d="M7 10l5 5 5-5"/>
                    <path d="M12 15V3"/>
                  </svg>
                  {t('downloadNow')}
                </Link>
                <Link to="/features" className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] border-2 border-white px-6 py-3 md:px-7 md:py-3.5 shadow-lg hover:bg-[#4FBDA4] transition-colors text-white font-semibold">
                  {t('viewAllFeatures')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="hidden md:block absolute left-3 md:left-4 bottom-16 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="hidden md:block absolute right-3 md:right-4 bottom-16 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
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
