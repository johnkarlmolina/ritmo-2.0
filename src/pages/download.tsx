import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../utils/translations'
import handPhone from '../assets/hand-phone.png'

export default function Download() {
	const { language } = useLanguage()
	const location = useLocation()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

	useEffect(() => {
		// Scroll to phone mockup section - check both hash and navigation state
		const shouldScroll = window.location.hash === '#phone-mockup' || (location.state as any)?.scrollToSection === 'phone-mockup'
		if (shouldScroll) {
			setTimeout(() => {
				document.getElementById('phone-mockup')?.scrollIntoView({ behavior: 'smooth' })
				// Clean up hash if present
				if (window.location.hash) {
					window.history.replaceState(null, '', window.location.pathname)
				}
			}, 100)
		}

		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return
					const el = entry.target as HTMLElement
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'))

					headings.forEach((node, idx) => {
						const d = Math.min(idx * 90, 450)
						node.style.transition = `transform 900ms cubic-bezier(.16,.68,.44,1.02) ${d}ms, opacity 700ms ease-out ${d}ms`
						node.style.opacity = '1'
						node.style.transform = 'translateY(0) scale(1)'
					})
					texts.forEach((node, idx) => {
						const d = Math.min(idx * 70, 420)
						node.style.transition = `transform 780ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 620ms ease-out ${d}ms`
						node.style.opacity = '1'
						node.style.transform = 'translateY(0) scale(1)'
					})
					buttons.forEach((node, idx) => {
						const d = Math.min(idx * 80, 480)
						node.style.transition = `transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 640ms ease-out ${d}ms`
						node.style.opacity = '1'
						node.style.transform = 'translateY(0) scale(1)'
					})
				})
			},
			{ threshold: 0.14, rootMargin: '0px 0px -10% 0px' }
		)
		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'))
			headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(30px) scale(.85)'; node.style.willChange='transform, opacity' })
			texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(26px) scale(.9)'; node.style.willChange='transform, opacity' })
			buttons.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(24px) scale(.9)'; node.style.willChange='transform, opacity' })
			observer.observe(section)
			const rect = section.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight
			if (rect.top < vh && rect.bottom > 0) {
				requestAnimationFrame(() => {
					headings.forEach((node, idx) => { const d=Math.min(idx*90,450); node.style.transition=`transform 900ms cubic-bezier(.16,.68,.44,1.02) ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0) scale(1)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*70,420); node.style.transition=`transform 780ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 620ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0) scale(1)' })
					buttons.forEach((node, idx) => { const d=Math.min(idx*80,480); node.style.transition=`transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 640ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0) scale(1)' })
				})
			}
		})
		return () => observer.disconnect()
	}, [])
	return (
		<div className="bg-slate-50/50">
			{/* Hero Section */}
			<section className="pt-24 pb-12 px-4 relative" data-reveal>
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2B8A7A] font-semibold text-sm mb-4 tracking-wider uppercase">App</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">
						{t('downloadPage')}
					</h2>
					<p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
						{t('downloadPageDesc')}
					</p>
				</div>
			</section>

			{/* Phone Mockup Section */}
			<section id="phone-mockup" className="py-20 px-4 md:px-8 bg-slate-50/50 min-h-screen flex items-center relative overflow-hidden" data-reveal>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#61CCB2] rounded-full blur-[160px] opacity-10 pointer-events-none"></div>
				
				<div className="max-w-7xl mx-auto relative z-10 w-full">
					<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 border border-white shadow-[0_20px_80px_rgba(0,0,0,0.05)]">
						{/* Left side - Phone Image */}
						<div className="flex justify-center relative group">
							<div className="absolute inset-0 bg-gradient-to-t from-[#61CCB2]/20 to-transparent rounded-[3rem] blur-2xl group-hover:scale-105 transition-transform duration-700"></div>
							<img 
								src={handPhone} 
								alt="Ritmo App on Phone" 
								className="max-w-md w-full h-auto rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-8 ring-white transform transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-2 relative z-10"
							/>
						</div>

						{/* Right side - Content */}
						<div className="space-y-10">
							<div>
								<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[#2B8A7A] font-bold text-sm mb-6 tracking-wide shadow-sm border border-emerald-100">
									<span className="relative flex h-3 w-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#61CCB2] opacity-75"></span>
										<span className="relative inline-flex rounded-full h-3 w-3 bg-[#61CCB2]"></span>
									</span>
									AVAILABLE NOW
								</div>
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
									The Ritmo App is Now Available on Android
								</h2>
								<p className="text-xl leading-relaxed text-gray-600 font-medium">
									Build calm and structured days using visual schedules, reminders, and playful guidance designed for children with autism.
								</p>
							</div>
							
							{/* Feature List */}
							<ul className="space-y-6">
								<li className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(97,204,178,0.15)] hover:-translate-y-1 transition-all">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] flex items-center justify-center shrink-0 shadow-lg shadow-[#61CCB2]/30">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
									</div>
									<span className="text-lg text-gray-700 font-semibold">Visual routines with audio cues</span>
								</li>
								<li className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(97,204,178,0.15)] hover:-translate-y-1 transition-all">
									<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] flex items-center justify-center shrink-0 shadow-lg shadow-[#61CCB2]/30">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
									</div>
									<span className="text-lg text-gray-700 font-semibold">Positive feedback and progress tracking</span>
								</li>
							</ul>

							{/* Action Buttons */}
							<div className="pt-4">
								<a
									href="https://mega.nz/file/ywpA0Y6L#IidOszZ0N4xMYBZ8i2g1M0rPbzKSTcFZf2MfWz6VQxw"
									target="_blank"
									rel="noopener noreferrer"
									className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2] hover:from-[#237064] hover:to-[#4DB89E] text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(97,204,178,0.4)] hover:shadow-[0_20px_40px_rgba(97,204,178,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
								>
									<div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform">
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
										</svg>
									</div>
									Download Ritmo for Android
								</a>
								<p className="mt-4 text-center sm:text-left text-sm text-gray-500 font-medium ml-2">
									Requires Android 8.0 or later
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
