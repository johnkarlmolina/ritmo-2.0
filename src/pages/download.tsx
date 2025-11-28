import { useEffect } from 'react'

export default function Download() {
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
					headings.forEach((node, idx) => { const d=Math.min(idx*80,400); node.style.transition=`transform 800ms ease-out ${d}ms, opacity 800ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateX(0)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*60,360); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
					buttons.forEach((node, idx) => { const d=Math.min(idx*80,480); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
		)
		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'))
			headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateX(-24px)'; node.style.willChange='transform, opacity' })
			texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(16px)'; node.style.willChange='transform, opacity' })
			buttons.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(12px)'; node.style.willChange='transform, opacity' })
			observer.observe(section)
			const rect = section.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight
			if (rect.top < vh && rect.bottom > 0) {
				requestAnimationFrame(() => {
					headings.forEach((node, idx) => { const d=Math.min(idx*80,400); node.style.transition=`transform 800ms ease-out ${d}ms, opacity 800ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateX(0)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*60,360); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
					buttons.forEach((node, idx) => { const d=Math.min(idx*80,480); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
				})
			}
		})
		return () => observer.disconnect()
	}, [])
	return (
		<section className="py-20 px-4" data-reveal style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto text-center">
				<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Download Ritmo</h1>
				<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
					Get the app and start building supportive daily routines today.
				</p>
				<div className="mt-10">
					<a href="#" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-[#2D7778] font-semibold shadow hover:bg-white/90 transition-transform hover:-translate-y-0.5">
						Start Download
					</a>
				</div>
			</div>
		</section>
	)
}
