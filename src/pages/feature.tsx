import PhoneImg from '../assets/1.png';
import StarIcon from '../assets/Star.png';
import DownloadIcon from '../assets/Download.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Features() {
	useEffect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('section'));
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;
					const headings = Array.from(el.querySelectorAll<HTMLElement>('h1,h2,h3'));
					const texts = Array.from(el.querySelectorAll<HTMLElement>('p,li'));
					const buttons = Array.from(el.querySelectorAll<HTMLElement>('a,button'));
					const cards = Array.from(el.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl,.rounded-4xl'));

					if (entry.isIntersecting) {
						headings.forEach((node, idx) => {
							const delay = Math.min(idx * 90, 450);
							node.style.transition = `transform 850ms cubic-bezier(.16,.68,.44,1.02) ${delay}ms, opacity 850ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translate(0,0) scale(1) rotate(0deg)';
						});
						texts.forEach((node, idx) => {
							const delay = Math.min(idx * 70, 420);
							node.style.transition = `transform 780ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 780ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						buttons.forEach((node, idx) => {
							const delay = Math.min(idx * 80, 480);
							node.style.transition = `transform 720ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 720ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1)';
						});
						cards.forEach((node, idx) => {
							const delay = Math.min(idx * 85, 510);
							node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 900ms ease-out ${delay}ms`;
							node.style.opacity = '1';
							node.style.transform = 'translateY(0) scale(1) rotate(0deg)';
						});
					} else {
						headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-40px,-20px) scale(.92) rotate(-3deg)'; });
						texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(32px) scale(.94)'; });
						buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
						cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88) rotate(2deg)'; });
					}
				});
			},
			{ threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
		);

		sections.forEach((section) => {
			const headings = Array.from(section.querySelectorAll<HTMLElement>('h1,h2,h3'));
			const texts = Array.from(section.querySelectorAll<HTMLElement>('p,li'));
			const buttons = Array.from(section.querySelectorAll<HTMLElement>('a,button'));
			const cards = Array.from(section.querySelectorAll<HTMLElement>('.rounded-3xl,.rounded-2xl,.rounded-4xl'));

			headings.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translate(-40px,-20px) scale(.92) rotate(-3deg)'; });
			texts.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(32px) scale(.94)'; });
			buttons.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(28px) scale(.9)'; });
			cards.forEach((node) => { node.style.opacity = '0'; node.style.transform = 'translateY(48px) scale(.88) rotate(2deg)'; });

			observer.observe(section);

			const rect = section.getBoundingClientRect();
			const vh = window.innerHeight || document.documentElement.clientHeight;
			if (rect.top < vh && rect.bottom > 0) {
				headings.forEach((node, idx) => {
					const delay = Math.min(idx * 90, 450);
					node.style.transition = `transform 850ms cubic-bezier(.16,.68,.44,1.02) ${delay}ms, opacity 850ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translate(0,0) scale(1) rotate(0deg)';
				});
				texts.forEach((node, idx) => {
					const delay = Math.min(idx * 70, 420);
					node.style.transition = `transform 780ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 780ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1)';
				});
				buttons.forEach((node, idx) => {
					const delay = Math.min(idx * 80, 480);
					node.style.transition = `transform 720ms cubic-bezier(.19,1,.22,1) ${delay}ms, opacity 720ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1)';
				});
				cards.forEach((node, idx) => {
					const delay = Math.min(idx * 85, 510);
					node.style.transition = `transform 900ms cubic-bezier(.23,1,.32,1) ${delay}ms, opacity 900ms ease-out ${delay}ms`;
					node.style.opacity = '1';
					node.style.transform = 'translateY(0) scale(1) rotate(0deg)';
				});
			}
		});

		return () => observer.disconnect();
	}, []);
	return (
		<div className="scroll-smooth overflow-x-hidden">
			{/* Hero Section */}
			<section data-reveal>
				{/* Hero Content */}
				<div className="mt-4 pt-20 pb-20 flex items-center" style={{ backgroundColor: '#61CCB2' }}>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Features</h1>
						<p className="max-w-3xl mx-auto text-xl md:text-2xl text-white leading-relaxed">
							Everything you need to create structured, stress-free daily routines, all in one simple app.
						</p>
					</div>
				</div>
			</section>
				
	{/* Features Overview Section */}
	<section className="py-4 px-4 bg-white min-h-screen flex items-center" data-reveal>
		<div className="w-full max-w-7xl mx-auto relative">
		<div className="hidden lg:grid lg:grid-cols-3 gap-x-0 items-center">
			{/* Left Column - Cards */}
			<div className="col-span-1 flex flex-col justify-end space-y-5">
				<div className="relative ml-auto group cursor-pointer">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
							<div className="flex items-center gap-3 mb-4">
								<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
									<img src={StarIcon} alt="Star" className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
									Autism Friendly
								</h3>
								</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The ui design was integrated to suit people with Autism or <span className="underline">Autism Spectrum Disorder (ASD)</span>
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Big Ui components</span>
									</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Audio Visual Feedback</span>
									</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Animated Characters</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="relative ml-auto group cursor-pointer">
							<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
							<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								Parental Control
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The System has built in parental control to guide every childrens action
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Parental Lock</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Daily Routine Setup</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Limited media search</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

			{/* Center Column - Phone Image */}
				<div className="col-span-1 flex justify-center">
							<img 
								src={PhoneImg} 
								alt="Ritmo App Phone" 
								className="w-full max-w-xs h-auto object-contain"
								style={{ filter: 'drop-shadow(-6px 6px 0px rgba(128, 128, 128, 0.5))' }}
							/>
				</div>

			{/* Right Column - Cards */}
			<div className="col-span-1 flex flex-col space-y-5">
				<div className="relative group cursor-pointer">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								Entertainment
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The System has built in games, media and book guides to enhance interaction and fun.
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Fun and enjoying games</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Audio visual book guides</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Media page (Youtube)</span>
								</li>
						</ul>
					</div>
				</div>
				<div className="relative group cursor-pointer">
					<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-72 h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
					<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-72 h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
						<div className="flex items-center gap-3 mb-4">
							<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
								<img src={StarIcon} alt="Star" className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
							Progression
								</h3>
							</div>
							<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>
								The app has a built in progress report that records your child routine weekly
							</p>
							<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
								<li className="flex items-start">
									<span className="mr-3">●</span>
									<span>Downloadable PDF Report</span>
								</li>
							</ul>
						</div>
				</div>
			</div>
							</div>
		
		{/* Mobile & Tablet Layout */}
		<div className="lg:hidden flex flex-col items-center gap-6 py-8">
			{/* All cards in vertical stack on mobile/tablet */}
			<div className="relative w-72 group cursor-pointer">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
						</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Autism Friendly</h3>
					</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The ui design was integrated to suit people with Autism or <span className="underline">Autism Spectrum Disorder (ASD)</span></p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Big Ui components</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Audio Visual Feedback</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Animated Characters</span></li>
					</ul>
				</div>
			</div>
			
		
		<div className="relative w-72 group cursor-pointer">
			<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
			<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
				<div className="flex items-center gap-3 mb-4">
					<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
						<img src={StarIcon} alt="Star" className="w-6 h-6" />
					</div>
					<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Entertainment</h3>
				</div>
				<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The System has built in games, media and book guides to enhance interaction and fun.</p>
				<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
					<li className="flex items-start"><span className="mr-3">●</span><span>Fun and enjoying games</span></li>
					<li className="flex items-start"><span className="mr-3">●</span><span>Audio visual book guides</span></li>
					<li className="flex items-start"><span className="mr-3">●</span><span>Media page (Youtube)</span></li>
				</ul>
			</div>
		</div>			<img 
				src={PhoneImg} 
				alt="Ritmo App Phone" 
				className="w-64 h-auto object-contain"
				style={{ filter: 'drop-shadow(-6px 6px 0px rgba(128, 128, 128, 0.5))' }}
			/>
			
			<div className="relative w-72 group cursor-pointer">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
						</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Parental Control</h3>
					</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The System has built in parental control to guide every childrens action</p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Parental Lock</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Daily Routine Setup</span></li>
						<li className="flex items-start"><span className="mr-3">●</span><span>Limited media search</span></li>
					</ul>
								</div>
							</div>

			<div className="relative w-72 group cursor-pointer">
				<div className="absolute -bottom-1 -left-1 bg-gray-400 rounded-4xl w-full h-72 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
				<div className="relative bg-[#B8E6DC] rounded-4xl p-8 w-full h-72 flex flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-2 group-hover:ring-[#61CCB2]">
					<div className="flex items-center gap-3 mb-4">
						<div className="bg-[#61CCB2] rounded-2xl p-2 shrink-0">
							<img src={StarIcon} alt="Star" className="w-6 h-6" />
								</div>
						<h3 className="text-xl font-bold flex-1 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>Progression</h3>
								</div>
					<p className="text-base mb-4 wrap-break-word leading-tight" style={{ color: '#2B2B2B' }}>The app has a built in progress report that records your child routine weekly</p>
					<ul className="space-y-1 text-base leading-snug" style={{ color: '#2B2B2B' }}>
						<li className="flex items-start"><span className="mr-3">●</span><span>Downloadable PDF Report</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
	</section>

	{/* How Ritmo Works Section */}
	{/* How Ritmo Works header (align styling to News/Contact hero) */}
	<section id="how-ritmo-works" className="py-8 px-4" style={{ backgroundColor: '#61CCB2' }} data-reveal>
		<div className="max-w-7xl mx-auto text-center">
			<h2 className="text-4xl font-bold mb-1 text-white">How Ritmo Works</h2>
			<p className="text-lg text-white">Watch How Ritmo Works</p>
		</div>
	</section>

	{/* How Ritmo Works content (video) */}
	<section className="py-6 px-4 bg-white" data-reveal>
		<div className="max-w-7xl mx-auto">
			<div className="relative bg-gray-400 rounded-3xl overflow-hidden" style={{ paddingBottom: '42%' }}>
				<video
					className="absolute inset-0 w-full h-full object-cover"
					controls
					src="https://www.w3schools.com/html/mov_bbb.mp4"
					aria-label="How Ritmo Works sample video"
				/>
			</div>
		</div>
	</section>

	{/* Experience All Features Section */}
	<section className="py-4 bg-white" data-reveal>
		<div className="w-full" style={{ backgroundColor: '#61CCB2' }}>
			<div className="max-w-7xl mx-auto text-center py-12 px-6">
				<h2 className="text-4xl font-extrabold mb-3 text-white">Experience All Features</h2>
				<p className="text-lg mb-6 text-white">
							Download Ritmo today and see how simple routines can bring calm, confidence, and independence.
						</p>
				<div className="flex justify-center">
					<Link
						to="/download"
						className="flex items-center justify-center gap-2 w-48 py-4 bg-white hover:bg-gray-50 text-[#2B8A7A] font-semibold rounded-full shadow-lg border-2 border-white transition-all focus:outline-none focus:ring-4 focus:ring-white/60"
					>
						<img src={DownloadIcon} alt="Download" className="w-5 h-5" />
							Download Now
					</Link>
				</div>
					</div>
				</div>
			</section>

	<section className="py-6 bg-white"></section>
		</div>
	);
}
