import { useEffect, useState } from 'react';

export default function Features() {
	const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

	useEffect(() => {
		const observers: IntersectionObserver[] = [];
		const sectionRefs = document.querySelectorAll('[data-section]');

		sectionRefs.forEach((section, index) => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setVisibleSections((prev) => new Set(prev).add(index));
						} else {
							// Remove from visible sections when out of view for re-animation
							setVisibleSections((prev) => {
								const newSet = new Set(prev);
								newSet.delete(index);
								return newSet;
							});
						}
					});
				},
				{
					threshold: 0.4,
					rootMargin: '0px 0px -20% 0px'
				}
			);

			observer.observe(section);
			observers.push(observer);
		});

		return () => {
			observers.forEach((observer) => observer.disconnect());
		};
	}, []);

	return (
		<div className="scroll-smooth">
			{/* Hero Section + Feature Section 1 Combined */}
			<section 
				data-section
				className={`min-h-screen transition-all duration-1000 ease-out transform ${
					visibleSections.has(0) 
						? 'opacity-100 translate-y-0' 
						: 'opacity-0 translate-y-10'
				}`} 
				style={{ backgroundColor: '#61CCB2' }}>
				{/* Hero Content */}
				<div className="py-16 flex items-center">
					<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
						<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Features</h1>
						<p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl">
							Everything you need to create structured, stress-free daily routines, all in one simple app.
						</p>
					</div>
				</div>
				
				{/* Feature 1 Content */}
				<div className="py-20 px-4" style={{ backgroundColor: '#E8F5F1' }}>
					<div className="max-w-7xl mx-auto">
						<div className="flex items-center justify-between gap-20">
							{/* Left Content */}
							<div className={`flex-1 transition-all duration-1000 ease-out transform delay-300 ${
								visibleSections.has(0) 
									? 'opacity-100 translate-x-0' 
									: 'opacity-0 -translate-x-20'
							}`}>
								<div className="flex items-center mb-6">
									<img 
										src="/src/assets/Rectangle 482.png" 
										alt="Feature Icon"
										className="w-8 h-8 mr-4"
									/>
									<h2 className="text-3xl font-bold" style={{ color: '#4A5D5A' }}>
										Number 1 Feature
									</h2>
								</div>
								<div className="flex-1">
									<p className="text-gray-700 text-2xl mb-8 leading-relaxed">
										Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</p>
								</div>
								<ul className="space-y-3">
									<li className="flex items-center text-lg text-gray-700">
										<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
										Bulleted Feature
									</li>
									<li className="flex items-center text-lg text-gray-700">
										<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
										Bulleted Feature
									</li>
									<li className="flex items-center text-lg text-gray-700">
										<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
										Bulleted Feature
									</li>
									<li className="flex items-center text-lg text-gray-700">
										<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
										Bulleted Feature
									</li>
								</ul>
							</div>

							{/* Right Phone Image */}
							<div className={`flex-1 flex items-center justify-center transition-all duration-1000 ease-out transform delay-300 ${
								visibleSections.has(0) 
									? 'opacity-100 translate-x-0' 
									: 'opacity-0 translate-x-20'
							}`}>
								<div className="relative">
									<img 
										src="/src/assets/1.png" 
										alt="Number 1 Feature Phone Mockup"
										className="w-80 h-auto object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Feature Section 2 */}
			<section 
				data-section
				className={`py-20 px-4 min-h-screen flex items-center transition-all duration-1000 ease-out transform ${
					visibleSections.has(1) 
						? 'opacity-100 translate-x-0' 
						: 'opacity-0 translate-x-10'
				}`} 
				style={{ backgroundColor: '#E8F5F1' }}>
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center justify-between gap-20">
						{/* Left Phone Image */}
						<div className={`flex-1 flex items-center justify-center transition-all duration-1000 ease-out transform ${
							visibleSections.has(1) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 -translate-x-20'
						}`}>
							<div className="relative">
								<img 
									src="/src/assets/2.1.png" 
									alt="Number 2 Feature Phone Mockup"
									className="w-80 h-auto object-contain"
								/>
							</div>
						</div>

						{/* Right Content */}
						<div className={`flex-1 transition-all duration-1000 ease-out transform ${
							visibleSections.has(1) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 translate-x-20'
						}`}>
							<div className="flex items-start mb-6">
								<img 
									src="/src/assets/Rectangle 482.png" 
									alt="Feature Icon"
									className="w-8 h-8 mr-4"
								/>
								<h2 className="text-3xl font-bold" style={{ color: '#4A5D5A' }}>
									Number 2 Feature
								</h2>
							</div>
							<div className="flex-1">
								<p className="text-gray-700 text-2xl mb-8 leading-relaxed">
									Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Feature Section 3 */}
			<section 
				data-section
				className={`py-20 px-4 min-h-screen flex items-center transition-all duration-1000 ease-out transform ${
					visibleSections.has(2) 
						? 'opacity-100 translate-x-0' 
						: 'opacity-0 -translate-x-10'
				}`} 
				style={{ backgroundColor: '#E8F5F1' }}>
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center justify-between gap-20">
						{/* Left Content */}
						<div className={`flex-1 transition-all duration-1000 ease-out transform ${
							visibleSections.has(2) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 -translate-x-20'
						}`}>
							<div className="flex items-center mb-6">
								<img 
									src="/src/assets/Rectangle 482.png" 
									alt="Feature Icon"
									className="w-8 h-8 mr-4"
								/>
								<h2 className="text-3xl font-bold" style={{ color: '#4A5D5A' }}>
									Number 3 Feature
								</h2>
							</div>
							<div className="flex-1">
								<p className="text-gray-700 text-2xl mb-8 leading-relaxed">
									Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
							</ul>
						</div>

						{/* Right Phone Image */}
						<div className={`flex-1 flex items-center justify-center transition-all duration-1000 ease-out transform ${
							visibleSections.has(2) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 translate-x-20'
						}`}>
							<div className="relative">
								<img 
									src="/src/assets/2.3.png" 
									alt="Number 3 Feature Phone Mockup"
									className="w-80 h-auto object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Feature Section 4 */}
			<section 
				data-section
				className={`py-20 px-4 min-h-screen flex items-center transition-all duration-1000 ease-out transform ${
					visibleSections.has(3) 
						? 'opacity-100 translate-x-0' 
						: 'opacity-0 translate-x-10'
				}`} 
				style={{ backgroundColor: '#E8F5F1' }}>
				<div className="max-w-7xl mx-auto">
					<div className="flex items-center justify-between gap-20">
						{/* Left Phone Image */}
						<div className={`flex-1 flex items-center justify-center transition-all duration-1000 ease-out transform ${
							visibleSections.has(3) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 -translate-x-20'
						}`}>
							<div className="relative">
								<img 
									src="/src/assets/3.png" 
									alt="Number 4 Feature Phone Mockup"
									className="w-80 h-auto object-contain"
								/>
							</div>
						</div>

						{/* Right Content */}
						<div className={`flex-1 transition-all duration-1000 ease-out transform ${
							visibleSections.has(3) 
								? 'opacity-100 translate-x-0' 
								: 'opacity-0 translate-x-20'
						}`}>
							<div className="flex items-start mb-6">
								<img 
									src="/src/assets/Rectangle 482.png" 
									alt="Feature Icon"
									className="w-8 h-8 mr-4"
								/>
								<h2 className="text-3xl font-bold" style={{ color: '#4A5D5A' }}>
									Number 4 Feature
								</h2>
							</div>
							<div className="flex-1">
								<p className="text-gray-700 text-2xl mb-8 leading-relaxed">
									Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
								<li className="flex items-center text-lg text-gray-700">
									<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
									Bulleted Feature
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Experience All Features Section */}
			<section 
				data-section
				className={`py-20 px-4 min-h-screen flex items-center transition-all duration-1000 ease-out transform ${
					visibleSections.has(4) 
						? 'opacity-100 translate-y-0' 
						: 'opacity-0 translate-y-10'
				}`} 
				style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Experience All Features
					</h2>
					<p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
						Download Ritmo today and see how simple routines can bring calm, confidence, and independence.
					</p>
					<button className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
						Download Now
					</button>
				</div>
			</section>

			{/* White space between Experience section and Footer */}
			<div className="py-8 bg-white"></div>
		</div>
	);
}
