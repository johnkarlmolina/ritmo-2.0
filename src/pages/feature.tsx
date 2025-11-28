import '../components/FeatureCarousel.css';
import { useRef, useEffect } from 'react';

export default function Features() {
	const scrollRef = useRef<HTMLDivElement | null>(null);

	// Move scroll function outside useEffect so buttons can access it
	const scrollToNearestSnap = (dir: 1 | -1) => {
		const el = scrollRef.current;
		if (!el) return;
		
		const getStep = () => {
			const card = el.querySelector('.carousel-slide') as HTMLElement | null;
			if (card) return card.offsetWidth + 40; // include gap and padding approx
			return 400;
		};

		const step = getStep();
		const current = el.scrollLeft;
		const totalCards = 6;
		
		// Calculate current card index
		let currentIndex = Math.round(current / step);
		
		// Check bounds before moving and don't move if at edge
		if (dir > 0 && currentIndex >= totalCards - 1) {
			// Already at last card, don't move (bounce back)
			return;
		} else if (dir < 0 && currentIndex <= 0) {
			// Already at first card, don't move (bounce back)
			return;
		}
		
		// Move to next/prev card only if within bounds
		currentIndex += dir;
		
		// Normal scroll to target card
		el.scrollTo({ left: currentIndex * step, behavior: 'smooth' });
	};

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		let isDown = false;
		let startX = 0;
		let scrollLeft = 0;
		let rafId: number | null = null;
		let pendingDelta = 0;

				const onMouseDown = (e: MouseEvent) => {
			isDown = true;
			el.classList.add('dragging');
			// Disable scroll snap via style for extra smoothness (CSS also handles via .dragging)
			el.style.setProperty('scroll-snap-type', 'none');
					{
						const rect = el.getBoundingClientRect();
						startX = e.clientX - rect.left;
					}
			scrollLeft = el.scrollLeft;
		};

		const onMouseLeave = () => {
			isDown = false;
			el.classList.remove('dragging');
			el.style.removeProperty('scroll-snap-type');
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
				pendingDelta = 0;
			}
		};

		const onMouseUp = () => {
			isDown = false;
			el.classList.remove('dragging');
			el.style.removeProperty('scroll-snap-type');
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
				pendingDelta = 0;
			}
		};

				const onMouseMove = (e: MouseEvent) => {
			if (!isDown) return;
			e.preventDefault();
					const rect = el.getBoundingClientRect();
					const x = e.clientX - rect.left;
			const walk = (x - startX); // pixel delta
			pendingDelta = scrollLeft - walk;
			if (rafId === null) {
				rafId = requestAnimationFrame(() => {
					el.scrollLeft = pendingDelta;
					rafId = null;
				});
			}
		};

		el.addEventListener('mousedown', onMouseDown);
		el.addEventListener('mouseleave', onMouseLeave);
		el.addEventListener('mouseup', onMouseUp);
		el.addEventListener('mousemove', onMouseMove);

		// Touch support
		let touchStartX = 0;
		let touchScrollLeft = 0;
		const onTouchStart = (e: TouchEvent) => {
			touchStartX = e.touches[0].pageX;
			touchScrollLeft = el.scrollLeft;
			el.classList.add('dragging');
			el.style.setProperty('scroll-snap-type', 'none');
		};
				const onTouchMove = (e: TouchEvent) => {
					e.preventDefault();
					const x = e.touches[0].pageX;
			const walk = (x - touchStartX);
			pendingDelta = touchScrollLeft - walk;
			if (rafId === null) {
				rafId = requestAnimationFrame(() => {
					el.scrollLeft = pendingDelta;
					rafId = null;
				});
			}
		};
		const onTouchEnd = () => {
			el.classList.remove('dragging');
			el.style.removeProperty('scroll-snap-type');
			if (rafId) {
				cancelAnimationFrame(rafId);
				rafId = null;
				pendingDelta = 0;
			}
		};

		el.addEventListener('touchstart', onTouchStart as EventListener, { passive: true });
		// Use non-passive to allow preventDefault if needed on some devices
		el.addEventListener('touchmove', onTouchMove as EventListener, { passive: false });
		el.addEventListener('touchend', onTouchEnd as EventListener, { passive: true });

		// Global keyboard navigation without requiring focus/click
		const onKeyDown = (e: KeyboardEvent) => {
			if (!el) return;
			if (e.repeat) return; // we manage repeat manually
			if (e.key === 'ArrowRight') {
				scrollToNearestSnap(1);
			} else if (e.key === 'ArrowLeft') {
				scrollToNearestSnap(-1);
			}
		};
		const onKeyUp = () => {
			// Key up handler - no specific action needed for carousel navigation
		};
		window.addEventListener('keydown', onKeyDown);
		window.addEventListener('keyup', onKeyUp);

		return () => {
			el.removeEventListener('mousedown', onMouseDown);
			el.removeEventListener('mouseleave', onMouseLeave);
			el.removeEventListener('mouseup', onMouseUp);
			el.removeEventListener('mousemove', onMouseMove);
			el.removeEventListener('touchstart', onTouchStart as EventListener);
			el.removeEventListener('touchmove', onTouchMove as EventListener);
			el.removeEventListener('touchend', onTouchEnd as EventListener);
			window.removeEventListener('keydown', onKeyDown);
			window.removeEventListener('keyup', onKeyUp);
		};
	}, []);
	const features = [
		{
			id: 1,
			title: "Number 1 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/1.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		},
		{
			id: 2,
			title: "Number 2 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/2.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		},
		{
			id: 3,
			title: "Number 2.1 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/2.1.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		},
		{
			id: 4,
			title: "Number 2.3 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/2.3.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		},
		{
			id: 5,
			title: "Number 3 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/3.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		},
		{
			id: 6,
			title: "Number 4 Feature",
			description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et",
			image: "/src/assets/4.png",
			bulletPoints: [
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature",
				"Bulleted Feature"
			]
		}
	];

	return (

		<>
			{/* Hero Section */}
			<section className="py-16 flex items-center" style={{ backgroundColor: '#61CCB2' }}>
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Features</h1>
					<p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl">
						Everything you need to create structured, stress-free daily routines, all in one simple app.
					</p>
				</div>
			</section>

			{/* Carousel Features Section */}
						<section className="carousel-section relative overflow-hidden" style={{ backgroundColor: '#E8F5F1' }}>
				{/* Main Carousel Section */}
				<div className="py-16">
					<div ref={scrollRef} className="overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none z-0">
						<div className="animate-scroll flex gap-10 px-8">
							{/* Single array with true infinite loop */}
							{features.map((feature, index) => (
								<div key={`${feature.id}-${index}`} className="carousel-slide shrink-0 snap-center">
									{/* Feature Box with Phone Inside on Left */}
									<div className="flex gap-8 p-8 shadow-lg w-[900px]" style={{ backgroundColor: '#B8D5C7' }}>
										{/* Phone Image on Left Side */}
										<div className="flex items-center justify-center shrink-0">
											<img 
												src={feature.image} 
												alt={feature.title}
												className="w-40 h-auto object-contain"
											/>
										</div>
									
										{/* Feature Content on Right Side */}
										<div className="flex-1">
											<div className="flex items-center mb-6">
												<div className="w-8 h-8 rounded-full mr-4 flex items-center justify-center" style={{ backgroundColor: '#61CCB2' }}>
													<div className="w-4 h-4 bg-white rounded-full"></div>
												</div>
												<h3 className="text-3xl font-bold" style={{ color: '#4A5D5A' }}>
													{feature.title}
												</h3>
											</div>
											<p className="text-gray-700 text-lg mb-7 leading-relaxed">
												{feature.description}
											</p>
											<ul className="space-y-3">
												{feature.bulletPoints.map((point, idx) => (
													<li key={idx} className="flex items-center text-lg text-gray-700">
														<div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#61CCB2' }}></div>
														{point}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);

}
