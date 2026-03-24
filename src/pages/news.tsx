import DateIcon from '../assets/Date.png';
import FeaturedIcon from '../assets/Featured.png';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

export default function News() {
	const { language } = useLanguage()
	const t = (key: string) => (translations as any)[language as keyof typeof translations][key]

	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))

					if (entry.isIntersecting) {
						headings.forEach((node, idx) => {
							const d = Math.min(idx * 85, 425)
							node.style.transition = `transform 880ms cubic-bezier(.16,.68,.44,1.02) ${d}ms, opacity 700ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.transform = 'translateY(0) scale(1)'
						})
						texts.forEach((node, idx) => {
							const d = Math.min(idx * 65, 390)
							node.style.transition = `transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 640ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.transform = 'translateY(0) scale(1)'
						})
						cards.forEach((node, idx) => {
							const d = Math.min(idx * 80, 500)
							node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 700ms ease-out ${d}ms`
							node.style.opacity = '1'
							node.style.transform = 'translateX(0) scale(1) rotate(0deg)'
						})
					} else {
						// Reset for replay
						headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(40px) scale(.92)' })
						texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(40px) scale(.94)' })
						cards.forEach((node, idx) => { const dir = idx % 2 === 0 ? -1 : 1; node.style.opacity='0'; node.style.transform=`translateX(${dir*40}px) scale(.92) rotate(${dir*2}deg)` })
					}
				})
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
		)
		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))
			headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(40px) scale(.92)'; node.style.willChange='transform, opacity' })
			texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(40px) scale(.94)'; node.style.willChange='transform, opacity' })
			cards.forEach((node, idx) => { const dir = idx % 2 === 0 ? -1 : 1; node.style.opacity='0'; node.style.transform=`translateX(${dir*40}px) scale(.92) rotate(${dir*2}deg)`; node.style.willChange='transform, opacity' })
			observer.observe(section)
			const rect = section.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight
			if (rect.top < vh && rect.bottom > 0) {
				requestAnimationFrame(() => {
					headings.forEach((node, idx) => { const d=Math.min(idx*85,425); node.style.transition=`transform 880ms cubic-bezier(.16,.68,.44,1.02) ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0) scale(1)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*65,390); node.style.transition=`transform 760ms cubic-bezier(.19,1,.22,1) ${d}ms, opacity 640ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0) scale(1)' })
					cards.forEach((node, idx) => { const d=Math.min(idx*80,500); node.style.transition=`transform 900ms cubic-bezier(.23,1,.32,1) ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateX(0) scale(1) rotate(0deg)' })
				})
			}
		})
		return () => observer.disconnect()
	}, [])
	return (
		<div className="bg-slate-50/30 overflow-x-hidden">
			{/* Hero Section */}
			<section className="pt-24 pb-16 px-4 relative" data-reveal>
				<div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent pointer-events-none" />
				<div className="max-w-7xl mx-auto text-center relative z-10">
					<span className="inline-block py-1 px-3 rounded-full bg-[#61CCB2]/10 text-[#2B8A7A] font-semibold text-sm mb-4 tracking-wider uppercase">Updates</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2B8A7A] to-[#61CCB2]">
						{t('newsPage')}
					</h2>
					<p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
						{t('newsPageDesc')}
					</p>
				</div>
			</section>

			{/* Featured Stories Section */}
			<section className="py-20 px-4 bg-white relative" data-reveal>
				<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#61CCB2]/5 rounded-bl-full pointer-events-none"></div>
				<div className="max-w-6xl mx-auto relative z-10">
					<div className="flex items-center gap-4 mb-12">
						<div className="w-12 h-1 bg-[#61CCB2] rounded-full"></div>
						<h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
							Featured Stories
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-8 max-w-md mx-auto md:max-w-none md:grid-cols-3">
						{/* Story Card 2 */}
						<div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(97,204,178,0.15)] group">
							<div className="h-56 bg-gradient-to-br from-[#61CCB2] to-[#2B8A7A] relative overflow-hidden">
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]"></div>
								<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-50 text-[#2B8A7A]">
										Feature
									</span>
									<div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
										<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-70" />
										<span>Jan 15, 2026</span>
									</div>
								</div>
								<h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#2B8A7A] transition-colors">
									Ritmo version 1.0 Beta release
								</h3>
								<p className="text-gray-600 mb-6 leading-relaxed">
									We are thrilled to announce that Ritmo version 1.0 Beta is finally here, and we want you to be part of our exclusive testing group.
								</p>
								<a href="/download#phone-mockup" className="inline-flex items-center gap-2 text-[#61CCB2] font-semibold hover:text-[#2B8A7A] transition-colors group/link">
									Download Now 
									<span className="transform transition-transform group-hover/link:translate-x-1">→</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* All Updates Section */}
			<section className="py-20 px-4 bg-slate-50/50" data-reveal>
				<div className="max-w-6xl mx-auto">
					<div className="flex items-center gap-4 mb-12">
						<div className="w-12 h-1 bg-[#61CCB2] rounded-full"></div>
						<h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
							All Updates
						</h2>
					</div>
					<div className="space-y-6">
						{/* Update Item 1 */}
						<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(97,204,178,0.1)] group">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-50 text-[#2B8A7A]">
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3 opacity-70" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2026</span>
										</div>
									</div>
									<h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#2B8A7A] transition-colors">
										Ritmo version 1.0 Beta release
									</h3>
									<p className="text-gray-600 leading-relaxed max-w-3xl">
										We are thrilled to announce that Ritmo version 1.0 Beta is finally here, and we want you to be part of our exclusive testing group.
									</p>
								</div>
								<div className="pt-4 md:pt-0 border-t border-slate-100 md:border-t-0">
									<a href="/download#phone-mockup" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-50 text-[#2B8A7A] hover:bg-[#61CCB2] hover:text-white font-semibold rounded-xl transition-colors duration-300 gap-2 w-full md:w-auto">
										Download Now →
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stay Updated Section removed per request */}
		</div>
	)
}
