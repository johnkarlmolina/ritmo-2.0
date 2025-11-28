import DateIcon from '../assets/Date.png';
import FeaturedIcon from '../assets/Featured.png';
import { useEffect } from 'react';

export default function News() {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'))
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement
					if (!entry.isIntersecting) return
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'))
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'))
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))
					headings.forEach((node, idx) => { const d=Math.min(idx*80,400); node.style.transition=`transform 800ms ease-out ${d}ms, opacity 800ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateX(0)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*60,360); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
					cards.forEach((node, idx) => { const d=Math.min(idx*70,490); node.style.transition=`transform 750ms ease-out ${d}ms, opacity 750ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
		)
		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'))
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'))
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl'))
			headings.forEach((node) => { node.style.opacity='0'; node.style.transform='translateX(-24px)'; node.style.willChange='transform, opacity' })
			texts.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(16px)'; node.style.willChange='transform, opacity' })
			cards.forEach((node) => { node.style.opacity='0'; node.style.transform='translateY(18px)'; node.style.willChange='transform, opacity' })
			observer.observe(section)
			const rect = section.getBoundingClientRect(); const vh = window.innerHeight || document.documentElement.clientHeight
			if (rect.top < vh && rect.bottom > 0) {
				requestAnimationFrame(() => {
					headings.forEach((node, idx) => { const d=Math.min(idx*80,400); node.style.transition=`transform 800ms ease-out ${d}ms, opacity 800ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateX(0)' })
					texts.forEach((node, idx) => { const d=Math.min(idx*60,360); node.style.transition=`transform 700ms ease-out ${d}ms, opacity 700ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
					cards.forEach((node, idx) => { const d=Math.min(idx*70,490); node.style.transition=`transform 750ms ease-out ${d}ms, opacity 750ms ease-out ${d}ms`; node.style.opacity='1'; node.style.transform='translateY(0)' })
				})
			}
		})
		return () => observer.disconnect()
	}, [])
	return (
		<div className="bg-white">
			{/* Hero Section */}
			<section className="py-20 px-4" data-reveal style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-7xl mx-auto text-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
						News &amp; Updates
					</h1>
					<p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
						Stay informed about the latest features, research, and<br />
						community stories
					</p>
				</div>
			</section>

			{/* Filter Buttons Section */}
			<section className="py-8 px-4 bg-white border-b border-gray-200" data-reveal>
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-wrap justify-center gap-3">
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							All
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Update
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Feature
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Announcement
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Research
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Event
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Community
						</button>
						<button className="px-6 py-2 rounded-full border-2 border-[#2B8A7A] text-[#2B8A7A] font-medium hover:bg-[#2B8A7A] hover:text-white transition-colors">
							Media
						</button>
					</div>
				</div>
			</section>

		{/* Featured Stories Section */}
		<section className="pt-20 pb-12 px-4 bg-white" data-reveal>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold mb-12" style={{ color: '#2B8A7A' }}>
					Featured Stories
				</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Story Card 1 */}
					<div className="bg-white rounded-3xl overflow-hidden border-[3px] border-gray-300 shadow-sm transition transform hover:-translate-y-1 hover:shadow-2xl">
						<div className="h-48 bg-[#61CCB2]"></div>
						<div className="p-6">
							<div className="flex items-center gap-3 mb-2">
								<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#C8E6DD', color: '#2B8A7A' }}>
									Feature
								</span>
								<div className="flex items-center gap-1.5 text-gray-500 text-sm">
									<img src={DateIcon} alt="Date" className="w-4 h-4" />
									<span>Jan 15, 2024</span>
								</div>
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: '#2B8A7A' }}>
								Ritmo Version 2.0 Released
							</h3>
							<p className="text-gray-600 text-sm mb-4 leading-relaxed">
								Major update includes new emotion cards, improved performance, and enhanced customization options.
							</p>
							<a href="#" className="inline-flex items-center gap-2 text-[#61CCB2] font-semibold text-sm hover:gap-3 transition-all">
								Read More →
							</a>
					</div>
				</div>

					{/* Story Card 2 */}
					<div className="bg-white rounded-3xl overflow-hidden border-[3px] border-gray-300 shadow-sm transition transform hover:-translate-y-1 hover:shadow-2xl">
						<div className="h-48 bg-[#61CCB2]"></div>
						<div className="p-6">
							<div className="flex items-center gap-3 mb-2">
								<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#C8E6DD', color: '#2B8A7A' }}>
									Research
								</span>
								<div className="flex items-center gap-1.5 text-gray-500 text-sm">
									<img src={DateIcon} alt="Date" className="w-4 h-4" />
									<span>Dec 20, 2023</span>
								</div>
							</div>
							<h3 className="text-lg font-bold mb-2" style={{ color: '#2B8A7A' }}>
								Study Shows 85% Improvement in Communication
							</h3>
							<p className="text-gray-600 text-sm mb-4 leading-relaxed">
								Recent research demonstrates significant improvement in communication abilities among Ritmo users.
							</p>
							<a href="#" className="inline-flex items-center gap-2 text-[#61CCB2] font-semibold text-sm hover:gap-3 transition-all">
								Read More →
							</a>
					</div>
				</div>

					{/* Story Card 3 */}
					<div className="bg-white rounded-3xl overflow-hidden border-[3px] border-gray-300 shadow-sm transition transform hover:-translate-y-1 hover:shadow-2xl">
							<div className="h-48 bg-[#61CCB2]"></div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-2">
									<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#C8E6DD', color: '#2B8A7A' }}>
										Media
									</span>
									<div className="flex items-center gap-1.5 text-gray-500 text-sm">
										<img src={DateIcon} alt="Date" className="w-4 h-4" />
										<span>Nov 15, 2023</span>
									</div>
								</div>
								<h3 className="text-lg font-bold mb-2" style={{ color: '#2B8A7A' }}>
									Ritmo Featured on National Television
								</h3>
								<p className="text-gray-600 text-sm mb-4 leading-relaxed">
									Our app was featured on GMA News special report about autism support technology in the Philippines.
								</p>
								<a href="#" className="inline-flex items-center gap-2 text-[#61CCB2] font-semibold text-sm hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* All Updates Section */}
			<section className="pt-12 pb-12 px-4 bg-white" data-reveal>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold mb-10" style={{ color: '#2B8A7A' }}>
						All Updates
					</h2>
					<div className="space-y-5">
						{/* Update Item 1 */}
						<div className="bg-white rounded-3xl px-8 py-6 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-xl">
							<div className="flex items-center justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F4F1', color: '#61CCB2' }}>
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-gray-500 text-sm">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2024</span>
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2" style={{ color: '#2B8A7A' }}>
										Ritmo Version 2.0 Released
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Complete Tagalog translation now available for all interface elements and communication cards.
									</p>
								</div>
								<a href="#" className="text-[#61CCB2] font-semibold text-sm whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>

						{/* Update Item 2 */}
						<div className="bg-white rounded-3xl px-8 py-6 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-xl">
							<div className="flex items-center justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F4F1', color: '#61CCB2' }}>
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-gray-500 text-sm">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2024</span>
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2" style={{ color: '#2B8A7A' }}>
										Ritmo Version 2.0 Released
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Complete Tagalog translation now available for all interface elements and communication cards.
									</p>
								</div>
								<a href="#" className="text-[#61CCB2] font-semibold text-sm whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>

						{/* Update Item 3 */}
						<div className="bg-white rounded-3xl px-8 py-6 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-xl">
							<div className="flex items-center justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F4F1', color: '#61CCB2' }}>
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-gray-500 text-sm">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2024</span>
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2" style={{ color: '#2B8A7A' }}>
										Ritmo Version 2.0 Released
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Complete Tagalog translation now available for all interface elements and communication cards.
									</p>
								</div>
								<a href="#" className="text-[#61CCB2] font-semibold text-sm whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>

						{/* Update Item 4 */}
						<div className="bg-white rounded-3xl px-8 py-6 shadow-sm transition transform hover:-translate-y-0.5 hover:shadow-xl">
							<div className="flex items-center justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F4F1', color: '#61CCB2' }}>
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-gray-500 text-sm">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2024</span>
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2" style={{ color: '#2B8A7A' }}>
										Ritmo Version 2.0 Released
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Complete Tagalog translation now available for all interface elements and communication cards.
									</p>
								</div>
								<a href="#" className="text-[#61CCB2] font-semibold text-sm whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>

						{/* Update Item 5 */}
						<div className="bg-white rounded-3xl px-8 py-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center justify-between gap-6">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-3">
										<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F4F1', color: '#61CCB2' }}>
											<img src={FeaturedIcon} alt="Featured" className="w-3 h-3" />
											Feature
										</span>
										<div className="flex items-center gap-2 text-gray-500 text-sm">
											<img src={DateIcon} alt="Date" className="w-4 h-4 opacity-60" />
											<span>Jan 15, 2024</span>
										</div>
									</div>
									<h3 className="text-xl font-bold mb-2" style={{ color: '#2B8A7A' }}>
										Ritmo Version 2.0 Released
									</h3>
									<p className="text-gray-600 text-sm leading-relaxed">
										Complete Tagalog translation now available for all interface elements and communication cards.
									</p>
								</div>
								<a href="#" className="text-[#61CCB2] font-semibold text-sm whitespace-nowrap flex items-center gap-2 hover:gap-3 transition-all">
									Read More →
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Stay Updated Section */}
			<section className="pt-12 pb-20 px-4 bg-white" data-reveal>
				<div className="max-w-6xl mx-auto flex justify-center">
					<div className="bg-[#C8E6DD] rounded-3xl p-12 border-2 border-[#2B8A7A] max-w-2xl w-full text-center">
						<h2 className="text-3xl font-bold mb-3" style={{ color: '#2B8A7A' }}>
							Stay Updated
						</h2>
						<p className="text-gray-700 mb-6 text-sm">
							Get the latest news, updates, and tips delivered to your inbox
						</p>
						<div className="flex gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-5 py-2.5 rounded-full border-2 border-white bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#61CCB2] focus:border-transparent placeholder:text-gray-400"
							/>
							<button
								className="px-7 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
								style={{ backgroundColor: '#61CCB2' }}
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
