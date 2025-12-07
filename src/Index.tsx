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
// Removed sections no longer use these assets

export default function Index() {
  const { isLoading, progress } = useNetworkAwareLoading()
  const { language } = useLanguage()
  const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">{t('keyFeatures')}</h2>
          <p className="mt-3 max-w-3xl mx-auto text-center text-white/90">
            {t('keyFeaturesDesc')}
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('autismFriendly'), desc: t('autismFriendlyDesc'), img: feature1 },
              { title: t('parentalControl'), desc: t('parentalControlDesc'), img: feature2 },
              { title: t('entertainment'), desc: t('entertainmentDesc'), img: feature3 },
              { title: t('progressTracking'), desc: t('progressTrackingDesc'), img: feature4 },
            ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-lg p-8 max-w-sm w-full min-h-[520px] flex flex-col items-center text-center justify-between transition transform hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-[#2D7778]/30"
                >
                  <img
                    src={f.img}
                    alt={`${f.title} icon`}
                    className="mb-6 w-55 h-67 md:w-65 md:h-75 object-contain"
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

      {/* Why Ritmo Helps section */}
      <section className="bg-white" data-reveal>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D7778]">{t('whyRitmoHelps')}</h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">{t('benefitsForEveryone')}</p>
          </div>
          <div className="mt-14 grid gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 place-items-center">
            {[
              { title: t('forChildren'), items: [t('childBenefit1'), t('childBenefit2'), t('childBenefit3'), t('childBenefit4')] },
              { title: t('forParent'), items: [t('parentBenefit1'), t('parentBenefit2'), t('parentBenefit3'), t('parentBenefit4')] },
            ].map(block => (
              <div key={block.title} className="w-full rounded-2xl bg-[#61CCB2]/20 border border-[#61CCB2]/40 shadow-md p-8 md:p-10 transition transform hover:-translate-y-1 hover:shadow-xl">
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

      {/* See Ritmo in Action - removed per request */}
      
      {/* Availability Promo - removed per request */}

      {/* Our Mission */}
      <section className="py-12 md:py-16 bg-white" data-reveal>
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-100 rounded-3xl shadow-md px-6 md:px-10 lg:px-16 py-10 md:py-14 text-center">
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#2D7778]">{t('ourMission')}</h3>
            <p className="mt-4 text-gray-700 text-lg md:text-xl">
             {t('missionStatement')}
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] text-white px-6 py-3 font-semibold shadow hover:opacity-90 transition-transform hover:-translate-y-0.5"
              >
                {t('learnMoreAboutUs')}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
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
        ctaLabel: t('downloadNow'),
        ctaHref: '/download',
      },
      {
        title: t('sliderTitle2'),
        desc: t('sliderDesc2'),
        ctaLabel: t('viewAllFeatures'),
        ctaHref: '/features',
      },
      {
        title: t('sliderTitle3'),
        desc: t('sliderDesc3'),
        ctaLabel: t('learnMoreAboutUs'),
        ctaHref: '/about',
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
