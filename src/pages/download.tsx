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
		<div>
			{/* Hero Section */}
			<section className="mt-4 pt-20 pb-20 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
					{t('downloadPage')}
				</h1>
				<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
					{t('downloadPageDesc')}
				</p>
			</div>
		</section>

			{/* Phone Mockup Section */}
			<section id="phone-mockup" className="py-20 px-4 md:px-8 bg-white" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left side - Phone Image */}
						<div className="flex justify-center">
							<img 
								src={handPhone} 
								alt="Ritmo App on Phone" 
								className="max-w-md w-full h-auto rounded-3xl shadow-2xl"
							/>
						</div>

						{/* Right side - Content */}
						<div>
							<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
								The Ritmo App is Now Available on Android
							</h2>
							<p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
								Build calm and structured days using visual schedules, reminders, and playful guidance designed for children with autism.
							</p>
							
							{/* Feature List */}
							<ul className="space-y-4 mb-10">
								<li className="flex items-start gap-3">
									<div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
									<p className="text-lg text-gray-700">Visual routines with audio cues</p>
								</li>
								<li className="flex items-start gap-3">
									<div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
									<p className="text-lg text-gray-700">Positive feedback and progress tracking</p>
								</li>
							</ul>

							{/* Action Buttons */}
							<div>
								<a
									href="https://drive.google.com/uc?export=download&id=1BaWTfjBsbW-iiZGV5BjYl-PqsViO0b_P"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg"
								>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
									</svg>
									Download Ritmo
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
