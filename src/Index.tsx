import { Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import type React from 'react'
import { useNetworkAwareLoading } from './hooks/useNetworkAwareLoading'
import { GlobalLoadingScreen } from './components/GlobalLoadingScreen'
import { useLanguage } from './context/LanguageContext'
import { translations } from './utils/translations'
import About from './pages/about'
import Features from './pages/feature'
import News from './pages/news'
import Contact from './pages/contact'
import Download from './pages/download'
import HIMG from './assets/H.png'
import feature1 from './assets/Home.png'
import feature2 from './assets/Parental Lock.png'
import feature3 from './assets/Feature-3.png'
import feature4 from './assets/Progress.png'
import frontViewChild from './assets/front-view-kid-making-puzzle-table.jpg'
import istockPhoto from './assets/istockphoto-2030023202-612x612.jpg'
import sideViewChild from './assets/side-view-child-learning-how-count-home-using-pencils.jpg'
//import ritmoOldLogo from './assets/ritmo-old-log.png'
import ausLogo from './assets/AUS.png'
// Removed sections no longer use these assets

export default function Index() {
  const { isLoading, progress } = useNetworkAwareLoading()
  const { language } = useLanguage()
  const location = useLocation()
  const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

  // Preload critical images for faster loading
  useEffect(() => {
    const criticalImages = [
      // Slider images - highest priority
      frontViewChild,
      istockPhoto,
      sideViewChild,
      // Feature images
      feature1,
      feature2,
      feature3,
      feature4,
      // Other critical images
      HIMG,
      ausLogo
    ]
    
    criticalImages.forEach((src, index) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      // Prioritize slider and feature images
      if (index < 7) {
        link.setAttribute('fetchpriority', 'high')
      }
      document.head.appendChild(link)
      
      // Also create image objects for immediate caching
      const img = new Image()
      img.src = src
      if (index < 7) {
        img.loading = 'eager'
        img.decoding = 'async'
      }
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const sectionByPath: Record<string, string> = {
      '/about': 'about-section',
      '/features': 'features-section',
      '/news': 'news-section',
      '/contact': 'contact-section',
      '/download': 'download-section',
    }

    const targetId = sectionByPath[location.pathname]
    if (!targetId) return

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.pathname])
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
      headings.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; })
      texts.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; })
      buttons.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; })
      cards.forEach(node => { node.style.opacity = '0'; node.style.transform = 'translateY(36px) scale(.88)'; })
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
      <section className="bg-white relative overflow-hidden" data-reveal>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#61CCB2]/10 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
          {/* Top row: What is autism + definition card */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            {/* Left column: heading + paragraphs */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">{t('whatIsAutism')}</h2>
              <p className="mt-4 text-gray-800 leading-relaxed text-justify">
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
            <p className="mt-4 text-gray-800 leading-relaxed text-justify">
              {t('routineDesc')}
            </p>
            <ul className="mt-6 space-y-4 text-gray-800">
              <li className="flex items-start">
                <span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span>
                <span className="leading-relaxed"><strong className="text-[#2D7778]">Reduces Anxiety</strong> - Structured and predictable routines help children with autism understand what comes next, reducing confusion, anxiety, and stress especially during transitions between activities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span>
                <span className="leading-relaxed"><strong className="text-[#2D7778]">Builds Independence</strong> - Visual schedules and step-by-step guidance support children in completing daily routines on their own, helping them develop confidence, self-management, and reduced dependence on caregivers.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span>
                <span className="leading-relaxed"><strong className="text-[#2D7778]">Supports Learning and Skill Development</strong> - Consistent routines provide a stable structure that reinforces learning, improves task completion, and helps children practice essential self-care skills through repetition and positive reinforcement.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

{/*
  <section className="bg-white" data-reveal>
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 md:pt-8 pb-12 md:pb-16 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 items-center">

        {/* Text column (right on desktop) }
        <div className="w-full md:pl-6 md:order-2 order-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778]">{t('whatIsRitmo')}</h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {t('ritmoDesc1')}
          </p>
          <p className="mt-3 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            {t('ritmoDesc2')}
          </p>
        </div>

        {/* Logo image }
        <div className="w-full flex items-start justify-center md:justify-end md:pr-6 md:order-1 order-1">
          <img
            src={ritmoOldLogo}
            alt="Ritmo logo"
            className="w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[24rem] h-auto object-contain"
          />
        </div>

      </div>
    </div>
  </section>
*/}

      {/* Key Features section */}
      <section className="bg-gradient-to-br from-[#61CCB2] to-[#2D7778] relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20 pointer-events-none" />
        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-6 py-20 md:py-24 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white font-semibold text-sm mb-4 tracking-wider uppercase backdrop-blur-sm border border-white/20">Highlights</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center px-2">{t('keyFeatures')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: t('autismFriendly'), desc: t('autismFriendlyDesc'), img: feature1 },
              { title: t('parentalControl'), desc: t('parentalControlDesc'), img: feature2 },
              { title: t('entertainment'), desc: t('entertainmentDesc'), img: feature3 },
              { title: t('progressTracking'), desc: t('progressTrackingDesc'), img: feature4 },
            ].map((f, idx) => (
                <div
                  key={f.title}
                  className="group rounded-3xl bg-white/10 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 p-6 md:p-8 w-full min-h-[320px] flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]"
                >
                  <img
                    src={f.img}
                    alt={`${f.title} icon`}
                    className="mb-6 w-56 h-64 md:w-52 md:h-60 object-contain flex-shrink-0 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                    loading="eager"
                    decoding="async"
                    fetchPriority={idx < 2 ? 'high' : 'auto'}
                    style={{
                      willChange: 'auto',
                      backfaceVisibility: 'hidden', 
                      transform: 'translateZ(0)',
                    }}
                  />
                  <div className="text-white font-extrabold text-2xl md:text-xl lg:text-2xl mb-4 w-full text-center px-1 drop-shadow-sm">{f.title}</div>
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

      {/* How It Works */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-[#61CCB2]/5" data-reveal>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2D7778] font-semibold text-sm mb-4 tracking-wider uppercase">Process</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2D7778] to-[#61CCB2] mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Get started in minutes and see results in days</p>
          </div>

          <div className="relative">
            {/* Horizontal line below circles */}
            <div className="hidden md:block absolute left-0 right-0 border-t-[3px] border-dashed border-[#61CCB2]/30" style={{ top: '2.5rem' }}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
              {/* Step 01 */}
              <div className="group flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#61CCB2] to-[#2D7778] text-white font-bold text-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#61CCB2]/30 group-hover:shadow-[#61CCB2]/50 transition-shadow">
                  01
                </div>
                {/* Arrow after step 1 */}
                <div className="hidden md:block absolute left-[calc(50%+2.5rem)] top-10 w-[calc(100%-5rem)] text-[#61CCB2]/30">
                  <svg className="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="95,0 95,10 100,5" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#2D7778] mb-3 mt-2">Create Profile</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Set up your child's profile with their preferences, needs, and daily routines
                </p>
              </div>

              {/* Step 02 */}
              <div className="group flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#61CCB2] to-[#2D7778] text-white font-bold text-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#61CCB2]/30 group-hover:shadow-[#61CCB2]/50 transition-shadow">
                  02
                </div>
                {/* Arrow after step 2 */}
                <div className="hidden md:block absolute left-[calc(50%+2.5rem)] top-10 w-[calc(100%-5rem)] text-[#61CCB2]/30">
                  <svg className="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="95,0 95,10 100,5" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#2D7778] mb-3 mt-2">Build Schedule</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Design visual schedules using our library of symbols, photos, and activities
                </p>
              </div>

              {/* Step 03 */}
              <div className="group flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#61CCB2] to-[#2D7778] text-white font-bold text-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#61CCB2]/30 group-hover:shadow-[#61CCB2]/50 transition-shadow">
                  03
                </div>
                {/* Arrow after step 3 */}
                <div className="hidden md:block absolute left-[calc(50%+2.5rem)] top-10 w-[calc(100%-5rem)] text-[#61CCB2]/30">
                  <svg className="w-full h-4" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <polygon points="95,0 95,10 100,5" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-[#2D7778] mb-3 mt-2">Follow Routine</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  Your child follows along with audio and visual prompts throughout the day
                </p>
              </div>

              {/* Step 04 */}
              <div className="group flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#61CCB2] to-[#2D7778] text-white font-bold text-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#61CCB2]/30 group-hover:shadow-[#61CCB2]/50 transition-shadow">
                  04
                </div>
                <h3 className="font-bold text-xl text-[#2D7778] mb-3 mt-2">Track Growth</h3>
                <p className="text-base leading-relaxed text-gray-600">
                  See progress, celebrate wins, and adjust routines as your child grows
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <Link 
              to="/download" 
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2D7778] to-[#61CCB2] px-8 py-4 text-white font-semibold hover:from-[#1f5c5d] hover:to-[#4DB89D] transition-all shadow-[0_8px_20px_rgba(45,119,120,0.3)] hover:shadow-[0_12px_25px_rgba(45,119,120,0.4)] hover:-translate-y-1 text-lg"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* We Recommend */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden" data-reveal>
        <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-[#2D7778]/5 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2D7778] font-semibold text-sm mb-4 tracking-wider uppercase">Resources</span>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2D7778] to-[#61CCB2]">We Recommend</h3>
            <p className="text-lg md:text-xl text-gray-600">Visit this website for complete learning</p>
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:border-[#61CCB2]/30 px-8 md:px-12 lg:px-20 py-12 md:py-16 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#61CCB2]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 relative z-10" style={{ gap: '7.5rem' }}>
              <div className="flex-shrink-0">
                <img 
                  src={ausLogo} 
                  alt="Autism Society Philippines" 
                  className="w-auto" 
                  style={{ height: '10rem' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-col gap-6 lg:max-w-md">
                <div>
                  <p className="font-semibold text-2xl mb-2" style={{ color: '#2D7778' }}>Website</p>
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

      {/* Articles Section - You might find useful */}
      <section className="py-16 md:py-24 bg-slate-50/50" data-reveal>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">You might find Useful</h3>
            <p className="text-lg md:text-xl text-gray-600">Stay informed with our latest articles and resources.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="group bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] cursor-pointer">
              <div className="bg-gradient-to-br from-gray-100 to-slate-200 h-52 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#61CCB2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={ausLogo} 
                  alt="Autism Society Philippines" 
                  className="w-auto h-32 object-contain transition-transform duration-700 group-hover:scale-105 relative z-10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold mb-3 tracking-wide text-[#61CCB2] uppercase">
                  <span className="text-[#2D7778]">Autism Society Philippines</span> • 11 Nov 2014
                </p>
                <h4 className="font-extrabold text-2xl mb-4 leading-tight text-[#2D7778] group-hover:text-[#1a5f60] transition-colors">
                  Understanding Person with Disabilities: Journey with Autism
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed">
                  By Erling's "Ong" Uy Koe & Evert L. Malapad, MA Educ SPED. In the realm of modern society, a Point of Sale (POS) system serves as more than just a tool for processing transactions...
                </p>
                <a 
                  href="http://www.autismsocietyphilippines.org/2014/11/understanding-persons-with-disabilities.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 font-bold text-[#61CCB2] group-hover:gap-3 transition-all"
                >
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] cursor-pointer">
              <div className="bg-gradient-to-br from-gray-100 to-slate-200 h-52 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#61CCB2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={ausLogo} 
                  alt="Autism Society Philippines" 
                  className="w-auto h-32 object-contain transition-transform duration-700 group-hover:scale-105 relative z-10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold mb-3 tracking-wide text-[#61CCB2] uppercase">
                  <span className="text-[#2D7778]">Autism Society Philippines</span> • 01 Jan 2010
                </p>
                <h4 className="font-extrabold text-2xl mb-4 leading-tight text-[#2D7778] group-hover:text-[#1a5f60] transition-colors">
                  What Is Autism and What Is Not
                </h4>
                <p className="text-gray-600 mb-6 line-clamp-3 text-base leading-relaxed">
                  By Tiffany Tan ASP Board Secretary. In the realm of modern society, a Point of Sale (POS) system serves as more than just a tool for processing transactions and handles sensitive customer data...
                </p>
                <a 
                  href="http://www.autismsocietyphilippines.org/2010/01/what-autism-is-and-is-not.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 font-bold text-[#61CCB2] group-hover:gap-3 transition-all"
                >
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden" data-reveal>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-gradient-to-tl from-[#61CCB2]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <FAQSection />
      </section>

      {/* Ritmo is now available (restored, full width) */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#2D7778] to-[#1a5f60] relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-10 md:gap-12 items-center">
            {/* Image */}
            <div className="flex items-center justify-center">
              <img src={HIMG} alt="Ritmo phone in hand" className="w-72 md:w-80 lg:w-96 h-auto object-contain drop-shadow" />
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
                  state={{ scrollToSection: 'phone-mockup' }}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#2D7778] font-semibold shadow-sm hover:bg-white/90 transition-transform hover:-translate-y-0.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
                  <span>{t('downloadNow')}</span>
                </Link>
                <Link
                  to="/features"
                  state={{ scrollToSection: 'how-ritmo-works' }}
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

      <div id="about-section">
        <About />
      </div>

      <div id="features-section">
        <Features />
      </div>

      <div id="news-section">
        <News />
      </div>

      <div id="contact-section">
        <Contact />
      </div>

      <div id="download-section">
        <Download />
      </div>
    </>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "What age is Ritmo suitable for?",
      answer: "Ritmo is designed for children with Autism Spectrum Disorder (ASD), specifically Level 2, who benefit from structured routines and visual guidance. The prototype was developed and tested with a young child (around early childhood age), making it most suitable for children who are still developing daily self-care routines and require caregiver support."
    },
    {
      question: "Do I need an internet connection to use Ritmo?",
      answer: "Yes. Ritmo requires an active internet connection to function properly. All features—including instructional videos, routine guidance, progress tracking, data monitoring, and content access—are delivered online to ensure real-time updates, syncing, and a seamless user experience."
    },
    {
      question: "Can multiple family members use one account?",
      answer: "No. Ritmo is designed for individual use only. Each account supports one child to ensure accurate routine tracking, personalized schedules, and progress monitoring tailored to that child's needs."
    },
    {
      question: "How is Ritmo different from other apps?",
      answer: null,
      isSpecial: true
    },
    {
      question: "Is there a free trial?",
      answer: "Ritmo is currently developed as a research prototype and is used free of charge during testing and evaluation phases. Future deployment models (such as public release or subscription options) are outside the scope of the current study."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D7778] mb-3">Frequently Asked Questions</h2>
        <p className="text-lg" style={{ color: 'oklch(27.8% 0.033 256.848)' }}>Everything you need to know about Ritmo</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-xl p-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full font-bold text-lg text-[#2D7778] cursor-pointer flex items-center justify-between text-left"
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
            >
              {faq.isSpecial ? (
                <div className="leading-relaxed" style={{ color: 'oklch(27.8% 0.033 256.848)' }}>
                  <p className="mb-3">Ritmo is specifically designed for children with Level 2 Autism, unlike many general routine apps. It features:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start"><span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span><span>Visual schedules and step-by-step guidance</span></li>
                    <li className="flex items-start"><span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span><span>Sensory-friendly and low-stimulation interface</span></li>
                    <li className="flex items-start"><span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span><span>Positive reinforcement (badges, stars, rewards)</span></li>
                    <li className="flex items-start"><span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span><span>Caregiver monitoring and progress reports</span></li>
                    <li className="flex items-start"><span className="mr-3 text-[#61CCB2] font-bold text-xl">•</span><span>Design guided by Behaviorism, Self-Determination Theory, TEACCH, and ISO/IEC 25010 quality standards</span></li>
                  </ul>
                  <p className="mt-3">These features help reduce anxiety, increase independence, and improve consistency in daily routines.</p>
                </div>
              ) : (
                <p className="leading-relaxed" style={{ color: 'oklch(27.8% 0.033 256.848)' }}>
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
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
        {slides.map((s, i) => {
          const isActive = i === index
          
          return (
            <img
              key={s.alt}
              src={s.src}
              alt={s.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                filter: 'brightness(1.05)',
              }}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          )
        })}
        {/* Full-screen light overlay + subtle blur so text is readable */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-20 pointer-events-none" />
        {/* Text overlay (absolute in front of image) */}
        <div className="absolute inset-0 z-30">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-xl md:max-w-2xl w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight drop-shadow-md break-words md:whitespace-nowrap">
                {contents[index].title}
              </h2>
              {index === 0 ? (
                <p className="mt-3 md:mt-4 text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow text-justify">
                  {contents[index].desc}
                </p>
              ) : (
                <div className="mt-2 sm:mt-3 md:mt-4 space-y-1 sm:space-y-1.5 md:space-y-2">
                  {contents[index].desc.split(' • ').map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2 md:gap-2">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-green-600 flex-shrink-0 mt-0.5 drop-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span className="text-slate-900 text-base sm:text-lg md:text-xl leading-relaxed drop-shadow break-words md:whitespace-nowrap flex-1">{item}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-4 md:mt-6 flex flex-wrap gap-2 sm:gap-3">
                <Link to="/download" state={{ scrollToSection: 'phone-mockup' }} className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 shadow-lg hover:bg-[#4FBDA4] transition-colors text-white font-bold text-sm sm:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <path d="M7 10l5 5 5-5"/>
                    <path d="M12 15V3"/>
                  </svg>
                  {t('downloadNow')}
                </Link>
                <Link to="/features" className="inline-flex items-center gap-2 rounded-full bg-[#61CCB2] border-2 border-white px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 shadow-lg hover:bg-[#4FBDA4] transition-colors text-white font-semibold text-sm sm:text-base">
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
          className="hidden md:block absolute left-3 md:left-4 bottom-16 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="hidden md:block absolute right-3 md:right-4 bottom-16 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 bg-[#61CCB2] hover:bg-[#4FBDA4] text-white rounded-full p-3 shadow-lg"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-40 flex items-center justify-center gap-2">
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
